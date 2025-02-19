/*! For license information please see vrwebui_shared.js.LICENSE.txt */
"use strict";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [683],
  {
    4614: (e, t, n) => {
      var i;
      n.d(t, { R: () => i }),
        n(3019).Message,
        (function (e) {
          (e[(e.k_SteamVRMutualCapability_Unknown = 0)] =
            "k_SteamVRMutualCapability_Unknown"),
            (e[(e.k_SteamVRMutualCapability_VRGamepadUI = 1)] =
              "k_SteamVRMutualCapability_VRGamepadUI"),
            (e[
              (e.k_SteamVRMutualCapability_SupportForDashboardTabsInDashboardMenu = 2)
            ] =
              "k_SteamVRMutualCapability_SupportForDashboardTabsInDashboardMenu"),
            (e[
              (e.k_SteamVRMutualCapability_SupportForActionSpecialInvocation_Volume = 3)
            ] =
              "k_SteamVRMutualCapability_SupportForActionSpecialInvocation_Volume"),
            (e[
              (e.k_SteamVRMutualCapability_SupportForVRGamepadUIViaGamescope = 4)
            ] = "k_SteamVRMutualCapability_SupportForVRGamepadUIViaGamescope"),
            (e[
              (e.k_SteamVRMutualCapability_SupportForActionsInDashboardMenu = 5)
            ] = "k_SteamVRMutualCapability_SupportForActionsInDashboardMenu"),
            (e[(e.k_SteamVRMutualCapability_SupportForSteamPowerMenu = 6)] =
              "k_SteamVRMutualCapability_SupportForSteamPowerMenu"),
            (e[
              (e.k_SteamVRMutualCapability_SupportForPopupRequestParentEnum = 7)
            ] = "k_SteamVRMutualCapability_SupportForPopupRequestParentEnum"),
            (e[
              (e.k_SteamVRMutualCapability_SupportForDashboardActionMenus = 8)
            ] = "k_SteamVRMutualCapability_SupportForDashboardActionMenus");
        })(i || (i = {}));
    },
    6346: (e, t, n) => {
      n.d(t, {
        Cj: () => a,
        D3: () => p,
        Hr: () => c,
        I_: () => d,
        JN: () => v,
        Jl: () => S,
        cH: () => u,
        fY: () => _,
        mw: () => r,
        w7: () => l,
        yt: () => g,
        z3: () => m,
      });
      var i = n(3019),
        s = n(7047);
      const o = i.Message;
      var r, a, l, c;
      !(function (e) {
        (e[(e.k_EVRDashboardTabIcon_Unknown = 0)] =
          "k_EVRDashboardTabIcon_Unknown"),
          (e[(e.k_EVRDashboardTabIcon_Steam = 1)] =
            "k_EVRDashboardTabIcon_Steam"),
          (e[(e.k_EVRDashboardTabIcon_DesktopDisplay = 2)] =
            "k_EVRDashboardTabIcon_DesktopDisplay"),
          (e[(e.k_EVRDashboardTabIcon_Cog = 3)] = "k_EVRDashboardTabIcon_Cog"),
          (e[(e.k_EVRDashboardTabIcon_RunningGame = 4)] =
            "k_EVRDashboardTabIcon_RunningGame"),
          (e[(e.k_EVRDashboardTabIcon_DesktopWindow = 5)] =
            "k_EVRDashboardTabIcon_DesktopWindow");
      })(r || (r = {})),
        (function (e) {
          (e[(e.k_EVRDashboardActionIcon_Unknown = 0)] =
            "k_EVRDashboardActionIcon_Unknown"),
            (e[(e.k_EVRDashboardActionIcon_RoomViewOn = 1)] =
              "k_EVRDashboardActionIcon_RoomViewOn"),
            (e[(e.k_EVRDashboardActionIcon_RoomViewOff = 2)] =
              "k_EVRDashboardActionIcon_RoomViewOff"),
            (e[(e.k_EVRDashboardActionIcon_Recenter = 3)] =
              "k_EVRDashboardActionIcon_Recenter"),
            (e[(e.k_EVRDashboardActionIcon_PeopleOn = 4)] =
              "k_EVRDashboardActionIcon_PeopleOn"),
            (e[(e.k_EVRDashboardActionIcon_PeopleOff = 5)] =
              "k_EVRDashboardActionIcon_PeopleOff"),
            (e[(e.k_EVRDashboardActionIcon_DarkModeOn = 6)] =
              "k_EVRDashboardActionIcon_DarkModeOn"),
            (e[(e.k_EVRDashboardActionIcon_DarkModeOff = 7)] =
              "k_EVRDashboardActionIcon_DarkModeOff"),
            (e[(e.k_EVRDashboardActionIcon_DisplayOn = 8)] =
              "k_EVRDashboardActionIcon_DisplayOn"),
            (e[(e.k_EVRDashboardActionIcon_DisplayOff = 9)] =
              "k_EVRDashboardActionIcon_DisplayOff"),
            (e[(e.k_EVRDashboardActionIcon_ExitVR = 10)] =
              "k_EVRDashboardActionIcon_ExitVR"),
            (e[(e.k_EVRDashboardActionIcon_Shutdown = 11)] =
              "k_EVRDashboardActionIcon_Shutdown"),
            (e[(e.k_EVRDashboardActionIcon_PlayspaceSetup = 12)] =
              "k_EVRDashboardActionIcon_PlayspaceSetup"),
            (e[(e.k_EVRDashboardActionIcon_FloorHeight = 13)] =
              "k_EVRDashboardActionIcon_FloorHeight");
        })(a || (a = {}));
      class d extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            d.prototype.enum || s.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  enum: { n: 1, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  appid: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  overlay: { n: 3, br: s.FE.readString, bw: s.Xc.writeString },
                  hwnd: { n: 4, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardTabIcon";
        }
      }
      class u extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            u.prototype.tabs || s.aR(u.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  tabs: { n: 1, c: p, r: !0, q: !0 },
                  selected_tab_id: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  vr_settings_tab_id: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  vr_steam_tab_id: {
                    n: 4,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_tabs";
        }
        getVRPathPropertyKey() {
          return u.getVRPathPropertyKey();
        }
      }
      class p extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            p.prototype.tab_id || s.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  tab_id: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  display_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  icon: { n: 4, c: d },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  visible_in_dashboard_menu: {
                    n: 5,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs_Tab";
        }
      }
      class h extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            h.prototype.enum || s.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  enum: { n: 1, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardActionIcon";
        }
      }
      class m extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            m.prototype.action_id || s.aR(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  action_id: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  enabled: { n: 3, br: s.FE.readBool, bw: s.Xc.writeBool },
                  display_name: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  visible_in_menu: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  is_menu: { n: 11, br: s.FE.readBool, bw: s.Xc.writeBool },
                  parent_menu_action_id: {
                    n: 12,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  icon: { n: 5, c: h },
                  icon_active: { n: 6, c: h },
                  invocation: {
                    n: 7,
                    d: l.k_EVRDashboardActionInvocation_Trigger,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  special_invocation: {
                    n: 9,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  active: { n: 8, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardAction";
        }
      }
      !(function (e) {
        (e[(e.k_EVRDashboardActionInvocation_Trigger = 1)] =
          "k_EVRDashboardActionInvocation_Trigger"),
          (e[(e.k_EVRDashboardActionInvocation_Toggle = 2)] =
            "k_EVRDashboardActionInvocation_Toggle"),
          (e[(e.k_EVRDashboardActionInvocation_Special = 3)] =
            "k_EVRDashboardActionInvocation_Special");
      })(l || (l = {})),
        (function (e) {
          e[(e.k_EVRDashboardActionSpecialInvocation_Volume = 1)] =
            "k_EVRDashboardActionSpecialInvocation_Volume";
        })(c || (c = {}));
      class g extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            g.prototype.actions || s.aR(g.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { actions: { n: 1, c: m, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardActions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_actions";
        }
        getVRPathPropertyKey() {
          return g.getVRPathPropertyKey();
        }
      }
      class S extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            S.prototype.windows || s.aR(S.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { windows: { n: 1, c: _, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new S();
          return S.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/desktop_windows";
        }
        getVRPathPropertyKey() {
          return S.getVRPathPropertyKey();
        }
      }
      class _ extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            _.prototype.window_id || s.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  window_id: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  hwnd: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  title: { n: 3, br: s.FE.readString, bw: s.Xc.writeString },
                  tab_id: { n: 4, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows_Window";
        }
      }
      class v extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            v.prototype.can_sleep || s.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  can_sleep: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  can_shutdown: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  can_restart_system: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  can_exitvr: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new v();
          return v.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_PowerOptions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/power_options";
        }
        getVRPathPropertyKey() {
          return v.getVRPathPropertyKey();
        }
      }
    },
    4820: (e, t, n) => {
      n.d(t, {
        Al: () => V,
        Cj: () => l,
        Ex: () => p,
        Qd: () => c,
        Vg: () => r,
        pD: () => a,
        rz: () => u,
        x2: () => F,
      });
      var i = n(3019),
        s = n(7047);
      const o = i.Message;
      class r extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            r.prototype.name || s.aR(r.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            r.sm_m ||
              (r.sm_m = {
                proto: r,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  message_id: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  response_to_message_id: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  is_error_response: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            r.sm_m
          );
        }
        static MBF() {
          return r.sm_mbf || (r.sm_mbf = s.Bh(r.M())), r.sm_mbf;
        }
        toObject(e = !1) {
          return r.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(r.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(r.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new r();
          return r.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(r.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(r.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Header";
        }
      }
      class a extends (865 != n.j ? o : null) {
        constructor(e = null) {
          super(),
            a.prototype.error || s.aR(a.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  error: { n: 1, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  description: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  origin: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = s.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Error_Response";
        }
      }
      var l, c, d, u;
      function p(e) {
        return (
          "unknown CVRGamepadUI_Message_Error_Response_ErrorCode ( " + e + " )"
        );
      }
      !(function (e) {
        (e[(e.k_CVRGamepadUI_Message_ErrorCode_Other = 0)] =
          "k_CVRGamepadUI_Message_ErrorCode_Other"),
          (e[(e.k_CVRGamepadUI_Message_ErrorCode_UnknownMethod = 1)] =
            "k_CVRGamepadUI_Message_ErrorCode_UnknownMethod"),
          (e[(e.k_CVRGamepadUI_Message_ErrorCode_Exception = 2)] =
            "k_CVRGamepadUI_Message_ErrorCode_Exception"),
          (e[(e.k_CVRGamepadUI_Message_ErrorCode_Rejection = 3)] =
            "k_CVRGamepadUI_Message_ErrorCode_Rejection"),
          (e[(e.k_CVRGamepadUI_Message_ErrorCode_NotConnected = 4)] =
            "k_CVRGamepadUI_Message_ErrorCode_NotConnected"),
          (e[(e.k_CVRGamepadUI_Message_ErrorCode_TimedOut = 5)] =
            "k_CVRGamepadUI_Message_ErrorCode_TimedOut"),
          (e[(e.k_CVRGamepadUI_Message_ErrorCode_SerializationFailed = 6)] =
            "k_CVRGamepadUI_Message_ErrorCode_SerializationFailed"),
          (e[(e.k_CVRGamepadUI_Message_ErrorCode_DeserializationFailed = 7)] =
            "k_CVRGamepadUI_Message_ErrorCode_DeserializationFailed");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_CVRGamepadUI_Message_ErrorOrigin_Unknown = 0)] =
            "k_CVRGamepadUI_Message_ErrorOrigin_Unknown"),
            (e[(e.k_CVRGamepadUI_Message_ErrorOrigin_Local = 1)] =
              "k_CVRGamepadUI_Message_ErrorOrigin_Local"),
            (e[(e.k_CVRGamepadUI_Message_ErrorOrigin_Remote = 2)] =
              "k_CVRGamepadUI_Message_ErrorOrigin_Remote");
        })(c || (c = {}));
      class h extends o {
        constructor(e = null) {
          super(),
            h.prototype.tab_id || s.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  tab_id: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Request";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Response";
        }
      }
      class g extends o {
        constructor(e = null) {
          super(),
            g.prototype.action_id || s.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  action_id: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  toggle_value: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new S();
          return S.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Response";
        }
      }
      class _ extends o {
        constructor(e = null) {
          super(),
            _.prototype.window_id || s.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  window_id: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new v();
          return v.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Response";
        }
      }
      class y extends o {
        constructor(e = null) {
          super(),
            y.prototype.dashboard_popup_request_id || s.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  dashboard_popup_request_id: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  popup_overlay_key: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  parent_enum: { n: 15, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  parent_overlay_key: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  parent_device_path: {
                    n: 13,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  origin_on_parent: { n: 4, c: b },
                  origin_on_popup: { n: 5, c: b },
                  offset: { n: 6, c: f },
                  rotation: { n: 7, c: C },
                  inherit_parent_pitch: {
                    n: 8,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  inherit_parent_curvature: {
                    n: 9,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  clip_rect: { n: 10, c: w },
                  interactive: { n: 11, br: s.FE.readBool, bw: s.Xc.writeBool },
                  requires_laser: {
                    n: 12,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  sort_order: { n: 14, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new y();
          return y.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request";
        }
      }
      !(function (e) {
        (e[(e.k_eInvalid = 0)] = "k_eInvalid"),
          (e[(e.k_eTheaterControls = 1)] = "k_eTheaterControls");
      })(d || (d = {})),
        (function (e) {
          (e[(e.k_eDefault = 0)] = "k_eDefault"),
            (e[(e.k_eQRPopup = 1)] = "k_eQRPopup");
        })(u || (u = {}));
      class b extends o {
        constructor(e = null) {
          super(),
            b.prototype.x || s.aR(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  x: { n: 1, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  y: { n: 2, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new b();
          return b.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition";
        }
      }
      class f extends o {
        constructor(e = null) {
          super(),
            f.prototype.x_pixels || s.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  x_pixels: { n: 1, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  y_pixels: { n: 2, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  z_pixels: { n: 3, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  x_meters: { n: 4, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  y_meters: { n: 5, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  z_meters: { n: 6, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new f();
          return f.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Position";
        }
      }
      class C extends o {
        constructor(e = null) {
          super(),
            C.prototype.pitch_degrees || s.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  pitch_degrees: {
                    n: 1,
                    br: s.FE.readFloat,
                    bw: s.Xc.writeFloat,
                  },
                  yaw_degrees: {
                    n: 2,
                    br: s.FE.readFloat,
                    bw: s.Xc.writeFloat,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = s.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new C();
          return C.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation";
        }
      }
      class w extends o {
        constructor(e = null) {
          super(),
            w.prototype.u_min || s.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  u_min: { n: 1, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  v_min: { n: 2, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  u_max: { n: 3, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                  v_max: { n: 4, br: s.FE.readFloat, bw: s.Xc.writeFloat },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new w();
          return w.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new R();
          return R.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Response";
        }
      }
      class A extends o {
        constructor(e = null) {
          super(),
            A.prototype.dashboard_popup_request_id || s.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  dashboard_popup_request_id: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = s.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new A();
          return A.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Request";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new M();
          return M.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Response";
        }
      }
      class k extends o {
        constructor(e = null) {
          super(),
            k.prototype.source_accountid || s.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  source_accountid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  video_uniqueid: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = s.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new k();
          return k.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Request";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new B();
          return B.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Response";
        }
      }
      class E extends o {
        constructor(e = null) {
          super(),
            E.prototype.overlay_key || s.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new E();
          return E.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Request";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new T();
          return T.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Response";
        }
      }
      class I extends o {
        constructor(e = null) {
          super(),
            I.prototype.overlay_key || s.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new I();
          return I.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Request";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new D();
          return D.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Response";
        }
      }
      class O extends o {
        constructor(e = null) {
          super(),
            O.prototype.url || s.aR(O.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  url: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = s.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new O();
          return O.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Request";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new L();
          return L.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Response";
        }
      }
      const V = {
        "DashboardTabClicked#1": {
          msgClassRequest_t: h,
          msgClassResponse_t: m,
          strMethod: "DashboardTabClicked",
        },
        "DashboardActionInvoked#1": {
          msgClassRequest_t: g,
          msgClassResponse_t: S,
          strMethod: "DashboardActionInvoked",
        },
        "DashboardDesktopWindowClicked#1": {
          msgClassRequest_t: _,
          msgClassResponse_t: v,
          strMethod: "DashboardDesktopWindowClicked",
        },
        "ShowDashboardPopup#1": {
          msgClassRequest_t: y,
          msgClassResponse_t: R,
          strMethod: "ShowDashboardPopup",
        },
        "HideDashboardPopup#1": {
          msgClassRequest_t: A,
          msgClassResponse_t: M,
          strMethod: "HideDashboardPopup",
        },
        "RemoteVideoStream#1": {
          msgClassRequest_t: k,
          msgClassResponse_t: B,
          strMethod: "RemoteVideoStream",
        },
        "ShowGame#1": {
          msgClassRequest_t: E,
          msgClassResponse_t: T,
          strMethod: "ShowGame",
        },
        "ShowOverlay#1": {
          msgClassRequest_t: I,
          msgClassResponse_t: D,
          strMethod: "ShowOverlay",
        },
      };
      class F {
        constructor(e) {
          this.m_Client = e;
        }
        ExecuteSteamURL(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "ExecuteSteamURL#1",
            O.fromObject(null != e ? e : {}),
            L,
          );
        }
      }
    },
    1509: (e, t, n) => {
      n.d(t, { _: () => ve });
      var i = n(655),
        s = n(1569),
        o = n(7056),
        r = n(6459),
        a = n(2188),
        l = n(7062),
        c = n(7294),
        d = n(5177),
        u = n(9755),
        p = n(7475),
        h = n(7176),
        m = n(3568),
        g = n(8980),
        S = n(1628),
        _ = n(8242),
        v = n(3010);
      let y = class extends _.d9 {
        constructor(e) {
          super(e),
            (this.m_audioDeviceChangedEventHandle = null),
            (this.state = this.defaultState);
        }
        get defaultState() {
          return {};
        }
        componentDidMount() {
          this.m_audioDeviceChangedEventHandle =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.RegisterForAudioDeviceChangedEvents(
                  this.onAudioDeviceChanged,
                );
        }
        onAudioDeviceChanged() {}
        getHmdAudioSettingsKey(e) {
          return (
            "/settings/audio/" +
            S.G3.audioDevices.hmd_settings_key.replace("{setting}", e)
          );
        }
        temporaryDropdownOverride(e, t) {
          e.indexOf("Mirror") >= 0
            ? (S.G3.audioDevices.selected_mirror_device = t)
            : e.indexOf("playback") >= 0
              ? (S.G3.audioDevices.selected_playback_device = t)
              : e.indexOf("recording") >= 0 &&
                (S.G3.audioDevices.selected_recording_device = t);
        }
        setDeviceSetting(e, t, n) {
          n &&
            (S.G3.SetSettingsValue(e, n.guid),
            S.G3.SetSettingsValue(t, n.name),
            this.temporaryDropdownOverride(e, n.guid));
        }
        setDeviceOverride(e, t) {
          this.setDeviceSetting(
            this.getHmdAudioSettingsKey(e),
            this.getHmdAudioSettingsKey(e + "Name"),
            t,
          );
        }
        getAudioDevice(e) {
          return e
            ? S.G3.audioDevices.playback_devices
                .concat(S.G3.audioDevices.record_devices)
                .find((t) => t.guid == e)
            : { guid: "", name: "" };
        }
        onOverrideDeviceDropdownChanged(e, t) {
          this.setDeviceOverride(e, this.getAudioDevice(t));
        }
        onMirrorDeviceDropdownChanged(e) {
          this.setDeviceSetting(
            "/settings/audio/playbackMirrorDevice",
            "/settings/audio/playbackMirrorDeviceName",
            this.getAudioDevice(e),
          );
        }
        makeDeviceChoiceList(e) {
          let t = [];
          t.push({ value: "", sLabel: (0, m.Xx)("#Settings_Audio_Default") }),
            t.push(v.Kr.Separator);
          for (let n of e) t.push({ value: n.guid, sLabel: n.name });
          return t;
        }
        render() {
          var e, t;
          if (!this.props.active) return null;
          if (void 0 === S.G3.audioDevices) return null;
          let n =
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetBoolProperty(
                        "/user/head",
                        s.Uk.Audio_SupportsDualSpeakerAndJackOutput_Bool,
                      )) &&
              void 0 !== e &&
              e,
            i =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetBoolProperty(
                        "/user/head",
                        s.Uk.Hmd_SupportsMicMonitoring_Bool,
                      )) &&
              void 0 !== t &&
              t,
            o = !1;
          try {
            o =
              "htc" ==
                S.G3.settings
                  .get("/settings/LastKnown/HMDManufacturer")
                  .toLowerCase() &&
              S.G3.settings
                .get("/settings/LastKnown/HMDModel")
                .toLowerCase()
                .indexOf("vive") >= 0;
          } catch (e) {}
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.wy, {
              name: this.getHmdAudioSettingsKey("enablePlaybackDeviceOverride"),
              label: (0, m.Xx)("#Settings_Audio_Playback_Automatic_Label"),
              offLabel: (0, m.Xx)("#Settings_Audio_Headset"),
              onLabel: (0, m.Xx)("#Settings_Audio_Manual"),
              onSubsection: c.createElement(_.Xp, {
                items: this.makeDeviceChoiceList(
                  S.G3.audioDevices.playback_devices,
                ),
                value: S.G3.audioDevices.selected_playback_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "playbackDeviceOverride",
                ),
                defaultLabel: (0, m.Xx)(
                  "#Settings_Audio_Current_Setting_Unknown",
                ),
              }),
            }),
            c.createElement(_.wy, {
              name: this.getHmdAudioSettingsKey(
                "enableRecordingDeviceOverride",
              ),
              label: (0, m.Xx)("#Settings_Audio_Recording_Automatic_Label"),
              offLabel: (0, m.Xx)("#Settings_Audio_Headset"),
              onLabel: (0, m.Xx)("#Settings_Audio_Manual"),
              onSubsection: c.createElement(_.Xp, {
                items: this.makeDeviceChoiceList(
                  S.G3.audioDevices.record_devices,
                ),
                value: S.G3.audioDevices.selected_recording_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "recordingDeviceOverride",
                ),
                defaultLabel: (0, m.Xx)(
                  "#Settings_Audio_Current_Setting_Unknown",
                ),
              }),
            }),
            c.createElement(_.wy, {
              name: "/settings/audio/enablePlaybackMirror",
              label: (0, m.Xx)("#Settings_Audio_Mirroring_Label"),
              onSubsection: c.createElement(
                c.Fragment,
                null,
                c.createElement(_.Xp, {
                  items: this.makeDeviceChoiceList(
                    S.G3.audioDevices.playback_devices,
                  ),
                  value: S.G3.audioDevices.selected_mirror_device,
                  onChange: this.onMirrorDeviceDropdownChanged,
                  defaultLabel: (0, m.Xx)(
                    "#Settings_Audio_Current_Setting_Unknown",
                  ),
                }),
                c.createElement(_.wy, {
                  name: "/settings/audio/enablePlaybackMirrorIndependentVolume",
                  label: (0, m.Xx)(
                    "#Settings_Audio_Mirroring_Independent_Volume_Label",
                  ),
                  visibility: _.VK.Advanced,
                }),
              ),
            }),
            o &&
              c.createElement(_.wy, {
                name: "/settings/audio/viveHDMIGain",
                label: (0, m.Xx)("#Settings_Audio_HDMIGain"),
              }),
            n &&
              c.createElement(_.wy, {
                name: "/settings/audio/dualSpeakerAndJackOutput",
                label: (0, m.Xx)("#Settings_Audio_SpeakerJackOutput"),
                offLabel: (0, m.Xx)("#Settings_Audio_Single"),
                onLabel: (0, m.Xx)("#Settings_Audio_Dual"),
                title: (0, m.Xx)("#Settings_Audio_SpeakerJackOutput_Title"),
              }),
            i &&
              c.createElement(_.wy, {
                name: "/settings/audio/muteMicMonitor",
                label: (0, m.Xx)("#Settings_Audio_MicMonitor"),
                offLabel: (0, m.Xx)("#Settings_Audio_Active"),
                onLabel: (0, m.Xx)("#Settings_Audio_Muted"),
              }),
          );
        }
      };
      (y.Name = "audio_settings"),
        (0, i.gn)([o.ak], y.prototype, "onAudioDeviceChanged", null),
        (0, i.gn)([o.ak], y.prototype, "onOverrideDeviceDropdownChanged", null),
        (0, i.gn)([o.ak], y.prototype, "onMirrorDeviceDropdownChanged", null),
        (y = (0, i.gn)([l.Pi], y));
      var b,
        f,
        C,
        w = n(4979);
      !(function (e) {
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
          (e[(e.EDGE_A = 1)] = "EDGE_A"),
          (e[(e.EDGE_B = 2)] = "EDGE_B"),
          (e[(e.VIDEO_TRANSLUCENT = 3)] = "VIDEO_TRANSLUCENT"),
          (e[(e.VIDEO_OPAQUE = 4)] = "VIDEO_OPAQUE"),
          (e[(e.COUNT = 5)] = "COUNT");
      })(b || (b = {})),
        (function (e) {
          (e[(e.Evaluating = 0)] = "Evaluating"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.Failure = 2)] = "Failure");
        })(f || (f = {}));
      class R extends c.Component {
        constructor(e) {
          super(e),
            (this.m_imageRef = c.createRef()),
            (this.m_cameraFrameCount = 0),
            (this.state = R.DefaultState);
        }
        static get DefaultState() {
          return {
            bShowTest: !1,
            streamingProgress: f.Evaluating,
            trackingProgress: f.Evaluating,
          };
        }
        componentWillUnmount() {
          this.stopTest();
        }
        updateStatus() {
          let e = Date.now() - this.m_startTestTime;
          this.state.streamingProgress == f.Evaluating &&
            (this.m_cameraFrameCount > 0
              ? this.setState({ streamingProgress: f.Success })
              : e > 5e3 && this.setState({ streamingProgress: f.Failure }));
          let t = VRHTML.GetPose(s.wU, s.zq.Standing);
          this.m_cameraFrameCount > 0 &&
            (t.bPoseIsValid || this.setState({ trackingProgress: f.Failure }),
            Date.now() - this.m_firstFrameTime > 2e3 &&
              this.state.trackingProgress == f.Evaluating &&
              this.setState({ trackingProgress: f.Success }));
        }
        onUpdateCameraFrame() {
          let e = "";
          try {
            (e = VRHTML.VRTrackedCameraInternal.GetCameraTestFrame()),
              0 == this.m_cameraFrameCount &&
                (this.m_firstFrameTime = Date.now()),
              this.m_cameraFrameCount++;
          } catch (e) {}
          this.m_imageRef.current && (this.m_imageRef.current.src = e),
            this.updateStatus();
        }
        startTest() {
          this.setState({ bShowTest: !0 }),
            VRHTML.VRTrackedCameraInternal.StartCameraTest(),
            (this.m_startTestTime = Date.now()),
            (this.m_cameraFrameCount = 0),
            this.m_imageRef.current && (this.m_imageRef.current.src = ""),
            (this.m_updateInterval = window.setInterval(
              this.onUpdateCameraFrame,
              100,
            )),
            this.onUpdateCameraFrame();
        }
        stopTest() {
          this.setState(R.DefaultState),
            VRHTML.VRTrackedCameraInternal.StopCameraTest(),
            window.clearInterval(this.m_updateInterval),
            (this.m_updateInterval = void 0);
        }
        renderStatusLine() {
          return this.state.streamingProgress == f.Evaluating
            ? c.createElement(
                "h1",
                { className: "CameraStatus Evaluating" },
                (0, m.Xx)("#CameraTest_CheckingCamera"),
              )
            : this.state.streamingProgress == f.Failure
              ? c.createElement(
                  "h1",
                  { className: "CameraStatus Failure" },
                  (0, m.Xx)("#CameraTest_CameraFailed"),
                )
              : this.state.trackingProgress == f.Evaluating
                ? c.createElement(
                    "h1",
                    { className: "CameraStatus Evaluating" },
                    (0, m.Xx)("#CameraTest_CheckingTracking"),
                  )
                : this.state.trackingProgress == f.Failure
                  ? c.createElement(
                      "h1",
                      { className: "CameraStatus Failure" },
                      (0, m.Xx)("#CameraTest_TrackingFailed"),
                    )
                  : c.createElement(
                      "h1",
                      { className: "CameraStatus Success" },
                      (0, m.Xx)("#CameraTest_Success"),
                    );
        }
        render() {
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { className: "SettingsItem CameraTestSettingsItem" },
              c.createElement(
                "div",
                { className: "Label" },
                (0, m.Xx)("#Settings_CameraTest"),
              ),
              c.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.startTest },
                (0, m.Xx)("#Settings_StartCameraTest"),
              ),
            ),
            this.state.bShowTest &&
              c.createElement(
                _.TB,
                {
                  className: "CameraTest",
                  header: this.renderStatusLine(),
                  onDismissRequested: this.stopTest,
                },
                c.createElement("img", { ref: this.m_imageRef }),
              ),
          );
        }
      }
      (0, i.gn)([o.ak], R.prototype, "onUpdateCameraFrame", null),
        (0, i.gn)([o.ak], R.prototype, "startTest", null),
        (0, i.gn)([o.ak], R.prototype, "stopTest", null),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.On2D = 1)] = "On2D"),
            (e[(e.On3D = 2)] = "On3D");
        })(C || (C = {}));
      const A = (0, l.Pi)(() => {
        var e;
        const t =
          null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    s.Uk.SupportsRoomViewDepthProjection_Bool,
                  )) &&
          void 0 !== e &&
          e;
        let n = S.G3.settings.get(h.k_),
          i = [
            { value: C.Off, sLabel: (0, m.Xx)("#Settings_ToggleButton_Off") },
          ];
        return (
          t || n == C.On3D
            ? (i.push({ value: C.On2D, sLabel: (0, m.Xx)("#Settings_2D") }),
              i.push({ value: C.On3D, sLabel: (0, m.Xx)("#Settings_3D") }))
            : i.push({
                value: C.On2D,
                sLabel: (0, m.Xx)("#Settings_ToggleButton_On"),
              }),
          c.createElement(_.D3, {
            label: (0, m.Xx)("#Settings_Camera_AllowCameraForRoomView"),
            title: (0, m.Xx)("#Settings_Camera_AllowCameraForRoomView_Desc"),
            items: i,
            value: n,
            onChange: (e) => {
              S.G3.SetSettingsValue(h.k_, e);
            },
          })
        );
      });
      let M = class extends _.d9 {
        constructor(e) {
          super(e),
            (this.state = {
              cameraRateValue: this.fetchCameraRate(),
              showCameraTest: !1,
            });
        }
        cameraEnabled() {
          return S.G3.settings.get(h.Av);
        }
        get cameraSupportsRates() {
          var e;
          return (
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      s.Uk.CameraSupportsCompatibilityModes_Bool,
                    )) &&
            void 0 !== e &&
            e
          );
        }
        fetchCameraRate() {
          var e;
          return this.cameraSupportsRates
            ? (function (e) {
                switch (e) {
                  case s.lx.ISO_30FPS:
                    return 30;
                  case s.lx.ISO_35FPS:
                    return 35;
                  case s.lx.ISO_40FPS:
                    return 40;
                  case s.lx.ISO_46FPS:
                    return 45;
                  case s.lx.ISO_50FPS:
                    return 50;
                  case s.lx.BULK_8K_DMA:
                    return 55;
                  default:
                  case s.lx.BULK_DEFAULT:
                    return 60;
                }
              })(
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetInt32Property(
                          "/user/head",
                          s.Uk.CameraCompatibilityMode_Int32,
                        )) && void 0 !== e
                  ? e
                  : s.lx.BULK_DEFAULT,
              )
            : 0;
        }
        setCameraRate(e) {
          let t = (function (e) {
            switch (e) {
              case 30:
                return s.lx.ISO_30FPS;
              case 35:
                return s.lx.ISO_35FPS;
              case 40:
                return s.lx.ISO_40FPS;
              case 45:
                return s.lx.ISO_46FPS;
              case 50:
                return s.lx.ISO_50FPS;
              case 55:
                return s.lx.BULK_8K_DMA;
              default:
                return s.lx.BULK_DEFAULT;
            }
          })(e);
          VRHTML.VRTrackedCameraInternal.SetCameraCompatibilityMode(t) &&
            S.G3.SetRestartRequired();
        }
        onCameraEnabled(e) {
          S.G3.SetSettingsValue("/settings/camera/enableCamera", e),
            this.forceUpdate(),
            e || this.onStopCameraTest();
        }
        onCameraRateChanged(e, t) {
          this.setState({ cameraRateValue: t }), this.setCameraRate(t);
        }
        onStartCameraTest() {
          this.setState({ showCameraTest: !0 });
        }
        onStopCameraTest() {
          this.setState({ showCameraTest: !1 });
        }
        get currentRoomViewStyle() {
          let e = S.G3.settings.get(h.oh);
          return e == b.DEFAULT && (e = b.EDGE_B), e;
        }
        renderEnabledSettings() {
          var e;
          let t = !1,
            n = !1;
          switch (this.currentRoomViewStyle) {
            case b.EDGE_A:
              (n = !0), (t = !0);
              break;
            case b.EDGE_B:
              t = !0;
          }
          const i = this.state.cameraRateValue > 0,
            o = S.G3.settings.get(h.k_),
            r =
              S.G3.settings.get(
                "/settings/camera/enableCameraForCollisionBounds",
              ) || o != C.Off;
          let a = [
            {
              value: b.EDGE_A,
              sLabel: (0, m.Xx)("#Settings_Camera_RoomViewStyle_EdgeA"),
            },
            {
              value: b.EDGE_B,
              sLabel: (0, m.Xx)("#Settings_Camera_RoomViewStyle_EdgeB"),
            },
            {
              value: b.VIDEO_TRANSLUCENT,
              sLabel: (0, m.Xx)(
                "#Settings_Camera_RoomViewStyle_VideoTranslucent",
              ),
            },
            {
              value: b.VIDEO_OPAQUE,
              sLabel: (0, m.Xx)("#Settings_Camera_RoomViewStyle_VideoOpaque"),
            },
          ];
          const l =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      s.Uk.SupportsRoomViewDepthProjection_Bool,
                    )) &&
            void 0 !== e &&
            e;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(A, null),
            l &&
              o == C.On3D &&
              c.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                (0, m.Xx)("#Settings_Camera_RoomView3D_Experimental"),
              ),
            !l &&
              o == C.On3D &&
              c.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                (0, m.Xx)("#Settings_Camera_RoomView3D_Unsupported"),
              ),
            i &&
              c.createElement(_.U4, {
                label: (0, m.Xx)("#Settings_Camera_Rate_Hz"),
                title: (0, m.Xx)("#Settings_Camera_CompatibilityExplanation"),
                min: 30,
                max: 60,
                step: 5,
                value: this.state.cameraRateValue,
                onChange: this.onCameraRateChanged.bind(
                  this,
                  "click_activate_threshold",
                ),
                valueStyleVariant: w.px.OnHandle,
                renderValue: (e) => this.state.cameraRateValue.toString(),
              }),
            r &&
              c.createElement(_.Xp, {
                value: this.currentRoomViewStyle,
                onChange: (e) => S.G3.SetSettingsValue(h.oh, e),
                label: (0, m.Xx)("#Settings_Camera_RoomViewStyle"),
                items: a,
                subsection:
                  (n || t) &&
                  c.createElement(
                    c.Fragment,
                    null,
                    t &&
                      c.createElement(_.vE, {
                        nameR: "/settings/camera/cameraBoundsColorGammaR",
                        nameG: "/settings/camera/cameraBoundsColorGammaG",
                        nameB: "/settings/camera/cameraBoundsColorGammaB",
                        label: (0, m.Xx)("#Settings_Chaperone_BoundsColor"),
                      }),
                    n &&
                      c.createElement(_.hR, {
                        name: "/settings/camera/cameraBoundsColorGammaA",
                        min: 76.5,
                        max: 255,
                        label: (0, m.Xx)(
                          "#Settings_Chaperone_BoundsTransparency",
                        ),
                        color: {
                          r: S.G3.settings.get(
                            "/settings/camera/cameraBoundsColorGammaR",
                          ),
                          g: S.G3.settings.get(
                            "/settings/camera/cameraBoundsColorGammaG",
                          ),
                          b: S.G3.settings.get(
                            "/settings/camera/cameraBoundsColorGammaB",
                          ),
                        },
                      }),
                  ),
              }),
            c.createElement(_.wy, {
              name: "/settings/camera/showOnController",
              label: (0, m.Xx)("#Settings_Camera_ShowOnController"),
              title: (0, m.Xx)("#Settings_Camera_ShowOnController_Desc"),
            }),
            c.createElement(_.wy, {
              name: "/settings/camera/enableCameraForCollisionBounds",
              label: (0, m.Xx)(
                "#Settings_Camera_AllowCameraForChaperoneBounds",
              ),
              title: (0, m.Xx)(
                "#Settings_Camera_AllowCameraForChaperoneBounds_Desc",
              ),
            }),
            c.createElement("hr", null),
          );
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                this.cameraEnabled() && this.renderEnabledSettings(),
                this.cameraEnabled() && this.GetComponentsForGroup("dev"),
                c.createElement(_.wy, {
                  label: (0, m.Xx)("#Settings_Camera_EnableCamera"),
                  value: this.cameraEnabled(),
                  requiresRestart: !0,
                  onChange: this.onCameraEnabled,
                  offLabel: (0, m.Xx)("#Settings_ToggleButton_Disable"),
                  onLabel: (0, m.Xx)("#Settings_ToggleButton_Enable"),
                }),
                this.cameraEnabled() && c.createElement(R, null),
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (M.Name = "camera_settings"),
        (0, i.gn)([o.ak], M.prototype, "onCameraEnabled", null),
        (0, i.gn)([o.ak], M.prototype, "onCameraRateChanged", null),
        (0, i.gn)([o.ak], M.prototype, "onStartCameraTest", null),
        (0, i.gn)([o.ak], M.prototype, "onStopCameraTest", null),
        (0, i.gn)([a.Fl], M.prototype, "currentRoomViewStyle", null),
        (M = (0, i.gn)([l.Pi], M));
      var k = n(7095),
        B = n(7373),
        E = n(9626),
        T = n(4790);
      let I = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                !E.BV.isVRGamepadUI &&
                  c.createElement(_.Xp, {
                    name: h.o1,
                    label: (0, m.Xx)("#Settings_Dashboard_Position"),
                    items: [
                      { value: B._.Near, sLabel: (0, m.Xx)("#Settings_Near") },
                      {
                        value: B._.Middle,
                        sLabel: (0, m.Xx)("#Settings_Middle"),
                      },
                      { value: B._.Far, sLabel: (0, m.Xx)("#Settings_Far") },
                    ],
                  }),
                c.createElement(_.wy, {
                  name: "/settings/dashboard/showPowerOptions",
                  label: (0, m.Xx)("#Settings_ShowPowerMenu"),
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.wy, {
                  name: "/settings/dashboard/showDesktop",
                  label: (0, m.Xx)("#Settings_ShowDesktopViews"),
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.wy, {
                  name: "/settings/dashboard/allowAppQuitting",
                  label: (0, m.Xx)("#Settings_AllowAppQuitting"),
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.wy, {
                  name: "/settings/dashboard/arcadeMode",
                  label: (0, m.Xx)("#Settings_ShowSettingsInDashboard"),
                  swapOnOff: !0,
                  visibility: _.VK.Advanced,
                }),
                (0, s.Op)() != s.qA.Overlay &&
                  c.createElement(_.wy, {
                    name: "/settings/dashboard/enableDashboard",
                    title: (0, m.Xx)("#Settings_EnableDashboardDesc"),
                    label: (0, m.Xx)("#Settings_EnableDashboard"),
                    visibility: _.VK.Advanced,
                  }),
                c.createElement(_.wy, {
                  name: "/settings/dashboard/autoShowGameTheater",
                  title: (0, m.Xx)("#Settings_AutoShowGameTheaterDesc"),
                  label: (0, m.Xx)("#Settings_AutoShowGameTheater"),
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.wy, {
                  name: "/settings/dashboard/inputCaptureEnabled",
                  title: (0, m.Xx)("#Settings_InputCaptureEnabledDesc"),
                  label: (0, m.Xx)("#Settings_InputCaptureEnabled"),
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.U4, {
                  min: 0,
                  max: 1.5,
                  step: 0.1,
                  valueStyleVariant: w.px.OnHandle,
                  detents: [1],
                  renderValue: (e) => (100 * e).toFixed(0) + "%",
                  name: "/settings/dashboard/grabHandleAcceleration",
                  title: (0, m.Xx)(
                    "#Settings_Dashboard_GrabHandleAccelerationDesc",
                  ),
                  label: (0, m.Xx)(
                    "#Settings_Dashboard_GrabHandleAcceleration",
                  ),
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.Xp, {
                  name: h.Ob,
                  label: (0, m.Xx)("#Settings_TheaterCurvature"),
                  items: [
                    {
                      value: T.Uj.Curved,
                      sLabel: (0, m.Xx)("#Settings_TheaterCurvature_Curved"),
                    },
                    {
                      value: T.Uj.Flat,
                      sLabel: (0, m.Xx)("#Settings_TheaterCurvature_Flat"),
                    },
                  ],
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.Xp, {
                  name: h.CS,
                  label: (0, m.Xx)("#Settings_TheaterScreenSize"),
                  items: [
                    {
                      value: E.fq.Large,
                      sLabel: (0, m.Xx)("#Settings_TheaterScreenSize_Large"),
                    },
                    {
                      value: E.fq.Medium,
                      sLabel: (0, m.Xx)("#Settings_TheaterScreenSize_Medium"),
                    },
                  ],
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.Xp, {
                  name: h.rT,
                  label: (0, m.Xx)("#Settings_TheaterScreenAlignment"),
                  items: [
                    {
                      value: E.A3.PlayArea,
                      sLabel: (0, m.Xx)(
                        "#Settings_TheaterScreenAlignment_PlayArea",
                      ),
                    },
                    {
                      value: E.A3.Dashboard,
                      sLabel: (0, m.Xx)(
                        "#Settings_TheaterScreenAlignment_Dashboard",
                      ),
                    },
                  ],
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.wy, {
                  name: h.YJ,
                  label: (0, m.Xx)("#Settings_Dashboard_KeyboardPrivacy"),
                  onLabel: (0, m.Xx)(
                    "#Settings_Dashboard_KeyboardPrivacy_Enabled",
                  ),
                  offLabel: (0, m.Xx)(
                    "#Settings_Dashboard_KeyboardPrivacy_Disabled",
                  ),
                  visibility: _.VK.Advanced,
                  swapOnOff: !0,
                  offSubsection: c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(
                      "div",
                      { className: "Label" },
                      (0, m.Xx)(
                        "#Settings_Dashboard_KeyboardPrivacy_DisabledWarning",
                      ),
                    ),
                  ),
                }),
              )
            : null;
        }
      };
      var D;
      (I.Name = "dashboard_settings"),
        (I = (0, i.gn)([l.Pi], I)),
        (function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.Automatic = 1)] = "Automatic"),
            (e[(e.Always = 2)] = "Always");
        })(D || (D = {}));
      let O = class extends c.Component {
        constructor(e) {
          super(e), (this.state = { bShowingModal: !1 });
        }
        isImplicitLayer(e) {
          return e.bIsImplicit && e.bIsModifyAllowed;
        }
        isExplicitLayer(e) {
          return !e.bIsImplicit;
        }
        isImplicitNoModifLayer(e) {
          return e.bIsImplicit && !e.bIsModifyAllowed;
        }
        setApiLayerState(e, t) {
          t
            ? null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.XRApiLayerManager.EnableApiLayer(e)
            : null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.XRApiLayerManager.DisableApiLayer(e),
            this.forceUpdate();
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          let e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.XRApiLayerManager.GetInstalledApiLayers(),
            t = null == e,
            n = [],
            i = 0;
          if (!t)
            for (let t = 0; t < e.length; ) {
              let s = {
                sId: "",
                sName: "",
                bIsImplicit: !1,
                bIsEnabled: !1,
                bIsModifyAllowed: !0,
              };
              (s.sId = e[t++].toString()),
                (s.sName = e[t++].toString()),
                (s.bIsImplicit = !0 === e[t++]),
                (s.bIsEnabled = !0 === e[t++]),
                (s.bIsModifyAllowed = !0 === e[t++]),
                n.push(s),
                s.bIsEnabled && i++;
            }
          const s = n.filter(this.isImplicitLayer),
            o = n.filter(this.isExplicitLayer),
            r = n.filter(this.isImplicitNoModifLayer);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              _.GV,
              {
                className: "SettingsItem",
                title: (0, m.Xx)("#Settings_Loading"),
              },
              c.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.show },
                (0, m.Xx)("#OpenXR_ApiLayers_Manage"),
                c.createElement(
                  "div",
                  { className: "Badge" },
                  (0, m.Xx)("#OpenXR_ApiLayers_Active", i),
                ),
              ),
            ),
            this.state.bShowingModal &&
              c.createElement(
                _.TB,
                {
                  className: "OverlayAutoLaunchModal",
                  header: (0, m.Xx)("#OpenXR_ApiLayers_Installed"),
                  onDismissRequested: this.hide,
                },
                s.length > 0 &&
                  s.map((e) =>
                    c.createElement(_.wy, {
                      key: e.sId,
                      label: e.sName,
                      value: e.bIsEnabled,
                      onChange: (t) => this.setApiLayerState(e.sId, t),
                    }),
                  ),
                r.length > 0 &&
                  r.map((e) =>
                    c.createElement(
                      "div",
                      { className: "SettingsItem" },
                      c.createElement("div", { className: "Label" }, e.sName),
                      e.bIsEnabled &&
                        c.createElement(
                          "div",
                          { className: "SettingsItemValueInfo" },
                          " ",
                          (0, m.Xx)("#OpenXR_ApiLayers_Enabled"),
                        ),
                      !e.bIsEnabled &&
                        c.createElement(
                          "div",
                          { className: "SettingsItemValueInfo" },
                          " ",
                          (0, m.Xx)("#OpenXR_ApiLayers_Disabled"),
                        ),
                    ),
                  ),
                o.length > 0 &&
                  o.map((e) =>
                    c.createElement(
                      "div",
                      { className: "SettingsItem" },
                      c.createElement("div", { className: "Label" }, e.sName),
                      c.createElement(
                        "div",
                        { className: "SettingsItemValueInfo" },
                        (0, m.Xx)("#OpenXR_ApiLayers_App_Controlled"),
                      ),
                    ),
                  ),
                t &&
                  c.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, m.Xx)("#OpenXR_ApiLayers_None_Installed"),
                  ),
              ),
          );
        }
      };
      (0, i.gn)([o.ak], O.prototype, "isImplicitLayer", null),
        (0, i.gn)([o.ak], O.prototype, "isExplicitLayer", null),
        (0, i.gn)([o.ak], O.prototype, "isImplicitNoModifLayer", null),
        (0, i.gn)([o.ak], O.prototype, "setApiLayerState", null),
        (0, i.gn)([o.ak], O.prototype, "show", null),
        (0, i.gn)([o.ak], O.prototype, "hide", null),
        (O = (0, i.gn)([l.Pi], O));
      let L = class extends _.d9 {
        constructor(e) {
          super(e),
            (this.m_mailbox = new s.Nv()),
            this.m_mailbox.Init("settingstab_openxr"),
            this.m_mailbox.RegisterHandler("refresh_openxr_tab", () => {
              this.forceUpdate();
            });
        }
        OnSetAsOpenXRRuntime() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.XRRuntimeManager.SetThisRuntimeToCurrent(),
            this.forceUpdate();
        }
        render() {
          var e;
          if (!this.props.active) return null;
          let [t, n] =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.XRRuntimeManager.GetCurrentRuntime()) && void 0 !== e
              ? e
              : [s.GC.Error, ""];
          switch ((s.GC.ThisSteamVR, t)) {
            case s.GC.AnotherSteamVR:
              n = "#OpenXR_AnotherSteamVR";
              break;
            case s.GC.ThisSteamVR:
              n = "#OpenXR_SteamVR";
              break;
            default:
            case s.GC.Error:
              n = "#OpenXR_Error";
              break;
            case s.GC.None:
              n = "#OpenXR_None";
              break;
            case s.GC.AnotherRuntime:
              switch (n) {
                case "Oculus OpenXR":
                  n = "#OpenXR_OculusRuntime";
                  break;
                case "MixedRealityRuntime":
                  n = "#OpenXR_WindowsMixedReality";
              }
          }
          return (
            n.startsWith("#") && (n = (0, m.Xx)(n)),
            c.createElement(
              c.Fragment,
              null,
              this.schemaComponents,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "OpenXRRuntimeLabel" },
                  (0, m.Xx)("#Settings_CurrentOpenXRRuntime"),
                ),
                c.createElement(
                  "div",
                  { className: "OpenXRRuntimeValue" },
                  " ",
                  n,
                  " ",
                ),
              ),
              !(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.XRRuntimeManager.IsThisRuntimeCurrent()) &&
                c.createElement(
                  "div",
                  { className: "SettingsItem Button ResetDefaultButton" },
                  c.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: this.OnSetAsOpenXRRuntime,
                    },
                    (0, m.Xx)("#Settings_SetAsOpenXRRuntime"),
                  ),
                ),
              c.createElement(O, null),
              this.makeResetToDefaultButton(),
              c.createElement(_.D3, {
                name: h.WF,
                label: (0, m.Xx)("#Settings_OpenXR_MetaPluginCompatibility"),
                title: (0, m.Xx)("#Settings_OpenXR_MetaPluginCompatibilityTip"),
                items: [
                  {
                    sLabel: (0, m.Xx)("#Settings_ToggleButton_Off"),
                    value: D.Disabled,
                  },
                  {
                    sLabel: (0, m.Xx)("#OpenXR_Automatic"),
                    value: D.Automatic,
                  },
                  {
                    sLabel: (0, m.Xx)("#Settings_ToggleButton_On"),
                    value: D.Always,
                  },
                ],
              }),
            )
          );
        }
      };
      (L.Name = "openxr_settings"),
        (0, i.gn)([o.ak], L.prototype, "OnSetAsOpenXRRuntime", null),
        (L = (0, i.gn)([l.Pi], L));
      let V = class extends _.d9 {
        constructor(e) {
          super(e);
        }
      };
      (V.Name = "developer_settings"), (V = (0, i.gn)([l.Pi], V));
      var F = n(2743);
      let P = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(F.DX, null),
                c.createElement(F.nb, null),
                c.createElement(F.RR, null),
                c.createElement(F.TO, null),
                c.createElement(F.Dc, null),
                !E.BV.isVRGamepadUI &&
                  c.createElement(_.Xp, {
                    name: h.o1,
                    label: (0, m.Xx)("#Settings_Dashboard_Position"),
                    items: [
                      { value: B._.Near, sLabel: (0, m.Xx)("#Settings_Near") },
                      {
                        value: B._.Middle,
                        sLabel: (0, m.Xx)("#Settings_Middle"),
                      },
                      { value: B._.Far, sLabel: (0, m.Xx)("#Settings_Far") },
                    ],
                  }),
                c.createElement(_.wy, {
                  name: "/settings/notifications/DoNotDisturb",
                  label: (0, m.Xx)("#Settings_General_Notifications_Label"),
                  title: (0, m.Xx)("#Settings_General_Notifications_Text"),
                  swapOnOff: !0,
                }),
                c.createElement(_.wy, {
                  name: "/settings/userinterface/StatusAlwaysOnTop",
                  label: (0, m.Xx)("#Settings_StatusWindowAlwaysOnTop_Text"),
                  visibility: _.VK.Desktop,
                }),
                c.createElement(_.wy, {
                  name: "/settings/steamvr/allowDisplayLockedMode",
                  label: (0, m.Xx)("#Settings_PauseOnLocked"),
                  swapOnOff: !0,
                  visibility: _.VK.Advanced,
                }),
                c.createElement(_.wy, {
                  name: "/settings/steamvr/enableHomeApp",
                  label: (0, m.Xx)("#Settings_HomeAppCheck"),
                  title: (0, m.Xx)("#Settings_HomeAppDesc"),
                  visibility: _.VK.Advanced,
                }),
              )
            : null;
        }
      };
      (P.Name = "general_settings"), (P = (0, i.gn)([l.Pi], P));
      const x = (e) => {
        var t;
        const [n, i] = (0, c.useState)(!1),
          o =
            0.9 *
            (null !==
              (t =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.VRProperties.GetFloatProperty(
                      s.wU,
                      s.Uk.DashboardScale_Float,
                    )) && void 0 !== t
              ? t
              : 1),
          [r, a] = ((e) => {
            const [t, n] = (0, c.useState)(0);
            return (
              c.useEffect(() => {
                if (t > 0) {
                  const e = setTimeout(() => {
                    n(t - 0.05);
                  }, 50);
                  return () => {
                    clearTimeout(e);
                  };
                }
              }, [t]),
              [t, n]
            );
          })();
        r <= 0 && n && (i(!1), e.onApplyCal());
        const l = (function (e, t, n, i) {
            if (!isFinite(e) || !isFinite(t)) return null;
            const s = [];
            return (
              s.push(
                c.createElement("line", {
                  key: "lineU",
                  x1: 20,
                  y1: 20,
                  x2: e - n,
                  y2: t - n,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    strokeLinecap: "round",
                  },
                }),
              ),
              s.push(
                c.createElement("line", {
                  key: "lineL",
                  x1: 20,
                  y1: e - n,
                  x2: t - n,
                  y2: 20,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    strokeLinecap: "round",
                  },
                }),
              ),
              s.push(
                c.createElement("circle", {
                  key: "centercirc",
                  cx: e / 2,
                  cy: t / 2,
                  r: 50 * i,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    fillOpacity: 0.1,
                    fill: "rgb(256, 256, 256)",
                  },
                }),
              ),
              c.createElement(
                "svg",
                { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                s,
              )
            );
          })(240, 240, 20, r),
          u = Math.max(r > 0 ? 1 : 1 + 5 * r, 0);
        return n
          ? c.createElement(
              s.wx,
              { parent_path: "/user/head" },
              c.createElement(
                s.wx,
                { translation: { y: 0, z: -70 }, rotation: { z: 0 }, scale: o },
                c.createElement(
                  s.s_,
                  {
                    width: void 0,
                    height: 12 * u,
                    interactive: !1,
                    sort_order: 1e3,
                  },
                  c.createElement(
                    "div",
                    {
                      className: ["ZeroBorderContainer"].join(" "),
                      style: { width: 240 },
                    },
                    c.createElement(
                      "div",
                      { className: "ETCLensSVG" },
                      " ",
                      l,
                      " ",
                    ),
                  ),
                ),
              ),
            )
          : c.createElement(
              d.z,
              {
                className: "ButtonControl",
                enabled: !n,
                onClick: () => {
                  a(1.5), i(!0);
                },
              },
              " Do Center Track ",
            );
      };
      let G = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_eyeTrackingServerStatusHandle = null),
            (this.m_mailbox = new s.Nv()),
            (this.state = { nStatus: null }),
            this.m_mailbox.Init("eye_server_ui");
        }
        componentDidMount() {
          this.m_eyeTrackingServerStatusHandle =
            null === s.Co || void 0 === s.Co
              ? void 0
              : s.Co.RegisterForEyeTrackingServerStatus(
                  this.onEyeTrackingServerEnabledEventUpdate,
                );
        }
        componentWillUnmount() {
          this.m_eyeTrackingServerStatusHandle.unregister();
        }
        onEyeTrackingServerEnabledEventUpdate(e) {
          this.setState({ nStatus: e });
        }
        stopEyeTrackingServer() {
          this.m_mailbox.SendMessage("driver_hmd/eyetracking", {
            type: "stop_eye_server",
          });
        }
        startEyeTrackingServer() {
          this.m_mailbox.SendMessage("driver_hmd/eyetracking", {
            type: "start_eye_server",
          });
        }
        doEyeTrackingCal() {
          this.m_mailbox.SendMessage("driver_hmd/eyetracking", {
            type: "perform_center_eye_cal",
          });
        }
        SetEyeTrackingVisualization(e) {
          let t = { type: "set_eye_tracking_debug_mode", mode: e };
          this.m_mailbox.SendMessage("vrcompositor_systemlayer", t);
        }
        render() {
          const e = (0, s.Op)() == s.qA.Overlay;
          let t;
          return (
            0 == this.state.nStatus
              ? (t = "uninitialized")
              : -1 == this.state.nStatus
                ? (t = "HMD not supported")
                : -2 == this.state.nStatus
                  ? (t = "Offline")
                  : 1 == this.state.nStatus && (t = "Online"),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  "EyeTrackingServerStatus",
                  " ",
                ),
                c.createElement(
                  "div",
                  { className: "OpenXRRuntimeValue" },
                  " ",
                  this.state.nStatus,
                  " ( ",
                  t,
                  " ) ",
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "Label" },
                  " Stop Eye Tracking Server ",
                ),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: this.stopEyeTrackingServer,
                  },
                  " Stop ",
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "Label" },
                  " Start Eye Tracking Server ",
                ),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: this.startEyeTrackingServer,
                  },
                  " Start ",
                ),
              ),
              c.createElement("div", null, "Eye Tracking Vis:"),
              c.createElement(
                "div",
                { className: "FlexRow" },
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("0"),
                  },
                  "Off",
                ),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("1"),
                  },
                  "On",
                ),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("2"),
                  },
                  "Point",
                ),
              ),
              e &&
                c.createElement(
                  c.Fragment,
                  null,
                  "\t",
                  c.createElement(x, {
                    onApplyCal: () => {
                      this.doEyeTrackingCal();
                    },
                  }),
                  "\t",
                ),
            )
          );
        }
      };
      (0, i.gn)(
        [o.ak],
        G.prototype,
        "onEyeTrackingServerEnabledEventUpdate",
        null,
      ),
        (0, i.gn)([o.ak], G.prototype, "stopEyeTrackingServer", null),
        (0, i.gn)([o.ak], G.prototype, "startEyeTrackingServer", null),
        (0, i.gn)([o.ak], G.prototype, "doEyeTrackingCal", null),
        (0, i.gn)([o.ak], G.prototype, "SetEyeTrackingVisualization", null),
        (G = (0, i.gn)([l.Pi], G));
      var N = n(9669),
        H = n.n(N);
      function U() {
        const [e, t] = c.useState();
        return c.createElement(
          _.GV,
          { className: "SettingsItem" },
          c.createElement(
            d.z,
            {
              className: "ButtonControl Spanning",
              onClick: () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  t(null);
                  try {
                    (yield S.G3.ReloadSettingsSchema()).success
                      ? window.location.reload()
                      : t(
                          "Failed to reload schema. File might not be found, or might be invalid.",
                        );
                  } catch (e) {
                    t(e.message);
                  }
                }),
            },
            "Reload Settings Schema",
          ),
          e && c.createElement("div", { className: "Subsection Label" }, e),
        );
      }
      const W = (0, l.Pi)(() =>
          c.createElement(
            _.GV,
            { className: "SettingsItem" },
            c.createElement(_.Xp, {
              label: "Auto-Show Dashboard",
              name: h.y3,
              items: [
                { value: "", sLabel: "Default" },
                v.Kr.Separator,
                { value: h.T2, sLabel: "Steam (VRGamepadUI)" },
                v.Kr.Separator,
                { value: h.po, sLabel: "Recent Games (Old Dashboard)" },
                { value: h.PF, sLabel: "Now Playing" },
                v.Kr.Separator,
                { value: h.gB, sLabel: "Desktop View" },
                { value: h.r4 + ".1", sLabel: "Desktop 1" },
                { value: h.r4 + ".2", sLabel: "Desktop 2" },
                v.Kr.Separator,
                { value: h.A4, sLabel: "Settings" },
              ],
            }),
          ),
        ),
        z = (e) => {
          const [t, n] = c.useState(1),
            [i, s] = c.useState(1),
            [o, r] = c.useState(1),
            [a, l] = c.useState(1),
            [d, u] = c.useState(!1);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.D3, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
              ],
              value: t,
              onChange: n,
            }),
            c.createElement(_.D3, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
              ],
              value: i,
              onChange: s,
            }),
            c.createElement(_.D3, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: o,
              onChange: r,
            }),
            c.createElement(_.D3, {
              label: "Segmented Control",
              items: [
                { sLabel: "1", value: 1 },
                { sLabel: "2", value: 2 },
                { sLabel: "3", value: 3 },
                { sLabel: "4", value: 4 },
                { sLabel: "5", value: 5 },
              ],
              value: a,
              onChange: l,
            }),
            c.createElement("hr", null),
            c.createElement(_.wy, {
              label: "Standard Toggle",
              value: d,
              onChange: u,
            }),
            c.createElement(_.wy, {
              label: "Inverted Toggle",
              value: d,
              onChange: u,
              swapOnOff: !0,
            }),
          );
        },
        X = (e) => {
          const [t, n] = c.useState(1);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.t0, {
              label: "Radio Buttons",
              items: [
                { sLabel: "1", value: 1 },
                { sLabel: "2", value: 2 },
                { sLabel: "3", value: 3 },
                { sLabel: "4", value: 4 },
              ],
              value: t,
              onChange: n,
            }),
          );
        },
        j = (e) => {
          const [t, n] = c.useState(1);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.Xp, {
              label: "Dropdown",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: t,
              onChange: n,
            }),
          );
        },
        q = (0, l.Pi)(() => {
          const e = "settingscontrolzoo",
            t = S.G3.routePageSection == e;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { className: "SettingsItem Button" },
              c.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  onClick: () => S.G3.setRoutePageSection(e),
                },
                "Zoo of Settings Controls",
              ),
            ),
            t &&
              c.createElement(
                _.TB,
                {
                  header: "Settings Controls",
                  onDismissRequested: () => S.G3.setRoutePageSection(null),
                },
                c.createElement(z, null),
                c.createElement("hr", null),
                c.createElement(X, null),
                c.createElement("hr", null),
                c.createElement(j, null),
              ),
          );
        });
      function K(e) {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(_.wy, {
            name: "/settings/dashboard/allowSteamOverlays",
            label: "Allow any types of Steam Overlays",
            requiresRestart: !0,
            onSubsection: c.createElement(
              c.Fragment,
              null,
              c.createElement(_.wy, {
                name: "/settings/dashboard/allowVRGamepadUI",
                label: "Allow VRGamepadUI",
                requiresRestart: !0,
              }),
              !1,
              c.createElement(_.wy, {
                name: "/settings/dashboard/steamMatchesHMDFramerate",
                label: "Steam matches HMD framerate",
              }),
            ),
          }),
        );
      }
      function J(e) {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(_.U4, {
            name: "/settings/dashboard/theaterModeBrightness",
            label: "Theater Room Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: w.px.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.U4, {
            name: "/settings/dashboard/theaterModeReflection",
            label: "Theater Reflections Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: w.px.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.U4, {
            name: "/settings/dashboard/theaterModeSharpness",
            label: "Theater Reflections Sharpness",
            min: 0,
            max: 1,
            valueStyleVariant: w.px.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
        );
      }
      function Z(e) {
        return c.createElement(_.wy, {
          name: h.bU,
          label: (0, m.Xx)("#Settings_ControllerOverlayMagnetismEnabled"),
          onSubsection: c.createElement(
            c.Fragment,
            null,
            c.createElement(_.U4, {
              name: h.MJ,
              label: (0, m.Xx)(
                "#Settings_ControllerOverlayMagnetismLockDistance",
              ),
              min: 0,
              max: 0.2,
              valueStyleVariant: w.px.OnHandle,
              detents: [0.05],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.U4, {
              name: h.ML,
              label: (0, m.Xx)(
                "#Settings_ControllerOverlayMagnetismDeadZoneRatio",
              ),
              min: 0,
              max: 1,
              valueStyleVariant: w.px.OnHandle,
              detents: [0.6],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      function Q(e) {
        return c.createElement(_.wy, {
          name: h.R3,
          label: (0, m.Xx)("#Settings_ControllerOverlayFilteringEnabled"),
          onSubsection: c.createElement(
            c.Fragment,
            null,
            c.createElement(_.U4, {
              name: h.N9,
              label: (0, m.Xx)("#Settings_ControllerOverlayFilteringMinCutoff"),
              min: 0,
              max: 10,
              valueStyleVariant: w.px.OnHandle,
              detents: [1],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.U4, {
              name: h.ro,
              label: (0, m.Xx)("#Settings_ControllerOverlayFilteringBeta"),
              min: 0,
              max: 10,
              valueStyleVariant: w.px.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.U4, {
              name: h.J9,
              label: (0, m.Xx)(
                "#Settings_ControllerOverlayFilteringDerivCutoff",
              ),
              min: 0,
              max: 10,
              valueStyleVariant: w.px.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      let $ = class extends _.d9 {
        constructor(e) {
          super(e),
            (this.m_mailbox = new s.Nv()),
            (this.m_softApStatus = ""),
            (this.m_softApSSID = ""),
            (this.m_softApPassword = ""),
            this.m_mailbox.Init("internal_settings"),
            this.m_mailbox.RegisterHandler(
              "sap_status_update",
              this.onSapStatusUpdate,
            );
        }
        toggleMirrorRender() {
          this.m_mailbox.SendMessage("vrcompositor_systemlayer", {
            type: "toggle_mirror_render",
          }),
            this.setState({ bAllowServerStop: !1 });
        }
        configSoftAP(e) {
          let t = { type: "configure_softap", enabled: e };
          this.m_mailbox.SendMessage("driver_hmd", t);
        }
        onSapStatusUpdate(e) {
          try {
            const t = JSON.parse(e.sOutput);
            (this.m_softApStatus = t.status.text),
              (this.m_softApSSID = t.status.ssid),
              (this.m_softApPassword = t.status.password);
          } catch (e) {
            this.m_softApStatus = `Error: ${e.message}`;
          }
          this.forceUpdate();
        }
        render() {
          return this.props.active
            ? ((0, s.Op)(),
              s.qA.Overlay,
              c.createElement(
                c.Fragment,
                null,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                !1,
                this.schemaComponents,
                !1,
                c.createElement(J, null),
                c.createElement(Z, null),
                c.createElement(Q, null),
                c.createElement(
                  "div",
                  { className: "SettingsItem Button" },
                  c.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: () => this.toggleMirrorRender(),
                    },
                    "Toggle Mirror Device Rendering",
                  ),
                ),
                c.createElement(_.wy, {
                  label: "Dashboard Escape Hatch",
                  name: "/settings/dashboard/showEscapeHatch",
                }),
                c.createElement(_.U4, {
                  name: "/settings/dashboard/verticalOffsetCm_2",
                  label: "Dashboard Vertical Offset (cm)",
                  min: -25,
                  max: 25,
                  valueStyleVariant: w.px.OnHandle,
                  detents: [0],
                  renderValue: (e) => e.toFixed(0) + " cm",
                  step: 1,
                }),
                c.createElement(_.wy, {
                  label: "Enable Per-App Refresh Rate",
                  name: "/settings/internal/enablePerAppFPS",
                }),
                c.createElement(_.wy, {
                  label: "Allow Dashboard auto-launch with SteamVR Home",
                  name: "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
                }),
                c.createElement(_.wy, {
                  label: "Skip the Dashboard BG fade during SteamVR Home",
                  name: "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                }),
                c.createElement(_.wy, {
                  label: "Haptics on Button Exit",
                  name: "/settings/steamvr/noEdgeExitHaptics",
                  swapOnOff: !0,
                }),
                c.createElement(_.wy, {
                  label: "Force Welcome in Quicklaunch",
                  name: "/settings/dashboard/forceWelcomeScreen",
                }),
                c.createElement(_.wy, {
                  name: h.BW,
                  swapOnOff: !0,
                  label: (0, m.Xx)("#Settings_Animations"),
                }),
                !1,
                !1,
                c.createElement(K, null),
                c.createElement(W, null),
                c.createElement(U, null),
                c.createElement(q, null),
                this.makeResetToDefaultButton(),
              ))
            : null;
        }
      };
      ($.Name = "internal_settings"),
        (0, i.gn)([o.ak], $.prototype, "toggleMirrorRender", null),
        (0, i.gn)([o.ak], $.prototype, "configSoftAP", null),
        (0, i.gn)([o.ak], $.prototype, "onSapStatusUpdate", null),
        ($ = (0, i.gn)([l.Pi], $));
      var Y = n(9809);
      let ee = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_refSelectedButton = c.createRef()),
            (this.state = { bShowModal: !1, rBackgroundUGCItems: [] });
        }
        updateUGCItems() {
          S.G3.GetSettingsUGC().then((e) => {
            null != e.items && this.setState({ rBackgroundUGCItems: e.items });
          });
        }
        componentDidMount() {
          this.updateUGCItems(),
            (this.m_workshopStateChangedCanaryDisposer = (0, a.N7)(
              S.G3,
              "workshopStateChangedCanary",
              this.updateUGCItems,
            ));
        }
        componentWillUnmount() {
          this.m_workshopStateChangedCanaryDisposer(),
            (this.m_workshopStateChangedCanaryDisposer = null);
        }
        setBackground(e) {
          S.G3.systemInfo &&
            e === S.G3.systemInfo.default_background &&
            (e = ""),
            S.G3.SetSettingsValue("/settings/steamvr/background", e),
            this.hideModal();
        }
        hideModal() {
          this.setState({ bShowModal: !1 });
        }
        showModal() {
          this.setState({ bShowModal: !0 });
        }
        componentDidUpdate(e, t) {
          this.state.bShowModal &&
            !t.bShowModal &&
            setTimeout(() => {
              this.m_refSelectedButton.current &&
                this.m_refSelectedButton.current.elem.scrollIntoView({
                  block: "center",
                });
            }, 0);
        }
        get currentBackgroundPath() {
          return (
            S.G3.settings.get("/settings/steamvr/background") ||
            S.G3.systemInfo.default_background
          );
        }
        render() {
          const e = this.currentBackgroundPath,
            t = [
              {
                file: "#A0A0A0FF",
                tags: "background",
                preview: "/dashboard/images/background_light_thumbnail.png",
                publishedfileid: null,
              },
              {
                file: "#0D0D0DFF",
                tags: "background",
                preview: "/dashboard/images/background_dark_thumbnail.png",
                publishedfileid: null,
              },
              ...this.state.rBackgroundUGCItems.filter(
                (e, t) => e.tags && -1 != e.tags.indexOf("background"),
              ),
            ],
            n = t.find((t) => t.file == e) || null,
            i = n ? n.preview : null;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              _.GV,
              {
                className: "SettingsItem Background",
                title: (0, m.Xx)("#Settings_Appearance_BackgroundDesc"),
              },
              c.createElement(
                "div",
                { className: "Label" },
                (0, m.Xx)("#Settings_Appearance_Background"),
              ),
              c.createElement(
                d.z,
                {
                  className: (0, g.LJ)("ButtonControl", ["Background", !!i]),
                  style: {
                    "--background-url-value": i ? 'url("' + i + '")' : null,
                  },
                  onClick: this.showModal,
                },
                !i && (0, m.Xx)("#Settings_Appearance_Background_Select"),
              ),
            ),
            this.state.bShowModal &&
              c.createElement(
                _.TB,
                {
                  onDismissRequested: this.hideModal,
                  className: "Backgrounds",
                  header: (0, m.Xx)("#Settings_Appearance_Background"),
                  subheader: Y.I.IsSteamAvailable
                    ? null
                    : (0, m.Xx)("#Settings_Appearance_Background_NoSteam"),
                },
                c.createElement(
                  "div",
                  { className: "BackgroundsGrid" },
                  t.map((t, n) =>
                    c.createElement(d.z, {
                      className: (0, g.LJ)("ButtonControl", "Background", [
                        "Selected",
                        t.file == e,
                      ]),
                      style: {
                        "--background-url-value": t.preview
                          ? 'url("' + t.preview + '")'
                          : null,
                      },
                      key: "backgroundelement_" + t.preview,
                      ref: t.file == e ? this.m_refSelectedButton : null,
                      title: t.file.startsWith("#") ? null : t.file,
                      onClick: () => this.setBackground(t.file),
                    }),
                  ),
                ),
              ),
          );
        }
      };
      (0, i.gn)([o.ZP], ee.prototype, "updateUGCItems", null),
        (0, i.gn)([o.ZP], ee.prototype, "setBackground", null),
        (0, i.gn)([o.ZP], ee.prototype, "hideModal", null),
        (0, i.gn)([o.ZP], ee.prototype, "showModal", null),
        (0, i.gn)([a.Fl], ee.prototype, "currentBackgroundPath", null),
        (ee = (0, i.gn)([l.Pi], ee));
      class te extends c.Component {
        constructor() {
          super(...arguments),
            (this.m_sUniqueIdForForceBoundsVisible = Math.random().toString());
        }
        componentDidMount() {
          S.G3.SetDashboardForceBoundsVisible(
            h.A4,
            this.m_sUniqueIdForForceBoundsVisible,
            !0,
          );
        }
        componentWillUnmount() {
          S.G3.SetDashboardForceBoundsVisible(
            h.A4,
            this.m_sUniqueIdForForceBoundsVisible,
            !1,
          );
        }
        render() {
          return null;
        }
      }
      function ne() {
        const [e, t] = c.useState({ x: 1, y: 1 }),
          n = c.useCallback(() => {
            try {
              t(VRHTML.VRChaperone.GetPlayAreaSize());
            } catch (e) {
              console.log(e);
            }
          }, []);
        return (
          c.useEffect(
            () =>
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForChaperoneChangedEvents(n)
              ).unregister,
            [n],
          ),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label" },
              (0, m.Xx)("#Settings_PlayArea_Size"),
            ),
            c.createElement(
              "div",
              { className: "" },
              `${e.x.toFixed(2)}m x ${e.y.toFixed(2)}m`,
            ),
          )
        );
      }
      let ie = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          if (!this.props.active) return null;
          const t = S.G3.settings.get("/settings/steamvr/background"),
            n = !!t && !t.startsWith("#"),
            i =
              null !== (e = S.G3.settings.get(h.yQ)) && void 0 !== e ? e : 0.7;
          let s;
          return (
            (s =
              i < 0.5
                ? (0, m.Xx)("#Settings_Chaperone_SuitableForSmall")
                : i < 1
                  ? (0, m.Xx)("#Settings_Chaperone_SuitableForMedium")
                  : (0, m.Xx)("#Settings_Chaperone_SuitableForLarge")),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(te, null),
              c.createElement(ne, null),
              c.createElement(_.Xp, {
                name: "/settings/collisionBounds/CollisionBoundsStyle",
                label: (0, m.Xx)("#Settings_Chaperone_Style"),
                items: [
                  {
                    value: 0,
                    sLabel: (0, m.Xx)("#Settings_Chaperone_Style_0"),
                  },
                  {
                    value: 1,
                    sLabel: (0, m.Xx)("#Settings_Chaperone_Style_1"),
                  },
                  {
                    value: 3,
                    sLabel: (0, m.Xx)("#Settings_Chaperone_Style_3"),
                  },
                  {
                    value: 2,
                    sLabel: (0, m.Xx)("#Settings_Chaperone_Style_2"),
                  },
                  {
                    value: 4,
                    sLabel: (0, m.Xx)("#Settings_Chaperone_Style_4"),
                  },
                ],
                subsection: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(_.Ei, {
                    label: (0, m.Xx)("#Settings_Chaperone_Color"),
                    nameR:
                      "/settings/collisionBounds/CollisionBoundsColorGammaR",
                    nameG:
                      "/settings/collisionBounds/CollisionBoundsColorGammaG",
                    nameB:
                      "/settings/collisionBounds/CollisionBoundsColorGammaB",
                    nameA:
                      "/settings/collisionBounds/CollisionBoundsColorGammaA",
                    minA: 0.3,
                    alphaScale: 255,
                  }),
                  c.createElement(_.wy, {
                    name: "/settings/collisionBounds/CollisionBoundsGroundPerimeterOn",
                    label: (0, m.Xx)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOn",
                    ),
                    title: (0, m.Xx)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOnDesc",
                    ),
                  }),
                  c.createElement(_.U4, {
                    min: 0.1,
                    max: 3,
                    detents: [2.4],
                    name: "/settings/collisionBounds/CollisionBoundsWallHeight",
                    label: (0, m.Xx)("#Settings_Chaperone_WallHeight"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: w.px.OnHandle,
                  }),
                  c.createElement(_.U4, {
                    min: 0.2,
                    max: 1.4,
                    detents: [0.7],
                    name: h.yQ,
                    label: (0, m.Xx)("#Settings_Chaperone_ActivationDistance"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: w.px.OnHandle,
                  }),
                  c.createElement(
                    "div",
                    { className: "SettingsItemValueLabel" },
                    s,
                  ),
                ),
              }),
              c.createElement(_.Ei, {
                label: (0, m.Xx)("#Settings_Appearance_PlayArea_FloorColor"),
                name: "/settings/steamvr/playAreaColor",
              }),
              c.createElement(ee, null),
              n &&
                c.createElement(_.wy, {
                  name: "/settings/steamvr/backgroundUseDomeProjection",
                  label: (0, m.Xx)("#Settings_Appearance_UseDomeProjection"),
                  title: (0, m.Xx)(
                    "#Settings_Appearance_UseDomeProjectionDesc",
                  ),
                  onSubsection: c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(_.U4, {
                      min: 1,
                      max: 10,
                      detents: [1.6],
                      name: h.EL,
                      label: (0, m.Xx)("#Settings_Appearance_DomeCameraHeight"),
                      title: (0, m.Xx)(
                        "#Settings_Appearance_DomeCameraHeightDesc",
                      ),
                      exponent: 2,
                    }),
                    c.createElement(_.U4, {
                      min: 2,
                      max: 250,
                      specialMaxValue: 0,
                      name: h.RD,
                      label: (0, m.Xx)("#Settings_Appearance_DomeCameraRadius"),
                      title: (0, m.Xx)(
                        "#Settings_Appearance_DomeCameraRadiusDesc",
                      ),
                      exponent: 5,
                    }),
                    c.createElement(
                      _.GV,
                      { className: "SettingsItem" },
                      c.createElement(
                        d.z,
                        {
                          className: "ButtonControl",
                          onClick: () => S.G3.ResetSettingsValues(h.EL, h.RD),
                        },
                        (0, m.Xx)(
                          "#Settings_Appearance_ResetDomeProjectionSettings",
                        ),
                      ),
                    ),
                  ),
                }),
              this.makeResetToDefaultButton(),
            )
          );
        }
      };
      var se;
      (ie.Name = "playarea_settings"), (ie = (0, i.gn)([l.Pi], ie));
      class oe {
        constructor() {
          (this.driverNameToIdMap = new Map()),
            H()
              .get("/drivers/list.json")
              .then((e) => {
                const t = e.data.drivers;
                (this.driverList = t),
                  t.map((e, t) => {
                    this.driverNameToIdMap.set(e.manifest.name, t);
                  });
              });
        }
        prettyName(e) {
          return oe.driverPrettyNames[e] || e;
        }
        unBlock(e) {
          S.G3.SetRestartRequired(),
            (this.driverList[
              this.driverNameToIdMap.get(e)
            ].blocked_by_safe_mode = !1);
          let t = { driver: e };
          return H().post("/drivers/unblock", t);
        }
        setEnabled(e, t) {
          S.G3.SetRestartRequired(),
            (this.driverList[this.driverNameToIdMap.get(e)].enabled = t);
          let n = { driver: e, enable: t };
          return H().post("/drivers/setenable", n);
        }
        get visibleDriverList() {
          return this.driverList.filter(
            (e) =>
              !e.manifest.resourceOnly &&
              (e.enabled_by_default != e.enabled ||
                !!e.blocked_by_safe_mode ||
                e.show_enable_in_settings),
          );
        }
        get numBlockedDrivers() {
          return this.visibleDriverList.filter((e) => e.blocked_by_safe_mode)
            .length;
        }
        get numDisabledDrivers() {
          return this.visibleDriverList.filter((e) => !e.enabled).length;
        }
        get numUserManuallyDisenabledDrivers() {
          return this.visibleDriverList.filter(
            (e) => e.enabled_by_default != e.enabled,
          ).length;
        }
      }
      (oe.driverPrettyNames = {
        lighthouse: "Lighthouse (Index, Vive, ...)",
        oculus: "Oculus (Rift, Rift S, Quest)",
        oculus_legacy: "Legacy Oculus (DK1, DK2)",
        gamepad: "Gamepad Support",
        null: "No HMD",
        holographic: "Windows MR / Holographic",
        "00natural": "Natural Locomotion",
        "00inputemulator": "OpenVR-InputEmulator",
        "01spacecalibrator": "Space Calibrator",
        aapvr: "Pimax",
        ivry: "iVRy (Phone, PSVR)",
        kinoni: "Kinoni (Phone)",
        amdwvr: "AMD ReLive for VR (Wireless)",
        alvr: "ALVR - Air Light VR (Gear VR, Oculus Go, Quest)",
        VirtualDesktop: "Virtual Desktop Streamer (Quest)",
        vrlink: "Steam Link",
      }),
        (0, i.gn)([a.LO], oe.prototype, "driverList", void 0),
        (0, i.gn)([a.Fl], oe.prototype, "visibleDriverList", null),
        (0, i.gn)([a.Fl], oe.prototype, "numBlockedDrivers", null),
        (0, i.gn)([a.Fl], oe.prototype, "numDisabledDrivers", null),
        (0, i.gn)(
          [a.Fl],
          oe.prototype,
          "numUserManuallyDisenabledDrivers",
          null,
        );
      const re = new oe(),
        ae = (0, l.Pi)(() =>
          c.createElement(
            d.z,
            {
              className: "ButtonControl",
              title: (0, m.Xx)("#Settings_Drivers_UnblockAllTip"),
              onClick: () =>
                (0, i.mG)(void 0, void 0, void 0, function* () {
                  const e = re.driverList
                    .filter((e) => e.blocked_by_safe_mode)
                    .map((e) => e.manifest.name);
                  for (let t = 0; t < e.length; ++t) yield re.unBlock(e[t]);
                }),
            },
            (0, m.Xx)("#Settings_Drivers_UnblockAll"),
          ),
        );
      function le(e) {
        return e.blocked
          ? c.createElement(
              _.GV,
              { className: "SettingsItem", title: e.title },
              c.createElement("div", { className: "Label" }, e.label),
              c.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  title: e.title,
                  onClick: e.onUnblock,
                },
                (0, m.Xx)("#Settings_Drivers_Unblock"),
              ),
            )
          : c.createElement(_.wy, {
              label: e.label,
              title: e.title,
              onChange: e.onToggleEnable,
              value: e.enabled,
            });
      }
      const ce = (0, l.Pi)(() =>
        c.createElement(
          c.Fragment,
          null,
          re.visibleDriverList.map((e) =>
            c.createElement(le, {
              key: e.manifest.name,
              label: re.prettyName(e.manifest.name),
              title: e.manifest.name,
              blocked: e.blocked_by_safe_mode,
              enabled: e.enabled,
              onToggleEnable: (t) => {
                return (n = e.manifest.name), (i = t), void re.setEnabled(n, i);
                var n, i;
              },
              onUnblock: () => {
                return (t = e.manifest.name), void re.unBlock(t);
                var t;
              },
            }),
          ),
        ),
      );
      let de = (se = class extends c.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = re.numBlockedDrivers,
            t = re.numDisabledDrivers,
            n =
              S.G3.showAdvancedSettings ||
              e ||
              re.numUserManuallyDisenabledDrivers,
            i = S.G3.routePageSection == se.PAGE_SECTION;
          return c.createElement(
            c.Fragment,
            null,
            !!n &&
              c.createElement(
                "div",
                { className: "SettingsItem Button" },
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => S.G3.setRoutePageSection(se.PAGE_SECTION),
                  },
                  (0, m.Xx)("#Settings_Drivers_ShowDriverManagerUI"),
                  0 != e &&
                    c.createElement(
                      "div",
                      { className: "Badge DriversBlocked" },
                      (0, m.Xx)("#Settings_Drivers_Number_Blocked", e),
                    ),
                  0 == e &&
                    0 != t &&
                    c.createElement(
                      "div",
                      { className: "Badge DriversDisabled" },
                      (0, m.Xx)("#Settings_Drivers_Number_Disabled", t),
                    ),
                ),
              ),
            i &&
              re.driverList &&
              c.createElement(
                _.TB,
                {
                  header: (0, m.Xx)("#Settings_Drivers_Header"),
                  subheader:
                    0 == e
                      ? null
                      : c.createElement(
                          "div",
                          { className: "BlockedSubheader" },
                          c.createElement(
                            "div",
                            { className: "Label" },
                            (0, m.Xx)("#Settings_Drivers_SomeBlocked"),
                          ),
                          c.createElement(ae, null),
                        ),
                  onDismissRequested: () => S.G3.setRoutePageSection(null),
                },
                c.createElement(ce, null),
              ),
          );
        }
      });
      (de.PAGE_SECTION = "drivermanager"), (de = se = (0, i.gn)([l.Pi], de));
      let ue = class extends c.Component {
        constructor(e) {
          super(e), (this.state = { bShowingModal: !1 });
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          const e = !!S.G3.apps,
            t = e
              ? S.G3.apps.filter(
                  (e) =>
                    e.is_dashboard_overlay && e.key != h.Pv && !e.is_internal,
                )
              : [],
            n = t.filter((e) => e.is_autolaunch);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              _.GV,
              {
                className: "SettingsItem",
                title: e ? null : (0, m.Xx)("#Settings_Loading"),
              },
              c.createElement(
                d.z,
                { className: "ButtonControl", enabled: e, onClick: this.show },
                (0, m.Xx)("#Settings_ChooseStartupOverlayApps"),
                e &&
                  c.createElement(
                    "div",
                    { className: "Badge" },
                    (0, m.Xx)("#Settings_Number_Selected", n.length),
                  ),
              ),
            ),
            this.state.bShowingModal &&
              c.createElement(
                _.TB,
                {
                  className: "OverlayAutoLaunchModal",
                  header: (0, m.Xx)("#Settings_StartTheseOverlayAppsOnLaunch"),
                  onDismissRequested: this.hide,
                },
                t.map((e) =>
                  c.createElement(_.wy, {
                    key: e.key,
                    label: e.name,
                    value: e.is_autolaunch,
                    onChange: (t) =>
                      S.G3.SetAppSettings(e.key, { is_autolaunch: t }),
                  }),
                ),
                !t.length &&
                  c.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, m.Xx)(
                      "#Settings_ChooseStartupOverlayApps_NoOverlayAppsInstalled",
                    ),
                  ),
              ),
          );
        }
      };
      (0, i.gn)([o.ZP], ue.prototype, "show", null),
        (0, i.gn)([o.ZP], ue.prototype, "hide", null),
        (ue = (0, i.gn)([l.Pi], ue));
      let pe = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(ue, null),
                c.createElement(de, null),
                c.createElement("hr", null),
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (pe.Name = "startupshutdown_settings"), (pe = (0, i.gn)([l.Pi], pe));
      var he,
        me = n(3033),
        ge = n(3107),
        Se = n(9764);
      class _e extends c.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bRestartAnimation: !1,
              bShowSteamVRRestartRequired: !1,
              bShowAppRestartRequired: !1,
            });
        }
        get enabled() {
          const e = (0, s.Op)() == s.qA.Overlay;
          return this.props.standalonePanel == e;
        }
        onExitApp() {
          null === s.Co || void 0 === s.Co || s.Co.QuitSceneApp();
        }
        onRestartSteamVR() {
          s.Co
            ? s.Co.RestartSteamVR(!1)
            : window.open("vrmonitor://restartsystem");
        }
        onRestartRequired() {
          this.setState(
            { bShowSteamVRRestartRequired: !0, bRestartAnimation: !0 },
            () => {
              setTimeout(() => {
                this.setState({ bRestartAnimation: !1 });
              }, 10);
            },
          );
        }
        onAppRestartRequired(e) {
          this.setState(
            { bShowAppRestartRequired: !e, bRestartAnimation: !0 },
            () => {
              setTimeout(() => {
                this.setState({ bRestartAnimation: !1 });
              }, 10);
            },
          );
        }
        componentDidMount() {
          this.enabled &&
            ((S.G3.onRestartRequired = this.onRestartRequired),
            (S.G3.onAppRestartRequired = this.onAppRestartRequired));
        }
        componentWillUnmount() {
          this.enabled &&
            (S.G3.onRestartRequired == this.onRestartRequired &&
              (S.G3.onRestartRequired = null),
            S.G3.onAppRestartRequired == this.onAppRestartRequired &&
              (S.G3.onAppRestartRequired = null));
        }
        render() {
          if (!this.enabled) return null;
          let e = null;
          if (
            (this.state.bShowSteamVRRestartRequired
              ? (e = c.createElement(
                  d.q,
                  {
                    className:
                      "SettingsRestartRequiredBanner Shown" +
                      (this.state.bRestartAnimation ? " ReShimmer" : ""),
                  },
                  c.createElement(
                    "div",
                    { className: "Label" },
                    (0, m.Xx)("#Settings_MustRestart_Description"),
                  ),
                  c.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onRestartSteamVR,
                    },
                    (0, m.Xx)("#Settings_MustRestart_RestartSteamVR_Button"),
                  ),
                ))
              : this.state.bShowAppRestartRequired &&
                (e = c.createElement(
                  d.q,
                  {
                    className:
                      "SettingsRestartRequiredBanner Shown" +
                      (this.state.bRestartAnimation ? " ReShimmer" : ""),
                  },
                  c.createElement(
                    "div",
                    { className: "Label" },
                    (0, m.Xx)("#Settings_MustQuitApp_Description"),
                  ),
                  c.createElement(
                    d.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, m.Xx)("#Settings_MustQuitApp_QuitCurrentGame_Button"),
                  ),
                )),
            this.props.standalonePanel)
          ) {
            if (null === e) return null;
            const t = "mainmountable_TopCenter";
            return c.createElement(
              s.wx,
              { parent_id: t, translation: { y: 0.2, z: -0.05 } },
              c.createElement(
                s.s_,
                {
                  debug_name: "settingsrestartbanner",
                  curvature_origin_id: h.Pt,
                  origin: s.Ic.BottomCenter,
                  interactive: !0,
                  meters_per_pixel: h.F$,
                  reflect: 0.1,
                },
                e,
              ),
            );
          }
          return e;
        }
      }
      (0, i.gn)([o.ak], _e.prototype, "onExitApp", null),
        (0, i.gn)([o.ak], _e.prototype, "onRestartSteamVR", null),
        (0, i.gn)([o.ak], _e.prototype, "onRestartRequired", null),
        (0, i.gn)([o.ak], _e.prototype, "onAppRestartRequired", null);
      let ve = (he = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_refSettingsPageContainer = c.createRef()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_fidelitySettingsObserver = null),
            (this.state = { sActiveSettingSection: null });
        }
        componentDidMount() {
          (this.m_routeObservingAutorunDisposer = (0, a.EH)(() => {
            S.G3.routePage
              ? this.setState({ sActiveSettingSection: S.G3.routePage })
              : S.G3.setRoutePage(
                  S.G3.settingsSchema.filter(he.shouldShowSection)[0]
                    .controller,
                );
          })),
            (this.m_fidelitySettingsObserver = new g.kB()),
            this.ListenForHomeEnabledChanges();
        }
        componentDidUpdate(e, t) {
          this.state.sActiveSettingSection !== t.sActiveSettingSection &&
            this.m_refSettingsPageContainer.current &&
            (this.m_refSettingsPageContainer.current.scrollTop = 0);
        }
        componentWillUnmount() {
          var e, t;
          null === (e = this.m_routeObservingAutorunDisposer) ||
            void 0 === e ||
            e.call(this),
            (this.m_routeObservingAutorunDisposer = null),
            null === (t = this.m_fidelitySettingsObserver) ||
              void 0 === t ||
              t.cleanup(),
            (this.m_fidelitySettingsObserver = null);
        }
        render() {
          const e = !S.G3.connected || !S.G3.settingsSchema;
          let t = null;
          e && (0, s.Op)() != s.qA.Overlay
            ? (t = c.createElement(
                "div",
                { className: "Label" },
                (0, m.Xx)("#Settings_Loading"),
              ))
            : e ||
              (((0, s.Op)() != s.qA.Overlay || this.props.visible) &&
                (t = this.renderSettingsPanelContents()));
          let n = null;
          if ((0, s.Op)() == s.qA.Overlay) {
            const e = "mainmountable",
              i = e + "_TopCenter";
            n = c.createElement(
              s.Y9,
              {
                id: "settingstab",
                tabName: (0, m.Xx)("#VRMonitor_Nav_Settings"),
                iconUri: "/dashboard/images/icons/svr_settings.svg",
                summonOverlayKey: h.A4,
                mountableUnqualifiedID: e,
              },
              t && c.createElement(_e, { standalonePanel: !0 }),
              t &&
                c.createElement(
                  r.lL,
                  {
                    visible: !0,
                    debugName: "settings",
                    additionalClassNames: "Settings",
                    foregroundReflectMultiplier: 0.25,
                    summonOverlayKey: h.A4,
                  },
                  c.createElement(ye, null),
                  c.createElement(s.at, { id: i, location: s.Ic.TopCenter }),
                  t,
                ),
            );
          } else n = t;
          return c.createElement(
            "div",
            {
              className: (0, g.LJ)(
                "SettingsMain",
                (0, s.Op)() == s.qA.Overlay ? "Overlay" : "Desktop",
                ["Loading", e],
              ),
            },
            n,
          );
        }
        renderSettingsPanelContents() {
          const e = S.G3.settingsSchema.filter(he.shouldShowSection);
          return c.createElement(
            d.q,
            { className: "SettingsMainPanel" },
            c.createElement(_e, { standalonePanel: !1 }),
            c.createElement(
              "div",
              { className: "SettingsSidebarPageModalContainer" },
              c.createElement(
                u.sC,
                { className: "SettingsSidebarPageContainer" },
                c.createElement(
                  "div",
                  { className: (0, g.LJ)("SettingsSidebar") },
                  e.map(this.renderSectionButton),
                  c.createElement("div", { className: "Spacer" }),
                  c.createElement(
                    "div",
                    {
                      className: (0, g.LJ)(
                        "Bottom",
                        "AdvancedSettingsToggle",
                        ["Fadable", !S.G3.showAdvancedSettings],
                        ["Active", S.G3.showAdvancedSettings],
                      ),
                    },
                    c.createElement(_.wy, {
                      label: (0, m.Xx)("#Settings_AdvancedSettings"),
                      value: S.G3.showAdvancedSettings,
                      onChange: (e) => (S.G3.showAdvancedSettings = e),
                      onLabel: (0, m.Xx)("#Settings_Show"),
                      offLabel: (0, m.Xx)("#Settings_Hide"),
                    }),
                  ),
                ),
                c.createElement(
                  p.P,
                  {
                    scrollDirection: p.I.Vertical,
                    alwaysShowScrollbars: !0,
                    className: (0, g.LJ)("SettingsPageContainer"),
                    ref: this.m_refSettingsPageContainer,
                  },
                  e.map(this.renderSectionPage),
                ),
              ),
            ),
          );
        }
        renderSectionButton(e) {
          let t = ["SettingsSidebarButton"];
          return (
            this.state.sActiveSettingSection === e.controller &&
              t.push("Active"),
            c.createElement(
              d.z,
              {
                key: e.title,
                className: t.join(" "),
                onClick: () => S.G3.setRoutePage(e.controller),
                releaseSoundEffect: ge.y.PagedSettingsNavigation,
              },
              c.createElement(
                "div",
                { className: "Label" },
                (0, m.Xx)(e.title),
              ),
            )
          );
        }
        renderSectionPage(e) {
          const t = e.controller ? e.controller : "generic",
            n = this.state.sActiveSettingSection === e.controller,
            i =
              [y, pe, ie, F.Yw, M, P, I, L, V, $, k.P].find(
                (e) => e.Name === t,
              ) || _.d9;
          return c.createElement(i, { key: e.title, section: e, active: n });
        }
        static shouldShowSection(e) {
          if (
            e.internal_only &&
            !S.G3.showInternalSettings &&
            !S.G3.settings.get(he.k_sShowInternalSettings)
          )
            return !1;
          if (
            e.controller == L.Name &&
            (0, s.Op)() == s.qA.Overlay &&
            !S.G3.settings.get(he.k_sForceShowOpenXRSettings)
          )
            return !1;
          if (
            !e.show_without_hmd &&
            !(null === s.Co || void 0 === s.Co ? void 0 : s.Co.HasHMD())
          )
            return !1;
          if (
            !e.show_without_hmd &&
            e.driver &&
            e.driver !==
              s.Co.VRProperties.GetStringProperty(
                "/user/head",
                s.Uk.ActualTrackingSystemName_String,
              )
          )
            return !1;
          if (e.desktop_only && (0, s.Op)() == s.qA.Overlay) return !1;
          let t =
            e.controller == I.Name &&
            S.G3.settings.get(he.k_sShowDashboardSettings);
          return (
            !(e.advanced_only && !S.G3.showAdvancedSettings && !t) &&
            !(
              e.controller == M.Name &&
              !(null === s.Co || void 0 === s.Co
                ? void 0
                : s.Co.VRProperties.GetBoolProperty(
                    "/user/head",
                    s.Uk.HasCamera_Bool,
                  ))
            ) &&
              "internet_settings" != e.controller &&
                !!(
                  e.controller != y.Name ||
                  (S.G3.systemInfo && S.G3.systemInfo.os_type >= 0)
                ) &&
            !(!s.Co && e.web_helper_only)
          );
        }
        ListenForHomeEnabledChanges() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if ((0, s.Op)() != s.qA.Overlay) return;
            let e = yield S.G3.GetSettingsValue(h.je);
            s.Co &&
              (0, a.EH)(() => {
                let t = S.G3.settings.get(h.je);
                void 0 !== t &&
                  t != e &&
                  (t && !s.Co.VRApplications.GetSceneApplicationKey()
                    ? s.Co.VRApplications.LaunchApplication(h.hK)
                    : t ||
                      s.Co.VRApplications.GetSceneApplicationKey() != h.hK ||
                      s.Co.QuitSceneApp(),
                  (e = t));
              });
          });
        }
      });
      (ve.k_sForceShowOpenXRSettings =
        "/settings/steamvr/forceShowOpenXRSettings"),
        (ve.k_sShowInternalSettings = "/settings/steamvr/showInternalSettings"),
        (ve.k_sShowDashboardSettings =
          "/settings/steamvr/showDashboardSettings"),
        (0, i.gn)([o.ak], ve.prototype, "renderSectionButton", null),
        (0, i.gn)([o.ak], ve.prototype, "renderSectionPage", null),
        (ve = he = (0, i.gn)([l.Pi], ve));
      const ye = (0, l.Pi)(function (e) {
        const t = E.BV.isVRGamepadUI,
          n = Se.J.GetActivePooledPopups().find(
            (e) =>
              e.parent_overlay_key == h.T2 &&
              e.popup_overlay_key.includes("mainmenu"),
          );
        return t && n
          ? c.createElement(me.p, { popupRequest: n, reparent: !1 })
          : null;
      });
    },
    7095: (e, t, n) => {
      n.d(t, { P: () => O, f: () => E });
      var i = n(655),
        s = n(7294),
        o = n(7056),
        r = n(7062),
        a = n(3568),
        l = n(1628),
        c = n(8242),
        d = n(5177),
        u = n(1569),
        p = n(9809),
        h = n(5211),
        m = n(2188),
        g = n(1283);
      class S extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.Nv()),
            (this.m_deviceDetails = null),
            (this.m_controllerType = null),
            (this.m_thumbstickSourceName = null),
            (this.m_lastX = 0),
            (this.m_lastY = 0),
            (this.m_addedPoint = !1),
            (this.m_edgeValues = []),
            (this.m_deviceDetails = p.I.GetDeviceInfo(this.props.devicePath)),
            (this.m_controllerType = p.I.GetControllerTypeInfo(
              this.m_deviceDetails.controller_type,
            ));
          for (let e in this.m_controllerType.input_source)
            if ("joystick" == this.m_controllerType.input_source[e].type) {
              this.m_thumbstickSourceName = e;
              break;
            }
          this.m_mailbox.RegisterHandler(
            "update_component_states",
            this.OnUpdateComponentStates,
          ),
            this.m_mailbox.Init("calibrate_thumbstick").then(() => {
              if (this.m_thumbstickSourceName) {
                let e = {
                  type: "request_input_state_updates",
                  device_path: this.props.devicePath,
                  returnAddress: this.m_mailbox.name,
                };
                return this.m_mailbox.SendMessage("input_server", e), null;
              }
            }),
            (this.state = { edgeValue: [] });
        }
        componentWillUnmount() {
          let e = {
            type: "cancel_input_state_updates",
            device_path: this.props.devicePath,
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("input_server", e);
        }
        OnUpdateComponentStates(e) {
          let t = !1;
          for (let n in e.components) {
            let i = e.components[n];
            n == this.m_thumbstickSourceName + "/x"
              ? ((this.m_lastX = i), (t = !0))
              : n == this.m_thumbstickSourceName + "/y" &&
                ((this.m_lastY = i), (t = !0));
          }
          if (t) {
            let e = Math.sqrt(
              this.m_lastX * this.m_lastX + this.m_lastY * this.m_lastY,
            );
            this.m_addedPoint
              ? e < 0.2 && (this.m_addedPoint = !1)
              : e > 0.95 &&
                ((this.m_addedPoint = !0),
                this.m_edgeValues.push({ x: this.m_lastX, y: this.m_lastY }),
                this.setState({ edgeValue: this.m_edgeValues }));
          }
        }
        OnCancel() {
          this.props.fnCloseCalibrator();
        }
        ComputeCalibration() {
          if (this.m_edgeValues.length < 5) return null;
          {
            let e = [];
            for (let t of this.m_edgeValues) {
              let n = -Math.atan2(t.x, t.y);
              e.push((180 * n) / Math.PI);
            }
            return e.sort((e, t) => e - t), e[Math.floor(e.length / 2)];
          }
        }
        OnConfirm() {
          this.props.fnUpdateThumbstickCalibration(
            this.props.devicePath,
            this.ComputeCalibration(),
          ),
            this.props.fnCloseCalibrator();
        }
        render() {
          const e = 60;
          let t = [],
            n = 0;
          for (let i of this.state.edgeValue) {
            let o = i.x * e + e,
              r = -i.y * e + e;
            t.push(
              s.createElement("polyline", {
                key: n++,
                points: "60,60 " + o.toFixed(0) + "," + r.toFixed(0),
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
            );
          }
          let i = this.ComputeCalibration(),
            o = null;
          return (
            (o = i
              ? (0, a.Xx)("#Settings_General_InviteMoreSamples", i.toFixed(2))
              : (0, a.Xx)(
                  "#Settings_General_NotEnoughSamples",
                  5 - this.m_edgeValues.length,
                )),
            s.createElement(
              c.TB,
              {
                onDismissRequested: this.props.fnCloseCalibrator,
                header: (0, a.Xx)("#Settings_General_CalibrateThumbstick"),
                footer: s.createElement(
                  "div",
                  { className: "SettingsItem ButtonRow" },
                  s.createElement(
                    d.z,
                    {
                      key: "cancel",
                      className: "ButtonControl",
                      onClick: this.OnCancel,
                    },
                    (0, a.Xx)("#Settings_General_Cancel"),
                  ),
                  s.createElement("div", { className: "Spacer" }),
                  s.createElement(
                    d.z,
                    {
                      key: "confirm",
                      className: "ButtonControl",
                      enabled: !!i,
                      onClick: this.OnConfirm,
                    },
                    (0, a.Xx)("#Settings_General_Confirm"),
                  ),
                ),
              },
              s.createElement(
                "div",
                { className: "ThumbstickCalibrateBody" },
                s.createElement(
                  "div",
                  { className: "ThumbstickContainer" },
                  s.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: [0, 0, 120, 120].join(" "),
                    },
                    s.createElement("circle", {
                      cx: e,
                      cy: e,
                      r: e,
                      strokeWidth: "0.1rem",
                    }),
                    t,
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "Label ThumbstickAngle" },
                  o,
                ),
              ),
            )
          );
        }
      }
      (0, i.gn)([o.ak], S.prototype, "OnUpdateComponentStates", null),
        (0, i.gn)([o.ak], S.prototype, "OnCancel", null),
        (0, i.gn)([o.ak], S.prototype, "OnConfirm", null);
      var _,
        v,
        y = n(9671),
        b = n(5928),
        f = n(4979),
        C = n(7176);
      const w = (0, r.Pi)(() => {
          const e = "managevivetrackers";
          if (
            !(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRDashboardManager.ShouldShowTrackerUI())
          )
            return null;
          const t = l.G3.routePageSection == e;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              { className: "SettingsItem Button" },
              s.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  onClick: () => l.G3.setRoutePageSection(e),
                },
                (0, a.Xx)("#Settings_General_ShowTrackerUI"),
              ),
            ),
            t &&
              s.createElement(
                c.TB,
                {
                  header: (0, a.Xx)("#Settings_ViveTrackers"),
                  onDismissRequested: () => l.G3.setRoutePageSection(null),
                },
                s.createElement(g.s, null),
              ),
          );
        }),
        R = (0, r.Pi)(() => {
          const e = "debuglegacyinput";
          if (!p.I.BDevMode) return null;
          const t = l.G3.routePageSection == e;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              { className: "SettingsItem Button" },
              s.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  enabled: !!VRHTML,
                  onClick: () => l.G3.setRoutePageSection(e),
                },
                (0, a.Xx)("#AppSelect_LegacyDebug"),
              ),
            ),
            t &&
              s.createElement(
                c.TB,
                {
                  header: (0, a.Xx)("#AppSelect_LegacyDebug"),
                  onDismissRequested: () => l.G3.setRoutePageSection(null),
                },
                s.createElement(y.V, null),
              ),
          );
        }),
        A = (0, r.Pi)(() => {
          const e = "testcontrollers",
            t = l.G3.routePageSection == e;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              { className: "SettingsItem Button" },
              s.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  onClick: () => l.G3.setRoutePageSection(e),
                },
                (0, a.Xx)("#AppSelect_ControllerTester"),
              ),
            ),
            t &&
              s.createElement(b.L, {
                onDismissRequested: () => l.G3.setRoutePageSection(null),
              }),
          );
        });
      function M(e) {
        return s.createElement(
          c.GV,
          { visibility: c.VK.Advanced, className: "SettingsItem Button" },
          s.createElement(
            c.ls,
            {
              icon: c.uc.PopOut,
              onClick: function () {
                let t = "bindingui/" + u.qA[(0, u.Op)()];
                e.mailbox.SendMessage(t, { type: "show_app_binding" });
              },
            },
            (0, a.Xx)("#Settings_ShowBindingUI"),
          ),
        );
      }
      function k(e) {
        return p.I.BDevMode
          ? s.createElement(
              c.GV,
              { className: "SettingsItem Button" },
              s.createElement(
                c.ls,
                {
                  icon: c.uc.PopOut,
                  onClick: function () {
                    if (VRHTML) {
                      switch ((0, u.Op)()) {
                        case u.qA.Desktop:
                          VRHTML.ShowBindingUI(!0);
                          break;
                        case u.qA.Overlay:
                          VRHTML.ShowBindingUI(!1);
                      }
                      let t = "bindingui/" + u.qA[(0, u.Op)()];
                      e.mailbox.SendMessage(t, { type: "show_input_debugger" });
                    } else
                      window.open(
                        "/dashboard/controllerbinding.html?debugger=true",
                      );
                  },
                },
                (0, a.Xx)("#BindingUI_InputDebugger"),
              ),
            )
          : null;
      }
      let B = (_ = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1, sDeviceToCalibrate: null });
        }
        resetToDefaults() {
          _.devices.forEach((e) => {
            this.updateCalibration(e.sDevicePath, 0);
          });
        }
        closeCalibrator() {
          this.setState({ sDeviceToCalibrate: null });
        }
        updateCalibration(e, t) {
          this.closeCalibrator(),
            _.devices.some(
              (n) =>
                n.sDevicePath == e &&
                (l.G3.SetSettingsValue(this.getThumbstickRotationSetting(e), t),
                !0),
            );
        }
        getThumbstickRotationSetting(e) {
          let t = null;
          return (
            _.devices.some((n) => {
              if (n.sDevicePath == e) {
                const i = p.I.GetDeviceInfo(e);
                return (
                  i &&
                    (t =
                      n.sThumbstickAngleSettingPathPrefix + i.controller_type),
                  !0
                );
              }
              return !1;
            }),
            t
          );
        }
        shouldShowThumbstickCalibrateForHand(e) {
          const t = p.I.GetDeviceInfo(e);
          if (!t) return !1;
          const n = p.I.GetControllerTypeInfo(t.controller_type);
          if (!n) return !1;
          for (let e in n.input_source)
            if ("joystick" == n.input_source[e].type) return !0;
          return !1;
        }
        showCalibration(e) {
          this.setState({ sDeviceToCalibrate: e });
        }
        GetThumbstickDeadzoneSetting() {
          let e = p.I.GetDeviceInfo("/user/hand/left");
          return (
            e || (e = p.I.GetDeviceInfo("/user/hand/right")),
            e &&
            (this.shouldShowThumbstickCalibrateForHand("/user/hand/left") ||
              this.shouldShowThumbstickCalibrateForHand("/user/hand/right"))
              ? "/settings/input/thumbstickDeadzone_" + e.controller_type
              : null
          );
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.closeCalibrator(), this.setState({ bShowingModal: !1 });
        }
        render() {
          let e = this.GetThumbstickDeadzoneSetting(),
            t = 0;
          return (
            e && l.G3.settings.has(e) && l.G3.settings.get(e),
            s.createElement(
              s.Fragment,
              null,
              s.createElement(
                c.GV,
                { className: "SettingsItem" },
                s.createElement(
                  d.z,
                  { className: "ButtonControl", onClick: this.show },
                  (0, a.Xx)("#Settings_ShowThumbstickSettings"),
                ),
              ),
              this.state.bShowingModal &&
                s.createElement(
                  c.TB,
                  {
                    header: (0, a.Xx)("#Settings_ThumbstickSettings"),
                    onDismissRequested: this.hide,
                  },
                  null !== this.state.sDeviceToCalibrate &&
                    s.createElement(S, {
                      devicePath: this.state.sDeviceToCalibrate,
                      fnCloseCalibrator: this.closeCalibrator,
                      fnUpdateThumbstickCalibration: this.updateCalibration,
                    }),
                  _.devices.map((e) => {
                    if (
                      !this.shouldShowThumbstickCalibrateForHand(e.sDevicePath)
                    )
                      return s.createElement(
                        c.GV,
                        {
                          key: e.sDevicePath,
                          title: (0, a.Xx)(
                            "#Settings_General_CalibrateThumbstick_ConnectAController",
                          ),
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, a.Xx)(
                            e.sThumbstickAngleLabelPlaceholderUnlocalized,
                          ),
                        ),
                        s.createElement(
                          d.z,
                          { className: "ButtonControl", enabled: !1 },
                          (0, a.Xx)("#Settings_General_Calibrate"),
                        ),
                      );
                    let t = l.G3.settings.get(
                      this.getThumbstickRotationSetting(e.sDevicePath),
                    );
                    return (
                      null == t && (t = 0),
                      s.createElement(
                        c.GV,
                        {
                          key: e.sDevicePath,
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, a.Xx)(
                            e.sThumbstickAngleLabelUnlocalized,
                            t.toFixed(1),
                          ),
                        ),
                        s.createElement(
                          d.z,
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              this.showCalibration(e.sDevicePath);
                            },
                          },
                          (0, a.Xx)("#Settings_General_Calibrate"),
                        ),
                      )
                    );
                  }),
                  e &&
                    s.createElement(c.U4, {
                      min: 0,
                      max: 0.5,
                      step: 0.01,
                      valueStyleVariant: f.px.OnHandle,
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                      name: e,
                      label: (0, a.Xx)("#Settings_ThumbstickDeadzone_Text"),
                      title: (0, a.Xx)("#Settings_ThumbstickDeadzone_Desc"),
                    }),
                ),
            )
          );
        }
      });
      (B.devices = [
        {
          sDevicePath: "/user/hand/left",
          sThumbstickAngleSettingPathPrefix:
            "/settings/input/leftThumbstickRotation_",
          sThumbstickAngleLabelUnlocalized:
            "#Settings_General_LeftThumbstickAngle",
          sThumbstickAngleLabelPlaceholderUnlocalized:
            "#Settings_General_LeftThumbstickAngle_NoValue",
        },
        {
          sDevicePath: "/user/hand/right",
          sThumbstickAngleSettingPathPrefix:
            "/settings/input/rightThumbstickRotation_",
          sThumbstickAngleLabelUnlocalized:
            "#Settings_General_RightThumbstickAngle",
          sThumbstickAngleLabelPlaceholderUnlocalized:
            "#Settings_General_RightThumbstickAngle_NoValue",
        },
      ]),
        (0, i.gn)([o.ak], B.prototype, "resetToDefaults", null),
        (0, i.gn)([o.ak], B.prototype, "closeCalibrator", null),
        (0, i.gn)([o.ak], B.prototype, "updateCalibration", null),
        (0, i.gn)([o.ak], B.prototype, "showCalibration", null),
        (0, i.gn)([o.ak], B.prototype, "show", null),
        (0, i.gn)([o.ak], B.prototype, "hide", null),
        (B = _ = (0, i.gn)([r.Pi], B));
      let E = (v = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.Nv()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = s.createRef()),
            (this.state = {
              currentBindingApp: null,
              currentControllerType: h.c6.GetBestControllerType(),
              currentActionManifest: null,
              currentBinding: null,
              rCurrentBindingList: null,
              bForceToggleToCustom: !1,
              eDominantHand: null,
            }),
            this.m_mailbox.Init("settings_binding_manager");
        }
        componentDidMount() {
          this.setState({
            currentControllerType: h.c6.GetBestControllerType(),
          }),
            (this.m_bindingSubscriptionChangedCanaryDisposer = (0, m.N7)(
              h.c6,
              "BindingSubscriptionChangedCanary",
              (e) => {
                this.updateStateForApp(this.state.currentBindingApp);
              },
            )),
            (this.m_routeObservingAutorunDisposer = (0, m.EH)(() => {
              var e;
              if (this.shouldShowModal) {
                const t = this.currentRouteAppKey;
                t &&
                  (null === (e = this.m_refAppSelectDropdown.current) ||
                    void 0 === e ||
                    e.setCurrentApp(t));
              }
            }));
        }
        componentWillUnmount() {
          this.m_bindingSubscriptionChangedCanaryDisposer &&
            (this.m_bindingSubscriptionChangedCanaryDisposer(),
            (this.m_bindingSubscriptionChangedCanaryDisposer = null)),
            this.m_routeObservingAutorunDisposer &&
              (this.m_routeObservingAutorunDisposer(),
              (this.m_routeObservingAutorunDisposer = null));
        }
        static OpenDeepLink(e, t) {
          l.G3.setRoute(e, v.PAGE_SECTION, t ? [t] : null),
            null === VRHTML || void 0 === VRHTML || VRHTML.ShowSettingsUI();
        }
        get shouldShowModal() {
          return l.G3.routePageSection == v.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = l.G3.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        loadAppActionManifest(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = yield (0, h._l)(e);
            if (t.error) throw new Error(t.error);
            return t;
          });
        }
        loadBindingConfig(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (yield (0, h.Cl)(
              e,
              this.state.currentControllerType.controller_type,
              t.current_binding_url[
                this.state.currentControllerType.controller_type
              ],
            )).binding_config;
          });
        }
        updateStateForApp(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.state.currentBindingApp &&
              e.key == this.state.currentBindingApp.key) ||
              this.setState({
                currentBindingApp: e,
                currentActionManifest: null,
                currentBinding: null,
                rCurrentBindingList: null,
                bForceToggleToCustom: !1,
              });
            let t = yield this.loadAppActionManifest(e.key);
            if (
              (this.setState({
                currentActionManifest: t,
                bForceToggleToCustom: !1,
              }),
              t.supports_dominant_hand_setting)
            ) {
              let t = yield l.G3.GetAppSettings(e.key);
              this.setState({ eDominantHand: t.dominant_hand });
            } else this.setState({ eDominantHand: void 0 });
            let n = yield this.loadBindingConfig(e.key, t);
            this.setState({ currentBinding: n });
          });
        }
        onApplicationDropdownChange(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.setState((t, n) => {
              var i;
              if (t.currentBindingApp === e) return null;
              e && this.updateStateForApp(e),
                l.G3.setRoutePageSectionParams([
                  null !== (i = null == e ? void 0 : e.key) && void 0 !== i
                    ? i
                    : "",
                ]);
            });
          });
        }
        onToggleDefaultCustomBinding(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = (
              e
                ? this.state.currentActionManifest.previous_binding_url
                : this.state.currentActionManifest.default_bindings
            )[this.state.currentControllerType.controller_type];
            t
              ? yield h.c6.SelectConfig(
                  this.state.currentBindingApp.key,
                  this.state.currentControllerType.controller_type,
                  t,
                )
              : this.setState({ bForceToggleToCustom: !0 });
          });
        }
        showBindingDetail(e) {
          let t = {
            type: "show_app_binding",
            app_key: this.state.currentBindingApp.key,
          };
          e &&
            (t.controller_type =
              this.state.currentControllerType.controller_type);
          let n = "bindingui/" + u.qA[(0, u.Op)()];
          this.m_mailbox.SendMessage(n, t);
        }
        show() {
          l.G3.setRoutePageSection(v.PAGE_SECTION);
        }
        close() {
          l.G3.setRoutePageSection(null);
        }
        showBindingCallouts() {
          var e, t;
          let n =
              null !==
                (e = this.state.currentBindingApp
                  ? this.state.currentBindingApp.key
                  : null) && void 0 !== e
                ? e
                : null !==
                      (t =
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.VRApplications.GetSceneApplicationKey()) &&
                    void 0 !== t
                  ? t
                  : "openvr.component.vrcompositor",
            i = {
              type: "request_binding_callouts",
              returnAddress: this.m_mailbox.name,
              app_key: n,
              controller_type: this.state.currentControllerType.controller_type,
            };
          this.m_mailbox.SendMessage(C.Ml, i);
        }
        onToggleDominantHand(e) {
          let t = e
            ? u.Kg.TrackedControllerRole_RightHand
            : u.Kg.TrackedControllerRole_LeftHand;
          this.setAppState("dominant_hand", t),
            this.setState({ eDominantHand: t });
        }
        setAppState(e, t) {
          if (null != this.state.currentBindingApp) {
            let n = {};
            (n[e] = t),
              l.G3.SetAppSettings(this.state.currentBindingApp.key, n);
          }
        }
        render() {
          var e, t;
          let n = "",
            i = "";
          try {
            (n =
              this.state.currentActionManifest.current_binding_url[
                this.state.currentControllerType.controller_type
              ]),
              (i =
                this.state.currentActionManifest.default_bindings[
                  this.state.currentControllerType.controller_type
                ]);
          } catch (e) {}
          const o = this.state.bForceToggleToCustom || !i || i != n,
            r =
              (null === (e = this.state.currentActionManifest) || void 0 === e
                ? void 0
                : e.supports_dominant_hand_setting) &&
              null != this.state.eDominantHand,
            l =
              this.state.eDominantHand == u.Kg.TrackedControllerRole_RightHand;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              c.GV,
              { className: "SettingsItem" },
              s.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.show },
                (0, a.Xx)("#Settings_Controller_AdvancedControllerSettings"),
              ),
            ),
            this.shouldShowModal &&
              s.createElement(
                c.TB,
                {
                  className: "BindingsModal",
                  header: s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "h1",
                      null,
                      (0, a.Xx)(
                        "#Settings_ManageControllerBindingSettingsForApp",
                      ),
                    ),
                    s.createElement(c.YL, {
                      ref: this.m_refAppSelectDropdown,
                      defaultAppKey:
                        null !== (t = this.currentRouteAppKey) && void 0 !== t
                          ? t
                          : null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRApplications.GetSceneApplicationKey(),
                      stateKey: "settings_controller_binding",
                      showCompositor: !0,
                      defaultLabel: (0, a.Xx)(
                        "#Settings_PerApplication_ChooseApplication",
                      ),
                      onChange: this.onApplicationDropdownChange,
                    }),
                  ),
                  subheader: p.I.IsSteamAvailable
                    ? null
                    : (0, a.Xx)("#Settings_NeedSteamTo_ViewAndEditBindings"),
                  onDismissRequested: this.close,
                },
                this.state.currentControllerType &&
                  s.createElement(
                    c.GV,
                    { className: "SettingsItem" },
                    s.createElement(
                      "div",
                      { className: "Label" },
                      (0, a.Xx)("#Settings_ActiveController"),
                    ),
                    s.createElement(
                      "div",
                      { className: "Label" },
                      p.I.LocalizeDriverString(
                        this.state.currentControllerType.resource_root,
                        this.state.currentControllerType.controller_type,
                      ),
                    ),
                  ),
                !p.I.IsSteamAvailable &&
                  this.state.currentBinding &&
                  s.createElement(
                    c.GV,
                    { className: "SettingsItem" },
                    s.createElement(
                      "div",
                      { className: "Label" },
                      (0, a.Xx)("#Settings_ActiveBinding"),
                    ),
                    s.createElement(
                      "div",
                      { className: "Label" },
                      this.state.currentBinding.name,
                    ),
                  ),
                p.I.IsSteamAvailable &&
                  s.createElement(c.wy, {
                    label: (0, a.Xx)("#Settings_ActiveControllerBinding"),
                    offLabel: (0, a.Xx)("#Settings_Controller_DefaultBinding"),
                    onLabel: (0, a.Xx)("#Settings_Controller_CustomBinding"),
                    onChange: this.onToggleDefaultCustomBinding,
                    value: o,
                    onSubsection: s.createElement(
                      s.Fragment,
                      null,
                      (!n || !this.state.currentBinding) &&
                        s.createElement(
                          "div",
                          { className: "SettingsItem Label" },
                          (0, a.Xx)("#Settings_Loading_CurrentBinding"),
                        ),
                      o &&
                        s.createElement(
                          "div",
                          {
                            className:
                              "SettingsItem ButtonRow BindingButtonRow",
                          },
                          s.createElement(
                            c.ls,
                            {
                              icon: c.uc.PopOut,
                              enabled: p.I.IsSteamAvailable && Boolean(n),
                              onClick: this.showBindingDetail.bind(this, !0),
                            },
                            (0, a.Xx)("#Settings_EditBinding"),
                          ),
                          s.createElement(
                            c.ls,
                            {
                              icon: c.uc.PopOut,
                              enabled: p.I.IsSteamAvailable,
                              onClick: this.showBindingDetail.bind(this, !1),
                            },
                            (0, a.Xx)("#Settings_EditBinding_ChooseAnother"),
                          ),
                        ),
                    ),
                  }),
                s.createElement("div", { className: "Spacer" }),
                this.state.currentBinding &&
                  s.createElement(T, {
                    appKey: this.state.currentBindingApp.key,
                  }),
                r &&
                  s.createElement(c.wy, {
                    label: (0, a.Xx)("#Settings_DominantHand"),
                    offLabel: (0, a.Xx)("#Settings_DominantHand_Left"),
                    onLabel: (0, a.Xx)("#Settings_DominantHand_Right"),
                    onChange: this.onToggleDominantHand,
                    value: l,
                  }),
              ),
          );
        }
      });
      (E.PAGE_SECTION = "appcontrollerbindings"),
        (0, i.gn)([m.Fl], E.prototype, "shouldShowModal", null),
        (0, i.gn)([m.Fl], E.prototype, "currentRouteAppKey", null),
        (0, i.gn)([o.ak], E.prototype, "onApplicationDropdownChange", null),
        (0, i.gn)([o.ak], E.prototype, "onToggleDefaultCustomBinding", null),
        (0, i.gn)([o.ak], E.prototype, "showBindingDetail", null),
        (0, i.gn)([o.ak], E.prototype, "show", null),
        (0, i.gn)([o.ak], E.prototype, "close", null),
        (0, i.gn)([o.ak], E.prototype, "showBindingCallouts", null),
        (0, i.gn)([o.ak], E.prototype, "onToggleDominantHand", null),
        (E = v = (0, i.gn)([r.Pi], E));
      const T = (e) =>
        s.createElement(
          c.GV,
          { className: "SettingsItem" },
          s.createElement(
            d.z,
            {
              className: "ButtonControl",
              onClick: () => {
                var t, n;
                return l.G3.showBindingCallouts(
                  null !== (t = e.appKey) && void 0 !== t
                    ? t
                    : null !==
                          (n =
                            null === VRHTML || void 0 === VRHTML
                              ? void 0
                              : VRHTML.VRApplications.GetSceneApplicationKey()) &&
                        void 0 !== n
                      ? n
                      : "openvr.component.vrcompositor",
                );
              },
            },
            (0, a.Xx)(
              (0, u.Op)() == u.qA.Overlay
                ? "#Settings_Controller_ShowBindingCallouts"
                : "#Settings_Controller_ShowBindingCalloutsInVR",
            ),
          ),
        );
      let I = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.Nv()),
            (this.state = { bShowingModal: !1, dongles: [], isPairing: !1 }),
            (this.m_mailbox = new u.Nv()),
            this.m_mailbox
              .Init("PairControllersModal")
              .then(() => {
                this.m_mailbox.RegisterHandler(
                  "discover_dongles_response",
                  this.OnDiscoverDonglesResponse,
                );
              })
              .catch((e) => {
                console.log("Failed to open PairControllersModal mailbox " + e);
              });
        }
        OnDiscoverDonglesResponse(e) {
          console.log("OnDiscoverDonglesResponse " + e),
            this.setState({ dongles: e.dongles, isPairing: e.isPairing });
        }
        DiscoverDongles() {
          let e = {
            type: "discover_dongles",
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("lighthouse_pairing", e);
        }
        StartPairing(e) {
          let t = {
            type: "start_pairing",
            returnAddress: this.m_mailbox.name,
            serial: e,
            timeoutSeconds: 10,
            sendStatusUpdates: !0,
          };
          this.m_mailbox.SendMessage("lighthouse_pairing", t),
            this.setState({ isPairing: !0 }),
            console.log("StartPairing " + e);
        }
        show() {
          this.DiscoverDongles(), this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          const e = 0 == this.state.dongles.length;
          let t = [];
          for (let e of this.state.dongles) {
            let n = s.createElement(
              "div",
              { key: e.serial, className: "ButtonRow" },
              "Dongle ",
              e.serial,
              " connected to ",
              e.connectedSerial,
              !this.state.isPairing &&
                s.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => this.StartPairing(e.serial),
                  },
                  " ",
                  (0, a.Xx)("#Settings_Controller_Pair"),
                  " ",
                ),
              e.isPairing &&
                s.createElement(
                  "h2",
                  null,
                  " ",
                  (0, a.Xx)("#Settings_Controller_Pairing"),
                  " ",
                ),
            );
            t.push(n);
          }
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              c.GV,
              { className: "SettingsItem" },
              s.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.show },
                (0, a.Xx)("#Settings_Controller_PairControllers"),
              ),
            ),
            this.state.bShowingModal &&
              s.createElement(
                c.TB,
                {
                  header: (0, a.Xx)(
                    "#Settings_Controller_ControllerPairingSection",
                  ),
                  onDismissRequested: this.hide,
                },
                s.createElement(s.Fragment, null, t),
                e &&
                  s.createElement(
                    "h1",
                    null,
                    "No controller dongles detected.",
                  ),
              ),
          );
        }
      };
      (0, i.gn)([o.ak], I.prototype, "OnDiscoverDonglesResponse", null),
        (0, i.gn)([o.ak], I.prototype, "DiscoverDongles", null),
        (0, i.gn)([o.ak], I.prototype, "StartPairing", null),
        (0, i.gn)([o.ak], I.prototype, "show", null),
        (0, i.gn)([o.ak], I.prototype, "hide", null),
        (I = (0, i.gn)([r.Pi], I));
      let D = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.Nv()),
            (this.m_DeviceEventCallbackHandle = null),
            (this.m_DeviceFirmwareEventCallbackHandle = null),
            (this.state = { bShowingModal: !1, controllers: [] }),
            (this.m_mailbox = new u.Nv()),
            this.m_mailbox
              .Init("UpdateControllersModal")
              .then(() => {
                this.m_mailbox.RegisterHandler(
                  "controller_firmware_update_status",
                  this.OnControllerUpdateStatus,
                );
              })
              .catch((e) => {
                console.log(
                  "Failed to open UpdateControllersModal mailbox " + e,
                );
              });
        }
        OnControllerUpdateStatus(e) {
          this.setState({ controllers: e.controllers });
        }
        StartUpdate(e) {
          let t = {
            type: "update_start",
            returnAddress: this.m_mailbox.name,
            serial: e,
          };
          this.m_mailbox.SendMessage("controller_firmware_update", t),
            console.log("StartUpdate " + e);
        }
        onDeviceEvent(e, t, n) {
          this.state.bShowingModal && this.forceUpdate();
        }
        onFirmwareStateChanged(e) {
          this.state.bShowingModal && this.forceUpdate();
        }
        componentDidMount() {
          (this.m_DeviceEventCallbackHandle =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.RegisterForDeviceEvents(this.onDeviceEvent)),
            (this.m_DeviceFirmwareEventCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForFirmwareStateChangedEvents(
                    this.onFirmwareStateChanged,
                  ));
        }
        componentWillUnmount() {
          this.m_DeviceEventCallbackHandle &&
            (this.m_DeviceEventCallbackHandle.unregister(),
            (this.m_DeviceEventCallbackHandle = null)),
            this.m_DeviceFirmwareEventCallbackHandle &&
              (this.m_DeviceFirmwareEventCallbackHandle.unregister(),
              (this.m_DeviceFirmwareEventCallbackHandle = null));
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          var e, t, n;
          let i = [];
          for (let o of null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRSystem.GetTrackedDeviceClasses().filter(
                (e) => e.eClass == u.qR.Controller,
              )) {
            let r =
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetStringProperty(
                          o.unIndex,
                          u.Uk.ModelNumber_String,
                        )) && void 0 !== e
                  ? e
                  : "Unknown Controller",
              a =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetStringProperty(
                          o.unIndex,
                          u.Uk.SerialNumber_String,
                        )) && void 0 !== t
                  ? t
                  : "",
              l =
                null !==
                  (n =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetBoolProperty(
                          o.unIndex,
                          u.Uk.Firmware_UpdateAvailable_Bool,
                        )) &&
                void 0 !== n &&
                n,
              c = null;
            this.state.controllers.some((e) => e.serial == a && ((c = e), !0));
            let p = s.createElement(
              "div",
              { key: a },
              s.createElement("div", null, r, " - ", a),
              s.createElement(
                "div",
                null,
                !l &&
                  !(null == c ? void 0 : c.updateInProgress) &&
                  s.createElement("div", null, "Up to date"),
                (null == c ? void 0 : c.updateInProgress) &&
                  s.createElement("progress", { value: c.updateProgress }),
                l &&
                  !c &&
                  s.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: () => this.StartUpdate(a),
                    },
                    " ",
                    "Update",
                    " ",
                  ),
                l &&
                  (null == c ? void 0 : c.updateError) &&
                  s.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: () => this.StartUpdate(a),
                    },
                    " ",
                    "Retry",
                    " ",
                  ),
              ),
            );
            i.push(p);
          }
          const o = 0 == i.length;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              c.GV,
              { className: "SettingsItem" },
              s.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.show },
                "Update Controllers",
              ),
            ),
            this.state.bShowingModal &&
              s.createElement(
                c.TB,
                { header: "Update Controllers", onDismissRequested: this.hide },
                s.createElement(s.Fragment, null, i),
                o && s.createElement("h1", null, "No controllers connected."),
              ),
          );
        }
      };
      (0, i.gn)([o.ak], D.prototype, "OnControllerUpdateStatus", null),
        (0, i.gn)([o.ak], D.prototype, "StartUpdate", null),
        (0, i.gn)([o.ak], D.prototype, "onDeviceEvent", null),
        (0, i.gn)([o.ak], D.prototype, "onFirmwareStateChanged", null),
        (0, i.gn)([o.ak], D.prototype, "show", null),
        (0, i.gn)([o.ak], D.prototype, "hide", null),
        (D = (0, i.gn)([r.Pi], D));
      let O = class extends c.d9 {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.Nv()),
            (this.m_refControllerSettingsSection = s.createRef()),
            this.m_mailbox.Init("settings_controller_page");
        }
        ResetToDefaults() {
          super.ResetToDefaults(),
            this.m_refControllerSettingsSection.current &&
              this.m_refControllerSettingsSection.current.resetToDefaults();
        }
        render() {
          var e, t;
          if (!this.props.active) return null;
          const n =
              null !==
                (e = l.G3.settings.get(
                  "/settings/dashboard/allowInHeadsetControllerPairing",
                )) &&
              void 0 !== e &&
              e,
            i =
              null !==
                (t = l.G3.settings.get(
                  "/settings/dashboard/allowInHeadsetControllerUpdate",
                )) &&
              void 0 !== t &&
              t;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(T, null),
            s.createElement(E, null),
            s.createElement(M, { mailbox: this.m_mailbox }),
            s.createElement(B, { ref: this.m_refControllerSettingsSection }),
            s.createElement(A, null),
            s.createElement(w, null),
            s.createElement(R, null),
            s.createElement(k, { mailbox: this.m_mailbox }),
            n && s.createElement(I, null),
            i && s.createElement(D, null),
          );
        }
      };
      (O.Name = "controller_settings"),
        (0, i.gn)([o.ak], O.prototype, "ResetToDefaults", null),
        (O = (0, i.gn)([r.Pi], O));
    },
    8242: (e, t, n) => {
      n.d(t, {
        YL: () => z,
        d9: () => T,
        GV: () => E,
        VK: () => s,
        ls: () => K,
        uc: () => q,
        Ei: () => U,
        Xp: () => V,
        TB: () => X,
        U5: () => j,
        t0: () => F,
        D3: () => O,
        U4: () => P,
        wy: () => L,
        hR: () => N,
        vE: () => G,
      });
      var i,
        s,
        o = n(655),
        r = n(7294),
        a = n(7056),
        l = n(3568),
        c = n(2188),
        d = n(7062),
        u = n(1628),
        p = n(1569),
        h = n(3107),
        m = n(5177),
        g = n(8980),
        S = n(3930),
        _ = n(424),
        v = n(3010),
        y = n(7176),
        b = n(6698),
        f = n(4979),
        C = n(7475);
      function w(e, t, n) {
        (t = t.bind(VRHTML.VRPathProperties)),
          (n = n.bind(VRHTML.VRPathProperties));
        const [i, s] = r.useState(() => {
          try {
            return t(e);
          } catch (e) {
            return;
          }
        });
        return r.useEffect(() => (e ? n(e, s).unregister : void 0), [s, e]), i;
      }
      function R(e) {
        return w(
          e,
          VRHTML.VRPathProperties.GetStringPathProperty,
          VRHTML.VRPathProperties.RegisterForStringPathPropertyChangedEvents,
        );
      }
      function A(e) {
        return w(
          e,
          VRHTML.VRPathProperties.GetFloatPathProperty,
          VRHTML.VRPathProperties.RegisterForFloatPathPropertyChangedEvents,
        );
      }
      function M(e) {
        var t, n, i;
        const s = A(e.detent),
          o = {
            name: e.name,
            min: null !== (t = e.min) && void 0 !== t ? t : 0,
            max: null !== (n = e.max) && void 0 !== n ? n : 100,
            step: null !== (i = e.step) && void 0 !== i ? i : 5,
            detents: void 0 !== s ? [s] : void 0,
          };
        return r.createElement(
          P,
          Object.assign(
            {
              renderValue: (t) => {
                var n;
                return "number" == typeof t
                  ? t.toFixed(null !== (n = e.decimals) && void 0 !== n ? n : 0)
                  : JSON.stringify(t);
              },
              label: e.label ? (0, l.Xx)(e.label) : "",
              valueStyleVariant: f.px.OnHandle,
            },
            o,
          ),
        );
      }
      function k(e) {
        const t = R(e.name);
        return r.createElement(
          E,
          {
            className: (0, g.LJ)("SettingsItem", "RadioButtons"),
            title: e.text ? (0, l.Xx)(e.text) : "",
          },
          r.createElement(
            "div",
            { className: "Label" },
            e.label ? (0, l.Xx)(e.label) : "",
          ),
          r.createElement("div", { className: "RadioButtonsSet" }, t),
        );
      }
      function B(e) {
        let t;
        return (
          "string" == typeof e.value
            ? (t = R(e.path))
            : "boolean" == typeof e.value
              ? (t = w(
                  e.path,
                  VRHTML.VRPathProperties.GetBoolPathProperty,
                  VRHTML.VRPathProperties
                    .RegisterForBoolPathPropertyChangedEvents,
                ))
              : "number" == typeof e.value && (t = A(e.path)),
          t === e.value ? e.children : null
        );
      }
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Advanced = 1)] = "Advanced"),
          (e[(e.Desktop = 2)] = "Desktop"),
          (e[(e.VR = 3)] = "VR");
      })(s || (s = {}));
      let E = class extends r.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.label, delete e.subsection, delete e.visibility;
          let t = this.props.visibility == s.Advanced;
          switch (this.props.visibility) {
            case s.Desktop:
              t = (0, p.Op)() != p.qA.Desktop;
              break;
            case s.VR:
              t = (0, p.Op)() != p.qA.Overlay;
          }
          return t && !u.G3.showAdvancedSettings
            ? null
            : (this.props.visibility == s.Advanced &&
                (e.className = (0, g.LJ)(e.className, "Advanced")),
              r.createElement("div", e, this.props.children));
        }
      };
      E = (0, o.gn)([d.Pi], E);
      let T = class extends r.Component {
        constructor(e) {
          super(e);
        }
        makeSettingComponent(e) {
          if (e.requires)
            for (let t in e.requires) {
              let n = e.requires[t];
              if (u.G3.settings.get(t) != n) return null;
            }
          if (e.advanced_only && !u.G3.showAdvancedSettings) return null;
          let t = null;
          switch (e.control) {
            case "checkbox":
              t = r.createElement(I, {
                key: e.name,
                name: e.name,
                label: e.label ? (0, l.Xx)(e.label) : "",
                title: e.text ? (0, l.Xx)(e.text) : "",
              });
              break;
            case "toggle":
              t = r.createElement(L, {
                key: e.name,
                name: e.name,
                swapOnOff: e.inverted,
                onLabel: e.on_label && (0, l.Xx)(e.on_label),
                offLabel: e.off_label && (0, l.Xx)(e.off_label),
                label: e.label ? (0, l.Xx)(e.label) : "",
                title: e.text ? (0, l.Xx)(e.text) : "",
              });
              break;
            case "select":
              let n = e.options
                .filter((e) => null != e)
                .map((e, t) => ({
                  value: e.value,
                  sLabel: (0, l.Xx)(e.label),
                }));
              t = r.createElement(V, {
                key: e.name,
                name: e.name,
                label: e.label ? (0, l.Xx)(e.label) : "",
                title: e.text ? (0, l.Xx)(e.text) : "",
                items: n,
              });
              break;
            case "radio":
              let i = e.options
                .filter((e) => null != e)
                .map((e, t) => ({
                  value: e.value,
                  sLabel: (0, l.Xx)(e.label),
                }));
              t = r.createElement(F, {
                key: e.name,
                name: e.name,
                label: e.label ? (0, l.Xx)(e.label) : "",
                items: i,
              });
              break;
            case "scale":
            case "none":
            default:
              t = r.createElement("div", { key: e.name });
              break;
            case "slider":
              t = r.createElement(M, Object.assign({ key: e.name }, e));
              break;
            case "label":
              t = r.createElement(k, Object.assign({ key: e.name }, e));
          }
          if (
            (e.advanced_only &&
              (t = r.createElement(
                E,
                { key: e.name, className: "SettingsItem Advanced" },
                t,
              )),
            e.requires_paths)
          )
            for (let n in e.requires_paths)
              t = r.createElement(
                B,
                { key: e.name, path: n, value: e.requires_paths[n] },
                t,
              );
          return t;
        }
        makeResetToDefaultButton() {
          return r.createElement(
            "div",
            { className: "SettingsItem Button ResetDefaultButton" },
            r.createElement(
              m.z,
              { className: "ButtonControl", onClick: this.ResetToDefaults },
              (0, l.Xx)("#Settings_ResetPageToDefault"),
            ),
          );
        }
        ResetToDefaults() {
          for (let e of this.props.section.values)
            null != e.name && u.G3.SetSettingsValue(e.name, null);
        }
        get schemaComponents() {
          if (!this.props.section.values) return null;
          let e = [];
          for (let t of this.props.section.values)
            if (t.control) {
              let n = this.makeSettingComponent(t);
              n && e.push(n);
            }
          return e;
        }
        GetComponentsForGroup(e) {
          let t = [];
          for (let n of this.props.section.values)
            if (n.control && n.group == e) {
              let e = this.makeSettingComponent(n);
              e && t.push(e);
            }
          return r.createElement("div", null, t);
        }
        render() {
          return this.props.active
            ? r.createElement(
                r.Fragment,
                null,
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (0, o.gn)([a.ak], T.prototype, "ResetToDefaults", null),
        (0, o.gn)([c.Fl], T.prototype, "schemaComponents", null),
        (T = (0, o.gn)([d.Pi], T));
      let I = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsCheckbox cannot have both an explicit value and a settings name set in props.",
            );
        }
        handleChange(e) {
          let t = e.target.checked;
          this.props.name && u.G3.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            m.q.temporarilySuppressSoundEffect(),
            h.G.Instance.playSound(h.y.ButtonClick);
        }
        render() {
          let e = !!this.props.value;
          return (
            this.props.name && (e = !!u.G3.settings.get(this.props.name)),
            r.createElement(
              "div",
              { className: "FlexRow SettingsItem Checkbox" },
              r.createElement(
                "label",
                { className: "SettingsCheckboxContainer FlexRow" },
                r.createElement("input", {
                  type: "checkbox",
                  checked: e,
                  onChange: this.handleChange,
                }),
                r.createElement(
                  "div",
                  { className: "FlexColumn" },
                  this.props.label &&
                    r.createElement(
                      "div",
                      { className: "Label" },
                      this.props.label,
                    ),
                  this.props.title &&
                    r.createElement(
                      "div",
                      { className: "Label Description" },
                      this.props.title,
                    ),
                ),
              ),
            )
          );
        }
      };
      (0, o.gn)([a.ak], I.prototype, "handleChange", null),
        (I = (0, o.gn)([d.Pi], I));
      let D = class extends r.Component {
        constructor(e) {
          super(e);
        }
        handleChange(e) {}
        render() {
          let e = u.G3.settings.get(this.props.name);
          return r.createElement(
            E,
            {
              className: (0, g.LJ)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            r.createElement("div", { className: "Label" }, this.props.label),
            r.createElement("div", { className: "RadioButtonsSet" }, e),
          );
        }
      };
      (0, o.gn)([a.ak], D.prototype, "handleChange", null),
        (D = (0, o.gn)([d.Pi], D));
      let O = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            (this.state = { nMouseDownIndex: 0 }),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsSegmentedControl cannot have both an explicit value and a settings name set in props.",
            );
          if (
            void 0 !== this.props.subsection &&
            void 0 !== this.props.valueSubsections
          )
            throw new Error(
              "SettingsSegmentedControl cannot have both a constantly-visible subsection and value-dependent subsections (valueSubsections) set in props.",
            );
        }
        getCurrentValue() {
          return this.props.name
            ? u.G3.settings.get(this.props.name)
            : this.props.value;
        }
        onItemClick(e) {
          let t = e.value;
          if (this.ValuesAreEqual(t, this.getCurrentValue())) {
            if (2 != this.props.items.length) return;
            t = this.props.items.find(
              (e) => !this.ValuesAreEqual(e.value, t),
            ).value;
          }
          this.props.name && u.G3.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            (0, p.Op)() == p.qA.Overlay &&
              (m.q.temporarilySuppressSoundEffect(),
              h.G.Instance.playSound(h.y.ButtonClick)),
            this.props.requiresRestart && u.G3.SetRestartRequired();
        }
        onGroupMouseEnter() {
          2 == this.props.items.length &&
            (0, p.Op)() == p.qA.Overlay &&
            _.L.Instance.triggerHaptic(p.sH.ButtonEnter);
        }
        onGroupMouseLeave() {
          2 == this.props.items.length &&
            (0, p.Op)() == p.qA.Overlay &&
            _.L.Instance.triggerHaptic(p.sH.ButtonLeave);
        }
        onOptionMouseEnter() {
          2 != this.props.items.length &&
            (0, p.Op)() == p.qA.Overlay &&
            _.L.Instance.triggerHaptic(p.sH.ButtonEnter);
        }
        onOptionMouseLeave() {
          2 != this.props.items.length &&
            (0, p.Op)() == p.qA.Overlay &&
            _.L.Instance.triggerHaptic(p.sH.ButtonLeave);
        }
        ValuesAreEqual(e, t) {
          return (
            ("boolean" != typeof e && "boolean" != typeof t) ||
              ((e = !!e), (t = !!t)),
            e === t
          );
        }
        render() {
          var e, t, n;
          const i = this.getCurrentValue(),
            s = this.props.items.findIndex((e) =>
              this.ValuesAreEqual(e.value, i),
            ),
            o =
              null !==
                (n =
                  null ===
                    (t =
                      null === (e = this.props.valueSubsections) || void 0 === e
                        ? void 0
                        : e.find((e) => this.ValuesAreEqual(e.value, i))) ||
                  void 0 === t
                    ? void 0
                    : t.subsection) && void 0 !== n
                ? n
                : this.props.subsection,
            a = !!o;
          return r.createElement(
            E,
            {
              className: (0, g.LJ)("SettingsItem", "SegmentedControl"),
              title: this.props.title,
              visibility: this.props.visibility,
            },
            r.createElement("div", { className: "Label" }, this.props.label),
            r.createElement(
              "div",
              { className: (0, g.LJ)("SubsectionStem", ["Hidden", !a]) },
              r.createElement(
                "div",
                {
                  className: (0, g.LJ)("SegmentedControlGroup", [
                    "DualValue",
                    2 == this.props.items.length,
                  ]),
                  style: {
                    "--item-count": this.props.items.length,
                    "--item-value-index": s,
                    "--toggle-control-translate-x-direction":
                      0 == s
                        ? 1
                        : s == this.props.items.length - 1
                          ? -1
                          : this.state.nMouseDownIndex > s
                            ? 1
                            : this.state.nMouseDownIndex < s
                              ? -1
                              : 0,
                  },
                  onMouseEnter: this.onGroupMouseEnter,
                  onMouseLeave: this.onGroupMouseLeave,
                },
                this.props.items.map((e, t) =>
                  r.createElement(
                    "div",
                    {
                      key: t,
                      className: (0, g.LJ)("SegmentedControlGroupOption", [
                        "Active",
                        this.ValuesAreEqual(e.value, i),
                      ]),
                      onClick: () => this.onItemClick(e),
                      onMouseDown: () => this.setState({ nMouseDownIndex: t }),
                      onMouseEnter: this.onOptionMouseEnter,
                      onMouseLeave: this.onOptionMouseLeave,
                    },
                    r.createElement("span", null, e.sLabel),
                  ),
                ),
              ),
            ),
            !!o &&
              r.createElement("div", { className: "Subsection WithStem" }, o),
          );
        }
      };
      (0, o.gn)([a.ak], O.prototype, "onGroupMouseEnter", null),
        (0, o.gn)([a.ak], O.prototype, "onGroupMouseLeave", null),
        (0, o.gn)([a.ak], O.prototype, "onOptionMouseEnter", null),
        (0, o.gn)([a.ak], O.prototype, "onOptionMouseLeave", null),
        (O = (0, o.gn)([d.Pi], O));
      let L = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsToggle cannot have both an explicit value and a settings name set in props.",
            );
          if (
            void 0 !== this.props.subsection &&
            (void 0 !== this.props.onSubsection ||
              void 0 !== this.props.offSubsection)
          )
            throw new Error(
              "SettingsToggle cannot have both a constantly-visible subsection and an onSubsection/offSubsection set in props.",
            );
        }
        render() {
          var e, t;
          const n = !!this.props.swapOnOff,
            i = !this.props.swapOnOff;
          return r.createElement(O, {
            name: this.props.name,
            label: this.props.label,
            title: this.props.title,
            items: [
              {
                value: n,
                sLabel:
                  null !== (e = this.props.offLabel) && void 0 !== e
                    ? e
                    : (0, l.Xx)("#Settings_ToggleButton_Off"),
              },
              {
                value: i,
                sLabel:
                  null !== (t = this.props.onLabel) && void 0 !== t
                    ? t
                    : (0, l.Xx)("#Settings_ToggleButton_On"),
              },
            ],
            value: this.props.value,
            onChange: this.props.onChange,
            requiresRestart: this.props.requiresRestart,
            subsection: this.props.subsection,
            valueSubsections: this.props.subsection
              ? void 0
              : [
                  { value: n, subsection: this.props.offSubsection },
                  { value: i, subsection: this.props.onSubsection },
                ],
            visibility: this.props.visibility,
          });
        }
      };
      L = (0, o.gn)([d.Pi], L);
      let V = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsDropdown cannot have both an explicit value and a settings name set in props.",
            );
        }
        get value() {
          return this.props.name
            ? u.G3.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            u.G3.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e),
            this.props.requiresRestart && u.G3.SetRestartRequired();
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onChange = this.onChange),
            (e.value = this.value),
            r.createElement(
              E,
              {
                className: "SettingsItem",
                title: this.props.title,
                visibility: this.props.visibility,
              },
              this.props.label &&
                r.createElement(
                  "div",
                  {
                    className: (0, g.LJ)("Label", [
                      "Spanning",
                      this.props.fullWidth,
                    ]),
                  },
                  this.props.label,
                ),
              r.createElement(
                "div",
                {
                  className: (0, g.LJ)("SubsectionStem", [
                    "Hidden",
                    !this.props.subsection,
                  ]),
                },
                r.createElement(v.Lt, Object.assign({}, e)),
              ),
              !!this.props.subsection &&
                r.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  this.props.subsection,
                ),
            )
          );
        }
      };
      (0, o.gn)([c.Fl], V.prototype, "value", null),
        (0, o.gn)([a.ak], V.prototype, "onChange", null),
        (V = (0, o.gn)([d.Pi], V));
      let F = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsRadioButtons cannot have both an explicit value and a settings name set in props.",
            );
        }
        get value() {
          return this.props.name
            ? u.G3.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            u.G3.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e);
        }
        render() {
          const e = this.props.items.map((e, t) => {
            const n = this.props.comparator
              ? this.props.comparator(this.value, e.value)
              : this.value == e.value;
            return r.createElement(
              m.z,
              {
                className: (0, g.LJ)("RadioButton", ["Selected", n]),
                key: t,
                enabled: !n,
                onClick: () => this.onChange(e.value),
              },
              r.createElement("div", { className: "Label" }, e.sLabel),
            );
          });
          return r.createElement(
            E,
            {
              className: (0, g.LJ)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            r.createElement("div", { className: "Label" }, this.props.label),
            r.createElement("div", { className: "RadioButtonsSet" }, e),
          );
        }
      };
      (0, o.gn)([c.Fl], F.prototype, "value", null),
        (0, o.gn)([a.ak], F.prototype, "onChange", null),
        (F = (0, o.gn)([d.Pi], F));
      let P = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsSlider cannot have both an explicit value and a settings name set in props.",
            );
          (this.state = {}),
            (this.m_sUniqueIdForFadeSupression = Math.random().toString());
        }
        onInteractionStart() {
          var e, t;
          this.props.dashboardFadeSupression &&
            u.G3.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !0,
            ),
            null === (t = (e = this.props).onInteractionStart) ||
              void 0 === t ||
              t.call(e);
        }
        onInteractionEnd() {
          var e, t;
          this.props.dashboardFadeSupression &&
            u.G3.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            ),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e);
        }
        get value() {
          if (this.props.name) {
            return u.G3.settings.get(this.props.name) || 0;
          }
          return this.props.value;
        }
        onChange(e) {
          var t, n;
          this.props.name &&
            u.G3.SetSettingsValue(this.props.name, e.toString()),
            null === (n = (t = this.props).onChange) ||
              void 0 === n ||
              n.call(t, e);
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onInteractionStart = this.onInteractionStart),
            (e.onInteractionEnd = this.onInteractionEnd),
            (e.onChange = this.onChange),
            (e.value = this.value),
            r.createElement(
              E,
              {
                className: (0, g.LJ)(
                  "SettingsItem",
                  "Slider",
                  this.props.additionalClassName,
                ),
                title: this.props.title,
              },
              this.props.label &&
                r.createElement(
                  "label",
                  {
                    className: (0, g.LJ)("Label", [
                      "Spanning",
                      this.props.labelSpans,
                    ]),
                  },
                  this.props.label,
                ),
              r.createElement(f.iR, Object.assign({}, e)),
            )
          );
        }
      };
      function x(e) {
        return (
          "#" +
          ("0" + Math.floor(e.r).toString(16)).slice(-2) +
          ("0" + Math.floor(e.g).toString(16)).slice(-2) +
          ("0" + Math.floor(e.b).toString(16)).slice(-2) +
          ("0" + Math.floor(255 * e.a).toString(16)).slice(-2)
        ).toUpperCase();
      }
      (0, o.gn)([a.ak], P.prototype, "onInteractionStart", null),
        (0, o.gn)([a.ak], P.prototype, "onInteractionEnd", null),
        (0, o.gn)([c.Fl], P.prototype, "value", null),
        (0, o.gn)([a.ak], P.prototype, "onChange", null),
        (P = (0, o.gn)([d.Pi], P));
      let G = (i = class extends r.Component {
        static HueToRGB(e, t, n) {
          return 6 * (n = (n + 1) % 1) < 1
            ? e + (t - e) * n * 6
            : 2 * n < 1
              ? t
              : 3 * n < 2
                ? e + (t - e) * (2 / 3 - n) * 6
                : e;
        }
        static HSLToRGB(e, t, n) {
          e /= 360;
          let s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
            o = 2 * n - s;
          return [
            i.HueToRGB(o, s, e + 1 / 3),
            i.HueToRGB(o, s, e),
            i.HueToRGB(o, s, e - 1 / 3),
          ];
        }
        static RGBtoHueLuminance(e, t, n) {
          (e /= 255), (t /= 255), (n /= 255);
          let i = Math.max(e, t, n),
            s = Math.min(e, t, n),
            o = 0,
            r = (i + s) / 2;
          if (i != s) {
            let r = i - s;
            switch (i) {
              case e:
                o = (t - n) / r + (t < n ? 6 : 0);
                break;
              case t:
                o = (n - e) / r + 2;
                break;
              case n:
                o = (e - t) / r + 4;
            }
            o /= 6;
          }
          return { hue: 360 * o, luminance: r };
        }
        onSliderChanged(e) {
          let t = [255, 255, 255];
          if (
            (e <= 360 && (t = i.HSLToRGB(e, 1, 0.5).map((e) => 255 * e)),
            this.props.name)
          ) {
            const e =
              "#" +
              (t[2] | (t[1] << 8) | (t[0] << 16)).toString(16).padStart(6, "0");
            u.G3.SetSettingsValue(this.props.name, e);
          }
          this.props.nameR &&
            this.props.nameG &&
            this.props.nameB &&
            (u.G3.SetSettingsValue(this.props.nameR, t[0]),
            u.G3.SetSettingsValue(this.props.nameG, t[1]),
            u.G3.SetSettingsValue(this.props.nameB, t[2])),
            this.props.onChange &&
              this.props.onChange({ r: t[0], g: t[1], b: t[2] });
        }
        render() {
          let e, t, n;
          this.props.nameR && this.props.nameG && this.props.nameB
            ? ((e = u.G3.settings.get(this.props.nameR)),
              (t = u.G3.settings.get(this.props.nameG)),
              (n = u.G3.settings.get(this.props.nameB)))
            : this.props.value &&
              ((e = this.props.value.r),
              (t = this.props.value.g),
              (n = this.props.value.b));
          const s = i.RGBtoHueLuminance(e, t, n),
            o = 360 / (1 - i.WHITE_SIZE_PERCENT),
            a = 255 == e && 255 == t && 255 == n ? o : s.hue;
          return r.createElement(P, {
            additionalClassName: "Hue",
            label: this.props.label,
            labelSpans: !0,
            title: this.props.text,
            styleVariant: f.uz.Color,
            renderValue: (e) =>
              e > 360 ? "white" : "hsl(" + e + ", 100%, 50%)",
            max: o,
            value: a,
            onChange: this.onSliderChanged,
          });
        }
      });
      (G.WHITE_SIZE_PERCENT = 0.03),
        (0, o.gn)([a.ak], G.prototype, "onSliderChanged", null),
        (G = i = (0, o.gn)([d.Pi], G));
      let N = class extends r.Component {
        get value() {
          return this.props.name
            ? u.G3.settings.get(this.props.name)
            : this.props.value;
        }
        onSliderChanged(e) {
          this.props.onChange && this.props.onChange(e),
            this.props.name && u.G3.SetSettingsValue(this.props.name, e);
        }
        render() {
          const e = this.props.color
            ? this.props.color
            : { r: 255, g: 255, b: 255 };
          return r.createElement(P, {
            additionalClassName: "Alpha",
            label: this.props.label,
            title: this.props.text,
            labelSpans: !0,
            styleVariant: f.uz.Color,
            renderValue: (t) =>
              "rgba(" +
              (e.r * t) / this.props.max +
              "," +
              (e.g * t) / this.props.max +
              "," +
              (e.b * t) / this.props.max +
              ",1)",
            sliderColor: "rgb(" + e.r + "," + e.g + "," + e.b + ")",
            min: this.props.min,
            max: this.props.max,
            value: this.value,
            onChange: this.onSliderChanged,
          });
        }
      };
      (0, o.gn)([c.Fl], N.prototype, "value", null),
        (0, o.gn)([a.ak], N.prototype, "onSliderChanged", null),
        (N = (0, o.gn)([d.Pi], N));
      let H,
        U = class extends r.Component {
          constructor(e) {
            super(e), (this.state = { bShowingModal: !1 });
          }
          get value() {
            if (this.props.name)
              return (e = u.G3.settings.get(this.props.name))
                ? {
                    r: parseInt(e.slice(1, 3), 16),
                    g: parseInt(e.slice(3, 5), 16),
                    b: parseInt(e.slice(5, 7), 16),
                    a: parseInt(e.slice(7, 9), 16) / 255,
                  }
                : { r: 0, g: 0, b: 0, a: 0 };
            if (
              this.props.nameR ||
              this.props.nameG ||
              this.props.nameB ||
              this.props.nameA
            ) {
              let e = { r: 0, g: 0, b: 0, a: 1 };
              return (
                this.props.nameR && (e.r = u.G3.settings.get(this.props.nameR)),
                this.props.nameG && (e.g = u.G3.settings.get(this.props.nameG)),
                this.props.nameB && (e.b = u.G3.settings.get(this.props.nameB)),
                this.props.nameA &&
                  (e.a = u.G3.settings.get(this.props.nameA) / this.alphaScale),
                e
              );
            }
            return this.props.value;
            var e;
          }
          get alphaScale() {
            return void 0 === this.props.alphaScale ? 1 : this.props.alphaScale;
          }
          onAlphaChange(e) {
            const t = this.value,
              n = { r: t.r, g: t.g, b: t.b, a: e };
            this.props.name && u.G3.SetSettingsValue(this.props.name, x(n)),
              this.props.nameA &&
                u.G3.SetSettingsValue(this.props.nameA, e * this.alphaScale),
              this.props.onChange && this.props.onChange(n);
          }
          get minA() {
            return void 0 === this.props.minA ? 0 : this.props.minA;
          }
          get maxA() {
            return void 0 === this.props.maxA ? 1 : this.props.maxA;
          }
          onColorChange(e) {
            const t = { r: e.r, g: e.g, b: e.b, a: this.value.a };
            this.props.name && u.G3.SetSettingsValue(this.props.name, x(t)),
              this.props.nameR && u.G3.SetSettingsValue(this.props.nameR, t.r),
              this.props.nameG && u.G3.SetSettingsValue(this.props.nameG, t.g),
              this.props.nameB && u.G3.SetSettingsValue(this.props.nameB, t.b),
              this.props.onChange && this.props.onChange(t);
          }
          showModal() {
            this.setState({ bShowingModal: !0 });
          }
          hideModal() {
            this.setState({ bShowingModal: !1 });
          }
          render() {
            const e = this.value;
            return r.createElement(
              E,
              {
                className: "SettingsItem ColorPicker",
                title: this.props.title,
              },
              this.props.label &&
                r.createElement(
                  "div",
                  { className: "Label" },
                  this.props.label,
                ),
              r.createElement(m.z, {
                className: "ButtonControl",
                onClick: this.showModal,
                style: {
                  "--color-value-rgb": e.r + "," + e.g + "," + e.b,
                  "--color-value-a": e.a,
                },
              }),
              this.state.bShowingModal &&
                r.createElement(
                  X,
                  {
                    onDismissRequested: this.hideModal,
                    header: this.props.label,
                  },
                  r.createElement(G, {
                    label: (0, l.Xx)("#Settings_Chaperone_BoundsColor"),
                    onChange: this.onColorChange,
                    value: e,
                  }),
                  r.createElement(N, {
                    label: (0, l.Xx)("#Settings_Chaperone_BoundsTransparency"),
                    min: this.minA,
                    max: this.maxA,
                    onChange: this.onAlphaChange,
                    color: e,
                    value: e.a,
                  }),
                ),
            );
          }
        };
      (0, o.gn)([c.Fl], U.prototype, "value", null),
        (0, o.gn)([c.Fl], U.prototype, "alphaScale", null),
        (0, o.gn)([a.ak], U.prototype, "onAlphaChange", null),
        (0, o.gn)([c.Fl], U.prototype, "minA", null),
        (0, o.gn)([c.Fl], U.prototype, "maxA", null),
        (0, o.gn)([a.ak], U.prototype, "onColorChange", null),
        (0, o.gn)([a.ak], U.prototype, "showModal", null),
        (0, o.gn)([a.ak], U.prototype, "hideModal", null),
        (U = (0, o.gn)([d.Pi], U));
      class W {
        constructor() {
          (this.m_sceneApplicationStateChangedEventHandle = null),
            (this.m_mapSelectedAppKeys = {}),
            (this.m_mapCallbacks = {}),
            (this.m_sceneApplicationStateChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
            this.onSceneApplicationStateChanged();
        }
        theresNoDestructor() {
          this.m_sceneApplicationStateChangedEventHandle &&
            (this.m_sceneApplicationStateChangedEventHandle.unregister(),
            (this.m_sceneApplicationStateChangedEventHandle = null));
        }
        register(e, t) {
          (this.m_mapCallbacks[e] = t),
            t(this.m_mapSelectedAppKeys[e] || this.runningAppKey);
        }
        unregister(e) {
          delete this.m_mapCallbacks[e];
        }
        setAppKey(e, t) {
          this.m_mapSelectedAppKeys[e] = t;
        }
        onSceneApplicationStateChanged() {
          var e;
          const t =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRApplications.GetSceneApplicationKey()) &&
            void 0 !== e
              ? e
              : null;
          t !== this.runningAppKey &&
            ((this.runningAppKey = t),
            (this.m_mapSelectedAppKeys = {}),
            Object.values(this.m_mapCallbacks).forEach((e) => {
              e(this.runningAppKey);
            }));
        }
      }
      (0, o.gn)([c.LO], W.prototype, "runningAppKey", void 0),
        (0, o.gn)([a.ak], W.prototype, "onSceneApplicationStateChanged", null);
      class z extends r.Component {
        constructor(e) {
          H || (H = new W()), super(e), (this.state = { currentApp: null });
        }
        componentDidMount() {
          H.register(this.props.stateKey, this.onSceneApplicationStateChanged);
        }
        componentWillUnmount() {
          H.unregister(this.props.stateKey);
        }
        onSceneApplicationStateChanged(e) {
          var t, n;
          const i = this.props.showCompositor
              ? "openvr.component.vrcompositor"
              : null,
            s =
              null !==
                (n =
                  null !== (t = this.props.defaultAppKey) && void 0 !== t
                    ? t
                    : e) && void 0 !== n
                ? n
                : i;
          this.setCurrentApp(s);
        }
        setCurrentApp(e) {
          const t = u.G3.apps && u.G3.apps.find((t) => t.key == e);
          this.setState((e, n) => {
            var i;
            return (null === (i = e.currentApp) || void 0 === i
              ? void 0
              : i.key) === (null == t ? void 0 : t.key)
              ? null
              : (this.props.onChange && this.props.onChange(t),
                { currentApp: t });
          });
        }
        makeAppChoiceList() {
          let e = [],
            t = " " + (0, l.Xx)("#Settings_PerApplication_DashboardSuffix");
          if (null != u.G3.apps)
            for (let n of u.G3.apps) {
              let i = !0;
              "openvr.component.vrcompositor" == n.key
                ? (i = !!this.props.showCompositor)
                : n.key == y.Pv
                  ? (i = !!this.props.showSteam)
                  : n.key == y.W4 || n.key == y.jW
                    ? (i = !!this.props.showSteamVR)
                    : n.key.startsWith("system.generated")
                      ? (i = !!this.props.showGenerated)
                      : n.is_internal
                        ? (i = !!this.props.showInternal)
                        : n.is_dashboard_overlay &&
                          (i = !!this.props.showOverlays),
                (i || n.current_scene_process) &&
                  e.push({
                    value: n.key,
                    sLabel: n.name + (n.is_dashboard_overlay ? t : ""),
                  });
            }
          const n = (e) =>
              e.value == H.runningAppKey ||
              "openvr.component.vrcompositor" == e.value,
            i = e.filter(n),
            s = e.filter((e) => !n(e));
          return (
            i.sort((e, t) =>
              e.value == H.runningAppKey
                ? -1
                : t.value == H.runningAppKey
                  ? 1
                  : "openvr.component.vrcompositor" == e.value
                    ? -1
                    : "openvr.component.vrcompositor" == t.value
                      ? 1
                      : e.sLabel.localeCompare(t.sLabel),
            ),
            s.sort((e, t) => e.sLabel.localeCompare(t.sLabel)),
            i.length > 0 && s.length > 0
              ? [...i, v.Kr.Separator, ...s]
              : i.length > 0
                ? i
                : s
          );
        }
        onControllerDropdownChanged(e) {
          H.setAppKey(this.props.stateKey, e), this.setCurrentApp(e);
        }
        render() {
          const e = this.makeAppChoiceList(),
            t = this.state.currentApp ? this.state.currentApp.key : null;
          return r.createElement(V, {
            label: this.props.label,
            items: e,
            value: t,
            defaultLabel:
              this.props.defaultLabel ||
              (0, l.Xx)("#Settings_PerApplication_ChooseApplication"),
            onChange: this.onControllerDropdownChanged,
            fullWidth: !0,
          });
        }
      }
      (0, o.gn)([a.ak], z.prototype, "onSceneApplicationStateChanged", null),
        (0, o.gn)([a.ak], z.prototype, "onControllerDropdownChanged", null);
      const X = (e) => {
          let t = Object.assign({}, e),
            n = t.header;
          "string" == typeof n && (n = r.createElement("h1", null, n));
          let i = t.subheader;
          "string" == typeof i &&
            (i = r.createElement("div", { className: "Label" }, i));
          let s = t.footer;
          void 0 === s &&
            (s = r.createElement(j, {
              onDismissRequested: t.onDismissRequested,
            }));
          const o = t.allowableParentSelectors || [];
          return (
            p.n0.IsSceneGraphApp ||
              (t.allowableParentSelectors = [
                ...o,
                ".SettingsSidebarPageModalContainer",
              ]),
            r.createElement(
              S.u,
              Object.assign({}, t),
              n && r.createElement("div", { className: "Subsection Top" }, n),
              i &&
                r.createElement(
                  "div",
                  { className: "Subsection Top Subheader" },
                  i,
                ),
              e.children &&
                r.createElement(
                  C.P,
                  {
                    scrollDirection: C.I.Vertical,
                    className: "Subsection Body",
                  },
                  t.children,
                ),
              s &&
                r.createElement("div", { className: "Subsection Bottom" }, s),
            )
          );
        },
        j = (e) => {
          let t = e.leftControls ? e.leftControls : [];
          e.showResetButton &&
            t.push(
              r.createElement(
                m.z,
                {
                  key: "reset",
                  className: "ButtonControl",
                  onClick: e.onResetRequested,
                },
                (0, l.Xx)("#Settings_ResetToDefault"),
              ),
            );
          let n = [
            r.createElement(
              m.z,
              {
                key: "close",
                className: "ButtonControl",
                onClick: e.onDismissRequested,
              },
              (0, l.Xx)("#Settings_General_Close"),
            ),
          ];
          return r.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            t,
            t.length > 0 &&
              n.length > 0 &&
              r.createElement("div", { className: "Spacer" }),
            n,
          );
        };
      var q;
      !(function (e) {
        e[(e.PopOut = 0)] = "PopOut";
      })(q || (q = {}));
      const K = (e) => {
        let t = null;
        return (
          void 0 !== e.icon &&
            e.icon === q.PopOut &&
            (t = r.createElement(b.ur, { className: "Icon" })),
          r.createElement(
            m.z,
            Object.assign(
              {
                className: (0, g.LJ)("ButtonControl", ["WithIcon", null !== t]),
              },
              e,
            ),
            r.createElement("span", null, e.children),
            t,
          )
        );
      };
    },
    2743: (e, t, n) => {
      n.d(t, {
        DX: () => y,
        Dc: () => w,
        RR: () => k,
        TO: () => B,
        Ux: () => O,
        Yw: () => L,
        nb: () => A,
      });
      var i,
        s = n(655),
        o = n(7294),
        r = n(2188),
        a = n(7056),
        l = n(3568),
        c = n(1628),
        d = n(8242),
        u = n(5177),
        p = n(1569),
        h = n(7062),
        m = n(8980),
        g = n(7176),
        S = n(3010),
        _ = n(4979);
      function v() {
        VRHTML
          ? VRHTML.PromptUserForDirectMode(!0)
          : window.open("vrmonitor://directmode/enable");
      }
      const y = (0, h.Pi)(() => {
          if (
            !c.G3.systemInfo ||
            0 == c.G3.systemInfo.refresh_rates.actual_display_frequency
          )
            return null;
          if (c.G3.systemInfo.refresh_rates.supported_rates.length > 1)
            return o.createElement(d.t0, {
              name: "/settings/steamvr/preferredRefreshRate",
              comparator: (e, t) => Math.round(e) == Math.round(t),
              label: (0, l.Xx)("#Settings_Video_RefreshRate_Label_Hz"),
              items: c.G3.systemInfo.refresh_rates.supported_rates.map((e) => ({
                value: e,
                sLabel: Math.round(e).toString(),
              })),
            });
          {
            const e = c.G3.systemInfo.refresh_rates.supports_multiple_rates,
              t = c.G3.systemInfo.extended_mode,
              n = Math.round(
                c.G3.systemInfo.refresh_rates.actual_display_frequency,
              );
            return o.createElement(
              d.GV,
              {
                className: "SettingsItem",
                title: e
                  ? null
                  : (0, l.Xx)("#Settings_Video_RefreshRate_OneSupported"),
              },
              o.createElement(
                "div",
                { className: "Label" },
                (0, l.Xx)("#Settings_Video_RefreshRate_Header"),
              ),
              o.createElement(
                "div",
                { className: (0, m.LJ)("Label", ["SubsectionStem", e]) },
                n + (0, l.Xx)("#Settings_Video_RefreshRate_HzSuffix"),
              ),
              e &&
                o.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  t &&
                    (0, l.Xx)(
                      "#Settings_Video_RefreshRate_NotAvailableExtended",
                    ),
                  t &&
                    (0, p.Op)() != p.qA.Overlay &&
                    o.createElement(
                      u.z,
                      { className: "ButtonControl", onClick: v },
                      (0, l.Xx)(
                        "#Settings_Video_RefreshRate_EnableDirectModeAction",
                      ),
                    ),
                  !t && (0, l.Xx)("#Settings_Video_RefreshRate_NotFound"),
                ),
            );
          }
        }),
        b = 3240,
        f = () => {
          const [e, t] = o.useState(!1),
            n = (0, l.Xx)(
              "#Settings_Advanced_Supersampling_WidthByHeight",
              b,
              b,
            );
          return o.createElement(
            o.Fragment,
            null,
            e &&
              o.createElement(
                d.TB,
                {
                  className: "MaxRecommendedResolutionRecovery",
                  footer: o.createElement(
                    u.z,
                    {
                      key: "close",
                      className: "ButtonControl",
                      onClick: () => t(!1),
                    },
                    (0, l.Xx)("#Settings_General_Cancel"),
                  ),
                  onDismissRequested: () => t(!1),
                },
                o.createElement(
                  "div",
                  { className: "Description" },
                  (0, l.Xx)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryStatement",
                    n,
                  ),
                ),
                o.createElement(
                  "div",
                  { className: "Description" },
                  (0, l.Xx)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryExplanation",
                    n,
                  ),
                ),
                o.createElement(
                  u.z,
                  {
                    className: "ButtonControl",
                    title: (0, l.Xx)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionAutoTip",
                    ),
                    onClick: () =>
                      (0, s.mG)(void 0, void 0, void 0, function* () {
                        c.G3.ResetAllAppResolutionScales().then(() => {
                          c.G3.ResetSettingsValue(g.bt),
                            c.G3.ResetSettingsValue(g.eW),
                            c.G3.ResetSettingsValue(g.wc);
                        });
                      }),
                  },
                  (0, l.Xx)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryActionAuto",
                  ),
                ),
                o.createElement(
                  u.z,
                  {
                    className: "ButtonControl",
                    title: (0, l.Xx)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionRemoveTip",
                    ),
                    onClick: () => {
                      c.G3.ResetSettingsValue(g.wc);
                    },
                  },
                  (0, l.Xx)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryActionRemove",
                  ),
                ),
              ),
            o.createElement(
              "div",
              { className: "Label" },
              (0, l.Xx)(
                "#Settings_Video_MaxRecommendedResolutionRecoveryText",
                n,
              ),
            ),
            o.createElement(
              u.z,
              {
                className: "ButtonControl",
                title: (0, l.Xx)(
                  "#Settings_Video_MaxRecommendedResolutionRecoveryTip",
                ),
                onClick: () => t(!0),
              },
              (0, l.Xx)("#Settings_Video_MaxRecommendedResolutionRecovery"),
            ),
          );
        },
        C = (0, h.Pi)(
          () => c.G3.settings.get(g.wc) == b && o.createElement(f, null),
        ),
        w = (0, h.Pi)(() => {
          const e = c.G3.settings.get(g.bt),
            t = c.G3.settings.get(g.eW);
          let n = [],
            i = c.G3.settings.get(g.aT);
          if ((i > 0 ? n.push(i) : n.push(1), null === e || null === t))
            return null;
          let s = null;
          if (
            c.G3.systemInfo &&
            null != c.G3.systemInfo.render_target_size.width &&
            0 != c.G3.systemInfo.render_target_size.height
          ) {
            const e = c.G3.SliderposToSupersample(t);
            let n = Math.max(
                512,
                Math.floor(
                  c.G3.systemInfo.render_target_size.width * Math.sqrt(e) + 0.5,
                ),
              ),
              i = Math.max(
                512,
                Math.floor(
                  c.G3.systemInfo.render_target_size.height * Math.sqrt(e) +
                    0.5,
                ),
              );
            const o = c.G3.settings.get(g.wc);
            Math.max(n, i) > o &&
              (n > i
                ? ((i = (o * i) / n), (n = o))
                : ((n = (o * n) / i), (i = o))),
              (n = 4 * Math.trunc(n / 4)),
              (i = 4 * Math.trunc(i / 4)),
              (s = (0, l.Xx)(
                "#Settings_Advanced_Supersampling_WidthByHeight",
                n,
                i,
              ));
          }
          return o.createElement(d.wy, {
            name: g.bt,
            label: (0, l.Xx)("#Settings_Advanced_Supersampling_Header"),
            onLabel: (0, l.Xx)("#Settings_Advanced_Supersampling_Auto"),
            offLabel: (0, l.Xx)("#Settings_Advanced_Supersampling_Custom"),
            title: e ? "" : (0, l.Xx)("#Explanation_Supersampling_Header"),
            swapOnOff: !0,
            offSubsection: o.createElement(
              o.Fragment,
              null,
              o.createElement(
                d.GV,
                { className: "SettingsItem" },
                o.createElement(
                  "div",
                  { className: "Label" },
                  (0, l.Xx)(
                    "#Settings_Advanced_Supersampline_ResolutionPerEye",
                  ),
                ),
                o.createElement(
                  "div",
                  { className: "Label Right Resolution" },
                  o.createElement("div", { className: "Dimensions" }, s),
                  o.createElement(
                    "div",
                    { className: "Percentage" },
                    Math.round(100 * t).toString() + "%",
                  ),
                ),
                o.createElement(d.U4, {
                  min: 0.2,
                  max: 5,
                  step: 0.02,
                  detents: n,
                  value: t,
                  onChange: (e) => c.G3.SetSettingsValue(g.eW, e),
                }),
                o.createElement(C, null),
              ),
            ),
          });
        });
      let R = class extends o.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1 }),
            (this.m_sUniqueIdForFadeSupression = Math.random().toString());
        }
        componentWillUnmount() {
          this.state.bShowingModal &&
            c.G3.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            );
        }
        showModal() {
          this.setState({ bShowingModal: !0 }),
            c.G3.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !0,
            );
        }
        hideModal() {
          this.setState({ bShowingModal: !1 }),
            c.G3.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            );
        }
        render() {
          if (!VRHTML) return null;
          const e = VRHTML.VRProperties.GetStringProperty(
            "/user/head",
            p.Uk.HmdColumnCorrectionSettingPrefix_String,
          );
          if (!e) return null;
          if ("firmware_update_required" == e)
            return o.createElement(
              d.GV,
              {
                title: (0, l.Xx)("#DisplaySettings_ColumnCorrectionDesc"),
                className: "SettingsItem",
                visibility: this.props.visibility,
              },
              o.createElement(
                "div",
                { className: "Label" },
                (0, l.Xx)("#DisplaySettings_ColumnCorrection"),
              ),
              o.createElement(
                "div",
                { className: "Subsection WithStem" },
                o.createElement(
                  "div",
                  { className: "Label" },
                  (0, l.Xx)("#DisplaySettings_Error_FirmwareUpdateNeeded"),
                ),
              ),
            );
          {
            let t = c.G3.settings.get(g.zL);
            const n = "/settings/driver_lighthouse/" + e + "_L",
              i = "/settings/driver_lighthouse/" + e + "_R";
            let s = c.G3.settings.get(n);
            null == s && (s = 0);
            let r = c.G3.settings.get(i);
            return (
              null == r && (r = 0),
              o.createElement(
                d.GV,
                {
                  className: "SettingsItem",
                  title: (0, l.Xx)("#DisplaySettings_ColumnCorrectionDesc"),
                  visibility: this.props.visibility,
                },
                o.createElement(
                  "div",
                  { className: "Label" },
                  (0, l.Xx)("#DisplaySettings_IndexColumnCorrection"),
                ),
                o.createElement(
                  u.z,
                  { className: "ButtonControl", onClick: this.showModal },
                  (0, l.Xx)("#DisplaySettings_ColumnCorrectionEdit"),
                ),
                this.state.bShowingModal &&
                  o.createElement(
                    d.TB,
                    {
                      onDismissRequested: this.hideModal,
                      allowableParentSelectors: [".SettingsMain"],
                      header: (0, l.Xx)(
                        "#DisplaySettings_IndexColumnCorrection",
                      ),
                      footer: o.createElement(d.U5, {
                        showResetButton: !0,
                        onResetRequested: () => {
                          c.G3.SetSettingsValue(g.zL, 1),
                            c.G3.SetSettingsValue(n, 0),
                            c.G3.SetSettingsValue(i, 0);
                        },
                        onDismissRequested: this.hideModal,
                      }),
                    },
                    o.createElement(d.wy, {
                      value: 0 != t,
                      title: (0, l.Xx)("#DisplaySettings_ColumnCorrectionDesc"),
                      label: (0, l.Xx)("#DisplaySettings_ColumnCorrection"),
                      offLabel: (0, l.Xx)(
                        "#DisplaySettings_ColumnCorrectionOff",
                      ),
                      onLabel: (0, l.Xx)(
                        "#DisplaySettings_ColumnCorrectionAuto",
                      ),
                      onChange: (e) => c.G3.SetSettingsValue(g.zL, e ? 1 : 0),
                    }),
                    o.createElement(d.U4, {
                      label: (0, l.Xx)(
                        "#DisplaySettings_ColumnCorrectionBiasLeft",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: s,
                      detents: [0],
                      valueStyleVariant: _.px.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => c.G3.SetSettingsValue(n, e),
                    }),
                    o.createElement(d.U4, {
                      label: (0, l.Xx)(
                        "#DisplaySettings_ColumnCorrectionBiasRight",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: r,
                      detents: [0],
                      valueStyleVariant: _.px.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => c.G3.SetSettingsValue(i, e),
                    }),
                  ),
              )
            );
          }
        }
      };
      (0, s.gn)([a.ak], R.prototype, "showModal", null),
        (0, s.gn)([a.ak], R.prototype, "hideModal", null),
        (R = (0, s.gn)([h.Pi], R));
      const A = (0, h.Pi)(() => {
        var e;
        if (!VRHTML) return null;
        if (
          !VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            p.Uk.DisplaySupportsAnalogGain_Bool,
          )
        )
          return null;
        let t = c.G3.settings.get(g.bp);
        null == t && (t = 1);
        const n =
          null !==
            (e = VRHTML.VRProperties.GetFloatProperty(
              "/user/head",
              p.Uk.DisplayMaxAnalogGain_Float,
            )) && void 0 !== e
            ? e
            : 1;
        return o.createElement(
          d.GV,
          { className: "SettingsItem" },
          o.createElement(
            "div",
            { className: "Label" },
            (0, l.Xx)("#DisplaySettings_DisplayBrightness"),
          ),
          o.createElement(d.U4, {
            min: 20,
            max: 100 * n,
            value:
              ((i = t),
              i < 0 ? 0 : i < 1 ? 100 * Math.pow(i, 1 / 2.2) : 100 * i),
            detents: [100],
            valueStyleVariant: _.px.OnHandle,
            renderValue: (e) => e.toFixed(0) + "%",
            onChange: (e) =>
              c.G3.SetSettingsValue(
                g.bp,
                (function (e) {
                  return e < 100 ? Math.pow(e / 100, 2.2) : e / 100;
                })(e),
              ),
            dashboardFadeSupression: !0,
          }),
        );
        var i;
      });
      class M extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetRecommendedOverlayRenderQuality();
          return o.createElement(d.Xp, {
            name: "/settings/steamvr/overlayRenderQuality_2",
            label: (0, l.Xx)("#Settings_OverlayRenderQuality"),
            items: [
              {
                value: p.LL.Auto,
                sLabel:
                  void 0 !== e
                    ? (0, l.Xx)(
                        "#Settings_Auto_Parenthesized",
                        (0, l.Xx)("#Settings_" + p.LL[e]),
                      )
                    : (0, l.Xx)("#Settings_Auto"),
              },
              S.Kr.Separator,
              { value: p.LL.Low, sLabel: (0, l.Xx)("#Settings_Low") },
              { value: p.LL.Medium, sLabel: (0, l.Xx)("#Settings_Medium") },
              { value: p.LL.High, sLabel: (0, l.Xx)("#Settings_High") },
            ],
            visibility: d.VK.Advanced,
          });
        }
      }
      class k extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return VRHTML &&
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.DisplayAllowNightMode_Bool,
            )
            ? o.createElement(d.wy, {
                label: (0, l.Xx)("#Settings_NightModeCheck"),
                title: (0, l.Xx)("#Settings_NightModeDesc"),
                value: VRHTML.VRDashboardManager.GetNightModeEnabled(),
                onChange: (e) => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.SetNightModeEnabled(e),
                    this.forceUpdate();
                },
              })
            : null;
        }
      }
      const B = () => {
        if (!VRHTML) return null;
        if (
          VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            p.Uk.HasDriverDirectModeComponent_Bool,
          )
        )
          return "oculus" ===
            VRHTML.VRProperties.GetStringProperty(
              "/user/head",
              p.Uk.TrackingSystemName_String,
            )
            ? null
            : o.createElement(d.wy, {
                name: "/settings/steamvr/motionSmoothing",
                label: (0, l.Xx)("#Settings_Advanced_MotionSmoothing_Header"),
                title: (0, l.Xx)(
                  "#Settings_Advanced_MotionSmoothing_Description",
                ),
              });
        if (
          VRHTML.VRClientInternal.GetGraphicsHardwareVendorInfo()
            .bSupportsMotionSmoothing
        )
          return o.createElement(d.wy, {
            name: "/settings/steamvr/motionSmoothing",
            label: (0, l.Xx)("#Settings_Advanced_MotionSmoothing_Header"),
            title: (0, l.Xx)("#Settings_Advanced_MotionSmoothing_Description"),
          });
        const e =
            c.G3.systemInfo &&
            c.G3.systemInfo.os_type > 0 &&
            c.G3.systemInfo.os_type < c._e,
          t = (0, l.Xx)(
            e
              ? "#Settings_Advanced_MotionSmoothing_Disabled_Win7"
              : "#Settings_Advanced_MotionSmoothing_Disabled",
          );
        return o.createElement(
          d.GV,
          { className: "SettingsItem", title: t },
          o.createElement(
            "div",
            { className: "Label" },
            (0, l.Xx)("#Settings_Advanced_MotionSmoothing_Header"),
          ),
          o.createElement(
            "div",
            { className: "Label Right" },
            (0, l.Xx)("#Settings_NotSupported"),
          ),
        );
      };
      var E, T, I;
      !(function (e) {
        (e[(e.UseGlobal = 0)] = "UseGlobal"),
          (e[(e.ForceOn = 1)] = "ForceOn"),
          (e[(e.ForceOff = 2)] = "ForceOff"),
          (e[(e.ForceAlwaysOn = 3)] = "ForceAlwaysOn");
      })(E || (E = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Letterbox = 1)] = "Letterbox"),
            (e[(e.Advanced = 2)] = "Advanced");
        })(T || (T = {})),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.Fine = 1)] = "Fine"),
            (e[(e.Normal = 2)] = "Normal"),
            (e[(e.Extreme = 3)] = "Extreme");
        })(I || (I = {}));
      const D = {
        [I.Fine]: { min: 0.8, max: 1.25, step: 0.001 },
        [I.Normal]: { min: 0.5, max: 2, step: 0.01 },
        [I.Extreme]: { min: 0.1, max: 10, step: 0.1 },
        [I.Off]: { min: 0, max: 100, step: 1 },
      };
      let O = (i = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = o.createRef()),
            (this.m_initialAppState = null),
            (this.state = {
              currentApp: null,
              nResolutionMultiplier: null,
              nFovScaleMultiplier: null,
              nFovScaleMultiplierInner: null,
              nFovScaleMultiplierUpper: null,
              nFovScaleMultiplierLower: null,
              eFovScaleFormat: T.Default,
              bShowRefreshRateOptions: null,
              nPreferredRefreshRate: null,
              eSmoothingMode: null,
              disableAsyncReprojection: null,
              bShowThrottleOptions: null,
              nFramesToThrottle: null,
              nAdditionalPrediction: null,
              eWorldScaleRange: I.Off,
              flWorldScaleMultiplier: null,
            });
        }
        componentDidMount() {
          this.m_routeObservingAutorunDisposer = (0, r.EH)(() => {
            var e;
            if (this.shouldShowModal) {
              const t = this.currentRouteAppKey;
              t &&
                (null === (e = this.m_refAppSelectDropdown.current) ||
                  void 0 === e ||
                  e.setCurrentApp(t));
            }
          });
        }
        componentWillUnmount() {
          this.m_routeObservingAutorunDisposer &&
            (this.m_routeObservingAutorunDisposer(),
            (this.m_routeObservingAutorunDisposer = null));
        }
        static OpenDeepLink(e, t) {
          c.G3.setRoute(e, i.PAGE_SECTION, t ? [t] : null),
            null === VRHTML || void 0 === VRHTML || VRHTML.ShowSettingsUI();
        }
        get shouldShowModal() {
          return c.G3.routePageSection == i.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = c.G3.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        get enableThrottleOverrideSettings() {
          return !(
            !VRHTML ||
            !VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.Hmd_SupportsAppThrottling_Bool,
            ) ||
            (!VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.HasDriverDirectModeComponent_Bool,
            ) &&
              this.state.disableAsyncReprojection)
          );
        }
        get enableMotionSmoothingOverrideSettings() {
          return (
            !!VRHTML &&
            (VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.HasDriverDirectModeComponent_Bool,
            )
              ? "oculus" !==
                VRHTML.VRProperties.GetStringProperty(
                  "/user/head",
                  p.Uk.TrackingSystemName_String,
                )
              : VRHTML.VRClientInternal.GetGraphicsHardwareVendorInfo()
                  .bSupportsMotionSmoothing)
          );
        }
        get enableLegacyReprojectionSettings() {
          return (
            !!VRHTML &&
            !VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.HasDriverDirectModeComponent_Bool,
            )
          );
        }
        get worldScaleRangeMin() {
          return D[this.state.eWorldScaleRange].min;
        }
        get worldScaleRangeMax() {
          return D[this.state.eWorldScaleRange].max;
        }
        get worldScaleRangeStep() {
          return D[this.state.eWorldScaleRange].step;
        }
        onApplicationDropdownChange(e) {
          this.setState((t, n) => {
            var i;
            return t.currentApp === e
              ? null
              : (e && this.fetchAppState(e.key),
                c.G3.setRoutePageSectionParams([
                  null !== (i = null == e ? void 0 : e.key) && void 0 !== i
                    ? i
                    : "",
                ]),
                {
                  currentApp: e,
                  nResolutionMultiplier: null,
                  nFovScaleMultiplier: null,
                  bShowRefreshRateOptions: null,
                  nPreferredRefreshRate: null,
                  eSmoothingMode: null,
                  disableAsyncReprojection: null,
                });
          });
        }
        updateAppState(e) {
          var t, n, i;
          if (void 0 !== e.resolution) {
            let s = null !== (t = e.throttling) && void 0 !== t ? t : 0,
              o = null !== (n = e.prediction) && void 0 !== n ? n : 0,
              r = I.Off;
            1 !== e.worldscale &&
              (r =
                Math.round(1e3 * e.worldscale) % 10 != 0
                  ? I.Fine
                  : e.worldscale < D[I.Normal].min ||
                      e.worldscale > D[I.Normal].max
                    ? I.Extreme
                    : I.Normal),
              (this.m_initialAppState = {
                nResolutionMultiplier: e.resolution / 100,
                nFovScaleMultiplier: e.fovscale / 100,
                nFovScaleMultiplierInner: e.fovscale_inner
                  ? e.fovscale_inner / 100
                  : 1,
                nFovScaleMultiplierUpper: e.fovscale_upper
                  ? e.fovscale_upper / 100
                  : 1,
                nFovScaleMultiplierLower: e.fovscale_lower
                  ? e.fovscale_lower / 100
                  : 1,
                eFovScaleFormat:
                  null !== (i = e.fovscale_format) && void 0 !== i
                    ? i
                    : T.Default,
                bShowRefreshRateOptions: e.preferred_refresh_rate > 0,
                nPreferredRefreshRate: e.preferred_refresh_rate,
                eSmoothingMode: e.smoothing,
                disableAsyncReprojection: e.disable_async_reprojection,
                bShowThrottleOptions:
                  void 0 !== e.throttling || void 0 !== e.prediction,
                nFramesToThrottle: s,
                nAdditionalPrediction: o - s,
                eWorldScaleRange: r,
                flWorldScaleMultiplier: e.worldscale ? e.worldscale : 1,
              }),
              this.setState(this.m_initialAppState);
          }
        }
        fetchAppState(e) {
          c.G3.GetAppSettings(e).then(this.updateAppState);
        }
        setAppState(e, t) {
          if (null != this.state.currentApp) {
            let n = {};
            (n[e] = t), c.G3.SetAppSettings(this.state.currentApp.key, n);
          }
        }
        get computedResolution() {
          let e = c.G3.settings.get(g.bt)
            ? c.G3.settings.get(g.eW)
            : c.G3.settings.get(g.aT);
          if (null == e || null == this.state.nResolutionMultiplier) return "";
          let t = c.G3.SliderposToSupersample(this.state.nResolutionMultiplier),
            n = t;
          switch (this.state.eFovScaleFormat) {
            case T.Letterbox:
              n *= this.state.nFovScaleMultiplier;
              break;
            case T.Advanced:
              const e =
                  this.state.nFovScaleMultiplier +
                  this.state.nFovScaleMultiplierInner,
                i =
                  this.state.nFovScaleMultiplierUpper +
                  this.state.nFovScaleMultiplierLower;
              e < i ? (t *= e / i) : (n *= i / e);
          }
          if (
            c.G3.systemInfo &&
            null != c.G3.systemInfo.render_target_size.width &&
            0 != c.G3.systemInfo.render_target_size.height
          ) {
            let i = Math.max(
                512,
                Math.floor(
                  c.G3.systemInfo.render_target_size.width * Math.sqrt(e * t) +
                    0.5,
                ),
              ),
              s = Math.max(
                512,
                Math.floor(
                  c.G3.systemInfo.render_target_size.height * Math.sqrt(e * n) +
                    0.5,
                ),
              );
            const o = c.G3.settings.get(g.wc);
            return (
              Math.max(i, s) > o &&
                (i > s
                  ? ((s = (o * s) / i), (i = o))
                  : ((i = (o * i) / s), (s = o))),
              (i = 4 * Math.trunc(i / 4)),
              (s = 4 * Math.trunc(s / 4)),
              (0, l.Xx)("#Settings_Advanced_Supersampling_WidthByHeight", i, s)
            );
          }
          return "";
        }
        onResolutionSliderChange(e) {
          this.setState({ nResolutionMultiplier: e }),
            this.setAppState("resolution", 100 * e);
        }
        onFovScaleSliderChange(e) {
          this.setState({ nFovScaleMultiplier: e }),
            this.setAppState("fovscale", 100 * e);
        }
        onFovScaleSliderChangeInner(e) {
          this.setState({ nFovScaleMultiplierInner: e }),
            this.setAppState("fovscale_inner", 100 * e);
        }
        onFovScaleSliderChangeUpper(e) {
          this.setState({ nFovScaleMultiplierUpper: e }),
            this.setAppState("fovscale_upper", 100 * e);
        }
        onFovScaleSliderChangeLower(e) {
          this.setState({ nFovScaleMultiplierLower: e }),
            this.setAppState("fovscale_lower", 100 * e);
        }
        onFovScaleFormatChange(e) {
          this.setState({ eFovScaleFormat: e }),
            this.setAppState("fovscale_format", e);
        }
        onMotionSmoothChange(e) {
          this.setState({ eSmoothingMode: e }),
            this.setAppState("smoothing", e);
        }
        onRefreshRateOverrideChange(e) {
          this.allowPerAppRefreshRate &&
            (this.setState({ bShowRefreshRateOptions: e }),
            this.setAppState(
              "preferred_refresh_rate",
              e ? this.state.nPreferredRefreshRate : 0,
            ));
        }
        onRefreshRateChange(e) {
          this.allowPerAppRefreshRate &&
            (this.setState({ nPreferredRefreshRate: e }),
            this.setAppState(
              "preferred_refresh_rate",
              this.state.bShowRefreshRateOptions ? e : 0,
            ));
        }
        onDisableAsyncReprojection(e) {
          this.setState({ disableAsyncReprojection: e }),
            this.setAppState("disable_async_reprojection", e);
        }
        onShowThrottleOptions(e) {
          var t, n;
          if (
            (this.setState({ bShowThrottleOptions: e }),
            this.setAppState("override_throttling", e),
            e)
          ) {
            let e =
                null !== (t = this.state.nFramesToThrottle) && void 0 !== t
                  ? t
                  : 0,
              i =
                null !== (n = this.state.nAdditionalPrediction) && void 0 !== n
                  ? n
                  : 0;
            this.setAppState("throttling", e),
              this.setAppState("prediction", e + i);
          }
        }
        onThrottleSliderChange(e) {
          var t;
          this.setState({ nFramesToThrottle: e }),
            this.setAppState("throttling", e);
          let n =
            null !== (t = this.state.nAdditionalPrediction) && void 0 !== t
              ? t
              : 0;
          this.setAppState("prediction", e + n);
        }
        onPredictionSliderChange(e) {
          var t;
          this.setState({ nAdditionalPrediction: e });
          let n =
            null !== (t = this.state.nFramesToThrottle) && void 0 !== t ? t : 0;
          this.setAppState("prediction", e + n);
        }
        onWorldScaleRangeChange(e) {
          this.setState({
            eWorldScaleRange: e,
            flWorldScaleMultiplier: Math.max(
              D[e].min,
              Math.min(D[e].max, this.state.flWorldScaleMultiplier),
            ),
          }),
            this.setAppState(
              "worldscale",
              e == I.Off ? 1 : this.state.flWorldScaleMultiplier,
            );
        }
        onWorldScaleMultiplierSliderChange(e) {
          this.setState({ flWorldScaleMultiplier: e }),
            this.setAppState("worldscale", e);
        }
        hasCurrentApp() {
          return null != this.state.currentApp;
        }
        resetAppToDefaults() {
          c.G3.ResetAppSettings(this.state.currentApp.key).then(
            this.updateAppState,
          );
        }
        show() {
          c.G3.setRoutePageSection(i.PAGE_SECTION);
        }
        close() {
          c.G3.setRoutePageSection(null);
        }
        get allowPerAppRefreshRate() {
          return !!c.G3.settings.get("/settings/internal/enablePerAppFPS");
        }
        get currentRefreshRate() {
          return c.G3.settings.get("/settings/steamvr/preferredRefreshRate");
        }
        render() {
          var e;
          let t = null;
          this.state.eSmoothingMode == E.ForceAlwaysOn &&
            (t = o.createElement(
              o.Fragment,
              null,
              (0, l.Xx)(
                "#Settings_PerApplication_MotionSmoothing_AlwaysOn_Desc",
              ),
            ));
          const n = this.state.eFovScaleFormat == T.Advanced;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              d.GV,
              { className: "SettingsItem" },
              o.createElement(
                u.z,
                { className: "ButtonControl", onClick: this.show },
                (0, l.Xx)("#Settings_PerApplication_VideoSettings"),
              ),
            ),
            this.shouldShowModal &&
              o.createElement(
                d.TB,
                {
                  className: "AppVideoModal",
                  onDismissRequested: this.close,
                  header: o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "h1",
                      null,
                      (0, l.Xx)("#Settings_ManageVideoSettingsForApp"),
                    ),
                    o.createElement(d.YL, {
                      ref: this.m_refAppSelectDropdown,
                      stateKey: "settings_applications",
                      defaultAppKey:
                        null !== (e = this.currentRouteAppKey) && void 0 !== e
                          ? e
                          : null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRApplications.GetSceneApplicationKey(),
                      showOverlays: !1,
                      defaultLabel: (0, l.Xx)(
                        "#Settings_PerApplication_ChooseApplication",
                      ),
                      onChange: this.onApplicationDropdownChange,
                    }),
                  ),
                  footer: o.createElement(d.U5, {
                    showResetButton: this.hasCurrentApp(),
                    onResetRequested: this.resetAppToDefaults,
                    onDismissRequested: this.close,
                  }),
                },
                this.hasCurrentApp() &&
                  o.createElement(
                    o.Fragment,
                    null,
                    this.enableMotionSmoothingOverrideSettings &&
                      null !== this.state.eSmoothingMode &&
                      !this.state.disableAsyncReprojection &&
                      o.createElement(d.Xp, {
                        label: (0, l.Xx)(
                          "#Settings_Advanced_MotionSmoothing_Header",
                        ),
                        items: [
                          {
                            value: E.UseGlobal,
                            sLabel: (0, l.Xx)(
                              "#Settings_PerApplication_MotionSmoothing_Global",
                            ),
                          },
                          {
                            value: E.ForceOn,
                            sLabel: (0, l.Xx)(
                              "#Settings_PerApplication_MotionSmoothing_On",
                            ),
                          },
                          {
                            value: E.ForceOff,
                            sLabel: (0, l.Xx)(
                              "#Settings_PerApplication_MotionSmoothing_Off",
                            ),
                          },
                          {
                            value: E.ForceAlwaysOn,
                            sLabel: (0, l.Xx)(
                              "#Settings_PerApplication_MotionSmoothing_AlwaysOn",
                            ),
                          },
                        ],
                        value: this.state.eSmoothingMode,
                        onChange: this.onMotionSmoothChange,
                        subsection: t,
                      }),
                    null !== this.state.nResolutionMultiplier &&
                      o.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_AppResHeader",
                            (0, l.Xx)("#Settings_SectionTitle_General"),
                          ),
                          className: "SettingsItem",
                        },
                        o.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)("#Settings_PerApplication_AppResTitle"),
                        ),
                        o.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          o.createElement(
                            "div",
                            { className: "Dimensions" },
                            this.computedResolution,
                          ),
                          o.createElement(
                            "div",
                            { className: "Percentage" },
                            Math.round(
                              100 * this.state.nResolutionMultiplier,
                            ).toString() + "%",
                          ),
                        ),
                        o.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          o.createElement(d.U4, {
                            min: c.BQ,
                            max: c._g,
                            step: c.A3,
                            value: this.state.nResolutionMultiplier,
                            detents: [1],
                            onChange: this.onResolutionSliderChange,
                          }),
                          o.createElement(
                            d.GV,
                            { className: "SettingsItem" },
                            o.createElement(C, null),
                          ),
                        ),
                      ),
                    null !== this.state.nFovScaleMultiplier &&
                      (c.G3.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          1 != this.m_initialAppState.nFovScaleMultiplier)) &&
                      o.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_FovScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        o.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)("#Settings_PerApplication_FovScale_Label"),
                        ),
                        o.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          o.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, l.Xx)(
                              "#Settings_PerApplication_FovScale_Multiplier",
                            ),
                          ),
                          !n &&
                            o.createElement(
                              "div",
                              { className: "Percentage" },
                              Math.round(
                                100 * this.state.nFovScaleMultiplier,
                              ).toString() + "%",
                            ),
                        ),
                        o.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          o.createElement(d.U4, {
                            min: 0.5,
                            max: 1,
                            step: 0.01,
                            value: this.state.nFovScaleMultiplier,
                            valueStyleVariant: n ? _.px.OnHandle : void 0,
                            renderValue: n
                              ? (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplier,
                                  ).toString() + "%"
                              : void 0,
                            onChange: this.onFovScaleSliderChange,
                            label: n ? "Outer" : void 0,
                          }),
                          n &&
                            o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(d.U4, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierInner,
                                valueStyleVariant: _.px.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierInner,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeInner,
                                label: "Inner",
                              }),
                              o.createElement(d.U4, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierUpper,
                                valueStyleVariant: _.px.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierUpper,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeUpper,
                                label: "Upper",
                              }),
                              o.createElement(d.U4, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierLower,
                                valueStyleVariant: _.px.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierLower,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeLower,
                                label: "Lower",
                              }),
                            ),
                          (1 != this.state.nFovScaleMultiplier || n) &&
                            o.createElement(d.Xp, {
                              items: [
                                { value: T.Default, sLabel: "Default" },
                                { value: T.Letterbox, sLabel: "Letterbox" },
                                { value: T.Advanced, sLabel: "Advanced" },
                              ],
                              value: this.state.eFovScaleFormat,
                              onChange: this.onFovScaleFormatChange,
                            }),
                        ),
                      ),
                    null !== this.state.flWorldScaleMultiplier &&
                      (c.G3.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.eWorldScaleRange !== I.Off)) &&
                      o.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_WorldScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        o.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)(
                            "#Settings_PerApplication_WorldScale_Label",
                          ),
                        ),
                        o.createElement(d.Xp, {
                          items: [
                            {
                              value: I.Off,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Off",
                              ),
                            },
                            {
                              value: I.Fine,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Fine",
                              ),
                            },
                            {
                              value: I.Normal,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Normal",
                              ),
                            },
                            {
                              value: I.Extreme,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Extreme",
                              ),
                            },
                          ],
                          value: this.state.eWorldScaleRange,
                          onChange: this.onWorldScaleRangeChange,
                        }),
                      ),
                    this.state.eWorldScaleRange !== I.Off &&
                      o.createElement(
                        d.GV,
                        { className: "SettingsItem Advanced" },
                        o.createElement("div", { className: "Label" }),
                        o.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          o.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, l.Xx)(
                              "#Settings_PerApplication_WorldScale_Range",
                              100 * this.worldScaleRangeMin,
                              100 * this.worldScaleRangeMax,
                            ),
                          ),
                          o.createElement(
                            "div",
                            { className: "Percentage" },
                            (
                              Math.round(
                                1e3 * this.state.flWorldScaleMultiplier,
                              ) / 10
                            ).toString() + "%",
                          ),
                        ),
                        o.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          o.createElement(d.U4, {
                            min: this.worldScaleRangeMin,
                            max: this.worldScaleRangeMax,
                            step: this.worldScaleRangeStep,
                            value: this.state.flWorldScaleMultiplier,
                            detents: [1],
                            onChange: this.onWorldScaleMultiplierSliderChange,
                          }),
                          o.createElement(
                            "div",
                            { className: "SettingsItemValueLabel Fixed" },
                            (0, l.Xx)(
                              "#Settings_PerApplication_WorldScale_Warning",
                            ),
                          ),
                        ),
                      ),
                    this.allowPerAppRefreshRate &&
                      c.G3.systemInfo &&
                      c.G3.systemInfo.refresh_rates.actual_display_frequency >
                        0 &&
                      c.G3.systemInfo.refresh_rates.supported_rates.length >
                        1 &&
                      o.createElement(
                        o.Fragment,
                        null,
                        null !== this.state.bShowRefreshRateOptions &&
                          o.createElement(d.wy, {
                            label: (0, l.Xx)(
                              "#Settings_PerApplication_RefreshRateOverride_Checkbox",
                            ),
                            title: (0, l.Xx)(
                              "#Settings_Perapplication_RefreshRateOverride_Description",
                            ),
                            value: this.state.bShowRefreshRateOptions,
                            onChange: this.onRefreshRateOverrideChange,
                            onSubsection: o.createElement(d.t0, {
                              label: (0, l.Xx)(
                                "#Settings_Video_RefreshRate_Label_Hz",
                              ),
                              onChange: this.onRefreshRateChange,
                              value: this.state.nPreferredRefreshRate,
                              items:
                                c.G3.systemInfo.refresh_rates.supported_rates.map(
                                  (e) => ({
                                    value: e,
                                    sLabel: Math.round(e).toString(),
                                  }),
                                ),
                            }),
                          }),
                      ),
                    this.enableLegacyReprojectionSettings &&
                      null !== this.state.disableAsyncReprojection &&
                      (c.G3.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.disableAsyncReprojection)) &&
                      o.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_Reprojection_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        o.createElement(d.wy, {
                          label: (0, l.Xx)(
                            "#Settings_PerApplication_Reprojection_Checkbox",
                          ),
                          value: this.state.disableAsyncReprojection,
                          onChange: this.onDisableAsyncReprojection,
                        }),
                      ),
                    this.enableThrottleOverrideSettings &&
                      (c.G3.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.bShowThrottleOptions)) &&
                      o.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_ThrottlingOverride_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        o.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)(
                            "#Settings_PerApplication_ThrottlingOverride_Label",
                          ),
                        ),
                        o.createElement(d.wy, {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle",
                          ),
                          onLabel: (0, l.Xx)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle_On",
                          ),
                          offLabel: (0, l.Xx)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle_Off",
                          ),
                          value: this.state.bShowThrottleOptions,
                          onChange: this.onShowThrottleOptions,
                        }),
                        this.state.bShowThrottleOptions &&
                          o.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            o.createElement(
                              "div",
                              { className: "Label" },
                              (0, l.Xx)(
                                "#Settings_PerApplication_ThrottlingOverride_Framerate",
                              ),
                            ),
                            o.createElement(d.U4, {
                              min: 5,
                              max: 0,
                              step: 1,
                              value: this.state.nFramesToThrottle,
                              valueStyleVariant: _.px.OnHandle,
                              renderValue: (e) =>
                                (this.currentRefreshRate / (e + 1)).toFixed(1),
                              onChange: this.onThrottleSliderChange,
                            }),
                            o.createElement(
                              "div",
                              { className: "Label" },
                              (0, l.Xx)(
                                "#Settings_PerApplication_ThrottlingOverride_Prediction",
                              ),
                            ),
                            o.createElement(d.U4, {
                              min: 0,
                              max: 3,
                              step: 1,
                              value: this.state.nAdditionalPrediction,
                              valueStyleVariant: _.px.OnHandle,
                              renderValue: (e) =>
                                ((1e3 * e) / this.currentRefreshRate).toFixed(
                                  2,
                                ),
                              onChange: this.onPredictionSliderChange,
                            }),
                          ),
                      ),
                  ),
                !this.hasCurrentApp() &&
                  o.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, l.Xx)("#Settings_PerApplication_ChooseApplication"),
                  ),
              ),
          );
        }
      });
      (O.PAGE_SECTION = "appvideosettings"),
        (0, s.gn)([r.Fl], O.prototype, "shouldShowModal", null),
        (0, s.gn)([r.Fl], O.prototype, "currentRouteAppKey", null),
        (0, s.gn)([r.Fl], O.prototype, "enableThrottleOverrideSettings", null),
        (0, s.gn)(
          [r.Fl],
          O.prototype,
          "enableMotionSmoothingOverrideSettings",
          null,
        ),
        (0, s.gn)(
          [r.Fl],
          O.prototype,
          "enableLegacyReprojectionSettings",
          null,
        ),
        (0, s.gn)([r.Fl], O.prototype, "worldScaleRangeMin", null),
        (0, s.gn)([r.Fl], O.prototype, "worldScaleRangeMax", null),
        (0, s.gn)([r.Fl], O.prototype, "worldScaleRangeStep", null),
        (0, s.gn)([a.ak], O.prototype, "onApplicationDropdownChange", null),
        (0, s.gn)([a.ak], O.prototype, "updateAppState", null),
        (0, s.gn)([r.Fl], O.prototype, "computedResolution", null),
        (0, s.gn)([a.ak], O.prototype, "onResolutionSliderChange", null),
        (0, s.gn)([a.ak], O.prototype, "onFovScaleSliderChange", null),
        (0, s.gn)([a.ak], O.prototype, "onFovScaleSliderChangeInner", null),
        (0, s.gn)([a.ak], O.prototype, "onFovScaleSliderChangeUpper", null),
        (0, s.gn)([a.ak], O.prototype, "onFovScaleSliderChangeLower", null),
        (0, s.gn)([a.ak], O.prototype, "onFovScaleFormatChange", null),
        (0, s.gn)([a.ak], O.prototype, "onMotionSmoothChange", null),
        (0, s.gn)([a.ak], O.prototype, "onRefreshRateOverrideChange", null),
        (0, s.gn)([a.ak], O.prototype, "onRefreshRateChange", null),
        (0, s.gn)([a.ak], O.prototype, "onDisableAsyncReprojection", null),
        (0, s.gn)([a.ak], O.prototype, "onShowThrottleOptions", null),
        (0, s.gn)([a.ak], O.prototype, "onThrottleSliderChange", null),
        (0, s.gn)([a.ak], O.prototype, "onPredictionSliderChange", null),
        (0, s.gn)([a.ak], O.prototype, "onWorldScaleRangeChange", null),
        (0, s.gn)(
          [a.ak],
          O.prototype,
          "onWorldScaleMultiplierSliderChange",
          null,
        ),
        (0, s.gn)([a.ak], O.prototype, "resetAppToDefaults", null),
        (0, s.gn)([a.ak], O.prototype, "show", null),
        (0, s.gn)([a.ak], O.prototype, "close", null),
        (0, s.gn)([r.Fl], O.prototype, "allowPerAppRefreshRate", null),
        (0, s.gn)([r.Fl], O.prototype, "currentRefreshRate", null),
        (O = i = (0, s.gn)([h.Pi], O));
      class L extends d.d9 {
        render() {
          if (!this.props.active) return null;
          const e = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.Hmd_SupportsHDCP14LegacyCompat_Bool,
            ),
            t = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.Hmd_SupportsDisplayPortTrainingMode_Bool,
            ),
            n = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.Uk.Hmd_SupportsGpuBusMonitoring_Bool,
            );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(y, null),
            o.createElement(A, null),
            o.createElement(k, null),
            o.createElement(B, null),
            o.createElement(w, null),
            o.createElement(d.wy, {
              name: "/settings/steamvr/doNotFadeToGrid",
              label: (0, l.Xx)("#Settings_FadeToGrid"),
              swapOnOff: !0,
            }),
            o.createElement(O, null),
            o.createElement(d.wy, {
              name: "/settings/steamvr/allowSupersampleFiltering",
              label: (0, l.Xx)("#Settings_Advanced_AllowSupersampleFiltering"),
              visibility: d.VK.Advanced,
            }),
            o.createElement(M, null),
            e &&
              o.createElement(d.wy, {
                name: "/settings/steamvr/hdcp14legacyCompatibility",
                label: (0, l.Xx)("#Settings_Video_HDCP14LegacyCompatibility"),
                visibility: d.VK.Advanced,
                requiresRestart: !0,
              }),
            t &&
              o.createElement(d.Xp, {
                name: "/settings/steamvr/displayPortTrainingMode",
                label: (0, l.Xx)("#Settings_DisplayPortTrainingMode"),
                items: [
                  {
                    value: 0,
                    sLabel: (0, l.Xx)(
                      "#Settings_DisplayPortTrainingMode_Automatic",
                    ),
                  },
                  S.Kr.Separator,
                  {
                    value: 1,
                    sLabel: (0, l.Xx)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeA",
                    ),
                  },
                  {
                    value: 2,
                    sLabel: (0, l.Xx)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeB",
                    ),
                  },
                ],
                visibility: d.VK.Advanced,
                requiresRestart: !0,
              }),
            o.createElement(R, { visibility: d.VK.Advanced }),
            o.createElement(d.wy, {
              name: "/settings/power/pauseCompositorOnStandby",
              label: (0, l.Xx)("#Settings_PauseOnStandby"),
              visibility: d.VK.Advanced,
            }),
            n &&
              o.createElement(d.wy, {
                name: "/settings/perfcheck/gpuBusMonitoring",
                label: (0, l.Xx)("#Settings_GpuBusMonitoring"),
                visibility: d.VK.Advanced,
              }),
            this.makeResetToDefaultButton(),
          );
        }
      }
      L.Name = "video_settings";
    },
    2609: (e, t, n) => {
      n.d(t, { Z: () => s });
      var i = n(7294);
      const s =
        381 == n.j
          ? ({ quaternion: e, width: t, height: n }) => {
              const s = (0, i.useRef)(null),
                o = (0, i.useCallback)(
                  (t, n, i) => {
                    t.clearRect(0, 0, n, i),
                      (t.lineWidth = 3),
                      (s.current.style.position = "absolute");
                    const o = n / 2,
                      r = i / 2,
                      a = n / 2,
                      l = (e, t) => {
                        const n = t.w * e.x + t.y * e.z - t.z * e.y,
                          i = t.w * e.y + t.z * e.x - t.x * e.z,
                          s = t.w * e.z + t.x * e.y - t.y * e.x,
                          o = -t.x * e.x - t.y * e.y - t.z * e.z;
                        return {
                          x: n * t.w + o * -t.x + i * -t.z - s * -t.y,
                          y: i * t.w + o * -t.y + s * -t.x - n * -t.z,
                          z: s * t.w + o * -t.z + n * -t.y - i * -t.x,
                        };
                      },
                      c = [
                        { x: 0, y: a, z: 0 },
                        { x: 0, y: -a, z: 0 },
                      ],
                      d = [
                        { x: 0, y: 0, z: a },
                        { x: 0, y: 0, z: -a },
                      ],
                      u = [
                        { x: a, y: 0, z: 0 },
                        { x: -a, y: 0, z: 0 },
                      ].map((t) => l(t, e)),
                      p = c.map((t) => l(t, e)),
                      h = d.map((t) => l(t, e)),
                      m = (e, n, i, s) => {
                        const a = t.createLinearGradient(
                          o + e.x,
                          r - e.y,
                          o,
                          r,
                        );
                        a.addColorStop(0, i),
                          a.addColorStop(1, s),
                          (t.strokeStyle = a),
                          t.beginPath(),
                          t.moveTo(o + e.x, r - e.y),
                          t.lineTo(o + n.x, r - n.y),
                          t.stroke();
                      };
                    m(u[1], u[0], "#00000000", "#FF0000DD"),
                      m(p[1], p[0], "#00000000", "#00FF00DD"),
                      m(h[1], h[0], "#00000000", "#2222FFFF");
                  },
                  [e],
                );
              return (
                (0, i.useEffect)(() => {
                  const e = s.current;
                  if (e) {
                    const t = e.getContext("2d");
                    if (t) {
                      const n = e.width,
                        i = e.height;
                      o(t, n, i);
                    }
                  }
                }, [e, t, n, o]),
                i.createElement("canvas", { ref: s, width: t, height: n })
              );
            }
          : null;
    },
    5177: (e, t, n) => {
      n.d(t, { q: () => u, z: () => d });
      var i = n(655),
        s = n(7294),
        o = n(7056),
        r = n(3107),
        a = n(1569),
        l = n(424),
        c = n(8980);
      class d extends s.Component {
        constructor() {
          super(...arguments), (this.m_ref = s.createRef());
        }
        get elem() {
          return this.m_ref.current;
        }
        get disabled() {
          return !1 === this.props.enabled;
        }
        onMouseDown(e) {
          var t, n, i;
          null === (n = (t = this.props).onMouseDown) ||
            void 0 === n ||
            n.call(t, e),
            this.disabled ||
              r.G.Instance.playSound(
                null !== (i = this.props.pressSoundEffect) && void 0 !== i
                  ? i
                  : null,
              );
        }
        onMouseUp(e) {
          var t, n;
          null === (n = (t = this.props).onMouseUp) ||
            void 0 === n ||
            n.call(t, e);
        }
        onClick(e) {
          var t, n, i;
          this.disabled ||
            (null === (n = (t = this.props).onClick) ||
              void 0 === n ||
              n.call(t, e),
            u.temporarilySuppressSoundEffect(),
            r.G.Instance.playSound(
              null !== (i = this.props.releaseSoundEffect) && void 0 !== i
                ? i
                : r.y.ButtonClick,
            ));
        }
        onMouseEnter(e) {
          var t, n;
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e),
            this.disabled ||
              ((0, a.Op)() == a.qA.Overlay &&
                l.L.Instance.triggerHaptic(a.sH.ButtonEnter));
        }
        onMouseLeave(e) {
          this.props.onMouseLeave && this.props.onMouseLeave(e),
            this.disabled ||
              ((0, a.Op)() == a.qA.Overlay &&
                l.L.Instance.triggerHaptic(a.sH.ButtonLeave));
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            delete e.enabled,
            delete e.pressSoundEffect,
            delete e.releaseSoundEffect,
            (e.className = (0, c.LJ)(e.className, ["Disabled", this.disabled])),
            s.cloneElement(s.createElement("div", e, this.props.children), {
              onClick: this.onClick,
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
              ref: this.m_ref,
            })
          );
        }
      }
      (0, i.gn)([o.ak], d.prototype, "onMouseDown", null),
        (0, i.gn)([o.ak], d.prototype, "onMouseUp", null),
        (0, i.gn)([o.ak], d.prototype, "onClick", null),
        (0, i.gn)([o.ak], d.prototype, "onMouseEnter", null),
        (0, i.gn)([o.ak], d.prototype, "onMouseLeave", null);
      class u extends s.Component {
        static temporarilySuppressSoundEffect() {
          window.clearTimeout(this.s_nPlaySoundEffectTimeout),
            (this.s_nPlaySoundEffectTimeout = 0),
            window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = window.setTimeout(
              this.endSoundEffectSuppression,
              this.k_nSoundEffectSuppressionPeriod,
            ));
        }
        static get suppressingSoundEffect() {
          return this.s_nSuppressingSoundEffectsTimeout > 0;
        }
        onClick(e) {
          u.suppressingSoundEffect ||
            (window.clearTimeout(u.s_nPlaySoundEffectTimeout),
            (u.s_nPlaySoundEffectTimeout = window.setTimeout(
              u.playSoundEffect,
              u.k_nSoundEffectDelay,
            ))),
            this.props.onClick && this.props.onClick(e);
        }
        static endSoundEffectSuppression() {
          window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = 0);
        }
        static playSoundEffect() {
          r.G.Instance.playSound(r.y.SurfaceClick);
        }
        render() {
          return s.cloneElement(
            s.createElement("div", this.props, this.props.children),
            { onClick: this.onClick },
          );
        }
      }
      (u.k_nSoundEffectSuppressionPeriod = 4),
        (u.k_nSoundEffectDelay = 2),
        (u.s_nSuppressingSoundEffectsTimeout = 0),
        (u.s_nPlaySoundEffectTimeout = 0),
        (0, i.gn)([o.ak], u.prototype, "onClick", null),
        (0, i.gn)([o.ak], u, "endSoundEffectSuppression", null),
        (0, i.gn)([o.ak], u, "playSoundEffect", null);
    },
    3010: (e, t, n) => {
      n.d(t, { Kr: () => i, Lt: () => g, hu: () => S });
      var i,
        s = n(655),
        o = n(7294),
        r = n(5177),
        a = n(8980),
        l = n(7056),
        c = n(2188),
        d = n(3568),
        u = n(7475),
        p = n(9755),
        h = n(7008);
      !(function (e) {
        e[(e.Separator = 0)] = "Separator";
      })(i || (i = {}));
      class m extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_refView = o.createRef()),
            (this.m_refScrollPanel = o.createRef()),
            (this.m_refSelectedButton = o.createRef()),
            (this.m_refParentPortal = o.createRef()),
            (this.m_elemBoundingParent = window.document.body);
        }
        renderDropdownItem(e, t) {
          switch (typeof e) {
            case "number":
              return this.renderDropdownSpecialItem(e, t);
            case "object":
              return this.renderDropdownValueItem(e);
          }
        }
        renderDropdownSpecialItem(e, t) {
          return e === i.Separator
            ? o.createElement("div", {
                className: "Separator",
                key: "separator" + t,
              })
            : null;
        }
        renderDropdownValueItem(e) {
          return o.createElement(
            r.z,
            {
              key: JSON.stringify(e.value),
              ref:
                e == this.props.selectedItem ? this.m_refSelectedButton : null,
              className: (0, a.LJ)("DropdownPopoverButton", [
                "Selected",
                e == this.props.selectedItem,
              ]),
              onClick: () => this.setValue(e.value),
            },
            e.sLabel,
          );
        }
        setValue(e) {
          var t, n;
          this.props.onChange && this.props.onChange(e),
            null === (n = (t = this.props).onDismissRequested) ||
              void 0 === n ||
              n.call(t);
        }
        render() {
          return o.createElement(
            h.R,
            {
              ref: this.m_refParentPortal,
              allowableParentSelectors: [
                "body",
                ".SettingsMain",
                ".DesktopHandWidget",
                ".HMDPanel",
                "vsg-app",
                "vsg-mountable",
                "[vsg-type=panel]",
              ],
              onPortalDidMount: this.updateLayout,
            },
            o.createElement(
              p.og,
              {
                ref: this.m_refView,
                shouldDismissOnClickAnywhere: !0,
                shouldDismissOnClickInViewStack: !0,
                fadesViewsBelow: !1,
                onDismissRequested: this.props.onDismissRequested,
                className: (0, a.LJ)("Dropdown", "Popover"),
              },
              o.createElement(
                u.P,
                { scrollDirection: u.I.Vertical, ref: this.m_refScrollPanel },
                this.props.items.map(this.renderDropdownItem),
              ),
            ),
          );
        }
        componentDidMount() {
          var e;
          this.m_elemBoundingParent = (0, a.gZ)(
            ["body", "[vsg-type=panel]", ".SettingsSidebarPageModalContainer"],
            null === (e = this.m_refParentPortal.current) || void 0 === e
              ? void 0
              : e.anchorElement,
          );
        }
        updateLayout() {
          var e, t, n, i;
          const s =
              null === (e = this.m_refView.current) || void 0 === e
                ? void 0
                : e.div,
            o =
              null === (t = this.m_refScrollPanel.current) || void 0 === t
                ? void 0
                : t.div;
          if (!s || !o) return;
          const r =
              null !==
                (i =
                  null === (n = this.props.buttonRef.current) || void 0 === n
                    ? void 0
                    : n.elem.clientWidth) && void 0 !== i
                ? i
                : 0,
            a = this.m_elemBoundingParent.getBoundingClientRect();
          (o.style.minWidth = r + "px"),
            (o.style.maxWidth = a.width - 2 * m.POPOVER_BOUNDS_MARGIN + "px"),
            (o.style.maxHeight = a.height - 2 * m.POPOVER_BOUNDS_MARGIN + "px");
          const l = this.props.buttonRef.current.elem.getBoundingClientRect();
          let c = l.left,
            d = l.top;
          const u = s.getBoundingClientRect(),
            p = this.m_elemBoundingParent.getBoundingClientRect(),
            h = p.left + m.POPOVER_BOUNDS_MARGIN,
            g = p.right - m.POPOVER_BOUNDS_MARGIN,
            S = p.top + m.POPOVER_BOUNDS_MARGIN,
            _ = p.bottom - m.POPOVER_BOUNDS_MARGIN;
          this.m_refSelectedButton.current &&
            (d -=
              this.m_refSelectedButton.current.elem.getBoundingClientRect()
                .top - u.top);
          const v = d;
          c < h && (c = h),
            c + u.width > g && (c = g - u.width),
            d < S && (d = S),
            d + u.height > _ && (d = _ - u.height),
            (c = Math.round(c)),
            (d = Math.round(d)),
            (s.scrollTop = d - v),
            (s.style.transform =
              "translateX(" + c + "px) translateY(" + d + "px)");
        }
      }
      (m.POPOVER_BOUNDS_MARGIN = 10),
        (0, s.gn)([l.ZP], m.prototype, "renderDropdownItem", null),
        (0, s.gn)([l.ZP], m.prototype, "renderDropdownSpecialItem", null),
        (0, s.gn)([l.ZP], m.prototype, "renderDropdownValueItem", null),
        (0, s.gn)([l.ZP], m.prototype, "setValue", null),
        (0, s.gn)([l.ZP], m.prototype, "updateLayout", null);
      class g extends o.Component {
        constructor(e) {
          super(e),
            (this.m_refButton = o.createRef()),
            (this.m_scrollWatcher = new a.cB()),
            (this.state = { bShowingOptions: !1 }),
            (this.m_scrollWatcher.onScroll = this.onParentScroll);
        }
        componentWillUnmount() {
          this.m_scrollWatcher.cleanup();
        }
        componentDidUpdate(e, t) {
          this.state.bShowingOptions &&
            !t.bShowingOptions &&
            this.m_scrollWatcher.updateScrollableParents();
        }
        onParentScroll() {
          this.hideDropdown();
        }
        get value() {
          return void 0 !== this.props.value ? this.props.value : null;
        }
        get selectedItem() {
          const e = this.value;
          for (let t of this.props.items)
            if ("object" == typeof t && t.value == e) return t;
          return null;
        }
        showDropdown() {
          this.setState({ bShowingOptions: !0 });
        }
        hideDropdown() {
          this.setState({ bShowingOptions: !1 });
        }
        render() {
          const e = this.selectedItem,
            t =
              void 0 !== this.props.defaultLabel
                ? this.props.defaultLabel
                : (0, d.Xx)("#Settings_SelectAnOption"),
            n = e ? e.sLabel : t;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              r.z,
              {
                ref: this.m_refButton,
                className: "ButtonControl Dropdown",
                onClick: this.showDropdown,
                enabled:
                  this.props.items &&
                  (this.props.items.length > 1 ||
                    (1 == this.props.items.length && !this.props.value)),
                style: {
                  pointerEvents: this.state.bShowingOptions
                    ? "none"
                    : "initial",
                },
              },
              o.createElement("span", { ref: this.m_scrollWatcher.ref }, n),
            ),
            this.state.bShowingOptions &&
              o.createElement(
                m,
                Object.assign({}, this.props, {
                  selectedItem: e,
                  buttonRef: this.m_refButton,
                  onDismissRequested: this.hideDropdown,
                }),
              ),
          );
        }
      }
      (0, s.gn)([l.ZP], g.prototype, "onParentScroll", null),
        (0, s.gn)([c.Fl], g.prototype, "value", null),
        (0, s.gn)([c.Fl], g.prototype, "selectedItem", null),
        (0, s.gn)([l.ZP], g.prototype, "showDropdown", null),
        (0, s.gn)([l.ZP], g.prototype, "hideDropdown", null);
      class S extends o.Component {
        constructor(e) {
          super(e),
            (this.state = { value: void 0 === e.value ? null : e.value });
        }
        onChange(e) {
          this.setState({ value: e }),
            this.props.onChange && this.props.onChange(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onChange = this.onChange),
            (e.value = this.state.value),
            o.createElement(g, Object.assign({}, e))
          );
        }
      }
      (0, s.gn)([l.ZP], S.prototype, "onChange", null);
    },
    9755: (e, t, n) => {
      n.d(t, { og: () => p, sC: () => h, vz: () => m });
      var i,
        s = n(655),
        o = n(7294),
        r = n(7056),
        a = n(8980),
        l = n(2188),
        c = n(7062);
      const d = o.createContext(null);
      class u {
        constructor() {
          (this.m_stack = l.LO.array([])),
            (this.m_bSViewtackWasChangedInThisCallStack = !0),
            (this.m_nCallStackClearedTimeout = 0),
            window.addEventListener("keydown", this.onWindowKeyDown),
            window.addEventListener("click", this.onWindowClick);
        }
        cleanup() {
          clearTimeout(this.m_nCallStackClearedTimeout),
            window.removeEventListener("keydown", this.onWindowKeyDown),
            window.removeEventListener("click", this.onWindowClick);
        }
        onWindowKeyDown(e) {
          "Escape" == e.key && this.dismissTopView();
        }
        onWindowClick(e) {
          const t = this.topView;
          t &&
            t.div &&
            !this.m_bSViewtackWasChangedInThisCallStack &&
            (t.shouldDismissOnClickAnywhere ||
              t.shouldDismissOnClickInViewStack) &&
            !t.isPointInDiv(e.clientX, e.clientY) &&
            (t.shouldDismissOnClickAnywhere ||
              t == this.bottomView ||
              t
                .getViewsBelow()
                .some((t) => t.isPointInDiv(e.clientX, e.clientY))) &&
            t.dismissView();
        }
        get size() {
          return this.m_stack.length;
        }
        dismissTopView() {
          var e;
          null === (e = this.topView) || void 0 === e || e.dismissView();
        }
        get hasViews() {
          return this.m_stack.length > 0;
        }
        get bottomView() {
          return this.hasViews ? this.m_stack[0] : null;
        }
        get topView() {
          return this.hasViews ? this.m_stack[this.m_stack.length - 1] : null;
        }
        getViewsBelow(e) {
          const t = this.m_stack.indexOf(e);
          return t < 0 ? [] : this.m_stack.slice(0, t);
        }
        getViewsAbove(e) {
          const t = this.m_stack.indexOf(e);
          return t < 0 ? [] : this.m_stack.slice(t + 1);
        }
        getViewLevel(e) {
          return this.m_stack.indexOf(e);
        }
        pushView(e) {
          this.m_stack.push(e), this.setViewJustAddedOrRemoved();
        }
        removeView(e) {
          this.m_stack.splice(this.m_stack.indexOf(e), 1),
            this.setViewJustAddedOrRemoved();
        }
        setViewJustAddedOrRemoved() {
          clearTimeout(this.m_nCallStackClearedTimeout),
            (this.m_bSViewtackWasChangedInThisCallStack = !0),
            (this.m_nCallStackClearedTimeout = setTimeout(
              () => (this.m_bSViewtackWasChangedInThisCallStack = !1),
              0,
            ));
        }
      }
      (0, s.gn)([r.ak], u.prototype, "cleanup", null),
        (0, s.gn)([r.ak], u.prototype, "onWindowKeyDown", null),
        (0, s.gn)([r.ak], u.prototype, "onWindowClick", null),
        (0, s.gn)([l.Fl], u.prototype, "size", null),
        (0, s.gn)([l.aD.bound], u.prototype, "dismissTopView", null),
        (0, s.gn)([l.Fl], u.prototype, "hasViews", null),
        (0, s.gn)([l.Fl], u.prototype, "bottomView", null),
        (0, s.gn)([l.Fl], u.prototype, "topView", null),
        (0, s.gn)([l.aD], u.prototype, "pushView", null),
        (0, s.gn)([l.aD], u.prototype, "removeView", null);
      let p = (i = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_viewRef = o.createRef()),
            (this.m_newViewStack = null);
        }
        get viewStack() {
          return this.context
            ? this.context
            : (null === this.m_newViewStack && (this.m_newViewStack = new u()),
              this.m_newViewStack);
        }
        get isTopView() {
          return this.viewStack.topView == this;
        }
        getViewsBelow() {
          return this.viewStack.getViewsBelow(this);
        }
        getViewsAbove() {
          return this.viewStack.getViewsAbove(this);
        }
        get viewLevel() {
          return this.viewStack.getViewLevel(this);
        }
        get viewShouldFadeForModal() {
          return this.getViewsAbove().some((e) => e.fadesViewsBelow);
        }
        get shouldDismissOnClickInViewStack() {
          var e;
          return (
            null !== (e = this.props.shouldDismissOnClickInViewStack) &&
            void 0 !== e &&
            e
          );
        }
        get shouldDismissOnClickAnywhere() {
          var e;
          return (
            null !== (e = this.props.shouldDismissOnClickAnywhere) &&
            void 0 !== e &&
            e
          );
        }
        get fadesViewsBelow() {
          var e;
          return null !== (e = this.props.fadesViewsBelow) && void 0 !== e && e;
        }
        dismissView() {
          var e, t;
          null === (t = (e = this.props).onDismissRequested) ||
            void 0 === t ||
            t.call(e);
        }
        get div() {
          return this.m_viewRef.current;
        }
        isPointInDiv(e, t) {
          if (!this.div) return !1;
          const n = this.div.getBoundingClientRect();
          return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
        }
        componentDidMount() {
          this.viewStack.pushView(this);
        }
        componentWillUnmount() {
          var e;
          this.viewStack.removeView(this),
            null === (e = this.m_newViewStack) || void 0 === e || e.cleanup();
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.shouldDismissOnClickAnywhere,
            delete e.shouldDismissOnClickInViewStack,
            delete e.fadesViewsBelow,
            delete e.onDismissRequested;
          const t = o.createElement(
            "div",
            Object.assign({}, e, {
              className: (0, a.LJ)(
                "View",
                [i.k_FadedForModalClassName, this.viewShouldFadeForModal],
                e.className,
              ),
              style: Object.assign(Object.assign({}, e.style), {
                zIndex: 3e3 + this.viewLevel,
              }),
              ref: this.m_viewRef,
            }),
            e.children,
          );
          return null === this.context
            ? o.createElement(d.Provider, { value: this.viewStack }, t)
            : t;
        }
      });
      (p.k_FadedForModalClassName = "FadedForModal"),
        (p.contextType = d),
        (0, s.gn)([l.Fl], p.prototype, "viewStack", null),
        (0, s.gn)([l.Fl], p.prototype, "isTopView", null),
        (0, s.gn)([l.Fl], p.prototype, "viewLevel", null),
        (0, s.gn)([l.Fl], p.prototype, "viewShouldFadeForModal", null),
        (0, s.gn)([r.ak], p.prototype, "dismissView", null),
        (p = i = (0, s.gn)([c.Pi], p));
      const h =
        865 != n.j
          ? o.forwardRef((e, t) =>
              o.createElement(p, Object.assign({}, e, { ref: t }), e.children),
            )
          : null;
      let m = class extends o.Component {
        constructor(e) {
          super(e), (this.state = { viewStack: null });
        }
        setFloatingViewStack(e) {
          this.setState({ viewStack: e });
        }
        render() {
          var e, t, n;
          const i =
            null !==
              (n =
                null ===
                  (t =
                    null === (e = this.state.viewStack) || void 0 === e
                      ? void 0
                      : e.bottomView) || void 0 === t
                  ? void 0
                  : t.viewShouldFadeForModal) &&
            void 0 !== n &&
            n;
          return o.createElement(
            "div",
            Object.assign({}, this.props, {
              className: (0, a.LJ)(
                "View",
                [p.k_FadedForModalClassName, i],
                this.props.className,
              ),
            }),
            this.props.children,
          );
        }
      };
      m = (0, s.gn)([c.Pi], m);
    },
    424: (e, t, n) => {
      n.d(t, { L: () => r });
      var i = n(1569);
      const s = Object.values(i.sH).filter((e) => "number" == typeof e);
      function o(e, t) {
        return new Set([...e, ...t]);
      }
      class r {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return r.s_Instance || (r.s_Instance = new r()), r.s_Instance;
        }
        suppressHaptics(e, t) {
          const n = new Set(t);
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                o(this.m_mapSuppressedHaptics.get(e), n),
              )
            : this.m_mapSuppressedHaptics.set(e, n);
        }
        suppressHapticsExcept(e, t) {
          const n = new Set(t),
            i = new Set(s.filter((e) => !n.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                o(this.m_mapSuppressedHaptics.get(e), i),
              )
            : this.m_mapSuppressedHaptics.set(e, i);
        }
        unsuppressHaptics(e, t) {
          const n = new Set(t);
          var i, s;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((i = this.m_mapSuppressedHaptics.get(e)),
                (s = n),
                new Set([...i].filter((e) => !s.has(e)))),
              );
        }
        isHapticSuppressed(e) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((t) =>
            t.has(e),
          );
        }
        triggerHaptic(e) {
          (0, i.Op)() != i.qA.Overlay ||
            this.isHapticSuppressed(e) ||
            null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.TriggerOverlayHapticEffect(
              VRHTML.VROverlay.ThisOverlayHandle(),
              e,
            );
        }
      }
      r.s_Instance = null;
    },
    3161: (e, t, n) => {
      n.d(t, { R: () => r });
      var i = n(7294),
        s = n(3935);
      const o = (e) =>
        i.createElement("div", {
          style: {
            position: "fixed",
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height,
            zIndex: 90019001,
          },
        });
      class r extends i.Component {
        render() {
          const e = document.body.getBoundingClientRect();
          let t = null;
          if (this.props.element) {
            const n = this.props.element.getBoundingClientRect();
            t = i.createElement(
              i.Fragment,
              null,
              i.createElement(o, { x: 0, y: 0, width: e.width, height: n.y }),
              i.createElement(o, {
                x: 0,
                y: n.y + n.height,
                width: e.width,
                height: e.height - n.height - n.y,
              }),
              i.createElement(o, {
                x: 0,
                y: n.y,
                width: n.x,
                height: n.height,
              }),
              i.createElement(o, {
                x: n.x + n.width,
                y: n.y,
                width: e.width - n.width - n.x,
                height: n.height,
              }),
            );
          } else
            t = i.createElement(
              i.Fragment,
              null,
              i.createElement(o, {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
              }),
            );
          return s.createPortal(t, document.body);
        }
      }
    },
    3930: (e, t, n) => {
      n.d(t, { u: () => d });
      var i,
        s = n(655),
        o = n(7294),
        r = n(8980),
        a = n(7062),
        l = n(9755),
        c = n(7008);
      let d = (i = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_refParentPortal = o.createRef()),
            (this.state = {
              elemBoundingParent: window.document.body,
              bInDOM: !1,
            });
        }
        componentDidMount() {
          var e, t;
          this.setState({
            elemBoundingParent: (0, r.gZ)(
              [
                "body",
                "[vsg-type=panel]",
                ...(null !== (e = this.props.allowableParentSelectors) &&
                void 0 !== e
                  ? e
                  : []),
              ],
              null === (t = this.m_refParentPortal.current) || void 0 === t
                ? void 0
                : t.anchorElement,
            ),
            bInDOM: !0,
          });
        }
        render() {
          var e;
          const t = this.state.elemBoundingParent.getBoundingClientRect();
          let n = Object.assign({}, this.props);
          return (
            delete n.onDismissRequested,
            delete n.backdropClassName,
            delete n.allowableParentSelectors,
            o.createElement(
              c.R,
              {
                ref: this.m_refParentPortal,
                allowableParentSelectors: [
                  "body",
                  "vsg-app",
                  "vsg-mountable",
                  "[vsg-type=panel]",
                  ...(null !== (e = this.props.allowableParentSelectors) &&
                  void 0 !== e
                    ? e
                    : []),
                ],
              },
              o.createElement(
                l.og,
                Object.assign({}, n, {
                  shouldDismissOnClickAnywhere: !1,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !0,
                  onDismissRequested: this.props.onDismissRequested,
                  className: (0, r.LJ)("Modal", this.props.className),
                  style: {
                    maxWidth: t.width - 2 * i.MODAL_BOUNDS_MARGIN,
                    maxHeight: t.height - 2 * i.MODAL_BOUNDS_MARGIN,
                  },
                }),
                this.state.bInDOM && this.props.children,
              ),
            )
          );
        }
      });
      (d.MODAL_BOUNDS_MARGIN = 10), (d = i = (0, s.gn)([a.Pi], d));
    },
    7475: (e, t, n) => {
      n.d(t, { I: () => i, P: () => m });
      var i,
        s,
        o = n(655),
        r = n(7294),
        a = n(7056),
        l = n(1569),
        c = n(424),
        d = n(8980),
        u = n(2188),
        p = n(5177),
        h = n(3161);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Vertical = 1)] = "Vertical"),
          (e[(e.Horizontal = 2)] = "Horizontal");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.MouseDown = 1)] = "MouseDown"),
            (e[(e.Dragging = 2)] = "Dragging"),
            (e[(e.Thrown = 3)] = "Thrown");
        })(s || (s = {}));
      class m extends r.Component {
        constructor(e) {
          super(e),
            (this.m_ref = r.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { eScrollState: s.Default, bAtEdge: null });
        }
        static get isScrollingSuppressed() {
          return m.s_setScrollingSuppressors.size > 0;
        }
        static get userIsDragging() {
          return !!m.s_CurrentlyDraggingPanel;
        }
        static suppressScrolling(e) {
          m.s_setScrollingSuppressors.add(e);
        }
        static unsuppressScrolling(e) {
          m.s_setScrollingSuppressors.delete(e);
        }
        componentWillUnmount() {
          this.stopMouseTracking(),
            window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
        }
        componentDidMount() {
          this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        componentDidUpdate(e, t) {
          this.state.bAtEdge &&
            !1 === t.bAtEdge &&
            c.L.Instance.triggerHaptic(l.sH.SlidingEdge);
        }
        onWindowMouseMove(e) {
          this.updateMouseTracking({ x: e.clientX, y: e.clientY });
        }
        onWindowMouseUp(e) {
          this.stopMouseTracking();
        }
        onMouseDown(e) {
          var t, n;
          null === (n = (t = this.props).onMouseDown) ||
            void 0 === n ||
            n.call(t, e),
            this.startMouseTracking({ x: e.clientX, y: e.clientY });
        }
        onMouseUp(e) {
          var t, n;
          null === (n = (t = this.props).onMouseUp) ||
            void 0 === n ||
            n.call(t, e),
            e.stopPropagation();
        }
        onScroll(e) {
          var t, n;
          null === (n = (t = this.props).onScroll) ||
            void 0 === n ||
            n.call(t, e),
            this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        get div() {
          return this.m_ref.current;
        }
        get currentlyAtEdge() {
          const e = this.m_ref.current;
          return e
            ? this.scrollsVertically
              ? 0 == e.scrollTop ||
                e.scrollTop + e.clientHeight == e.scrollHeight
              : 0 == e.scrollLeft ||
                e.scrollLeft + e.clientWidth == e.scrollWidth
            : null;
        }
        startMouseTracking(e) {
          this.setState({ eScrollState: s.MouseDown }),
            (this.m_initialMousePosition = e),
            window.document.addEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp);
        }
        updateMouseTracking(e) {
          const t = (0, l.Zj)(this.m_initialMousePosition, e);
          switch (this.state.eScrollState) {
            case s.MouseDown:
              if (this.props.scrollDirection == i.None) break;
              Math.abs(this.scrollsHorizontally ? t.x : t.y) >
                (this.scrollsHorizontally
                  ? m.MIN_HORIZONTAL_DRAG_DISTANCE
                  : m.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(e);
              break;
            case s.Dragging:
              if ((this.logScrollSample(), m.s_CurrentlyDraggingPanel)) {
                if (m.s_CurrentlyDraggingPanel != this) break;
              } else m.s_CurrentlyDraggingPanel = this;
              this.scrollsHorizontally
                ? (this.m_ref.current.scrollLeft =
                    this.m_initialScrollPosition.x + t.x)
                : (this.m_ref.current.scrollTop =
                    this.m_initialScrollPosition.y + t.y);
          }
        }
        requestNextAnimationFrame() {
          (this.m_animationFrameRequestHandle = window.requestAnimationFrame(
            this.onAnimationFrame,
          )),
            (this.m_lastAnimationFrameTimeMs = performance.now());
        }
        onAnimationFrame() {
          if (this.state.eScrollState != s.Thrown) return;
          const e = (performance.now() - this.m_lastAnimationFrameTimeMs) / 1e3;
          (this.m_ref.current.scrollLeft +=
            this.m_thrownVelocityPerSecond.x * e),
            (this.m_ref.current.scrollTop +=
              this.m_thrownVelocityPerSecond.y * e);
          const t = Math.sign(this.m_thrownVelocityPerSecond.x),
            n = Math.sign(this.m_thrownVelocityPerSecond.y),
            i =
              850 +
              (((0, l.JR)(this.m_thrownVelocityPerSecond) - 500) / 1e4) * 49150,
            o = Math.min(5e4, Math.max(850, i));
          (this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - t * o * e,
            y: this.m_thrownVelocityPerSecond.y - n * o * e,
          }),
            Math.sign(this.m_thrownVelocityPerSecond.x) != t ||
            Math.sign(this.m_thrownVelocityPerSecond.y) != n ||
            (0, l.JR)(this.m_thrownVelocityPerSecond) <= 1
              ? this.setState({ eScrollState: s.Default })
              : this.requestNextAnimationFrame();
        }
        startDragging(e) {
          m.isScrollingSuppressed ||
            ((0, l.Op)() == l.qA.Overlay &&
              (this.setState({ eScrollState: s.Dragging }),
              (this.m_initialMousePosition = e),
              (this.m_initialScrollPosition = {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              }),
              this.logScrollSample()));
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({ eScrollState: s.Thrown }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(e) {
          this.setState(
            (e, t) =>
              e.eScrollState == s.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle,
                  ),
                  { eScrollState: s.Default })
                : null,
            e,
          );
        }
        get isThrown() {
          return this.state.eScrollState == s.Thrown;
        }
        calculateThrowStartVelocity() {
          let e = null,
            t = 0;
          for (let n = 1; n < this.m_mostRecentScrollSamples.length; n++) {
            const i = this.m_mostRecentScrollSamples[n - 1],
              s = this.m_mostRecentScrollSamples[n],
              o = (s.timeMs - i.timeMs) / 1e3,
              r = {
                x: (s.scrollPosition.x - i.scrollPosition.x) / o,
                y: (s.scrollPosition.y - i.scrollPosition.y) / o,
              };
            e
              ? ((e.x = (e.x * t + r.x) / (t + 1)),
                (e.y = (e.y * t + r.y) / (t + 1)))
              : (e = r),
              t++;
          }
          const n = (0, l.JR)(e);
          return (
            n > m.MAX_PIXELS_PER_SECOND &&
              (e = (0, l.Fs)(e, m.MAX_PIXELS_PER_SECOND / n)),
            n < m.MIN_THROW_VELOCITY_PER_SECOND && (e = null),
            null != e ? e : { x: 0, y: 0 }
          );
        }
        logScrollSample() {
          for (
            this.m_mostRecentScrollSamples.push({
              scrollPosition: {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              },
              timeMs: performance.now(),
            });
            this.m_mostRecentScrollSamples.length > m.MAX_SCROLL_SAMPLES;
          )
            this.m_mostRecentScrollSamples.shift();
        }
        clearScrollSamples() {
          this.m_mostRecentScrollSamples = [];
        }
        stopMouseTracking() {
          m.s_CurrentlyDraggingPanel == this
            ? (this.startThrowing(),
              p.q.temporarilySuppressSoundEffect(),
              setTimeout(() => {
                m.s_CurrentlyDraggingPanel = null;
              }, 0))
            : this.setState({ eScrollState: s.Default }),
            this.clearScrollSamples(),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            window.document.removeEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            );
        }
        get scrollsHorizontally() {
          return this.props.scrollDirection == i.Horizontal;
        }
        get scrollsVertically() {
          return this.props.scrollDirection == i.Vertical;
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.scrollDirection, delete e.alwaysShowScrollbars;
          const t = this.props.alwaysShowScrollbars ? "scroll" : "auto";
          return r.createElement(
            r.Fragment,
            null,
            this.state.eScrollState == s.Dragging && r.createElement(h.R, null),
            r.createElement(
              "div",
              Object.assign({}, e, {
                className: (0, d.LJ)("ScrollPanel", e.className),
                style: Object.assign(Object.assign({}, e.style), {
                  overflowX:
                    this.props.scrollDirection == i.Horizontal ? t : "hidden",
                  overflowY:
                    this.props.scrollDirection == i.Vertical ? t : "hidden",
                }),
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onScroll: this.onScroll,
                ref: this.m_ref,
              }),
              this.props.children,
            ),
          );
        }
        get scrollTop() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollTop;
        }
        set scrollTop(e) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollTop = e), this.cancelThrowing());
        }
        get scrollLeft() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollLeft;
        }
        set scrollLeft(e) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollLeft = e), this.cancelThrowing());
        }
        scrollTo(e) {
          const t = () => {
            var t;
            null === (t = this.m_ref.current) || void 0 === t || t.scrollTo(e);
          };
          this.state.eScrollState == s.Thrown ? this.cancelThrowing(t) : t();
        }
        get children() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.children;
        }
        getBoundingClientRect() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.getBoundingClientRect();
        }
        get clientWidth() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.clientWidth;
        }
        get clientHeight() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.clientHeight;
        }
        get scrollWidth() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollWidth;
        }
        get scrollHeight() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollHeight;
        }
        get style() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.style;
        }
        contains(e) {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.contains(e);
        }
      }
      (m.s_CurrentlyDraggingPanel = null),
        (m.s_setScrollingSuppressors = u.LO.set()),
        (m.MAX_SCROLL_SAMPLES = 4),
        (m.MAX_PIXELS_PER_SECOND = 1e4),
        (m.MIN_THROW_VELOCITY_PER_SECOND = 1e3),
        (m.MIN_VERTICAL_DRAG_DISTANCE = 80),
        (m.MIN_HORIZONTAL_DRAG_DISTANCE = 40),
        (0, o.gn)([a.ak], m.prototype, "onWindowMouseMove", null),
        (0, o.gn)([a.ak], m.prototype, "onWindowMouseUp", null),
        (0, o.gn)([a.ak], m.prototype, "onMouseDown", null),
        (0, o.gn)([a.ak], m.prototype, "onMouseUp", null),
        (0, o.gn)([a.ak], m.prototype, "onScroll", null),
        (0, o.gn)([a.ak], m.prototype, "onAnimationFrame", null),
        (0, o.gn)([u.LO], m, "s_CurrentlyDraggingPanel", void 0),
        (0, o.gn)([u.Fl], m, "isScrollingSuppressed", null),
        (0, o.gn)([u.Fl], m, "userIsDragging", null),
        (0, o.gn)([u.aD], m, "suppressScrolling", null),
        (0, o.gn)([u.aD], m, "unsuppressScrolling", null);
    },
    4979: (e, t, n) => {
      n.d(t, { iR: () => v, px: () => o, uz: () => s });
      var i,
        s,
        o,
        r = n(655),
        a = n(7294),
        l = n(7056),
        c = n(2188),
        d = n(7062),
        u = n(1569),
        p = n(3107),
        h = n(5177),
        m = n(8980),
        g = n(424),
        S = n(7475),
        _ = n(3161);
      !(function (e) {
        (e[(e.Value = 0)] = "Value"), (e[(e.Color = 1)] = "Color");
      })(s || (s = {})),
        (function (e) {
          (e[(e.Below = 0)] = "Below"), (e[(e.OnHandle = 1)] = "OnHandle");
        })(o || (o = {}));
      let v = (i = class extends a.Component {
        constructor(e) {
          super(e),
            (this.m_sScrollSuppressedIdentifier = Math.round(
              1e6 * Math.random(),
            ).toString()),
            (this.m_refSlider = a.createRef()),
            (this.m_refSliderDefaultHandle = a.createRef()),
            (this.m_nAnimationFrameCallback = 0),
            (this.m_dragStartTime = null),
            (this.m_setDetentsToIgnore = new Set()),
            (this.m_nCurrentNearestSnappableDetent = null),
            (this.m_nValueOffset = 0),
            (this.state = { m_bSliding: !1 });
        }
        get isSliding() {
          return this.state.m_bSliding;
        }
        get isVertical() {
          var e;
          return null !== (e = this.props.vertical) && void 0 !== e && e;
        }
        componentDidMount() {
          window.document.addEventListener("mousemove", this.onWindowMouseMove),
            window.document.addEventListener("mouseup", this.onWindowMouseUp),
            this.setDragElapsedSecondsCSSProperty(0);
        }
        componentWillUnmount() {
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove,
          ),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
            window.cancelAnimationFrame(this.m_nAnimationFrameCallback),
            g.L.Instance.unsuppressHaptics(this),
            S.P.unsuppressScrolling(this.m_sScrollSuppressedIdentifier);
        }
        get sliderHandleElement() {
          var e, t;
          return null !==
            (t =
              null === (e = this.props.customHandleComponentRef) || void 0 === e
                ? void 0
                : e.current) && void 0 !== t
            ? t
            : this.m_refSliderDefaultHandle.current;
        }
        onSliderMouseDown(e) {
          this.m_refSlider.current &&
            this.sliderHandleElement &&
            ((this.m_nValueOffset = 0),
            this.startSliding({ x: e.clientX, y: e.clientY }));
        }
        onWindowMouseMove(e) {
          if (
            !this.state.m_bSliding ||
            !this.m_refSlider.current ||
            !this.sliderHandleElement
          )
            return;
          const t = this.isVertical ? e.clientY : e.clientX;
          this.updateValueForMousePosition(t, !1);
        }
        onSliderMouseEnter(e) {
          var t, n;
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e),
            (0, u.Op)() != u.qA.Overlay ||
              this.state.m_bSliding ||
              g.L.Instance.triggerHaptic(u.sH.ButtonEnter);
        }
        onSliderMouseLeave(e) {
          var t, n;
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t, e),
            (0, u.Op)() != u.qA.Overlay ||
              this.state.m_bSliding ||
              g.L.Instance.triggerHaptic(u.sH.ButtonLeave);
        }
        getNormalizedValueForMousePosition(e) {
          const t = this.m_refSlider.current.getBoundingClientRect(),
            n = this.sliderHandleElement.getBoundingClientRect(),
            i = this.isVertical ? t.bottom : t.left,
            s = this.isVertical ? n.height : n.width,
            o = this.isVertical ? t.height : t.width;
          return ((this.isVertical ? i - e + i : e) - (i + s / 2)) / (o - s);
        }
        updateValueForMousePosition(e, t) {
          const n = this.normalizedValue;
          let s =
            this.getNormalizedValueForMousePosition(e) + this.m_nValueOffset;
          const o = this.getClosestSnappableDetent(s),
            r = this.normalizedDetents;
          for (let e = 0; e < r.length; e++) {
            const t = r[e];
            Math.abs(s - t) > i.DETENT_UNIGNORE_DISTANCE &&
              this.m_setDetentsToIgnore.delete(t);
          }
          t && o === n && this.m_setDetentsToIgnore.add(o),
            null === o || this.m_setDetentsToIgnore.has(o) || (s = o),
            this.m_nCurrentNearestSnappableDetent !== o &&
              ((this.m_dragStartTime = new Date()),
              null !== this.m_nCurrentNearestSnappableDetent &&
                this.m_setDetentsToIgnore.add(
                  this.m_nCurrentNearestSnappableDetent,
                ),
              null === o ||
                this.m_setDetentsToIgnore.has(o) ||
                g.L.Instance.triggerHaptic(u.sH.Snap)),
            (this.m_nCurrentNearestSnappableDetent = o),
            this.setNormalizedValue(s);
        }
        get isSnappedToDetent() {
          return (
            null !== this.m_nCurrentNearestSnappableDetent &&
            !this.m_setDetentsToIgnore.has(
              this.m_nCurrentNearestSnappableDetent,
            )
          );
        }
        onWindowMouseUp(e) {
          this.stopSliding();
        }
        startExternalSliding(e) {
          if (!this.m_refSlider.current || !this.sliderHandleElement) return;
          const t = this.isVertical ? e.y : e.x;
          (this.m_nValueOffset =
            -this.getNormalizedValueForMousePosition(t) + this.normalizedValue),
            this.startSliding(e);
        }
        stopExternalSliding() {
          this.stopSliding();
        }
        startSliding(e) {
          var t, n, i;
          const s = this.isVertical ? e.y : e.x;
          this.setState({ m_bSliding: !0 }),
            this.updateValueForMousePosition(s, !0),
            this.setDragElapsedSecondsCSSProperty(0),
            g.L.Instance.suppressHapticsExcept(this, [
              u.sH.Sliding,
              u.sH.SlidingEdge,
              u.sH.Snap,
            ]),
            (this.m_dragStartTime = new Date()),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame,
            )),
            S.P.suppressScrolling(this.m_sScrollSuppressedIdentifier),
            p.G.Instance.playSound(
              null !== (t = this.props.interactionStartSoundEffect) &&
                void 0 !== t
                ? t
                : p.y.Grab,
            ),
            null === (i = (n = this.props).onInteractionStart) ||
              void 0 === i ||
              i.call(n);
        }
        stopSliding() {
          var e, t, n, i, s;
          this.state.m_bSliding &&
            (this.setState({ m_bSliding: !1 }),
            window.cancelAnimationFrame(this.m_nAnimationFrameCallback),
            this.setDragElapsedSecondsCSSProperty(0),
            this.m_setDetentsToIgnore.clear(),
            g.L.Instance.unsuppressHaptics(this),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e),
            null === (i = (n = this.props).onFinalChange) ||
              void 0 === i ||
              i.call(n, this.normalizedToExternal(this.normalizedValue)),
            h.q.temporarilySuppressSoundEffect(),
            p.G.Instance.playSound(
              null !== (s = this.props.interactionEndSoundEffect) &&
                void 0 !== s
                ? s
                : p.y.GrabRelease,
            ),
            S.P.unsuppressScrolling(this.m_sScrollSuppressedIdentifier));
        }
        getClosestSnappableDetent(e) {
          const t = this.normalizedDetents;
          t.sort((t, n) => (Math.abs(e - t) > Math.abs(e - n) ? 1 : -1));
          for (let n = 0; n < t.length; n++) {
            const s = t[n];
            if (Math.abs(e - s) < i.DETENT_SNAP_DISTANCE) return s;
          }
          return null;
        }
        get styleVariant() {
          return void 0 === this.props.styleVariant
            ? s.Value
            : this.props.styleVariant;
        }
        get valueStyleVariant() {
          return void 0 === this.props.valueStyleVariant
            ? o.Below
            : this.props.valueStyleVariant;
        }
        get externalRangeMin() {
          return void 0 === this.props.min ? 0 : this.props.min;
        }
        get externalRangeMax() {
          return void 0 === this.props.max ? 1 : this.props.max;
        }
        get normalizedStep() {
          if (void 0 !== this.props.step)
            return (
              this.props.step / (this.externalRangeMax - this.externalRangeMin)
            );
        }
        get exponent() {
          return void 0 === this.props.exponent ? 1 : this.props.exponent;
        }
        get normalizedDetents() {
          let e = this.props.detents || [];
          if (this.props.showDetentsForSnaps && this.props.step)
            for (
              let t = this.externalRangeMin;
              t <= this.externalRangeMax;
              t += this.props.step
            )
              e.push(t);
          return e.map(this.externalToNormalized);
        }
        externalToNormalized(e) {
          return e === this.props.specialMaxValue
            ? 1
            : e === this.props.specialMinValue
              ? 0
              : Math.pow(
                  (e - this.externalRangeMin) /
                    (this.externalRangeMax - this.externalRangeMin),
                  1 / this.exponent,
                );
        }
        normalizedToExternal(e) {
          return 0 == e && void 0 !== this.props.specialMinValue
            ? this.props.specialMinValue
            : 1 == e && void 0 !== this.props.specialMaxValue
              ? this.props.specialMaxValue
              : this.externalRangeMin +
                Math.pow(e, this.exponent) *
                  (this.externalRangeMax - this.externalRangeMin);
        }
        get normalizedValue() {
          return this.externalToNormalized(this.externalValue);
        }
        get externalValue() {
          return this.props.value;
        }
        get shouldTriggerHapticOnSnap() {
          const e = this.normalizedStep;
          return e > 0 && e >= 1 / 40;
        }
        setNormalizedValue(e) {
          e < 0 && (e = 0), e > 1 && (e = 1);
          let t = !1;
          const n = this.normalizedStep,
            i = this.normalizedValue;
          if (n && ((e = Math.round(e / n) * n), Math.abs(e - i) > 1e-4)) {
            const i = 1 % n,
              s = Math.abs(i - n) < 1e-5 ? 1 : 1 - (1 % n);
            (0 == e || Math.abs(e - s) < 0.001) &&
              !t &&
              (g.L.Instance.triggerHaptic(u.sH.SlidingEdge), (t = !0)),
              !this.shouldTriggerHapticOnSnap ||
                this.isSnappedToDetent ||
                (0, u.Op)() != u.qA.Overlay ||
                t ||
                (g.L.Instance.triggerHaptic(u.sH.Snap), (t = !0));
          }
          if (
            !this.shouldTriggerHapticOnSnap &&
            i >= 0 &&
            i <= 1 &&
            !this.isSnappedToDetent
          ) {
            (0 == e || 1 == e) &&
              i > 0 &&
              i < 1 &&
              !t &&
              (g.L.Instance.triggerHaptic(u.sH.SlidingEdge), (t = !0));
            const n = 40;
            Math.floor(i * n) == Math.floor(e * n) ||
              t ||
              (g.L.Instance.triggerHaptic(u.sH.Sliding), (t = !0));
          }
          const s = this.normalizedToExternal(e);
          this.props.onChange && this.props.onChange(s);
        }
        setDragElapsedSecondsCSSProperty(e) {
          this.m_refSlider.current &&
            this.m_refSlider.current.style.setProperty(
              "--drag-elapsed-seconds",
              e.toString(),
            );
        }
        onDragAnimationFrame() {
          let e = (new Date().getTime() - this.m_dragStartTime.getTime()) / 1e3;
          this.normalizedStep > 0.1 && (e = 0),
            this.setDragElapsedSecondsCSSProperty(e),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame,
            ));
        }
        render() {
          var e;
          const t =
              void 0 !== this.props.renderValue
                ? this.props.renderValue(this.externalValue)
                : null,
            n = this.styleVariant == s.Value && t,
            i = n && this.valueStyleVariant == o.OnHandle,
            r = n && this.valueStyleVariant == o.Below,
            l = this.styleVariant == s.Value && !i,
            c = this.normalizedValue,
            d = i && t.length >= 4,
            u =
              null !== (e = this.props.customHandleComponent) && void 0 !== e
                ? e
                : a.createElement(
                    "div",
                    { className: "HandleContainer" },
                    a.createElement(
                      "div",
                      {
                        className: (0, m.LJ)("Handle", ["SmallerText", d]),
                        ref: this.m_refSliderDefaultHandle,
                        style: {
                          backgroundColor:
                            this.props.styleVariant == s.Color ? t : null,
                        },
                      },
                      l &&
                        a.createElement("div", { className: "HandleCircle" }),
                      i &&
                        a.createElement("div", { className: "RangeLabel" }, t),
                    ),
                  );
          return a.createElement(
            a.Fragment,
            null,
            this.state.m_bSliding &&
              a.createElement(_.R, { element: this.m_refSlider.current }),
            a.createElement(
              "div",
              {
                className: (0, m.LJ)(
                  "SliderControl",
                  ["Vertical", this.isVertical],
                  ["Color", this.styleVariant == s.Color],
                  ["Sliding", this.state.m_bSliding],
                  ["Disabled", !1 === this.props.enabled],
                  ["ValueOnHandle", i],
                  this.props.additionalClassName,
                ),
                style: {
                  "--slider-value": c,
                  "--slider-color":
                    this.props.styleVariant == s.Color
                      ? this.props.sliderColor
                      : null,
                },
                ref: this.m_refSlider,
                onMouseDown: this.onSliderMouseDown,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
              },
              a.createElement(
                "div",
                { className: "Track" },
                this.normalizedDetents.map((e) =>
                  a.createElement("div", {
                    key: "detent-" + e,
                    className: "Detent",
                    style: { "--detent-value": e.toString() },
                  }),
                ),
              ),
              u,
            ),
            r && a.createElement("div", { className: "RangeLabel" }, t),
          );
        }
      });
      (v.DETENT_SNAP_DISTANCE = 0.05),
        (v.DETENT_UNIGNORE_DISTANCE = 0.15),
        (0, r.gn)([l.ak], v.prototype, "onSliderMouseDown", null),
        (0, r.gn)([l.ak], v.prototype, "onWindowMouseMove", null),
        (0, r.gn)([l.ak], v.prototype, "onSliderMouseEnter", null),
        (0, r.gn)([l.ak], v.prototype, "onSliderMouseLeave", null),
        (0, r.gn)([c.Fl], v.prototype, "isSnappedToDetent", null),
        (0, r.gn)([l.ak], v.prototype, "onWindowMouseUp", null),
        (0, r.gn)([c.Fl], v.prototype, "styleVariant", null),
        (0, r.gn)([c.Fl], v.prototype, "valueStyleVariant", null),
        (0, r.gn)([c.Fl], v.prototype, "externalRangeMin", null),
        (0, r.gn)([c.Fl], v.prototype, "externalRangeMax", null),
        (0, r.gn)([c.Fl], v.prototype, "normalizedStep", null),
        (0, r.gn)([c.Fl], v.prototype, "exponent", null),
        (0, r.gn)([c.Fl], v.prototype, "normalizedDetents", null),
        (0, r.gn)([l.ak], v.prototype, "externalToNormalized", null),
        (0, r.gn)([l.ak], v.prototype, "normalizedToExternal", null),
        (0, r.gn)([c.Fl], v.prototype, "normalizedValue", null),
        (0, r.gn)([c.Fl], v.prototype, "externalValue", null),
        (0, r.gn)([c.Fl], v.prototype, "shouldTriggerHapticOnSnap", null),
        (0, r.gn)([l.ak], v.prototype, "onDragAnimationFrame", null),
        (v = i = (0, r.gn)([d.Pi], v));
    },
    3107: (e, t, n) => {
      n.d(t, { G: () => r, y: () => i });
      var i,
        s = n(655),
        o = n(1569);
      !(function (e) {
        (e[(e.DashboardOpen = 0)] = "DashboardOpen"),
          (e[(e.DashboardClose = 1)] = "DashboardClose"),
          (e[(e.ControlBarButtonClick = 2)] = "ControlBarButtonClick"),
          (e[(e.ButtonClick = 3)] = "ButtonClick"),
          (e[(e.SurfaceClick = 4)] = "SurfaceClick"),
          (e[(e.VolumePreview = 5)] = "VolumePreview"),
          (e[(e.Grab = 6)] = "Grab"),
          (e[(e.GrabRelease = 7)] = "GrabRelease"),
          (e[(e.PagedSettingsNavigation = 8)] = "PagedSettingsNavigation");
      })(i || (i = {}));
      class r {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return r.s_Instance || (r.s_Instance = new r()), r.s_Instance;
        }
        preloadSounds() {
          if (!((0, o.Op)() != o.qA.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in i) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if ((0, o.Op)() != o.qA.Overlay) return;
            if (null == e) return;
            const t = this.getAudioElems(e);
            if (!t || 0 == t.length) return;
            const n = t[Math.floor(Math.random() * t.length)];
            n.pause(), (n.currentTime = 0);
            try {
              yield n.play();
            } catch (t) {
              console.error(
                `Failed to play sound effect "${i[e]}" (${n.src}, networkState=${n.networkState}, readyState=${n.readyState})`,
              );
            }
          });
        }
        loadSounds(e) {
          const t = r.Sources[e],
            n = t.source;
          if (!n) return void this.m_mapSoundElems.set(e, []);
          const i = ("string" == typeof n ? [n] : n).map((e) => {
            var n, i;
            let s = document.createElement("audio");
            return (
              (s.src = `${e}?t=${(new Date()).getTime()}`),
              (s.preload = "auto"),
              (s.volume = null !== (n = t.volume) && void 0 !== n ? n : 1),
              (null === (i = t.bRespectsGlobalVolume) || void 0 === i || i) &&
                (s.volume *= 1),
              s
            );
          });
          this.m_mapSoundElems.set(e, i);
        }
        getAudioElems(e) {
          return (
            this.m_mapSoundElems.has(e) ||
              (console.warn(
                "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds().",
              ),
              this.loadSounds(e)),
            this.m_mapSoundElems.get(e)
          );
        }
      }
      (r.Sources = {
        [i.DashboardOpen]: { source: "" },
        [i.DashboardClose]: { source: "" },
        [i.ControlBarButtonClick]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [i.ButtonClick]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [i.SurfaceClick]: { source: "" },
        [i.VolumePreview]: {
          source: "/dashboard/sounds/volume_change.wav",
          bRespectsGlobalVolume: !1,
        },
        [i.Grab]: { source: "" },
        [i.GrabRelease]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [i.PagedSettingsNavigation]: {
          source: "/dashboard/sounds/deck_ui_navigation.wav",
        },
      }),
        (r.s_Instance = null);
    },
    2749: (e, t, n) => {
      n.d(t, { Ti: () => c });
      var i,
        s,
        o = n(655),
        r = n(7294),
        a = n(8980),
        l = n(7056);
      !(function (e) {
        e[(e.Fade = 0)] = "Fade";
      })(i || (i = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Showing = 1)] = "Showing"),
            (e[(e.Shown = 2)] = "Shown"),
            (e[(e.Hiding = 3)] = "Hiding");
        })(s || (s = {}));
      class c extends r.Component {
        constructor(e) {
          super(e),
            (this.m_nNextStateTimeoutHandle = 0),
            (this.state = { eAnimationState: e.visible ? s.Shown : s.Hidden });
        }
        componentDidMount() {
          this.emitStateCallback();
        }
        componentWillUnmount() {
          this.cancelTimeout();
        }
        cancelTimeout() {
          clearTimeout(this.m_nNextStateTimeoutHandle);
        }
        emitStateCallback() {
          var e, t, n, i, o, r, a, l;
          switch (this.state.eAnimationState) {
            case s.Showing:
              null === (t = (e = this.props).onStartShowing) ||
                void 0 === t ||
                t.call(e);
              break;
            case s.Shown:
              null === (i = (n = this.props).onShown) ||
                void 0 === i ||
                i.call(n);
              break;
            case s.Hiding:
              null === (r = (o = this.props).onStartHiding) ||
                void 0 === r ||
                r.call(o);
              break;
            case s.Hidden:
              null === (l = (a = this.props).onHidden) ||
                void 0 === l ||
                l.call(a);
          }
        }
        componentDidUpdate(e, t) {
          this.state.eAnimationState != t.eAnimationState &&
            this.emitStateCallback(),
            this.props.visible != e.visible &&
              (this.cancelTimeout(),
              (this.m_nNextStateTimeoutHandle = setTimeout(
                this.finishAnimation,
                1e3 * this.props.duration,
              )),
              this.setState({
                eAnimationState: this.props.visible ? s.Showing : s.Hiding,
              }));
        }
        static getDerivedStateFromProps(e, t) {
          return {};
        }
        finishAnimation() {
          this.setState((e) => {
            switch (e.eAnimationState) {
              case s.Showing:
                return { eAnimationState: s.Shown };
              case s.Hiding:
                return { eAnimationState: s.Hidden };
            }
            return null;
          });
        }
        render() {
          return this.state.eAnimationState == s.Hidden
            ? null
            : r.createElement(
                "div",
                {
                  className: (0, a.LJ)(
                    "ShowHideAnimation",
                    s[this.state.eAnimationState],
                    [
                      "Preset-" + i[this.props.preset],
                      void 0 !== this.props.preset,
                    ],
                    this.props.additionalClassName,
                  ),
                  style: { "--show-hide-duration": this.props.duration + "s" },
                },
                this.props.children,
              );
        }
      }
      (0, o.gn)([l.ZP], c.prototype, "cancelTimeout", null),
        (0, o.gn)([l.ZP], c.prototype, "finishAnimation", null);
    },
    1380: (e, t, n) => {
      n.d(t, { S: () => c });
      var i = n(655),
        s = n(7056),
        o = n(9669),
        r = n.n(o),
        a = n(2188);
      class l {
        constructor() {
          (this.m_Applications = a.LO.map()),
            (this.m_sceneApplicationStateChangedEventHandle = null);
        }
        Init() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
              yield this.UpdateApplications();
          });
        }
        onSceneApplicationStateChanged() {
          this.UpdateApplications();
        }
        SetApplicationMap(e) {
          this.m_Applications.clear(),
            e.apps.forEach((e) => {
              this.m_Applications.set(e.key, e);
            });
        }
        UpdateApplications() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            yield this.QueryApplications().then((e) => {
              this.SetApplicationMap(e);
            });
          });
        }
        QueryApplications() {
          return new Promise(function (e, t) {
            r()
              .get("/app/list.json")
              .then((t) => {
                e(t.data);
              })
              .catch((e) => {
                t(e);
              });
          });
        }
        GetAppImageURL(e) {
          var t;
          return (
            "/app/image?app_key=" +
            e +
            "&version=" +
            (null !==
              (t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion()) && void 0 !== t
              ? t
              : "0")
          );
        }
        GetApp(e) {
          return this.m_Applications.has(e)
            ? this.m_Applications.get(e)
            : void 0;
        }
        GetRecentApps() {
          let e = [];
          return (
            this.m_Applications.forEach((t) => {
              t.is_internal || e.push(t);
            }),
            e.sort((e, t) =>
              e.last_launch < t.last_launch
                ? 1
                : e.last_launch > t.last_launch
                  ? -1
                  : e.name < t.name
                    ? 1
                    : e.name > t.name
                      ? -1
                      : 0,
            ),
            e
          );
        }
        GetCurrentSceneProcess() {
          let e;
          return (
            this.m_Applications.forEach((t) => {
              t.current_scene_process && !t.is_internal && (e = t);
            }),
            e
          );
        }
        GetRunningApps() {
          let e = [];
          for (let t of this.m_Applications.values()) t.pid && e.push(t);
          return e;
        }
        FindAppByPid(e) {
          for (let t of this.m_Applications.values()) if (t.pid == e) return t;
        }
        IsAppAllowedPrivateInputs(e) {
          return "openvr.component.vrcompositor" == e;
        }
        ShouldShowBindingFailureForApp(e) {
          if (null == e || "" == e) return !1;
          if ("openvr.component.vrcompositor" == e) return !0;
          if (null == this.GetApp(e)) return !1;
          let t = this.GetCurrentSceneProcess();
          return null != t && t.key == e;
        }
      }
      (0, i.gn)([a.LO], l.prototype, "m_Applications", void 0),
        (0, i.gn)([s.ak], l.prototype, "onSceneApplicationStateChanged", null),
        (0, i.gn)([a.aD], l.prototype, "SetApplicationMap", null),
        (0, i.gn)([s.ak], l.prototype, "QueryApplications", null),
        (0, i.gn)([s.ak], l.prototype, "GetAppImageURL", null),
        (0, i.gn)([s.ak], l.prototype, "GetApp", null),
        (0, i.gn)([s.ak], l.prototype, "GetRecentApps", null),
        (0, i.gn)([s.ak], l.prototype, "GetCurrentSceneProcess", null),
        (0, i.gn)([s.ak], l.prototype, "IsAppAllowedPrivateInputs", null),
        (0, i.gn)([s.ak], l.prototype, "ShouldShowBindingFailureForApp", null);
      const c = new l();
      window.applications = c;
    },
    4687: (e, t, n) => {
      n.d(t, { p: () => o });
      var i = n(655),
        s = n(7056);
      class o {
        constructor() {
          this.m_vecCallbacks = [];
        }
        Register(e) {
          return (
            this.m_vecCallbacks.push(e),
            {
              Unregister: () => {
                const t = this.m_vecCallbacks.indexOf(e);
                t >= 0 && this.m_vecCallbacks.splice(t, 1);
              },
            }
          );
        }
        Dispatch(...e) {
          for (const t of Array.from(this.m_vecCallbacks)) t(...e);
        }
        ClearAllCallbacks() {
          this.m_vecCallbacks = [];
        }
        CountRegistered() {
          return this.m_vecCallbacks.length;
        }
      }
      (0, i.gn)([s.ZP], o.prototype, "Dispatch", null);
    },
    7471: (e, t, n) => {
      function i(...e) {
        return e.reduce(
          (e, t) =>
            t
              ? "string" == typeof t
                ? e
                  ? `${e} ${t}`
                  : t
                : "object" == typeof t
                  ? e
                    ? `${e} ${s(t)}`
                    : s(t)
                  : e
              : e,
          "",
        );
      }
      function s(e) {
        return Object.keys(e).reduce(
          (t, n) => (e[n] ? (t ? `${t} ${n}` : n) : t),
          "",
        );
      }
      n.d(t, { Z: () => i });
    },
    7176: (e, t, n) => {
      n.d(t, {
        A4: () => y,
        AC: () => T,
        Av: () => se,
        Az: () => v,
        BW: () => ee,
        BZ: () => k,
        CS: () => $,
        EL: () => W,
        Ek: () => te,
        F$: () => O,
        FM: () => re,
        GN: () => _,
        I8: () => o,
        J9: () => me,
        MI: () => l,
        MJ: () => Se,
        ML: () => _e,
        MZ: () => w,
        Ml: () => ve,
        N9: () => pe,
        Ob: () => Q,
        PF: () => d,
        Pt: () => D,
        Pv: () => s,
        Qg: () => L,
        R3: () => ue,
        RD: () => z,
        RM: () => f,
        T2: () => A,
        Us: () => m,
        Vq: () => S,
        W4: () => r,
        WF: () => de,
        Xl: () => E,
        YJ: () => le,
        YL: () => ce,
        ZN: () => F,
        aT: () => H,
        bU: () => ge,
        bp: () => X,
        bt: () => G,
        dG: () => V,
        eW: () => N,
        f$: () => P,
        f8: () => C,
        fY: () => q,
        fj: () => oe,
        gB: () => u,
        gC: () => b,
        hK: () => i,
        jW: () => a,
        je: () => x,
        jw: () => B,
        k3: () => p,
        k_: () => ie,
        ml: () => I,
        nf: () => K,
        o1: () => Z,
        oh: () => U,
        po: () => c,
        qV: () => h,
        r4: () => g,
        rT: () => Y,
        rl: () => M,
        ro: () => he,
        wX: () => R,
        wc: () => ae,
        y3: () => J,
        yQ: () => ne,
        zL: () => j,
      });
      const i = "openvr.tool.steamvr_environments",
        s = "system.generated.steam.exe",
        o = "steam.app.",
        r = o + "250820",
        a = o + "330050",
        l = "system.dashboard.",
        c = "system.dashboard.quicklaunch",
        d = "system.dashboard.nowplaying",
        u = "system.dashboard.desktop",
        p = 0.25,
        h = 2,
        m = "current.scene.app.binding.list",
        g = "system.desktop",
        S = "system.window",
        _ = "system.standalone",
        v = "system.systemui",
        y = "system.settings",
        b = "system.keyboard",
        f = "system.vrwebhelper.controllerbinding",
        C = "system.messageoverlay",
        w = "valve.steam",
        R = "valve.steam.desktopgame",
        A = "valve.steam.gamepadui.main",
        M = "valve.steam.gamepadui.header",
        k = "valve.steam.gamepadui.bar",
        B = "valve.steam.gamepadui.keyboard",
        E = "valve.steam.desktop",
        T = "steamlink_openvr-overlay",
        I = "DashboardCurvatureOrigin",
        D = v + "::" + I,
        O = 865 != n.j ? 2.667 / 1694 : null,
        L = "DashboardControlStripTransform",
        V = "DashboardGrabHandleTransform",
        F = "DashboardOverlayControlBarOrigin",
        P = "DashboardGrabHandleTransform_Legacy",
        x = "/settings/steamvr/enableHomeApp",
        G = "/settings/steamvr/supersampleManualOverride",
        N = "/settings/steamvr/supersampleScale",
        H = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        U = "/settings/camera/roomViewStyle",
        W = "/settings/steamvr/backgroundCameraHeight",
        z = "/settings/steamvr/backgroundDomeRadius",
        X = "/settings/steamvr/analogGain",
        j = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        q = "/settings/steamvr/showAdvancedSettings",
        K = "/settings/dashboard/lastAccessedExternalOverlayKey",
        J = "/settings/internal/dashboardInitialOverlay",
        Z = "/settings/dashboard/position_2",
        Q = "/settings/dashboard/theaterCurvature",
        $ = "/settings/dashboard/theaterScreenSize",
        Y = "/settings/dashboard/theaterScreenAlignment",
        ee = "/settings/dashboard/disableAnimations",
        te = "/settings/steamvr/overlayRenderQuality_2",
        ne = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        ie = "/settings/camera/roomView",
        se = "/settings/camera/enableCamera",
        oe = "/settings/dashboard/enableWindowView",
        re = "/settings/dashboard/maxInlineTabs",
        ae = "/settings/steamvr/maxRecommendedResolution",
        le = "/settings/steamvr/disableKeyboardPrivacy",
        ce = "/settings/dashboard/allowLegacyQuickLaunch",
        de = "/settings/openxr/metaUnityPluginCompatibility",
        ue = "/settings/input/overlayFilteringEnabled",
        pe = "/settings/input/overlayFilteringMinCutoff",
        he = "/settings/input/overlayFilteringBeta",
        me = "/settings/input/overlayFilteringDerivCutoff",
        ge = "/settings/input/overlayMagnetismEnabled",
        Se = "/settings/input/overlayMagnetismLockDistance",
        _e = "/settings/input/overlayMagnetismDeadZone",
        ve = "binding_callouts/main";
    },
    5211: (e, t, n) => {
      n.d(t, {
        Cl: () => M,
        E9: () => k,
        Fv: () => C,
        NK: () => s,
        _l: () => A,
        c6: () => I,
        ik: () => i,
      });
      var i,
        s,
        o,
        r = n(655),
        a = n(7056),
        l = n(9669),
        c = n.n(l),
        d = n(2188),
        u = n(3568),
        p = n(1569),
        h = n(8048),
        m = n(1380),
        g = n(9809);
      class S {}
      (0, r.gn)([d.LO], S.prototype, "path", void 0),
        (0, r.gn)([d.LO], S.prototype, "mode", void 0),
        (0, r.gn)([d.LO], S.prototype, "parameters", void 0),
        (0, r.gn)([d.LO], S.prototype, "inputs", void 0);
      class _ {}
      (0, r.gn)([d.LO], _.prototype, "path", void 0),
        (0, r.gn)([d.LO], _.prototype, "output", void 0);
      class v {}
      (0, r.gn)([d.LO], v.prototype, "path", void 0),
        (0, r.gn)([d.LO], v.prototype, "output", void 0);
      class y {}
      (0, r.gn)([d.LO], y.prototype, "path", void 0),
        (0, r.gn)([d.LO], y.prototype, "output", void 0);
      class b {}
      (0, r.gn)([d.LO], b.prototype, "output", void 0),
        (0, r.gn)([d.LO], b.prototype, "inputs", void 0);
      class f {}
      (0, r.gn)([d.LO], f.prototype, "chords", void 0),
        (0, r.gn)([d.LO], f.prototype, "poses", void 0),
        (0, r.gn)([d.LO], f.prototype, "haptics", void 0),
        (0, r.gn)([d.LO], f.prototype, "sources", void 0),
        (0, r.gn)([d.LO], f.prototype, "skeleton", void 0),
        (function (e) {
          (e[(e.eButtonSide_None = 0)] = "eButtonSide_None"),
            (e[(e.eButtonSide_Left = 1)] = "eButtonSide_Left"),
            (e[(e.eButtonSide_Right = 2)] = "eButtonSide_Right");
        })(i || (i = {})),
        (function (e) {
          (e.eTrackPadInvert_None = ""),
            (e.eTrackPadInvert_X = "x"),
            (e.eTrackPadInvert_Y = "y"),
            (e.eTrackPadInvert_XY = "xy");
        })(s || (s = {}));
      class C {
        constructor() {
          (this.vecRequired = []), (this.vecSuggested = []);
        }
      }
      class w {}
      (0, r.gn)([d.LO], w.prototype, "device_path_string", void 0),
        (0, r.gn)([d.LO], w.prototype, "device_path_handle", void 0),
        (0, r.gn)([d.LO], w.prototype, "role", void 0),
        (0, r.gn)([d.LO], w.prototype, "controller_role", void 0);
      class R {}
      function A(e) {
        return new Promise(function (t, n) {
          c()
            .get("/input/getactions.json?app_key=" + e)
            .then((n) => {
              console.log("Loaded action manifest for ", e), t(n.data);
            })
            .catch((e) => {
              n(e);
            });
        });
      }
      function M(e, t, n) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          let i = (yield c().get(
            "/input/loadbindingfromurl.json?binding_url=" +
              encodeURI(n) +
              "&controller_type=" +
              encodeURI(t) +
              "&app_key=" +
              encodeURI(e),
          )).data;
          if (i.success) return i;
          throw new Error(i.error);
        });
      }
      (0, r.gn)([d.LO], R.prototype, "trackers", void 0),
        (0, r.gn)([d.LO], R.prototype, "valid_roles", void 0);
      class k {
        constructor(e, t) {
          (this.x = e), (this.y = t), this.toString.bind(this);
        }
        toString() {
          return this.x + "," + this.y;
        }
      }
      class B {
        constructor(e, t, n, i, s) {
          (this.m_BindingUISource = void 0),
            (this.m_ControllerProfile = void 0),
            (this.m_sDeviceInputPath = void 0),
            (this.m_eButtonSide = void 0),
            (this.m_sInputPath = void 0),
            (this.m_sActionSet = void 0),
            (this.m_BindingStoreObserverDisposer = void 0),
            (this.m_iNewSourceEntry = -1),
            (this.m_sDeviceInputPath = e),
            (this.m_ControllerProfile = t),
            (this.m_eButtonSide = n),
            (this.m_sInputPath = i),
            (this.m_sActionSet = s),
            (this.m_BindingStoreObserverDisposer = (0, d.N7)(I, (e) => {
              "m_LoadedBinding" == e.name && this.UpdateBindingSource();
            })),
            this.UpdateBindingSource(),
            I.RegisterBindingWatcher(this.UpdateBindingSource.bind(this));
        }
        cancelWatcher() {
          this.m_BindingStoreObserverDisposer(),
            I.UnregisterBindingWatcher(this.UpdateBindingSource);
        }
        UpdateBindingSource() {
          this.m_BindingUISource = I.GetActionBinding(
            this.GetFullInputPath,
            this.m_sActionSet,
          );
        }
        get GetFullInputPath() {
          let e = this.m_sDeviceInputPath + this.m_sInputPath;
          return (e = e.replace(/([^:]\/)\/+/g, "$1")), e;
        }
        GetSVGEndPoint() {
          return new k(
            this.m_ControllerProfile.input_source[this.m_sInputPath]
              .binding_image_point[0],
            this.m_ControllerProfile.input_source[this.m_sInputPath]
              .binding_image_point[1],
          );
        }
        get GetButtonSide() {
          return this.m_eButtonSide;
        }
        get GetNumModes() {
          return this.m_BindingUISource ? this.m_BindingUISource.length : 0;
        }
        GetActionForInputType(e, t) {
          if (
            this.m_BindingUISource &&
            this.m_BindingUISource[e].inputs &&
            this.m_BindingUISource[e].inputs.has(t)
          ) {
            let n = this.m_BindingUISource[e].inputs.get(t).output,
              i = I.GetActionByName(n);
            if (!i) {
              let e = I.GetSimulatedActionByPath(n);
              e && (i = I.CreateActionDefinitionForSimulatedAction(e));
            }
            let s = I.GetAliasInfo(n);
            return (
              i &&
                s &&
                s.alias_name &&
                ((i = Object.assign({}, i)), (i.localized_name = s.alias_name)),
              i
            );
          }
        }
        GetClickAction(e) {
          return this.GetActionForInputType(e, "click");
        }
        GetTouchAction(e) {
          return this.GetActionForInputType(e, "touch");
        }
        GetPositionAction(e) {
          return this.GetActionForInputType(e, "position");
        }
        GetHeldAction(e) {
          return this.GetActionForInputType(e, "held");
        }
        GetLongAction(e) {
          return this.GetActionForInputType(e, "long");
        }
        GetSingleAction(e) {
          return this.GetActionForInputType(e, "single");
        }
        GetDoubleAction(e) {
          return this.GetActionForInputType(e, "double");
        }
        GetNorthAction(e) {
          return this.GetActionForInputType(e, "north");
        }
        GetEastAction(e) {
          return this.GetActionForInputType(e, "east");
        }
        GetSouthAction(e) {
          return this.GetActionForInputType(e, "south");
        }
        GetWestAction(e) {
          return this.GetActionForInputType(e, "west");
        }
        GetCenterAction(e) {
          return this.GetActionForInputType(e, "center");
        }
        GetScrollAction(e) {
          return this.GetActionForInputType(e, "scroll");
        }
        GetPullAction(e) {
          return this.GetActionForInputType(e, "pull");
        }
        GetForceAction(e) {
          return this.GetActionForInputType(e, "force");
        }
        GetGrabAction(e) {
          return this.GetActionForInputType(e, "grab");
        }
        GetValueAction(e) {
          return this.GetActionForInputType(e, "value");
        }
        get GetControllerInputName() {
          return g.I.LocalizeDriverString(
            this.m_ControllerProfile.resource_root,
            this.m_sInputPath,
          );
        }
        get GetModes() {
          return this.m_BindingUISource ? this.m_BindingUISource : [];
        }
        GetMode(e) {
          return this.m_BindingUISource &&
            e >= 0 &&
            e < this.m_BindingUISource.length
            ? this.m_BindingUISource[e].mode
            : "none";
        }
        get GetInputSourceType() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath].type;
        }
        get GetInputSource() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath];
        }
        get GetInputSourceClickSupport() {
          return (
            !(
              this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath].click
            ) &&
            ("knuckles" != this.m_ControllerProfile.controller_type ||
              "/input/trackpad" != this.m_sInputPath) &&
            !(
              !this.m_ControllerProfile.input_source[this.m_sInputPath].click &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath].touch
            ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].click ||
              this.m_ControllerProfile.input_source[this.m_sInputPath].touch)
          );
        }
        get GetInputSourceTouchSupport() {
          return (
            !(
              !this.m_ControllerProfile.input_source[this.m_sInputPath].touch &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity
            ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].touch ||
              this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity)
          );
        }
        get GetInputSourceForceSupport() {
          return (
            !!this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
            this.m_ControllerProfile.input_source[this.m_sInputPath].force
          );
        }
        get GetInputSourceDefaultDeadzone() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath]
            .default_dead_zone_pct
            ? this.m_ControllerProfile.input_source[this.m_sInputPath]
                .default_dead_zone_pct
            : 0;
        }
        SetInputMode(e, t) {
          !this.m_BindingUISource || t < 0 || t >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : (this.ClearNewModeIfSet(t),
              I.SetInputModeForInputSource(this.GetFullInputPath, t, e));
        }
        AddInputMode(e) {
          this.m_iNewSourceEntry = I.AddInputModeForSource(
            this.GetFullInputPath,
            e,
          );
        }
        DeleteInputMode(e) {
          !this.m_BindingUISource || e < 0 || e >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : I.DeleteInputModeForSource(this.GetFullInputPath, e);
        }
        ClearNewModeIfSet(e) {
          -1 != this.m_iNewSourceEntry &&
            this.m_iNewSourceEntry == e &&
            (this.m_iNewSourceEntry = -1);
        }
        BHasModeSelectionPending(e) {
          return -1 != this.m_iNewSourceEntry && this.m_iNewSourceEntry == e;
        }
        SetClickAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "click", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetTouchAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "touch", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetHeldAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "held", t, [
            "button",
            "complex_button",
          ]);
        }
        SetLongAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "long", t, [
            "button",
            "complex_button",
          ]);
        }
        SetSingleAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "single", t, [
            "button",
            "complex_button",
          ]);
        }
        SetDoubleAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "double", t, [
            "button",
            "complex_button",
          ]);
        }
        SetPositionAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "position", t, [
            "trackpad",
            "joystick",
          ]);
        }
        SetNorthAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "north", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetEastAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "east", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetSouthAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "south", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetWestAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "west", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetCenterAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "center", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetScrollAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "scroll", t, [
            "scroll",
          ]);
        }
        SetPullAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "pull", t, [
            "trigger",
          ]);
        }
        SetForceAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "force", t, [
            "force_sensor",
          ]);
        }
        SetGrabAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "grab", t, [
            "grab",
          ]);
        }
        SetValueAction(e, t) {
          I.SetActionForInputModeType(this.GetFullInputPath, e, "value", t, [
            "scalar_constant",
          ]);
        }
        CopyActions(e) {
          I.ClearModesForInputPath(this.GetFullInputPath),
            e.GetModes.forEach((e, t) => {
              I.AddInputModeForSource(this.GetFullInputPath, e.mode),
                e.inputs.forEach((e, n) => {
                  I.SetActionForInputModeType(
                    this.GetFullInputPath,
                    t,
                    n,
                    e.output,
                    [],
                  );
                });
            });
        }
        BindingsMatch(e) {
          let t = e.GetModes;
          if (this.GetModes.length != t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            let n = t[e],
              i = this.GetModes.filter((e) => e.mode == n.mode);
            if (i.length > 0) {
              let e = !0;
              return (
                i[0].inputs.forEach((t, i) => {
                  (n.inputs.has(i) && n.inputs.get(i).output == t.output) ||
                    (e = !1);
                }),
                e
              );
            }
            return !1;
          }
          return !0;
        }
        SetClickParameter(e, t, n) {
          I.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t,
            n,
          );
        }
        SetTouchParameter(e, t, n) {
          I.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t,
            n,
          );
        }
        SetParameter(e, t, n, i) {
          I.SetParameterForInputModeType(this.GetFullInputPath, e, t, n, i);
        }
        GetClickParameter(e, t) {
          return I.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t,
          );
        }
        GetTouchParameter(e, t) {
          return I.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t,
          );
        }
        GetParameter(e, t, n) {
          return I.GetParameterForInputModeType(this.GetFullInputPath, e, t, n);
        }
        GetTrackpadInvertState(e) {
          switch (
            I.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "trackpad",
              "invert",
            )
          ) {
            case "x":
              return s.eTrackPadInvert_X;
            case "y":
              return s.eTrackPadInvert_Y;
            case "xy":
              return s.eTrackPadInvert_XY;
            default:
              return s.eTrackPadInvert_None;
          }
        }
        SetTrackpadInvertState(e, t) {
          let n = "";
          switch (t) {
            case s.eTrackPadInvert_X:
              n = "x";
              break;
            case s.eTrackPadInvert_Y:
              n = "y";
              break;
            case s.eTrackPadInvert_XY:
              n = "xy";
          }
          I.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "trackpad",
            "invert",
            n,
          );
        }
      }
      (0, r.gn)([d.LO], B.prototype, "m_BindingUISource", void 0),
        (0, r.gn)([d.LO], B.prototype, "m_ControllerProfile", void 0),
        (0, r.gn)([d.LO], B.prototype, "m_sDeviceInputPath", void 0),
        (0, r.gn)([d.LO], B.prototype, "m_eButtonSide", void 0),
        (0, r.gn)([d.LO], B.prototype, "m_sInputPath", void 0),
        (0, r.gn)([d.LO], B.prototype, "m_sActionSet", void 0),
        (0, r.gn)([a.ak], B.prototype, "cancelWatcher", null),
        (0, r.gn)([d.aD], B.prototype, "UpdateBindingSource", null),
        (0, r.gn)([d.Fl], B.prototype, "GetFullInputPath", null),
        (0, r.gn)([a.ak], B.prototype, "GetSVGEndPoint", null),
        (0, r.gn)([d.Fl], B.prototype, "GetButtonSide", null),
        (0, r.gn)([d.Fl], B.prototype, "GetNumModes", null),
        (0, r.gn)([a.ak], B.prototype, "GetActionForInputType", null),
        (0, r.gn)([a.ak], B.prototype, "GetClickAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetTouchAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetPositionAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetHeldAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetLongAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetSingleAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetDoubleAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetNorthAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetEastAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetSouthAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetWestAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetCenterAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetScrollAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetPullAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetForceAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetGrabAction", null),
        (0, r.gn)([a.ak], B.prototype, "GetValueAction", null),
        (0, r.gn)([d.Fl], B.prototype, "GetControllerInputName", null),
        (0, r.gn)([d.Fl], B.prototype, "GetModes", null),
        (0, r.gn)([a.ak], B.prototype, "GetMode", null),
        (0, r.gn)([d.Fl], B.prototype, "GetInputSourceType", null),
        (0, r.gn)([d.Fl], B.prototype, "GetInputSource", null),
        (0, r.gn)([d.Fl], B.prototype, "GetInputSourceClickSupport", null),
        (0, r.gn)([d.Fl], B.prototype, "GetInputSourceTouchSupport", null),
        (0, r.gn)([d.Fl], B.prototype, "GetInputSourceForceSupport", null),
        (0, r.gn)([d.Fl], B.prototype, "GetInputSourceDefaultDeadzone", null),
        (0, r.gn)([d.aD], B.prototype, "SetInputMode", null),
        (0, r.gn)([d.aD], B.prototype, "AddInputMode", null),
        (0, r.gn)([d.aD], B.prototype, "DeleteInputMode", null),
        (0, r.gn)([a.ak], B.prototype, "ClearNewModeIfSet", null),
        (0, r.gn)([a.ak], B.prototype, "BHasModeSelectionPending", null),
        (0, r.gn)([d.aD], B.prototype, "SetClickAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetTouchAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetHeldAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetLongAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetSingleAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetDoubleAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetPositionAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetNorthAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetEastAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetSouthAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetWestAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetCenterAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetScrollAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetPullAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetForceAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetGrabAction", null),
        (0, r.gn)([d.aD], B.prototype, "SetValueAction", null),
        (0, r.gn)([d.aD], B.prototype, "CopyActions", null),
        (0, r.gn)([a.ak], B.prototype, "BindingsMatch", null),
        (0, r.gn)([d.aD], B.prototype, "SetClickParameter", null),
        (0, r.gn)([d.aD], B.prototype, "SetTouchParameter", null),
        (0, r.gn)([d.aD], B.prototype, "SetParameter", null),
        (0, r.gn)([d.aD], B.prototype, "GetClickParameter", null),
        (0, r.gn)([d.aD], B.prototype, "GetTouchParameter", null),
        (0, r.gn)([d.aD], B.prototype, "GetParameter", null),
        (0, r.gn)([a.ak], B.prototype, "GetTrackpadInvertState", null),
        (0, r.gn)([d.aD], B.prototype, "SetTrackpadInvertState", null);
      class E {
        constructor(e, t, n) {
          (this.m_sSaveType = e),
            (this.m_OutstandingSaveBindingResolve = t),
            (this.m_OutstandingSaveBindingReject = n);
        }
        resolve(e) {
          this.m_OutstandingSaveBindingResolve(e);
        }
        reject(e) {
          this.m_OutstandingSaveBindingReject(e);
        }
        get SaveType() {
          return this.m_sSaveType;
        }
      }
      (0, r.gn)([a.ak], E.prototype, "resolve", null),
        (0, r.gn)([a.ak], E.prototype, "reject", null),
        (function (e) {
          (e[(e.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
            (e[(e.eWebSocketState_Disconnected = 1)] =
              "eWebSocketState_Disconnected"),
            (e[(e.eWebSocketState_Connecting = 2)] =
              "eWebSocketState_Connecting"),
            (e[(e.eWebSocketState_Connected = 3)] =
              "eWebSocketState_Connected");
        })(o || (o = {}));
      class T {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_eWebSocketState = o.eWebSocketState_Unknown),
            (this.m_timerWebSocket = void 0),
            (this.m_dateStartTime = new Date()),
            (this.m_sLoadedBindingURI = void 0),
            (this.m_LoadedBinding = void 0),
            (this.m_ModifiedBindingSet = d.LO.map()),
            (this.m_ModifiedOptions = d.LO.map()),
            (this.m_ModifiedAliases = d.LO.map()),
            (this.m_sName = void 0),
            (this.m_sDescription = void 0),
            (this.m_sInteractionProfile = void 0),
            (this.m_SelectedApp = void 0),
            (this.m_SelectedAppActions = void 0),
            (this.m_sSelectedActionSet = void 0),
            (this.m_sSelectedControllerType = void 0),
            (this.m_TrackerBindingSetup = void 0),
            (this.m_bControllerTypeSelectedByUser = !1),
            (this.m_OutstandingSaveBindingCalls = []),
            (this.m_vecBindingSetWatchers = Array()),
            (this.m_mapUnoundActions = new Map()),
            (this.m_bIsMissingRequiredActions = !1),
            (this.m_rKnownFailedBindingUris = []),
            (this.m_ControllerWatchers = new Map()),
            (this.m_ModifiedSimulatedActions = d.LO.map()),
            (this.m_nNextSimulatedActionId = 1),
            (this.m_nBindingSubscriptionChangedCanary = 1);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            this.m_eWebSocketState != o.eWebSocketState_Connecting &&
              this.m_eWebSocketState != o.eWebSocketState_Connected &&
              (this.m_wsWebSocketToServer && delete this.m_wsWebSocketToServer,
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener("message", (e) => {
                this.OnWebSocketMessage(e);
              }),
              this.m_wsWebSocketToServer.addEventListener("close", (e) => {
                this.OnWebSocketClose(e);
              }),
              (this.m_eWebSocketState = o.eWebSocketState_Connecting)),
              this.m_timerWebSocket ||
                (this.m_timerWebSocket = window.setTimeout(
                  this.OpenWebSocketToHost,
                  1e3,
                ));
          });
        }
        Init() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            yield this.OpenWebSocketToHost(), yield this.RefreshInputState();
          });
        }
        CountDevicesWithControllerType(e) {
          let t = 0;
          return (
            g.I.ConnectedDevices.forEach((n) => {
              n.controller_type == e && t++;
            }),
            t
          );
        }
        ComputeControllerTypeScore(e) {
          let t = this.CountDevicesWithControllerType(e.controller_type),
            n =
              ((null === p.Co || void 0 === p.Co ? void 0 : p.Co.HasHMD())
                ? null === p.Co || void 0 === p.Co
                  ? void 0
                  : p.Co.VRProperties.GetStringProperty(
                      "/user/head",
                      p.Uk.Prop_ExpectedControllerType_String,
                    )
                : void 0) == e.controller_type
                ? 2
                : 1;
          return 1e3 * (999 - e.priority) + 10 * t + n;
        }
        GetBestControllerType() {
          let e,
            t = 0;
          return (
            g.I.ControllerTypes.forEach((n) => {
              let i = this.ComputeControllerTypeScore(n);
              i > t && ((e = n), (t = i));
            }),
            e
          );
        }
        RefreshInputState() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = g.I.KnownControllerTypes.size;
            return g.I.GetInputState().then(() => {
              this.m_SelectedApp &&
                e != g.I.KnownControllerTypes.size &&
                this.ReloadCurrentApp();
              let t = !1;
              const n = this.GetBestControllerType();
              let i = g.I.FindDeviceClassForControllerType(
                this.m_sSelectedControllerType,
              );
              if (
                null != n &&
                this.m_sSelectedControllerType != n.controller_type &&
                !this.m_bControllerTypeSelectedByUser
              ) {
                let e = g.I.FindDeviceClassForControllerType(n.controller_type);
                h.w.IsSafeToResetControllerType(i, e) &&
                  ((this.m_sSelectedControllerType = n.controller_type),
                  (t = !0));
              }
              return t ? this.ReloadControllerConfiguration() : null;
            });
          });
        }
        get SteamVRUnavailable() {
          return this.m_eWebSocketState == o.eWebSocketState_Connecting ||
            this.m_eWebSocketState == o.eWebSocketState_Unknown
            ? Date.now() - this.m_dateStartTime.getTime() > 1e4
            : this.m_eWebSocketState != o.eWebSocketState_Connected;
        }
        get ActionSets() {
          if (
            null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let e = [];
          return (
            this.m_SelectedAppActions.action_sets.forEach((t) => {
              if ("hidden" != t.usage) {
                let n = !0;
                t.required_options &&
                  t.required_options.forEach((e) => {
                    this.GetOptionValue(e) || (n = !1);
                  });
                let i = !1;
                t.forbidden_options &&
                  t.forbidden_options.forEach((e) => {
                    this.GetOptionValue(e) && (i = !0);
                  }),
                  n && !i && e.push(t);
              }
            }),
            e
          );
        }
        get ManifestOptions() {
          return null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets ||
            null == this.m_SelectedAppActions.options
            ? []
            : this.m_SelectedAppActions.options;
        }
        get SecondaryControllerOptions() {
          return [
            {
              name: "returnBindingsWithLeftHand",
              localized_name: (0, u.Xx)(
                "#SecondaryController_ReturnWithLeftHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithRightHand",
              localized_name: (0, u.Xx)(
                "#SecondaryController_ReturnWithRightHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithHead",
              localized_name: (0, u.Xx)("#SecondaryController_ReturnWithHead"),
              type: "bool",
              default: !1,
            },
          ];
        }
        GetOptionDefault(e) {
          let t = !1;
          return (
            this.ManifestOptions.forEach((n) => {
              n.name == e && (t = n.default);
            }),
            t
          );
        }
        GetOptionValue(e) {
          return this.m_ModifiedOptions.has(e)
            ? this.m_ModifiedOptions.get(e)
            : void 0;
        }
        HasOptionValue(e) {
          return this.m_ModifiedOptions.has(e);
        }
        SetOptionValue(e, t) {
          this.m_ModifiedOptions.set(e, t), this.NotifyWatchersOfChange();
        }
        GetAliasInfo(e) {
          return this.m_ModifiedAliases.has(e)
            ? this.m_ModifiedAliases.get(e)
            : null;
        }
        SetAliasName(e, t) {
          if (this.m_ModifiedAliases.has(e)) {
            let n = this.m_ModifiedAliases.get(e);
            (n.alias_name = t),
              this.m_ModifiedAliases.set(e, n),
              this.NotifyWatchersOfChange();
          } else {
            let n = { alias_name: t, hidden: !1 };
            this.m_ModifiedAliases.set(e, n), this.NotifyWatchersOfChange();
          }
        }
        SetAliasHidden(e, t) {
          if (this.m_ModifiedAliases.has(e)) {
            let n = this.m_ModifiedAliases.get(e);
            (n.hidden = t),
              this.m_ModifiedAliases.set(e, n),
              this.NotifyWatchersOfChange();
          } else {
            let n = { alias_name: "", hidden: t };
            this.m_ModifiedAliases.set(e, n), this.NotifyWatchersOfChange();
          }
        }
        ComputeSimulatedActionPathFromId(e) {
          return "/simactions/" + e;
        }
        GetSimulatedActionByPath(e) {
          return this.m_ModifiedSimulatedActions.has(e)
            ? this.m_ModifiedSimulatedActions.get(e)
            : void 0;
        }
        SetSimulatedActionByPath(e, t) {
          this.m_ModifiedSimulatedActions.set(e, t),
            this.NotifyWatchersOfChange();
        }
        AddSimulatedAction(e) {
          let t = {
              name: "",
              type: e,
              id: this.m_nNextSimulatedActionId++,
              output: "",
            },
            n = this.ComputeSimulatedActionPathFromId(t.id);
          this.m_ModifiedSimulatedActions.set(n, t),
            this.NotifyWatchersOfChange();
        }
        DeleteSimulatedActionByPath(e) {
          this.m_ModifiedSimulatedActions.delete(e),
            this.NotifyWatchersOfChange();
        }
        get SimulatedActions() {
          return Array.from(this.m_ModifiedSimulatedActions.values());
        }
        get SelectedApp() {
          return this.m_SelectedApp ? this.m_SelectedApp.key : void 0;
        }
        get SelectedAppActions() {
          return this.m_SelectedAppActions;
        }
        get CurrentAppCanAccessPrivateInputs() {
          return (
            m.S.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
            g.I.ShouldSendSystemButtonToAllApps
          );
        }
        get SelectedControllerTypeInfo() {
          if (g.I.IsValid && null != this.m_sSelectedControllerType)
            return g.I.GetControllerTypeInfo(this.m_sSelectedControllerType);
        }
        DeviceForControllerType(e, t) {
          let n = g.I.GetControllerTypeInfo(e);
          if (!n) return;
          let s = !1;
          return (
            g.I.ConnectedDevices.find((o) => {
              if (o.controller_type == e) {
                if (((s = !0), !t)) return !0;
                if ("controller_handed" != n.input_bindingui_mode) return !0;
                let e = t == i.eButtonSide_Left ? "/left" : "/right";
                if (o.root_path && o.root_path.indexOf(e) >= 0) return !0;
              }
              return !1;
            }) ||
            (s
              ? g.I.ConnectedDevices.find((t) => t.controller_type == e)
              : void 0)
          );
        }
        get CurrentBindingSaveType() {
          if (null != this.m_LoadedBinding)
            return "developer" == this.m_LoadedBinding.save_type &&
              I.SelectedBindingIsLegacy
              ? "developer_legacy"
              : this.m_LoadedBinding.save_type;
        }
        get CurrentBindingActionManifestVersion() {
          return this.m_LoadedBinding &&
            this.m_LoadedBinding.binding_config &&
            this.m_LoadedBinding.binding_config.action_manifest_version
            ? this.m_LoadedBinding.binding_config.action_manifest_version
            : 0;
        }
        get SelectedActionSet() {
          return this.m_sSelectedActionSet;
        }
        get SelectedActionSetDetails() {
          if (
            null != this.m_SelectedAppActions &&
            null != this.m_sSelectedActionSet
          )
            return this.m_SelectedAppActions.action_sets.find(
              (e) => e.name == this.m_sSelectedActionSet,
            );
        }
        get SelectedActionSetActions() {
          return this.GetActionSetActions(this.m_sSelectedActionSet);
        }
        GetSelectedAppDefaultBinding(e) {
          if (null != this.m_SelectedAppActions)
            return this.m_SelectedAppActions.default_bindings &&
              this.m_SelectedAppActions.default_bindings.hasOwnProperty(e)
              ? this.m_SelectedAppActions.default_bindings[e]
              : void 0;
        }
        GetActionSetActions(e) {
          if (null == this.m_SelectedAppActions || null == e) return [];
          let t = this.m_SelectedAppActions.action_sets.find(
            (t) => t.name == e,
          );
          return t ? t.actions : [];
        }
        GetActionByName(e) {
          if (
            null == this.m_SelectedApp ||
            !this.m_SelectedAppActions.action_sets
          )
            return;
          let t,
            n = e.toLowerCase();
          return (
            this.m_SelectedAppActions.action_sets.forEach((e) => {
              if (!e.actions) return;
              let i = e.actions.find((e) => e.name.toLowerCase() == n);
              i && (t = i);
            }),
            t
          );
        }
        GetActionSetLocalizedNameByName(e) {
          for (const t of this.m_SelectedAppActions.action_sets)
            if (t.name == e && t.localized_name) return t.localized_name;
          return e;
        }
        get UnboundActions() {
          this.m_bIsMissingRequiredActions = !1;
          for (let e of this.ActionSets) {
            let t = [],
              n = [];
            if (!e.actions) break;
            for (let i of e.actions)
              if (
                "optional" != i.requirement &&
                !this.IsActionBound(e, i.name)
              ) {
                let e = this.GetAliasInfo(i.name);
                if (e) {
                  if (e.hidden) continue;
                  e.alias_name &&
                    ((i = Object.assign({}, i)),
                    (i.localized_name = e.alias_name));
                }
                "mandatory" == i.requirement ? t.push(i) : n.push(i);
              }
            if (
              (t.length > 0 && (this.m_bIsMissingRequiredActions = !0),
              this.m_mapUnoundActions.has(e.name))
            ) {
              let i = this.m_mapUnoundActions.get(e.name);
              (i.vecRequired = t), (i.vecSuggested = n);
            } else
              this.m_mapUnoundActions.set(e.name, {
                vecRequired: t,
                vecSuggested: n,
              });
          }
          let e = this.SelectedControllerTypeInfo;
          return (
            e &&
              "TrackedDeviceClass_HMD" == e.device_class &&
              (this.m_bIsMissingRequiredActions = !1),
            this.IsSecondaryController &&
              (this.m_bIsMissingRequiredActions = !1),
            this.m_mapUnoundActions
          );
        }
        get HasUnboundActions() {
          return this.UnboundActions, this.m_bIsMissingRequiredActions;
        }
        IsActionBound(e, t) {
          t = t.toLowerCase();
          let n = this.GetActionSetSources(e.name);
          if (n)
            for (let e of n) {
              let n = !1;
              if (
                (e.inputs.forEach((e) => {
                  e.output.toLowerCase() == t && (n = !0);
                }),
                n)
              )
                return !0;
            }
          let i = this.GetActionSetChords(e.name);
          if (i)
            for (let e of i)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let s = this.GetActionSetPoses(e.name);
          if (s)
            for (let e of s)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let o = this.GetActionSetHaptics(e.name);
          if (o)
            for (let e of o)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let r = this.GetActionSetSkeleton(e.name);
          if (r)
            for (let e of r)
              if (e.output && e.output.toLowerCase() == t) return !0;
          return !1;
        }
        GetActionSetPoses(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).poses
            : [];
        }
        get SelectedActionSetPoses() {
          return this.GetActionSetPoses(this.m_sSelectedActionSet);
        }
        GetActionSetHaptics(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).haptics
            : [];
        }
        get SelectedActionSetHaptics() {
          return this.GetActionSetHaptics(this.m_sSelectedActionSet);
        }
        GetActionSetSkeleton(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).skeleton
            : [];
        }
        get SelectedActionSetSkeletons() {
          return this.GetActionSetSkeleton(this.m_sSelectedActionSet);
        }
        GetActionSetChords(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).chords
            : [];
        }
        get SelectedActionSetChords() {
          return this.GetActionSetChords(this.m_sSelectedActionSet);
        }
        get SelectedActionSetChordCount() {
          let e = this.SelectedActionSetChords;
          return e ? e.length : 0;
        }
        GetActionSetSources(e) {
          if (null == this.m_ModifiedBindingSet || null == e) return;
          let t = this.m_ModifiedBindingSet;
          return t.has(e) ? t.get(e).sources : void 0;
        }
        get SelectedActionSetSources() {
          return this.GetActionSetSources(this.m_sSelectedActionSet);
        }
        get BSelectedActionSetHasPoses() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((e) => "pose" == e.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundPoses() {
          if (
            !this.BSelectedActionSetHasPoses ||
            !this.SelectedActionSetPoses ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let e of this.SelectedActionSetPoses)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasHaptics() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((e) => "vibration" == e.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundHaptics() {
          if (
            !this.BSelectedActionSetHasHaptics ||
            !this.SelectedActionSetHaptics ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let e of this.SelectedActionSetHaptics)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasSkeletons() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            0 !=
              this.SelectedActionSetActions.filter((e) => "skeleton" == e.type)
                .length &&
              null != this.SelectedControllerTypeInfo &&
            !!this.GetFirstInputSourceOfType("skeleton")
          );
        }
        get BSelectedActionSetHasBoundSkeletons() {
          if (
            !this.BSelectedActionSetHasSkeletons ||
            !this.SelectedActionSetSkeletons ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let e of this.SelectedActionSetSkeletons)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        ClearSelectedApp() {
          this.m_SelectedApp = void 0;
        }
        SetSelectedApp(e, t) {
          if (
            (console.log(`Setting selected app to app key: ${e}.`),
            null == this.m_SelectedApp || e != this.m_SelectedApp.key)
          ) {
            (this.m_rKnownFailedBindingUris = []),
              this.m_ControllerWatchers.clear();
            let n = m.S.GetApp(e);
            n &&
              ((this.m_SelectedApp = n),
              console.log(`Successfully set selected app to app key: ${e}.`),
              t || this.ReloadCurrentApp());
          }
        }
        ReloadCurrentApp() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (this.m_sLoadedBindingURI = void 0),
              (this.m_sSelectedActionSet = void 0),
              yield this.LoadActionManifest();
            let e = this.ActionSets;
            e.length > 0 &&
              (null == this.m_sSelectedActionSet ||
                !this.m_SelectedAppActions.action_sets.hasOwnProperty(
                  this.m_sSelectedActionSet,
                )) &&
              (this.m_sSelectedActionSet = e[0].name),
              yield this.ReloadControllerConfiguration();
          });
        }
        SetSelectedController(e, t) {
          if (e != this.m_sSelectedControllerType) {
            let n = g.I.GetControllerTypeInfo(e);
            n &&
              (this.m_ControllerWatchers.clear(),
              (this.m_sSelectedControllerType = n.controller_type),
              (this.m_bControllerTypeSelectedByUser = !0),
              (this.m_sLoadedBindingURI = void 0),
              t || this.ReloadControllerConfiguration());
          }
        }
        SetSelectedActionSet(e) {
          e != this.m_sSelectedActionSet && (this.m_sSelectedActionSet = e);
        }
        LocalizeStringForSelectedControllerType(e) {
          let t = this.SelectedControllerTypeInfo;
          return t && t.resource_root
            ? g.I.LocalizeDriverString(t.resource_root, e)
            : e;
        }
        LocalizePathNameForSelectedControllerType(e) {
          let t;
          return (
            [
              "/user/hand/secondary",
              "/user/hand/primary",
              "/user/hand/left",
              "/user/hand/right",
              "/user/head",
            ].forEach((n) => {
              0 != e.indexOf(n) || (t = n);
            }),
            t
              ? (0, u.Xx)("#" + t) +
                " " +
                this.LocalizeStringForSelectedControllerType(e.replace(t, ""))
              : e
          );
        }
        get SelectedControllerTypeLocalizedName() {
          let e = this.SelectedControllerTypeInfo;
          return e
            ? e.resource_root
              ? g.I.LocalizeDriverString(e.resource_root, e.controller_type)
              : e.controller_type
            : "";
        }
        RegisterBindingWatcher(e) {
          null == this.m_vecBindingSetWatchers.find((t) => t == e) &&
            this.m_vecBindingSetWatchers.push(e);
        }
        UnregisterBindingWatcher(e) {
          let t = this.m_vecBindingSetWatchers.indexOf(e);
          t >= 0 && this.m_vecBindingSetWatchers.splice(t, 1);
        }
        GetActionBinding(e, t) {
          if (null == this.m_ModifiedBindingSet) return;
          let n = this.m_ModifiedBindingSet;
          if (n.has(t)) {
            let i = n.get(t).sources;
            if (i) {
              let t = i.filter((t) => t.path == e);
              if (t) return t;
            }
          }
        }
        GetInputModesForSourceType(e, t) {
          let n = [];
          switch (e) {
            case "button":
              n = ["button", "-", "toggle_button", "scalar_constant"];
              break;
            case "trackpad":
              n = [
                "trackpad",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "trigger":
              n = [
                "trigger",
                "button",
                "-",
                "toggle_button",
                "scalar_constant",
              ];
              break;
            case "joystick":
              n = [
                "joystick",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "pinch":
              n = ["grab"];
              break;
            default:
              n = [];
          }
          return (
            t && (n.push("force_sensor"), "trigger" == e && n.push("grab")), n
          );
        }
        GetBooleanInputOptionsForMode(e) {
          switch (e) {
            case "toggle_button":
            case "trackpad":
            case "trigger":
              return ["click", "touch"];
            case "button":
              return ["single", "double", "held", "long", "click", "touch"];
            case "dpad_click":
            case "dpad_touch":
            case "dpad":
              return ["west", "east", "north", "south", "center"];
            case "trackpad_scroll":
            case "force_sensor":
            default:
              return [];
            case "grab":
              return ["grab"];
          }
        }
        GetActionBindingsOfType(e, t) {
          if (
            null == this.m_SelectedApp ||
            null == this.m_sSelectedActionSet ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let n = this.SelectedActionSetDetails;
          if (!n) return [];
          if (null == n.actions) return [];
          let i = [];
          return (
            n.actions.forEach((n) => {
              let s = this.m_ModifiedAliases.get(n.name);
              if (n.type == e && (!s || !s.hidden || t))
                if (s && s.alias_name) {
                  let e = Object.assign({}, n);
                  (e.localized_name = s.alias_name), i.push(e);
                } else i.push(n);
            }),
            t ||
              this.m_ModifiedSimulatedActions.forEach((t) => {
                this.GetActionTypeFromSimulatedActionType(t.type) == e &&
                  (this.ComputeSimulatedActionPathFromId(t.id),
                  t.name ? t.name : ((0, u.Xx)("UnnamedSimAction"), t.id),
                  i.push(this.CreateActionDefinitionForSimulatedAction(t)));
              }),
            i
          );
        }
        GetActionTypeFromSimulatedActionType(e) {
          switch (e) {
            case "fake_trigger":
            case "fake_trackpad_click":
              return "boolean";
            default:
              return "unknown";
          }
        }
        CreateActionDefinitionForSimulatedAction(e) {
          return {
            name: this.ComputeSimulatedActionPathFromId(e.id),
            localized_name: e.name
              ? e.name
              : (0, u.Xx)("UnnamedSimAction") + e.id,
            type: this.GetActionTypeFromSimulatedActionType(e.type),
          };
        }
        get GetBooleanActionBindings() {
          return this.GetActionBindingsOfType("boolean");
        }
        get GetVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1");
        }
        get GetLiteralVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1", !0);
        }
        get GetVector2ActionBindings() {
          return this.GetActionBindingsOfType("vector2");
        }
        get GetVector3ActionBindings() {
          return this.GetActionBindingsOfType("vector3");
        }
        get GetPoseActionBindings() {
          return this.GetActionBindingsOfType("pose");
        }
        get GetHapticsActionBindings() {
          return this.GetActionBindingsOfType("vibration");
        }
        get GetSkeletonActionBindings() {
          return this.GetActionBindingsOfType("skeleton");
        }
        get ConfigName() {
          return this.m_sName;
        }
        get ConfigDescription() {
          return this.m_sDescription;
        }
        GetPoseAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == t) return;
          let n = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetPoseActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == t) return;
          let n = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetHapticsAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == t) return;
          let n = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetHapticsActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == t) return;
          let n = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetSkeletonAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == t) return;
          let n = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetSkeletonActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == t) return;
          let n = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        NotifyWatchersOfChange() {
          console.log("Binding file changed"),
            this.m_vecBindingSetWatchers.forEach((e) => {
              e();
            }),
            this.AutosaveBinding();
        }
        SetActionForInputModeType(e, t, n, i, s) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          class o {
            constructor(e, t) {
              (this.mode = e), (this.sourceIdx = t);
            }
          }
          let r = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, n) => {
                t.path == e && r.push(new o(t, n));
              }),
            r.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let a = r[t].sourceIdx;
          if (a >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[a];
            if (e.inputs && e.inputs.has(n) && e.inputs.get(n).output == i)
              return void console.log(
                "Trying to set new action to old action for type",
                n,
                " action is ",
                i,
              );
            if (s.length > 0 && !s.find((t) => t == e.mode))
              return void console.log(
                "Trying to set invalid input type of ",
                n,
                " for current mode ",
                e.mode,
              );
            e.inputs || (e.inputs = d.LO.map()),
              "none" == i
                ? e.inputs.has(n) && e.inputs.delete(n)
                : e.inputs.has(n)
                  ? (e.inputs.get(n).output = i)
                  : e.inputs.set(n, { output: i }),
              this.NotifyWatchersOfChange();
          }
        }
        SetParameterForInputModeType(e, t, n, i, s) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetParameterForInputModeType: Invalid action set specified",
            );
          let o = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, n) => {
                t.path == e && o.push(n);
              }),
            o.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let r = o[t];
          if (r >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[r];
            if (!e.inputs)
              return void console.log(
                "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                n,
                " for current mode ",
                e.mode,
              );
            e.parameters || (e.parameters = d.LO.map()),
              e.parameters.get(i) != s &&
                (null == s ? e.parameters.delete(i) : e.parameters.set(i, s),
                this.NotifyWatchersOfChange());
          }
        }
        GetParameterForInputModeType(e, t, n, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return (
              console.error(
                "SetParameterForInputModeType: Invalid action set specified",
              ),
              null
            );
          let s = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, n) => {
                t.path == e && s.push(n);
              }),
            s.length <= t)
          )
            return (
              console.warn("Invalid mode index (", t, ") for path ", e), null
            );
          let o = s[t];
          if (o >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[o];
            return e.inputs
              ? e.parameters && e.parameters.has(i)
                ? e.parameters.get(i)
                : null
              : (console.log(
                  "GetParameterForInputModeType: Trying to get parameter for missing input type of ",
                  n,
                  " for current mode ",
                  e.mode,
                ),
                null);
          }
          return null;
        }
        AddActionSetIfRequired() {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) {
            let e = new f();
            (e.sources = []),
              this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, e);
          }
        }
        AddInputModeForSource(e, t) {
          this.AddActionSetIfRequired();
          let n = new S();
          return (
            (n.mode = t),
            (n.path = e),
            (n.inputs = d.LO.map()),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.push(n),
            this.NotifyWatchersOfChange(),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t) => t.path.toLowerCase() == e.toLowerCase())
              .length - 1
          );
        }
        DeleteInputModeForSource(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "AddInputModeForType: Invalid action set specified",
            );
          let n = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, i) => {
                t.path.toLowerCase() == e.toLowerCase() && n.push(i);
              }),
            n.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let i = n[t];
          -1 != i
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.splice(i, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteInputModeForSource: Mode not found for source",
              );
        }
        SetInputModeForInputSource(e, t, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          let i = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, n) => {
                t.path.toLowerCase() == e.toLowerCase() && i.push(n);
              }),
            i.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let s = i[t];
          if (-1 != s) {
            let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[s];
            if (t.path == e) {
              if (t.mode == n)
                return void console.log(
                  "Trying to set new input mode to old mode!",
                );
              let i = JSON.parse(JSON.stringify(t)),
                o = new S();
              switch (
                ((o.mode = n), (o.path = e), (o.inputs = d.LO.map()), n)
              ) {
                case "button":
                case "toggle_button":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single &&
                        (o.inputs.set("single", i.inputs.single),
                        o.inputs.set("click", i.inputs.single)),
                        i.inputs.long && o.inputs.set("long", i.inputs.long),
                        i.inputs.press && o.inputs.set("press", i.inputs.press),
                        i.inputs.double &&
                          o.inputs.set("double", i.inputs.double),
                        i.inputs.touch && o.inputs.set("touch", i.inputs.touch);
                      break;
                    case "button":
                    case "toggle_button":
                    case "trackpad":
                    case "trigger":
                      i.inputs.click && o.inputs.set("click", i.inputs.click),
                        i.inputs.touch && o.inputs.set("touch", i.inputs.touch);
                  }
                  break;
                case "complex_button":
                  switch (i.mode) {
                    case "toggle_button":
                    case "button":
                    case "trackpad":
                    case "trigger":
                      i.inputs.click && o.inputs.set("single", i.inputs.click);
                  }
                  break;
                case "trackpad":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single && o.inputs.set("click", i.inputs.single);
                      break;
                    case "toggle_button":
                    case "button":
                    case "trigger":
                      i.inputs.click && o.inputs.set("click", i.inputs.click),
                        i.inputs.touch && o.inputs.set("touch", i.inputs.touch);
                  }
                  break;
                case "trigger":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single && o.inputs.set("click", i.inputs.single);
                      break;
                    case "toggle_button":
                    case "trackpad":
                    case "button":
                      i.inputs.click && o.inputs.set("click", i.inputs.click),
                        i.inputs.touch && o.inputs.set("touch", i.inputs.touch);
                  }
              }
              return (
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).sources[s] = o),
                void this.NotifyWatchersOfChange()
              );
            }
          } else
            console.error(
              "SetActionForInputModeType: trying to change a mode for a source that we don't have already",
            );
        }
        ClearModesForInputPath(e) {
          this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)
            ? (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).sources = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.filter((t) => t.path.toLowerCase() != e.toLowerCase()))
            : console.error(
                "ClearModesForInputPath: Invalid action set specified",
              );
        }
        SetInputPathForPose(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              []);
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase(),
            );
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              n
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[n]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses[n].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
        }
        SetPoseForInputPath(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              []);
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              n
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[n]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
        }
        GetFirstInputSourceOfType(e) {
          let t = this.SelectedControllerTypeInfo;
          if (null != t)
            for (let n of Object.keys(t.input_source))
              if (t.input_source[n].type == e) return n;
        }
        AddDefaultPose(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []),
            null == this.SelectedControllerTypeInfo)
          )
            return;
          let n = this.GetFirstInputSourceOfType("pose");
          if (!n) return;
          let i = new (class {})();
          (i.output = e), (i.path = n), this.SetInputPathForPose(i, n);
        }
        SetInputPathForHaptics(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForHaptics: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              []);
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase(),
            );
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new v()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              n
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[n]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[n].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptics action path to old action path!",
                );
        }
        SetHapticsForInputPath(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetHapticsForInputPath: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              []);
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              n
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[n]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptic action path to old action path!",
                );
        }
        AddDefaultHaptics(e, t) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
          let n = this.GetFirstInputSourceOfType("haptic");
          if (!n) return;
          let i = t + n,
            s = new (class {})();
          (s.output = e), (s.path = i), this.SetInputPathForHaptics(s, i);
        }
        SetInputPathForSkeleton(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForSkeleton: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              []);
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase(),
            );
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new y()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              n
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[n]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[n].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        SetSkeletonForInputPath(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetSkeletonForInputPath: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              []);
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              n
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[n]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        AddDefaultSkeleton(e, t) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
          let n = this.GetFirstInputSourceOfType("skeleton");
          if (!n) return;
          let i = t + n,
            s = new (class {})();
          (s.output = e), (s.path = i), this.SetInputPathForSkeleton(s, i);
        }
        SetActionForChord(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForChord: Invalid action set specified",
            );
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          -1 != n
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[n]
                .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log("Trying to set new chord action to old action!")
            : console.error("SetActionForChord: Invalid chord  specified ", e);
        }
        DeleteChord(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteChordForSource: Invalid action set specified",
            );
          let t = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          -1 != t
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords.splice(t, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteChordForSource: Invalid chord  specified ",
                e,
              );
        }
        AddChord() {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords =
                []),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.push(new b()),
            this.NotifyWatchersOfChange();
        }
        DeleteSourceFromChord(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteSourceFromChord: Invalid action set specified",
            );
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != n) {
            let e = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[n].inputs.findIndex((e) => e[0] == t);
            -1 != e &&
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[n].inputs.splice(e, 1),
              this.NotifyWatchersOfChange());
          } else
            console.error(
              "DeleteSourceFromChord: Invalid chord  specified ",
              e,
            );
        }
        SetInputTypeForChord(e, t, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != i) {
            let e = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[i].inputs.findIndex((e) => e[0] == t);
            if (-1 == e)
              return void console.log(
                "Invalid bounds for new input chord, trying to add type without source",
              );
            if (
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[i]
                .inputs[e][1] == n
            )
              return void console.log(
                "Trying to set new chord inputs to old inputs!",
              );
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
              i
            ].inputs[e][1] = n),
              this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", e);
        }
        SetInputSourceForChord(e, t, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != i) {
            let e = this.GetActionBinding(t, this.SelectedActionSet);
            if (!e)
              return void console.log("Failed to find action binding for path");
            let s = "click";
            if (
              (e.length &&
                (s = this.GetBooleanInputOptionsForMode(e[0].mode)[0]),
              null == n)
            )
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[i]
                .inputs ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[i].inputs = new Array()),
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[i].inputs.push([t, s]);
            else {
              let e = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[i].inputs.findIndex((e) => e[0] == n);
              if (-1 == e)
                return void console.log(
                  "Trying to set replace chord input path when we didn't have that path!",
                );
              if (
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  i
                ].inputs[e][0] == t
              )
                return void console.log(
                  "Trying to set new chord inputs to old inputs!",
                );
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                i
              ].inputs[e][0] = t),
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[i].inputs[e][1] = s);
            }
            this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", e);
        }
        LoadActionManifest() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return new Promise((e, t) => {
              A(this.m_SelectedApp.key).then((t) => {
                null == t.error
                  ? ((this.m_SelectedAppActions = t),
                    null == this.m_sLoadedBindingURI &&
                      t.current_binding_url.hasOwnProperty(
                        this.m_sSelectedControllerType,
                      ) &&
                      (this.m_sLoadedBindingURI =
                        t.current_binding_url[this.m_sSelectedControllerType]))
                  : ((this.m_SelectedAppActions = void 0),
                    (this.m_sLoadedBindingURI = void 0),
                    h.w.SetBindingListError(
                      (0, u.Xx)("#ActionManifestError_UnknownError"),
                      !1,
                    )),
                  e();
              });
            });
          });
        }
        get SelectedBindingURL() {
          return null != this.m_sSelectedControllerType &&
            null != this.m_SelectedAppActions &&
            null != this.m_SelectedAppActions.current_binding_url &&
            this.m_SelectedAppActions.current_binding_url.hasOwnProperty(
              this.m_sSelectedControllerType,
            )
            ? this.m_SelectedAppActions.current_binding_url[
                this.m_sSelectedControllerType
              ]
            : void 0;
        }
        get LoadedBindingURL() {
          return this.m_sLoadedBindingURI;
        }
        get SelectedBindingIsLegacy() {
          return (
            !this.m_SelectedAppActions ||
            "legacy" == this.m_SelectedAppActions.category
          );
        }
        get SelectedBindingIsOpenXR() {
          return "openxr" == this.m_SelectedAppActions.category;
        }
        get IsSecondaryController() {
          if (!this.m_sSelectedControllerType) return !1;
          let e = g.I.FindRootPathForControllerType(
            this.m_sSelectedControllerType,
          );
          return (
            "/user/treadmill" == e ||
            "/user/gamepad" == e ||
            "/user/stylus" == e
          );
        }
        ReloadControllerConfiguration() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (
              !(
                this.m_SelectedAppActions &&
                this.m_sLoadedBindingURI &&
                this.SelectedApp &&
                this.SelectedControllerTypeInfo
              )
            )
              return;
            let e = yield M(
              this.m_SelectedApp.key,
              this.SelectedControllerTypeInfo.controller_type,
              this.m_sLoadedBindingURI,
            );
            this.OnBindingConfigLoaded(e);
          });
        }
        UpdateTrackerBindings() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = yield this.GetTrackerBindings();
            this.m_TrackerBindingSetup = e;
          });
        }
        get TrackerBindings() {
          return (
            null == this.m_TrackerBindingSetup && this.UpdateTrackerBindings(),
            this.m_TrackerBindingSetup
          );
        }
        GetTrackerBindings() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return new Promise(function (e, t) {
              c()
                .get("/input/gettrackerbindings.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            });
          });
        }
        GetTrackerBinding(e) {
          for (let t of this.m_TrackerBindingSetup.trackers)
            if (t.device_path_string == e) return t;
          return null;
        }
        SetTrackerBinding(e, t, n) {
          let i = { device_path: e, role: t, controller_role: n },
            s = JSON.stringify(i);
          console.log("Saving tracker binding " + e),
            c()
              .post("/input/settrackerbinding.action", s)
              .then((e) => {
                console.log("SetTrackerBinding response: ", e.data),
                  this.UpdateTrackerBindings();
              })
              .catch((e) => {});
        }
        PulseHaptics(e) {
          let t = { path_handle: e },
            n = JSON.stringify(t);
          c()
            .post("/input/pulsehaptics.action", n)
            .then((e) => {
              console.log("PulseHaptics response: ", e.data);
            })
            .catch((e) => {});
        }
        get KnownControllerTypes() {
          let e = [];
          return (
            g.I.KnownControllerTypes.forEach((t) => {
              e.push(t);
            }),
            e
          );
        }
        PreserveCurrentBindingForUpgrade() {
          let e = h.w.CurrentBinding;
          return e && "autosave" == e.type
            ? this.SaveCurrentBinding(
                (0, u.Xx)("#PreservedAutosaveName"),
                "",
                "personal",
              )
            : Promise.resolve(null);
        }
        GetDefaultBindingNameForSaveType(e) {
          let t = I.SelectedControllerTypeInfo,
            n = g.I.LocalizeControllerString(t, t ? t.controller_type : "");
          switch (e) {
            default:
            case "autosave":
              return (0, u.Xx)(
                "#BindingUI_SaveDefaultName",
                this.m_SelectedApp.name,
                n,
              );
            case "personal":
              return (0, u.Xx)(
                "#BindingUI_SaveDefaultName_Personal",
                this.m_SelectedApp.name,
                n,
              );
            case "public":
              return (0, u.Xx)(
                "#BindingUI_SaveDefaultName_Public",
                g.I.CurrentUserPersonaName,
              );
            case "replace_default":
              return I.ConfigName;
          }
        }
        AutosaveBinding() {
          this.m_sName ||
            (this.m_sName = this.GetDefaultBindingNameForSaveType("autosave")),
            this.SaveCurrentBinding(
              this.m_sName,
              this.m_sDescription,
              "autosave",
            ).then((e) => {
              I.SetBindingURL(e.uri);
            });
        }
        SaveCurrentBinding(e, t, n) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.HasUnboundActions)
              throw new Error("#SaveError_BindingMissingRequiredActions");
            (this.m_sName = e), (this.m_sDescription = t);
            let i = this.m_sInteractionProfile.trim(),
              s = {
                app_key: this.SelectedApp,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
                save_type: n,
              };
            s.binding = {
              name: e,
              description: t,
              action_manifest_version: this.m_SelectedAppActions.version,
              interaction_profile: i,
              category: this.m_SelectedAppActions.category,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
              bindings: this.m_ModifiedBindingSet,
              options: this.m_ModifiedOptions,
              alias_info: this.m_ModifiedAliases,
              simulated_actions: Array.from(
                this.m_ModifiedSimulatedActions.values(),
              ),
              app_key: this.SelectedApp,
            };
            let o = JSON.stringify(s);
            return (
              console.log(
                "Saving binding " + e + " for app '" + this.SelectedApp + "'.",
              ),
              new Promise((e, t) => {
                let i = new E(n, e, t);
                this.m_OutstandingSaveBindingCalls.push(i),
                  c()
                    .post("/input/savebinding.action", o)
                    .then((e) => {
                      e.data.error
                        ? (console.log(
                            "SaveCurrentBinding failed:",
                            e.data.error,
                          ),
                          t(e.data.error))
                        : console.log("SaveCurrentBinding Successful");
                    })
                    .catch((e) => {
                      t(e);
                    });
              })
            );
          });
        }
        PublishBindingToWorkshop(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let t = { app_key: this.SelectedApp, description: e };
            t.binding = {
              bindings: this.m_ModifiedBindingSet,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
            };
            let n = JSON.stringify(t);
            yield new Promise(function (e, t) {
              c()
                .post("/input/submitworkshopbinding.action", n)
                .then((t) => {
                  console.log("PublishBindingToWorkshop response: ", t), e();
                })
                .catch((e) => {
                  t(e);
                });
            });
          });
        }
        OnWebSocketOpen(e) {
          console.log("Websocket connected"),
            (this.m_eWebSocketState = o.eWebSocketState_Connected),
            this.WebSocketSend("input_open"),
            this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("input_close");
            });
        }
        OnWebSocketClose(e) {
          console.log("Websocket closed ", e),
            (this.m_eWebSocketState = o.eWebSocketState_Disconnected),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWorkshopUploadComplete(e) {
          if (
            (console.log("OnWorkshopUploadComplete: ", e),
            e.app_key != I.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${I.SelectedApp}.`,
            );
          if (this.m_OutstandingSaveBindingCalls.length <= 0)
            return void console.log(
              "Got workshop upload result without pending resolve",
            );
          let t = this.m_OutstandingSaveBindingCalls.shift();
          e.success ? (t.resolve(e), this.LoadActionManifest()) : t.reject(e);
        }
        OnPendingFileSaved(e) {
          let t = e.success ? "Success" : e.error;
          console.log(`OnPendingFileSaved: ${t}. ${e}`),
            e.app_key == I.SelectedApp ||
              console.log(
                `Ignoring pending file saved for an app we aren't viewing. Pending: ${e.app_key}. Current: ${I.SelectedApp}.`,
              );
        }
        get SaveNoticeText() {
          if (this.m_OutstandingSaveBindingCalls.length > 0) {
            let e = !1;
            return (
              this.m_OutstandingSaveBindingCalls.forEach((t) => {
                ("personal" != t.SaveType && "public" != t.SaveType) ||
                  (e = !0);
              }),
              e ? "#SaveNotice_Uploading" : "#SaveNotice_Saving"
            );
          }
        }
        OnBindingConfigLoaded(e) {
          if (
            (console.log(
              "OnBindingConfigLoaded: ",
              e,
              " selected action set:",
              this.m_sSelectedActionSet,
            ),
            e.app_key != I.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${I.SelectedApp}.`,
            );
          if (e.uri != this.m_sLoadedBindingURI)
            return void console.log(
              `Ignoring binding load for an config url ${e.uri} we aren't viewing ${this.m_sLoadedBindingURI}`,
            );
          this.m_ControllerWatchers.clear(),
            (this.m_LoadedBinding = e),
            (this.m_ModifiedBindingSet = d.LO.map());
          let t = (0, u.Xx)("#unknown_application"),
            n = m.S.GetApp(I.SelectedApp);
          if (
            (n && (t = n.name),
            (this.m_sName = ""),
            (this.m_sDescription = ""),
            (this.m_sInteractionProfile = " "),
            e.binding_config &&
              (e.binding_config.hasOwnProperty("name") &&
                (this.m_sName = e.binding_config.name),
              e.binding_config.hasOwnProperty("description") &&
                (this.m_sDescription = e.binding_config.description),
              e.binding_config.hasOwnProperty("interaction_profile") &&
                (this.m_sInteractionProfile =
                  e.binding_config.interaction_profile)),
            "" == this.m_sName)
          ) {
            let e = I.SelectedControllerTypeInfo,
              n = g.I.LocalizeControllerString(e, e ? e.controller_type : "");
            this.m_sName = (0, u.Xx)("#BindingUI_SaveDefaultName", t, n);
          }
          e.binding_config &&
            e.binding_config.bindings &&
            (Object.keys(e.binding_config.bindings).forEach((t) => {
              var n;
              let i = new f();
              (i.chords = e.binding_config.bindings[t].chords),
                (i.poses = e.binding_config.bindings[t].poses),
                (i.haptics = e.binding_config.bindings[t].haptics),
                (i.skeleton = e.binding_config.bindings[t].skeleton),
                (i.sources = []),
                null === (n = e.binding_config.bindings[t].sources) ||
                  void 0 === n ||
                  n.forEach((e) => {
                    let t = new S();
                    (t.mode = e.mode),
                      (t.path = e.path),
                      (t.inputs = d.LO.map()),
                      e.hasOwnProperty("inputs") &&
                        Object.keys(e.inputs).forEach((n) => {
                          t.inputs.set(n, e.inputs[n]);
                        }),
                      null != e.parameters &&
                        Object.keys(e.parameters).length > 0 &&
                        ((t.parameters = d.LO.map()),
                        e.hasOwnProperty("parameters") &&
                          Object.keys(e.parameters).forEach((n) => {
                            t.parameters.set(n, e.parameters[n]);
                          })),
                      i.sources.push(t);
                  }),
                this.m_ModifiedBindingSet.set(t, i);
            }),
            this.m_ModifiedOptions.clear(),
            e.binding_config.options &&
              (Object.keys(e.binding_config.options).forEach((t) => {
                this.m_ModifiedOptions.set(t, e.binding_config.options[t]);
              }),
              this.ManifestOptions.forEach((e) => {
                this.m_ModifiedOptions.has(e.name) ||
                  this.m_ModifiedOptions.set(e.name, e.default);
              })),
            this.m_ModifiedAliases.clear(),
            e.binding_config.alias_info &&
              Object.keys(e.binding_config.alias_info).forEach((t) => {
                this.m_ModifiedAliases.set(t, e.binding_config.alias_info[t]);
              }),
            this.m_ModifiedSimulatedActions.clear(),
            e.binding_config.simulated_actions &&
              e.binding_config.simulated_actions.forEach((e) => {
                let t = this.ComputeSimulatedActionPathFromId(e.id);
                this.m_ModifiedSimulatedActions.set(t, e),
                  e.id >= this.m_nNextSimulatedActionId &&
                    (this.m_nNextSimulatedActionId = e.id + 1);
              })),
            this.m_vecBindingSetWatchers.forEach((e) => {
              e();
            });
        }
        QueryBindingList(e, t) {
          return (
            null != this.m_OutstandingQueryResolve &&
              console.warn(
                "About to start second binding list query when one is already pending",
                this.m_OutstandingQueryResolve,
              ),
            new Promise((n, i) => {
              (this.m_OutstandingQueryResolve = n),
                c()
                  .get(
                    `/input/queryworkshopbindings.json?app_key=${e}&controller_type=${t}`,
                  )
                  .then((e) => {
                    console.log("QueryBindingList: ajax request successful");
                  })
                  .catch((e) => {
                    i(e);
                  });
            })
          );
        }
        DeleteBinding(e) {
          null != this.m_OutstandingDeleteResolve &&
            console.warn(
              "About to start second binding delete when one is already pending",
              this.m_OutstandingDeleteResolve,
            );
          let t = { url: e },
            n = JSON.stringify(t);
          return new Promise((t, i) => {
            (this.m_OutstandingDeleteResolve = t),
              (this.m_sOutstandingDeleteURL = e),
              c()
                .post("/input/deleteconfig.action", n)
                .then((e) => {
                  console.log("Delete ajax request successful");
                })
                .catch((e) => {
                  i(e);
                });
          });
        }
        OnBindingDeleteComplete(e) {
          null != this.m_OutstandingDeleteResolve
            ? e.url == this.m_sOutstandingDeleteURL &&
              ((this.m_sOutstandingDeleteURL = void 0),
              this.m_OutstandingDeleteResolve(e),
              (this.m_OutstandingDeleteResolve = void 0),
              console.log("OnDeleteComplete: ", e))
            : console.warn(
                "Missing outstanding query resolve for binding delete",
              );
        }
        ShouldShowBindingFailureForControllerType(e) {
          if (null == e || "" == e) return !1;
          let t = g.I.GetControllerTypeInfo(e);
          return !!t && !!t.should_show_binding_errors;
        }
        HasBindingUriFailedToLoad(e) {
          return -1 != this.m_rKnownFailedBindingUris.indexOf(e);
        }
        RememberFailedLoadUri(e) {
          this.m_rKnownFailedBindingUris.push(e);
        }
        OnQueryResults(e) {
          console.log("OnQueryResults: ", e),
            null != this.m_OutstandingQueryResolve
              ? (this.m_OutstandingQueryResolve(e),
                (this.m_OutstandingQueryResolve = void 0))
              : console.warn(
                  "Missing outstanding query resolve for binding query",
                );
        }
        SelectConfig(e, t, n) {
          if (
            ((this.m_sLoadedBindingURI = n),
            console.log("Selecting config " + n + " for app " + e),
            this.SelectedBindingURL == n)
          )
            return (
              console.debug("Selecting the config we already have set", n),
              new Promise((e, t) => {
                e();
              })
            );
          let i = { app_key: e, controller_type: t, url: n },
            s = JSON.stringify(i);
          return (
            null != this.m_OutstandingSelectConfigResolve &&
              console.warn(
                "About to start second select config when one is already pending",
                this.m_OutstandingSelectConfigResolve,
              ),
            new Promise((e, t) => {
              (this.m_OutstandingSelectConfigResolve = e),
                c()
                  .post("/input/selectconfig.action", s)
                  .then((e) => {
                    console.log("selectconfig ajax request successful");
                  })
                  .catch((e) => {
                    t(e);
                  });
            })
          );
        }
        OnSelectConfigComplete(e) {
          null != this.m_OutstandingSelectConfigResolve
            ? (this.m_OutstandingSelectConfigResolve(),
              (this.m_OutstandingSelectConfigResolve = void 0),
              console.log("OnSelectConfigComplete: ", e))
            : e.error_to_show
              ? h.w.ShowBindingList(e.error_to_show)
              : console.warn(
                  "Missing outstanding query resolve for select config",
                );
        }
        OnTrackersBindingChanged(e) {
          this.GetTrackerBindings().then((e) => {
            this.m_TrackerBindingSetup = e;
          });
        }
        OnActionManifestReloaded(e) {
          e.app_key == I.SelectedApp && this.ReloadCurrentApp();
        }
        SetBindingURL(e) {
          this.m_sLoadedBindingURI = e;
        }
        OnActionBindingsReloaded(e) {
          this.RefreshInputState();
        }
        GetControllerWatcherForSourceFromControllerType(e, t, n, s) {
          let o = "" + e.controller_type + t + n + s;
          if (!this.m_ControllerWatchers.has(o)) {
            let r = "";
            if ("controller_handed" == e.input_bindingui_mode)
              switch (t) {
                case i.eButtonSide_Left:
                  r = "/user/hand/left";
                  break;
                case i.eButtonSide_Right:
                  r = "/user/hand/right";
              }
            else {
              let t = g.I.ConnectedDevices.find(
                (t) => t.controller_type == e.controller_type,
              );
              t && t.root_path
                ? (r = t.root_path)
                : console.log(
                    "Unable to find device path for controller type ",
                    e,
                  );
            }
            this.m_ControllerWatchers.set(o, new B(r, e, t, n, s));
          }
          return this.m_ControllerWatchers.get(o);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          if ("jsonid" in t && "vr_input_get_notifications" == t.jsonid)
            for (let e in t.notifications) {
              let n = t.notifications[e];
              switch (n.type) {
                case "pending_file_saved":
                  this.OnPendingFileSaved(n);
                  break;
                case "workshop_upload_complete":
                  this.OnWorkshopUploadComplete(n);
                  break;
                case "query_results":
                  this.OnQueryResults(n);
                  break;
                case "action_bindings_reloaded":
                  this.OnActionBindingsReloaded(n);
                  break;
                case "delete_binding_complete":
                  this.OnBindingDeleteComplete(n);
                  break;
                case "select_config_complete":
                  this.OnSelectConfigComplete(n);
                  break;
                case "trackers_binding_changed":
                  this.OnTrackersBindingChanged(n);
                  break;
                case "action_manifest_reloaded":
                  this.OnActionManifestReloaded(n);
                  break;
                case "refresh_input_state":
                  this.RefreshInputState();
                  break;
                case "binding_subscription_changed":
                  this.m_nBindingSubscriptionChangedCanary++;
              }
            }
        }
        get BindingConfig() {
          return null == this.m_ModifiedBindingSet
            ? ""
            : JSON.stringify(this.m_ModifiedBindingSet, null, "\t");
        }
        get BindingSubscriptionChangedCanary() {
          return this.m_nBindingSubscriptionChangedCanary;
        }
        GetInteractionProfile() {
          return this.m_sInteractionProfile;
        }
        SetInteractionProfile(e) {
          let t = this.m_sInteractionProfile != e;
          (this.m_sInteractionProfile = e), t && this.NotifyWatchersOfChange();
        }
        GetInteractionProfiles() {
          return this.m_SelectedAppActions.interaction_profiles;
        }
        GetSimulatedControllerProperties() {
          var e;
          const t =
            null !== (e = this.GetOptionValue("simulated_controller_type")) &&
            void 0 !== e
              ? e
              : "";
          return {
            strSimulatedControllerType: t,
            strLocalizedSimulatedControllerType:
              this.LocalizeStringForSelectedControllerType(t),
            bIsSimulatingController: t && "none" != t,
            bIsSimulatingHMD: this.GetOptionValue("simulate_hmd"),
            bIsSimulatingRenderModel: this.GetOptionValue(
              "simulate_rendermodel",
            ),
          };
        }
      }
      (0, r.gn)([d.LO], T.prototype, "m_eWebSocketState", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_sLoadedBindingURI", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_LoadedBinding", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_ModifiedBindingSet", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_ModifiedOptions", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_ModifiedAliases", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_sName", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_sDescription", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_sInteractionProfile", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_SelectedApp", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_SelectedAppActions", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_sSelectedActionSet", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_sSelectedControllerType", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_TrackerBindingSetup", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_OutstandingSaveBindingCalls", void 0),
        (0, r.gn)([d.LO], T.prototype, "m_ModifiedSimulatedActions", void 0),
        (0, r.gn)(
          [d.LO],
          T.prototype,
          "m_nBindingSubscriptionChangedCanary",
          void 0,
        ),
        (0, r.gn)([a.ak], T.prototype, "OpenWebSocketToHost", null),
        (0, r.gn)([d.Fl], T.prototype, "SteamVRUnavailable", null),
        (0, r.gn)([d.Fl], T.prototype, "ActionSets", null),
        (0, r.gn)([d.Fl], T.prototype, "ManifestOptions", null),
        (0, r.gn)([d.Fl], T.prototype, "SecondaryControllerOptions", null),
        (0, r.gn)([d.aD], T.prototype, "SetOptionValue", null),
        (0, r.gn)([d.aD], T.prototype, "AddSimulatedAction", null),
        (0, r.gn)([d.aD], T.prototype, "DeleteSimulatedActionByPath", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedApp", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedAppActions", null),
        (0, r.gn)(
          [d.Fl],
          T.prototype,
          "CurrentAppCanAccessPrivateInputs",
          null,
        ),
        (0, r.gn)([d.Fl], T.prototype, "SelectedControllerTypeInfo", null),
        (0, r.gn)([d.Fl], T.prototype, "CurrentBindingSaveType", null),
        (0, r.gn)(
          [d.Fl],
          T.prototype,
          "CurrentBindingActionManifestVersion",
          null,
        ),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSet", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetDetails", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetActions", null),
        (0, r.gn)([a.ak], T.prototype, "GetSelectedAppDefaultBinding", null),
        (0, r.gn)([a.ak], T.prototype, "GetActionByName", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetPoses", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetHaptics", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetSkeletons", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetChords", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetChordCount", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedActionSetSources", null),
        (0, r.gn)([d.Fl], T.prototype, "BSelectedActionSetHasPoses", null),
        (0, r.gn)([d.Fl], T.prototype, "BSelectedActionSetHasBoundPoses", null),
        (0, r.gn)([d.Fl], T.prototype, "BSelectedActionSetHasHaptics", null),
        (0, r.gn)(
          [d.Fl],
          T.prototype,
          "BSelectedActionSetHasBoundHaptics",
          null,
        ),
        (0, r.gn)([d.Fl], T.prototype, "BSelectedActionSetHasSkeletons", null),
        (0, r.gn)(
          [d.Fl],
          T.prototype,
          "BSelectedActionSetHasBoundSkeletons",
          null,
        ),
        (0, r.gn)([d.aD], T.prototype, "ClearSelectedApp", null),
        (0, r.gn)([d.aD], T.prototype, "SetSelectedApp", null),
        (0, r.gn)([d.aD], T.prototype, "SetSelectedController", null),
        (0, r.gn)([d.aD], T.prototype, "SetSelectedActionSet", null),
        (0, r.gn)(
          [a.ak],
          T.prototype,
          "LocalizeStringForSelectedControllerType",
          null,
        ),
        (0, r.gn)(
          [a.ak],
          T.prototype,
          "LocalizePathNameForSelectedControllerType",
          null,
        ),
        (0, r.gn)(
          [d.Fl],
          T.prototype,
          "SelectedControllerTypeLocalizedName",
          null,
        ),
        (0, r.gn)([d.aD], T.prototype, "RegisterBindingWatcher", null),
        (0, r.gn)([d.aD], T.prototype, "UnregisterBindingWatcher", null),
        (0, r.gn)([d.aD], T.prototype, "GetActionBinding", null),
        (0, r.gn)([a.ak], T.prototype, "GetInputModesForSourceType", null),
        (0, r.gn)([a.ak], T.prototype, "GetBooleanInputOptionsForMode", null),
        (0, r.gn)([a.ak], T.prototype, "GetActionBindingsOfType", null),
        (0, r.gn)([d.Fl], T.prototype, "GetBooleanActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "GetVector1ActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "GetLiteralVector1ActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "GetVector2ActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "GetVector3ActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "GetPoseActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "GetHapticsActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "GetSkeletonActionBindings", null),
        (0, r.gn)([d.Fl], T.prototype, "ConfigName", null),
        (0, r.gn)([d.Fl], T.prototype, "ConfigDescription", null),
        (0, r.gn)([a.ak], T.prototype, "GetPoseAction", null),
        (0, r.gn)([a.ak], T.prototype, "GetPoseActionByPath", null),
        (0, r.gn)([a.ak], T.prototype, "GetHapticsAction", null),
        (0, r.gn)([a.ak], T.prototype, "GetHapticsActionByPath", null),
        (0, r.gn)([a.ak], T.prototype, "GetSkeletonAction", null),
        (0, r.gn)([a.ak], T.prototype, "GetSkeletonActionByPath", null),
        (0, r.gn)([a.ak], T.prototype, "NotifyWatchersOfChange", null),
        (0, r.gn)([d.aD], T.prototype, "SetActionForInputModeType", null),
        (0, r.gn)([d.aD], T.prototype, "SetParameterForInputModeType", null),
        (0, r.gn)([a.ak], T.prototype, "AddActionSetIfRequired", null),
        (0, r.gn)([d.aD], T.prototype, "AddInputModeForSource", null),
        (0, r.gn)([d.aD], T.prototype, "DeleteInputModeForSource", null),
        (0, r.gn)([d.aD], T.prototype, "SetInputModeForInputSource", null),
        (0, r.gn)([d.aD], T.prototype, "ClearModesForInputPath", null),
        (0, r.gn)([d.aD], T.prototype, "SetInputPathForPose", null),
        (0, r.gn)([d.aD], T.prototype, "SetPoseForInputPath", null),
        (0, r.gn)([d.aD], T.prototype, "AddDefaultPose", null),
        (0, r.gn)([d.aD], T.prototype, "SetInputPathForHaptics", null),
        (0, r.gn)([d.aD], T.prototype, "SetHapticsForInputPath", null),
        (0, r.gn)([d.aD], T.prototype, "AddDefaultHaptics", null),
        (0, r.gn)([d.aD], T.prototype, "SetInputPathForSkeleton", null),
        (0, r.gn)([d.aD], T.prototype, "SetSkeletonForInputPath", null),
        (0, r.gn)([d.aD], T.prototype, "AddDefaultSkeleton", null),
        (0, r.gn)([d.aD], T.prototype, "SetActionForChord", null),
        (0, r.gn)([d.aD], T.prototype, "DeleteChord", null),
        (0, r.gn)([d.aD], T.prototype, "AddChord", null),
        (0, r.gn)([d.aD], T.prototype, "DeleteSourceFromChord", null),
        (0, r.gn)([d.aD], T.prototype, "SetInputTypeForChord", null),
        (0, r.gn)([d.aD], T.prototype, "SetInputSourceForChord", null),
        (0, r.gn)([d.aD], T.prototype, "LoadActionManifest", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedBindingURL", null),
        (0, r.gn)([d.Fl], T.prototype, "LoadedBindingURL", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedBindingIsLegacy", null),
        (0, r.gn)([d.Fl], T.prototype, "SelectedBindingIsOpenXR", null),
        (0, r.gn)([d.Fl], T.prototype, "IsSecondaryController", null),
        (0, r.gn)([d.Fl], T.prototype, "TrackerBindings", null),
        (0, r.gn)([d.aD], T.prototype, "GetTrackerBindings", null),
        (0, r.gn)([a.ak], T.prototype, "SetTrackerBinding", null),
        (0, r.gn)([a.ak], T.prototype, "PulseHaptics", null),
        (0, r.gn)([d.Fl], T.prototype, "KnownControllerTypes", null),
        (0, r.gn)([a.ak], T.prototype, "AutosaveBinding", null),
        (0, r.gn)([a.ak], T.prototype, "OnWebSocketOpen", null),
        (0, r.gn)([a.ak], T.prototype, "OnWebSocketClose", null),
        (0, r.gn)([a.ak], T.prototype, "WebSocketSend", null),
        (0, r.gn)([a.ak], T.prototype, "OnWorkshopUploadComplete", null),
        (0, r.gn)([a.ak], T.prototype, "OnPendingFileSaved", null),
        (0, r.gn)([d.Fl], T.prototype, "SaveNoticeText", null),
        (0, r.gn)([a.ak], T.prototype, "QueryBindingList", null),
        (0, r.gn)([a.ak], T.prototype, "DeleteBinding", null),
        (0, r.gn)([a.ak], T.prototype, "OnBindingDeleteComplete", null),
        (0, r.gn)(
          [a.ak],
          T.prototype,
          "ShouldShowBindingFailureForControllerType",
          null,
        ),
        (0, r.gn)([a.ak], T.prototype, "OnQueryResults", null),
        (0, r.gn)([a.ak], T.prototype, "SelectConfig", null),
        (0, r.gn)([a.ak], T.prototype, "OnSelectConfigComplete", null),
        (0, r.gn)([a.ak], T.prototype, "OnTrackersBindingChanged", null),
        (0, r.gn)([a.ak], T.prototype, "OnActionManifestReloaded", null),
        (0, r.gn)([a.ak], T.prototype, "SetBindingURL", null),
        (0, r.gn)([a.ak], T.prototype, "OnActionBindingsReloaded", null),
        (0, r.gn)(
          [a.ak],
          T.prototype,
          "GetControllerWatcherForSourceFromControllerType",
          null,
        ),
        (0, r.gn)([a.ak], T.prototype, "OnWebSocketMessage", null),
        (0, r.gn)([d.Fl], T.prototype, "BindingConfig", null),
        (0, r.gn)(
          [d.Fl],
          T.prototype,
          "BindingSubscriptionChangedCanary",
          null,
        );
      const I = new T();
      window.controllerBindingStore = I;
    },
    8155: (e, t, n) => {
      n.d(t, { GZ: () => l, vs: () => c });
      var i = n(655),
        s = n(7294),
        o = n(3365),
        r = (n(1783), n(7056)),
        a = n(355);
      n(6592);
      class l {
        constructor(e, t, n, i) {
          (this.sValue = e),
            (this.sLocalized = t),
            (this.sRequiredLocalized = n),
            (this.sLocalizedDescription = i);
        }
      }
      class c extends s.Component {
        constructor(e) {
          super(e),
            (this.state = {
              sSelectedOption: this.props.sValueSelectedItem,
              bVisible: !1,
            });
        }
        componentWillMount() {
          null != this.props.bShowOptionsOnStart &&
            this.setState({ bVisible: this.props.bShowOptionsOnStart });
        }
        componentWillReceiveProps(e) {
          null != e.bShowOptionsOnStart &&
            e.bShowOptionsOnStart != this.props.bShowOptionsOnStart &&
            this.setState({ bVisible: e.bShowOptionsOnStart });
        }
        Show(e) {
          this.setState({ bVisible: !0 }), e.stopPropagation();
        }
        Hide(e) {
          this.setState({ bVisible: !1 }), e && e.stopPropagation();
        }
        OnOptionChanged(e, t) {
          this.setState({ sSelectedOption: t }),
            this.props.fnOptionSelected(t),
            this.Hide(e);
        }
        render() {
          let e = this.props.vecOptions.map((e, t) => {
              if ("-" == e.sValue)
                return s.createElement("div", {
                  key: t,
                  className: "InlineSeparator",
                });
              if ("-blank" == e.sValue)
                return s.createElement(
                  "div",
                  { key: t, className: "InlineBlankSeparator" },
                  e.sLocalized,
                );
              if ("-nonitem" == e.sValue)
                return s.createElement(
                  "div",
                  { key: t, className: "InlineNonItemSeparator" },
                  e.sLocalized,
                );
              if ("-subHeader" == e.sValue)
                return s.createElement(
                  "div",
                  { key: t, className: "InlineSubHeaderSeparator" },
                  e.sLocalized,
                );
              {
                let n,
                  i,
                  o = "InlineDropdownItem";
                return (
                  this.props.sValueSelectedItem == e.sValue &&
                    (o += " Selected"),
                  null != e.sRequiredLocalized &&
                    (n = s.createElement(
                      "span",
                      { className: "BindingLabelActionRequirement" },
                      e.sRequiredLocalized,
                    )),
                  null != e.sLocalizedDescription &&
                    (i = s.createElement(
                      a.ZP,
                      {
                        content: e.sLocalizedDescription,
                        theme: "ControllerBindingToolTip",
                      },
                      s.createElement(
                        "span",
                        { className: "SourceModeHelp" },
                        "?",
                      ),
                    )),
                  s.createElement(
                    "div",
                    {
                      key: t,
                      className: o,
                      onClick: (t) => {
                        this.OnOptionChanged(t, e.sValue);
                      },
                    },
                    e.sLocalized,
                    n,
                    i,
                  )
                );
              }
            }),
            t =
              "InlineDropdownLabel " +
              (null == this.props.sHeaderClass ? "" : this.props.sHeaderClass),
            n =
              "InlineOptionsDropDownRodal " +
              (null == this.props.sModalClass ? "" : this.props.sModalClass),
            i = this.props.sLocalizedSelectedItem;
          !i &&
            this.state.sSelectedOption &&
            this.props.vecOptions.forEach((e) => {
              e.sValue == this.state.sSelectedOption && (i = e.sLocalized);
            });
          let r = this.props.bReadOnly ? () => {} : this.Show;
          return s.createElement(
            "div",
            { className: t, onClick: r },
            i &&
              s.createElement(
                "div",
                { className: this.props.sMainButtonClass },
                i,
              ),
            s.createElement(
              o.Z,
              {
                visible: this.state.bVisible,
                onClose: this.Hide,
                customStyles: {
                  width: "60%",
                  height: "fit-content",
                  maxHeight: "90%",
                  display: "flex",
                },
                showCloseButton: !1,
                animation: "fade",
                className: n,
                closeOnEsc: !0,
              },
              this.state.bVisible &&
                s.createElement(
                  "div",
                  { className: "FlexColumn InlineDropdownModalWrapper" },
                  this.props.sModalTitleString &&
                    s.createElement(
                      "div",
                      { className: "Label ModalHeader" },
                      this.props.sModalTitleString,
                    ),
                  s.createElement(
                    "div",
                    { className: "FlexColumn InlineDropdownItemWrapper" },
                    e,
                  ),
                ),
            ),
          );
        }
      }
      (0, i.gn)([r.ak], c.prototype, "Show", null),
        (0, i.gn)([r.ak], c.prototype, "Hide", null),
        (0, i.gn)([r.ak], c.prototype, "OnOptionChanged", null);
    },
    8048: (e, t, n) => {
      n.d(t, { g: () => i, w: () => m });
      var i,
        s = n(655),
        o = n(9809),
        r = n(7056),
        a = n(2188),
        l = n(1569),
        c = n(3568),
        d = n(5211),
        u = n(1380),
        p = n(775);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.List = 1)] = "List"),
          (e[(e.ViewBinding = 2)] = "ViewBinding"),
          (e[(e.EditBinding = 3)] = "EditBinding"),
          (e[(e.AppSelect = 4)] = "AppSelect"),
          (e[(e.Debugger = 5)] = "Debugger");
      })(i || (i = {}));
      class h {
        constructor() {
          (this.m_State = i.None),
            (this.m_bLoading = !1),
            (this.m_rBindingList = void 0),
            (this.m_bShowBindingListError = !1),
            (this.m_sBindingListError = void 0),
            (this.m_bCanCloseBindingListError = !0),
            (this.m_timeoutLoading = void 0),
            (this.m_pathUpdateTimer = void 0),
            (this.m_bStandaloneSettingsPage = !1),
            (this.m_bDesktopMode = !1);
        }
        Init() {
          window.addEventListener("popstate", this.OnPopState),
            history.pushState({ direction: "back" }, "back"),
            history.pushState({ direction: "current" }, "current"),
            history.pushState({ direction: "forward" }, "forward"),
            history.back();
          let e = "bindingui/" + l.qA[(0, l.Op)()];
          (this.m_mailbox = new l.Nv()),
            this.m_mailbox.Init(e),
            this.m_mailbox.RegisterHandler(
              "show_app_select",
              this.OnShowAppSelect,
            ),
            this.m_mailbox.RegisterHandler(
              "show_app_binding",
              this.OnShowAppBinding,
            ),
            this.m_mailbox.RegisterHandler(
              "show_input_debugger",
              this.OnShowInputDebugger,
            ),
            this.m_mailbox.RegisterHandler(
              "binding_load_failed",
              this.OnBindingLoadFailed,
            ),
            (0, a.EH)(this.UpdateWindowTitle);
        }
        ShowOverlayInDashboard() {
          null === l.Co ||
            void 0 === l.Co ||
            l.Co.VROverlay.ShowDashboard(
              "system.vrwebhelper.controllerbinding",
            );
        }
        OnShowAppSelect(e) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowAppSelect();
        }
        OnShowInputDebugger(e) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowDebugger();
        }
        OnShowAppBinding(e) {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            u.S.UpdateApplications().then(() => {
              if (
                ((0, l.Op)() == l.qA.Overlay
                  ? this.ShowOverlayInDashboard()
                  : (0, l.Op)() == l.qA.Desktop && l.Co.ShowBindingUI(!0),
                !u.S.GetApp(e.app_key))
              )
                return (
                  console.log(
                    "Warning: Could not find app key: " +
                      e.app_key +
                      " showing app select.",
                  ),
                  void this.ShowAppSelect()
                );
              d.c6.SetSelectedApp(e.app_key, !0),
                d.c6.ReloadCurrentApp().then(() => {
                  if (e.controller_type)
                    return (
                      d.c6.SetSelectedController(e.controller_type, !0),
                      void d.c6.ReloadControllerConfiguration().then(() => {
                        e.action_set && d.c6.SetSelectedActionSet(e.action_set),
                          (this.Loading = !1),
                          this.EditCurrentBinding();
                      })
                    );
                  (this.Loading = !1), this.ShowBindingList();
                });
            });
        }
        OnBindingLoadFailed(e) {
          console.log(
            "OnBindingLoadFailed: " +
              e.app_key +
              " " +
              e.controller_type +
              " " +
              e.error,
          ),
            u.S.UpdateApplications().then(() => {
              if (!u.S.ShouldShowBindingFailureForApp(e.app_key)) return;
              if (
                !d.c6.ShouldShowBindingFailureForControllerType(
                  e.controller_type,
                )
              )
                return;
              d.c6.RememberFailedLoadUri(e.uri),
                d.c6.SetSelectedApp(e.app_key),
                d.c6.SetSelectedController(e.controller_type);
              let t = u.S.GetApp(e.app_key),
                n = o.I.GetControllerTypeInfo(e.controller_type);
              if (!n) return;
              let i = o.I.LocalizeControllerString(n, e.controller_type);
              this.ShowBindingList(
                (0, c.Xx)(
                  e.error,
                  t ? t.name : (0, c.Xx)("#unknown_application"),
                  i,
                ),
              ),
                null === l.Co || void 0 === l.Co || l.Co.ShowBindingUI(!1);
            });
        }
        SetStandaloneSettingsPage(e) {
          this.m_bStandaloneSettingsPage = e;
        }
        SetDesktopMode(e) {
          this.m_bDesktopMode = e;
        }
        get DesktopMode() {
          return this.m_bDesktopMode;
        }
        SetBindingListError(e, t = !0) {
          (this.m_bShowBindingListError = null != e),
            (this.m_sBindingListError = e),
            (this.m_bCanCloseBindingListError = t);
        }
        get ShowBindingListError() {
          return this.m_bShowBindingListError;
        }
        get BindingListError() {
          return this.m_sBindingListError;
        }
        get CanCloseBindingListError() {
          return this.m_bCanCloseBindingListError;
        }
        OnPopState(e) {
          let t = "";
          e.state && e.state.direction && (t = e.state.direction),
            "back" == t
              ? (this.m_bStandaloneSettingsPage &&
                  (this.SetStandaloneSettingsPage(!1),
                  this.ReturnToSettingsUI()),
                this.GoBackPage(),
                history.forward())
              : "forward" == t && (history.back(), this.GoForwardPage());
        }
        GoBackPage() {
          switch (this.m_State) {
            default:
            case i.None:
            case i.AppSelect:
              break;
            case i.Debugger:
            case i.List:
              this.ShowAppSelect();
              break;
            case i.EditBinding:
            case i.ViewBinding:
              this.ShowBindingList();
          }
        }
        GoForwardPage() {
          switch (this.m_State) {
            default:
            case i.None:
            case i.AppSelect:
              this.ShowBindingList();
              break;
            case i.List:
              this.CurrentBinding.url == d.c6.LoadedBindingURL
                ? this.EditCurrentBinding()
                : this.ViewCurrentBinding();
            case i.EditBinding:
            case i.ViewBinding:
          }
        }
        get GetUIState() {
          return this.m_State;
        }
        get BindingQueryResults() {
          return this.m_rBindingList;
        }
        get Loading() {
          return this.m_bLoading;
        }
        set Loading(e) {
          (this.m_bLoading = e),
            e
              ? (this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading),
                (this.m_timeoutLoading = window.setTimeout(() => {
                  this.Loading = !1;
                }, 1e4)))
              : this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading);
        }
        IsSafeToResetControllerType(e, t) {
          return (
            this.m_State == i.AppSelect ||
            this.m_State == i.None ||
            ("TrackedDeviceClass_HMD" == e &&
              "TrackedDeviceClass_Controller" == t)
          );
        }
        EditCurrentBinding() {
          this.m_State = i.EditBinding;
        }
        ViewCurrentBinding() {
          this.m_State = i.ViewBinding;
        }
        ShowBindingList(e) {
          (this.m_bStandaloneSettingsPage = !1),
            this.SetBindingListError(e),
            (this.m_State = i.List),
            (this.Loading = !1);
        }
        get CurrentBinding() {
          if (this.BindingQueryResults)
            return m.BindingQueryResults.find(
              (e) => e.url == d.c6.SelectedBindingURL,
            );
        }
        ReturnToSettingsUI() {
          this.ShowAppSelect(),
            null === l.Co || void 0 === l.Co || l.Co.ShowSettingsUI();
        }
        ShowAppSelect() {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            u.S.UpdateApplications()
              .then(() => {
                (this.Loading = !1), (this.m_State = i.AppSelect);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        UpdatePathsTimeout() {
          try {
            p.n.UpdatePaths().then(() => {
              this.m_State == i.Debugger
                ? (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  ))
                : (this.m_pathUpdateTimer = void 0);
            });
          } catch (e) {
            console.log("Stopping debugger timer because", e);
          }
        }
        ShowDebugger() {
          (this.Loading = !0),
            u.S.UpdateApplications()
              .then(() => {
                this.Loading = !1;
                let e = u.S.GetApp(d.c6.SelectedApp);
                e &&
                  e.client_container_handle &&
                  p.n.AddSubscribedContainer(e.client_container_handle),
                  (this.m_State = i.Debugger),
                  (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  )),
                  l.Co.ShowBindingUI((0, l.Op)() == l.qA.Desktop);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        GetBindingList() {
          var e;
          return (0, s.mG)(this, void 0, void 0, function* () {
            (this.Loading = !0), (this.m_rBindingList = []);
            try {
              const t = d.c6.SelectedControllerTypeInfo,
                n = yield d.c6.QueryBindingList(
                  d.c6.SelectedApp,
                  null !== (e = null == t ? void 0 : t.controller_type) &&
                    void 0 !== e
                    ? e
                    : "",
                );
              n.success && (this.m_rBindingList = n.results);
            } catch (e) {
              this.SetBindingListError(
                (0, c.Xx)("#BindingUI_WorkshopBindingLoadFailed"),
              ),
                console.error("Failed to load workshop bindings " + e);
            } finally {
              this.Loading = !1;
            }
          });
        }
        UpdateWindowTitle() {
          setTimeout(() => {
            switch (this.GetUIState) {
              case i.AppSelect:
              case i.Debugger:
              case i.EditBinding:
              case i.List:
              case i.None:
              case i.ViewBinding:
                document.title = (0, c.Xx)(
                  "#BindingUI_WindowTitle_ControllerBinding",
                );
            }
          }, 0);
        }
      }
      (0, s.gn)([a.LO], h.prototype, "m_State", void 0),
        (0, s.gn)([a.LO], h.prototype, "m_bLoading", void 0),
        (0, s.gn)([a.LO], h.prototype, "m_rBindingList", void 0),
        (0, s.gn)([a.LO], h.prototype, "m_bShowBindingListError", void 0),
        (0, s.gn)([a.LO], h.prototype, "m_sBindingListError", void 0),
        (0, s.gn)([a.LO], h.prototype, "m_bCanCloseBindingListError", void 0),
        (0, s.gn)([a.LO], h.prototype, "m_bDesktopMode", void 0),
        (0, s.gn)([r.ak], h.prototype, "OnShowAppSelect", null),
        (0, s.gn)([r.ak], h.prototype, "OnShowInputDebugger", null),
        (0, s.gn)([r.ak], h.prototype, "OnShowAppBinding", null),
        (0, s.gn)([r.ak], h.prototype, "OnBindingLoadFailed", null),
        (0, s.gn)([a.Fl], h.prototype, "DesktopMode", null),
        (0, s.gn)([r.ak], h.prototype, "SetBindingListError", null),
        (0, s.gn)([a.Fl], h.prototype, "ShowBindingListError", null),
        (0, s.gn)([a.Fl], h.prototype, "BindingListError", null),
        (0, s.gn)([a.Fl], h.prototype, "CanCloseBindingListError", null),
        (0, s.gn)([r.ak], h.prototype, "OnPopState", null),
        (0, s.gn)([r.ak], h.prototype, "GoBackPage", null),
        (0, s.gn)([r.ak], h.prototype, "GoForwardPage", null),
        (0, s.gn)([a.Fl], h.prototype, "GetUIState", null),
        (0, s.gn)([a.Fl], h.prototype, "BindingQueryResults", null),
        (0, s.gn)([a.Fl], h.prototype, "Loading", null),
        (0, s.gn)([r.ak], h.prototype, "IsSafeToResetControllerType", null),
        (0, s.gn)([r.ak], h.prototype, "EditCurrentBinding", null),
        (0, s.gn)([r.ak], h.prototype, "ViewCurrentBinding", null),
        (0, s.gn)([r.ak], h.prototype, "ShowBindingList", null),
        (0, s.gn)([a.Fl], h.prototype, "CurrentBinding", null),
        (0, s.gn)([r.ak], h.prototype, "ReturnToSettingsUI", null),
        (0, s.gn)([r.ak], h.prototype, "ShowAppSelect", null),
        (0, s.gn)([r.ak], h.prototype, "UpdatePathsTimeout", null),
        (0, s.gn)([r.ak], h.prototype, "ShowDebugger", null),
        (0, s.gn)([r.ak], h.prototype, "GetBindingList", null),
        (0, s.gn)([r.ak], h.prototype, "UpdateWindowTitle", null);
      const m = new h();
      window.inputUI = m;
    },
    9809: (e, t, n) => {
      n.d(t, { I: () => u });
      var i = n(655),
        s = n(2188),
        o = n(9669),
        r = n.n(o),
        a = n(7056),
        l = n(3568),
        c = n(1569);
      class d {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = s.LO.map()),
            (this.m_mailbox = new c.Nv()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1);
        }
        Init(e) {
          return (
            this.m_mailbox.Init("input_state"),
            this.m_mailbox.RegisterHandler(
              "controller_type_changed",
              this.OnControllerTypeChanged,
            ),
            this.m_mailbox.RegisterHandler(
              "action_bindings_reloaded",
              this.OnActionBindingsReloaded,
            ),
            null != e && (this.m_bUpdateInputStateOnControllerTypChange = e),
            this.GetInputState()
          );
        }
        OnActionBindingsReloaded() {
          this.GetInputState();
        }
        OnControllerTypeChanged(e) {
          this.UpdateControllerTypes(e.controller_types),
            (this.m_InputState.controller_types = e.controller_types),
            this.m_bUpdateInputStateOnControllerTypChange &&
              this.GetInputState();
        }
        get ConnectedDevices() {
          return null == this.m_InputState
            ? []
            : this.m_InputState.devices.filter(
                (e) =>
                  "TrackedDeviceClass_Controller" == e.class ||
                  "TrackedDeviceClass_HMD" == e.class ||
                  "TrackedDeviceClass_GenericTracker" == e.class,
              );
        }
        get ControllerTypes() {
          return this.m_InputState.controller_types;
        }
        get ShouldSendSystemButtonToAllApps() {
          return this.m_InputState.send_system_button_to_all_apps;
        }
        get ShowHiddenInputs() {
          return this.m_InputState.show_hidden_inputs;
        }
        get IsSteamAvailable() {
          return !this.m_InputState || this.m_InputState.is_steam_available;
        }
        get BDevMode() {
          return this.m_InputState.dev_mode;
        }
        get IsValid() {
          return null != this.m_InputState;
        }
        get CurrentUserPersonaName() {
          return this.m_InputState.current_user_persona_name
            ? this.m_InputState.current_user_persona_name
            : null;
        }
        GetControllerTypeInfo(e) {
          return this.m_InputState.controller_types.find(
            (t) => t.controller_type == e,
          );
        }
        GetDeviceInfo(e) {
          for (let t of this.m_InputState.devices)
            if (t.root_path == e || t.device_path == e) return t;
          return null;
        }
        LocalizeControllerString(e, t) {
          let n = (0, l.Xx)("#" + t);
          return n != "#" + t
            ? n
            : e &&
                this.m_InputState &&
                this.m_InputState.localization.hasOwnProperty(
                  e.resource_root,
                ) &&
                this.m_InputState.localization[e.resource_root].hasOwnProperty(
                  t.toLowerCase(),
                )
              ? this.m_InputState.localization[e.resource_root][t.toLowerCase()]
              : t;
        }
        LocalizeDriverString(e, t) {
          if (
            this.m_InputState &&
            this.m_InputState.localization.hasOwnProperty(e) &&
            this.m_InputState.localization[e].hasOwnProperty(t.toLowerCase())
          )
            return this.m_InputState.localization[e][t.toLowerCase()];
          let n = (0, l.Xx)("#" + t);
          return n != "#" + t ? n : t;
        }
        UpdateControllerTypes(e) {
          this.m_KnownControllerTypes.clear();
          for (let t of e)
            this.m_KnownControllerTypes.set(t.controller_type, t);
        }
        GetInputState() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            yield new Promise(function (e, t) {
              r()
                .get("/input/getstate.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            }).then((e) => {
              for (let t of e.controller_types)
                t.controller_type = t.controller_type.toLowerCase();
              for (let t of e.devices)
                t.controller_type = t.controller_type.toLowerCase();
              this.UpdateControllerTypes(e.controller_types),
                (this.m_InputState = e);
            });
          });
        }
        get KnownControllerTypes() {
          return this.m_KnownControllerTypes;
        }
        FindDeviceClassForControllerType(e) {
          let t = this.GetControllerTypeInfo(e);
          return null == t ? void 0 : t.device_class;
        }
        FindRootPathForControllerType(e) {
          for (let t of this.m_InputState.devices)
            if (t.controller_type == e) return t.root_path;
          return null;
        }
      }
      (0, i.gn)([s.LO], d.prototype, "m_InputState", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_KnownControllerTypes", void 0),
        (0, i.gn)([a.ak], d.prototype, "OnActionBindingsReloaded", null),
        (0, i.gn)([a.ak], d.prototype, "OnControllerTypeChanged", null),
        (0, i.gn)([s.Fl], d.prototype, "ConnectedDevices", null),
        (0, i.gn)([s.Fl], d.prototype, "ControllerTypes", null),
        (0, i.gn)([s.Fl], d.prototype, "ShouldSendSystemButtonToAllApps", null),
        (0, i.gn)([s.Fl], d.prototype, "ShowHiddenInputs", null),
        (0, i.gn)([s.Fl], d.prototype, "IsSteamAvailable", null),
        (0, i.gn)([s.Fl], d.prototype, "BDevMode", null),
        (0, i.gn)([s.Fl], d.prototype, "IsValid", null),
        (0, i.gn)([s.Fl], d.prototype, "CurrentUserPersonaName", null),
        (0, i.gn)([a.ak], d.prototype, "GetControllerTypeInfo", null),
        (0, i.gn)([a.ak], d.prototype, "LocalizeControllerString", null),
        (0, i.gn)([a.ak], d.prototype, "LocalizeDriverString", null),
        (0, i.gn)([s.aD], d.prototype, "UpdateControllerTypes", null),
        (0, i.gn)([s.aD], d.prototype, "GetInputState", null),
        (0, i.gn)([s.Fl], d.prototype, "KnownControllerTypes", null),
        (0, i.gn)(
          [a.ak],
          d.prototype,
          "FindDeviceClassForControllerType",
          null,
        );
      const u = new d();
      window.inputState = u;
    },
    3568: (e, t, n) => {
      n.d(t, { CK: () => l, LJ: () => o, Xx: () => r }), n(7294);
      var i = n(9669),
        s = n.n(i);
      class o {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        InitFromObjects(e, t, n, i) {
          this.m_mapTokens.clear();
          let s = [t, e, i, n];
          for (let e in s) {
            let t = s[e];
            for (let e in t) {
              let n = t[e];
              for (let e in n) {
                let t = e.toLowerCase();
                this.m_mapTokens.has(t) || this.m_mapTokens.set(t, n[e]);
              }
            }
          }
        }
        LocalizeString(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
          return void 0 === t ? "" : t;
        }
        LocalizeStringFromFallback(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
          return void 0 === t ? "" : t;
        }
        static GetLocale() {
          const e = navigator.languages[0];
          try {
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.GetSystemLocale();
            return t ? (o.s_Date.toLocaleTimeString(t), t) : e;
          } catch (t) {
            return e;
          }
        }
      }
      function r(e, ...t) {
        let n = a.LocalizeString(e);
        return n
          ? (t.length > 0 &&
              (n = n.replace(/%(\d+)\$s/g, function (e, n) {
                return void 0 !== t[n - 1] ? String(t[n - 1]) : e;
              })),
            n)
          : e;
      }
      o.s_Date = new Date();
      const a = new o();
      function l(e, t) {
        t ||
          (t = (function () {
            let e = new Map([
              ["en", "english"],
              ["de", "german"],
              ["fr", "french"],
              ["it", "italian"],
              ["ko", "korean"],
              ["es-419", "latam"],
              ["es", "spanish"],
              ["zh-CN", "schinese"],
              ["zh-TW", "tchinese"],
              ["ru", "russian"],
              ["th", "thai"],
              ["ja", "japanese"],
              ["pt", "portuguese"],
              ["pl", "polish"],
              ["da", "danish"],
              ["nl", "dutch"],
              ["fi", "finnish"],
              ["no", "norwegian"],
              ["sv", "swedish"],
              ["hu", "hungarian"],
              ["cs", "czech"],
              ["ro", "romanian"],
              ["tr", "turkish"],
              ["pt-BR", "brazilian"],
              ["bg", "bulgarian"],
              ["el", "greek"],
              ["uk", "ukranian"],
              ["vi", "vietnamese"],
            ]);
            for (let t of navigator.languages) {
              let n = t.split("-");
              if (e.has(t)) return e.get(t);
              if (e.has(n[0])) return e.get(n[0]);
            }
            return "english";
          })());
        let n = [],
          i = (e, t, n) => {
            let i,
              o = Date.now().toString();
            return (
              (i =
                "drivers" == e
                  ? `/input/localization.json?t=${o}`
                  : "webhelper" == e
                    ? `/dashboard/localization/${e}_${t}.json?t=${o}`
                    : `localization/${e}_${t}.json?t=${o}`),
              s()
                .get(i)
                .then((e) => {
                  n(e.data);
                })
                .catch(() => {})
            );
          },
          o = [],
          r = [],
          l = [],
          c = [];
        for (let s of e)
          n.push(
            i(s, t, (e) => {
              o.push(e);
            }),
          ),
            "english" != t &&
              n.push(
                i(s, "english", (e) => {
                  l.push(e);
                }),
              );
        for (let e of ["webhelper"])
          n.push(
            i(e, t, (e) => {
              r.push(e);
            }),
          ),
            "english" != t &&
              n.push(
                i(e, "english", (e) => {
                  c.push(e);
                }),
              );
        return (
          n.push(
            i("drivers", "", (e) => {
              o.push(e);
            }),
          ),
          Promise.all(n).then(() => {
            a.InitFromObjects(o, r, l, c);
          })
        );
      }
      window.LocalizationManager = a;
    },
    8495: (e, t, n) => {
      n.d(t, { e: () => c });
      var i = n(655),
        s = n(1569),
        o = n(7056),
        r = n(7176),
        a = n(7373),
        l = n(9626);
      class c {
        constructor() {
          var e;
          (this.m_mailbox = new s.Nv()),
            (this.m_dashboardSession = null),
            (this.m_dashboardSessionCount = 0),
            (this.m_lastDashboardSessionId = 0),
            this.m_mailbox.Init(
              null !==
                (e =
                  "ogs_client/" +
                  (null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ThisOverlayKey())) && void 0 !== e
                ? e
                : "unknown",
            ),
            this.m_mailbox.RegisterHandler(
              "set_dashboard_session_id",
              this.onSetDashboardSessionId,
            );
        }
        static get instance() {
          return d || (d = new c()), d;
        }
        onSetDashboardSessionId(e) {
          (null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayKey()) != r.Az &&
            (this.m_lastDashboardSessionId = e.id);
        }
        AddRow(e, t) {
          if ("object" != typeof t)
            throw new Error(
              "COGS.AddRow requires an object for its fields argument",
            );
          let n = { type: "add_ogs_row", table: e, fields: t };
          this.m_mailbox.SendMessage("ogs", n);
        }
        GetSource() {
          switch (
            null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.Environment()
          ) {
            case s.qA.Desktop:
              return "desktop";
            case s.qA.Overlay:
              return VRHTML.VROverlay.ThisOverlayKey();
            default:
              return "unknown";
          }
        }
        RecordUIEvent(e, t, n) {
          this.AddRow("SteamVRUIEvent", {
            Source: this.GetSource(),
            DashboardSessionId: this.m_lastDashboardSessionId,
            EventNameID: e,
            Cause: t,
            Param: n,
          });
        }
        StartDashboardSession(e) {
          this.m_dashboardSession && this.CommitDashboardSession();
          const t = l.BV.currentDashboardPosition;
          (this.m_lastDashboardSessionId = ++this.m_dashboardSessionCount),
            (this.m_dashboardSession = {
              dashboardSessionId: this.m_lastDashboardSessionId,
              sReason: e,
              appAtStart:
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRApplications.GetSceneApplicationKey(),
              position: null != t ? a._[t] : void 0,
            }),
            (this.m_dashboardStartTime = new Date().getTime()),
            this.BroadcastDashboardSessionId();
        }
        EndDashboardSession(e) {
          this.m_dashboardSession
            ? this.m_dashboardEndTimer
              ? console.log("Somebody called EndDashboardSession twice")
              : (this.RecordDashboardSessionDuration(),
                (this.m_dashboardSession.dismissedBy = e),
                (this.m_dashboardEndTimer = setTimeout(() => {
                  this.CommitDashboardSession();
                }, 5e3)))
            : console.log(
                "Somebody called EndDashboardSession when one wasn't running",
              );
        }
        RecordDashboardSessionDuration() {
          this.m_dashboardSession.duration ||
            (this.m_dashboardSession.duration = Math.round(
              (new Date().getTime() - this.m_dashboardStartTime) / 1e3,
            ));
        }
        CommitDashboardSession() {
          this.m_dashboardEndTimer &&
            (clearTimeout(this.m_dashboardEndTimer),
            (this.m_dashboardEndTimer = null)),
            (this.m_dashboardSession.appAtEnd =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRApplications.GetSceneApplicationKey()),
            this.AddRow("SteamVRDashboardSession", this.m_dashboardSession),
            (this.m_dashboardSession = null),
            (this.m_dashboardStartTime = null),
            (this.m_lastDashboardSessionId = 0);
        }
        BroadcastDashboardSessionId() {
          let e = {
            type: "set_dashboard_session_id",
            id: this.m_dashboardSession
              ? this.m_dashboardSession.dashboardSessionId
              : 0,
          };
          this.m_mailbox.SendMessage("ogs_client", e);
        }
      }
      (0, i.gn)([o.ZP], c.prototype, "onSetDashboardSessionId", null);
      let d = null;
    },
    7008: (e, t, n) => {
      n.d(t, { R: () => a, d: () => l });
      var i = n(7294),
        s = n(3935),
        o = n(8980),
        r = n(1569);
      class a extends i.Component {
        constructor(e) {
          super(e),
            (this.m_elemPortalContainer = null),
            (this.m_elemPortal = null),
            (this.m_refAnchor = i.createRef()),
            (this.state = { bInDOM: !1 }),
            (this.m_elemPortal = document.createElement("div")),
            this.m_elemPortal.classList.add(a.ELEM_CLASS);
        }
        get anchorElement() {
          return this.m_refAnchor.current;
        }
        get portalContainer() {
          var e;
          return this.m_refAnchor.current
            ? (null === this.m_elemPortalContainer &&
                (this.m_elemPortalContainer = (0, o.gZ)(
                  [
                    "body",
                    "vsg-app",
                    "vsg-mountable",
                    ...(null !== (e = this.props.allowableParentSelectors) &&
                    void 0 !== e
                      ? e
                      : []),
                  ],
                  this.m_refAnchor.current,
                )),
              this.m_elemPortalContainer)
            : null;
        }
        componentDidMount() {
          this.portalContainer.appendChild(this.m_elemPortal),
            this.setState({ bInDOM: !0 }, this.props.onPortalDidMount);
        }
        componentWillUnmount() {
          this.portalContainer.removeChild(this.m_elemPortal);
        }
        render() {
          return this.props.children
            ? (delete Object.assign({}, this.props).allowableParentSelectors,
              i.createElement(
                i.Fragment,
                null,
                i.createElement("div", {
                  className: "ParentPortalAnchor",
                  ref: this.m_refAnchor,
                }),
                this.m_elemPortal &&
                  this.state.bInDOM &&
                  this.props.children &&
                  s.createPortal(this.props.children, this.m_elemPortal),
              ))
            : null;
        }
      }
      a.ELEM_CLASS = "v-parent-portal";
      class l extends i.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_refPanelAnchor = i.createRef()),
            (this.m_sPanelAnchorID =
              null !== (t = e.panelAnchorID) && void 0 !== t
                ? t
                : Math.random().toString().substring(2));
        }
        get panelAnchor() {
          return this.m_refPanelAnchor.current;
        }
        render() {
          return i.createElement(
            r.at,
            { ref: this.m_refPanelAnchor, latched: this.props.latched },
            i.createElement(r.wx, { id: this.m_sPanelAnchorID }),
            i.createElement(
              a,
              Object.assign({}, this.props),
              i.createElement(
                r.wx,
                { parent_id: this.m_sPanelAnchorID },
                this.props.children,
              ),
            ),
          );
        }
      }
    },
    775: (e, t, n) => {
      n.d(t, { n: () => d });
      var i = n(655),
        s = n(7056),
        o = n(9669),
        r = n.n(o),
        a = n(2188);
      class l {
        constructor() {
          this.contents = a.LO.map();
        }
      }
      (0, i.gn)([a.LO], l.prototype, "contents", void 0);
      class c {
        constructor() {
          this.m_Containers = a.LO.map();
        }
        Init() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.AddSubscribedContainer("25769803776"),
              yield this.UpdatePaths();
          });
        }
        AddSubscribedContainer(e) {
          if (!this.m_Containers.has(e)) {
            let t = new l();
            (t.handle = e), this.m_Containers.set(e, t);
          }
        }
        UpdateContainer(e, t) {
          this.AddSubscribedContainer(e);
          let n = this.m_Containers.get(e);
          n.contents.clear(),
            t.entries.forEach((e) => {
              null != e.path && n.contents.set(e.path, e);
            });
        }
        QueryContainer(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              r()
                .get("/properties.json?container=" + e)
                .then((n) => {
                  t([e, n.data]);
                })
                .catch((t) => {
                  n([e, t]);
                });
            });
          });
        }
        UpdatePaths() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let e = [];
            this.m_Containers.forEach((t) => {
              e.push(this.QueryContainer(t.handle));
            });
            try {
              (yield Promise.all(e)).forEach((e) => {
                2 != e.length
                  ? console.log(
                      "Failed to update container. ",
                      e.length,
                      "entries in array",
                    )
                  : "string" == typeof e[1]
                    ? console.log(
                        "Failed to update container ",
                        e[0],
                        ":",
                        e[1],
                      )
                    : this.UpdateContainer(e[0], e[1]);
              });
            } catch (e) {
              throw (console.log(e), e);
            }
          });
        }
        GetAllActions(e) {
          if (!this.m_Containers.has(e)) return;
          let t = [];
          return (
            this.m_Containers.get(e).contents.forEach((e) => {
              "k_unActionPropertyTag" == e.type &&
                null != e.path &&
                t.push(e.path);
            }),
            t
          );
        }
        GetActionValue(e, t) {
          if (!this.m_Containers.has(e)) return;
          let n = this.m_Containers.get(e);
          if (!n.contents.has(t)) return;
          let i = n.contents.get(t);
          return "k_unActionPropertyTag" == i.type ? i.value : void 0;
        }
        GetAllInputValues(e) {
          if (!this.m_Containers.has(e)) return;
          let t = [];
          return (
            this.m_Containers.get(e).contents.forEach((e) => {
              "k_unInputValuePropertyTag" == e.type &&
                null != e.path &&
                t.push(e.path);
            }),
            t
          );
        }
        GetInputValue(e, t) {
          if (!this.m_Containers.has(e)) return;
          let n = this.m_Containers.get(e);
          if (!n.contents.has(t)) return;
          let i = n.contents.get(t);
          if ("k_unInputValuePropertyTag" != i.type) return;
          let s = i.value;
          return s.length < 1 ? void 0 : s[0];
        }
        GetScalarInputValue(e, t) {
          let n = this.GetInputValue(e, t);
          return null == n || "scalar" != n.type ? 0 : n.value;
        }
        GetBooleanInputValue(e, t) {
          let n = this.GetInputValue(e, t);
          return null != n && "boolean" == n.type && n.value;
        }
      }
      (0, i.gn)([a.LO], c.prototype, "m_Containers", void 0),
        (0, i.gn)([s.ak], c.prototype, "AddSubscribedContainer", null),
        (0, i.gn)([a.aD], c.prototype, "UpdateContainer", null),
        (0, i.gn)([s.ak], c.prototype, "GetAllActions", null),
        (0, i.gn)([s.ak], c.prototype, "GetActionValue", null),
        (0, i.gn)([s.ak], c.prototype, "GetAllInputValues", null),
        (0, i.gn)([s.ak], c.prototype, "GetInputValue", null),
        (0, i.gn)([s.ak], c.prototype, "GetScalarInputValue", null),
        (0, i.gn)([s.ak], c.prototype, "GetBooleanInputValue", null);
      const d = new c();
      window.paths = d;
    },
    7047: (e, t, n) => {
      n.d(t, {
        Bh: () => r,
        F: () => c,
        FE: () => s,
        TA: () => l,
        Xc: () => o,
        aD: () => a,
        aR: () => u,
        l2: () => d,
      });
      var i = n(3019);
      const s = i.BinaryReader.prototype,
        o = i.BinaryWriter.prototype;
      function r(e) {
        let t = {};
        const { fields: n } = e;
        for (let e in n) {
          const i = n[e];
          t[i.n] = i;
        }
        return t;
      }
      function a(e, t) {
        const { proto: n, fields: s } = e,
          o = new n();
        if (null == t) return o;
        for (let e in s) {
          const { n, c: r, r: a, d: l, q: c } = s[e];
          if (!t.hasOwnProperty(e)) continue;
          const d = t[e];
          r
            ? a
              ? i.Message.setRepeatedWrapperField(
                  o,
                  n,
                  Array.isArray(d) ? d.map((e) => r.fromObject(e)) : [],
                )
              : i.Message.setWrapperField(o, n, r.fromObject(d))
            : i.Message.setField(o, n, d);
        }
        return o;
      }
      function l(e, t, n) {
        const { proto: s, fields: o } = e;
        let r = {};
        for (let e in o) {
          const { n: s, c: a, r: l, d: c, q: d } = o[e];
          if (a)
            if (l)
              r[e] = i.Message.toObjectList(
                i.Message.getRepeatedWrapperField(n, a, s),
                a.toObject,
                t,
              );
            else {
              const o = i.Message.getWrapperField(n, a, s, d ? 1 : 0);
              o && (r[e] = a.toObject(t, o));
            }
          else {
            const t = i.Message.getFieldWithDefault(
              n,
              s,
              void 0 !== c ? c : null,
            );
            (null !== t || d) && (r[e] = t);
          }
        }
        return t && (r.$jspbMessageInstance = n), r;
      }
      function c(e, t, n) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          const s = e[n.getFieldNumber()];
          if (s) {
            const { n: e, c: o, r, d: a, q: l, br: c } = s;
            if (o) {
              const s = new o();
              n.readMessage(s, o.deserializeBinaryFromReader),
                r
                  ? i.Message.addToRepeatedWrapperField(t, e, s, o)
                  : i.Message.setWrapperField(t, e, s);
            } else if (c) {
              const s = c.call(n);
              r
                ? i.Message.addToRepeatedField(t, e, s)
                : i.Message.setField(t, e, s);
            } else
              console.assert(
                !!c,
                `Reader func not set for field number ${e} in class ${o}`,
              ),
                n.skipField();
          } else n.skipField();
        }
        return t;
      }
      function d(e, t, n) {
        const { fields: s } = e;
        for (let e in s) {
          const { n: o, c: r, r: a, d: l, q: c, bw: d } = s[e];
          if (r)
            if (a) {
              const e = i.Message.getRepeatedWrapperField(t, r, o);
              ((e && e.length) || c) &&
                n.writeRepeatedMessage(o, e, r.serializeBinaryToWriter);
            } else {
              const e = i.Message.getWrapperField(t, r, o, c ? 1 : 0);
              e && n.writeMessage(o, e, r.serializeBinaryToWriter);
            }
          else if (d) {
            const e = i.Message.getField(t, o);
            void 0 !== e && d.call(n, o, e);
          } else
            console.assert(
              !!d,
              `Writer func not set for field number ${o} in class ${r}`,
            );
        }
      }
      function u(e) {
        const t = e.proto;
        for (const n in e.fields) {
          const s = e.fields[n],
            { n: o, c: r, r: a, d: l, q: c } = s;
          s.hasOwnProperty("d")
            ? (t.prototype[n] = p(i.Message.getFieldWithDefault, o, l))
            : (t.prototype[n] = r
                ? a
                  ? p(i.Message.getRepeatedWrapperField, r, o)
                  : h(r, o)
                : p(i.Message.getField, o)),
            (t.prototype[`set_${n}`] = m(
              r
                ? a
                  ? i.Message.setRepeatedWrapperField
                  : i.Message.setWrapperField
                : i.Message.setField,
              o,
            )),
            a && (t.prototype[`add_${n}`] = g(o, r));
        }
      }
      function p(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function h(e, t) {
        return function (n = !0) {
          return i.Message.getWrapperField(this, e, t, n ? 1 : 0);
        };
      }
      function m(e, t) {
        return function (n) {
          return e(this, t, n);
        };
      }
      function g(e, t) {
        return t
          ? function (n, s) {
              return i.Message.addToRepeatedWrapperField(this, e, n, t, s);
            }
          : function (t, n) {
              i.Message.addToRepeatedField(this, e, t, n);
            };
      }
    },
    6821: (e, t, n) => {
      n.d(t, { W: () => s });
      const i = new Map();
      function s(e) {
        const t = e.getVRPathPropertyKey(),
          n = e.serializeBase64String(),
          s = i.get(t);
        (s && s == n) ||
          (i.set(t, n),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRPathProperties.SetStringPathProperty(t, n));
      }
    },
    8980: (e, t, n) => {
      n.d(t, {
        Fc: () => d,
        LJ: () => u,
        aB: () => g,
        cB: () => h,
        gZ: () => p,
        kB: () => m,
      });
      var i = n(655),
        s = n(7294),
        o = n(7056),
        r = n(2188),
        a = n(1628),
        l = n(7176),
        c = n(1569);
      function d(e) {
        let t = window.location.search.substring(1).split("&");
        for (let n = 0; n < t.length; n++) {
          let i = t[n].split("=");
          if (decodeURIComponent(i[0]).toUpperCase() == e.toUpperCase())
            return decodeURIComponent(i[1]);
        }
        return "";
      }
      function u(...e) {
        return e
          .filter((e) => null != e && ("string" == typeof e || e[1]))
          .map((e) => ("string" == typeof e ? e : e[0]))
          .join(" ");
      }
      function p(e, t) {
        let n = t;
        for (; n.parentElement && !e.some((e) => n.matches(e)); )
          n = n.parentElement;
        return n;
      }
      class h {
        constructor() {
          (this.onScroll = null),
            (this.onScrollStop = null),
            (this.m_elem = null),
            (this.m_rScrollableParents = []),
            (this.m_bScrolling = !1),
            (this.m_scrollStopTimeoutHandle = 0);
        }
        ref(e) {
          this.m_elem && this.cleanup(),
            (this.m_elem = e),
            this.updateScrollableParents();
        }
        get isScrolling() {
          return this.m_bScrolling;
        }
        updateScrollableParents() {
          for (let e of this.m_rScrollableParents)
            e.removeEventListener("scroll", this.onParentScroll);
          this.m_rScrollableParents = (function (e) {
            let t = [];
            if (!e) return t;
            let n = e.parentElement;
            for (; n; ) {
              const e = n.scrollWidth > n.clientWidth,
                i = n.scrollHeight > n.clientHeight;
              (e || i) && t.push(n), (n = n.parentElement);
            }
            return t;
          })(this.m_elem);
          for (let e of this.m_rScrollableParents)
            e.addEventListener("scroll", this.onParentScroll);
        }
        cleanup() {
          for (let e of this.m_rScrollableParents)
            e.removeEventListener("scroll", this.onParentScroll);
          (this.m_rScrollableParents = []),
            (this.m_elem = null),
            this.clearScrollStopTimeout();
        }
        onParentScroll() {
          var e;
          this.clearScrollStopTimeout(),
            (this.m_bScrolling = !0),
            (this.m_scrollStopTimeoutHandle = setTimeout(
              this.onScrollStopTimeout,
              50,
            )),
            null === (e = this.onScroll) || void 0 === e || e.call(this);
        }
        clearScrollStopTimeout() {
          clearTimeout(this.m_scrollStopTimeoutHandle),
            (this.m_scrollStopTimeoutHandle = 0);
        }
        onScrollStopTimeout() {
          var e;
          this.m_bScrolling &&
            (null === (e = this.onScrollStop) || void 0 === e || e.call(this)),
            (this.m_bScrolling = !1);
        }
      }
      (0, i.gn)([r.LO], h.prototype, "m_bScrolling", void 0),
        (0, i.gn)([o.ZP], h.prototype, "ref", null),
        (0, i.gn)([r.Fl], h.prototype, "isScrolling", null),
        (0, i.gn)([o.ZP], h.prototype, "onParentScroll", null),
        (0, i.gn)([o.ZP], h.prototype, "onScrollStopTimeout", null);
      class m {
        constructor() {
          (this.m_settingsSchemaPromiseCancel = null),
            (this.m_autorunDisposer = null),
            this.start();
        }
        start() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const [e, t] = (function (e) {
              let t = !1;
              return [
                new Promise((n, i) => {
                  e.then((e) => (t ? i({ canceled: !0 }) : n(e))).catch((e) =>
                    i(t ? { canceled: !0 } : e),
                  );
                }),
                () => (t = !0),
              ];
            })(a.G3.AwaitInitialSettingsSchema());
            (this.m_settingsSchemaPromiseCancel = t),
              yield e,
              (this.m_autorunDisposer = (0, r.EH)(this.updateFidelity));
          });
        }
        updateFidelity() {
          var e, t;
          let n =
            null !== (e = a.G3.settings.get(l.Ek)) && void 0 !== e
              ? e
              : c.LL.Auto;
          n == c.LL.Auto &&
            (n =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.GetRecommendedOverlayRenderQuality()) &&
              void 0 !== t
                ? t
                : c.LL.High),
            (0, c.Op)() == c.qA.Overlay && n != c.LL.High
              ? document.documentElement.classList.add(
                  m.AnimationsDisabledClass,
                )
              : document.documentElement.classList.remove(
                  m.AnimationsDisabledClass,
                );
        }
        cleanup() {
          var e, t;
          null === (e = this.m_settingsSchemaPromiseCancel) ||
            void 0 === e ||
            e.call(this),
            (this.m_settingsSchemaPromiseCancel = null),
            null === (t = this.m_autorunDisposer) ||
              void 0 === t ||
              t.call(this),
            (this.m_autorunDisposer = null),
            document.documentElement.classList.remove(
              m.AnimationsDisabledClass,
            );
        }
      }
      function g() {
        const [e, t] = s.useState(null),
          n = s.useCallback(() => {
            t(
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRDashboardManager.GetKeyboardInputInfo(),
            );
          }, []);
        return (
          s.useEffect(n, []),
          s.useEffect(() => {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForKeyboardVisibilityChangedEvents(() => n());
            return () => (null == e ? void 0 : e.unregister());
          }, [n]),
          e
        );
      }
      (m.AnimationsDisabledClass = "NoAnimations"),
        (0, i.gn)([o.ZP], m.prototype, "updateFidelity", null);
    },
    9942: (e, t, n) => {
      n.d(t, { H: () => l });
      var i = n(655),
        s = n(1569),
        o = n(2188),
        r = n(7056),
        a = n(7176);
      class l {
        constructor() {
          (this.m_sceneApplicationState = s.xY.None),
            (this.m_sceneAppName = ""),
            (this.m_sceneAppKey = ""),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_noAppTimeout = void 0),
            (this.m_mountedTime = void 0),
            (this.m_mountedTime = new Date().getTime()),
            (this.m_sceneApplicationStateChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForSceneApplicationStateChangedEvents(
                    this.updateTransitionState,
                  )),
            this.updateTransitionState();
        }
        get SceneApplicationState() {
          return this.m_sceneApplicationState;
        }
        get SceneAppName() {
          return this.m_sceneAppName;
        }
        get SceneAppKey() {
          return this.m_sceneAppKey;
        }
        get SceneAppIsHome() {
          return this.m_sceneAppKey == a.hK;
        }
        static get Instance() {
          return l.s_Instance || (l.s_Instance = new l()), l.s_Instance;
        }
        updateTransitionState() {
          if (!VRHTML) return;
          let e = VRHTML.VRApplications.GetSceneApplicationState();
          e == s.xY.Starting
            ? (this.m_sceneApplicationState == s.xY.Quitting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = e),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : e == s.xY.Quitting
              ? (this.m_sceneApplicationState == s.xY.Starting &&
                  this.resetLatchedValued(),
                (this.m_sceneApplicationState = e),
                this.updateLatchedValues(),
                this.cancelUnresponsiveTimeout(),
                this.cancelNoAppTimeout())
              : e == s.xY.Running
                ? ((this.m_sceneApplicationState = e),
                  this.cancelUnresponsiveTimeout(),
                  this.cancelNoAppTimeout(),
                  this.updateLatchedValues())
                : e == s.xY.None
                  ? (this.cancelUnresponsiveTimeout(),
                    this.m_sceneApplicationState != s.xY.None &&
                      this.startNoAppTimer())
                  : e == s.xY.Waiting &&
                    (this.m_sceneApplicationState != s.xY.Waiting &&
                      this.startUnresponsiveTimer(),
                    this.cancelNoAppTimeout()),
            this.log("updateTransitionState: " + s.xY[e]),
            this.log("this.m_sceneAppKey: " + this.m_sceneAppKey),
            this.log("this.m_sceneAppName: " + this.m_sceneAppName),
            this.log(
              "this.m_sceneApplicationState: " + this.m_sceneApplicationState,
            );
        }
        onUnresponsiveTimeout() {
          clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_sceneApplicationState = s.xY.Waiting),
            this.updateLatchedValues();
        }
        onNoAppTimeout() {
          clearTimeout(this.m_noAppTimeout),
            (this.m_noAppTimeout = void 0),
            VRHTML.VRApplications.GetSceneApplicationState() == s.xY.None &&
              this.resetLatchedValued();
        }
        updateLatchedValues() {
          if (VRHTML)
            if (
              VRHTML.VRApplications.GetSceneApplicationState() == s.xY.Starting
            ) {
              let e = VRHTML.VRApplications.GetStartingApplicationKey();
              e && e.length > 0 && (this.m_sceneAppKey = e);
              let t = VRHTML.GetStartingAppName();
              t && t.length > 0 && (this.m_sceneAppName = t);
            } else {
              let e = VRHTML.VRApplications.GetSceneApplicationKey();
              e && e.length > 0 && (this.m_sceneAppKey = e);
              let t = VRHTML.GetCurrentSceneFocusAppName();
              t && t.length > 0 && (this.m_sceneAppName = t);
            }
        }
        resetLatchedValued() {
          (this.m_sceneAppName = ""),
            (this.m_sceneAppKey = ""),
            (this.m_sceneApplicationState = s.xY.None);
        }
        cancelUnresponsiveTimeout() {
          this.m_unresponsiveTimeout &&
            (clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0));
        }
        startUnresponsiveTimer() {
          void 0 === this.m_unresponsiveTimeout &&
            (this.m_unresponsiveTimeout = setTimeout(
              this.onUnresponsiveTimeout,
              l.kUnresponsiveDelayMs,
            ));
        }
        startNoAppTimer() {
          void 0 === this.m_noAppTimeout &&
            (this.m_noAppTimeout = setTimeout(
              this.onNoAppTimeout,
              l.kUnresponsiveDelayMs,
            ));
        }
        cancelNoAppTimeout() {
          this.m_noAppTimeout &&
            (clearTimeout(this.m_noAppTimeout), (this.m_noAppTimeout = void 0));
        }
        log(e) {
          new Date().getTime(), this.m_mountedTime;
        }
      }
      (l.s_Instance = null),
        (l.kUnresponsiveDelayMs = 2e3),
        (l.kNoAppDelayMs = 2e3),
        (0, i.gn)([o.Fl], l.prototype, "SceneApplicationState", null),
        (0, i.gn)([o.Fl], l.prototype, "SceneAppName", null),
        (0, i.gn)([o.Fl], l.prototype, "SceneAppKey", null),
        (0, i.gn)([o.Fl], l.prototype, "SceneAppIsHome", null),
        (0, i.gn)([o.LO], l.prototype, "m_sceneApplicationState", void 0),
        (0, i.gn)([o.LO], l.prototype, "m_sceneAppName", void 0),
        (0, i.gn)([o.LO], l.prototype, "m_sceneAppKey", void 0),
        (0, i.gn)([r.ZP], l.prototype, "updateTransitionState", null),
        (0, i.gn)([r.ZP], l.prototype, "onUnresponsiveTimeout", null),
        (0, i.gn)([r.ZP], l.prototype, "onNoAppTimeout", null),
        (0, i.gn)([r.ZP], l.prototype, "updateLatchedValues", null),
        (0, i.gn)([r.ZP], l.prototype, "resetLatchedValued", null),
        (0, i.gn)([r.ZP], l.prototype, "cancelUnresponsiveTimeout", null),
        (0, i.gn)([r.ZP], l.prototype, "startUnresponsiveTimer", null),
        (0, i.gn)([r.ZP], l.prototype, "startNoAppTimer", null),
        (0, i.gn)([r.ZP], l.prototype, "cancelNoAppTimeout", null),
        (0, i.gn)([r.ZP], l.prototype, "log", null);
    },
    138: (e, t, n) => {
      n.d(t, { l: () => a });
      var i = n(655),
        s = n(2188),
        o = n(7056);
      class r {
        constructor() {
          (this.m_rgMutualCapabilities = []),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.RegisterForMutualSteamCapabilitiesChanged(
                this.UpdateCapabilities,
              ),
            this.UpdateCapabilities();
        }
        BHasMutualCapabilities() {
          return null != this.m_rgMutualCapabilities;
        }
        BHasMutualCapability(e) {
          var t;
          return null === (t = this.m_rgMutualCapabilities) || void 0 === t
            ? void 0
            : t.includes(e);
        }
        UpdateCapabilities() {
          this.m_rgMutualCapabilities =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRClientInternal.GetMutualSteamCapabilities();
        }
      }
      (0, i.gn)([s.LO], r.prototype, "m_rgMutualCapabilities", void 0),
        (0, i.gn)([o.ZP], r.prototype, "UpdateCapabilities", null);
      const a = new r();
      window.SteamMutualCapabilities = a;
    },
    6166: (e, t, n) => {
      n.d(t, { s: () => d });
      var i = n(655),
        s = n(7056),
        o = n(9669),
        r = n.n(o),
        a = n(2188);
      class l {
        constructor(e) {
          (this.m_communityData = void 0),
            (this.m_bLoadingData = !1),
            (this.m_sSteamID = void 0),
            (this.m_dateLastUpdate = void 0),
            (this.m_sSteamID = e),
            e.length > 0 && this.EnsureCommunityDataLoaded();
        }
        get community_data_ready() {
          return void 0 !== this.m_communityData;
        }
        get avatar_url() {
          return this.m_communityData && this.m_communityData.avatar_url;
        }
        get persona_name() {
          return this.m_communityData && this.m_communityData.persona_name;
        }
        get player_level() {
          return this.m_communityData && this.m_communityData.level;
        }
        get player_level_class() {
          return this.m_communityData && this.m_communityData.level_class;
        }
        get player_badge() {
          return this.m_communityData && this.m_communityData.favorite_badge;
        }
        get player_in_game() {
          return this.m_communityData && this.m_communityData.in_game;
        }
        EnsureCommunityDataLoaded() {
          if (void 0 === this.m_communityData && !this.m_bLoadingData) {
            this.m_bLoadingData = !0;
            let e = "https://steamcommunity.com/";
            r()
              .get(e + "miniprofile/s" + this.m_sSteamID + "/json")
              .then((e) => {
                let t = e.data;
                t &&
                  t.avatar_url &&
                  ((this.m_communityData = t),
                  (this.m_dateLastUpdate = new Date())),
                  (this.m_bLoadingData = !1);
              })
              .catch((e) => {
                console.log(e), (this.m_bLoadingData = !1);
              });
          }
        }
      }
      (0, i.gn)([a.LO], l.prototype, "m_communityData", void 0),
        (0, i.gn)([s.ak], l.prototype, "EnsureCommunityDataLoaded", null);
      class c {
        constructor() {
          this.m_SteamCommunityUsers = a.LO.map();
        }
        GetUserInformation(e) {
          return (
            this.m_SteamCommunityUsers.has(e) || this.RequestUserInformation(e),
            this.m_SteamCommunityUsers.get(e)
          );
        }
        RequestUserInformation(e) {
          this.m_SteamCommunityUsers.hasOwnProperty(e) ||
            this.m_SteamCommunityUsers.set(e, new l(e));
        }
      }
      (0, i.gn)([a.LO], c.prototype, "m_SteamCommunityUsers", void 0),
        (0, i.gn)([s.ak], c.prototype, "GetUserInformation", null),
        (0, i.gn)([s.ak], c.prototype, "RequestUserInformation", null);
      const d = new c();
      window.steamcommunity = d;
    },
    9897: (e, t, n) => {
      n.d(t, { f: () => r });
      var i = n(655),
        s = n(7056),
        o = n(2188);
      class r {
        constructor() {
          (this.m_volumeChangedEventHandle = null),
            (this.m_nVolume = 0),
            (this.m_nMirrorVolume = 0),
            (this.m_nMicrophoneVolume = 0),
            (this.m_bMuted = !1),
            (this.m_bMirrorMuted = !1),
            (this.m_bMicrophoneMuted = !1),
            (this.m_volumeChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForVolumeChangedEvents(
                    this.onSystemVolumeChanged,
                  )),
            this.onSystemVolumeChanged();
        }
        static get Instance() {
          return r.s_Instance || (r.s_Instance = new r()), r.s_Instance;
        }
        get muted() {
          return this.m_bMuted;
        }
        get mirrorMuted() {
          return this.m_bMirrorMuted;
        }
        get microphoneMuted() {
          return this.m_bMicrophoneMuted;
        }
        get volume() {
          return this.m_nVolume;
        }
        get mirrorVolume() {
          return this.m_nMirrorVolume;
        }
        get microphoneVolume() {
          return this.m_nMicrophoneVolume;
        }
        cleanup() {
          this.m_volumeChangedEventHandle &&
            (this.m_volumeChangedEventHandle.unregister(),
            (this.m_volumeChangedEventHandle = null));
        }
        toggleMute() {
          (this.m_bMuted = !this.m_bMuted),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterSoundVolumeMute(this.m_bMuted);
        }
        toggleMirrorMute() {
          (this.m_bMirrorMuted = !this.m_bMirrorMuted),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMirrorSoundVolumeMute(
                this.m_bMirrorMuted,
              );
        }
        toggleMicrophoneMute() {
          (this.m_bMicrophoneMuted = !this.m_bMicrophoneMuted),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterMicrophoneMute(
                this.m_bMicrophoneMuted,
              );
        }
        setVolume(e) {
          (e = Math.max(0, Math.min(1, e))) != this.m_nVolume &&
            ((this.m_nVolume = e),
            (this.m_bMuted = 0 == e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterSoundVolume(this.m_nVolume),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterSoundVolumeMute(this.m_bMuted));
        }
        setMirrorVolume(e) {
          (e = Math.max(0, Math.min(1, e))) != this.m_nMirrorVolume &&
            ((this.m_nMirrorVolume = e),
            (this.m_bMirrorMuted = 0 == e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMirrorSoundVolume(this.m_nMirrorVolume),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMirrorSoundVolumeMute(
                this.m_bMirrorMuted,
              ));
        }
        setMicrophoneVolume(e) {
          (e = Math.max(0, Math.min(1, e))) != this.m_nMicrophoneVolume &&
            ((this.m_nMicrophoneVolume = e),
            (this.m_bMicrophoneMuted = 0 == e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterMicrophoneVolume(
                this.m_nMicrophoneVolume,
              ),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterMicrophoneMute(
                this.m_bMicrophoneMuted,
              ));
        }
        onSystemVolumeChanged() {
          VRHTML &&
            ((this.m_nVolume = VRHTML.VRAudioDevices.GetMasterSoundVolume()),
            (this.m_bMuted = VRHTML.VRAudioDevices.IsMasterSoundVolumeMute()),
            (this.m_nMirrorVolume =
              VRHTML.VRAudioDevices.GetMirrorSoundVolume()),
            (this.m_bMirrorMuted =
              VRHTML.VRAudioDevices.IsMirrorSoundVolumeMute()),
            (this.m_nMicrophoneVolume =
              VRHTML.VRAudioDevices.GetMasterMicrophoneVolume()),
            (this.m_bMicrophoneMuted =
              VRHTML.VRAudioDevices.IsMasterMicrophoneMute()));
        }
      }
      (r.s_Instance = null),
        (0, i.gn)([o.LO], r.prototype, "m_nVolume", void 0),
        (0, i.gn)([o.LO], r.prototype, "m_nMirrorVolume", void 0),
        (0, i.gn)([o.LO], r.prototype, "m_nMicrophoneVolume", void 0),
        (0, i.gn)([o.LO], r.prototype, "m_bMuted", void 0),
        (0, i.gn)([o.LO], r.prototype, "m_bMirrorMuted", void 0),
        (0, i.gn)([o.LO], r.prototype, "m_bMicrophoneMuted", void 0),
        (0, i.gn)([o.Fl], r.prototype, "muted", null),
        (0, i.gn)([o.Fl], r.prototype, "mirrorMuted", null),
        (0, i.gn)([o.Fl], r.prototype, "microphoneMuted", null),
        (0, i.gn)([o.Fl], r.prototype, "volume", null),
        (0, i.gn)([o.Fl], r.prototype, "mirrorVolume", null),
        (0, i.gn)([o.Fl], r.prototype, "microphoneVolume", null),
        (0, i.gn)([s.ZP], r.prototype, "toggleMute", null),
        (0, i.gn)([s.ZP], r.prototype, "toggleMirrorMute", null),
        (0, i.gn)([s.ZP], r.prototype, "toggleMicrophoneMute", null),
        (0, i.gn)([s.ZP], r.prototype, "setVolume", null),
        (0, i.gn)([s.ZP], r.prototype, "setMirrorVolume", null),
        (0, i.gn)([s.ZP], r.prototype, "setMicrophoneVolume", null),
        (0, i.gn)([s.ZP], r.prototype, "onSystemVolumeChanged", null);
    },
    4783: (e, t, n) => {
      n.d(t, { Q: () => a });
      var i = n(655),
        s = n(7056),
        o = n(2188);
      class r {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.vecMessageBuffer = o.LO.array());
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vconsole..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener("message", (e) => {
                this.OnWebSocketMessage(e);
              }),
              this.m_wsWebSocketToServer.addEventListener("close", (e) => {
                this.OnWebSocketClose(e);
              });
          });
        }
        Init() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.connected ||
              ((this.vecMessages = []),
              (0, o.EH)(
                () => {
                  this.vecMessages = this.vecMessages
                    .concat(
                      this.vecMessageBuffer.splice(
                        0,
                        this.vecMessageBuffer.length,
                      ),
                    )
                    .map((e, t) => ({ item: e, index: t }))
                    .sort(
                      (e, t) =>
                        e.item.nTimestamp - t.item.nTimestamp ||
                        e.index - t.index,
                    )
                    .map(({ item: e }) => e);
                },
                { delay: 300 },
              ),
              yield this.OpenWebSocketToHost());
          });
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("console_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("console_close");
            });
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
          let t = JSON.parse(e.data);
          this.OnConsoleMessage(t);
        }
        OnConsoleMessage(e) {
          let t = e.sMessage.indexOf("-");
          (e.sTimestamp = e.sMessage.substr(0, t)),
            (e.sMessage = e.sMessage.substr(t + 1)),
            this.vecMessageBuffer.push(e);
        }
      }
      (0, i.gn)([o.LO], r.prototype, "connected", void 0),
        (0, i.gn)([o.LO], r.prototype, "vecMessages", void 0),
        (0, i.gn)([s.ak], r.prototype, "OpenWebSocketToHost", null),
        (0, i.gn)([s.ak], r.prototype, "OnWebSocketOpen", null),
        (0, i.gn)([s.ak], r.prototype, "OnWebSocketClose", null),
        (0, i.gn)([s.ak], r.prototype, "WebSocketSend", null),
        (0, i.gn)([s.ak], r.prototype, "OnWebSocketMessage", null);
      const a = new r();
      window.VRConsoleState = a;
    },
    328: (e, t, n) => {
      n.d(t, { fH: () => c, n5: () => a, q0: () => d, u8: () => o });
      var i = n(4820);
      const s = 865 != n.j ? 5e3 : null;
      function o(e) {
        try {
          return i.Vg.deserializeBinary(e).toObject();
        } catch (e) {
          return void console.error(
            "Received a VRGamepadUI Message but couldn't deserialize the header!",
            null == e ? void 0 : e.message,
          );
        }
      }
      function r(e) {
        try {
          return { result: e() };
        } catch (e) {
          return { error: e };
        }
      }
      var a;
      !(function (e) {
        (e[(e.Success = 0)] = "Success"),
          (e[(e.HeaderSerializationFailure = 1)] =
            "HeaderSerializationFailure"),
          (e[(e.PayloadSerializationFailure = 2)] =
            "PayloadSerializationFailure"),
          (e[(e.SendFailure = 3)] = "SendFailure");
      })(a || (a = {}));
      class l extends Error {
        constructor(e) {
          var t;
          let n = "";
          switch (null == e ? void 0 : e.origin) {
            case i.Qd.k_CVRGamepadUI_Message_ErrorOrigin_Local:
              n += "Local ";
              break;
            case i.Qd.k_CVRGamepadUI_Message_ErrorOrigin_Remote:
              n += "Remote ";
          }
          (n += (0, i.Ex)(
            null !== (t = null == e ? void 0 : e.error) && void 0 !== t
              ? t
              : i.Cj.k_CVRGamepadUI_Message_ErrorCode_Other,
          )),
            (null == e ? void 0 : e.description) && (n += ": " + e.description),
            super(n),
            (this.error = e);
        }
      }
      class c {
        constructor(e, t) {
          (this.m_mapMethods = new Map()),
            (this.m_Endpoint = e),
            (this.m_mapRequestHandlers = t);
        }
        SetImplementation(e, t) {
          this.m_mapMethods.has(e) &&
            console.error(
              "CVRGamepadUI Message Service already has an existing implementation for method:",
              e,
            ),
            this.m_mapMethods.set(e, t);
        }
        ClearImplementation(e) {
          this.m_mapMethods.delete(e);
        }
        SendErrorResponse(e, t, n) {
          if (null == (null == e ? void 0 : e.message_id)) return;
          const s = new i.pD();
          s.set_error(t),
            s.set_origin(i.Qd.k_CVRGamepadUI_Message_ErrorOrigin_Remote),
            n instanceof Error
              ? s.set_description(n.message)
              : n && "string" == typeof n && s.set_description(n),
            console.error(
              "Sending VRGamepadUI Message Error Response",
              (0, i.Ex)(t),
              ":",
              s.description(),
            );
          const o = {
              message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
              response_to_message_id: e.message_id,
              is_error_response: !0,
            },
            r = this.m_Endpoint.SendVRGamepadUIMessage(o, s);
          r == a.Success ||
            console.error(
              "Failed to send VRGamepadUI Message Error Response:",
              a[r],
              { requestHeader: e, responseHeader: o },
            );
        }
        HandleVRGamepadUIMessageRequest(e, t) {
          console.assert(null == e.response_to_message_id);
          const n = this.m_mapRequestHandlers[e.name];
          if (!n)
            return void this.SendErrorResponse(
              e,
              i.Cj.k_CVRGamepadUI_Message_ErrorCode_UnknownMethod,
              `Unknown VRGamepadUI request name: ${e.name}`,
            );
          const s = this.m_mapMethods.get(n.strMethod);
          if (!s)
            return void this.SendErrorResponse(
              e,
              i.Cj.k_CVRGamepadUI_Message_ErrorCode_UnknownMethod,
              `Unimplemented VRGamepadUI method: ${n.strMethod}`,
            );
          const o = r(() =>
            n.msgClassRequest_t.deserializeBinary(t).toObject(),
          );
          if ("error" in o)
            return void this.SendErrorResponse(
              e,
              i.Cj.k_CVRGamepadUI_Message_ErrorCode_DeserializationFailed,
              o.error,
            );
          const l = o.result,
            c = r(() => s(l));
          if ("error" in c)
            return void this.SendErrorResponse(
              e,
              i.Cj.k_CVRGamepadUI_Message_ErrorCode_Exception,
              c.error,
            );
          let d = c.result;
          null == d && (d = {}),
            (d instanceof Promise ? d : Promise.resolve(d)).then(
              (t) => {
                const s = r(() =>
                  n.msgClassResponse_t.fromObject(null != t ? t : {}),
                );
                if ("error" in s)
                  return void this.SendErrorResponse(
                    e,
                    i.Cj.k_CVRGamepadUI_Message_ErrorCode_SerializationFailed,
                    s.error,
                  );
                const o = {
                    message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
                    response_to_message_id: e.message_id,
                  },
                  l = this.m_Endpoint.SendVRGamepadUIMessage(o, s.result);
                if (l == a.Success);
                else
                  switch (l) {
                    case a.HeaderSerializationFailure:
                    case a.PayloadSerializationFailure:
                      this.SendErrorResponse(
                        e,
                        i.Cj
                          .k_CVRGamepadUI_Message_ErrorCode_SerializationFailed,
                        "Response " + a[l],
                      );
                      break;
                    default:
                      console.error(
                        "Failed to send VRGamepadUI Message Response:",
                        a[l],
                        { requestHeader: e, responseHeader: o },
                      );
                  }
              },
              (t) => {
                this.SendErrorResponse(
                  e,
                  i.Cj.k_CVRGamepadUI_Message_ErrorCode_Rejection,
                  t,
                );
              },
            );
        }
      }
      class d {
        constructor(e) {
          (this.m_mapPendingResponses = new Map()), (this.m_Endpoint = e);
        }
        HandleVRGamepadUIMessageResponse(e, t) {
          if (!this.m_mapPendingResponses.has(e.response_to_message_id))
            return void console.error(
              "Received a VRGamepadUI Message Response to a message we weren't awaiting a response for (or we already received one):",
              e,
            );
          const n = this.m_mapPendingResponses.get(e.response_to_message_id);
          if (
            (this.DeletePendingRequest(e.response_to_message_id),
            e.is_error_response)
          ) {
            const s = r(() => i.pD.deserializeBinary(t).toObject());
            if ("error" in s)
              return void console.error(
                "Received a VRGamepadUI Message error response, but couldn't deserialize it.",
                e,
              );
            const o = new l(s.result);
            return (
              console.warn(
                "Received a VRGamepadUI Message error response",
                o.message,
              ),
              void n.fnReject(o)
            );
          }
          const s = r(() =>
            n.msgExpectedResponseClass_t.deserializeBinary(t).toObject(),
          );
          "error" in s
            ? console.error(
                "Received a VRGamepadUI Message response, but couldn't deserialize it.",
                e,
              )
            : n.fnResolve(s.result);
        }
        SendVRGamepadUIRequest(e, t, n) {
          return new Promise((o, r) => {
            const c = (e) => {
              try {
                r(e);
              } catch (e) {
                console.error(
                  "Error rejecting VRGamepadUI Message request call:",
                  e,
                );
              }
            };
            if (!this.m_Endpoint.IsConnected())
              return void c(
                new l({
                  error: i.Cj.k_CVRGamepadUI_Message_ErrorCode_NotConnected,
                }),
              );
            const d = this.m_Endpoint.CreateVRGamepadUIMessageId(),
              u = window.setTimeout(() => this.HandleTimeout(d), s);
            this.m_mapPendingResponses.set(d, {
              msgExpectedResponseClass_t: n,
              nTimeoutHandle: u,
              fnResolve: (e) => {
                try {
                  o(e);
                } catch (e) {
                  console.error(
                    "Error resolving VRGamepadUI Message request call:",
                    e,
                  );
                }
              },
              fnReject: c,
            });
            const p = { name: e, message_id: d },
              h = this.m_Endpoint.SendVRGamepadUIMessage(p, t);
            h == a.Success ||
              c(
                new l({
                  error: i.Cj.k_CVRGamepadUI_Message_ErrorCode_Other,
                  origin: i.Qd.k_CVRGamepadUI_Message_ErrorOrigin_Local,
                  description: "Request " + a[h],
                }),
              );
          });
        }
        HandleTimeout(e) {
          const t = this.m_mapPendingResponses.get(e);
          this.DeletePendingRequest(e),
            null == t ||
              t.fnReject(
                new l({
                  error: i.Cj.k_CVRGamepadUI_Message_ErrorCode_TimedOut,
                }),
              );
        }
        DeletePendingRequest(e) {
          const t = this.m_mapPendingResponses.get(e);
          this.m_mapPendingResponses.delete(e),
            (null == t ? void 0 : t.nTimeoutHandle) &&
              window.clearTimeout(t.nTimeoutHandle);
        }
      }
    },
    1628: (e, t, n) => {
      n.d(t, {
        A3: () => m,
        BQ: () => p,
        G3: () => _,
        _e: () => u,
        _g: () => h,
      });
      var i = n(655),
        s = n(7056),
        o = n(9669),
        r = n.n(o),
        a = n(2188),
        l = n(1569),
        c = n(7373),
        d = n(7176);
      const u = 16,
        p = 0.2,
        h = 5,
        m = 0.02,
        g = "change_route";
      class S {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new l.Nv()),
            (this.probablyOwnedAppkeys = new Set()),
            (this.showInternalSettings = !1),
            (this.workshopStateChangedCanary = 1),
            (this.onRestartRequired = null),
            (this.onAppRestartRequired = null),
            (this.pendingChanges = new Map()),
            (this.route = []),
            (this.m_mapSettingsLastWriteInfo = new Map()),
            (this.m_bIsSettingApp = !1),
            (this.m_bInitStarted = !1),
            (this.GetAppList = function () {
              return new Promise(function (e, t) {
                r()
                  .get("/app/list.json")
                  .then((t) => {
                    e(t.data.apps);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (e, t) {
                r()
                  .get("/settings_getugc")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (e, t) {
                r()
                  .get("/settings_reloadschema")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (e, t) {
                r()
                  .get("/settings_getinfo")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            });
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
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
        Init(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = e),
              (this.connected = !1),
              (this.settings = new Map()),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, a.EH)(
                () => {
                  let e = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [t, n] of this.pendingChanges.entries())
                      e.push({ name: t, value: n });
                    this.pendingChanges.clear(),
                      r()
                        .post("/settings_set.action", e)
                        .then((e) => {})
                        .catch((t) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            e,
                          );
                        });
                  }
                },
                { delay: 300 },
              ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired,
                );
            let t = [];
            this.m_mailbox.connected || t.push(this.ConnectMailbox()),
              t.push(this.OpenWebSocketToHost()),
              t.push(this.AwaitInitialSettingsSchema()),
              yield Promise.all(t);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch ((0, l.Op)()) {
            case l.qA.Overlay:
              return "settings/overlay";
            case l.qA.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(g, this.OnChangeRouteMessage),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage,
                );
            } catch (e) {
              console.log("Failed to open settings mailbox:" + e);
            }
          });
        }
        OnWorkshopStateChangedMessage(e) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(e) {
          this.m_bIsSettingApp &&
            this.setRoute(e.page, e.section, e.sectionParams);
        }
        OnAppConfigChangedMessage(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (e.deleted_appkeys.length)
              for (let t = this.apps.length - 1; t >= 0; t--)
                e.deleted_appkeys.indexOf(this.apps[t].key) >= 0 &&
                  this.apps.splice(t, 1);
            for (let t of e.updated_apps) {
              for (let e = 0; e < this.apps.length; e++)
                if (this.apps[e].key == t.key) {
                  !this.apps[e].is_autolaunch &&
                    t.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[e] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[e]), {
                        current_scene_process: !1,
                      }),
                      t,
                    )),
                    (t = null);
                  break;
                }
              t && (this.apps.push(t), this.probablyOwnedAppkeys.add(t.key));
            }
          });
        }
        OnRefreshRateChangeMessage(e) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(e.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const e = window.location.hash;
          0 === e.indexOf("#")
            ? (this.route = e.substring(1).split("/"))
            : (this.route = []);
        }
        get routePage() {
          return this.route.length >= 1 ? this.route[0] : null;
        }
        get routePageSection() {
          return this.route.length >= 2 ? this.route[1] : null;
        }
        get routePageSectionParams() {
          return this.route.slice(2);
        }
        setRoutePage(e) {
          this.setRoute(e);
        }
        setRoutePageSection(e) {
          this.setRoute(this.routePage, e);
        }
        setRoutePageSectionParams(e) {
          this.setRoute(this.routePage, this.routePageSection, e);
        }
        setRoute(e, t, n) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (n = null != n ? n : []);
            const i = t ? [e, t, ...n] : [e],
              s = i.join("/");
            window.location.hash.substring(1) != s &&
              ((window.location.hash = s), (this.route = i));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: g,
                page: e,
                section: t,
                sectionParams: n,
              });
        }
        SetDashboardFadeSupression(e, t) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(c.g.k_sDashboardMailboxName, {
              type: c.g.k_sSetDashboardFadeSupressionMessage,
              suppress_dashboard_fade: t,
              for_id: e,
            });
        }
        SetDashboardForceBoundsVisible(e, t, n) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(c.g.k_sDashboardMailboxName, {
              type: c.g.k_sSetDashboardForceBoundsVisible,
              force_bounds_visible: n,
              for_overlay_key: e,
              for_id: t,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            _.GetSettingsInfo().then((e) => {
              this.systemInfo = e;
            }),
            _.GetAppList().then((e) => {
              this.OnVRAppList({ jsonid: "vr_app_list", apps: e });
            });
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
          let t = JSON.parse(e.data);
          switch (t.jsonid) {
            case "vr_settings":
              this.OnVRSettings(t);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(t);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(t);
              break;
            case "vr_app_list":
              this.OnVRAppList(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnVRSettings(e) {
          for (let t in e.values) {
            const n = e.values[t];
            if (
              this.settings.get(t) != n ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, n);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const n = 1e3 * S.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let i = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - i.nLastUserUpdateTime < n)
              return (
                window.clearTimeout(i.nPendingServerValueUpdateTimeout),
                void (i.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  n,
                ))
              );
            window.clearTimeout(i.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(e);
          }
          this.settings.set(e, t);
        }
        UpdateLastUserWriteTimeForSetting(e) {
          const t = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(e)
            ? (this.m_mapSettingsLastWriteInfo.get(e).nLastUserUpdateTime = t)
            : this.m_mapSettingsLastWriteInfo.set(e, {
                nLastUserUpdateTime: t,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(e) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = e.schema),
            (this.showInternalSettings = e.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (0, a.gx)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(e) {
          console.log("Got audio devices"), (this.audioDevices = e);
        }
        OnVRAppList(e) {
          (this.apps = e.apps),
            e.apps.map((e) => this.probablyOwnedAppkeys.add(e.key));
        }
        SettingNameMatches(e, t) {
          if (t.endsWith("*")) {
            let n = t.length - 1;
            return e.substr(0, n) == t.substr(0, n);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let n of t.values)
                if (this.SettingNameMatches(e, n.name)) return n;
          return null;
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let n = this.GetSettingSchema(e);
          null != n
            ? (null != t &&
                ("int" == n.type
                  ? (t = parseInt(t))
                  : "float" == n.type
                    ? (t = parseFloat(t))
                    : "string" == n.type
                      ? (t = "" + t)
                      : "bool" == n.type && (t = !!t)),
              n.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const n = e.split("/");
            if (4 != n.length || "" != n[0] || "settings" != n[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(n[2], n[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(n[2], n[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              r()
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return r()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return r()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let n = Object.assign(Object.assign({}, t), { app: e });
          r().post("/app/setsettings", n);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == n.app) {
              !this.apps[e].is_autolaunch &&
                t.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[e] = Object.assign(
                  Object.assign({}, this.apps[e]),
                  t,
                ));
              break;
            }
        }
        GetAppSettings(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              r()
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
                });
            });
          });
        }
        GetAppInfo(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              r()
                .get("/app/getinfo", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
                });
            });
          });
        }
        get NumSupersamplingSteps() {
          return Math.floor((h - p + 0.5 * m) / m);
        }
        SliderposToSupersample(e) {
          return e > h ? h : e < p ? p : e;
        }
        get showAdvancedSettings() {
          return this.settings.get(d.fY);
        }
        set showAdvancedSettings(e) {
          this.SetSettingsValue(d.fY, e);
        }
        showBindingCallouts(e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(d.Ml, t);
        }
      }
      (S.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, i.gn)([a.LO], S.prototype, "connected", void 0),
        (0, i.gn)([a.LO], S.prototype, "settingsSchema", void 0),
        (0, i.gn)([a.LO], S.prototype, "settings", void 0),
        (0, i.gn)([a.LO], S.prototype, "systemInfo", void 0),
        (0, i.gn)([a.LO], S.prototype, "audioDevices", void 0),
        (0, i.gn)([a.LO], S.prototype, "apps", void 0),
        (0, i.gn)([a.LO], S.prototype, "probablyOwnedAppkeys", void 0),
        (0, i.gn)([a.LO], S.prototype, "showInternalSettings", void 0),
        (0, i.gn)([a.LO], S.prototype, "workshopStateChangedCanary", void 0),
        (0, i.gn)([a.LO], S.prototype, "pendingChanges", void 0),
        (0, i.gn)([a.LO], S.prototype, "route", void 0),
        (0, i.gn)([s.ak], S.prototype, "OpenWebSocketToHost", null),
        (0, i.gn)([s.ak], S.prototype, "OnWorkshopStateChangedMessage", null),
        (0, i.gn)([s.ak], S.prototype, "OnChangeRouteMessage", null),
        (0, i.gn)([s.ak], S.prototype, "OnAppConfigChangedMessage", null),
        (0, i.gn)([s.ak], S.prototype, "OnRefreshRateChangeMessage", null),
        (0, i.gn)([a.aD.bound], S.prototype, "onHashChanged", null),
        (0, i.gn)([a.Fl], S.prototype, "routePage", null),
        (0, i.gn)([a.Fl], S.prototype, "routePageSection", null),
        (0, i.gn)([a.Fl], S.prototype, "routePageSectionParams", null),
        (0, i.gn)([a.aD], S.prototype, "setRoutePage", null),
        (0, i.gn)([a.aD], S.prototype, "setRoutePageSection", null),
        (0, i.gn)([a.aD], S.prototype, "setRoutePageSectionParams", null),
        (0, i.gn)([a.aD], S.prototype, "setRoute", null),
        (0, i.gn)([s.ak], S.prototype, "SetDashboardFadeSupression", null),
        (0, i.gn)([s.ak], S.prototype, "SetDashboardForceBoundsVisible", null),
        (0, i.gn)([s.ak], S.prototype, "SetRestartRequired", null),
        (0, i.gn)([s.ak], S.prototype, "OnWebSocketOpen", null),
        (0, i.gn)([s.ak], S.prototype, "OnWebSocketClose", null),
        (0, i.gn)([s.ak], S.prototype, "WebSocketSend", null),
        (0, i.gn)([s.ak], S.prototype, "OnWebSocketMessage", null),
        (0, i.gn)([a.aD], S.prototype, "OnVRSettings", null),
        (0, i.gn)([a.aD], S.prototype, "SetSettingValueFromServer", null),
        (0, i.gn)([a.aD], S.prototype, "OnVRSettingsSchema", null),
        (0, i.gn)([a.aD.bound], S.prototype, "ResetSettingsValue", null),
        (0, i.gn)([a.aD], S.prototype, "ResetSettingsValues", null),
        (0, i.gn)([a.aD], S.prototype, "SetSettingsValue", null),
        (0, i.gn)(
          [a.aD],
          S.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        ),
        (0, i.gn)([a.Fl], S.prototype, "NumSupersamplingSteps", null);
      const _ = new S();
      window.VRSettingsState = _;
    },
    4285: (e, t, n) => {
      n.d(t, { E: () => c });
      var i = n(655),
        s = n(7056),
        o = n(9669),
        r = n.n(o),
        a = n(2188);
      class l {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.IdentifyController = function (e) {
              return e
                ? new Promise(function (t, n) {
                    r()
                      .get("/identify_controller.action?serial=" + e)
                      .then((e) => {
                        t();
                      })
                      .catch((e) => {
                        n(e);
                      });
                  })
                : null;
            }),
            (this.GetUSBDeviceList = function () {
              return new Promise(function (e, t) {
                r()
                  .get("/usb_topology.action")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ToggleRoomOverview = function (e) {
              return new Promise(function (t, n) {
                r()
                  .get(
                    "/toggle_room_overview_feed.action?enabled=" +
                      (e ? "1" : "0"),
                  )
                  .then((e) => {
                    t();
                  })
                  .catch((e) => {
                    n(e);
                  });
              });
            });
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsystem..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
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
        Init() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.connected = !1),
              (this.framerate = []),
              (this.status = {
                jsonid: "",
                startup_info: "",
                status_string: "",
                is_main: !1,
                is_perforce: !1,
                hostname: "",
                states: [],
              }),
              (this.roomoverview = {
                jsonid: "",
                collision: [],
                playarea: [],
                devices: [],
                bounds_visible: !1,
                compositor_available: !1,
              }),
              yield this.OpenWebSocketToHost();
          });
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("websocket_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("websocket_close");
            });
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
          let t = JSON.parse(e.data);
          switch (t.jsonid) {
            case "vr_system_status":
              this.OnSystemStatusMessage(t);
              break;
            case "vr_framerate":
              this.OnFramerateMessage(t);
              break;
            case "vr_notifications":
              this.OnNotificationsMessage(t);
              break;
            case "vr_room_overview":
              this.OnRoomOverviewMessage(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnSystemStatusMessage(e) {
          this.status = e;
        }
        OnFramerateMessage(e) {
          for (this.framerate.unshift(e); this.framerate.length > 60; )
            this.framerate.pop();
        }
        OnNotificationsMessage(e) {
          let t = e.notifications.map((e, t) => ({
            title: e.sTitle,
            description: e.sDescription,
            timestamp: e.sTimeStamp,
          }));
          this.notifications = t;
        }
        OnRoomOverviewMessage(e) {
          this.roomoverview = e;
        }
        LaunchApplication(e) {
          return new Promise(function (t, n) {
            r()
              .get("/steamvr_launch_application.action?param1=" + e)
              .then((e) => {
                t();
              })
              .catch((e) => {
                n(e);
              });
          });
        }
        TEMP_RegisterPollingWebsocketMessage(e, t) {
          setInterval(() => {
            r()
              .get(e)
              .then((e) => {
                this.OnWebSocketMessage({ data: JSON.stringify(e.data) });
              })
              .catch((e) => {});
          }, t);
        }
      }
      (0, i.gn)([a.LO], l.prototype, "status", void 0),
        (0, i.gn)([a.LO], l.prototype, "framerate", void 0),
        (0, i.gn)([a.LO], l.prototype, "notifications", void 0),
        (0, i.gn)([a.LO], l.prototype, "roomoverview", void 0),
        (0, i.gn)([a.LO], l.prototype, "connected", void 0),
        (0, i.gn)([s.ak], l.prototype, "OpenWebSocketToHost", null),
        (0, i.gn)([s.ak], l.prototype, "OnWebSocketOpen", null),
        (0, i.gn)([s.ak], l.prototype, "OnWebSocketClose", null),
        (0, i.gn)([s.ak], l.prototype, "WebSocketSend", null),
        (0, i.gn)([s.ak], l.prototype, "OnWebSocketMessage", null),
        (0, i.gn)(
          [s.ak],
          l.prototype,
          "TEMP_RegisterPollingWebsocketMessage",
          null,
        );
      const c = new l();
      window.VRSystemState = c;
    },
  },
]);
//# sourceMappingURL=vrwebui_shared.js.map?v=9606e932daacd5ebb767
