/*! For license information please see vrwebui_shared.js.LICENSE.txt */
"use strict";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [683],
  {
    6346: (e, t, n) => {
      n.d(t, {
        D3: () => l,
        I_: () => o,
        JN: () => m,
        Jl: () => u,
        cH: () => a,
        fY: () => h,
        yt: () => p,
        z3: () => d,
      });
      var i = n(3019),
        r = n(7047);
      const s = i.Message;
      class o extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            o.prototype.enum || r.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  enum: { n: 1, br: r.FE.readEnum, bw: r.Xc.writeEnum },
                  appid: { n: 2, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                  overlay: { n: 3, br: r.FE.readString, bw: r.Xc.writeString },
                  hwnd: { n: 4, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = r.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new o();
          return o.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardTabIcon";
        }
      }
      class a extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            a.prototype.tabs || r.aR(a.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  tabs: { n: 1, c: l, r: !0, q: !0 },
                  selected_tab_id: {
                    n: 2,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  vr_settings_tab_id: {
                    n: 3,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  vr_steam_tab_id: {
                    n: 4,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = r.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_tabs";
        }
        getVRPathPropertyKey() {
          return a.getVRPathPropertyKey();
        }
      }
      class l extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            l.prototype.tab_id || r.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  tab_id: { n: 1, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                  display_name: {
                    n: 3,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  icon: { n: 4, c: o },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  visible_in_dashboard_menu: {
                    n: 5,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = r.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new l();
          return l.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs_Tab";
        }
      }
      class c extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            c.prototype.enum || r.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  enum: { n: 1, br: r.FE.readEnum, bw: r.Xc.writeEnum },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = r.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardActionIcon";
        }
      }
      class d extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            d.prototype.action_id || r.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  action_id: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  enabled: { n: 3, br: r.FE.readBool, bw: r.Xc.writeBool },
                  display_name: {
                    n: 4,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  visible_in_menu: {
                    n: 10,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  is_menu: { n: 11, br: r.FE.readBool, bw: r.Xc.writeBool },
                  parent_menu_action_id: {
                    n: 12,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  icon: { n: 5, c },
                  icon_active: { n: 6, c },
                  invocation: {
                    n: 7,
                    d: 1,
                    br: r.FE.readEnum,
                    bw: r.Xc.writeEnum,
                  },
                  special_invocation: {
                    n: 9,
                    br: r.FE.readEnum,
                    bw: r.Xc.writeEnum,
                  },
                  active: { n: 8, br: r.FE.readBool, bw: r.Xc.writeBool },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = r.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardAction";
        }
      }
      class p extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            p.prototype.actions || r.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { actions: { n: 1, c: d, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = r.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardActions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_actions";
        }
        getVRPathPropertyKey() {
          return p.getVRPathPropertyKey();
        }
      }
      class u extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            u.prototype.windows || r.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { windows: { n: 1, c: h, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = r.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/desktop_windows";
        }
        getVRPathPropertyKey() {
          return u.getVRPathPropertyKey();
        }
      }
      class h extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            h.prototype.window_id || r.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  window_id: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  hwnd: { n: 2, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                  title: { n: 3, br: r.FE.readString, bw: r.Xc.writeString },
                  tab_id: { n: 4, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = r.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows_Window";
        }
      }
      class m extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            m.prototype.can_sleep || r.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  can_sleep: { n: 1, br: r.FE.readBool, bw: r.Xc.writeBool },
                  can_shutdown: { n: 2, br: r.FE.readBool, bw: r.Xc.writeBool },
                  can_restart_system: {
                    n: 3,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  can_exitvr: { n: 4, br: r.FE.readBool, bw: r.Xc.writeBool },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = r.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_PowerOptions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/power_options";
        }
        getVRPathPropertyKey() {
          return m.getVRPathPropertyKey();
        }
      }
    },
    4820: (e, t, n) => {
      n.d(t, {
        Al: () => D,
        Ex: () => l,
        Vg: () => o,
        pD: () => a,
        x2: () => I,
      });
      var i = n(3019),
        r = n(7047);
      const s = i.Message;
      class o extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            o.prototype.name || r.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  name: { n: 1, br: r.FE.readString, bw: r.Xc.writeString },
                  message_id: {
                    n: 2,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  response_to_message_id: {
                    n: 3,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  is_error_response: {
                    n: 4,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = r.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new o();
          return o.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Header";
        }
      }
      class a extends (/^(446|865)$/.test(n.j) ? null : s) {
        constructor(e = null) {
          super(),
            a.prototype.error || r.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  error: { n: 1, br: r.FE.readEnum, bw: r.Xc.writeEnum },
                  description: {
                    n: 2,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  origin: { n: 3, br: r.FE.readEnum, bw: r.Xc.writeEnum },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = r.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Error_Response";
        }
      }
      function l(e) {
        return (
          "unknown CVRGamepadUI_Message_Error_Response_ErrorCode ( " + e + " )"
        );
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.tab_id || r.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  tab_id: { n: 1, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = r.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Response";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.action_id || r.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  action_id: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  toggle_value: { n: 2, br: r.FE.readBool, bw: r.Xc.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = r.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Response";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.window_id || r.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  window_id: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = r.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Response";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(),
            g.prototype.dashboard_popup_request_id || r.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  dashboard_popup_request_id: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  popup_overlay_key: {
                    n: 2,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  parent_enum: { n: 15, br: r.FE.readEnum, bw: r.Xc.writeEnum },
                  parent_overlay_key: {
                    n: 3,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  parent_device_path: {
                    n: 13,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  origin_on_parent: { n: 4, c: S },
                  origin_on_popup: { n: 5, c: S },
                  offset: { n: 6, c: _ },
                  rotation: { n: 7, c: v },
                  inherit_parent_pitch: {
                    n: 8,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  inherit_parent_curvature: {
                    n: 9,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  clip_rect: { n: 10, c: y },
                  interactive: { n: 11, br: r.FE.readBool, bw: r.Xc.writeBool },
                  requires_laser: {
                    n: 12,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  sort_order: { n: 14, br: r.FE.readEnum, bw: r.Xc.writeEnum },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = r.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request";
        }
      }
      class S extends s {
        constructor(e = null) {
          super(),
            S.prototype.x || r.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  x: { n: 1, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  y: { n: 2, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = r.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new S();
          return S.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(),
            _.prototype.x_pixels || r.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  x_pixels: { n: 1, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  y_pixels: { n: 2, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  z_pixels: { n: 3, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  x_meters: { n: 4, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  y_meters: { n: 5, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  z_meters: { n: 6, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = r.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Position";
        }
      }
      class v extends s {
        constructor(e = null) {
          super(),
            v.prototype.pitch_degrees || r.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  pitch_degrees: {
                    n: 1,
                    br: r.FE.readFloat,
                    bw: r.Xc.writeFloat,
                  },
                  yaw_degrees: {
                    n: 2,
                    br: r.FE.readFloat,
                    bw: r.Xc.writeFloat,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = r.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new v();
          return v.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(),
            y.prototype.u_min || r.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  u_min: { n: 1, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  v_min: { n: 2, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  u_max: { n: 3, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                  v_max: { n: 4, br: r.FE.readFloat, bw: r.Xc.writeFloat },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = r.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new y();
          return y.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new b();
          return b.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Response";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(),
            f.prototype.dashboard_popup_request_id || r.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  dashboard_popup_request_id: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = r.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new f();
          return f.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Request";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new C();
          return C.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Response";
        }
      }
      class R extends s {
        constructor(e = null) {
          super(),
            R.prototype.source_accountid || r.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  source_accountid: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  video_uniqueid: {
                    n: 2,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = r.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new R();
          return R.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new w();
          return w.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Response";
        }
      }
      class M extends s {
        constructor(e = null) {
          super(),
            M.prototype.overlay_key || r.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = r.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new M();
          return M.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Request";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new A();
          return A.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Response";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.overlay_key || r.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = r.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new B();
          return B.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new k();
          return k.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Response";
        }
      }
      class T extends s {
        constructor(e = null) {
          super(),
            T.prototype.url || r.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static ImplementsStaticInterface() {}
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  url: { n: 1, br: r.FE.readString, bw: r.Xc.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = r.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new T();
          return T.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Request";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            n = new E();
          return E.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Response";
        }
      }
      const D = {
        "DashboardTabClicked#1": {
          msgClassRequest_t: c,
          msgClassResponse_t: d,
          strMethod: "DashboardTabClicked",
        },
        "DashboardActionInvoked#1": {
          msgClassRequest_t: p,
          msgClassResponse_t: u,
          strMethod: "DashboardActionInvoked",
        },
        "DashboardDesktopWindowClicked#1": {
          msgClassRequest_t: h,
          msgClassResponse_t: m,
          strMethod: "DashboardDesktopWindowClicked",
        },
        "ShowDashboardPopup#1": {
          msgClassRequest_t: g,
          msgClassResponse_t: b,
          strMethod: "ShowDashboardPopup",
        },
        "HideDashboardPopup#1": {
          msgClassRequest_t: f,
          msgClassResponse_t: C,
          strMethod: "HideDashboardPopup",
        },
        "RemoteVideoStream#1": {
          msgClassRequest_t: R,
          msgClassResponse_t: w,
          strMethod: "RemoteVideoStream",
        },
        "ShowGame#1": {
          msgClassRequest_t: M,
          msgClassResponse_t: A,
          strMethod: "ShowGame",
        },
        "ShowOverlay#1": {
          msgClassRequest_t: B,
          msgClassResponse_t: k,
          strMethod: "ShowOverlay",
        },
      };
      class I {
        constructor(e) {
          this.m_Client = e;
        }
        ExecuteSteamURL(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "ExecuteSteamURL#1",
            T.fromObject(null != e ? e : {}),
            E,
          );
        }
      }
    },
    1509: (e, t, n) => {
      n.d(t, { _: () => Re });
      var i = n(655),
        r = n(5876),
        s = n(7056),
        o = n(6459),
        a = n(2188),
        l = n(7062),
        c = n(7294),
        d = n(5177),
        p = n(9755),
        u = n(7475),
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
                        r.Uk.Audio_SupportsDualSpeakerAndJackOutput_Bool,
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
                        r.Uk.Hmd_SupportsMicMonitoring_Bool,
                      )) &&
              void 0 !== t &&
              t,
            s = !1;
          try {
            s =
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
            s &&
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
        (0, i.gn)([s.ak], y.prototype, "onAudioDeviceChanged", null),
        (0, i.gn)([s.ak], y.prototype, "onOverrideDeviceDropdownChanged", null),
        (0, i.gn)([s.ak], y.prototype, "onMirrorDeviceDropdownChanged", null),
        (y = (0, i.gn)([l.Pi], y));
      var b,
        f,
        C,
        R = n(4979);
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
      class w extends c.Component {
        constructor(e) {
          super(e),
            (this.m_imageRef = c.createRef()),
            (this.m_cameraFrameCount = 0),
            (this.state = w.DefaultState);
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
          let t = VRHTML.GetPose(r.wU, r.zq.Standing);
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
          this.setState(w.DefaultState),
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
      (0, i.gn)([s.ak], w.prototype, "onUpdateCameraFrame", null),
        (0, i.gn)([s.ak], w.prototype, "startTest", null),
        (0, i.gn)([s.ak], w.prototype, "stopTest", null),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.On2D = 1)] = "On2D"),
            (e[(e.On3D = 2)] = "On3D");
        })(C || (C = {}));
      const M = (0, l.Pi)(() => {
        var e;
        const t =
          null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    r.Uk.SupportsRoomViewDepthProjection_Bool,
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
      let A = class extends _.d9 {
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
                      r.Uk.CameraSupportsCompatibilityModes_Bool,
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
                  case r.lx.ISO_30FPS:
                    return 30;
                  case r.lx.ISO_35FPS:
                    return 35;
                  case r.lx.ISO_40FPS:
                    return 40;
                  case r.lx.ISO_46FPS:
                    return 45;
                  case r.lx.ISO_50FPS:
                    return 50;
                  case r.lx.BULK_8K_DMA:
                    return 55;
                  default:
                  case r.lx.BULK_DEFAULT:
                    return 60;
                }
              })(
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetInt32Property(
                          "/user/head",
                          r.Uk.CameraCompatibilityMode_Int32,
                        )) && void 0 !== e
                  ? e
                  : r.lx.BULK_DEFAULT,
              )
            : 0;
        }
        setCameraRate(e) {
          let t = (function (e) {
            switch (e) {
              case 30:
                return r.lx.ISO_30FPS;
              case 35:
                return r.lx.ISO_35FPS;
              case 40:
                return r.lx.ISO_40FPS;
              case 45:
                return r.lx.ISO_46FPS;
              case 50:
                return r.lx.ISO_50FPS;
              case 55:
                return r.lx.BULK_8K_DMA;
              default:
                return r.lx.BULK_DEFAULT;
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
            s = S.G3.settings.get(h.k_),
            o =
              S.G3.settings.get(
                "/settings/camera/enableCameraForCollisionBounds",
              ) || s != C.Off;
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
                      r.Uk.SupportsRoomViewDepthProjection_Bool,
                    )) &&
            void 0 !== e &&
            e;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(M, null),
            l &&
              s == C.On3D &&
              c.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                (0, m.Xx)("#Settings_Camera_RoomView3D_Experimental"),
              ),
            !l &&
              s == C.On3D &&
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
                valueStyleVariant: R.px.OnHandle,
                renderValue: (e) => this.state.cameraRateValue.toString(),
              }),
            o &&
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
                this.cameraEnabled() && c.createElement(w, null),
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (A.Name = "camera_settings"),
        (0, i.gn)([s.ak], A.prototype, "onCameraEnabled", null),
        (0, i.gn)([s.ak], A.prototype, "onCameraRateChanged", null),
        (0, i.gn)([s.ak], A.prototype, "onStartCameraTest", null),
        (0, i.gn)([s.ak], A.prototype, "onStopCameraTest", null),
        (0, i.gn)([a.Fl], A.prototype, "currentRoomViewStyle", null),
        (A = (0, i.gn)([l.Pi], A));
      var B = n(7095),
        k = n(8261),
        T = n(9626),
        E = n(4790);
      let D = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                !T.BV.isVRGamepadUI &&
                  c.createElement(_.Xp, {
                    name: h.o1,
                    label: (0, m.Xx)("#Settings_Dashboard_Position"),
                    items: [
                      { value: k._.Near, sLabel: (0, m.Xx)("#Settings_Near") },
                      {
                        value: k._.Middle,
                        sLabel: (0, m.Xx)("#Settings_Middle"),
                      },
                      { value: k._.Far, sLabel: (0, m.Xx)("#Settings_Far") },
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
                (0, r.Op)() != r.qA.Overlay &&
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
                  valueStyleVariant: R.px.OnHandle,
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
                      value: E.Uj.Curved,
                      sLabel: (0, m.Xx)("#Settings_TheaterCurvature_Curved"),
                    },
                    {
                      value: E.Uj.Flat,
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
                      value: T.fq.Large,
                      sLabel: (0, m.Xx)("#Settings_TheaterScreenSize_Large"),
                    },
                    {
                      value: T.fq.Medium,
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
                      value: T.A3.PlayArea,
                      sLabel: (0, m.Xx)(
                        "#Settings_TheaterScreenAlignment_PlayArea",
                      ),
                    },
                    {
                      value: T.A3.Dashboard,
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
      var I;
      (D.Name = "dashboard_settings"),
        (D = (0, i.gn)([l.Pi], D)),
        (function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.Automatic = 1)] = "Automatic"),
            (e[(e.Always = 2)] = "Always");
        })(I || (I = {}));
      let x = class extends c.Component {
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
              let r = {
                sId: "",
                sName: "",
                bIsImplicit: !1,
                bIsEnabled: !1,
                bIsModifyAllowed: !0,
              };
              (r.sId = e[t++].toString()),
                (r.sName = e[t++].toString()),
                (r.bIsImplicit = !0 === e[t++]),
                (r.bIsEnabled = !0 === e[t++]),
                (r.bIsModifyAllowed = !0 === e[t++]),
                n.push(r),
                r.bIsEnabled && i++;
            }
          const r = n.filter(this.isImplicitLayer),
            s = n.filter(this.isExplicitLayer),
            o = n.filter(this.isImplicitNoModifLayer);
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
                r.length > 0 &&
                  r.map((e) =>
                    c.createElement(_.wy, {
                      key: e.sId,
                      label: e.sName,
                      value: e.bIsEnabled,
                      onChange: (t) => this.setApiLayerState(e.sId, t),
                    }),
                  ),
                o.length > 0 &&
                  o.map((e) =>
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
                s.length > 0 &&
                  s.map((e) =>
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
      (0, i.gn)([s.ak], x.prototype, "isImplicitLayer", null),
        (0, i.gn)([s.ak], x.prototype, "isExplicitLayer", null),
        (0, i.gn)([s.ak], x.prototype, "isImplicitNoModifLayer", null),
        (0, i.gn)([s.ak], x.prototype, "setApiLayerState", null),
        (0, i.gn)([s.ak], x.prototype, "show", null),
        (0, i.gn)([s.ak], x.prototype, "hide", null),
        (x = (0, i.gn)([l.Pi], x));
      let L = class extends _.d9 {
        constructor(e) {
          super(e),
            (this.m_mailbox = new r.Nv()),
            this.m_mailbox.Init("settingstab_openxr"),
            this.m_mailbox.RegisterHandler("refresh_openxr_tab", () => {
              this.forceUpdate();
            });
        }
        OnSetAsOpenXRRuntime() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRMonitor.SetThisOpenXRRuntimeToCurrent(),
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
              : [r.GC.Error, ""];
          r.GC.ThisSteamVR;
          const i = VRHTML.VRMonitor.HasVRMonitor();
          switch (t) {
            case r.GC.AnotherSteamVR:
              n = "#OpenXR_AnotherSteamVR";
              break;
            case r.GC.ThisSteamVR:
              n = "#OpenXR_SteamVR";
              break;
            default:
            case r.GC.Error:
              n = "#OpenXR_Error";
              break;
            case r.GC.None:
              n = "#OpenXR_None";
              break;
            case r.GC.AnotherRuntime:
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
                      enabled: i,
                    },
                    (0, m.Xx)("#Settings_SetAsOpenXRRuntime"),
                  ),
                ),
              c.createElement(x, null),
              this.makeResetToDefaultButton(),
              c.createElement(_.D3, {
                name: h.WF,
                label: (0, m.Xx)("#Settings_OpenXR_MetaPluginCompatibility"),
                title: (0, m.Xx)("#Settings_OpenXR_MetaPluginCompatibilityTip"),
                visibility: _.VK.Advanced,
                items: [
                  {
                    sLabel: (0, m.Xx)("#Settings_ToggleButton_Off"),
                    value: I.Disabled,
                  },
                  {
                    sLabel: (0, m.Xx)("#OpenXR_Automatic"),
                    value: I.Automatic,
                  },
                  {
                    sLabel: (0, m.Xx)("#Settings_ToggleButton_On"),
                    value: I.Always,
                  },
                ],
              }),
            )
          );
        }
      };
      function O() {
        const [e, t] = c.useState(r.Lx.Medium),
          [n, i] = c.useState(!1);
        let s = [];
        s.push({
          value: r.Lx.Small,
          sLabel: (0, m.Xx)("#Advanced_SmallSpace"),
        }),
          s.push({
            value: r.Lx.Medium,
            sLabel: (0, m.Xx)("#Advanced_MediumSpace"),
          }),
          s.push({
            value: r.Lx.Large,
            sLabel: (0, m.Xx)("#Advanced_LargeSpace"),
          }),
          s.push({
            value: r.Lx.Gigantic,
            sLabel: (0, m.Xx)("#Advanced_GiganticSpace"),
          }),
          s.push({
            value: r.Lx.Standing,
            sLabel: (0, m.Xx)("#Advanced_StandingSpace"),
          });
        const o = (0, m.Xx)(
          n
            ? "#Advanced_TrackingRecordingStop"
            : "#Advanced_TrackingRecordingStart",
        );
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, m.Xx)("#Advanced_RoomAndTracking"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "SettingsItemValueInfo Left" },
              (0, m.Xx)("#Advanced_QuickCalibrate_Explanation"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            c.createElement(
              d.z,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRChaperoneSetup.QuickCalibratePlayspace(e);
                },
              },
              (0, m.Xx)("#Advanced_QuickCalibrate"),
            ),
            c.createElement(v.Lt, { items: s, onChange: t, value: e }),
          ),
          VRHTML.VRMonitor.HasVRMonitor() &&
            c.createElement(
              "div",
              { className: "SettingsItem" },
              c.createElement(
                "div",
                { className: "Label" },
                (0, m.Xx)("#Advanced_RecordTrackingData"),
              ),
              c.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  onClick: function () {
                    n
                      ? VRHTML.VRMonitor.StopTrackingRecording()
                      : VRHTML.VRMonitor.StartTrackingRecording(),
                      i(!n);
                  },
                },
                o,
              ),
            ),
        );
      }
      function P() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, m.Xx)("#Advanced_FrameTiming"),
            ),
          ),
          c.createElement(_.wy, {
            name: "/settings/perfcheck/perfGraphInHMD",
            label: (0, m.Xx)("#Advanced_PerfGraphInHMD"),
          }),
          c.createElement(_.wy, {
            name: "/settings/perfcheck/saveTimingsOnExit",
            label: (0, m.Xx)("#Advanced_AutoSaveTimingInfoOnExit"),
          }),
          c.createElement(_.wy, {
            name: "/settings/perfcheck/allowTimingStore",
            label: (0, m.Xx)("#Advanced_AllowSavingOfTimingInfo"),
          }),
          VRHTML.VRMonitor.HasVRMonitor() &&
            c.createElement(
              "div",
              { className: "SettingsItem" },
              c.createElement("div", { className: "Label" }),
              c.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  onClick: () => {
                    VRHTML.VRMonitor.SaveTimingFramesToDisk();
                  },
                },
                (0, m.Xx)("#Advanced_SaveFrameDataNow"),
              ),
            ),
        );
      }
      function F() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, m.Xx)("#Settings_Advanced_Status_Header"),
            ),
          ),
          c.createElement(_.Xp, {
            name: "/settings/userinterface/vrmStatusCheckInterval",
            label: (0, m.Xx)("#Settings_StatusCheckInterval"),
            items: [
              { value: 0, sLabel: (0, m.Xx)("#StatusCheckInterval_Never") },
              { value: 1e3, sLabel: (0, m.Xx)("#StatusCheckInterval_Normal") },
              { value: 100, sLabel: (0, m.Xx)("#StatusCheckInterval_Often") },
              { value: 5e3, sLabel: (0, m.Xx)("#StatusCheckInterval_Seldom") },
            ],
          }),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement("div", { className: "Label" }),
            c.createElement(
              d.z,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.RefreshStatusNow();
                },
              },
              (0, m.Xx)("#Settings_RefreshStatusNow"),
            ),
          ),
          c.createElement(_.wy, {
            name: "/settings/userinterface/vrmCheckForSteam",
            label: (0, m.Xx)("#Settings_CheckForSteam"),
          }),
        );
      }
      function V() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, m.Xx)("#Settings_Advanced_Paths_Header"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label" },
              (0, m.Xx)("#MenuAction_LogDirectory"),
            ),
            c.createElement(
              d.z,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.SetLog();
                },
              },
              (0, m.Xx)("#MenuAction_Update"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label" },
              (0, m.Xx)("#MenuAction_ConfigDirectory"),
            ),
            c.createElement(
              d.z,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.SetConfig();
                },
              },
              (0, m.Xx)("#MenuAction_Update"),
            ),
          ),
        );
      }
      function N() {
        function e(e) {
          VRHTML.VRMonitor.SetDirectModeEnabled(e, !0),
            S.G3.SetRestartRequired();
        }
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "Subsection" },
            c.createElement(
              "div",
              { className: "SettingsItem" },
              c.createElement(
                "div",
                { className: "Label Title" },
                (0, m.Xx)("#Settings_Advanced_Legacy_Header"),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, m.Xx)("#Explanation_RemoveAllSteamVRUSBDevices"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement("div", { className: "Label" }),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.RemoveAllRelevantUSBDevices();
                    },
                  },
                  (0, m.Xx)("#MenuAction_RemoveAllSteamVRUSBDevices"),
                ),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, m.Xx)("#Explanation_DisableEnhancedPowerManagement"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement("div", { className: "Label" }),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.DisableEnhancedPowerManagement();
                    },
                  },
                  (0, m.Xx)("#MenuAction_DisableEnhancedPowerManagement"),
                ),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, m.Xx)("#Explanation_RebootVive"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement("div", { className: "Label" }),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.RebootHMD();
                    },
                  },
                  (0, m.Xx)("#MenuAction_RebootVive"),
                ),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, m.Xx)("#Advanced_DisableDirectModeWarning"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      e(!0);
                    },
                  },
                  (0, m.Xx)("#Advanced_EnableDirectDisplayMode"),
                ),
                c.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      e(!1);
                    },
                  },
                  (0, m.Xx)("#Advanced_DisableDirectDisplayMode"),
                ),
              ),
            ),
          ),
        );
      }
      (L.Name = "openxr_settings"),
        (0, i.gn)([s.ak], L.prototype, "OnSetAsOpenXRRuntime", null),
        (L = (0, i.gn)([l.Pi], L));
      let G = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                this.schemaComponents,
                c.createElement("hr", null),
                c.createElement(O, null),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement("hr", null),
                    c.createElement(P, null),
                    c.createElement("hr", null),
                    c.createElement(F, null),
                    c.createElement("hr", null),
                    c.createElement(V, null),
                    c.createElement("hr", null),
                    c.createElement(N, null),
                  ),
              )
            : null;
        }
      };
      (G.Name = "developer_settings"), (G = (0, i.gn)([l.Pi], G));
      var H = n(7830);
      let U = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(H.DX, null),
                c.createElement(H.nb, null),
                c.createElement(H.RR, null),
                c.createElement(H.TO, null),
                c.createElement(H.Dc, null),
                !T.BV.isVRGamepadUI &&
                  c.createElement(_.Xp, {
                    name: h.o1,
                    label: (0, m.Xx)("#Settings_Dashboard_Position"),
                    items: [
                      { value: k._.Near, sLabel: (0, m.Xx)("#Settings_Near") },
                      {
                        value: k._.Middle,
                        sLabel: (0, m.Xx)("#Settings_Middle"),
                      },
                      { value: k._.Far, sLabel: (0, m.Xx)("#Settings_Far") },
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
                VRHTML.VRMonitor.HasVRMonitor() &&
                  c.createElement(
                    _.GV,
                    { visibility: _.VK.Advanced, className: "SettingsItem" },
                    c.createElement(
                      "div",
                      { className: "Label" },
                      (0, m.Xx)("#MenuAction_ResetDismissableWarnings"),
                    ),
                    c.createElement(
                      d.z,
                      {
                        className: "ButtonControl",
                        onClick: () => {
                          VRHTML.VRMonitor.ResetDismissableWarnings();
                        },
                      },
                      (0, m.Xx)("#MenuAction_Reset"),
                    ),
                    c.createElement(
                      "div",
                      { className: "SettingsItemValueInfo" },
                      (0, m.Xx)("#Explanation_ResetDismissableWarnings"),
                    ),
                  ),
              )
            : null;
        }
      };
      (U.Name = "general_settings"), (U = (0, i.gn)([l.Pi], U));
      const W = (e) => {
        var t;
        const [n, i] = (0, c.useState)(!1),
          s =
            0.9 *
            (null !==
              (t =
                null === r.Co || void 0 === r.Co
                  ? void 0
                  : r.Co.VRProperties.GetFloatProperty(
                      r.wU,
                      r.Uk.DashboardScale_Float,
                    )) && void 0 !== t
              ? t
              : 1),
          [o, a] = ((e) => {
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
        o <= 0 && n && (i(!1), e.onApplyCal());
        const l = (function (e, t, n, i) {
            if (!isFinite(e) || !isFinite(t)) return null;
            const r = [];
            return (
              r.push(
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
              r.push(
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
              r.push(
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
                r,
              )
            );
          })(240, 240, 20, o),
          p = Math.max(o > 0 ? 1 : 1 + 5 * o, 0);
        return n
          ? c.createElement(
              r.wx,
              { parent_path: "/user/head" },
              c.createElement(
                r.wx,
                { translation: { y: 0, z: -70 }, rotation: { z: 0 }, scale: s },
                c.createElement(
                  r.s_,
                  {
                    width: void 0,
                    height: 12 * p,
                    interactive: !1,
                    sort_order: 1e3,
                    debug_name: "eye-1",
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
      let z = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_eyeTrackingServerStatusHandle = null),
            (this.m_mailbox = new r.Nv()),
            (this.state = { nStatus: null }),
            this.m_mailbox.Init("eye_server_ui");
        }
        componentDidMount() {
          this.m_eyeTrackingServerStatusHandle =
            null === r.Co || void 0 === r.Co
              ? void 0
              : r.Co.RegisterForEyeTrackingServerStatus(
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
          const e = (0, r.Op)() == r.qA.Overlay;
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
                  c.createElement(W, {
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
        [s.ak],
        z.prototype,
        "onEyeTrackingServerEnabledEventUpdate",
        null,
      ),
        (0, i.gn)([s.ak], z.prototype, "stopEyeTrackingServer", null),
        (0, i.gn)([s.ak], z.prototype, "startEyeTrackingServer", null),
        (0, i.gn)([s.ak], z.prototype, "doEyeTrackingCal", null),
        (0, i.gn)([s.ak], z.prototype, "SetEyeTrackingVisualization", null),
        (z = (0, i.gn)([l.Pi], z));
      var X = n(9669),
        q = n.n(X);
      function j() {
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
      const K = (0, l.Pi)(() =>
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
        Z = (e) => {
          const [t, n] = c.useState(1),
            [i, r] = c.useState(1),
            [s, o] = c.useState(1),
            [a, l] = c.useState(1),
            [d, p] = c.useState(!1);
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
              onChange: r,
            }),
            c.createElement(_.D3, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: s,
              onChange: o,
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
              onChange: p,
            }),
            c.createElement(_.wy, {
              label: "Inverted Toggle",
              value: d,
              onChange: p,
              swapOnOff: !0,
            }),
          );
        },
        $ = (e) => {
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
        J = (e) => {
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
        Q = (0, l.Pi)(() => {
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
                c.createElement(Z, null),
                c.createElement("hr", null),
                c.createElement($, null),
                c.createElement("hr", null),
                c.createElement(J, null),
              ),
          );
        });
      function Y(e) {
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
      function ee(e) {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(_.U4, {
            name: "/settings/dashboard/theaterModeBrightness",
            label: "Theater Room Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: R.px.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.U4, {
            name: "/settings/dashboard/theaterModeReflection",
            label: "Theater Reflections Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: R.px.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.U4, {
            name: "/settings/dashboard/theaterModeSharpness",
            label: "Theater Reflections Sharpness",
            min: 0,
            max: 1,
            valueStyleVariant: R.px.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
        );
      }
      function te(e) {
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
              valueStyleVariant: R.px.OnHandle,
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
              valueStyleVariant: R.px.OnHandle,
              detents: [0.6],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      function ne(e) {
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
              valueStyleVariant: R.px.OnHandle,
              detents: [1],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.U4, {
              name: h.ro,
              label: (0, m.Xx)("#Settings_ControllerOverlayFilteringBeta"),
              min: 0,
              max: 10,
              valueStyleVariant: R.px.OnHandle,
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
              valueStyleVariant: R.px.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      let ie = class extends _.d9 {
        constructor(e) {
          super(e),
            (this.m_mailbox = new r.Nv()),
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
            ? ((0, r.Op)(),
              r.qA.Overlay,
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
                c.createElement(ee, null),
                c.createElement(te, null),
                c.createElement(ne, null),
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
                  valueStyleVariant: R.px.OnHandle,
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
                !1,
                !1,
                c.createElement(Y, null),
                c.createElement(K, null),
                c.createElement(j, null),
                c.createElement(Q, null),
                this.makeResetToDefaultButton(),
              ))
            : null;
        }
      };
      (ie.Name = "internal_settings"),
        (0, i.gn)([s.ak], ie.prototype, "toggleMirrorRender", null),
        (0, i.gn)([s.ak], ie.prototype, "configSoftAP", null),
        (0, i.gn)([s.ak], ie.prototype, "onSapStatusUpdate", null),
        (ie = (0, i.gn)([l.Pi], ie));
      var re = n(9809);
      let se = class extends c.Component {
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
                  subheader: re.I.IsSteamAvailable
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
      (0, i.gn)([s.ZP], se.prototype, "updateUGCItems", null),
        (0, i.gn)([s.ZP], se.prototype, "setBackground", null),
        (0, i.gn)([s.ZP], se.prototype, "hideModal", null),
        (0, i.gn)([s.ZP], se.prototype, "showModal", null),
        (0, i.gn)([a.Fl], se.prototype, "currentBackgroundPath", null),
        (se = (0, i.gn)([l.Pi], se));
      class oe extends c.Component {
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
      function ae() {
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
      let le = class extends _.d9 {
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
          let r;
          return (
            (r =
              i < 0.5
                ? (0, m.Xx)("#Settings_Chaperone_SuitableForSmall")
                : i < 1
                  ? (0, m.Xx)("#Settings_Chaperone_SuitableForMedium")
                  : (0, m.Xx)("#Settings_Chaperone_SuitableForLarge")),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(oe, null),
              c.createElement(ae, null),
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
                    valueStyleVariant: R.px.OnHandle,
                  }),
                  c.createElement(_.U4, {
                    min: 0.2,
                    max: 1.4,
                    detents: [0.7],
                    name: h.yQ,
                    label: (0, m.Xx)("#Settings_Chaperone_ActivationDistance"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: R.px.OnHandle,
                  }),
                  c.createElement(
                    "div",
                    { className: "SettingsItemValueLabel" },
                    r,
                  ),
                ),
              }),
              c.createElement(_.Ei, {
                label: (0, m.Xx)("#Settings_Appearance_PlayArea_FloorColor"),
                name: "/settings/steamvr/playAreaColor",
              }),
              c.createElement(se, null),
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
      var ce;
      (le.Name = "playarea_settings"), (le = (0, i.gn)([l.Pi], le));
      class de {
        constructor() {
          (this.driverNameToIdMap = new Map()),
            q()
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
          return de.driverPrettyNames[e] || e;
        }
        unBlock(e) {
          S.G3.SetRestartRequired(),
            (this.driverList[
              this.driverNameToIdMap.get(e)
            ].blocked_by_safe_mode = !1);
          let t = { driver: e };
          return q().post("/drivers/unblock", t);
        }
        setEnabled(e, t) {
          S.G3.SetRestartRequired(),
            (this.driverList[this.driverNameToIdMap.get(e)].enabled = t);
          let n = { driver: e, enable: t };
          return q().post("/drivers/setenable", n);
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
      (de.driverPrettyNames = {
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
        (0, i.gn)([a.LO], de.prototype, "driverList", void 0),
        (0, i.gn)([a.Fl], de.prototype, "visibleDriverList", null),
        (0, i.gn)([a.Fl], de.prototype, "numBlockedDrivers", null),
        (0, i.gn)([a.Fl], de.prototype, "numDisabledDrivers", null),
        (0, i.gn)(
          [a.Fl],
          de.prototype,
          "numUserManuallyDisenabledDrivers",
          null,
        );
      const pe = new de(),
        ue = (0, l.Pi)(() =>
          c.createElement(
            d.z,
            {
              className: "ButtonControl",
              title: (0, m.Xx)("#Settings_Drivers_UnblockAllTip"),
              onClick: () =>
                (0, i.mG)(void 0, void 0, void 0, function* () {
                  const e = pe.driverList
                    .filter((e) => e.blocked_by_safe_mode)
                    .map((e) => e.manifest.name);
                  for (let t = 0; t < e.length; ++t) yield pe.unBlock(e[t]);
                }),
            },
            (0, m.Xx)("#Settings_Drivers_UnblockAll"),
          ),
        );
      function he(e) {
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
      const me = (0, l.Pi)(() =>
        c.createElement(
          c.Fragment,
          null,
          pe.visibleDriverList.map((e) =>
            c.createElement(he, {
              key: e.manifest.name,
              label: pe.prettyName(e.manifest.name),
              title: e.manifest.name,
              blocked: e.blocked_by_safe_mode,
              enabled: e.enabled,
              onToggleEnable: (t) => {
                return (n = e.manifest.name), (i = t), void pe.setEnabled(n, i);
                var n, i;
              },
              onUnblock: () => {
                return (t = e.manifest.name), void pe.unBlock(t);
                var t;
              },
            }),
          ),
        ),
      );
      let ge = (ce = class extends c.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = pe.numBlockedDrivers,
            t = pe.numDisabledDrivers,
            n =
              S.G3.showAdvancedSettings ||
              e ||
              pe.numUserManuallyDisenabledDrivers,
            i = S.G3.routePageSection == ce.PAGE_SECTION;
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
                    onClick: () => S.G3.setRoutePageSection(ce.PAGE_SECTION),
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
              pe.driverList &&
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
                          c.createElement(ue, null),
                        ),
                  onDismissRequested: () => S.G3.setRoutePageSection(null),
                },
                c.createElement(me, null),
              ),
          );
        }
      });
      (ge.PAGE_SECTION = "drivermanager"), (ge = ce = (0, i.gn)([l.Pi], ge));
      let Se = class extends c.Component {
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
      (0, i.gn)([s.ZP], Se.prototype, "show", null),
        (0, i.gn)([s.ZP], Se.prototype, "hide", null),
        (Se = (0, i.gn)([l.Pi], Se));
      let _e = class extends _.d9 {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(Se, null),
                c.createElement(ge, null),
                c.createElement("hr", null),
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (_e.Name = "startupshutdown_settings"), (_e = (0, i.gn)([l.Pi], _e));
      var ve,
        ye = n(3033),
        be = n(3107),
        fe = n(9764);
      class Ce extends c.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bRestartAnimation: !1,
              bShowSteamVRRestartRequired: !1,
              bShowAppRestartRequired: !1,
            });
        }
        get enabled() {
          const e = (0, r.Op)() == r.qA.Overlay;
          return this.props.standalonePanel == e;
        }
        onExitApp() {
          null === r.Co || void 0 === r.Co || r.Co.QuitSceneApp();
        }
        onRestartSteamVR() {
          r.Co
            ? r.Co.RestartSteamVR(!1)
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
              : this.state.bShowAppRestartRequired
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
                      (0, m.Xx)("#Settings_MustQuitApp_Description"),
                    ),
                    c.createElement(
                      d.z,
                      { className: "ButtonControl", onClick: this.onExitApp },
                      (0, m.Xx)("#Settings_MustQuitApp_QuitCurrentGame_Button"),
                    ),
                  ))
                : (null === r.Co || void 0 === r.Co ? void 0 : r.Co.HasHMD()) ||
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
                      (0, m.Xx)("#Settings_AdditionalSettingsAvailable"),
                    ),
                  )),
            this.props.standalonePanel)
          ) {
            if (null === e) return null;
            const t = "mainmountable_TopCenter";
            return c.createElement(
              r.wx,
              { parent_id: t, translation: { y: 0.2, z: -0.05 } },
              c.createElement(
                r.s_,
                {
                  debug_name: "settingsrestartbanner",
                  curvature_origin_id: h.Pt,
                  origin: r.Ic.BottomCenter,
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
      (0, i.gn)([s.ak], Ce.prototype, "onExitApp", null),
        (0, i.gn)([s.ak], Ce.prototype, "onRestartSteamVR", null),
        (0, i.gn)([s.ak], Ce.prototype, "onRestartRequired", null),
        (0, i.gn)([s.ak], Ce.prototype, "onAppRestartRequired", null);
      let Re = (ve = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_refSettingsPageContainer = c.createRef()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.state = { sActiveSettingSection: null });
        }
        componentDidMount() {
          (this.m_routeObservingAutorunDisposer = (0, a.EH)(() => {
            S.G3.routePage
              ? this.setState({ sActiveSettingSection: S.G3.routePage })
              : S.G3.setRoutePage(
                  S.G3.settingsSchema.filter(ve.shouldShowSection)[0]
                    .controller,
                );
          })),
            this.ListenForHomeEnabledChanges();
        }
        componentDidUpdate(e, t) {
          this.state.sActiveSettingSection !== t.sActiveSettingSection &&
            this.m_refSettingsPageContainer.current &&
            (this.m_refSettingsPageContainer.current.scrollTop = 0);
        }
        componentWillUnmount() {
          var e;
          null === (e = this.m_routeObservingAutorunDisposer) ||
            void 0 === e ||
            e.call(this),
            (this.m_routeObservingAutorunDisposer = null);
        }
        render() {
          const e = !S.G3.connected || !S.G3.settingsSchema;
          let t = null;
          e && (0, r.Op)() != r.qA.Overlay
            ? (t = c.createElement(
                "div",
                { className: "Label" },
                (0, m.Xx)("#Settings_Loading"),
              ))
            : e ||
              (((0, r.Op)() != r.qA.Overlay || this.props.visible) &&
                (t = this.renderSettingsPanelContents()));
          let n = null;
          if ((0, r.Op)() == r.qA.Overlay) {
            const e = "mainmountable",
              i = e + "_TopCenter";
            n = c.createElement(
              r.Y9,
              {
                id: "settingstab",
                tabName: (0, m.Xx)("#VRMonitor_Nav_Settings"),
                iconUri: "/dashboard/images/icons/svr_settings.svg",
                summonOverlayKey: h.A4,
                mountableUnqualifiedID: e,
              },
              t && c.createElement(Ce, { standalonePanel: !0 }),
              t &&
                c.createElement(
                  o.lL,
                  {
                    visible: !0,
                    debugName: "settings",
                    additionalClassNames: "Settings",
                    foregroundReflectMultiplier: 0.25,
                    summonOverlayKey: h.A4,
                  },
                  c.createElement(we, null),
                  c.createElement(r.at, { id: i, location: r.Ic.TopCenter }),
                  t,
                ),
            );
          } else n = t;
          return c.createElement(
            "div",
            {
              className: (0, g.LJ)(
                "SettingsMain",
                (0, r.Op)() == r.qA.Overlay ? "Overlay" : "Desktop",
                ["Loading", e],
              ),
            },
            n,
          );
        }
        renderSettingsPanelContents() {
          const e = S.G3.settingsSchema.filter(ve.shouldShowSection);
          return c.createElement(
            d.q,
            { className: "SettingsMainPanel" },
            c.createElement(Ce, { standalonePanel: !1 }),
            c.createElement(
              "div",
              { className: "SettingsSidebarPageModalContainer" },
              c.createElement(
                p.sC,
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
                  u.P,
                  {
                    scrollDirection: u.I.Vertical,
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
                releaseSoundEffect: be.y.PagedSettingsNavigation,
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
              [y, _e, le, H.Yw, A, U, D, L, G, ie, B.P].find(
                (e) => e.Name === t,
              ) || _.d9;
          return c.createElement(i, { key: e.title, section: e, active: n });
        }
        static shouldShowSection(e) {
          if (
            e.internal_only &&
            !S.G3.showInternalSettings &&
            !S.G3.settings.get(ve.k_sShowInternalSettings)
          )
            return !1;
          if (
            e.controller == L.Name &&
            (0, r.Op)() == r.qA.Overlay &&
            !S.G3.settings.get(ve.k_sForceShowOpenXRSettings)
          )
            return !1;
          if (
            !e.show_without_hmd &&
            !(null === r.Co || void 0 === r.Co ? void 0 : r.Co.HasHMD())
          )
            return !1;
          if (
            !e.show_without_hmd &&
            e.driver &&
            e.driver !==
              r.Co.VRProperties.GetStringProperty(
                "/user/head",
                r.Uk.ActualTrackingSystemName_String,
              )
          )
            return !1;
          if (e.desktop_only && (0, r.Op)() == r.qA.Overlay) return !1;
          let t =
            e.controller == D.Name &&
            S.G3.settings.get(ve.k_sShowDashboardSettings);
          return (
            !(e.advanced_only && !S.G3.showAdvancedSettings && !t) &&
            !(
              e.controller == A.Name &&
              !(null === r.Co || void 0 === r.Co
                ? void 0
                : r.Co.VRProperties.GetBoolProperty(
                    "/user/head",
                    r.Uk.HasCamera_Bool,
                  ))
            ) &&
            "internet_settings" != e.controller &&
            !!(
              e.controller != y.Name ||
              (S.G3.systemInfo && S.G3.systemInfo.os_type >= 0)
            ) &&
            !(!r.Co && e.web_helper_only)
          );
        }
        ListenForHomeEnabledChanges() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if ((0, r.Op)() != r.qA.Overlay) return;
            let e = yield S.G3.GetSettingsValue(h.je);
            r.Co &&
              (0, a.EH)(() => {
                let t = S.G3.settings.get(h.je);
                void 0 !== t &&
                  t != e &&
                  (t && !r.Co.VRApplications.GetSceneApplicationKey()
                    ? r.Co.VRApplications.LaunchApplication(h.hK)
                    : t ||
                      r.Co.VRApplications.GetSceneApplicationKey() != h.hK ||
                      r.Co.QuitSceneApp(),
                  (e = t));
              });
          });
        }
      });
      (Re.k_sForceShowOpenXRSettings =
        "/settings/steamvr/forceShowOpenXRSettings"),
        (Re.k_sShowInternalSettings = "/settings/steamvr/showInternalSettings"),
        (Re.k_sShowDashboardSettings =
          "/settings/steamvr/showDashboardSettings"),
        (0, i.gn)([s.ak], Re.prototype, "renderSectionButton", null),
        (0, i.gn)([s.ak], Re.prototype, "renderSectionPage", null),
        (Re = ve = (0, i.gn)([l.Pi], Re));
      const we = (0, l.Pi)(function (e) {
        const t = T.BV.isVRGamepadUI,
          n = fe.J.GetActivePooledPopups().find(
            (e) =>
              e.parent_overlay_key == h.T2 &&
              e.popup_overlay_key.includes("mainmenu"),
          );
        return t && n
          ? c.createElement(ye.p, { popupRequest: n, reparent: !1 })
          : null;
      });
    },
    7095: (e, t, n) => {
      n.d(t, { P: () => x, f: () => T });
      var i = n(655),
        r = n(7294),
        s = n(7056),
        o = n(7062),
        a = n(3568),
        l = n(1628),
        c = n(8242),
        d = n(5177),
        p = n(5876),
        u = n(9809),
        h = n(5211),
        m = n(2188),
        g = n(1283);
      class S extends r.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new p.Nv()),
            (this.m_deviceDetails = null),
            (this.m_controllerType = null),
            (this.m_thumbstickSourceName = null),
            (this.m_lastX = 0),
            (this.m_lastY = 0),
            (this.m_addedPoint = !1),
            (this.m_edgeValues = []),
            (this.m_deviceDetails = u.I.GetDeviceInfo(this.props.devicePath)),
            (this.m_controllerType = u.I.GetControllerTypeInfo(
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
            let s = i.x * e + e,
              o = -i.y * e + e;
            t.push(
              r.createElement("polyline", {
                key: n++,
                points: "60,60 " + s.toFixed(0) + "," + o.toFixed(0),
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
            );
          }
          let i = this.ComputeCalibration(),
            s = null;
          return (
            (s = i
              ? (0, a.Xx)("#Settings_General_InviteMoreSamples", i.toFixed(2))
              : (0, a.Xx)(
                  "#Settings_General_NotEnoughSamples",
                  5 - this.m_edgeValues.length,
                )),
            r.createElement(
              c.TB,
              {
                onDismissRequested: this.props.fnCloseCalibrator,
                header: (0, a.Xx)("#Settings_General_CalibrateThumbstick"),
                footer: r.createElement(
                  "div",
                  { className: "SettingsItem ButtonRow" },
                  r.createElement(
                    d.z,
                    {
                      key: "cancel",
                      className: "ButtonControl",
                      onClick: this.OnCancel,
                    },
                    (0, a.Xx)("#Settings_General_Cancel"),
                  ),
                  r.createElement("div", { className: "Spacer" }),
                  r.createElement(
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
              r.createElement(
                "div",
                { className: "ThumbstickCalibrateBody" },
                r.createElement(
                  "div",
                  { className: "ThumbstickContainer" },
                  r.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: [0, 0, 120, 120].join(" "),
                    },
                    r.createElement("circle", {
                      cx: e,
                      cy: e,
                      r: e,
                      strokeWidth: "0.1rem",
                    }),
                    t,
                  ),
                ),
                r.createElement(
                  "div",
                  { className: "Label ThumbstickAngle" },
                  s,
                ),
              ),
            )
          );
        }
      }
      (0, i.gn)([s.ak], S.prototype, "OnUpdateComponentStates", null),
        (0, i.gn)([s.ak], S.prototype, "OnCancel", null),
        (0, i.gn)([s.ak], S.prototype, "OnConfirm", null);
      var _,
        v,
        y = n(9671),
        b = n(5928),
        f = n(4979),
        C = n(7176);
      const R = (0, o.Pi)(() => {
          const e = "managevivetrackers";
          if (
            !(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRDashboardManager.ShouldShowTrackerUI())
          )
            return null;
          const t = l.G3.routePageSection == e;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "div",
              { className: "SettingsItem Button" },
              r.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  onClick: () => l.G3.setRoutePageSection(e),
                },
                (0, a.Xx)("#Settings_General_ShowTrackerUI"),
              ),
            ),
            t &&
              r.createElement(
                c.TB,
                {
                  header: (0, a.Xx)("#Settings_ViveTrackers"),
                  onDismissRequested: () => l.G3.setRoutePageSection(null),
                },
                r.createElement(g.s, null),
              ),
          );
        }),
        w = (0, o.Pi)(() => {
          const e = "debuglegacyinput";
          if (!u.I.BDevMode) return null;
          const t = l.G3.routePageSection == e;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "div",
              { className: "SettingsItem Button" },
              r.createElement(
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
              r.createElement(
                c.TB,
                {
                  header: (0, a.Xx)("#AppSelect_LegacyDebug"),
                  onDismissRequested: () => l.G3.setRoutePageSection(null),
                },
                r.createElement(y.V, null),
              ),
          );
        }),
        M = (0, o.Pi)(() => {
          const e = "testcontrollers",
            t = l.G3.routePageSection == e;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "div",
              { className: "SettingsItem Button" },
              r.createElement(
                d.z,
                {
                  className: "ButtonControl",
                  onClick: () => l.G3.setRoutePageSection(e),
                },
                (0, a.Xx)("#AppSelect_ControllerTester"),
              ),
            ),
            t &&
              r.createElement(b.L, {
                onDismissRequested: () => l.G3.setRoutePageSection(null),
              }),
          );
        });
      function A(e) {
        return r.createElement(
          c.GV,
          { visibility: c.VK.Advanced, className: "SettingsItem Button" },
          r.createElement(
            c.ls,
            {
              icon: c.uc.PopOut,
              onClick: function () {
                let t = "bindingui/" + p.qA[(0, p.Op)()];
                e.mailbox.SendMessage(t, { type: "show_app_binding" });
              },
            },
            (0, a.Xx)("#Settings_ShowBindingUI"),
          ),
        );
      }
      function B(e) {
        return u.I.BDevMode
          ? r.createElement(
              c.GV,
              { className: "SettingsItem Button" },
              r.createElement(
                c.ls,
                {
                  icon: c.uc.PopOut,
                  onClick: function () {
                    if (VRHTML) {
                      switch ((0, p.Op)()) {
                        case p.qA.Desktop:
                          VRHTML.ShowBindingUI(!0);
                          break;
                        case p.qA.Overlay:
                          VRHTML.ShowBindingUI(!1);
                      }
                      let t = "bindingui/" + p.qA[(0, p.Op)()];
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
      let k = (_ = class extends r.Component {
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
                const i = u.I.GetDeviceInfo(e);
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
          const t = u.I.GetDeviceInfo(e);
          if (!t) return !1;
          const n = u.I.GetControllerTypeInfo(t.controller_type);
          if (!n) return !1;
          for (let e in n.input_source)
            if ("joystick" == n.input_source[e].type) return !0;
          return !1;
        }
        showCalibration(e) {
          this.setState({ sDeviceToCalibrate: e });
        }
        GetThumbstickDeadzoneSetting() {
          let e = u.I.GetDeviceInfo("/user/hand/left");
          return (
            e || (e = u.I.GetDeviceInfo("/user/hand/right")),
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
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                c.GV,
                { className: "SettingsItem" },
                r.createElement(
                  d.z,
                  { className: "ButtonControl", onClick: this.show },
                  (0, a.Xx)("#Settings_ShowThumbstickSettings"),
                ),
              ),
              this.state.bShowingModal &&
                r.createElement(
                  c.TB,
                  {
                    header: (0, a.Xx)("#Settings_ThumbstickSettings"),
                    onDismissRequested: this.hide,
                  },
                  null !== this.state.sDeviceToCalibrate &&
                    r.createElement(S, {
                      devicePath: this.state.sDeviceToCalibrate,
                      fnCloseCalibrator: this.closeCalibrator,
                      fnUpdateThumbstickCalibration: this.updateCalibration,
                    }),
                  _.devices.map((e) => {
                    if (
                      !this.shouldShowThumbstickCalibrateForHand(e.sDevicePath)
                    )
                      return r.createElement(
                        c.GV,
                        {
                          key: e.sDevicePath,
                          title: (0, a.Xx)(
                            "#Settings_General_CalibrateThumbstick_ConnectAController",
                          ),
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        r.createElement(
                          "div",
                          { className: "Label" },
                          (0, a.Xx)(
                            e.sThumbstickAngleLabelPlaceholderUnlocalized,
                          ),
                        ),
                        r.createElement(
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
                      r.createElement(
                        c.GV,
                        {
                          key: e.sDevicePath,
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        r.createElement(
                          "div",
                          { className: "Label" },
                          (0, a.Xx)(
                            e.sThumbstickAngleLabelUnlocalized,
                            t.toFixed(1),
                          ),
                        ),
                        r.createElement(
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
                    r.createElement(c.U4, {
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
      (k.devices = [
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
        (0, i.gn)([s.ak], k.prototype, "resetToDefaults", null),
        (0, i.gn)([s.ak], k.prototype, "closeCalibrator", null),
        (0, i.gn)([s.ak], k.prototype, "updateCalibration", null),
        (0, i.gn)([s.ak], k.prototype, "showCalibration", null),
        (0, i.gn)([s.ak], k.prototype, "show", null),
        (0, i.gn)([s.ak], k.prototype, "hide", null),
        (k = _ = (0, i.gn)([o.Pi], k));
      let T = (v = class extends r.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new p.Nv()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = r.createRef()),
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
          let n = "bindingui/" + p.qA[(0, p.Op)()];
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
            ? p.Kg.TrackedControllerRole_RightHand
            : p.Kg.TrackedControllerRole_LeftHand;
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
          const s = this.state.bForceToggleToCustom || !i || i != n,
            o =
              (null === (e = this.state.currentActionManifest) || void 0 === e
                ? void 0
                : e.supports_dominant_hand_setting) &&
              null != this.state.eDominantHand,
            l =
              this.state.eDominantHand == p.Kg.TrackedControllerRole_RightHand;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              c.GV,
              { className: "SettingsItem" },
              r.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.show },
                (0, a.Xx)("#Settings_Controller_AdvancedControllerSettings"),
              ),
            ),
            this.shouldShowModal &&
              r.createElement(
                c.TB,
                {
                  className: "BindingsModal",
                  header: r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      "h1",
                      null,
                      (0, a.Xx)(
                        "#Settings_ManageControllerBindingSettingsForApp",
                      ),
                    ),
                    r.createElement(c.YL, {
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
                  subheader: u.I.IsSteamAvailable
                    ? null
                    : (0, a.Xx)("#Settings_NeedSteamTo_ViewAndEditBindings"),
                  onDismissRequested: this.close,
                },
                this.state.currentControllerType &&
                  r.createElement(
                    c.GV,
                    { className: "SettingsItem" },
                    r.createElement(
                      "div",
                      { className: "Label" },
                      (0, a.Xx)("#Settings_ActiveController"),
                    ),
                    r.createElement(
                      "div",
                      { className: "Label" },
                      u.I.LocalizeDriverString(
                        this.state.currentControllerType.resource_root,
                        this.state.currentControllerType.controller_type,
                      ),
                    ),
                  ),
                !u.I.IsSteamAvailable &&
                  this.state.currentBinding &&
                  r.createElement(
                    c.GV,
                    { className: "SettingsItem" },
                    r.createElement(
                      "div",
                      { className: "Label" },
                      (0, a.Xx)("#Settings_ActiveBinding"),
                    ),
                    r.createElement(
                      "div",
                      { className: "Label" },
                      this.state.currentBinding.name,
                    ),
                  ),
                u.I.IsSteamAvailable &&
                  r.createElement(c.wy, {
                    label: (0, a.Xx)("#Settings_ActiveControllerBinding"),
                    offLabel: (0, a.Xx)("#Settings_Controller_DefaultBinding"),
                    onLabel: (0, a.Xx)("#Settings_Controller_CustomBinding"),
                    onChange: this.onToggleDefaultCustomBinding,
                    value: s,
                    onSubsection: r.createElement(
                      r.Fragment,
                      null,
                      (!n || !this.state.currentBinding) &&
                        r.createElement(
                          "div",
                          { className: "SettingsItem Label" },
                          (0, a.Xx)("#Settings_Loading_CurrentBinding"),
                        ),
                      s &&
                        r.createElement(
                          "div",
                          {
                            className:
                              "SettingsItem ButtonRow BindingButtonRow",
                          },
                          r.createElement(
                            c.ls,
                            {
                              icon: c.uc.PopOut,
                              enabled: u.I.IsSteamAvailable && Boolean(n),
                              onClick: this.showBindingDetail.bind(this, !0),
                            },
                            (0, a.Xx)("#Settings_EditBinding"),
                          ),
                          r.createElement(
                            c.ls,
                            {
                              icon: c.uc.PopOut,
                              enabled: u.I.IsSteamAvailable,
                              onClick: this.showBindingDetail.bind(this, !1),
                            },
                            (0, a.Xx)("#Settings_EditBinding_ChooseAnother"),
                          ),
                        ),
                    ),
                  }),
                r.createElement("div", { className: "Spacer" }),
                this.state.currentBinding &&
                  r.createElement(E, {
                    appKey: this.state.currentBindingApp.key,
                  }),
                o &&
                  r.createElement(c.wy, {
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
      (T.PAGE_SECTION = "appcontrollerbindings"),
        (0, i.gn)([m.Fl], T.prototype, "shouldShowModal", null),
        (0, i.gn)([m.Fl], T.prototype, "currentRouteAppKey", null),
        (0, i.gn)([s.ak], T.prototype, "onApplicationDropdownChange", null),
        (0, i.gn)([s.ak], T.prototype, "onToggleDefaultCustomBinding", null),
        (0, i.gn)([s.ak], T.prototype, "showBindingDetail", null),
        (0, i.gn)([s.ak], T.prototype, "show", null),
        (0, i.gn)([s.ak], T.prototype, "close", null),
        (0, i.gn)([s.ak], T.prototype, "showBindingCallouts", null),
        (0, i.gn)([s.ak], T.prototype, "onToggleDominantHand", null),
        (T = v = (0, i.gn)([o.Pi], T));
      const E = (e) =>
        r.createElement(
          c.GV,
          { className: "SettingsItem" },
          r.createElement(
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
              (0, p.Op)() == p.qA.Overlay
                ? "#Settings_Controller_ShowBindingCallouts"
                : "#Settings_Controller_ShowBindingCalloutsInVR",
            ),
          ),
        );
      let D = class extends r.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new p.Nv()),
            (this.state = { bShowingModal: !1, dongles: [], isPairing: !1 }),
            (this.m_mailbox = new p.Nv()),
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
            let n = r.createElement(
              "div",
              { key: e.serial, className: "ButtonRow" },
              "Dongle ",
              e.serial,
              " connected to ",
              e.connectedSerial,
              !this.state.isPairing &&
                r.createElement(
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
                r.createElement(
                  "h2",
                  null,
                  " ",
                  (0, a.Xx)("#Settings_Controller_Pairing"),
                  " ",
                ),
            );
            t.push(n);
          }
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              c.GV,
              { className: "SettingsItem" },
              r.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.show },
                (0, a.Xx)("#Settings_Controller_PairControllers"),
              ),
            ),
            this.state.bShowingModal &&
              r.createElement(
                c.TB,
                {
                  header: (0, a.Xx)(
                    "#Settings_Controller_ControllerPairingSection",
                  ),
                  onDismissRequested: this.hide,
                },
                r.createElement(r.Fragment, null, t),
                e &&
                  r.createElement(
                    "h1",
                    null,
                    "No controller dongles detected.",
                  ),
              ),
          );
        }
      };
      (0, i.gn)([s.ak], D.prototype, "OnDiscoverDonglesResponse", null),
        (0, i.gn)([s.ak], D.prototype, "DiscoverDongles", null),
        (0, i.gn)([s.ak], D.prototype, "StartPairing", null),
        (0, i.gn)([s.ak], D.prototype, "show", null),
        (0, i.gn)([s.ak], D.prototype, "hide", null),
        (D = (0, i.gn)([o.Pi], D));
      let I = class extends r.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new p.Nv()),
            (this.m_DeviceEventCallbackHandle = null),
            (this.m_DeviceFirmwareEventCallbackHandle = null),
            (this.state = { bShowingModal: !1, controllers: [] }),
            (this.m_mailbox = new p.Nv()),
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
          for (let s of null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRSystem.GetTrackedDeviceClasses().filter(
                (e) => e.eClass == p.qR.Controller,
              )) {
            let o =
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetStringProperty(
                          s.unIndex,
                          p.Uk.ModelNumber_String,
                        )) && void 0 !== e
                  ? e
                  : "Unknown Controller",
              a =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetStringProperty(
                          s.unIndex,
                          p.Uk.SerialNumber_String,
                        )) && void 0 !== t
                  ? t
                  : "",
              l =
                null !==
                  (n =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetBoolProperty(
                          s.unIndex,
                          p.Uk.Firmware_UpdateAvailable_Bool,
                        )) &&
                void 0 !== n &&
                n,
              c = null;
            this.state.controllers.some((e) => e.serial == a && ((c = e), !0));
            let u = r.createElement(
              "div",
              { key: a },
              r.createElement("div", null, o, " - ", a),
              r.createElement(
                "div",
                null,
                !l &&
                  !(null == c ? void 0 : c.updateInProgress) &&
                  r.createElement("div", null, "Up to date"),
                (null == c ? void 0 : c.updateInProgress) &&
                  r.createElement("progress", { value: c.updateProgress }),
                l &&
                  !c &&
                  r.createElement(
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
                  r.createElement(
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
            i.push(u);
          }
          const s = 0 == i.length;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              c.GV,
              { className: "SettingsItem" },
              r.createElement(
                d.z,
                { className: "ButtonControl", onClick: this.show },
                "Update Controllers",
              ),
            ),
            this.state.bShowingModal &&
              r.createElement(
                c.TB,
                { header: "Update Controllers", onDismissRequested: this.hide },
                r.createElement(r.Fragment, null, i),
                s && r.createElement("h1", null, "No controllers connected."),
              ),
          );
        }
      };
      (0, i.gn)([s.ak], I.prototype, "OnControllerUpdateStatus", null),
        (0, i.gn)([s.ak], I.prototype, "StartUpdate", null),
        (0, i.gn)([s.ak], I.prototype, "onDeviceEvent", null),
        (0, i.gn)([s.ak], I.prototype, "onFirmwareStateChanged", null),
        (0, i.gn)([s.ak], I.prototype, "show", null),
        (0, i.gn)([s.ak], I.prototype, "hide", null),
        (I = (0, i.gn)([o.Pi], I));
      let x = class extends c.d9 {
        constructor(e) {
          super(e),
            (this.m_mailbox = new p.Nv()),
            (this.m_refControllerSettingsSection = r.createRef()),
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
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(E, null),
            r.createElement(T, null),
            r.createElement(A, { mailbox: this.m_mailbox }),
            r.createElement(k, { ref: this.m_refControllerSettingsSection }),
            r.createElement(M, null),
            r.createElement(R, null),
            r.createElement(w, null),
            r.createElement(B, { mailbox: this.m_mailbox }),
            n && r.createElement(D, null),
            i && r.createElement(I, null),
            !1,
          );
        }
      };
      (x.Name = "controller_settings"),
        (0, i.gn)([s.ak], x.prototype, "ResetToDefaults", null),
        (x = (0, i.gn)([o.Pi], x));
    },
    8242: (e, t, n) => {
      n.d(t, {
        YL: () => z,
        d9: () => E,
        GV: () => T,
        VK: () => r,
        ls: () => K,
        uc: () => j,
        Ei: () => U,
        Xp: () => O,
        TB: () => X,
        U5: () => q,
        t0: () => P,
        D3: () => x,
        U4: () => F,
        wy: () => L,
        hR: () => G,
        vE: () => N,
      });
      var i,
        r,
        s = n(655),
        o = n(7294),
        a = n(7056),
        l = n(3568),
        c = n(2188),
        d = n(7062),
        p = n(1628),
        u = n(5876),
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
      function R(e, t, n) {
        (t = t.bind(VRHTML.VRPathProperties)),
          (n = n.bind(VRHTML.VRPathProperties));
        const [i, r] = o.useState(() => {
          try {
            return t(e);
          } catch (e) {
            return;
          }
        });
        return o.useEffect(() => (e ? n(e, r).unregister : void 0), [r, e]), i;
      }
      function w(e) {
        return R(
          e,
          VRHTML.VRPathProperties.GetStringPathProperty,
          VRHTML.VRPathProperties.RegisterForStringPathPropertyChangedEvents,
        );
      }
      function M(e) {
        return R(
          e,
          VRHTML.VRPathProperties.GetFloatPathProperty,
          VRHTML.VRPathProperties.RegisterForFloatPathPropertyChangedEvents,
        );
      }
      function A(e) {
        var t, n, i;
        const r = M(e.detent),
          s = {
            name: e.name,
            min: null !== (t = e.min) && void 0 !== t ? t : 0,
            max: null !== (n = e.max) && void 0 !== n ? n : 100,
            step: null !== (i = e.step) && void 0 !== i ? i : 5,
            detents: void 0 !== r ? [r] : void 0,
          };
        return o.createElement(
          F,
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
            s,
          ),
        );
      }
      function B(e) {
        const t = w(e.name);
        return o.createElement(
          T,
          {
            className: (0, g.LJ)("SettingsItem", "RadioButtons"),
            title: e.text ? (0, l.Xx)(e.text) : "",
          },
          o.createElement(
            "div",
            { className: "Label" },
            e.label ? (0, l.Xx)(e.label) : "",
          ),
          o.createElement("div", { className: "RadioButtonsSet" }, t),
        );
      }
      function k(e) {
        let t;
        return (
          "string" == typeof e.value
            ? (t = w(e.path))
            : "boolean" == typeof e.value
              ? (t = R(
                  e.path,
                  VRHTML.VRPathProperties.GetBoolPathProperty,
                  VRHTML.VRPathProperties
                    .RegisterForBoolPathPropertyChangedEvents,
                ))
              : "number" == typeof e.value && (t = M(e.path)),
          t === e.value ? e.children : null
        );
      }
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Advanced = 1)] = "Advanced"),
          (e[(e.Desktop = 2)] = "Desktop"),
          (e[(e.VR = 3)] = "VR");
      })(r || (r = {}));
      let T = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.label, delete e.subsection, delete e.visibility;
          let t = this.props.visibility == r.Advanced;
          switch (this.props.visibility) {
            case r.Desktop:
              t = (0, u.Op)() != u.qA.Desktop;
              break;
            case r.VR:
              t = (0, u.Op)() != u.qA.Overlay;
          }
          return t && !p.G3.showAdvancedSettings
            ? null
            : (this.props.visibility == r.Advanced &&
                (e.className = (0, g.LJ)(e.className, "Advanced")),
              o.createElement("div", e, this.props.children));
        }
      };
      T = (0, s.gn)([d.Pi], T);
      let E = class extends o.Component {
        constructor(e) {
          super(e);
        }
        makeSettingComponent(e) {
          if (e.requires)
            for (let t in e.requires) {
              let n = e.requires[t];
              if (p.G3.settings.get(t) != n) return null;
            }
          if (e.advanced_only && !p.G3.showAdvancedSettings) return null;
          let t = null;
          switch (null == e ? void 0 : e.control) {
            case "checkbox":
              t = o.createElement(D, {
                key: e.name,
                name: e.name,
                label: e.label ? (0, l.Xx)(e.label) : "",
                title: e.text ? (0, l.Xx)(e.text) : "",
              });
              break;
            case "toggle":
              t = o.createElement(L, {
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
              t = o.createElement(O, {
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
              t = o.createElement(P, {
                key: e.name,
                name: e.name,
                label: e.label ? (0, l.Xx)(e.label) : "",
                items: i,
              });
              break;
            case "scale":
            case "none":
            default:
              t = o.createElement("div", { key: e.name });
              break;
            case "slider":
              t = o.createElement(A, Object.assign({ key: e.name }, e));
              break;
            case "label":
              t = o.createElement(B, Object.assign({ key: e.name }, e));
          }
          if (
            (e.advanced_only &&
              (t = o.createElement(
                T,
                { key: e.name, className: "SettingsItem Advanced" },
                t,
              )),
            e.requires_paths)
          )
            for (let n in e.requires_paths)
              t = o.createElement(
                k,
                { key: e.name, path: n, value: e.requires_paths[n] },
                t,
              );
          return t;
        }
        makeResetToDefaultButton() {
          return o.createElement(
            "div",
            { className: "SettingsItem Button ResetDefaultButton" },
            o.createElement(
              m.z,
              { className: "ButtonControl", onClick: this.ResetToDefaults },
              (0, l.Xx)("#Settings_ResetPageToDefault"),
            ),
          );
        }
        ResetToDefaults() {
          for (let e of this.props.section.values)
            null != e.name && p.G3.SetSettingsValue(e.name, null);
        }
        get schemaComponents() {
          if (!this.props.section.values) return null;
          let e = [];
          for (let t of this.props.section.values)
            if (null == t ? void 0 : t.control) {
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
          return o.createElement("div", null, t);
        }
        render() {
          return this.props.active
            ? o.createElement(
                o.Fragment,
                null,
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (0, s.gn)([a.ak], E.prototype, "ResetToDefaults", null),
        (0, s.gn)([c.Fl], E.prototype, "schemaComponents", null),
        (E = (0, s.gn)([d.Pi], E));
      let D = class extends o.Component {
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
          this.props.name && p.G3.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            m.q.temporarilySuppressSoundEffect(),
            h.G.Instance.playSound(h.y.ButtonClick);
        }
        render() {
          let e = !!this.props.value;
          return (
            this.props.name && (e = !!p.G3.settings.get(this.props.name)),
            o.createElement(
              "div",
              { className: "FlexRow SettingsItem Checkbox" },
              o.createElement(
                "label",
                { className: "SettingsCheckboxContainer FlexRow" },
                o.createElement("input", {
                  type: "checkbox",
                  checked: e,
                  onChange: this.handleChange,
                }),
                o.createElement(
                  "div",
                  { className: "FlexColumn" },
                  this.props.label &&
                    o.createElement(
                      "div",
                      { className: "Label" },
                      this.props.label,
                    ),
                  this.props.title &&
                    o.createElement(
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
      (0, s.gn)([a.ak], D.prototype, "handleChange", null),
        (D = (0, s.gn)([d.Pi], D));
      let I = class extends o.Component {
        constructor(e) {
          super(e);
        }
        handleChange(e) {}
        render() {
          let e = p.G3.settings.get(this.props.name);
          return o.createElement(
            T,
            {
              className: (0, g.LJ)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            o.createElement("div", { className: "Label" }, this.props.label),
            o.createElement("div", { className: "RadioButtonsSet" }, e),
          );
        }
      };
      (0, s.gn)([a.ak], I.prototype, "handleChange", null),
        (I = (0, s.gn)([d.Pi], I));
      let x = class extends o.Component {
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
            ? p.G3.settings.get(this.props.name)
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
          this.props.name && p.G3.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            (0, u.Op)() == u.qA.Overlay &&
              (m.q.temporarilySuppressSoundEffect(),
              h.G.Instance.playSound(h.y.ButtonClick)),
            this.props.requiresRestart && p.G3.SetRestartRequired();
        }
        onGroupMouseEnter() {
          2 == this.props.items.length &&
            (0, u.Op)() == u.qA.Overlay &&
            _.L.Instance.triggerHaptic(u.sH.ButtonEnter);
        }
        onGroupMouseLeave() {
          2 == this.props.items.length &&
            (0, u.Op)() == u.qA.Overlay &&
            _.L.Instance.triggerHaptic(u.sH.ButtonLeave);
        }
        onOptionMouseEnter() {
          2 != this.props.items.length &&
            (0, u.Op)() == u.qA.Overlay &&
            _.L.Instance.triggerHaptic(u.sH.ButtonEnter);
        }
        onOptionMouseLeave() {
          2 != this.props.items.length &&
            (0, u.Op)() == u.qA.Overlay &&
            _.L.Instance.triggerHaptic(u.sH.ButtonLeave);
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
            r = this.props.items.findIndex((e) =>
              this.ValuesAreEqual(e.value, i),
            ),
            s =
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
            a = !!s;
          return o.createElement(
            T,
            {
              className: (0, g.LJ)("SettingsItem", "SegmentedControl"),
              title: this.props.title,
              visibility: this.props.visibility,
            },
            o.createElement("div", { className: "Label" }, this.props.label),
            o.createElement(
              "div",
              { className: (0, g.LJ)("SubsectionStem", ["Hidden", !a]) },
              o.createElement(
                "div",
                {
                  className: (0, g.LJ)("SegmentedControlGroup", [
                    "DualValue",
                    2 == this.props.items.length,
                  ]),
                  style: {
                    "--item-count": this.props.items.length,
                    "--item-value-index": r,
                    "--toggle-control-translate-x-direction":
                      0 == r
                        ? 1
                        : r == this.props.items.length - 1
                          ? -1
                          : this.state.nMouseDownIndex > r
                            ? 1
                            : this.state.nMouseDownIndex < r
                              ? -1
                              : 0,
                  },
                  onMouseEnter: this.onGroupMouseEnter,
                  onMouseLeave: this.onGroupMouseLeave,
                },
                this.props.items.map((e, t) =>
                  o.createElement(
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
                    o.createElement("span", null, e.sLabel),
                  ),
                ),
              ),
            ),
            !!s &&
              o.createElement("div", { className: "Subsection WithStem" }, s),
          );
        }
      };
      (0, s.gn)([a.ak], x.prototype, "onGroupMouseEnter", null),
        (0, s.gn)([a.ak], x.prototype, "onGroupMouseLeave", null),
        (0, s.gn)([a.ak], x.prototype, "onOptionMouseEnter", null),
        (0, s.gn)([a.ak], x.prototype, "onOptionMouseLeave", null),
        (x = (0, s.gn)([d.Pi], x));
      let L = class extends o.Component {
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
          return o.createElement(x, {
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
      L = (0, s.gn)([d.Pi], L);
      let O = class extends o.Component {
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
            ? p.G3.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            p.G3.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e),
            this.props.requiresRestart && p.G3.SetRestartRequired();
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onChange = this.onChange),
            (e.value = this.value),
            o.createElement(
              T,
              {
                className: "SettingsItem",
                title: this.props.title,
                visibility: this.props.visibility,
              },
              this.props.label &&
                o.createElement(
                  "div",
                  {
                    className: (0, g.LJ)("Label", [
                      "Spanning",
                      this.props.fullWidth,
                    ]),
                  },
                  this.props.label,
                ),
              o.createElement(
                "div",
                {
                  className: (0, g.LJ)("SubsectionStem", [
                    "Hidden",
                    !this.props.subsection,
                  ]),
                },
                o.createElement(v.Lt, Object.assign({}, e)),
              ),
              !!this.props.subsection &&
                o.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  this.props.subsection,
                ),
            )
          );
        }
      };
      (0, s.gn)([c.Fl], O.prototype, "value", null),
        (0, s.gn)([a.ak], O.prototype, "onChange", null),
        (O = (0, s.gn)([d.Pi], O));
      let P = class extends o.Component {
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
            ? p.G3.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            p.G3.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e);
        }
        render() {
          const e = this.props.items.map((e, t) => {
            const n = this.props.comparator
              ? this.props.comparator(this.value, e.value)
              : this.value == e.value;
            return o.createElement(
              m.z,
              {
                className: (0, g.LJ)("RadioButton", ["Selected", n]),
                key: t,
                enabled: !n,
                onClick: () => this.onChange(e.value),
              },
              o.createElement("div", { className: "Label" }, e.sLabel),
            );
          });
          return o.createElement(
            T,
            {
              className: (0, g.LJ)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            o.createElement("div", { className: "Label" }, this.props.label),
            o.createElement("div", { className: "RadioButtonsSet" }, e),
          );
        }
      };
      (0, s.gn)([c.Fl], P.prototype, "value", null),
        (0, s.gn)([a.ak], P.prototype, "onChange", null),
        (P = (0, s.gn)([d.Pi], P));
      let F = class extends o.Component {
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
            p.G3.SetDashboardFadeSupression(
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
            p.G3.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            ),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e);
        }
        get value() {
          if (this.props.name) {
            return p.G3.settings.get(this.props.name) || 0;
          }
          return this.props.value;
        }
        onChange(e) {
          var t, n;
          this.props.name &&
            p.G3.SetSettingsValue(this.props.name, e.toString()),
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
            o.createElement(
              T,
              {
                className: (0, g.LJ)(
                  "SettingsItem",
                  "Slider",
                  this.props.additionalClassName,
                ),
                title: this.props.title,
              },
              this.props.label &&
                o.createElement(
                  "label",
                  {
                    className: (0, g.LJ)("Label", [
                      "Spanning",
                      this.props.labelSpans,
                    ]),
                  },
                  this.props.label,
                ),
              o.createElement(f.iR, Object.assign({}, e)),
            )
          );
        }
      };
      function V(e) {
        return (
          "#" +
          ("0" + Math.floor(e.r).toString(16)).slice(-2) +
          ("0" + Math.floor(e.g).toString(16)).slice(-2) +
          ("0" + Math.floor(e.b).toString(16)).slice(-2) +
          ("0" + Math.floor(255 * e.a).toString(16)).slice(-2)
        ).toUpperCase();
      }
      (0, s.gn)([a.ak], F.prototype, "onInteractionStart", null),
        (0, s.gn)([a.ak], F.prototype, "onInteractionEnd", null),
        (0, s.gn)([c.Fl], F.prototype, "value", null),
        (0, s.gn)([a.ak], F.prototype, "onChange", null),
        (F = (0, s.gn)([d.Pi], F));
      let N = (i = class extends o.Component {
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
          let r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - r;
          return [
            i.HueToRGB(s, r, e + 1 / 3),
            i.HueToRGB(s, r, e),
            i.HueToRGB(s, r, e - 1 / 3),
          ];
        }
        static RGBtoHueLuminance(e, t, n) {
          (e /= 255), (t /= 255), (n /= 255);
          let i = Math.max(e, t, n),
            r = Math.min(e, t, n),
            s = 0,
            o = (i + r) / 2;
          if (i != r) {
            let o = i - r;
            switch (i) {
              case e:
                s = (t - n) / o + (t < n ? 6 : 0);
                break;
              case t:
                s = (n - e) / o + 2;
                break;
              case n:
                s = (e - t) / o + 4;
            }
            s /= 6;
          }
          return { hue: 360 * s, luminance: o };
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
            p.G3.SetSettingsValue(this.props.name, e);
          }
          this.props.nameR &&
            this.props.nameG &&
            this.props.nameB &&
            (p.G3.SetSettingsValue(this.props.nameR, t[0]),
            p.G3.SetSettingsValue(this.props.nameG, t[1]),
            p.G3.SetSettingsValue(this.props.nameB, t[2])),
            this.props.onChange &&
              this.props.onChange({ r: t[0], g: t[1], b: t[2] });
        }
        render() {
          let e, t, n;
          this.props.nameR && this.props.nameG && this.props.nameB
            ? ((e = p.G3.settings.get(this.props.nameR)),
              (t = p.G3.settings.get(this.props.nameG)),
              (n = p.G3.settings.get(this.props.nameB)))
            : this.props.value &&
              ((e = this.props.value.r),
              (t = this.props.value.g),
              (n = this.props.value.b));
          const r = i.RGBtoHueLuminance(e, t, n),
            s = 360 / (1 - i.WHITE_SIZE_PERCENT),
            a = 255 == e && 255 == t && 255 == n ? s : r.hue;
          return o.createElement(F, {
            additionalClassName: "Hue",
            label: this.props.label,
            labelSpans: !0,
            title: this.props.text,
            styleVariant: f.uz.Color,
            renderValue: (e) =>
              e > 360 ? "white" : "hsl(" + e + ", 100%, 50%)",
            max: s,
            value: a,
            onChange: this.onSliderChanged,
          });
        }
      });
      (N.WHITE_SIZE_PERCENT = 0.03),
        (0, s.gn)([a.ak], N.prototype, "onSliderChanged", null),
        (N = i = (0, s.gn)([d.Pi], N));
      let G = class extends o.Component {
        get value() {
          return this.props.name
            ? p.G3.settings.get(this.props.name)
            : this.props.value;
        }
        onSliderChanged(e) {
          this.props.onChange && this.props.onChange(e),
            this.props.name && p.G3.SetSettingsValue(this.props.name, e);
        }
        render() {
          const e = this.props.color
            ? this.props.color
            : { r: 255, g: 255, b: 255 };
          return o.createElement(F, {
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
      (0, s.gn)([c.Fl], G.prototype, "value", null),
        (0, s.gn)([a.ak], G.prototype, "onSliderChanged", null),
        (G = (0, s.gn)([d.Pi], G));
      let H,
        U = class extends o.Component {
          constructor(e) {
            super(e), (this.state = { bShowingModal: !1 });
          }
          get value() {
            if (this.props.name)
              return (e = p.G3.settings.get(this.props.name))
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
                this.props.nameR && (e.r = p.G3.settings.get(this.props.nameR)),
                this.props.nameG && (e.g = p.G3.settings.get(this.props.nameG)),
                this.props.nameB && (e.b = p.G3.settings.get(this.props.nameB)),
                this.props.nameA &&
                  (e.a = p.G3.settings.get(this.props.nameA) / this.alphaScale),
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
            this.props.name && p.G3.SetSettingsValue(this.props.name, V(n)),
              this.props.nameA &&
                p.G3.SetSettingsValue(this.props.nameA, e * this.alphaScale),
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
            this.props.name && p.G3.SetSettingsValue(this.props.name, V(t)),
              this.props.nameR && p.G3.SetSettingsValue(this.props.nameR, t.r),
              this.props.nameG && p.G3.SetSettingsValue(this.props.nameG, t.g),
              this.props.nameB && p.G3.SetSettingsValue(this.props.nameB, t.b),
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
            return o.createElement(
              T,
              {
                className: "SettingsItem ColorPicker",
                title: this.props.title,
              },
              this.props.label &&
                o.createElement(
                  "div",
                  { className: "Label" },
                  this.props.label,
                ),
              o.createElement(m.z, {
                className: "ButtonControl",
                onClick: this.showModal,
                style: {
                  "--color-value-rgb": e.r + "," + e.g + "," + e.b,
                  "--color-value-a": e.a,
                },
              }),
              this.state.bShowingModal &&
                o.createElement(
                  X,
                  {
                    onDismissRequested: this.hideModal,
                    header: this.props.label,
                  },
                  o.createElement(N, {
                    label: (0, l.Xx)("#Settings_Chaperone_BoundsColor"),
                    onChange: this.onColorChange,
                    value: e,
                  }),
                  o.createElement(G, {
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
      (0, s.gn)([c.Fl], U.prototype, "value", null),
        (0, s.gn)([c.Fl], U.prototype, "alphaScale", null),
        (0, s.gn)([a.ak], U.prototype, "onAlphaChange", null),
        (0, s.gn)([c.Fl], U.prototype, "minA", null),
        (0, s.gn)([c.Fl], U.prototype, "maxA", null),
        (0, s.gn)([a.ak], U.prototype, "onColorChange", null),
        (0, s.gn)([a.ak], U.prototype, "showModal", null),
        (0, s.gn)([a.ak], U.prototype, "hideModal", null),
        (U = (0, s.gn)([d.Pi], U));
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
      (0, s.gn)([c.LO], W.prototype, "runningAppKey", void 0),
        (0, s.gn)([a.ak], W.prototype, "onSceneApplicationStateChanged", null);
      class z extends o.Component {
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
            r =
              null !==
                (n =
                  null !== (t = this.props.defaultAppKey) && void 0 !== t
                    ? t
                    : e) && void 0 !== n
                ? n
                : i;
          this.setCurrentApp(r);
        }
        setCurrentApp(e) {
          const t = p.G3.apps && p.G3.apps.find((t) => t.key == e);
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
          if (null != p.G3.apps)
            for (let n of p.G3.apps) {
              let i = !n.is_hidden;
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
            r = e.filter((e) => !n(e));
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
            r.sort((e, t) => e.sLabel.localeCompare(t.sLabel)),
            i.length > 0 && r.length > 0
              ? [...i, v.Kr.Separator, ...r]
              : i.length > 0
                ? i
                : r
          );
        }
        onControllerDropdownChanged(e) {
          H.setAppKey(this.props.stateKey, e), this.setCurrentApp(e);
        }
        render() {
          const e = this.makeAppChoiceList(),
            t = this.state.currentApp ? this.state.currentApp.key : null;
          return o.createElement(O, {
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
      (0, s.gn)([a.ak], z.prototype, "onSceneApplicationStateChanged", null),
        (0, s.gn)([a.ak], z.prototype, "onControllerDropdownChanged", null);
      const X = (e) => {
          let t = Object.assign({}, e),
            n = t.header;
          "string" == typeof n && (n = o.createElement("h1", null, n));
          let i = t.subheader;
          "string" == typeof i &&
            (i = o.createElement("div", { className: "Label" }, i));
          let r = t.footer;
          void 0 === r &&
            (r = o.createElement(q, {
              onDismissRequested: t.onDismissRequested,
            }));
          const s = t.allowableParentSelectors || [];
          return (
            u.n0.IsSceneGraphApp ||
              (t.allowableParentSelectors = [
                ...s,
                ".SettingsSidebarPageModalContainer",
              ]),
            o.createElement(
              S.u,
              Object.assign({}, t),
              n && o.createElement("div", { className: "Subsection Top" }, n),
              i &&
                o.createElement(
                  "div",
                  { className: "Subsection Top Subheader" },
                  i,
                ),
              e.children &&
                o.createElement(
                  C.P,
                  {
                    scrollDirection: C.I.Vertical,
                    className: "Subsection Body",
                  },
                  t.children,
                ),
              r &&
                o.createElement("div", { className: "Subsection Bottom" }, r),
            )
          );
        },
        q = (e) => {
          let t = e.leftControls ? e.leftControls : [];
          e.showResetButton &&
            t.push(
              o.createElement(
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
            o.createElement(
              m.z,
              {
                key: "close",
                className: "ButtonControl",
                onClick: e.onDismissRequested,
              },
              (0, l.Xx)("#Settings_General_Close"),
            ),
          ];
          return o.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            t,
            t.length > 0 &&
              n.length > 0 &&
              o.createElement("div", { className: "Spacer" }),
            n,
          );
        };
      var j;
      !(function (e) {
        e[(e.PopOut = 0)] = "PopOut";
      })(j || (j = {}));
      const K = (e) => {
        let t = null;
        return (
          void 0 !== e.icon &&
            e.icon === j.PopOut &&
            (t = o.createElement(b.ur, { className: "Icon" })),
          o.createElement(
            m.z,
            Object.assign(
              {
                className: (0, g.LJ)("ButtonControl", ["WithIcon", null !== t]),
              },
              e,
            ),
            o.createElement("span", null, e.children),
            t,
          )
        );
      };
    },
    7830: (e, t, n) => {
      n.d(t, {
        nb: () => M,
        Ux: () => x,
        Yw: () => L,
        DX: () => y,
        Dc: () => R,
        TO: () => k,
        RR: () => B,
      });
      var i,
        r = n(655),
        s = n(7294),
        o = n(2188),
        a = n(7056),
        l = n(3568),
        c = n(1628),
        d = n(8242),
        p = n(5177),
        u = n(5876),
        h = n(7062),
        m = n(8980),
        g = n(7176),
        S = n(3010),
        _ = n(4979);
      function v() {
        VRHTML
          ? VRHTML.VRMonitor.SetDirectModeEnabled(!0, !0)
          : window.open("vrmonitor://directmode/enable");
      }
      const y = (0, h.Pi)(() => {
          if (
            !c.G3.systemInfo ||
            0 == c.G3.systemInfo.refresh_rates.actual_display_frequency
          )
            return null;
          if (c.G3.systemInfo.refresh_rates.supported_rates.length > 1)
            return s.createElement(d.t0, {
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
            return s.createElement(
              d.GV,
              {
                className: "SettingsItem",
                title: e
                  ? null
                  : (0, l.Xx)("#Settings_Video_RefreshRate_OneSupported"),
              },
              s.createElement(
                "div",
                { className: "Label" },
                (0, l.Xx)("#Settings_Video_RefreshRate_Header"),
              ),
              s.createElement(
                "div",
                { className: (0, m.LJ)("Label", ["SubsectionStem", e]) },
                n + (0, l.Xx)("#Settings_Video_RefreshRate_HzSuffix"),
              ),
              e &&
                s.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  t &&
                    (0, l.Xx)(
                      "#Settings_Video_RefreshRate_NotAvailableExtended",
                    ),
                  t &&
                    (0, u.Op)() != u.qA.Overlay &&
                    s.createElement(
                      p.z,
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
          const [e, t] = s.useState(!1),
            n = (0, l.Xx)(
              "#Settings_Advanced_Supersampling_WidthByHeight",
              b,
              b,
            );
          return s.createElement(
            s.Fragment,
            null,
            e &&
              s.createElement(
                d.TB,
                {
                  className: "MaxRecommendedResolutionRecovery",
                  footer: s.createElement(
                    p.z,
                    {
                      key: "close",
                      className: "ButtonControl",
                      onClick: () => t(!1),
                    },
                    (0, l.Xx)("#Settings_General_Cancel"),
                  ),
                  onDismissRequested: () => t(!1),
                },
                s.createElement(
                  "div",
                  { className: "Description" },
                  (0, l.Xx)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryStatement",
                    n,
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "Description" },
                  (0, l.Xx)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryExplanation",
                    n,
                  ),
                ),
                s.createElement(
                  p.z,
                  {
                    className: "ButtonControl",
                    title: (0, l.Xx)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionAutoTip",
                    ),
                    onClick: () =>
                      (0, r.mG)(void 0, void 0, void 0, function* () {
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
                s.createElement(
                  p.z,
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
            s.createElement(
              "div",
              { className: "Label" },
              (0, l.Xx)(
                "#Settings_Video_MaxRecommendedResolutionRecoveryText",
                n,
              ),
            ),
            s.createElement(
              p.z,
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
          () => c.G3.settings.get(g.wc) == b && s.createElement(f, null),
        ),
        R = (0, h.Pi)(() => {
          const e = c.G3.settings.get(g.bt),
            t = c.G3.settings.get(g.eW);
          let n = [],
            i = c.G3.settings.get(g.aT);
          if ((i > 0 ? n.push(i) : n.push(1), null === e || null === t))
            return null;
          let r = null;
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
            const s = c.G3.settings.get(g.wc);
            Math.max(n, i) > s &&
              (n > i
                ? ((i = (s * i) / n), (n = s))
                : ((n = (s * n) / i), (i = s))),
              (n = 4 * Math.trunc(n / 4)),
              (i = 4 * Math.trunc(i / 4)),
              (r = (0, l.Xx)(
                "#Settings_Advanced_Supersampling_WidthByHeight",
                n,
                i,
              ));
          }
          return s.createElement(d.wy, {
            name: g.bt,
            label: (0, l.Xx)("#Settings_Advanced_Supersampling_Header"),
            onLabel: (0, l.Xx)("#Settings_Advanced_Supersampling_Auto"),
            offLabel: (0, l.Xx)("#Settings_Advanced_Supersampling_Custom"),
            title: e ? "" : (0, l.Xx)("#Explanation_Supersampling_Header"),
            swapOnOff: !0,
            offSubsection: s.createElement(
              s.Fragment,
              null,
              s.createElement(
                d.GV,
                { className: "SettingsItem" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, l.Xx)(
                    "#Settings_Advanced_Supersampline_ResolutionPerEye",
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "Label Right Resolution" },
                  s.createElement("div", { className: "Dimensions" }, r),
                  s.createElement(
                    "div",
                    { className: "Percentage" },
                    Math.round(100 * t).toString() + "%",
                  ),
                ),
                s.createElement(d.U4, {
                  min: 0.2,
                  max: 5,
                  step: 0.02,
                  detents: n,
                  value: t,
                  onChange: (e) => c.G3.SetSettingsValue(g.eW, e),
                }),
                s.createElement(C, null),
              ),
            ),
          });
        });
      let w = class extends s.Component {
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
            u.Uk.HmdColumnCorrectionSettingPrefix_String,
          );
          if (!e) return null;
          if ("firmware_update_required" == e)
            return s.createElement(
              d.GV,
              {
                title: (0, l.Xx)("#DisplaySettings_ColumnCorrectionDesc"),
                className: "SettingsItem",
                visibility: this.props.visibility,
              },
              s.createElement(
                "div",
                { className: "Label" },
                (0, l.Xx)("#DisplaySettings_ColumnCorrection"),
              ),
              s.createElement(
                "div",
                { className: "Subsection WithStem" },
                s.createElement(
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
            let r = c.G3.settings.get(n);
            null == r && (r = 0);
            let o = c.G3.settings.get(i);
            return (
              null == o && (o = 0),
              s.createElement(
                d.GV,
                {
                  className: "SettingsItem",
                  title: (0, l.Xx)("#DisplaySettings_ColumnCorrectionDesc"),
                  visibility: this.props.visibility,
                },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, l.Xx)("#DisplaySettings_IndexColumnCorrection"),
                ),
                s.createElement(
                  p.z,
                  { className: "ButtonControl", onClick: this.showModal },
                  (0, l.Xx)("#DisplaySettings_ColumnCorrectionEdit"),
                ),
                this.state.bShowingModal &&
                  s.createElement(
                    d.TB,
                    {
                      onDismissRequested: this.hideModal,
                      allowableParentSelectors: [".SettingsMain"],
                      header: (0, l.Xx)(
                        "#DisplaySettings_IndexColumnCorrection",
                      ),
                      footer: s.createElement(d.U5, {
                        showResetButton: !0,
                        onResetRequested: () => {
                          c.G3.SetSettingsValue(g.zL, 1),
                            c.G3.SetSettingsValue(n, 0),
                            c.G3.SetSettingsValue(i, 0);
                        },
                        onDismissRequested: this.hideModal,
                      }),
                    },
                    s.createElement(d.wy, {
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
                    s.createElement(d.U4, {
                      label: (0, l.Xx)(
                        "#DisplaySettings_ColumnCorrectionBiasLeft",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: r,
                      detents: [0],
                      valueStyleVariant: _.px.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => c.G3.SetSettingsValue(n, e),
                    }),
                    s.createElement(d.U4, {
                      label: (0, l.Xx)(
                        "#DisplaySettings_ColumnCorrectionBiasRight",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: o,
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
      (0, r.gn)([a.ak], w.prototype, "showModal", null),
        (0, r.gn)([a.ak], w.prototype, "hideModal", null),
        (w = (0, r.gn)([h.Pi], w));
      const M = (0, h.Pi)(() => {
        var e, t;
        if (!VRHTML) return null;
        if (
          !VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            u.Uk.DisplaySupportsAnalogGain_Bool,
          )
        )
          return null;
        let n = c.G3.settings.get(g.bp);
        null == n && (n = 1);
        const i =
            null !==
              (e = VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                u.Uk.DisplayMaxAnalogGain_Float,
              )) && void 0 !== e
              ? e
              : 1,
          r =
            null !==
              (t = VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                u.Uk.DisplayMinUIAnalogGain_Float,
              )) && void 0 !== t
              ? t
              : 0.2;
        return s.createElement(
          d.GV,
          { className: "SettingsItem" },
          s.createElement(
            "div",
            { className: "Label" },
            (0, l.Xx)("#DisplaySettings_DisplayBrightness"),
          ),
          s.createElement(d.U4, {
            min: 100 * r,
            max: 100 * i,
            value:
              ((o = n),
              o < 0 ? 0 : o < 1 ? 100 * Math.pow(o, 1 / 2.2) : 100 * o),
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
        var o;
      });
      class A extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetRecommendedOverlayRenderQuality();
          return s.createElement(d.Xp, {
            name: "/settings/steamvr/overlayRenderQuality_2",
            label: (0, l.Xx)("#Settings_OverlayRenderQuality"),
            items: [
              {
                value: u.LL.Auto,
                sLabel:
                  void 0 !== e
                    ? (0, l.Xx)(
                        "#Settings_Auto_Parenthesized",
                        (0, l.Xx)("#Settings_" + u.LL[e]),
                      )
                    : (0, l.Xx)("#Settings_Auto"),
              },
              S.Kr.Separator,
              { value: u.LL.Low, sLabel: (0, l.Xx)("#Settings_Low") },
              { value: u.LL.Medium, sLabel: (0, l.Xx)("#Settings_Medium") },
              { value: u.LL.High, sLabel: (0, l.Xx)("#Settings_High") },
            ],
            visibility: d.VK.Advanced,
          });
        }
      }
      class B extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return VRHTML &&
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.Uk.DisplayAllowNightMode_Bool,
            )
            ? s.createElement(d.wy, {
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
      const k = () => {
        if (!VRHTML) return null;
        if (
          VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            u.Uk.HasDriverDirectModeComponent_Bool,
          )
        )
          return "oculus" ===
            VRHTML.VRProperties.GetStringProperty(
              "/user/head",
              u.Uk.TrackingSystemName_String,
            )
            ? null
            : s.createElement(d.wy, {
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
          return s.createElement(d.wy, {
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
        return s.createElement(
          d.GV,
          { className: "SettingsItem", title: t },
          s.createElement(
            "div",
            { className: "Label" },
            (0, l.Xx)("#Settings_Advanced_MotionSmoothing_Header"),
          ),
          s.createElement(
            "div",
            { className: "Label Right" },
            (0, l.Xx)("#Settings_NotSupported"),
          ),
        );
      };
      var T, E, D;
      !(function (e) {
        (e[(e.UseGlobal = 0)] = "UseGlobal"),
          (e[(e.ForceOn = 1)] = "ForceOn"),
          (e[(e.ForceOff = 2)] = "ForceOff"),
          (e[(e.ForceAlwaysOn = 3)] = "ForceAlwaysOn");
      })(T || (T = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Letterbox = 1)] = "Letterbox"),
            (e[(e.Advanced = 2)] = "Advanced");
        })(E || (E = {})),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.Fine = 1)] = "Fine"),
            (e[(e.Normal = 2)] = "Normal"),
            (e[(e.Extreme = 3)] = "Extreme");
        })(D || (D = {}));
      const I = {
        [D.Fine]: { min: 0.8, max: 1.25, step: 0.001 },
        [D.Normal]: { min: 0.5, max: 2, step: 0.01 },
        [D.Extreme]: { min: 0.1, max: 10, step: 0.1 },
        [D.Off]: { min: 0, max: 100, step: 1 },
      };
      let x = (i = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = s.createRef()),
            (this.m_initialAppState = null),
            (this.state = {
              currentApp: null,
              nResolutionMultiplier: null,
              nFovScaleMultiplier: null,
              nFovScaleMultiplierInner: null,
              nFovScaleMultiplierUpper: null,
              nFovScaleMultiplierLower: null,
              eFovScaleFormat: E.Default,
              bShowRefreshRateOptions: null,
              nPreferredRefreshRate: null,
              eSmoothingMode: null,
              disableAsyncReprojection: null,
              bShowThrottleOptions: null,
              nFramesToThrottle: null,
              nAdditionalPrediction: null,
              eWorldScaleRange: D.Off,
              flWorldScaleMultiplier: null,
            });
        }
        componentDidMount() {
          this.m_routeObservingAutorunDisposer = (0, o.EH)(() => {
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
              u.Uk.Hmd_SupportsAppThrottling_Bool,
            ) ||
            (!VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.Uk.HasDriverDirectModeComponent_Bool,
            ) &&
              this.state.disableAsyncReprojection)
          );
        }
        get enableMotionSmoothingOverrideSettings() {
          return (
            !!VRHTML &&
            (VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.Uk.HasDriverDirectModeComponent_Bool,
            )
              ? "oculus" !==
                VRHTML.VRProperties.GetStringProperty(
                  "/user/head",
                  u.Uk.TrackingSystemName_String,
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
              u.Uk.HasDriverDirectModeComponent_Bool,
            )
          );
        }
        get worldScaleRangeMin() {
          return I[this.state.eWorldScaleRange].min;
        }
        get worldScaleRangeMax() {
          return I[this.state.eWorldScaleRange].max;
        }
        get worldScaleRangeStep() {
          return I[this.state.eWorldScaleRange].step;
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
            let r = null !== (t = e.throttling) && void 0 !== t ? t : 0,
              s = null !== (n = e.prediction) && void 0 !== n ? n : 0,
              o = D.Off;
            1 !== e.worldscale &&
              (o =
                Math.round(1e3 * e.worldscale) % 10 != 0
                  ? D.Fine
                  : e.worldscale < I[D.Normal].min ||
                      e.worldscale > I[D.Normal].max
                    ? D.Extreme
                    : D.Normal),
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
                    : E.Default,
                bShowRefreshRateOptions: e.preferred_refresh_rate > 0,
                nPreferredRefreshRate: e.preferred_refresh_rate,
                eSmoothingMode: e.smoothing,
                disableAsyncReprojection: e.disable_async_reprojection,
                bShowThrottleOptions:
                  void 0 !== e.throttling || void 0 !== e.prediction,
                nFramesToThrottle: r,
                nAdditionalPrediction: s - r,
                eWorldScaleRange: o,
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
            case E.Letterbox:
              n *= this.state.nFovScaleMultiplier;
              break;
            case E.Advanced:
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
              r = Math.max(
                512,
                Math.floor(
                  c.G3.systemInfo.render_target_size.height * Math.sqrt(e * n) +
                    0.5,
                ),
              );
            const s = c.G3.settings.get(g.wc);
            return (
              Math.max(i, r) > s &&
                (i > r
                  ? ((r = (s * r) / i), (i = s))
                  : ((i = (s * i) / r), (r = s))),
              (i = 4 * Math.trunc(i / 4)),
              (r = 4 * Math.trunc(r / 4)),
              (0, l.Xx)("#Settings_Advanced_Supersampling_WidthByHeight", i, r)
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
              I[e].min,
              Math.min(I[e].max, this.state.flWorldScaleMultiplier),
            ),
          }),
            this.setAppState(
              "worldscale",
              e == D.Off ? 1 : this.state.flWorldScaleMultiplier,
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
          this.state.eSmoothingMode == T.ForceAlwaysOn &&
            (t = s.createElement(
              s.Fragment,
              null,
              (0, l.Xx)(
                "#Settings_PerApplication_MotionSmoothing_AlwaysOn_Desc",
              ),
            ));
          const n = this.state.eFovScaleFormat == E.Advanced;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              d.GV,
              { className: "SettingsItem" },
              s.createElement(
                p.z,
                { className: "ButtonControl", onClick: this.show },
                (0, l.Xx)("#Settings_PerApplication_VideoSettings"),
              ),
            ),
            this.shouldShowModal &&
              s.createElement(
                d.TB,
                {
                  className: "AppVideoModal",
                  onDismissRequested: this.close,
                  header: s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "h1",
                      null,
                      (0, l.Xx)("#Settings_ManageVideoSettingsForApp"),
                    ),
                    s.createElement(d.YL, {
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
                  footer: s.createElement(d.U5, {
                    showResetButton: this.hasCurrentApp(),
                    onResetRequested: this.resetAppToDefaults,
                    onDismissRequested: this.close,
                  }),
                },
                this.hasCurrentApp() &&
                  s.createElement(
                    s.Fragment,
                    null,
                    this.enableMotionSmoothingOverrideSettings &&
                      null !== this.state.eSmoothingMode &&
                      !this.state.disableAsyncReprojection &&
                      s.createElement(d.Xp, {
                        label: (0, l.Xx)(
                          "#Settings_Advanced_MotionSmoothing_Header",
                        ),
                        items: [
                          {
                            value: T.UseGlobal,
                            sLabel: (0, l.Xx)(
                              "#Settings_PerApplication_MotionSmoothing_Global",
                            ),
                          },
                          {
                            value: T.ForceOn,
                            sLabel: (0, l.Xx)(
                              "#Settings_PerApplication_MotionSmoothing_On",
                            ),
                          },
                          {
                            value: T.ForceOff,
                            sLabel: (0, l.Xx)(
                              "#Settings_PerApplication_MotionSmoothing_Off",
                            ),
                          },
                          {
                            value: T.ForceAlwaysOn,
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
                      s.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_AppResHeader",
                            (0, l.Xx)("#Settings_SectionTitle_General"),
                          ),
                          className: "SettingsItem",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)("#Settings_PerApplication_AppResTitle"),
                        ),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            this.computedResolution,
                          ),
                          s.createElement(
                            "div",
                            { className: "Percentage" },
                            Math.round(
                              100 * this.state.nResolutionMultiplier,
                            ).toString() + "%",
                          ),
                        ),
                        s.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          s.createElement(d.U4, {
                            min: c.BQ,
                            max: c._g,
                            step: c.A3,
                            value: this.state.nResolutionMultiplier,
                            detents: [1],
                            onChange: this.onResolutionSliderChange,
                          }),
                          s.createElement(
                            d.GV,
                            { className: "SettingsItem" },
                            s.createElement(C, null),
                          ),
                        ),
                      ),
                    null !== this.state.nFovScaleMultiplier &&
                      (c.G3.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          1 != this.m_initialAppState.nFovScaleMultiplier)) &&
                      s.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_FovScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)("#Settings_PerApplication_FovScale_Label"),
                        ),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, l.Xx)(
                              "#Settings_PerApplication_FovScale_Multiplier",
                            ),
                          ),
                          !n &&
                            s.createElement(
                              "div",
                              { className: "Percentage" },
                              Math.round(
                                100 * this.state.nFovScaleMultiplier,
                              ).toString() + "%",
                            ),
                        ),
                        s.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          s.createElement(d.U4, {
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
                            s.createElement(
                              s.Fragment,
                              null,
                              s.createElement(d.U4, {
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
                              s.createElement(d.U4, {
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
                              s.createElement(d.U4, {
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
                            s.createElement(d.Xp, {
                              items: [
                                { value: E.Default, sLabel: "Default" },
                                { value: E.Letterbox, sLabel: "Letterbox" },
                                { value: E.Advanced, sLabel: "Advanced" },
                              ],
                              value: this.state.eFovScaleFormat,
                              onChange: this.onFovScaleFormatChange,
                            }),
                        ),
                      ),
                    null !== this.state.flWorldScaleMultiplier &&
                      (c.G3.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.eWorldScaleRange !== D.Off)) &&
                      s.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_WorldScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)(
                            "#Settings_PerApplication_WorldScale_Label",
                          ),
                        ),
                        s.createElement(d.Xp, {
                          items: [
                            {
                              value: D.Off,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Off",
                              ),
                            },
                            {
                              value: D.Fine,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Fine",
                              ),
                            },
                            {
                              value: D.Normal,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Normal",
                              ),
                            },
                            {
                              value: D.Extreme,
                              sLabel: (0, l.Xx)(
                                "#Settings_PerApplication_WorldScale_Extreme",
                              ),
                            },
                          ],
                          value: this.state.eWorldScaleRange,
                          onChange: this.onWorldScaleRangeChange,
                        }),
                      ),
                    this.state.eWorldScaleRange !== D.Off &&
                      s.createElement(
                        d.GV,
                        { className: "SettingsItem Advanced" },
                        s.createElement("div", { className: "Label" }),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, l.Xx)(
                              "#Settings_PerApplication_WorldScale_Range",
                              100 * this.worldScaleRangeMin,
                              100 * this.worldScaleRangeMax,
                            ),
                          ),
                          s.createElement(
                            "div",
                            { className: "Percentage" },
                            (
                              Math.round(
                                1e3 * this.state.flWorldScaleMultiplier,
                              ) / 10
                            ).toString() + "%",
                          ),
                        ),
                        s.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          s.createElement(d.U4, {
                            min: this.worldScaleRangeMin,
                            max: this.worldScaleRangeMax,
                            step: this.worldScaleRangeStep,
                            value: this.state.flWorldScaleMultiplier,
                            detents: [1],
                            onChange: this.onWorldScaleMultiplierSliderChange,
                          }),
                          s.createElement(
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
                      s.createElement(
                        s.Fragment,
                        null,
                        null !== this.state.bShowRefreshRateOptions &&
                          s.createElement(d.wy, {
                            label: (0, l.Xx)(
                              "#Settings_PerApplication_RefreshRateOverride_Checkbox",
                            ),
                            title: (0, l.Xx)(
                              "#Settings_Perapplication_RefreshRateOverride_Description",
                            ),
                            value: this.state.bShowRefreshRateOptions,
                            onChange: this.onRefreshRateOverrideChange,
                            onSubsection: s.createElement(d.t0, {
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
                      s.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_Reprojection_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(d.wy, {
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
                      s.createElement(
                        d.GV,
                        {
                          title: (0, l.Xx)(
                            "#Settings_PerApplication_ThrottlingOverride_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, l.Xx)(
                            "#Settings_PerApplication_ThrottlingOverride_Label",
                          ),
                        ),
                        s.createElement(d.wy, {
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
                          s.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            s.createElement(
                              "div",
                              { className: "Label" },
                              (0, l.Xx)(
                                "#Settings_PerApplication_ThrottlingOverride_Framerate",
                              ),
                            ),
                            s.createElement(d.U4, {
                              min: 5,
                              max: 0,
                              step: 1,
                              value: this.state.nFramesToThrottle,
                              valueStyleVariant: _.px.OnHandle,
                              renderValue: (e) =>
                                (this.currentRefreshRate / (e + 1)).toFixed(1),
                              onChange: this.onThrottleSliderChange,
                            }),
                            s.createElement(
                              "div",
                              { className: "Label" },
                              (0, l.Xx)(
                                "#Settings_PerApplication_ThrottlingOverride_Prediction",
                              ),
                            ),
                            s.createElement(d.U4, {
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
                  s.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, l.Xx)("#Settings_PerApplication_ChooseApplication"),
                  ),
              ),
          );
        }
      });
      (x.PAGE_SECTION = "appvideosettings"),
        (0, r.gn)([o.Fl], x.prototype, "shouldShowModal", null),
        (0, r.gn)([o.Fl], x.prototype, "currentRouteAppKey", null),
        (0, r.gn)([o.Fl], x.prototype, "enableThrottleOverrideSettings", null),
        (0, r.gn)(
          [o.Fl],
          x.prototype,
          "enableMotionSmoothingOverrideSettings",
          null,
        ),
        (0, r.gn)(
          [o.Fl],
          x.prototype,
          "enableLegacyReprojectionSettings",
          null,
        ),
        (0, r.gn)([o.Fl], x.prototype, "worldScaleRangeMin", null),
        (0, r.gn)([o.Fl], x.prototype, "worldScaleRangeMax", null),
        (0, r.gn)([o.Fl], x.prototype, "worldScaleRangeStep", null),
        (0, r.gn)([a.ak], x.prototype, "onApplicationDropdownChange", null),
        (0, r.gn)([a.ak], x.prototype, "updateAppState", null),
        (0, r.gn)([o.Fl], x.prototype, "computedResolution", null),
        (0, r.gn)([a.ak], x.prototype, "onResolutionSliderChange", null),
        (0, r.gn)([a.ak], x.prototype, "onFovScaleSliderChange", null),
        (0, r.gn)([a.ak], x.prototype, "onFovScaleSliderChangeInner", null),
        (0, r.gn)([a.ak], x.prototype, "onFovScaleSliderChangeUpper", null),
        (0, r.gn)([a.ak], x.prototype, "onFovScaleSliderChangeLower", null),
        (0, r.gn)([a.ak], x.prototype, "onFovScaleFormatChange", null),
        (0, r.gn)([a.ak], x.prototype, "onMotionSmoothChange", null),
        (0, r.gn)([a.ak], x.prototype, "onRefreshRateOverrideChange", null),
        (0, r.gn)([a.ak], x.prototype, "onRefreshRateChange", null),
        (0, r.gn)([a.ak], x.prototype, "onDisableAsyncReprojection", null),
        (0, r.gn)([a.ak], x.prototype, "onShowThrottleOptions", null),
        (0, r.gn)([a.ak], x.prototype, "onThrottleSliderChange", null),
        (0, r.gn)([a.ak], x.prototype, "onPredictionSliderChange", null),
        (0, r.gn)([a.ak], x.prototype, "onWorldScaleRangeChange", null),
        (0, r.gn)(
          [a.ak],
          x.prototype,
          "onWorldScaleMultiplierSliderChange",
          null,
        ),
        (0, r.gn)([a.ak], x.prototype, "resetAppToDefaults", null),
        (0, r.gn)([a.ak], x.prototype, "show", null),
        (0, r.gn)([a.ak], x.prototype, "close", null),
        (0, r.gn)([o.Fl], x.prototype, "allowPerAppRefreshRate", null),
        (0, r.gn)([o.Fl], x.prototype, "currentRefreshRate", null),
        (x = i = (0, r.gn)([h.Pi], x));
      class L extends d.d9 {
        render() {
          if (!this.props.active) return null;
          const e = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.Uk.Hmd_SupportsHDCP14LegacyCompat_Bool,
            ),
            t = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.Uk.Hmd_SupportsDisplayPortTrainingMode_Bool,
            ),
            n = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.Uk.Hmd_SupportsGpuBusMonitoring_Bool,
            );
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(y, null),
            s.createElement(M, null),
            s.createElement(B, null),
            s.createElement(k, null),
            s.createElement(R, null),
            s.createElement(d.wy, {
              name: "/settings/steamvr/doNotFadeToGrid",
              label: (0, l.Xx)("#Settings_FadeToGrid"),
              swapOnOff: !0,
            }),
            s.createElement(x, null),
            !1,
            s.createElement(d.wy, {
              name: "/settings/steamvr/allowSupersampleFiltering",
              label: (0, l.Xx)("#Settings_Advanced_AllowSupersampleFiltering"),
              visibility: d.VK.Advanced,
            }),
            s.createElement(A, null),
            e &&
              s.createElement(d.wy, {
                name: "/settings/steamvr/hdcp14legacyCompatibility",
                label: (0, l.Xx)("#Settings_Video_HDCP14LegacyCompatibility"),
                visibility: d.VK.Advanced,
                requiresRestart: !0,
              }),
            t &&
              s.createElement(d.Xp, {
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
            s.createElement(w, { visibility: d.VK.Advanced }),
            s.createElement(d.wy, {
              name: "/settings/power/pauseCompositorOnStandby",
              label: (0, l.Xx)("#Settings_PauseOnStandby"),
              visibility: d.VK.Advanced,
            }),
            n &&
              s.createElement(d.wy, {
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
    5876: (e, t, n) => {
      n.d(t, {
        ui: () => r.ui,
        CS: () => se,
        tS: () => r.tS,
        Nv: () => i.N,
        A4: () => Y,
        CH: () => Q,
        pL: () => oe,
        iN: () => E.iN,
        XN: () => d,
        Oq: () => r.Oq,
        dq: () => r.dq,
        Op: () => ae.Op,
        Y9: () => x,
        eK: () => ee,
        uM: () => A,
        O3: () => B,
        lx: () => ae.lx,
        wl: () => a,
        XX: () => ae.XX,
        zA: () => ae.zA,
        Qu: () => ae.Qu,
        vS: () => R,
        l0: () => ae.l0,
        Pw: () => ae.Pw,
        eF: () => S,
        LL: () => ae.LL,
        GC: () => ae.GC,
        Ic: () => u,
        Vv: () => h,
        Ko: () => m,
        yA: () => ae.yA,
        kF: () => k,
        Lx: () => ae.Lx,
        xj: () => v,
        xY: () => ae.xY,
        Kg: () => ae.Kg,
        qR: () => ae.qR,
        Uk: () => b,
        QZ: () => ae.QZ,
        zq: () => ae.zq,
        Yg: () => p,
        sH: () => C,
        o4: () => ae.o4,
        du: () => ae.du,
        Z9: () => ae.Z9,
        qC: () => ae.qC,
        a0: () => ae.a0,
        iC: () => $,
        qA: () => ae.qA,
        UU: () => r.UU,
        Nz: () => r.Nz,
        sO: () => te,
        jm: () => J,
        bt: () => X,
        JR: () => r.JR,
        LY: () => r.LY,
        q9: () => r.q9,
        x1: () => q,
        k7: () => E.k7,
        Pd: () => r.Pd,
        sl: () => I,
        Fx: () => r.Fx,
        Fs: () => r.Fs,
        mT: () => r.mT,
        M9: () => r.M9,
        Dd: () => O,
        s_: () => G,
        at: () => K,
        Bl: () => g,
        jL: () => j,
        qI: () => E.qI,
        Pf: () => r.Pf,
        gQ: () => z,
        Sb: () => re,
        kL: () => ne,
        n0: () => H,
        hz: () => o,
        Zj: () => r.Zj,
        eQ: () => r.eQ,
        $u: () => W,
        VW: () => L,
        gO: () => F,
        wx: () => P,
        Co: () => le,
        Kf: () => ae.Kf,
        wU: () => ae.wU,
      });
      var i = n(2380);
      if (865 != n.j) var r = n(2823);
      if (!/^(446|865)$/.test(n.j)) var s = n(655);
      class o {
        constructor() {
          (this.m_mailbox = new i.N()), this.m_mailbox.Init("sgtransformcache");
        }
        static getInstance() {
          return o.instance || (o.instance = new o()), o.instance;
        }
        requestSGTransform(e, t = 0) {
          return new Promise((n, i) =>
            (0, s.mG)(this, void 0, void 0, function* () {
              let r = { type: "transform_request", id: e, flPushDistance: t },
                s = yield this.m_mailbox.SendMessageAndWaitForResponse(
                  "vrcompositor_systemlayer",
                  r,
                  "transform_response",
                );
              s.id == e && s.transform
                ? n(s.transform)
                : i("requestSGTransform failed");
            }),
          );
        }
      }
      /^(446|865)$/.test(n.j) && (s = n(655));
      var a,
        l = n(447),
        c = n(7056);
      !(function (e) {
        (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
          (e[(e.Locomotion = 2)] = "Locomotion"),
          (e[(e.QuickRecenter = 4)] = "QuickRecenter");
      })(a || (a = {}));
      class d extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties["scene-color-mult"] = (0, l.Wz)(
              this.props["scene-color-mult"],
            )),
            (n.properties["floor-color-mult"] = (0, l.Wz)(
              this.props["floor-color-mult"],
            )),
            (n.properties["scene-reflection-mult"] = (0, l.Wz)(
              this.props["scene-reflection-mult"],
            )),
            (n.properties["skydome-mult"] = (0, l.Wz)(
              this.props["skydome-mult"],
            )),
            (n.properties["roomview-mult"] = (0, l.Vx)(
              this.props["roomview-mult"],
            )),
            (n.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((e, t) => e | t, 0)),
            (n.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (n.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (n.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (n.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (n.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [e, n]
          );
        }
      }
      (0, s.gn)([c.ZP], d.prototype, "buildNode", null);
      var p,
        u,
        h,
        m,
        g,
        S,
        _,
        v,
        y,
        b,
        f,
        C,
        R,
        w,
        M,
        A,
        B,
        k,
        T = n(7294),
        E = n(6401);
      class D extends l.Mo {
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
      (0, s.gn)([c.ZP], D.prototype, "buildNode", null);
      class I extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountedscenegraph";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.mountable_id = (0, E.Hb)(this.props.mountedId)),
            this.props.fDashboardScale &&
              (n.properties.dashboard_scale = this.props.fDashboardScale),
            [e, n]
          );
        }
      }
      (0, s.gn)([c.ZP], I.prototype, "buildNode", null);
      class x extends l.Mo {
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
          const i = this.createSgNode(t);
          return (
            (i.properties.tab_name =
              null !== (n = this.props.tabName) && void 0 !== n ? n : ""),
            (i.properties.mountable_id = (0, E.Hb)(
              this.m_sMountableUnqualifiedID,
            )),
            (i.properties.icon_uri = this.props.iconUri),
            (i.properties.icon_overlay_key = this.props.iconOverlayKey),
            (i.properties.summon_overlay_key = this.props.summonOverlayKey),
            [e, i]
          );
        }
        internalRender() {
          return T.createElement(
            "vsg-node",
            { id: this.props.id },
            T.createElement(
              D,
              { id: this.m_sMountableUnqualifiedID },
              this.props.children,
            ),
          );
        }
      }
      (0, s.gn)([c.ZP], x.prototype, "buildNode", null);
      class L extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return Array.isArray(this.props.color) && this.props.color.length > 1
            ? "tint-anim"
            : "tint";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            this.props.color
              ? "string" == typeof this.props.color
                ? (n.properties.color = this.props.color)
                : Array.isArray(this.props.color)
                  ? (this.props.color.length > 0 &&
                    "string" == typeof this.props.color[0]
                      ? (n.properties.color =
                          this.props.color.length > 1
                            ? this.props.color
                            : this.props.color[0])
                      : (n.properties.color = this.props.color
                          .map((e) => [e.r, e.g, e.b])
                          .reduce((e, t) => e.concat(t), [])),
                    (n.properties["animation-seconds"] =
                      this.props.animationSeconds))
                  : (n.properties.color = [
                      this.props.color.r,
                      this.props.color.g,
                      this.props.color.b,
                    ])
              : (n.properties.color = [1, 1, 1]),
            [e, n]
          );
        }
      }
      (0, s.gn)([c.ZP], L.prototype, "buildNode", null);
      class O extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "opacity";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (n.properties.opacity = (0, l.Wz)(this.props.value)), [e, n];
        }
      }
      (0, s.gn)([c.ZP], O.prototype, "buildNode", null),
        865 == n.j && (r = n(2823)),
        (function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(p || (p = {}));
      class P extends l.Mo {
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
          var e;
          let t, n, i;
          this.props.transform
            ? ((t = (0, l.Kg)(this.props.transform.translation)),
              (n = this.props.transform.rotation),
              (i = this.props.transform.scale))
            : ((t = (0, l.wT)(this.props.translation)
                ? null === (e = (0, l.Vx)(this.props.translation)) ||
                  void 0 === e
                  ? void 0
                  : e.join(" ")
                : (0, l.Kg)(
                    (0, l.Uq)(this.props.translation, { x: 0, y: 0, z: 0 }),
                  )),
              (n =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, r.UU)(
                      (0, r.mT)(
                        (0, l.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                        Math.PI / 180,
                      ),
                    )),
              (i =
                "number" == typeof this.props.scale
                  ? {
                      x: this.props.scale,
                      y: this.props.scale,
                      z: this.props.scale,
                    }
                  : (0, l.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
          let s = (0, l.xs)(n),
            o = (0, l.Kg)(i);
          return T.createElement(
            "vsg-transform",
            {
              translation: t,
              rotation: s,
              scale: o,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": p[this.props.parent_origin],
              "parent-id": this.props.parent_id,
            },
            this.props.children,
          );
        }
      }
      class F extends (/^(865|929)$/.test(n.j) ? l.Mo : null) {
        constructor(e) {
          super(e);
        }
        internalRender() {
          return T.createElement(
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
      function V(e) {
        if (e) return [e.u, e.v];
      }
      function N(e) {
        switch (e) {
          case u.TopLeft:
            return { x: -1, y: 1 };
          case u.TopCenter:
            return { x: 0, y: 1 };
          case u.TopRight:
            return { x: 1, y: 1 };
          case u.CenterLeft:
            return { x: -1, y: 0 };
          case u.Center:
            return { x: 0, y: 0 };
          case u.CenterRight:
            return { x: 1, y: 0 };
          case u.BottomLeft:
            return { x: -1, y: -1 };
          case u.BottomCenter:
            return { x: 0, y: -1 };
          case u.BottomRight:
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
      })(u || (u = {})),
        (function (e) {
          (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
        })(h || (h = {})),
        (function (e) {
          (e[(e.Mono = 0)] = "Mono"),
            (e[(e.Parallel = 1)] = "Parallel"),
            (e[(e.Crossed = 2)] = "Crossed"),
            (e[(e.Panorama = 3)] = "Panorama"),
            (e[(e.StackedPanorama = 4)] = "StackedPanorama");
        })(m || (m = {})),
        (function (e) {
          (e[(e.Visible = 0)] = "Visible"),
            (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(g || (g = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Low = 2)] = "Low");
        })(S || (S = {}));
      class G extends l.Mo {
        constructor(e) {
          super(e),
            (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
            (this.m_nEmbeddedIndex = null),
            (this.m_resizeObserver = null),
            (this.m_UVsMin = void 0),
            (this.m_UVsMax = void 0),
            (this.m_bOverdragBlocking = !1),
            (this.m_overdragBlockingElements = []);
          const t = void 0 !== this.props.width || void 0 !== this.props.height,
            n = void 0 !== this.props.meters_per_pixel,
            i = void 0 !== this.props.target_dpi_panel_id,
            r =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name;
          if (
            r &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const s = [t, n, i, r].filter((e) => e).length,
            o =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
          if (0 == s)
            throw new Error(`Panel requires one of the following props: ${o}.`);
          if (s > 1)
            throw new Error(
              `Panel cannot have more of the following of the following props: ${o}.`,
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
          G.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = H.Current().addEmbeddedPanelUVs(this)),
            (G.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate();
        }
        onResizeObserved(e, t) {
          H.Current().forceLayoutUpdate();
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
            (G.s_bPanelsAreDirty = !0),
            H.Current().removeEmbeddedPanelUVs(this),
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
        createOverdragBlockingElement(e, t, n, i) {
          let r = document.createElement("div");
          (r.style.position = "absolute"),
            (r.style.top = t + "px"),
            (r.style.left = e + "px"),
            (r.style.width = n + "px"),
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
            : g.Visible;
        }
        buildNode(e, t) {
          var n, i, r, s, o, a, c;
          if (
            this.visibility != g.Visible &&
            this.visibility != g.InvisibleButIntersectable
          )
            return [e, null];
          let d = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            p = this.createSgNode(t),
            u = { x: 0, y: 0 };
          u =
            "object" == typeof this.props.origin
              ? (0, l.QE)(this.props.origin, { x: 0, y: 0 })
              : N(this.props.origin);
          const h = this.props.overlay_key,
            m = (0, E.Gv)();
          return (
            h && h.length > 0
              ? (p.properties.key = h)
              : m
                ? (p.properties.key = m)
                : (p.properties.overlay_handle = (0, E.Mb)()),
            (p.properties.uv_min =
              null !== (n = V(this.m_UVsMin)) && void 0 !== n ? n : void 0),
            (p.properties.uv_max =
              null !== (i = V(this.m_UVsMax)) && void 0 !== i ? i : void 0),
            (p.properties.width =
              null !== (r = this.props.width) && void 0 !== r ? r : void 0),
            (p.properties.height =
              null !== (s = this.props.height) && void 0 !== s ? s : void 0),
            (p.properties["scale-index"] =
              null !== (o = this.props.scale_index) && void 0 !== o ? o : 0),
            (p.properties["min-width"] =
              null !== (a = this.props.min_width) && void 0 !== a ? a : void 0),
            (p.properties["target-width-anchor-id"] = (0, E.Hb)(
              this.props.target_width_anchor_id,
            )),
            (p.properties["target-dpi-panel-id"] = (0, E.Hb)(
              this.props.target_dpi_panel_id,
            )),
            (p.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (p.properties["meters-per-pixel"] = this.props.meters_per_pixel),
            (p.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (p.properties.curvature = this.props.curvature),
            (p.properties["curvature-origin-id"] = (0, E.Hb)(
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
            (p.properties["lasermouse-filtering"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c.lasermouse_filtering),
            (p.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (p.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (p.properties["is-grab-handle"] = this.props.is_grab_handle),
            (p.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (p.properties.origin = (0, l.D1)(u)),
            (p.properties.debug_name = this.props.debug_name),
            (p.properties.sampler = this.props.sampler),
            (p.properties.reflect = this.props.reflect),
            (p.properties.stereoscopy = this.props.stereoscopy),
            (p.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (p.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (p.properties["texture-id"] = (0, E.Hb)(this.props.texture_id)),
            (p.properties["sort-order"] = this.props.sort_order),
            (p.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (p.properties.visibility = this.visibility),
            [d, p]
          );
        }
        scaleLocalUVToGlobal(e) {
          const t = this.m_UVsMax.u - this.m_UVsMin.u,
            n = this.m_UVsMax.v - this.m_UVsMin.v;
          return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + n * e.v };
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
          return T.createElement(
            "vsg-node",
            { style: { display: this.visibility == g.Hidden ? "none" : null } },
            this.props.children,
          );
        }
      }
      (G.s_bPanelsAreDirty = !1),
        (0, s.gn)([c.ZP], G.prototype, "onResizeObserved", null),
        (0, s.gn)([c.ZP], G.prototype, "onPanelMouseDown", null),
        (0, s.gn)([c.ZP], G.prototype, "onWindowMouseUp", null),
        (0, s.gn)([c.ZP], G.prototype, "buildNode", null),
        (function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(_ || (_ = {}));
      class H extends T.Component {
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
            (H.s_Current = this),
            (this.state = {
              bFontsLoaded: !1,
              nForcedUpdateNumber: 0,
              bShowDebugPointer: !1,
              eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                ? _.Canvas
                : _.Image,
            }),
            (this.m_DomRef = T.createRef()),
            (this.m_scalingDomRef = T.createRef()),
            (this.m_CanvasRef = T.createRef()),
            (this.m_EmbeddedDataImgRef = T.createRef()),
            (this.m_DebugPointerRef = T.createRef());
        }
        static get IsSceneGraphApp() {
          return null !== H.Current();
        }
        static Current() {
          return H.s_Current;
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
          (G.s_bPanelsAreDirty = !0),
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
          let n = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
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
              (0, E.mK)(
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
          const e = this.state.eRenderMode == _.Image,
            t = this.state.eRenderMode == _.Canvas;
          let n = [];
          return (
            this.state.bShowDebugPointer && n.push("ShowDebugPointer"),
            T.createElement(
              "vsg-app",
              {
                class: n.join(" "),
                ref: this.m_DomRef,
                "sg-forced-update-number": this.state.nForcedUpdateNumber,
              },
              T.createElement("div", {
                className: "DebugPointer",
                ref: this.m_DebugPointerRef,
              }),
              e &&
                T.createElement("img", {
                  ref: this.m_EmbeddedDataImgRef,
                  className: "EmbeddedData",
                  height: H.k_EmbeddedDataRows,
                }),
              t &&
                T.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: H.k_EmbeddedDataRows,
                }),
              T.createElement(
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
          this.state.eRenderMode == _.Image
            ? ((this.m_EmbeddedDataImgRef.current.width =
                this.m_nEmbeddedDataWidth),
              this.m_EmbeddedDataImgRGBBuffer ||
                (this.m_EmbeddedDataImgRGBBuffer =
                  VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                    this.m_nEmbeddedDataWidth,
                    1,
                    4,
                  )))
            : this.state.eRenderMode == _.Canvas &&
              ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
              (this.m_CanvasContext =
                this.m_CanvasRef.current.getContext("2d")),
              (this.m_CanvasContext.globalCompositeOperation = "copy"),
              (this.m_CanvasContext.imageSmoothingEnabled = !1),
              null === this.m_Pixels &&
                (this.m_Pixels = this.m_CanvasContext.createImageData(
                  this.m_nEmbeddedDataWidth,
                  H.k_EmbeddedDataRows,
                ))),
            this.updateAllPanelBounds();
        }
        updateAllPanelBounds() {
          let e = this.m_DomRef.current.ownerDocument.defaultView,
            t = this.m_scalingDomRef.current.getBoundingClientRect(),
            n = t.width / this.m_fCurrentScale,
            i = t.height / this.m_fCurrentScale,
            r = { x: e.innerWidth / n, y: e.innerHeight / i },
            s = Math.min(r.x, r.y, 1);
          s != this.m_fCurrentScale &&
            (1 != s
              ? this.m_scalingDomRef.current.setAttribute(
                  "style",
                  "transform: scale(" + s + "); transform-origin: top left",
                )
              : this.m_scalingDomRef.current.removeAttribute("style"),
            (this.m_fCurrentScale = s),
            (G.s_bPanelsAreDirty = !0)),
            G.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
              (0, E.k7)(),
              (G.s_bPanelsAreDirty = !1),
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
                  i = e.m_Rect.x + e.m_Rect.width,
                  r = e.m_Rect.y,
                  s = e.m_Rect.y + e.m_Rect.height,
                  o = 1 + 3 * e.getEmbeddedIndex();
                if (e.isExternal() || n >= i || r >= s)
                  for (let e = 0; e < 3; e++) this.setPixel(o + 1, 0, 0, 0, 0);
                else
                  this.setPixel(o, (65280 & n) >> 8, 255 & n, 0),
                    this.setPixel(o + 1, (65280 & i) >> 8, 255 & i, 255 & r),
                    this.setPixel(
                      o + 2,
                      (65280 & s) >> 8,
                      255 & s,
                      (65280 & r) >> 8,
                    );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == _.Image)
            ) {
              const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                this.m_nEmbeddedDataWidth,
                1,
                4,
              );
              this.m_EmbeddedDataImgRef.current.src = e;
            } else if (this.m_CanvasRef && this.state.eRenderMode == _.Canvas) {
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
            this.state.eRenderMode == _.Image
          ) {
            const s = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            s.setUint8(4 * e + 0, t),
              s.setUint8(4 * e + 1, n),
              s.setUint8(4 * e + 2, i),
              s.setUint8(4 * e + 3, r);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == _.Canvas &&
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
      (H.s_Current = null),
        (H.k_EmbeddedDataRows = 1),
        (0, s.gn)([c.ak], H.prototype, "toggleDebugPointer", null),
        (0, s.gn)([c.ak], H.prototype, "onMouseMove", null),
        (0, s.gn)([c.ak], H.prototype, "forceLayoutUpdate", null),
        (0, s.gn)([c.ak], H.prototype, "onMutation", null);
      class U extends l.Mo {
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
      (0, s.gn)([c.ZP], U.prototype, "buildNode", null);
      class W extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(e, t) {
          var n, i, r, s, o, a, c;
          const d = this.createSgNode(t);
          if (
            ((d.properties["tile-size"] = this.props["tile-size"]),
            (d.properties["tile-gap"] = this.props["tile-gap"]),
            (d.properties["inner-radius"] = this.props["inner-radius"]),
            (d.properties["outer-radius"] = this.props["outer-radius"]),
            (d.properties["fade-distance"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["fade-distance"]),
            (d.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (d.properties.height = (0, l.Wz)(this.props.height)),
            (d.properties.offset = [
              null === (i = this.props.offset) || void 0 === i ? void 0 : i.x,
              null === (r = this.props.offset) || void 0 === r ? void 0 : r.y,
            ]),
            "string" == typeof this.props.color)
          )
            d.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, l.kh)(this.props.color, { r: 0, g: 0, b: 0 });
            d.properties.color = [e.r, e.g, e.b];
          }
          return (
            (d.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((d.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (d.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((d.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (d.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (d.properties["normal-randomization-degrees"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["normal-randomization-degrees"]),
            this.props.chevron &&
              ((d.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (d.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (d.properties["auto-subdivide"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["auto-subdivide"]),
            (d.properties["pedestal-height"] = (0, l.Wz)(
              this.props["pedestal-height"],
            )),
            (d.properties["pedestal-radius"] = (0, l.Wz)(
              this.props["pedestal-radius"],
            )),
            (d.properties["floor-aa-shader"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["floor-aa-shader"]),
            (d.properties["stable-fade"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["stable-fade"]),
            [e, d]
          );
        }
      }
      (0, s.gn)([c.ZP], W.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(v || (v = {}));
      class z extends l.Mo {
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
            (n.properties["texture-id"] = (0, E.Hb)(this.props["texture-id"])),
            (n.properties["input-path"] = this.props["input-path"]),
            this.props.fresnel)
          ) {
            let e = this.props.fresnel;
            if ("string" == typeof e.color) n.properties.color = e.color;
            else {
              let t = (0, l.kh)(e.color, { r: 0, g: 0, b: 0 });
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
      (0, s.gn)([c.ZP], z.prototype, "buildNode", null);
      class X extends l.Mo {
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
              let t = (0, l.kh)(e.color, { r: 0, g: 0, b: 0 });
              n.properties.color = [t.r, t.g, t.b];
            }
          }
          return [e, n];
        }
      }
      (0, s.gn)([c.ZP], X.prototype, "buildNode", null);
      class q extends (865 != n.j ? l.Mo : null) {
        constructor(e) {
          super(e);
        }
        internalRender() {
          return T.createElement("vsg-line", {
            "target-id": this.props.target_id,
            thickness: this.props.thickness,
            "start-buffer": this.props.start_buffer,
            "end-buffer": this.props.end_buffer,
          });
        }
      }
      class j extends (929 == n.j ? l.Mo : null) {
        constructor(e) {
          super(e);
        }
        internalRender() {
          return T.createElement(
            "vsg-pin-to-view-transform",
            {
              "offscreen-z-depth": this.props.fOffscreenZDepth,
              "off-axis-limit": this.props.fOffAxisLimit,
              "transition-limit": this.props.fTransitionLimit,
            },
            this.props.children,
          );
        }
      }
      class K extends l.Mo {
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
            ? (n = (0, l.QE)(this.props.location, { x: 0, y: 0 }))
            : "number" == typeof this.props.location &&
              (n = N(this.props.location));
          let i = this.createSgNode(t);
          if (this.props.latched && null !== this.m_latchedPosition)
            (i.properties["anchor-u"] = this.m_latchedPosition.u),
              (i.properties["anchor-v"] = this.m_latchedPosition.v);
          else if (n) {
            const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
              r =
                !e.currentPanel || e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
            (i.properties["anchor-u"] = r.u), (i.properties["anchor-v"] = r.v);
          } else {
            if (!e.currentPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            const n = t.ownerDocument,
              r = t.getBoundingClientRect(),
              s = r.left + r.width / 2,
              o = r.top + r.height / 2,
              a = e.currentPanel.m_Rect;
            if (s < a.x || s > a.x + a.width || o < a.y || o > a.y + a.height)
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
            (i.properties["anchor-u"] = s / l),
              (i.properties["anchor-v"] = o / c);
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
      (0, s.gn)([c.ZP], K.prototype, "buildNode", null);
      class Z extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "context";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (n.properties.construct = this.props.construct), [e, n];
        }
      }
      (0, s.gn)([c.ZP], Z.prototype, "buildNode", null),
        (function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(y || (y = {}));
      class $ extends (/^(627|865|929|987)$/.test(n.j) ? l.Mo : null) {
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
            n = this.props.ease_out_angle_threshold
              ? (this.props.ease_out_angle_threshold * Math.PI) / 180
              : null,
            i = this.props.min_angular_velocity
              ? (this.props.min_angular_velocity * Math.PI) / 180
              : null,
            r = this.props.max_angular_velocity
              ? (this.props.max_angular_velocity * Math.PI) / 180
              : null;
          return T.createElement(
            "vsg-elastic-head-transform",
            {
              "start-angle-threshold": e,
              "stop-angle-threshold": t,
              "ease-in-time": this.props.ease_in_time,
              "ease-in-power": this.props.ease_in_power,
              "ease-out-angle-threshold": n,
              "ease-out-power": this.props.ease_out_power,
              "min-angular-velocity": i,
              "max-angular-velocity": r,
              "lock-to-horizon": this.props.lock_to_horizon,
              "translation-behavior": this.props.translation_behavior,
            },
            this.props.children,
          );
        }
      }
      class J extends (/^(446|627|929)$/.test(n.j) ? l.Mo : null) {
        constructor(e) {
          super(e);
        }
        internalRender() {
          return T.createElement(
            "vsg-head-facing-transform",
            null,
            this.props.children,
          );
        }
      }
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
          (e[(e.BlockServerShutdown_Bool = 1023)] = "BlockServerShutdown_Bool"),
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
          (e[(e.CameraStreamFormat_Int32 = 1041)] = "CameraStreamFormat_Int32"),
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
          (e[(e.CurrentUniverseId_Uint64 = 2004)] = "CurrentUniverseId_Uint64"),
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
          (e[(e.DashboardLinkSupport_Int32 = 2097)] =
            "DashboardLinkSupport_Int32"),
          (e[(e.DisplayMinUIAnalogGain_Float = 2098)] =
            "DisplayMinUIAnalogGain_Float"),
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
          (e[(e.Prop_Driver_RecenterSupport_Int32 = 2109)] =
            "Prop_Driver_RecenterSupport_Int32"),
          (e[(e.Prop_Hmd_SupportsVRGamepadFocus_Bool = 2117)] =
            "Prop_Hmd_SupportsVRGamepadFocus_Bool"),
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
          (e[(e.ControllerRoleHint_Int32 = 3007)] = "ControllerRoleHint_Int32"),
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
          (e[(e.HasDisplayComponent_Bool = 6002)] = "HasDisplayComponent_Bool"),
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
          (e[(e.SupportsInHMDRoomSetup_Bool = 11003)] =
            "SupportsInHMDRoomSetup_Bool"),
          (e[(e.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
            "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
          (e[(e.TrackedDeviceProperty_Max = 1e6)] =
            "TrackedDeviceProperty_Max");
      })(b || (b = {})),
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
            (e[(e.k_EButton_Dashboard_Back = 2)] = "k_EButton_Dashboard_Back"),
            (e[(e.k_EButton_IndexController_A = 2)] =
              "k_EButton_IndexController_A"),
            (e[(e.k_EButton_IndexController_B = 1)] =
              "k_EButton_IndexController_B"),
            (e[(e.k_EButton_IndexController_JoyStick = 35)] =
              "k_EButton_IndexController_JoyStick"),
            (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
            (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
            (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
        })(f || (f = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
            (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
            (e[(e.Snap = 3)] = "Snap"),
            (e[(e.Sliding = 4)] = "Sliding"),
            (e[(e.SlidingEdge = 5)] = "SlidingEdge");
        })(C || (C = {})),
        (function (e) {
          (e[(e.Minimal = 1)] = "Minimal"),
            (e[(e.Modal = 2)] = "Modal"),
            (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
            (e[(e.HideDoneKey = 8)] = "HideDoneKey");
        })(R || (R = {})),
        (function (e) {
          (e[(e.Unknown = -1)] = "Unknown"),
            (e[(e.Idle = 0)] = "Idle"),
            (e[(e.UserInteraction = 1)] = "UserInteraction"),
            (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
            (e[(e.Standby = 3)] = "Standby"),
            (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
        })(w || (w = {})),
        (function (e) {
          (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
            (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
            (e[(e.Notification_BeginInteraction = 602)] =
              "Notification_BeginInteraction"),
            (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
        })(M || (M = {})),
        (function (e) {
          (e[(e.TheaterFast = 0)] = "TheaterFast"),
            (e[(e.TheaterSlow = 1)] = "TheaterSlow");
        })(A || (A = {})),
        (function (e) {
          (e[(e.Constant = 0)] = "Constant"),
            (e[(e.Nearest = 1)] = "Nearest"),
            (e[(e.Linear = 2)] = "Linear"),
            (e[(e.SmoothStep = 3)] = "SmoothStep"),
            (e[(e.SmootherStep = 4)] = "SmootherStep");
        })(B || (B = {}));
      class Q extends T.Component {
        constructor(e) {
          super(e);
          let t = {};
          if (VRHTML)
            try {
              let e = VRHTML.VRProperties.GetStringProperty(
                this.props.sDevicePath,
                b.RenderModelName_String,
              );
              if (e) {
                let n =
                  VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                    e,
                    this.props.sInputPath,
                  );
                if (n) {
                  let i = VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                    e,
                    n,
                    this.props.sDevicePath,
                  );
                  i && (t.xfTransform = i.xfTrackingToComponentLocal);
                }
              }
            } catch (e) {
              console.log(
                "Component transform invalid for ",
                this.props.sDevicePath,
              );
            }
          this.state = t;
        }
        render() {
          return T.createElement(
            P,
            {
              id: this.props.id,
              parent_path: this.props.sDevicePath,
              transform: this.state.xfTransform,
            },
            this.props.children,
          );
        }
      }
      class Y extends (/^(627|929)$/.test(n.j) ? l.Mo : null) {
        constructor(e) {
          super(e);
        }
        internalRender() {
          return T.createElement(
            "vsg-callout-transform",
            { offset: (0, l.Kg)(this.props.vOffset) },
            this.props.children,
          );
        }
      }
      class ee extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "dashboardtransform";
        }
        buildNode(e, t) {
          var n, i;
          const r = this.createSgNode(t);
          return (
            (r.properties.continuous_relatch =
              null !== (n = this.props.bContinuousRelatch) &&
              void 0 !== n &&
              n),
            (r.properties.free_dashboard_transform =
              null !== (i = this.props.bFreeDashboardTransform) &&
              void 0 !== i &&
              i),
            [e, r]
          );
        }
      }
      (0, s.gn)([c.ZP], ee.prototype, "buildNode", null);
      class te extends (/^(446|865)$/.test(n.j) ? null : l.Mo) {
        constructor(e) {
          super(e);
        }
        internalRender() {
          let e = (0, l.Kg)(this.props.transform.translation),
            t = (0, l.xs)(this.props.transform.rotation),
            n = (0, l.Kg)(this.props.transform.scale);
          return T.createElement(
            "vsg-grab-transform",
            {
              "parent-path": this.props.parent_path,
              translation: e,
              rotation: t,
              scale: n,
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
      class ne extends l.Mo {
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
            (n.properties["is-active"] = this.props.is_active),
            (n.properties["min-target-scale"] = this.props.min_target_scale),
            (n.properties["max-target-scale"] = this.props.max_target_scale),
            (n.properties.displacement = this.props.displacement),
            [e, n]
          );
        }
      }
      (0, s.gn)([c.ZP], ne.prototype, "buildNode", null);
      class ie extends l.Mo {
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
      (0, s.gn)([c.ZP], ie.prototype, "buildNode", null);
      class re extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "reparent-to-panel";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t),
            i = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !0,
              currentPanel: null,
            });
          return (
            this.props.parent_overlay_key &&
              (n.properties["parent-overlay-key"] =
                this.props.parent_overlay_key),
            [i, n]
          );
        }
      }
      (0, s.gn)([c.ZP], re.prototype, "buildNode", null);
      class se extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "audiosource";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.name = this.props.name),
            (n.properties.channel = this.props.channel),
            (n.properties.debug = this.props.debug),
            [e, n]
          );
        }
      }
      (0, s.gn)([c.ZP], se.prototype, "buildNode", null),
        (function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
            (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
        })(k || (k = {}));
      class oe extends l.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties["projection-constraint"] =
              this.props.projection_constraint),
            [e, n]
          );
        }
      }
      (0, s.gn)([c.ZP], oe.prototype, "buildNode", null);
      var ae = n(9005);
      const le = VRHTML;
    },
    8547: (e, t, n) => {
      n.d(t, {
        Yp: () => d,
        hN: () => c,
        xN: () => a,
        yv: () => i,
        yx: () => l,
      });
      var i,
        r = n(655),
        s = n(447),
        o = n(7056);
      class a extends s.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(e, t) {
          var n, i, r, s, o, a, l, c, d, p, u, h, m;
          const g = this.createSgNode(t);
          return (
            (g.properties["target-id"] = this.props.target_id),
            (g.properties["head-interaction-radius"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.head_interaction_radius),
            (g.properties["inactive-alpha-scale"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.inactive_alpha_scale),
            (g.properties["axis-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.axis_radius),
            (g.properties["axis-color-hsv"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s.axis_color_hsv),
            (g.properties["dot-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.dot_radius),
            (g.properties["dot-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a.dot_color_hsv),
            (g.properties["dot-inner-alpha"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.dot_inner_alpha),
            (g.properties["dot-outer-alpha"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c.dot_outer_alpha),
            (g.properties["rings-radius"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d.rings_radius),
            (g.properties["rings-color-hsv"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p.rings_color_hsv),
            (g.properties["rings-hue-amplitude"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u.rings_hue_amplitude),
            (g.properties["rings-hue-speed"] =
              null === (h = this.props) || void 0 === h
                ? void 0
                : h.rings_hue_speed),
            (g.properties["rings-half-width"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m.rings_half_width),
            [e, g]
          );
        }
      }
      (0, r.gn)([o.ZP], a.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Circle = 1)] = "Circle"),
            (e[(e.Drawn = 2)] = "Drawn");
        })(i || (i = {}));
      class l extends s.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-draw-interaction";
        }
        buildNode(e, t) {
          var n, i;
          const r = this.createSgNode(t);
          return (
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["radius-range"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.radius_range),
            (r.properties["center-selection-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.center_selection_radius),
            [e, r]
          );
        }
      }
      (0, r.gn)([o.ZP], l.prototype, "buildNode", null);
      class c extends s.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(e, t) {
          var n, i, r, s, o, a, l, c;
          const d = this.createSgNode(t);
          return (
            (d.properties["generic-geo"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["generic-geo"]),
            (d.properties["hue-amplitude"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["hue-amplitude"]),
            (d.properties["hue-speed"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["hue-speed"]),
            (d.properties["center-dot-radius"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["center-dot-radius"]),
            (d.properties["center-color-hsv"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["center-color-hsv"]),
            (d.properties["outline-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["outline-color-hsv"]),
            (d.properties["shadow-radius-delta"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["shadow-radius-delta"]),
            (d.properties["outline-shadow-alpha"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["outline-shadow-alpha"]),
            [e, d]
          );
        }
      }
      (0, r.gn)([o.ZP], c.prototype, "buildNode", null);
      class d extends s.Mo {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(e, t) {
          var n, i, r, s, o;
          const a = this.createSgNode(t);
          return (
            (a.properties["tile-size"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["tile-size"]),
            (a.properties["head-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["head-radius"]),
            (a.properties["center-randomization"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["center-randomization"]),
            (a.properties["color-hsv"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["color-hsv"]),
            (a.properties["clip-to-playspace"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["clip-to-playspace"]),
            [e, a]
          );
        }
      }
      (0, r.gn)([o.ZP], d.prototype, "buildNode", null);
    },
    447: (e, t, n) => {
      n.d(t, {
        D1: () => c,
        Kg: () => d,
        Mo: () => g,
        QE: () => o,
        Uq: () => a,
        Vx: () => m,
        Wz: () => h,
        kh: () => l,
        wT: () => u,
        xs: () => p,
      });
      var i = n(7294),
        r = n(9005),
        s = n(6401);
      function o(e, t) {
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
      function u(e) {
        return e && void 0 !== e.to;
      }
      function h(e) {
        return "number" == typeof e
          ? e
          : (t = e) && void 0 !== t.to
            ? [e.channel, e.interp, e.from, e.to]
            : void 0;
        var t;
      }
      function m(e) {
        return u(e)
          ? [
              e.channel,
              e.interp,
              e.from ? e.from[0] : void 0,
              e.from ? e.from[1] : void 0,
              e.from ? e.from[2] : void 0,
              e.to ? e.to[0] : void 0,
              e.to ? e.to[1] : void 0,
              e.to ? e.to[2] : void 0,
            ]
          : void 0;
      }
      class g extends i.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_domRef = i.createRef()),
            (this.m_buildNodeOverride = null),
            (this.m_SGID =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.NextSGID()) && void 0 !== t
                ? t
                : r.nX);
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
          return (0, s.ac)(this.getNodeType(), e);
        }
        getCurrentRootElement() {
          return this.m_domRef.current;
        }
        componentDidMount() {
          this.m_buildNodeOverride &&
            (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
            (0, s.k7)();
        }
        componentDidUpdate() {
          (0, s.k7)();
        }
        componentWillUnmount() {
          (0, s.sX)(this.m_SGID),
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
    },
    6401: (e, t, n) => {
      n.d(t, {
        Gv: () => w,
        Hb: () => R,
        Mb: () => u,
        ac: () => p,
        iN: () => C,
        k7: () => B,
        mK: () => f,
        qI: () => A,
        sX: () => M,
      });
      var i = n(655),
        r = n(2380);
      function s(e, t) {
        let n = e.getAttribute(t);
        if (n && n.length > 0) {
          if ("undefined" == n) return;
          let e = [];
          for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
          if (e.length > 0) return e;
        }
      }
      function o(e, t) {
        let n = e.getAttribute(t);
        if (n && n.length > 0) return parseFloat(n);
      }
      function a(e, t) {
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
        return R(c(e, t));
      }
      function p(e, t) {
        let n = { type: e, properties: {} };
        return (
          t.id && (n.properties.id = R(t.id)),
          (n.properties.sgid = a(t, "sgid")),
          n
        );
      }
      function u() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function h(e, t) {
        let [n, i] = (function (e, t) {
            let n = t.buildNode;
            if (n) return n(e, t);
            let i = Object.assign({}, e),
              r = null;
            switch (t.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (r = p("transform", t)),
                  (r.properties.translation = s(t, "translation")),
                  (r.properties.rotation = s(t, "rotation")),
                  (r.properties.scale = s(t, "scale")),
                  (r.properties["curvature-pitch"] = o(t, "curvature-pitch")),
                  (r.properties["transform-path"] = c(t, "transform-path")),
                  (r.properties["projection-constraint"] = a(
                    t,
                    "projection-constraint",
                  )),
                  (r.properties["invert-parent-panel-pitch"] = l(
                    t,
                    "invert-parent-panel-pitch",
                  )),
                  (r.properties["ignore-parent-scale"] = l(
                    t,
                    "ignore-parent-scale",
                  )),
                  (r.properties["parent-path"] = c(t, "parent-path")),
                  (r.properties["parent-origin"] = c(t, "parent-origin")),
                  (r.properties["parent-id"] = d(t, "parent-id"));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (r = p("trackingstatevisibility", t)),
                  (r.properties["visible-0dof"] = l(t, "visible-0dof")),
                  (r.properties["visible-3dof"] = l(t, "visible-3dof")),
                  (r.properties["visible-6dof"] = l(t, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (r = p("elasticheadtransform", t)),
                  (r.properties["start-angle-threshold"] = o(
                    t,
                    "start-angle-threshold",
                  )),
                  (r.properties["stop-angle-threshold"] = o(
                    t,
                    "stop-angle-threshold",
                  )),
                  (r.properties["ease-in-time"] = o(t, "ease-in-time")),
                  (r.properties["ease-in-power"] = o(t, "ease-in-power")),
                  (r.properties["ease-out-angle-threshold"] = o(
                    t,
                    "ease-out-angle-threshold",
                  )),
                  (r.properties["ease-out-power"] = o(t, "ease-out-power")),
                  (r.properties["min-angular-velocity"] = o(
                    t,
                    "min-angular-velocity",
                  )),
                  (r.properties["max-angular-velocity"] = o(
                    t,
                    "max-angular-velocity",
                  )),
                  (r.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                  (r.properties["translation-behavior"] = a(
                    t,
                    "translation-behavior",
                  ));
                break;
              case "VSG-LINE":
                (r = p("line", t)),
                  (r.properties["target-id"] = d(t, "target-id")),
                  (r.properties.thickness = o(t, "thickness")),
                  (r.properties["start-buffer"] = o(t, "start-buffer")),
                  (r.properties["end-buffer"] = o(t, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (r = p("line-constrained-transform", t)),
                  (r.properties["target-id"] = d(t, "target-id")),
                  (r.properties["source-id"] = d(t, "source-id")),
                  (r.properties["source-distance"] = o(t, "source-distance")),
                  (r.properties["target-limit"] = o(t, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (r = p("callout-transform", t)),
                  (r.properties.offset = s(t, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                r = p("head-facing-transform", t);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (r = p("pin-to-view-transform", t)),
                  (r.properties["offscreen-z-depth"] = o(
                    t,
                    "offscreen-z-depth",
                  )),
                  (r.properties["off-axis-limit"] = o(t, "off-axis-limit")),
                  (r.properties["transition-limit"] = o(t, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (r = p("grab-transform", t)),
                  (r.properties["parent-path"] = c(t, "parent-path")),
                  (r.properties.translation = s(t, "translation")),
                  (r.properties.rotation = s(t, "rotation")),
                  (r.properties.scale = s(t, "scale")),
                  (r.properties["should-head-align"] = l(
                    t,
                    "should-head-align",
                  )),
                  (r.properties["stop-distance"] = o(t, "stop-distance")),
                  (r.properties["start-angle"] = o(t, "start-angle")),
                  (r.properties["start-quat-difference"] = o(
                    t,
                    "start-quat-difference",
                  )),
                  (r.properties["stop-quat-difference"] = o(
                    t,
                    "stop-quat-difference",
                  )),
                  (r.properties["scale-margin"] = o(t, "scale-margin")),
                  (r.properties["lerp-speed"] = o(t, "lerp-speed")),
                  (r.properties["min-distance"] = o(t, "min-distance")),
                  (r.properties["max-distance"] = o(t, "max-distance")),
                  (r.properties["one-to-one-radius"] = o(
                    t,
                    "one-to-one-radius",
                  )),
                  (r.properties["max-x-squared-contribution"] = o(
                    t,
                    "max-x-squared-contribution",
                  )),
                  (r.properties["acceleration-factor-x-coefficient"] = o(
                    t,
                    "acceleration-factor-x-coefficient",
                  )),
                  (r.properties["acceleration-factor-x-squared-coefficient"] =
                    o(t, "acceleration-factor-x-squared-coefficient")),
                  (r.properties["acceleration-factor-scale-term"] = o(
                    t,
                    "acceleration-factor-scale-term",
                  ));
            }
            return [i, r];
          })(e, t),
          r = [];
        for (let e = 0; e < t.children.length; e++) {
          let i = t.children.item(e);
          if (i.children) {
            let e = h(n, i);
            e && (r = r.concat(e));
          }
        }
        return n.bShouldAbort
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
        S,
        _,
        v = [],
        y = null,
        b = null;
      function f(e, t, n) {
        (m = e),
          (g = t),
          (S = n),
          console.log("Setting owning overlay key to " + e);
      }
      function C(e, t) {
        return e + "::" + t;
      }
      function R(e) {
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
      function M(e) {
        v.push(e), B();
      }
      function A() {
        _ = !0;
      }
      function B() {
        y ||
          (y = window.setTimeout(
            () =>
              (0, i.mG)(this, void 0, void 0, function* () {
                let e = document.body;
                g && (e = g);
                let t = {
                  type: "root",
                  rootproperties: {
                    relatchDashboardTransform: _,
                    allowDismissOnClick: true,
                    sceneColorCorrection: null,
                  },
                  children: h(
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
                  (b = new r.N()),
                  yield b.Init("sg_mailbox", S));
                let n = {
                  type: "update_scene_graph",
                  owning_overlay_key: w(),
                  scene_graph: t,
                  retired_sgids: v,
                };
                b.SendMessage("vrcompositor_systemlayer", n),
                  (y = null),
                  (v = []),
                  (_ = !1);
              }),
            0,
          ));
      }
    },
    2823: (e, t, n) => {
      function i() {
        return {
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
        };
      }
      function r(e, t) {
        return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
      }
      function s(e, t, n) {
        return {
          x: t.x + e * (n.x - t.x),
          y: t.y + e * (n.y - t.y),
          z: t.z + e * (n.z - t.z),
        };
      }
      function o(e, t) {
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
      function p(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
      }
      function u(e) {
        if (void 0 === e) return;
        let t = 0.5 * e.x,
          n = 0.5 * e.y,
          i = 0.5 * e.z,
          r = Math.cos(t),
          s = Math.cos(n),
          o = Math.cos(i),
          a = Math.sin(t),
          l = Math.sin(n),
          c = Math.sin(i);
        return {
          w: r * s * o + a * l * c,
          x: a * s * o + r * l * c,
          y: r * l * o - a * s * c,
          z: r * s * c - a * l * o,
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
      function m(e, t) {
        let n = 2 * (e.y * t.z - e.z * t.y),
          i = 2 * (e.z * t.x - e.x * t.z),
          r = 2 * (e.x * t.y - e.y * t.x);
        return {
          x: t.x + e.w * n + e.y * r - e.z * i,
          y: t.y + e.w * i + e.z * n - e.x * r,
          z: t.z + e.w * r + e.x * i - e.y * n,
        };
      }
      function g(e, t, n) {
        return [
          [e.x, e.y, e.z],
          [t.x, t.y, t.z],
          [n.x, n.y, n.z],
        ];
      }
      function S(e) {
        return m(e.rotation, { x: 0, y: 0, z: -1 });
      }
      function _(e) {
        let t = p(e);
        return { x: e.x / t, y: e.y / t, z: e.z / t };
      }
      function v(e, t) {
        return {
          x: e.y * t.z - e.z * t.y,
          y: e.z * t.x - e.x * t.z,
          z: e.x * t.y - e.y * t.x,
        };
      }
      function y(e) {
        const t = { x: 0, y: 1, z: 0 };
        let n = S(e);
        (n.y = 0), (n = _(n));
        const i = g(_(v(n, t)), t, { x: -(r = n).x, y: -r.y, z: -r.z });
        var r;
        return { translation: e.translation, rotation: h(i), scale: e.scale };
      }
      n.d(t, {
        Fs: () => l,
        Fx: () => m,
        JR: () => d,
        LY: () => p,
        M9: () => _,
        Nz: () => S,
        Oq: () => i,
        Pd: () => h,
        Pf: () => y,
        UU: () => u,
        Zj: () => o,
        dq: () => v,
        eQ: () => a,
        mT: () => c,
        q9: () => s,
        tS: () => g,
        ui: () => r,
      });
    },
    2380: (e, t, n) => {
      n.d(t, { N: () => s });
      var i = n(655),
        r = n(7056);
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
            console.log("Connecting vrmailbox " + this.m_sMailboxName + "...");
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
          return (0, i.mG)(this, void 0, void 0, function* () {
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
          return new Promise((n, i) => {
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
          return (0, i.mG)(this, void 0, void 0, function* () {
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
          let i = Object.assign({}, t);
          return (
            null == i.returnAddress && (i.returnAddress = this.m_sMailboxName),
            (i.message_id = this.m_nNextMessageNumber++),
            this.SendMessage(e, i),
            this.WaitForMessage(n, i.message_id)
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
      (s.s_nNextMailboxNumber = 1),
        (0, i.gn)([r.ak], s.prototype, "OpenWebSocketToHost", null),
        (0, i.gn)([r.ak], s.prototype, "OnWebSocketOpen", null),
        (0, i.gn)([r.ak], s.prototype, "OnWebSocketClose", null),
        (0, i.gn)([r.ak], s.prototype, "WebSocketSend", null),
        (0, i.gn)([r.ak], s.prototype, "OnWebSocketMessage", null);
    },
    9005: (e, t, n) => {
      var i, r, s, o;
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
      n.d(t, {
        GC: () => w,
        Kf: () => d,
        Kg: () => M,
        LL: () => r,
        Lx: () => D,
        Op: () => a,
        Pw: () => b,
        QZ: () => s,
        Qu: () => k,
        XX: () => h,
        Z9: () => m,
        a0: () => A,
        du: () => y,
        l0: () => f,
        lx: () => R,
        nX: () => l,
        o4: () => p,
        qA: () => i,
        qC: () => g,
        qR: () => S,
        wU: () => c,
        xY: () => v,
        yA: () => E,
        zA: () => B,
        zq: () => o,
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
        })(s || (s = {})),
        (function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
        })(o || (o = {}));
      let l = 0,
        c = 0,
        d = /^(446|865)$/.test(n.j) ? null : -1;
      var p, u, h, m, g, S, _, v, y, b, f, C, R, w, M, A, B, k, T, E, D;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
          (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
          (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
          (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
      })(p || (p = {})),
        (function (e) {
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
            (e[(e.ShowTouchPadScrollWheel = 256)] = "ShowTouchPadScrollWheel"),
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
            (e[(e.EnableControlBarClose = 33554432)] = "EnableControlBarClose"),
            (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
            (e[(e.EnableClickStabilization = 134217728)] =
              "EnableClickStabilization"),
            (e[(e.MultiCursor = 268435456)] = "MultiCursor");
        })(m || (m = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
        })(g || (g = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.HMD = 1)] = "HMD"),
            (e[(e.Controller = 2)] = "Controller"),
            (e[(e.GenericTracker = 3)] = "GenericTracker"),
            (e[(e.TrackingReference = 4)] = "TrackingReference"),
            (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
        })(S || (S = {})),
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
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
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
        })(R || (R = {})),
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
        })(A || (A = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(B || (B = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(k || (k = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(T || (T = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(E || (E = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(D || (D = {}));
    },
    2609: (e, t, n) => {
      n.d(t, { Z: () => r });
      var i = n(7294);
      const r =
        381 == n.j
          ? ({ quaternion: e, width: t, height: n }) => {
              const r = (0, i.useRef)(null),
                s = (0, i.useCallback)(
                  (t, n, i) => {
                    t.clearRect(0, 0, n, i),
                      (t.lineWidth = 3),
                      (r.current.style.position = "absolute");
                    const s = n / 2,
                      o = i / 2,
                      a = n / 2,
                      l = (e, t) => {
                        const n = t.w * e.x + t.y * e.z - t.z * e.y,
                          i = t.w * e.y + t.z * e.x - t.x * e.z,
                          r = t.w * e.z + t.x * e.y - t.y * e.x,
                          s = -t.x * e.x - t.y * e.y - t.z * e.z;
                        return {
                          x: n * t.w + s * -t.x + i * -t.z - r * -t.y,
                          y: i * t.w + s * -t.y + r * -t.x - n * -t.z,
                          z: r * t.w + s * -t.z + n * -t.y - i * -t.x,
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
                      p = [
                        { x: a, y: 0, z: 0 },
                        { x: -a, y: 0, z: 0 },
                      ].map((t) => l(t, e)),
                      u = c.map((t) => l(t, e)),
                      h = d.map((t) => l(t, e)),
                      m = (e, n, i, r) => {
                        const a = t.createLinearGradient(
                          s + e.x,
                          o - e.y,
                          s,
                          o,
                        );
                        a.addColorStop(0, i),
                          a.addColorStop(1, r),
                          (t.strokeStyle = a),
                          t.beginPath(),
                          t.moveTo(s + e.x, o - e.y),
                          t.lineTo(s + n.x, o - n.y),
                          t.stroke();
                      };
                    m(p[1], p[0], "#00000000", "#FF0000DD"),
                      m(u[1], u[0], "#00000000", "#00FF00DD"),
                      m(h[1], h[0], "#00000000", "#2222FFFF");
                  },
                  [e],
                );
              return (
                (0, i.useEffect)(() => {
                  const e = r.current;
                  if (e) {
                    const t = e.getContext("2d");
                    if (t) {
                      const n = e.width,
                        i = e.height;
                      s(t, n, i);
                    }
                  }
                }, [e, t, n, s]),
                i.createElement("canvas", { ref: r, width: t, height: n })
              );
            }
          : null;
    },
    5177: (e, t, n) => {
      n.d(t, { q: () => p, z: () => d });
      var i = n(655),
        r = n(7294),
        s = n(7056),
        o = n(3107),
        a = n(5876),
        l = n(424),
        c = n(8980);
      class d extends r.Component {
        constructor() {
          super(...arguments), (this.m_ref = r.createRef());
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
              o.G.Instance.playSound(
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
            p.temporarilySuppressSoundEffect(),
            o.G.Instance.playSound(
              null !== (i = this.props.releaseSoundEffect) && void 0 !== i
                ? i
                : o.y.ButtonClick,
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
            r.cloneElement(r.createElement("div", e, this.props.children), {
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
      (0, i.gn)([s.ak], d.prototype, "onMouseDown", null),
        (0, i.gn)([s.ak], d.prototype, "onMouseUp", null),
        (0, i.gn)([s.ak], d.prototype, "onClick", null),
        (0, i.gn)([s.ak], d.prototype, "onMouseEnter", null),
        (0, i.gn)([s.ak], d.prototype, "onMouseLeave", null);
      class p extends r.Component {
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
          p.suppressingSoundEffect ||
            (window.clearTimeout(p.s_nPlaySoundEffectTimeout),
            (p.s_nPlaySoundEffectTimeout = window.setTimeout(
              p.playSoundEffect,
              p.k_nSoundEffectDelay,
            ))),
            this.props.onClick && this.props.onClick(e);
        }
        static endSoundEffectSuppression() {
          window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = 0);
        }
        static playSoundEffect() {
          o.G.Instance.playSound(o.y.SurfaceClick);
        }
        render() {
          return r.cloneElement(
            r.createElement("div", this.props, this.props.children),
            { onClick: this.onClick },
          );
        }
      }
      (p.k_nSoundEffectSuppressionPeriod = 4),
        (p.k_nSoundEffectDelay = 2),
        (p.s_nSuppressingSoundEffectsTimeout = 0),
        (p.s_nPlaySoundEffectTimeout = 0),
        (0, i.gn)([s.ak], p.prototype, "onClick", null),
        (0, i.gn)([s.ak], p, "endSoundEffectSuppression", null),
        (0, i.gn)([s.ak], p, "playSoundEffect", null);
    },
    3010: (e, t, n) => {
      n.d(t, { Kr: () => i, Lt: () => g, hu: () => S });
      var i,
        r = n(655),
        s = n(7294),
        o = n(5177),
        a = n(8980),
        l = n(7056),
        c = n(2188),
        d = n(3568),
        p = n(7475),
        u = n(9755),
        h = n(7008);
      !(function (e) {
        e[(e.Separator = 0)] = "Separator";
      })(i || (i = {}));
      class m extends s.Component {
        constructor() {
          super(...arguments),
            (this.m_refView = s.createRef()),
            (this.m_refScrollPanel = s.createRef()),
            (this.m_refSelectedButton = s.createRef()),
            (this.m_refParentPortal = s.createRef()),
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
            ? s.createElement("div", {
                className: "Separator",
                key: "separator" + t,
              })
            : null;
        }
        renderDropdownValueItem(e) {
          return s.createElement(
            o.z,
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
          return s.createElement(
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
            s.createElement(
              u.og,
              {
                ref: this.m_refView,
                shouldDismissOnClickAnywhere: !0,
                shouldDismissOnClickInViewStack: !0,
                fadesViewsBelow: !1,
                onDismissRequested: this.props.onDismissRequested,
                className: (0, a.LJ)("Dropdown", "Popover"),
              },
              s.createElement(
                p.P,
                { scrollDirection: p.I.Vertical, ref: this.m_refScrollPanel },
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
          const r =
              null === (e = this.m_refView.current) || void 0 === e
                ? void 0
                : e.div,
            s =
              null === (t = this.m_refScrollPanel.current) || void 0 === t
                ? void 0
                : t.div;
          if (!r || !s) return;
          const o =
              null !==
                (i =
                  null === (n = this.props.buttonRef.current) || void 0 === n
                    ? void 0
                    : n.elem.clientWidth) && void 0 !== i
                ? i
                : 0,
            a = this.m_elemBoundingParent.getBoundingClientRect();
          (s.style.minWidth = o + "px"),
            (s.style.maxWidth = a.width - 2 * m.POPOVER_BOUNDS_MARGIN + "px"),
            (s.style.maxHeight = a.height - 2 * m.POPOVER_BOUNDS_MARGIN + "px");
          const l = this.props.buttonRef.current.elem.getBoundingClientRect();
          let c = l.left,
            d = l.top;
          const p = r.getBoundingClientRect(),
            u = this.m_elemBoundingParent.getBoundingClientRect(),
            h = u.left + m.POPOVER_BOUNDS_MARGIN,
            g = u.right - m.POPOVER_BOUNDS_MARGIN,
            S = u.top + m.POPOVER_BOUNDS_MARGIN,
            _ = u.bottom - m.POPOVER_BOUNDS_MARGIN;
          this.m_refSelectedButton.current &&
            (d -=
              this.m_refSelectedButton.current.elem.getBoundingClientRect()
                .top - p.top);
          const v = d;
          c < h && (c = h),
            c + p.width > g && (c = g - p.width),
            d < S && (d = S),
            d + p.height > _ && (d = _ - p.height),
            (c = Math.round(c)),
            (d = Math.round(d)),
            (r.scrollTop = d - v),
            (r.style.transform =
              "translateX(" + c + "px) translateY(" + d + "px)");
        }
      }
      (m.POPOVER_BOUNDS_MARGIN = 10),
        (0, r.gn)([l.ZP], m.prototype, "renderDropdownItem", null),
        (0, r.gn)([l.ZP], m.prototype, "renderDropdownSpecialItem", null),
        (0, r.gn)([l.ZP], m.prototype, "renderDropdownValueItem", null),
        (0, r.gn)([l.ZP], m.prototype, "setValue", null),
        (0, r.gn)([l.ZP], m.prototype, "updateLayout", null);
      class g extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refButton = s.createRef()),
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
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              o.z,
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
              s.createElement("span", { ref: this.m_scrollWatcher.ref }, n),
            ),
            this.state.bShowingOptions &&
              s.createElement(
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
      (0, r.gn)([l.ZP], g.prototype, "onParentScroll", null),
        (0, r.gn)([c.Fl], g.prototype, "value", null),
        (0, r.gn)([c.Fl], g.prototype, "selectedItem", null),
        (0, r.gn)([l.ZP], g.prototype, "showDropdown", null),
        (0, r.gn)([l.ZP], g.prototype, "hideDropdown", null);
      class S extends s.Component {
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
            s.createElement(g, Object.assign({}, e))
          );
        }
      }
      (0, r.gn)([l.ZP], S.prototype, "onChange", null);
    },
    9755: (e, t, n) => {
      n.d(t, { og: () => u, sC: () => h, vz: () => m });
      var i,
        r = n(655),
        s = n(7294),
        o = n(7056),
        a = n(8980),
        l = n(2188),
        c = n(7062);
      const d = s.createContext(null);
      class p {
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
      (0, r.gn)([o.ak], p.prototype, "cleanup", null),
        (0, r.gn)([o.ak], p.prototype, "onWindowKeyDown", null),
        (0, r.gn)([o.ak], p.prototype, "onWindowClick", null),
        (0, r.gn)([l.Fl], p.prototype, "size", null),
        (0, r.gn)([l.aD.bound], p.prototype, "dismissTopView", null),
        (0, r.gn)([l.Fl], p.prototype, "hasViews", null),
        (0, r.gn)([l.Fl], p.prototype, "bottomView", null),
        (0, r.gn)([l.Fl], p.prototype, "topView", null),
        (0, r.gn)([l.aD], p.prototype, "pushView", null),
        (0, r.gn)([l.aD], p.prototype, "removeView", null);
      let u = (i = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_viewRef = s.createRef()),
            (this.m_newViewStack = null);
        }
        get viewStack() {
          return this.context
            ? this.context
            : (null === this.m_newViewStack && (this.m_newViewStack = new p()),
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
          const t = s.createElement(
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
            ? s.createElement(d.Provider, { value: this.viewStack }, t)
            : t;
        }
      });
      (u.k_FadedForModalClassName = "FadedForModal"),
        (u.contextType = d),
        (0, r.gn)([l.Fl], u.prototype, "viewStack", null),
        (0, r.gn)([l.Fl], u.prototype, "isTopView", null),
        (0, r.gn)([l.Fl], u.prototype, "viewLevel", null),
        (0, r.gn)([l.Fl], u.prototype, "viewShouldFadeForModal", null),
        (0, r.gn)([o.ak], u.prototype, "dismissView", null),
        (u = i = (0, r.gn)([c.Pi], u));
      const h = /^(446|865)$/.test(n.j)
        ? null
        : s.forwardRef((e, t) =>
            s.createElement(u, Object.assign({}, e, { ref: t }), e.children),
          );
      let m = class extends s.Component {
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
          return s.createElement(
            "div",
            Object.assign({}, this.props, {
              className: (0, a.LJ)(
                "View",
                [u.k_FadedForModalClassName, i],
                this.props.className,
              ),
            }),
            this.props.children,
          );
        }
      };
      m = (0, r.gn)([c.Pi], m);
    },
    424: (e, t, n) => {
      n.d(t, { L: () => o });
      var i = n(5876);
      const r = Object.values(i.sH).filter((e) => "number" == typeof e);
      function s(e, t) {
        return new Set([...e, ...t]);
      }
      class o {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return o.s_Instance || (o.s_Instance = new o()), o.s_Instance;
        }
        suppressHaptics(e, t) {
          const n = new Set(t);
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                s(this.m_mapSuppressedHaptics.get(e), n),
              )
            : this.m_mapSuppressedHaptics.set(e, n);
        }
        suppressHapticsExcept(e, t) {
          const n = new Set(t),
            i = new Set(r.filter((e) => !n.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                s(this.m_mapSuppressedHaptics.get(e), i),
              )
            : this.m_mapSuppressedHaptics.set(e, i);
        }
        unsuppressHaptics(e, t) {
          const n = new Set(t);
          var i, r;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((i = this.m_mapSuppressedHaptics.get(e)),
                (r = n),
                new Set([...i].filter((e) => !r.has(e)))),
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
      o.s_Instance = null;
    },
    3161: (e, t, n) => {
      n.d(t, { R: () => o });
      var i = n(7294),
        r = n(3935);
      const s = (e) =>
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
      class o extends i.Component {
        render() {
          const e = document.body.getBoundingClientRect();
          let t = null;
          if (this.props.element) {
            const n = this.props.element.getBoundingClientRect();
            t = i.createElement(
              i.Fragment,
              null,
              i.createElement(s, { x: 0, y: 0, width: e.width, height: n.y }),
              i.createElement(s, {
                x: 0,
                y: n.y + n.height,
                width: e.width,
                height: e.height - n.height - n.y,
              }),
              i.createElement(s, {
                x: 0,
                y: n.y,
                width: n.x,
                height: n.height,
              }),
              i.createElement(s, {
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
              i.createElement(s, {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
              }),
            );
          return r.createPortal(t, document.body);
        }
      }
    },
    3930: (e, t, n) => {
      n.d(t, { u: () => d });
      var i,
        r = n(655),
        s = n(7294),
        o = n(8980),
        a = n(7062),
        l = n(9755),
        c = n(7008);
      let d = (i = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refParentPortal = s.createRef()),
            (this.state = {
              elemBoundingParent: window.document.body,
              bInDOM: !1,
            });
        }
        componentDidMount() {
          var e, t;
          this.setState({
            elemBoundingParent: (0, o.gZ)(
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
            s.createElement(
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
              s.createElement(
                l.og,
                Object.assign({}, n, {
                  shouldDismissOnClickAnywhere: !1,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !0,
                  onDismissRequested: this.props.onDismissRequested,
                  className: (0, o.LJ)("Modal", this.props.className),
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
      (d.MODAL_BOUNDS_MARGIN = 10), (d = i = (0, r.gn)([a.Pi], d));
    },
    7475: (e, t, n) => {
      n.d(t, { I: () => i, P: () => m });
      var i,
        r,
        s = n(655),
        o = n(7294),
        a = n(7056),
        l = n(5876),
        c = n(424),
        d = n(8980),
        p = n(2188),
        u = n(5177),
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
        })(r || (r = {}));
      class m extends o.Component {
        constructor(e) {
          super(e),
            (this.m_ref = o.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { eScrollState: r.Default, bAtEdge: null });
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
          this.setState({ eScrollState: r.MouseDown }),
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
            case r.MouseDown:
              if (this.props.scrollDirection == i.None) break;
              Math.abs(this.scrollsHorizontally ? t.x : t.y) >
                (this.scrollsHorizontally
                  ? m.MIN_HORIZONTAL_DRAG_DISTANCE
                  : m.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(e);
              break;
            case r.Dragging:
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
          if (this.state.eScrollState != r.Thrown) return;
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
            s = Math.min(5e4, Math.max(850, i));
          (this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - t * s * e,
            y: this.m_thrownVelocityPerSecond.y - n * s * e,
          }),
            Math.sign(this.m_thrownVelocityPerSecond.x) != t ||
            Math.sign(this.m_thrownVelocityPerSecond.y) != n ||
            (0, l.JR)(this.m_thrownVelocityPerSecond) <= 1
              ? this.setState({ eScrollState: r.Default })
              : this.requestNextAnimationFrame();
        }
        startDragging(e) {
          m.isScrollingSuppressed ||
            ((0, l.Op)() == l.qA.Overlay &&
              (this.setState({ eScrollState: r.Dragging }),
              (this.m_initialMousePosition = e),
              (this.m_initialScrollPosition = {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              }),
              this.logScrollSample()));
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({ eScrollState: r.Thrown }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(e) {
          this.setState(
            (e, t) =>
              e.eScrollState == r.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle,
                  ),
                  { eScrollState: r.Default })
                : null,
            e,
          );
        }
        get isThrown() {
          return this.state.eScrollState == r.Thrown;
        }
        calculateThrowStartVelocity() {
          let e = null,
            t = 0;
          for (let n = 1; n < this.m_mostRecentScrollSamples.length; n++) {
            const i = this.m_mostRecentScrollSamples[n - 1],
              r = this.m_mostRecentScrollSamples[n],
              s = (r.timeMs - i.timeMs) / 1e3,
              o = {
                x: (r.scrollPosition.x - i.scrollPosition.x) / s,
                y: (r.scrollPosition.y - i.scrollPosition.y) / s,
              };
            e
              ? ((e.x = (e.x * t + o.x) / (t + 1)),
                (e.y = (e.y * t + o.y) / (t + 1)))
              : (e = o),
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
              u.q.temporarilySuppressSoundEffect(),
              setTimeout(() => {
                m.s_CurrentlyDraggingPanel = null;
              }, 0))
            : this.setState({ eScrollState: r.Default }),
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
          return o.createElement(
            o.Fragment,
            null,
            this.state.eScrollState == r.Dragging && o.createElement(h.R, null),
            o.createElement(
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
          this.state.eScrollState == r.Thrown ? this.cancelThrowing(t) : t();
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
        (m.s_setScrollingSuppressors = p.LO.set()),
        (m.MAX_SCROLL_SAMPLES = 4),
        (m.MAX_PIXELS_PER_SECOND = 1e4),
        (m.MIN_THROW_VELOCITY_PER_SECOND = 1e3),
        (m.MIN_VERTICAL_DRAG_DISTANCE = 80),
        (m.MIN_HORIZONTAL_DRAG_DISTANCE = 40),
        (0, s.gn)([a.ak], m.prototype, "onWindowMouseMove", null),
        (0, s.gn)([a.ak], m.prototype, "onWindowMouseUp", null),
        (0, s.gn)([a.ak], m.prototype, "onMouseDown", null),
        (0, s.gn)([a.ak], m.prototype, "onMouseUp", null),
        (0, s.gn)([a.ak], m.prototype, "onScroll", null),
        (0, s.gn)([a.ak], m.prototype, "onAnimationFrame", null),
        (0, s.gn)([p.LO], m, "s_CurrentlyDraggingPanel", void 0),
        (0, s.gn)([p.Fl], m, "isScrollingSuppressed", null),
        (0, s.gn)([p.Fl], m, "userIsDragging", null),
        (0, s.gn)([p.aD], m, "suppressScrolling", null),
        (0, s.gn)([p.aD], m, "unsuppressScrolling", null);
    },
    4979: (e, t, n) => {
      n.d(t, { iR: () => v, px: () => s, uz: () => r });
      var i,
        r,
        s,
        o = n(655),
        a = n(7294),
        l = n(7056),
        c = n(2188),
        d = n(7062),
        p = n(5876),
        u = n(3107),
        h = n(5177),
        m = n(8980),
        g = n(424),
        S = n(7475),
        _ = n(3161);
      !(function (e) {
        (e[(e.Value = 0)] = "Value"), (e[(e.Color = 1)] = "Color");
      })(r || (r = {})),
        (function (e) {
          (e[(e.Below = 0)] = "Below"), (e[(e.OnHandle = 1)] = "OnHandle");
        })(s || (s = {}));
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
            (0, p.Op)() != p.qA.Overlay ||
              this.state.m_bSliding ||
              g.L.Instance.triggerHaptic(p.sH.ButtonEnter);
        }
        onSliderMouseLeave(e) {
          var t, n;
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t, e),
            (0, p.Op)() != p.qA.Overlay ||
              this.state.m_bSliding ||
              g.L.Instance.triggerHaptic(p.sH.ButtonLeave);
        }
        getNormalizedValueForMousePosition(e) {
          const t = this.m_refSlider.current.getBoundingClientRect(),
            n = this.sliderHandleElement.getBoundingClientRect(),
            i = this.isVertical ? t.bottom : t.left,
            r = this.isVertical ? n.height : n.width,
            s = this.isVertical ? t.height : t.width;
          return ((this.isVertical ? i - e + i : e) - (i + r / 2)) / (s - r);
        }
        updateValueForMousePosition(e, t) {
          const n = this.normalizedValue;
          let r =
            this.getNormalizedValueForMousePosition(e) + this.m_nValueOffset;
          const s = this.getClosestSnappableDetent(r),
            o = this.normalizedDetents;
          for (let e = 0; e < o.length; e++) {
            const t = o[e];
            Math.abs(r - t) > i.DETENT_UNIGNORE_DISTANCE &&
              this.m_setDetentsToIgnore.delete(t);
          }
          t && s === n && this.m_setDetentsToIgnore.add(s),
            null === s || this.m_setDetentsToIgnore.has(s) || (r = s),
            this.m_nCurrentNearestSnappableDetent !== s &&
              ((this.m_dragStartTime = new Date()),
              null !== this.m_nCurrentNearestSnappableDetent &&
                this.m_setDetentsToIgnore.add(
                  this.m_nCurrentNearestSnappableDetent,
                ),
              null === s ||
                this.m_setDetentsToIgnore.has(s) ||
                g.L.Instance.triggerHaptic(p.sH.Snap)),
            (this.m_nCurrentNearestSnappableDetent = s),
            this.setNormalizedValue(r);
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
          const r = this.isVertical ? e.y : e.x;
          this.setState({ m_bSliding: !0 }),
            this.updateValueForMousePosition(r, !0),
            this.setDragElapsedSecondsCSSProperty(0),
            g.L.Instance.suppressHapticsExcept(this, [
              p.sH.Sliding,
              p.sH.SlidingEdge,
              p.sH.Snap,
            ]),
            (this.m_dragStartTime = new Date()),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame,
            )),
            S.P.suppressScrolling(this.m_sScrollSuppressedIdentifier),
            u.G.Instance.playSound(
              null !== (t = this.props.interactionStartSoundEffect) &&
                void 0 !== t
                ? t
                : u.y.Grab,
            ),
            null === (i = (n = this.props).onInteractionStart) ||
              void 0 === i ||
              i.call(n);
        }
        stopSliding() {
          var e, t, n, i, r;
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
            u.G.Instance.playSound(
              null !== (r = this.props.interactionEndSoundEffect) &&
                void 0 !== r
                ? r
                : u.y.GrabRelease,
            ),
            S.P.unsuppressScrolling(this.m_sScrollSuppressedIdentifier));
        }
        getClosestSnappableDetent(e) {
          const t = this.normalizedDetents;
          t.sort((t, n) => (Math.abs(e - t) > Math.abs(e - n) ? 1 : -1));
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (Math.abs(e - r) < i.DETENT_SNAP_DISTANCE) return r;
          }
          return null;
        }
        get styleVariant() {
          return void 0 === this.props.styleVariant
            ? r.Value
            : this.props.styleVariant;
        }
        get valueStyleVariant() {
          return void 0 === this.props.valueStyleVariant
            ? s.Below
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
              r = Math.abs(i - n) < 1e-5 ? 1 : 1 - (1 % n);
            (0 == e || Math.abs(e - r) < 0.001) &&
              !t &&
              (g.L.Instance.triggerHaptic(p.sH.SlidingEdge), (t = !0)),
              !this.shouldTriggerHapticOnSnap ||
                this.isSnappedToDetent ||
                (0, p.Op)() != p.qA.Overlay ||
                t ||
                (g.L.Instance.triggerHaptic(p.sH.Snap), (t = !0));
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
              (g.L.Instance.triggerHaptic(p.sH.SlidingEdge), (t = !0));
            const n = 40;
            Math.floor(i * n) == Math.floor(e * n) ||
              t ||
              (g.L.Instance.triggerHaptic(p.sH.Sliding), (t = !0));
          }
          const r = this.normalizedToExternal(e);
          this.props.onChange && this.props.onChange(r);
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
            n = this.styleVariant == r.Value && t,
            i = n && this.valueStyleVariant == s.OnHandle,
            o = n && this.valueStyleVariant == s.Below,
            l = this.styleVariant == r.Value && !i,
            c = this.normalizedValue,
            d = i && t.length >= 4,
            p =
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
                            this.props.styleVariant == r.Color ? t : null,
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
                  ["Color", this.styleVariant == r.Color],
                  ["Sliding", this.state.m_bSliding],
                  ["Disabled", !1 === this.props.enabled],
                  ["ValueOnHandle", i],
                  this.props.additionalClassName,
                ),
                style: {
                  "--slider-value": c,
                  "--slider-color":
                    this.props.styleVariant == r.Color
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
              p,
            ),
            o && a.createElement("div", { className: "RangeLabel" }, t),
          );
        }
      });
      (v.DETENT_SNAP_DISTANCE = 0.05),
        (v.DETENT_UNIGNORE_DISTANCE = 0.15),
        (0, o.gn)([l.ak], v.prototype, "onSliderMouseDown", null),
        (0, o.gn)([l.ak], v.prototype, "onWindowMouseMove", null),
        (0, o.gn)([l.ak], v.prototype, "onSliderMouseEnter", null),
        (0, o.gn)([l.ak], v.prototype, "onSliderMouseLeave", null),
        (0, o.gn)([c.Fl], v.prototype, "isSnappedToDetent", null),
        (0, o.gn)([l.ak], v.prototype, "onWindowMouseUp", null),
        (0, o.gn)([c.Fl], v.prototype, "styleVariant", null),
        (0, o.gn)([c.Fl], v.prototype, "valueStyleVariant", null),
        (0, o.gn)([c.Fl], v.prototype, "externalRangeMin", null),
        (0, o.gn)([c.Fl], v.prototype, "externalRangeMax", null),
        (0, o.gn)([c.Fl], v.prototype, "normalizedStep", null),
        (0, o.gn)([c.Fl], v.prototype, "exponent", null),
        (0, o.gn)([c.Fl], v.prototype, "normalizedDetents", null),
        (0, o.gn)([l.ak], v.prototype, "externalToNormalized", null),
        (0, o.gn)([l.ak], v.prototype, "normalizedToExternal", null),
        (0, o.gn)([c.Fl], v.prototype, "normalizedValue", null),
        (0, o.gn)([c.Fl], v.prototype, "externalValue", null),
        (0, o.gn)([c.Fl], v.prototype, "shouldTriggerHapticOnSnap", null),
        (0, o.gn)([l.ak], v.prototype, "onDragAnimationFrame", null),
        (v = i = (0, o.gn)([d.Pi], v));
    },
    3107: (e, t, n) => {
      n.d(t, { G: () => o, y: () => i });
      var i,
        r = n(655),
        s = n(5876);
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
      class o {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return o.s_Instance || (o.s_Instance = new o()), o.s_Instance;
        }
        preloadSounds() {
          if (!((0, s.Op)() != s.qA.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in i) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if ((0, s.Op)() != s.qA.Overlay) return;
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
          const t = o.Sources[e],
            n = t.source;
          if (!n) return void this.m_mapSoundElems.set(e, []);
          const i = ("string" == typeof n ? [n] : n).map((e) => {
            var n, i;
            let r = document.createElement("audio");
            return (
              (r.src = `${e}?t=${(new Date()).getTime()}`),
              (r.preload = "auto"),
              (r.volume = null !== (n = t.volume) && void 0 !== n ? n : 1),
              (null === (i = t.bRespectsGlobalVolume) || void 0 === i || i) &&
                (r.volume *= 1),
              r
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
      (o.Sources = {
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
        (o.s_Instance = null);
    },
    2749: (e, t, n) => {
      n.d(t, { Ti: () => c });
      var i,
        r,
        s = n(655),
        o = n(7294),
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
        })(r || (r = {}));
      class c extends o.Component {
        constructor(e) {
          super(e),
            (this.m_nNextStateTimeoutHandle = 0),
            (this.state = { eAnimationState: e.visible ? r.Shown : r.Hidden });
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
          var e, t, n, i, s, o, a, l;
          switch (this.state.eAnimationState) {
            case r.Showing:
              null === (t = (e = this.props).onStartShowing) ||
                void 0 === t ||
                t.call(e);
              break;
            case r.Shown:
              null === (i = (n = this.props).onShown) ||
                void 0 === i ||
                i.call(n);
              break;
            case r.Hiding:
              null === (o = (s = this.props).onStartHiding) ||
                void 0 === o ||
                o.call(s);
              break;
            case r.Hidden:
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
                eAnimationState: this.props.visible ? r.Showing : r.Hiding,
              }));
        }
        static getDerivedStateFromProps(e, t) {
          return {};
        }
        finishAnimation() {
          this.setState((e) => {
            switch (e.eAnimationState) {
              case r.Showing:
                return { eAnimationState: r.Shown };
              case r.Hiding:
                return { eAnimationState: r.Hidden };
            }
            return null;
          });
        }
        render() {
          return this.state.eAnimationState == r.Hidden
            ? null
            : o.createElement(
                "div",
                {
                  className: (0, a.LJ)(
                    "ShowHideAnimation",
                    r[this.state.eAnimationState],
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
      (0, s.gn)([l.ZP], c.prototype, "cancelTimeout", null),
        (0, s.gn)([l.ZP], c.prototype, "finishAnimation", null);
    },
    1380: (e, t, n) => {
      n.d(t, { S: () => c });
      var i = n(655),
        r = n(7056),
        s = n(9669),
        o = n.n(s),
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
            o()
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
        (0, i.gn)([r.ak], l.prototype, "onSceneApplicationStateChanged", null),
        (0, i.gn)([a.aD], l.prototype, "SetApplicationMap", null),
        (0, i.gn)([r.ak], l.prototype, "QueryApplications", null),
        (0, i.gn)([r.ak], l.prototype, "GetAppImageURL", null),
        (0, i.gn)([r.ak], l.prototype, "GetApp", null),
        (0, i.gn)([r.ak], l.prototype, "GetRecentApps", null),
        (0, i.gn)([r.ak], l.prototype, "GetCurrentSceneProcess", null),
        (0, i.gn)([r.ak], l.prototype, "IsAppAllowedPrivateInputs", null),
        (0, i.gn)([r.ak], l.prototype, "ShouldShowBindingFailureForApp", null);
      const c = new l();
      window.applications = c;
    },
    4687: (e, t, n) => {
      n.d(t, { p: () => s });
      var i = n(655),
        r = n(7056);
      class s {
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
      (0, i.gn)([r.ZP], s.prototype, "Dispatch", null);
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
                    ? `${e} ${r(t)}`
                    : r(t)
                  : e
              : e,
          "",
        );
      }
      function r(e) {
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
        AC: () => E,
        Av: () => ne,
        Az: () => v,
        BZ: () => B,
        CS: () => Q,
        EL: () => W,
        F$: () => x,
        FM: () => re,
        GN: () => _,
        I8: () => s,
        J9: () => ue,
        MI: () => l,
        MJ: () => me,
        ML: () => ge,
        MZ: () => R,
        Ml: () => Se,
        N9: () => de,
        Ob: () => J,
        PF: () => d,
        Pt: () => I,
        Pv: () => r,
        Qg: () => L,
        R3: () => ce,
        RD: () => z,
        RM: () => f,
        T2: () => M,
        Us: () => m,
        Vq: () => S,
        W4: () => o,
        WF: () => le,
        Xl: () => T,
        YJ: () => oe,
        YL: () => ae,
        ZN: () => P,
        aT: () => H,
        bU: () => he,
        bp: () => X,
        bt: () => N,
        dG: () => O,
        eW: () => G,
        f$: () => F,
        f8: () => C,
        fY: () => j,
        fj: () => ie,
        gB: () => p,
        gC: () => b,
        hK: () => i,
        jW: () => a,
        je: () => V,
        jw: () => k,
        k3: () => u,
        k_: () => te,
        ml: () => D,
        nf: () => K,
        o1: () => $,
        oh: () => U,
        po: () => c,
        qV: () => h,
        r4: () => g,
        rT: () => Y,
        rl: () => A,
        ro: () => pe,
        wX: () => w,
        wc: () => se,
        y3: () => Z,
        yQ: () => ee,
        zL: () => q,
      });
      const i = "openvr.tool.steamvr_environments",
        r = "system.generated.steam.exe",
        s = "steam.app.",
        o = s + "250820",
        a = s + "330050",
        l = "system.dashboard.",
        c = "system.dashboard.quicklaunch",
        d = "system.dashboard.nowplaying",
        p = "system.dashboard.desktop",
        u = 0.25,
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
        R = "valve.steam",
        w = "valve.steam.desktopgame",
        M = "valve.steam.gamepadui.main",
        A = "valve.steam.gamepadui.header",
        B = "valve.steam.gamepadui.bar",
        k = "valve.steam.gamepadui.keyboard",
        T = "valve.steam.desktop",
        E = "steamlink_openvr-overlay",
        D = "DashboardCurvatureOrigin",
        I = v + "::" + D,
        x = /^(446|865)$/.test(n.j) ? null : 2.667 / 1694,
        L = "DashboardControlStripTransform",
        O = "DashboardGrabHandleTransform",
        P = "DashboardOverlayControlBarOrigin",
        F = "DashboardGrabHandleTransform_Legacy",
        V = "/settings/steamvr/enableHomeApp",
        N = "/settings/steamvr/supersampleManualOverride",
        G = "/settings/steamvr/supersampleScale",
        H = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        U = "/settings/camera/roomViewStyle",
        W = "/settings/steamvr/backgroundCameraHeight",
        z = "/settings/steamvr/backgroundDomeRadius",
        X = "/settings/steamvr/analogGain",
        q = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        j = "/settings/steamvr/showAdvancedSettings",
        K = "/settings/dashboard/lastAccessedExternalOverlayKey",
        Z = "/settings/internal/dashboardInitialOverlay",
        $ = "/settings/dashboard/position_2",
        J = "/settings/dashboard/theaterCurvature",
        Q = "/settings/dashboard/theaterScreenSize",
        Y = "/settings/dashboard/theaterScreenAlignment",
        ee = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        te = "/settings/camera/roomView",
        ne = "/settings/camera/enableCamera",
        ie = "/settings/dashboard/enableWindowView",
        re = "/settings/dashboard/maxInlineTabs",
        se = "/settings/steamvr/maxRecommendedResolution",
        oe = "/settings/steamvr/disableKeyboardPrivacy",
        ae = "/settings/dashboard/allowLegacyQuickLaunch",
        le = "/settings/openxr/metaUnityPluginCompatibility",
        ce = "/settings/input/overlayFilteringEnabled",
        de = "/settings/input/overlayFilteringMinCutoff",
        pe = "/settings/input/overlayFilteringBeta",
        ue = "/settings/input/overlayFilteringDerivCutoff",
        he = "/settings/input/overlayMagnetismEnabled",
        me = "/settings/input/overlayMagnetismLockDistance",
        ge = "/settings/input/overlayMagnetismDeadZone",
        Se = "binding_callouts/main";
    },
    5211: (e, t, n) => {
      n.d(t, {
        Cl: () => w,
        E9: () => M,
        Fv: () => b,
        _l: () => R,
        c6: () => T,
      });
      var i,
        r = n(655),
        s = n(7056),
        o = n(9669),
        a = n.n(o),
        l = n(2188),
        c = n(3568),
        d = n(5876),
        p = n(8048),
        u = n(1380),
        h = n(9809);
      class m {}
      (0, r.gn)([l.LO], m.prototype, "path", void 0),
        (0, r.gn)([l.LO], m.prototype, "mode", void 0),
        (0, r.gn)([l.LO], m.prototype, "parameters", void 0),
        (0, r.gn)([l.LO], m.prototype, "inputs", void 0);
      class g {}
      (0, r.gn)([l.LO], g.prototype, "path", void 0),
        (0, r.gn)([l.LO], g.prototype, "output", void 0);
      class S {}
      (0, r.gn)([l.LO], S.prototype, "path", void 0),
        (0, r.gn)([l.LO], S.prototype, "output", void 0);
      class _ {}
      (0, r.gn)([l.LO], _.prototype, "path", void 0),
        (0, r.gn)([l.LO], _.prototype, "output", void 0);
      class v {}
      (0, r.gn)([l.LO], v.prototype, "output", void 0),
        (0, r.gn)([l.LO], v.prototype, "inputs", void 0);
      class y {}
      (0, r.gn)([l.LO], y.prototype, "chords", void 0),
        (0, r.gn)([l.LO], y.prototype, "poses", void 0),
        (0, r.gn)([l.LO], y.prototype, "haptics", void 0),
        (0, r.gn)([l.LO], y.prototype, "sources", void 0),
        (0, r.gn)([l.LO], y.prototype, "skeleton", void 0);
      class b {
        constructor() {
          (this.vecRequired = []), (this.vecSuggested = []);
        }
      }
      class f {}
      (0, r.gn)([l.LO], f.prototype, "device_path_string", void 0),
        (0, r.gn)([l.LO], f.prototype, "device_path_handle", void 0),
        (0, r.gn)([l.LO], f.prototype, "role", void 0),
        (0, r.gn)([l.LO], f.prototype, "controller_role", void 0);
      class C {}
      function R(e) {
        return new Promise(function (t, n) {
          a()
            .get("/input/getactions.json?app_key=" + e)
            .then((n) => {
              console.log("Loaded action manifest for ", e), t(n.data);
            })
            .catch((e) => {
              n(e);
            });
        });
      }
      function w(e, t, n) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          let i = (yield a().get(
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
      (0, r.gn)([l.LO], C.prototype, "trackers", void 0),
        (0, r.gn)([l.LO], C.prototype, "valid_roles", void 0);
      class M {
        constructor(e, t) {
          (this.x = e), (this.y = t), this.toString.bind(this);
        }
        toString() {
          return this.x + "," + this.y;
        }
      }
      class A {
        constructor(e, t, n, i, r) {
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
            (this.m_sActionSet = r),
            (this.m_BindingStoreObserverDisposer = (0, l.N7)(T, (e) => {
              "m_LoadedBinding" == e.name && this.UpdateBindingSource();
            })),
            this.UpdateBindingSource(),
            T.RegisterBindingWatcher(this.UpdateBindingSource.bind(this));
        }
        cancelWatcher() {
          this.m_BindingStoreObserverDisposer(),
            T.UnregisterBindingWatcher(this.UpdateBindingSource);
        }
        UpdateBindingSource() {
          this.m_BindingUISource = T.GetActionBinding(
            this.GetFullInputPath,
            this.m_sActionSet,
          );
        }
        get GetFullInputPath() {
          let e = this.m_sDeviceInputPath + this.m_sInputPath;
          return (e = e.replace(/([^:]\/)\/+/g, "$1")), e;
        }
        GetSVGEndPoint() {
          return new M(
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
              i = T.GetActionByName(n);
            if (!i) {
              let e = T.GetSimulatedActionByPath(n);
              e && (i = T.CreateActionDefinitionForSimulatedAction(e));
            }
            let r = T.GetAliasInfo(n);
            return (
              i &&
                r &&
                r.alias_name &&
                ((i = Object.assign({}, i)), (i.localized_name = r.alias_name)),
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
          return h.I.LocalizeDriverString(
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
              T.SetInputModeForInputSource(this.GetFullInputPath, t, e));
        }
        AddInputMode(e) {
          this.m_iNewSourceEntry = T.AddInputModeForSource(
            this.GetFullInputPath,
            e,
          );
        }
        DeleteInputMode(e) {
          !this.m_BindingUISource || e < 0 || e >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : T.DeleteInputModeForSource(this.GetFullInputPath, e);
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
          T.SetActionForInputModeType(this.GetFullInputPath, e, "click", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetTouchAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "touch", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetHeldAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "held", t, [
            "button",
            "complex_button",
          ]);
        }
        SetLongAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "long", t, [
            "button",
            "complex_button",
          ]);
        }
        SetSingleAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "single", t, [
            "button",
            "complex_button",
          ]);
        }
        SetDoubleAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "double", t, [
            "button",
            "complex_button",
          ]);
        }
        SetPositionAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "position", t, [
            "trackpad",
            "joystick",
          ]);
        }
        SetNorthAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "north", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetEastAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "east", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetSouthAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "south", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetWestAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "west", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetCenterAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "center", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetScrollAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "scroll", t, [
            "scroll",
          ]);
        }
        SetPullAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "pull", t, [
            "trigger",
          ]);
        }
        SetForceAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "force", t, [
            "force_sensor",
          ]);
        }
        SetGrabAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "grab", t, [
            "grab",
          ]);
        }
        SetValueAction(e, t) {
          T.SetActionForInputModeType(this.GetFullInputPath, e, "value", t, [
            "scalar_constant",
          ]);
        }
        CopyActions(e) {
          T.ClearModesForInputPath(this.GetFullInputPath),
            e.GetModes.forEach((e, t) => {
              T.AddInputModeForSource(this.GetFullInputPath, e.mode),
                e.inputs.forEach((e, n) => {
                  T.SetActionForInputModeType(
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
          T.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t,
            n,
          );
        }
        SetTouchParameter(e, t, n) {
          T.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t,
            n,
          );
        }
        SetParameter(e, t, n, i) {
          T.SetParameterForInputModeType(this.GetFullInputPath, e, t, n, i);
        }
        GetClickParameter(e, t) {
          return T.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t,
          );
        }
        GetTouchParameter(e, t) {
          return T.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t,
          );
        }
        GetParameter(e, t, n) {
          return T.GetParameterForInputModeType(this.GetFullInputPath, e, t, n);
        }
        GetTrackpadInvertState(e) {
          switch (
            T.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "trackpad",
              "invert",
            )
          ) {
            case "x":
              return "x";
            case "y":
              return "y";
            case "xy":
              return "xy";
            default:
              return "";
          }
        }
        SetTrackpadInvertState(e, t) {
          let n = "";
          switch (t) {
            case "x":
              n = "x";
              break;
            case "y":
              n = "y";
              break;
            case "xy":
              n = "xy";
          }
          T.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "trackpad",
            "invert",
            n,
          );
        }
      }
      (0, r.gn)([l.LO], A.prototype, "m_BindingUISource", void 0),
        (0, r.gn)([l.LO], A.prototype, "m_ControllerProfile", void 0),
        (0, r.gn)([l.LO], A.prototype, "m_sDeviceInputPath", void 0),
        (0, r.gn)([l.LO], A.prototype, "m_eButtonSide", void 0),
        (0, r.gn)([l.LO], A.prototype, "m_sInputPath", void 0),
        (0, r.gn)([l.LO], A.prototype, "m_sActionSet", void 0),
        (0, r.gn)([s.ak], A.prototype, "cancelWatcher", null),
        (0, r.gn)([l.aD], A.prototype, "UpdateBindingSource", null),
        (0, r.gn)([l.Fl], A.prototype, "GetFullInputPath", null),
        (0, r.gn)([s.ak], A.prototype, "GetSVGEndPoint", null),
        (0, r.gn)([l.Fl], A.prototype, "GetButtonSide", null),
        (0, r.gn)([l.Fl], A.prototype, "GetNumModes", null),
        (0, r.gn)([s.ak], A.prototype, "GetActionForInputType", null),
        (0, r.gn)([s.ak], A.prototype, "GetClickAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetTouchAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetPositionAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetHeldAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetLongAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetSingleAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetDoubleAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetNorthAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetEastAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetSouthAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetWestAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetCenterAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetScrollAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetPullAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetForceAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetGrabAction", null),
        (0, r.gn)([s.ak], A.prototype, "GetValueAction", null),
        (0, r.gn)([l.Fl], A.prototype, "GetControllerInputName", null),
        (0, r.gn)([l.Fl], A.prototype, "GetModes", null),
        (0, r.gn)([s.ak], A.prototype, "GetMode", null),
        (0, r.gn)([l.Fl], A.prototype, "GetInputSourceType", null),
        (0, r.gn)([l.Fl], A.prototype, "GetInputSource", null),
        (0, r.gn)([l.Fl], A.prototype, "GetInputSourceClickSupport", null),
        (0, r.gn)([l.Fl], A.prototype, "GetInputSourceTouchSupport", null),
        (0, r.gn)([l.Fl], A.prototype, "GetInputSourceForceSupport", null),
        (0, r.gn)([l.Fl], A.prototype, "GetInputSourceDefaultDeadzone", null),
        (0, r.gn)([l.aD], A.prototype, "SetInputMode", null),
        (0, r.gn)([l.aD], A.prototype, "AddInputMode", null),
        (0, r.gn)([l.aD], A.prototype, "DeleteInputMode", null),
        (0, r.gn)([s.ak], A.prototype, "ClearNewModeIfSet", null),
        (0, r.gn)([s.ak], A.prototype, "BHasModeSelectionPending", null),
        (0, r.gn)([l.aD], A.prototype, "SetClickAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetTouchAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetHeldAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetLongAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetSingleAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetDoubleAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetPositionAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetNorthAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetEastAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetSouthAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetWestAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetCenterAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetScrollAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetPullAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetForceAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetGrabAction", null),
        (0, r.gn)([l.aD], A.prototype, "SetValueAction", null),
        (0, r.gn)([l.aD], A.prototype, "CopyActions", null),
        (0, r.gn)([s.ak], A.prototype, "BindingsMatch", null),
        (0, r.gn)([l.aD], A.prototype, "SetClickParameter", null),
        (0, r.gn)([l.aD], A.prototype, "SetTouchParameter", null),
        (0, r.gn)([l.aD], A.prototype, "SetParameter", null),
        (0, r.gn)([l.aD], A.prototype, "GetClickParameter", null),
        (0, r.gn)([l.aD], A.prototype, "GetTouchParameter", null),
        (0, r.gn)([l.aD], A.prototype, "GetParameter", null),
        (0, r.gn)([s.ak], A.prototype, "GetTrackpadInvertState", null),
        (0, r.gn)([l.aD], A.prototype, "SetTrackpadInvertState", null);
      class B {
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
      (0, r.gn)([s.ak], B.prototype, "resolve", null),
        (0, r.gn)([s.ak], B.prototype, "reject", null),
        (function (e) {
          (e[(e.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
            (e[(e.eWebSocketState_Disconnected = 1)] =
              "eWebSocketState_Disconnected"),
            (e[(e.eWebSocketState_Connecting = 2)] =
              "eWebSocketState_Connecting"),
            (e[(e.eWebSocketState_Connected = 3)] =
              "eWebSocketState_Connected");
        })(i || (i = {}));
      class k {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_eWebSocketState = i.eWebSocketState_Unknown),
            (this.m_timerWebSocket = void 0),
            (this.m_dateStartTime = new Date()),
            (this.m_sLoadedBindingURI = void 0),
            (this.m_LoadedBinding = void 0),
            (this.m_ModifiedBindingSet = l.LO.map()),
            (this.m_ModifiedOptions = l.LO.map()),
            (this.m_ModifiedAliases = l.LO.map()),
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
            (this.m_ModifiedSimulatedActions = l.LO.map()),
            (this.m_nNextSimulatedActionId = 1),
            (this.m_nBindingSubscriptionChangedCanary = 1);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            this.m_eWebSocketState != i.eWebSocketState_Connecting &&
              this.m_eWebSocketState != i.eWebSocketState_Connected &&
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
              (this.m_eWebSocketState = i.eWebSocketState_Connecting)),
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
            h.I.ConnectedDevices.forEach((n) => {
              n.controller_type == e && t++;
            }),
            t
          );
        }
        ComputeControllerTypeScore(e) {
          let t = this.CountDevicesWithControllerType(e.controller_type),
            n =
              ((null === d.Co || void 0 === d.Co ? void 0 : d.Co.HasHMD())
                ? null === d.Co || void 0 === d.Co
                  ? void 0
                  : d.Co.VRProperties.GetStringProperty(
                      "/user/head",
                      d.Uk.Prop_ExpectedControllerType_String,
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
            h.I.ControllerTypes.forEach((n) => {
              let i = this.ComputeControllerTypeScore(n);
              i > t && ((e = n), (t = i));
            }),
            e
          );
        }
        RefreshInputState() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = h.I.KnownControllerTypes.size;
            return h.I.GetInputState().then(() => {
              this.m_SelectedApp &&
                e != h.I.KnownControllerTypes.size &&
                this.ReloadCurrentApp();
              let t = !1;
              const n = this.GetBestControllerType();
              let i = h.I.FindDeviceClassForControllerType(
                this.m_sSelectedControllerType,
              );
              if (
                null != n &&
                this.m_sSelectedControllerType != n.controller_type &&
                !this.m_bControllerTypeSelectedByUser
              ) {
                let e = h.I.FindDeviceClassForControllerType(n.controller_type);
                p.w.IsSafeToResetControllerType(i, e) &&
                  ((this.m_sSelectedControllerType = n.controller_type),
                  (t = !0));
              }
              return t ? this.ReloadControllerConfiguration() : null;
            });
          });
        }
        get SteamVRUnavailable() {
          return this.m_eWebSocketState == i.eWebSocketState_Connecting ||
            this.m_eWebSocketState == i.eWebSocketState_Unknown
            ? Date.now() - this.m_dateStartTime.getTime() > 1e4
            : this.m_eWebSocketState != i.eWebSocketState_Connected;
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
              localized_name: (0, c.Xx)(
                "#SecondaryController_ReturnWithLeftHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithRightHand",
              localized_name: (0, c.Xx)(
                "#SecondaryController_ReturnWithRightHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithHead",
              localized_name: (0, c.Xx)("#SecondaryController_ReturnWithHead"),
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
            u.S.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
            h.I.ShouldSendSystemButtonToAllApps
          );
        }
        get SelectedControllerTypeInfo() {
          if (h.I.IsValid && null != this.m_sSelectedControllerType)
            return h.I.GetControllerTypeInfo(this.m_sSelectedControllerType);
        }
        DeviceForControllerType(e, t) {
          let n = h.I.GetControllerTypeInfo(e);
          if (!n) return;
          let i = !1;
          return (
            h.I.ConnectedDevices.find((r) => {
              if (r.controller_type == e) {
                if (((i = !0), !t)) return !0;
                if ("controller_handed" != n.input_bindingui_mode) return !0;
                let e = 1 == t ? "/left" : "/right";
                if (r.root_path && r.root_path.indexOf(e) >= 0) return !0;
              }
              return !1;
            }) ||
            (i
              ? h.I.ConnectedDevices.find((t) => t.controller_type == e)
              : void 0)
          );
        }
        get CurrentBindingSaveType() {
          if (null != this.m_LoadedBinding)
            return "developer" == this.m_LoadedBinding.save_type &&
              T.SelectedBindingIsLegacy
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
          let r = this.GetActionSetPoses(e.name);
          if (r)
            for (let e of r)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let s = this.GetActionSetHaptics(e.name);
          if (s)
            for (let e of s)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let o = this.GetActionSetSkeleton(e.name);
          if (o)
            for (let e of o)
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
            let n = u.S.GetApp(e);
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
            let n = h.I.GetControllerTypeInfo(e);
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
            ? h.I.LocalizeDriverString(t.resource_root, e)
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
              ? (0, c.Xx)("#" + t) +
                " " +
                this.LocalizeStringForSelectedControllerType(e.replace(t, ""))
              : e
          );
        }
        get SelectedControllerTypeLocalizedName() {
          let e = this.SelectedControllerTypeInfo;
          return e
            ? e.resource_root
              ? h.I.LocalizeDriverString(e.resource_root, e.controller_type)
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
              let r = this.m_ModifiedAliases.get(n.name);
              if (n.type == e && (!r || !r.hidden || t))
                if (r && r.alias_name) {
                  let e = Object.assign({}, n);
                  (e.localized_name = r.alias_name), i.push(e);
                } else i.push(n);
            }),
            t ||
              this.m_ModifiedSimulatedActions.forEach((t) => {
                this.GetActionTypeFromSimulatedActionType(t.type) == e &&
                  (this.ComputeSimulatedActionPathFromId(t.id),
                  t.name ? t.name : ((0, c.Xx)("UnnamedSimAction"), t.id),
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
              : (0, c.Xx)("UnnamedSimAction") + e.id,
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
        SetActionForInputModeType(e, t, n, i, r) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          class s {
            constructor(e, t) {
              (this.mode = e), (this.sourceIdx = t);
            }
          }
          let o = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, n) => {
                t.path == e && o.push(new s(t, n));
              }),
            o.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let a = o[t].sourceIdx;
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
            if (r.length > 0 && !r.find((t) => t == e.mode))
              return void console.log(
                "Trying to set invalid input type of ",
                n,
                " for current mode ",
                e.mode,
              );
            e.inputs || (e.inputs = l.LO.map()),
              "none" == i
                ? e.inputs.has(n) && e.inputs.delete(n)
                : e.inputs.has(n)
                  ? (e.inputs.get(n).output = i)
                  : e.inputs.set(n, { output: i }),
              this.NotifyWatchersOfChange();
          }
        }
        SetParameterForInputModeType(e, t, n, i, r) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetParameterForInputModeType: Invalid action set specified",
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
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e,
            );
          let o = s[t];
          if (o >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[o];
            if (!e.inputs)
              return void console.log(
                "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                n,
                " for current mode ",
                e.mode,
              );
            e.parameters || (e.parameters = l.LO.map()),
              e.parameters.get(i) != r &&
                (null == r ? e.parameters.delete(i) : e.parameters.set(i, r),
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
          let r = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((t, n) => {
                t.path == e && r.push(n);
              }),
            r.length <= t)
          )
            return (
              console.warn("Invalid mode index (", t, ") for path ", e), null
            );
          let s = r[t];
          if (s >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[s];
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
            let e = new y();
            (e.sources = []),
              this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, e);
          }
        }
        AddInputModeForSource(e, t) {
          this.AddActionSetIfRequired();
          let n = new m();
          return (
            (n.mode = t),
            (n.path = e),
            (n.inputs = l.LO.map()),
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
          let r = i[t];
          if (-1 != r) {
            let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[r];
            if (t.path == e) {
              if (t.mode == n)
                return void console.log(
                  "Trying to set new input mode to old mode!",
                );
              let i = JSON.parse(JSON.stringify(t)),
                s = new m();
              switch (
                ((s.mode = n), (s.path = e), (s.inputs = l.LO.map()), n)
              ) {
                case "button":
                case "toggle_button":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single &&
                        (s.inputs.set("single", i.inputs.single),
                        s.inputs.set("click", i.inputs.single)),
                        i.inputs.long && s.inputs.set("long", i.inputs.long),
                        i.inputs.press && s.inputs.set("press", i.inputs.press),
                        i.inputs.double &&
                          s.inputs.set("double", i.inputs.double),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                      break;
                    case "button":
                    case "toggle_button":
                    case "trackpad":
                    case "trigger":
                      i.inputs.click && s.inputs.set("click", i.inputs.click),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                  }
                  break;
                case "complex_button":
                  switch (i.mode) {
                    case "toggle_button":
                    case "button":
                    case "trackpad":
                    case "trigger":
                      i.inputs.click && s.inputs.set("single", i.inputs.click);
                  }
                  break;
                case "trackpad":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single && s.inputs.set("click", i.inputs.single);
                      break;
                    case "toggle_button":
                    case "button":
                    case "trigger":
                      i.inputs.click && s.inputs.set("click", i.inputs.click),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                  }
                  break;
                case "trigger":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single && s.inputs.set("click", i.inputs.single);
                      break;
                    case "toggle_button":
                    case "trackpad":
                    case "button":
                      i.inputs.click && s.inputs.set("click", i.inputs.click),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                  }
              }
              return (
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).sources[r] = s),
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
                .poses.push(new g()) - 1),
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
                .poses.push(new g()) - 1),
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
                .haptics.push(new S()) - 1),
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
                .haptics.push(new g()) - 1),
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
            r = new (class {})();
          (r.output = e), (r.path = i), this.SetInputPathForHaptics(r, i);
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
                .skeleton.push(new _()) - 1),
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
                .skeleton.push(new g()) - 1),
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
            r = new (class {})();
          (r.output = e), (r.path = i), this.SetInputPathForSkeleton(r, i);
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
              .chords.push(new v()),
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
            let r = "click";
            if (
              (e.length &&
                (r = this.GetBooleanInputOptionsForMode(e[0].mode)[0]),
              null == n)
            )
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[i]
                .inputs ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[i].inputs = new Array()),
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[i].inputs.push([t, r]);
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
                ).chords[i].inputs[e][1] = r);
            }
            this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", e);
        }
        LoadActionManifest() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return new Promise((e, t) => {
              R(this.m_SelectedApp.key).then((t) => {
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
                    p.w.SetBindingListError(
                      (0, c.Xx)("#ActionManifestError_UnknownError"),
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
          let e = h.I.FindRootPathForControllerType(
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
            let e = yield w(
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
              a()
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
            r = JSON.stringify(i);
          console.log("Saving tracker binding " + e),
            a()
              .post("/input/settrackerbinding.action", r)
              .then((e) => {
                console.log("SetTrackerBinding response: ", e.data),
                  this.UpdateTrackerBindings();
              })
              .catch((e) => {});
        }
        PulseHaptics(e) {
          let t = { path_handle: e },
            n = JSON.stringify(t);
          a()
            .post("/input/pulsehaptics.action", n)
            .then((e) => {
              console.log("PulseHaptics response: ", e.data);
            })
            .catch((e) => {});
        }
        get KnownControllerTypes() {
          let e = [];
          return (
            h.I.KnownControllerTypes.forEach((t) => {
              e.push(t);
            }),
            e
          );
        }
        PreserveCurrentBindingForUpgrade() {
          let e = p.w.CurrentBinding;
          return e && "autosave" == e.type
            ? this.SaveCurrentBinding(
                (0, c.Xx)("#PreservedAutosaveName"),
                "",
                "personal",
              )
            : Promise.resolve(null);
        }
        GetDefaultBindingNameForSaveType(e) {
          let t = T.SelectedControllerTypeInfo,
            n = h.I.LocalizeControllerString(t, t ? t.controller_type : "");
          switch (e) {
            default:
            case "autosave":
              return (0, c.Xx)(
                "#BindingUI_SaveDefaultName",
                this.m_SelectedApp.name,
                n,
              );
            case "personal":
              return (0, c.Xx)(
                "#BindingUI_SaveDefaultName_Personal",
                this.m_SelectedApp.name,
                n,
              );
            case "public":
              return (0, c.Xx)(
                "#BindingUI_SaveDefaultName_Public",
                h.I.CurrentUserPersonaName,
              );
            case "replace_default":
              return T.ConfigName;
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
              T.SetBindingURL(e.uri);
            });
        }
        SaveCurrentBinding(e, t, n) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.HasUnboundActions)
              throw new Error("#SaveError_BindingMissingRequiredActions");
            (this.m_sName = e), (this.m_sDescription = t);
            let i = this.m_sInteractionProfile.trim(),
              r = {
                app_key: this.SelectedApp,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
                save_type: n,
              };
            r.binding = {
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
            let s = JSON.stringify(r);
            return (
              console.log(
                "Saving binding " + e + " for app '" + this.SelectedApp + "'.",
              ),
              new Promise((e, t) => {
                let i = new B(n, e, t);
                this.m_OutstandingSaveBindingCalls.push(i),
                  a()
                    .post("/input/savebinding.action", s)
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
              a()
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
            (this.m_eWebSocketState = i.eWebSocketState_Connected),
            this.WebSocketSend("input_open"),
            this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("input_close");
            });
        }
        OnWebSocketClose(e) {
          console.log("Websocket closed ", e),
            (this.m_eWebSocketState = i.eWebSocketState_Disconnected),
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
            e.app_key != T.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${T.SelectedApp}.`,
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
            e.app_key == T.SelectedApp ||
              console.log(
                `Ignoring pending file saved for an app we aren't viewing. Pending: ${e.app_key}. Current: ${T.SelectedApp}.`,
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
            e.app_key != T.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${T.SelectedApp}.`,
            );
          if (e.uri != this.m_sLoadedBindingURI)
            return void console.log(
              `Ignoring binding load for an config url ${e.uri} we aren't viewing ${this.m_sLoadedBindingURI}`,
            );
          this.m_ControllerWatchers.clear(),
            (this.m_LoadedBinding = e),
            (this.m_ModifiedBindingSet = l.LO.map());
          let t = (0, c.Xx)("#unknown_application"),
            n = u.S.GetApp(T.SelectedApp);
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
            let e = T.SelectedControllerTypeInfo,
              n = h.I.LocalizeControllerString(e, e ? e.controller_type : "");
            this.m_sName = (0, c.Xx)("#BindingUI_SaveDefaultName", t, n);
          }
          e.binding_config &&
            e.binding_config.bindings &&
            (Object.keys(e.binding_config.bindings).forEach((t) => {
              var n;
              let i = new y();
              (i.chords = e.binding_config.bindings[t].chords),
                (i.poses = e.binding_config.bindings[t].poses),
                (i.haptics = e.binding_config.bindings[t].haptics),
                (i.skeleton = e.binding_config.bindings[t].skeleton),
                (i.sources = []),
                null === (n = e.binding_config.bindings[t].sources) ||
                  void 0 === n ||
                  n.forEach((e) => {
                    let t = new m();
                    (t.mode = e.mode),
                      (t.path = e.path),
                      (t.inputs = l.LO.map()),
                      e.hasOwnProperty("inputs") &&
                        Object.keys(e.inputs).forEach((n) => {
                          t.inputs.set(n, e.inputs[n]);
                        }),
                      null != e.parameters &&
                        Object.keys(e.parameters).length > 0 &&
                        ((t.parameters = l.LO.map()),
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
                a()
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
              a()
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
          let t = h.I.GetControllerTypeInfo(e);
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
            r = JSON.stringify(i);
          return (
            null != this.m_OutstandingSelectConfigResolve &&
              console.warn(
                "About to start second select config when one is already pending",
                this.m_OutstandingSelectConfigResolve,
              ),
            new Promise((e, t) => {
              (this.m_OutstandingSelectConfigResolve = e),
                a()
                  .post("/input/selectconfig.action", r)
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
              ? p.w.ShowBindingList(e.error_to_show)
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
          e.app_key == T.SelectedApp && this.ReloadCurrentApp();
        }
        SetBindingURL(e) {
          this.m_sLoadedBindingURI = e;
        }
        OnActionBindingsReloaded(e) {
          this.RefreshInputState();
        }
        GetControllerWatcherForSourceFromControllerType(e, t, n, i) {
          let r = "" + e.controller_type + t + n + i;
          if (!this.m_ControllerWatchers.has(r)) {
            let s = "";
            if ("controller_handed" == e.input_bindingui_mode)
              switch (t) {
                case 1:
                  s = "/user/hand/left";
                  break;
                case 2:
                  s = "/user/hand/right";
              }
            else {
              let t = h.I.ConnectedDevices.find(
                (t) => t.controller_type == e.controller_type,
              );
              t && t.root_path
                ? (s = t.root_path)
                : console.log(
                    "Unable to find device path for controller type ",
                    e,
                  );
            }
            this.m_ControllerWatchers.set(r, new A(s, e, t, n, i));
          }
          return this.m_ControllerWatchers.get(r);
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
      (0, r.gn)([l.LO], k.prototype, "m_eWebSocketState", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_sLoadedBindingURI", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_LoadedBinding", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_ModifiedBindingSet", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_ModifiedOptions", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_ModifiedAliases", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_sName", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_sDescription", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_sInteractionProfile", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_SelectedApp", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_SelectedAppActions", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_sSelectedActionSet", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_sSelectedControllerType", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_TrackerBindingSetup", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_OutstandingSaveBindingCalls", void 0),
        (0, r.gn)([l.LO], k.prototype, "m_ModifiedSimulatedActions", void 0),
        (0, r.gn)(
          [l.LO],
          k.prototype,
          "m_nBindingSubscriptionChangedCanary",
          void 0,
        ),
        (0, r.gn)([s.ak], k.prototype, "OpenWebSocketToHost", null),
        (0, r.gn)([l.Fl], k.prototype, "SteamVRUnavailable", null),
        (0, r.gn)([l.Fl], k.prototype, "ActionSets", null),
        (0, r.gn)([l.Fl], k.prototype, "ManifestOptions", null),
        (0, r.gn)([l.Fl], k.prototype, "SecondaryControllerOptions", null),
        (0, r.gn)([l.aD], k.prototype, "SetOptionValue", null),
        (0, r.gn)([l.aD], k.prototype, "AddSimulatedAction", null),
        (0, r.gn)([l.aD], k.prototype, "DeleteSimulatedActionByPath", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedApp", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedAppActions", null),
        (0, r.gn)(
          [l.Fl],
          k.prototype,
          "CurrentAppCanAccessPrivateInputs",
          null,
        ),
        (0, r.gn)([l.Fl], k.prototype, "SelectedControllerTypeInfo", null),
        (0, r.gn)([l.Fl], k.prototype, "CurrentBindingSaveType", null),
        (0, r.gn)(
          [l.Fl],
          k.prototype,
          "CurrentBindingActionManifestVersion",
          null,
        ),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSet", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetDetails", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetActions", null),
        (0, r.gn)([s.ak], k.prototype, "GetSelectedAppDefaultBinding", null),
        (0, r.gn)([s.ak], k.prototype, "GetActionByName", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetPoses", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetHaptics", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetSkeletons", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetChords", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetChordCount", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedActionSetSources", null),
        (0, r.gn)([l.Fl], k.prototype, "BSelectedActionSetHasPoses", null),
        (0, r.gn)([l.Fl], k.prototype, "BSelectedActionSetHasBoundPoses", null),
        (0, r.gn)([l.Fl], k.prototype, "BSelectedActionSetHasHaptics", null),
        (0, r.gn)(
          [l.Fl],
          k.prototype,
          "BSelectedActionSetHasBoundHaptics",
          null,
        ),
        (0, r.gn)([l.Fl], k.prototype, "BSelectedActionSetHasSkeletons", null),
        (0, r.gn)(
          [l.Fl],
          k.prototype,
          "BSelectedActionSetHasBoundSkeletons",
          null,
        ),
        (0, r.gn)([l.aD], k.prototype, "ClearSelectedApp", null),
        (0, r.gn)([l.aD], k.prototype, "SetSelectedApp", null),
        (0, r.gn)([l.aD], k.prototype, "SetSelectedController", null),
        (0, r.gn)([l.aD], k.prototype, "SetSelectedActionSet", null),
        (0, r.gn)(
          [s.ak],
          k.prototype,
          "LocalizeStringForSelectedControllerType",
          null,
        ),
        (0, r.gn)(
          [s.ak],
          k.prototype,
          "LocalizePathNameForSelectedControllerType",
          null,
        ),
        (0, r.gn)(
          [l.Fl],
          k.prototype,
          "SelectedControllerTypeLocalizedName",
          null,
        ),
        (0, r.gn)([l.aD], k.prototype, "RegisterBindingWatcher", null),
        (0, r.gn)([l.aD], k.prototype, "UnregisterBindingWatcher", null),
        (0, r.gn)([l.aD], k.prototype, "GetActionBinding", null),
        (0, r.gn)([s.ak], k.prototype, "GetInputModesForSourceType", null),
        (0, r.gn)([s.ak], k.prototype, "GetBooleanInputOptionsForMode", null),
        (0, r.gn)([s.ak], k.prototype, "GetActionBindingsOfType", null),
        (0, r.gn)([l.Fl], k.prototype, "GetBooleanActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "GetVector1ActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "GetLiteralVector1ActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "GetVector2ActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "GetVector3ActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "GetPoseActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "GetHapticsActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "GetSkeletonActionBindings", null),
        (0, r.gn)([l.Fl], k.prototype, "ConfigName", null),
        (0, r.gn)([l.Fl], k.prototype, "ConfigDescription", null),
        (0, r.gn)([s.ak], k.prototype, "GetPoseAction", null),
        (0, r.gn)([s.ak], k.prototype, "GetPoseActionByPath", null),
        (0, r.gn)([s.ak], k.prototype, "GetHapticsAction", null),
        (0, r.gn)([s.ak], k.prototype, "GetHapticsActionByPath", null),
        (0, r.gn)([s.ak], k.prototype, "GetSkeletonAction", null),
        (0, r.gn)([s.ak], k.prototype, "GetSkeletonActionByPath", null),
        (0, r.gn)([s.ak], k.prototype, "NotifyWatchersOfChange", null),
        (0, r.gn)([l.aD], k.prototype, "SetActionForInputModeType", null),
        (0, r.gn)([l.aD], k.prototype, "SetParameterForInputModeType", null),
        (0, r.gn)([s.ak], k.prototype, "AddActionSetIfRequired", null),
        (0, r.gn)([l.aD], k.prototype, "AddInputModeForSource", null),
        (0, r.gn)([l.aD], k.prototype, "DeleteInputModeForSource", null),
        (0, r.gn)([l.aD], k.prototype, "SetInputModeForInputSource", null),
        (0, r.gn)([l.aD], k.prototype, "ClearModesForInputPath", null),
        (0, r.gn)([l.aD], k.prototype, "SetInputPathForPose", null),
        (0, r.gn)([l.aD], k.prototype, "SetPoseForInputPath", null),
        (0, r.gn)([l.aD], k.prototype, "AddDefaultPose", null),
        (0, r.gn)([l.aD], k.prototype, "SetInputPathForHaptics", null),
        (0, r.gn)([l.aD], k.prototype, "SetHapticsForInputPath", null),
        (0, r.gn)([l.aD], k.prototype, "AddDefaultHaptics", null),
        (0, r.gn)([l.aD], k.prototype, "SetInputPathForSkeleton", null),
        (0, r.gn)([l.aD], k.prototype, "SetSkeletonForInputPath", null),
        (0, r.gn)([l.aD], k.prototype, "AddDefaultSkeleton", null),
        (0, r.gn)([l.aD], k.prototype, "SetActionForChord", null),
        (0, r.gn)([l.aD], k.prototype, "DeleteChord", null),
        (0, r.gn)([l.aD], k.prototype, "AddChord", null),
        (0, r.gn)([l.aD], k.prototype, "DeleteSourceFromChord", null),
        (0, r.gn)([l.aD], k.prototype, "SetInputTypeForChord", null),
        (0, r.gn)([l.aD], k.prototype, "SetInputSourceForChord", null),
        (0, r.gn)([l.aD], k.prototype, "LoadActionManifest", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedBindingURL", null),
        (0, r.gn)([l.Fl], k.prototype, "LoadedBindingURL", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedBindingIsLegacy", null),
        (0, r.gn)([l.Fl], k.prototype, "SelectedBindingIsOpenXR", null),
        (0, r.gn)([l.Fl], k.prototype, "IsSecondaryController", null),
        (0, r.gn)([l.Fl], k.prototype, "TrackerBindings", null),
        (0, r.gn)([l.aD], k.prototype, "GetTrackerBindings", null),
        (0, r.gn)([s.ak], k.prototype, "SetTrackerBinding", null),
        (0, r.gn)([s.ak], k.prototype, "PulseHaptics", null),
        (0, r.gn)([l.Fl], k.prototype, "KnownControllerTypes", null),
        (0, r.gn)([s.ak], k.prototype, "AutosaveBinding", null),
        (0, r.gn)([s.ak], k.prototype, "OnWebSocketOpen", null),
        (0, r.gn)([s.ak], k.prototype, "OnWebSocketClose", null),
        (0, r.gn)([s.ak], k.prototype, "WebSocketSend", null),
        (0, r.gn)([s.ak], k.prototype, "OnWorkshopUploadComplete", null),
        (0, r.gn)([s.ak], k.prototype, "OnPendingFileSaved", null),
        (0, r.gn)([l.Fl], k.prototype, "SaveNoticeText", null),
        (0, r.gn)([s.ak], k.prototype, "QueryBindingList", null),
        (0, r.gn)([s.ak], k.prototype, "DeleteBinding", null),
        (0, r.gn)([s.ak], k.prototype, "OnBindingDeleteComplete", null),
        (0, r.gn)(
          [s.ak],
          k.prototype,
          "ShouldShowBindingFailureForControllerType",
          null,
        ),
        (0, r.gn)([s.ak], k.prototype, "OnQueryResults", null),
        (0, r.gn)([s.ak], k.prototype, "SelectConfig", null),
        (0, r.gn)([s.ak], k.prototype, "OnSelectConfigComplete", null),
        (0, r.gn)([s.ak], k.prototype, "OnTrackersBindingChanged", null),
        (0, r.gn)([s.ak], k.prototype, "OnActionManifestReloaded", null),
        (0, r.gn)([s.ak], k.prototype, "SetBindingURL", null),
        (0, r.gn)([s.ak], k.prototype, "OnActionBindingsReloaded", null),
        (0, r.gn)(
          [s.ak],
          k.prototype,
          "GetControllerWatcherForSourceFromControllerType",
          null,
        ),
        (0, r.gn)([s.ak], k.prototype, "OnWebSocketMessage", null),
        (0, r.gn)([l.Fl], k.prototype, "BindingConfig", null),
        (0, r.gn)(
          [l.Fl],
          k.prototype,
          "BindingSubscriptionChangedCanary",
          null,
        );
      const T = new k();
      window.controllerBindingStore = T;
    },
    8155: (e, t, n) => {
      n.d(t, { GZ: () => l, vs: () => c });
      var i = n(655),
        r = n(7294),
        s = n(3365),
        o = (n(1783), n(7056)),
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
      class c extends r.Component {
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
                return r.createElement("div", {
                  key: t,
                  className: "InlineSeparator",
                });
              if ("-blank" == e.sValue)
                return r.createElement(
                  "div",
                  { key: t, className: "InlineBlankSeparator" },
                  e.sLocalized,
                );
              if ("-nonitem" == e.sValue)
                return r.createElement(
                  "div",
                  { key: t, className: "InlineNonItemSeparator" },
                  e.sLocalized,
                );
              if ("-subHeader" == e.sValue)
                return r.createElement(
                  "div",
                  { key: t, className: "InlineSubHeaderSeparator" },
                  e.sLocalized,
                );
              {
                let n,
                  i,
                  s = "InlineDropdownItem";
                return (
                  this.props.sValueSelectedItem == e.sValue &&
                    (s += " Selected"),
                  null != e.sRequiredLocalized &&
                    (n = r.createElement(
                      "span",
                      { className: "BindingLabelActionRequirement" },
                      e.sRequiredLocalized,
                    )),
                  null != e.sLocalizedDescription &&
                    (i = r.createElement(
                      a.ZP,
                      {
                        content: e.sLocalizedDescription,
                        theme: "ControllerBindingToolTip",
                      },
                      r.createElement(
                        "span",
                        { className: "SourceModeHelp" },
                        "?",
                      ),
                    )),
                  r.createElement(
                    "div",
                    {
                      key: t,
                      className: s,
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
          let o = this.props.bReadOnly ? () => {} : this.Show;
          return r.createElement(
            "div",
            { className: t, onClick: o },
            i &&
              r.createElement(
                "div",
                { className: this.props.sMainButtonClass },
                i,
              ),
            r.createElement(
              s.Z,
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
                r.createElement(
                  "div",
                  { className: "FlexColumn InlineDropdownModalWrapper" },
                  this.props.sModalTitleString &&
                    r.createElement(
                      "div",
                      { className: "Label ModalHeader" },
                      this.props.sModalTitleString,
                    ),
                  r.createElement(
                    "div",
                    { className: "FlexColumn InlineDropdownItemWrapper" },
                    e,
                  ),
                ),
            ),
          );
        }
      }
      (0, i.gn)([o.ak], c.prototype, "Show", null),
        (0, i.gn)([o.ak], c.prototype, "Hide", null),
        (0, i.gn)([o.ak], c.prototype, "OnOptionChanged", null);
    },
    8048: (e, t, n) => {
      n.d(t, { g: () => i, w: () => m });
      var i,
        r = n(655),
        s = n(9809),
        o = n(7056),
        a = n(2188),
        l = n(5876),
        c = n(3568),
        d = n(5211),
        p = n(1380),
        u = n(775);
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
            p.S.UpdateApplications().then(() => {
              if (
                ((0, l.Op)() == l.qA.Overlay
                  ? this.ShowOverlayInDashboard()
                  : (0, l.Op)() == l.qA.Desktop && l.Co.ShowBindingUI(!0),
                !p.S.GetApp(e.app_key))
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
            p.S.UpdateApplications().then(() => {
              if (!p.S.ShouldShowBindingFailureForApp(e.app_key)) return;
              if (
                !d.c6.ShouldShowBindingFailureForControllerType(
                  e.controller_type,
                )
              )
                return;
              d.c6.RememberFailedLoadUri(e.uri),
                d.c6.SetSelectedApp(e.app_key),
                d.c6.SetSelectedController(e.controller_type);
              let t = p.S.GetApp(e.app_key),
                n = s.I.GetControllerTypeInfo(e.controller_type);
              if (!n) return;
              let i = s.I.LocalizeControllerString(n, e.controller_type);
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
            p.S.UpdateApplications()
              .then(() => {
                (this.Loading = !1), (this.m_State = i.AppSelect);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        UpdatePathsTimeout() {
          try {
            u.n.UpdatePaths().then(() => {
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
            p.S.UpdateApplications()
              .then(() => {
                this.Loading = !1;
                let e = p.S.GetApp(d.c6.SelectedApp);
                e &&
                  e.client_container_handle &&
                  u.n.AddSubscribedContainer(e.client_container_handle),
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
          return (0, r.mG)(this, void 0, void 0, function* () {
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
      (0, r.gn)([a.LO], h.prototype, "m_State", void 0),
        (0, r.gn)([a.LO], h.prototype, "m_bLoading", void 0),
        (0, r.gn)([a.LO], h.prototype, "m_rBindingList", void 0),
        (0, r.gn)([a.LO], h.prototype, "m_bShowBindingListError", void 0),
        (0, r.gn)([a.LO], h.prototype, "m_sBindingListError", void 0),
        (0, r.gn)([a.LO], h.prototype, "m_bCanCloseBindingListError", void 0),
        (0, r.gn)([a.LO], h.prototype, "m_bDesktopMode", void 0),
        (0, r.gn)([o.ak], h.prototype, "OnShowAppSelect", null),
        (0, r.gn)([o.ak], h.prototype, "OnShowInputDebugger", null),
        (0, r.gn)([o.ak], h.prototype, "OnShowAppBinding", null),
        (0, r.gn)([o.ak], h.prototype, "OnBindingLoadFailed", null),
        (0, r.gn)([a.Fl], h.prototype, "DesktopMode", null),
        (0, r.gn)([o.ak], h.prototype, "SetBindingListError", null),
        (0, r.gn)([a.Fl], h.prototype, "ShowBindingListError", null),
        (0, r.gn)([a.Fl], h.prototype, "BindingListError", null),
        (0, r.gn)([a.Fl], h.prototype, "CanCloseBindingListError", null),
        (0, r.gn)([o.ak], h.prototype, "OnPopState", null),
        (0, r.gn)([o.ak], h.prototype, "GoBackPage", null),
        (0, r.gn)([o.ak], h.prototype, "GoForwardPage", null),
        (0, r.gn)([a.Fl], h.prototype, "GetUIState", null),
        (0, r.gn)([a.Fl], h.prototype, "BindingQueryResults", null),
        (0, r.gn)([a.Fl], h.prototype, "Loading", null),
        (0, r.gn)([o.ak], h.prototype, "IsSafeToResetControllerType", null),
        (0, r.gn)([o.ak], h.prototype, "EditCurrentBinding", null),
        (0, r.gn)([o.ak], h.prototype, "ViewCurrentBinding", null),
        (0, r.gn)([o.ak], h.prototype, "ShowBindingList", null),
        (0, r.gn)([a.Fl], h.prototype, "CurrentBinding", null),
        (0, r.gn)([o.ak], h.prototype, "ReturnToSettingsUI", null),
        (0, r.gn)([o.ak], h.prototype, "ShowAppSelect", null),
        (0, r.gn)([o.ak], h.prototype, "UpdatePathsTimeout", null),
        (0, r.gn)([o.ak], h.prototype, "ShowDebugger", null),
        (0, r.gn)([o.ak], h.prototype, "GetBindingList", null),
        (0, r.gn)([o.ak], h.prototype, "UpdateWindowTitle", null);
      const m = new h();
      window.inputUI = m;
    },
    9809: (e, t, n) => {
      n.d(t, { I: () => p });
      var i = n(655),
        r = n(2188),
        s = n(9669),
        o = n.n(s),
        a = n(7056),
        l = n(3568),
        c = n(5876);
      class d {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = r.LO.map()),
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
              o()
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
      (0, i.gn)([r.LO], d.prototype, "m_InputState", void 0),
        (0, i.gn)([r.LO], d.prototype, "m_KnownControllerTypes", void 0),
        (0, i.gn)([a.ak], d.prototype, "OnActionBindingsReloaded", null),
        (0, i.gn)([a.ak], d.prototype, "OnControllerTypeChanged", null),
        (0, i.gn)([r.Fl], d.prototype, "ConnectedDevices", null),
        (0, i.gn)([r.Fl], d.prototype, "ControllerTypes", null),
        (0, i.gn)([r.Fl], d.prototype, "ShouldSendSystemButtonToAllApps", null),
        (0, i.gn)([r.Fl], d.prototype, "ShowHiddenInputs", null),
        (0, i.gn)([r.Fl], d.prototype, "IsSteamAvailable", null),
        (0, i.gn)([r.Fl], d.prototype, "BDevMode", null),
        (0, i.gn)([r.Fl], d.prototype, "IsValid", null),
        (0, i.gn)([r.Fl], d.prototype, "CurrentUserPersonaName", null),
        (0, i.gn)([a.ak], d.prototype, "GetControllerTypeInfo", null),
        (0, i.gn)([a.ak], d.prototype, "LocalizeControllerString", null),
        (0, i.gn)([a.ak], d.prototype, "LocalizeDriverString", null),
        (0, i.gn)([r.aD], d.prototype, "UpdateControllerTypes", null),
        (0, i.gn)([r.aD], d.prototype, "GetInputState", null),
        (0, i.gn)([r.Fl], d.prototype, "KnownControllerTypes", null),
        (0, i.gn)(
          [a.ak],
          d.prototype,
          "FindDeviceClassForControllerType",
          null,
        );
      const p = new d();
      window.inputState = p;
    },
    3568: (e, t, n) => {
      n.d(t, { CK: () => l, LJ: () => s, Xx: () => o }), n(7294);
      var i = n(9669),
        r = n.n(i);
      class s {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        InitFromObjects(e, t, n, i) {
          this.m_mapTokens.clear();
          let r = [t, e, i, n];
          for (let e in r) {
            let t = r[e];
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
            return t ? (s.s_Date.toLocaleTimeString(t), t) : e;
          } catch (t) {
            return e;
          }
        }
      }
      function o(e, ...t) {
        let n = a.LocalizeString(e);
        return n
          ? (t.length > 0 &&
              (n = n.replace(/%(\d+)\$s/g, function (e, n) {
                return void 0 !== t[n - 1] ? String(t[n - 1]) : e;
              })),
            n)
          : e;
      }
      s.s_Date = new Date();
      const a = new s();
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
              s = Date.now().toString();
            return (
              (i =
                "drivers" == e
                  ? `/input/localization.json?t=${s}`
                  : "webhelper" == e
                    ? `/dashboard/localization/${e}_${t}.json?t=${s}`
                    : `localization/${e}_${t}.json?t=${s}`),
              r()
                .get(i)
                .then((e) => {
                  n(e.data);
                })
                .catch(() => {})
            );
          },
          s = [],
          o = [],
          l = [],
          c = [];
        for (let r of e)
          n.push(
            i(r, t, (e) => {
              s.push(e);
            }),
          ),
            "english" != t &&
              n.push(
                i(r, "english", (e) => {
                  l.push(e);
                }),
              );
        for (let e of ["webhelper"])
          n.push(
            i(e, t, (e) => {
              o.push(e);
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
              s.push(e);
            }),
          ),
          Promise.all(n).then(() => {
            a.InitFromObjects(s, o, l, c);
          })
        );
      }
      window.LocalizationManager = a;
    },
    8495: (e, t, n) => {
      n.d(t, { e: () => c });
      var i = n(655),
        r = n(5876),
        s = n(7056),
        o = n(7176),
        a = n(8261),
        l = n(9626);
      class c {
        constructor() {
          var e;
          (this.m_mailbox = new r.Nv()),
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
            : VRHTML.VROverlay.ThisOverlayKey()) != o.Az &&
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
            case r.qA.Desktop:
              return "desktop";
            case r.qA.Overlay:
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
      (0, i.gn)([s.ZP], c.prototype, "onSetDashboardSessionId", null);
      let d = null;
    },
    7008: (e, t, n) => {
      n.d(t, { R: () => a, d: () => l });
      var i = n(7294),
        r = n(3935),
        s = n(8980),
        o = n(5876);
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
                (this.m_elemPortalContainer = (0, s.gZ)(
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
                  r.createPortal(this.props.children, this.m_elemPortal),
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
            o.at,
            { ref: this.m_refPanelAnchor, latched: this.props.latched },
            i.createElement(o.wx, { id: this.m_sPanelAnchorID }),
            i.createElement(
              a,
              Object.assign({}, this.props),
              i.createElement(
                o.wx,
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
        r = n(7056),
        s = n(9669),
        o = n.n(s),
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
              o()
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
          let r = i.value;
          return r.length < 1 ? void 0 : r[0];
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
        (0, i.gn)([r.ak], c.prototype, "AddSubscribedContainer", null),
        (0, i.gn)([a.aD], c.prototype, "UpdateContainer", null),
        (0, i.gn)([r.ak], c.prototype, "GetAllActions", null),
        (0, i.gn)([r.ak], c.prototype, "GetActionValue", null),
        (0, i.gn)([r.ak], c.prototype, "GetAllInputValues", null),
        (0, i.gn)([r.ak], c.prototype, "GetInputValue", null),
        (0, i.gn)([r.ak], c.prototype, "GetScalarInputValue", null),
        (0, i.gn)([r.ak], c.prototype, "GetBooleanInputValue", null);
      const d = new c();
      window.paths = d;
    },
    7047: (e, t, n) => {
      n.d(t, {
        Bh: () => o,
        F: () => c,
        FE: () => r,
        TA: () => l,
        Xc: () => s,
        aD: () => a,
        aR: () => p,
        l2: () => d,
      });
      var i = n(3019);
      const r = i.BinaryReader.prototype,
        s = i.BinaryWriter.prototype;
      function o(e) {
        let t = {};
        const { fields: n } = e;
        for (let e in n) {
          const i = n[e];
          t[i.n] = i;
        }
        return t;
      }
      function a(e, t) {
        const { proto: n, fields: r } = e,
          s = new n();
        if (null == t) return s;
        for (let e in r) {
          const { n, c: o, r: a, d: l, q: c } = r[e];
          if (!t.hasOwnProperty(e)) continue;
          const d = t[e];
          o
            ? a
              ? i.Message.setRepeatedWrapperField(
                  s,
                  n,
                  Array.isArray(d) ? d.map((e) => o.fromObject(e)) : [],
                )
              : i.Message.setWrapperField(s, n, o.fromObject(d))
            : i.Message.setField(s, n, d);
        }
        return s;
      }
      function l(e, t, n) {
        const { proto: r, fields: s } = e;
        let o = {};
        for (let e in s) {
          const { n: r, c: a, r: l, d: c, q: d } = s[e];
          if (a)
            if (l)
              o[e] = i.Message.toObjectList(
                i.Message.getRepeatedWrapperField(n, a, r),
                a.toObject,
                t,
              );
            else {
              const s = i.Message.getWrapperField(n, a, r, d ? 1 : 0);
              s && (o[e] = a.toObject(t, s));
            }
          else {
            const t = i.Message.getFieldWithDefault(
              n,
              r,
              void 0 !== c ? c : null,
            );
            (null !== t || d) && (o[e] = t);
          }
        }
        return t && (o.$jspbMessageInstance = n), o;
      }
      function c(e, t, n) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          const r = e[n.getFieldNumber()];
          if (r) {
            const { n: e, c: s, r: o, d: a, q: l, br: c } = r;
            if (s) {
              const r = new s();
              n.readMessage(r, s.deserializeBinaryFromReader),
                o
                  ? i.Message.addToRepeatedWrapperField(t, e, r, s)
                  : i.Message.setWrapperField(t, e, r);
            } else if (c) {
              const r = c.call(n);
              o
                ? i.Message.addToRepeatedField(t, e, r)
                : i.Message.setField(t, e, r);
            } else
              console.assert(
                !!c,
                `Reader func not set for field number ${e} in class ${s}`,
              ),
                n.skipField();
          } else n.skipField();
        }
        return t;
      }
      function d(e, t, n) {
        const { fields: r } = e;
        for (let e in r) {
          const { n: s, c: o, r: a, d: l, q: c, bw: d } = r[e];
          if (o)
            if (a) {
              const e = i.Message.getRepeatedWrapperField(t, o, s);
              ((e && e.length) || c) &&
                n.writeRepeatedMessage(s, e, o.serializeBinaryToWriter);
            } else {
              const e = i.Message.getWrapperField(t, o, s, c ? 1 : 0);
              e && n.writeMessage(s, e, o.serializeBinaryToWriter);
            }
          else if (d) {
            const e = i.Message.getField(t, s);
            void 0 !== e && d.call(n, s, e);
          } else
            console.assert(
              !!d,
              `Writer func not set for field number ${s} in class ${o}`,
            );
        }
      }
      function p(e) {
        const t = e.proto;
        for (const n in e.fields) {
          const r = e.fields[n],
            { n: s, c: o, r: a, d: l, q: c } = r;
          r.hasOwnProperty("d")
            ? (t.prototype[n] = u(i.Message.getFieldWithDefault, s, l))
            : (t.prototype[n] = o
                ? a
                  ? u(i.Message.getRepeatedWrapperField, o, s)
                  : h(o, s)
                : u(i.Message.getField, s)),
            (t.prototype[`set_${n}`] = m(
              o
                ? a
                  ? i.Message.setRepeatedWrapperField
                  : i.Message.setWrapperField
                : i.Message.setField,
              s,
            )),
            a && (t.prototype[`add_${n}`] = g(s, o));
        }
      }
      function u(e, ...t) {
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
          ? function (n, r) {
              return i.Message.addToRepeatedWrapperField(this, e, n, t, r);
            }
          : function (t, n) {
              i.Message.addToRepeatedField(this, e, t, n);
            };
      }
    },
    6821: (e, t, n) => {
      n.d(t, { W: () => r });
      const i = new Map();
      function r(e) {
        const t = e.getVRPathPropertyKey(),
          n = e.serializeBase64String(),
          r = i.get(t);
        (r && r == n) ||
          (i.set(t, n),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRPathProperties.SetStringPathProperty(t, n));
      }
    },
    8980: (e, t, n) => {
      n.d(t, {
        Fc: () => a,
        LJ: () => l,
        aB: () => p,
        cB: () => d,
        gZ: () => c,
      });
      var i = n(655),
        r = n(7294),
        s = n(7056),
        o = n(2188);
      function a(e) {
        let t = window.location.search.substring(1).split("&");
        for (let n = 0; n < t.length; n++) {
          let i = t[n].split("=");
          if (decodeURIComponent(i[0]).toUpperCase() == e.toUpperCase())
            return decodeURIComponent(i[1]);
        }
        return "";
      }
      function l(...e) {
        return e
          .filter((e) => null != e && ("string" == typeof e || e[1]))
          .map((e) => ("string" == typeof e ? e : e[0]))
          .join(" ");
      }
      function c(e, t) {
        let n = t;
        for (; n.parentElement && !e.some((e) => n.matches(e)); )
          n = n.parentElement;
        return n;
      }
      class d {
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
      function p() {
        const [e, t] = r.useState(null),
          n = r.useCallback(() => {
            t(
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRDashboardManager.GetKeyboardInputInfo(),
            );
          }, []);
        return (
          r.useEffect(n, []),
          r.useEffect(() => {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForKeyboardVisibilityChangedEvents(() => n());
            return () => (null == e ? void 0 : e.unregister());
          }, [n]),
          e
        );
      }
      (0, i.gn)([o.LO], d.prototype, "m_bScrolling", void 0),
        (0, i.gn)([s.ZP], d.prototype, "ref", null),
        (0, i.gn)([o.Fl], d.prototype, "isScrolling", null),
        (0, i.gn)([s.ZP], d.prototype, "onParentScroll", null),
        (0, i.gn)([s.ZP], d.prototype, "onScrollStopTimeout", null);
    },
    9942: (e, t, n) => {
      n.d(t, { H: () => l });
      var i = n(655),
        r = n(5876),
        s = n(2188),
        o = n(7056),
        a = n(7176);
      class l {
        constructor() {
          (this.m_sceneApplicationState = r.xY.None),
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
          e == r.xY.Starting
            ? (this.m_sceneApplicationState == r.xY.Quitting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = e),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : e == r.xY.Quitting
              ? (this.m_sceneApplicationState == r.xY.Starting &&
                  this.resetLatchedValued(),
                (this.m_sceneApplicationState = e),
                this.updateLatchedValues(),
                this.cancelUnresponsiveTimeout(),
                this.cancelNoAppTimeout())
              : e == r.xY.Running
                ? ((this.m_sceneApplicationState = e),
                  this.cancelUnresponsiveTimeout(),
                  this.cancelNoAppTimeout(),
                  this.updateLatchedValues())
                : e == r.xY.None
                  ? (this.cancelUnresponsiveTimeout(),
                    this.m_sceneApplicationState != r.xY.None &&
                      this.startNoAppTimer())
                  : e == r.xY.Waiting &&
                    (this.m_sceneApplicationState != r.xY.Waiting &&
                      this.startUnresponsiveTimer(),
                    this.cancelNoAppTimeout()),
            this.log("updateTransitionState: " + r.xY[e]),
            this.log("this.m_sceneAppKey: " + this.m_sceneAppKey),
            this.log("this.m_sceneAppName: " + this.m_sceneAppName),
            this.log(
              "this.m_sceneApplicationState: " + this.m_sceneApplicationState,
            );
        }
        onUnresponsiveTimeout() {
          clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_sceneApplicationState = r.xY.Waiting),
            this.updateLatchedValues();
        }
        onNoAppTimeout() {
          clearTimeout(this.m_noAppTimeout),
            (this.m_noAppTimeout = void 0),
            VRHTML.VRApplications.GetSceneApplicationState() == r.xY.None &&
              this.resetLatchedValued();
        }
        updateLatchedValues() {
          if (VRHTML)
            if (
              VRHTML.VRApplications.GetSceneApplicationState() == r.xY.Starting
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
            (this.m_sceneApplicationState = r.xY.None);
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
        (0, i.gn)([s.Fl], l.prototype, "SceneApplicationState", null),
        (0, i.gn)([s.Fl], l.prototype, "SceneAppName", null),
        (0, i.gn)([s.Fl], l.prototype, "SceneAppKey", null),
        (0, i.gn)([s.Fl], l.prototype, "SceneAppIsHome", null),
        (0, i.gn)([s.LO], l.prototype, "m_sceneApplicationState", void 0),
        (0, i.gn)([s.LO], l.prototype, "m_sceneAppName", void 0),
        (0, i.gn)([s.LO], l.prototype, "m_sceneAppKey", void 0),
        (0, i.gn)([o.ZP], l.prototype, "updateTransitionState", null),
        (0, i.gn)([o.ZP], l.prototype, "onUnresponsiveTimeout", null),
        (0, i.gn)([o.ZP], l.prototype, "onNoAppTimeout", null),
        (0, i.gn)([o.ZP], l.prototype, "updateLatchedValues", null),
        (0, i.gn)([o.ZP], l.prototype, "resetLatchedValued", null),
        (0, i.gn)([o.ZP], l.prototype, "cancelUnresponsiveTimeout", null),
        (0, i.gn)([o.ZP], l.prototype, "startUnresponsiveTimer", null),
        (0, i.gn)([o.ZP], l.prototype, "startNoAppTimer", null),
        (0, i.gn)([o.ZP], l.prototype, "cancelNoAppTimeout", null),
        (0, i.gn)([o.ZP], l.prototype, "log", null);
    },
    138: (e, t, n) => {
      n.d(t, { l: () => a });
      var i = n(655),
        r = n(2188),
        s = n(7056);
      class o {
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
      (0, i.gn)([r.LO], o.prototype, "m_rgMutualCapabilities", void 0),
        (0, i.gn)([s.ZP], o.prototype, "UpdateCapabilities", null);
      const a = new o();
      window.SteamMutualCapabilities = a;
    },
    6166: (e, t, n) => {
      n.d(t, { s: () => d });
      var i = n(655),
        r = n(7056),
        s = n(9669),
        o = n.n(s),
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
            o()
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
        (0, i.gn)([r.ak], l.prototype, "EnsureCommunityDataLoaded", null);
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
        (0, i.gn)([r.ak], c.prototype, "GetUserInformation", null),
        (0, i.gn)([r.ak], c.prototype, "RequestUserInformation", null);
      const d = new c();
      window.steamcommunity = d;
    },
    9897: (e, t, n) => {
      n.d(t, { f: () => o });
      var i = n(655),
        r = n(7056),
        s = n(2188);
      class o {
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
          return o.s_Instance || (o.s_Instance = new o()), o.s_Instance;
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
      (o.s_Instance = null),
        (0, i.gn)([s.LO], o.prototype, "m_nVolume", void 0),
        (0, i.gn)([s.LO], o.prototype, "m_nMirrorVolume", void 0),
        (0, i.gn)([s.LO], o.prototype, "m_nMicrophoneVolume", void 0),
        (0, i.gn)([s.LO], o.prototype, "m_bMuted", void 0),
        (0, i.gn)([s.LO], o.prototype, "m_bMirrorMuted", void 0),
        (0, i.gn)([s.LO], o.prototype, "m_bMicrophoneMuted", void 0),
        (0, i.gn)([s.Fl], o.prototype, "muted", null),
        (0, i.gn)([s.Fl], o.prototype, "mirrorMuted", null),
        (0, i.gn)([s.Fl], o.prototype, "microphoneMuted", null),
        (0, i.gn)([s.Fl], o.prototype, "volume", null),
        (0, i.gn)([s.Fl], o.prototype, "mirrorVolume", null),
        (0, i.gn)([s.Fl], o.prototype, "microphoneVolume", null),
        (0, i.gn)([r.ZP], o.prototype, "toggleMute", null),
        (0, i.gn)([r.ZP], o.prototype, "toggleMirrorMute", null),
        (0, i.gn)([r.ZP], o.prototype, "toggleMicrophoneMute", null),
        (0, i.gn)([r.ZP], o.prototype, "setVolume", null),
        (0, i.gn)([r.ZP], o.prototype, "setMirrorVolume", null),
        (0, i.gn)([r.ZP], o.prototype, "setMicrophoneVolume", null),
        (0, i.gn)([r.ZP], o.prototype, "onSystemVolumeChanged", null);
    },
    4783: (e, t, n) => {
      n.d(t, { Q: () => a });
      var i = n(655),
        r = n(7056),
        s = n(2188);
      class o {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.vecMessageBuffer = s.LO.array());
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
              (0, s.EH)(
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
      (0, i.gn)([s.LO], o.prototype, "connected", void 0),
        (0, i.gn)([s.LO], o.prototype, "vecMessages", void 0),
        (0, i.gn)([r.ak], o.prototype, "OpenWebSocketToHost", null),
        (0, i.gn)([r.ak], o.prototype, "OnWebSocketOpen", null),
        (0, i.gn)([r.ak], o.prototype, "OnWebSocketClose", null),
        (0, i.gn)([r.ak], o.prototype, "WebSocketSend", null),
        (0, i.gn)([r.ak], o.prototype, "OnWebSocketMessage", null);
      const a = new o();
      window.VRConsoleState = a;
    },
    328: (e, t, n) => {
      n.d(t, { fH: () => c, n5: () => a, q0: () => d, u8: () => s });
      var i = n(4820);
      const r = /^(446|865)$/.test(n.j) ? null : 5e3;
      function s(e) {
        try {
          return i.Vg.deserializeBinary(e).toObject();
        } catch (e) {
          return void console.error(
            "Received a VRGamepadUI Message but couldn't deserialize the header!",
            null == e ? void 0 : e.message,
          );
        }
      }
      function o(e) {
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
            case 1:
              n += "Local ";
              break;
            case 2:
              n += "Remote ";
          }
          (n += (0, i.Ex)(
            null !== (t = null == e ? void 0 : e.error) && void 0 !== t ? t : 0,
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
          const r = new i.pD();
          r.set_error(t),
            r.set_origin(2),
            n instanceof Error
              ? r.set_description(n.message)
              : n && "string" == typeof n && r.set_description(n),
            console.error(
              "Sending VRGamepadUI Message Error Response",
              (0, i.Ex)(t),
              ":",
              r.description(),
            );
          const s = {
              message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
              response_to_message_id: e.message_id,
              is_error_response: !0,
            },
            o = this.m_Endpoint.SendVRGamepadUIMessage(s, r);
          o == a.Success ||
            console.error(
              "Failed to send VRGamepadUI Message Error Response:",
              a[o],
              { requestHeader: e, responseHeader: s },
            );
        }
        HandleVRGamepadUIMessageRequest(e, t) {
          console.assert(null == e.response_to_message_id);
          const n = this.m_mapRequestHandlers[e.name];
          if (!n)
            return void this.SendErrorResponse(
              e,
              1,
              `Unknown VRGamepadUI request name: ${e.name}`,
            );
          const i = this.m_mapMethods.get(n.strMethod);
          if (!i)
            return void this.SendErrorResponse(
              e,
              1,
              `Unimplemented VRGamepadUI method: ${n.strMethod}`,
            );
          const r = o(() =>
            n.msgClassRequest_t.deserializeBinary(t).toObject(),
          );
          if ("error" in r) return void this.SendErrorResponse(e, 7, r.error);
          const s = r.result,
            l = o(() => i(s));
          if ("error" in l) return void this.SendErrorResponse(e, 2, l.error);
          let c = l.result;
          null == c && (c = {}),
            (c instanceof Promise ? c : Promise.resolve(c)).then(
              (t) => {
                const i = o(() =>
                  n.msgClassResponse_t.fromObject(null != t ? t : {}),
                );
                if ("error" in i)
                  return void this.SendErrorResponse(e, 6, i.error);
                const r = {
                    message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
                    response_to_message_id: e.message_id,
                  },
                  s = this.m_Endpoint.SendVRGamepadUIMessage(r, i.result);
                if (s == a.Success);
                else
                  switch (s) {
                    case a.HeaderSerializationFailure:
                    case a.PayloadSerializationFailure:
                      this.SendErrorResponse(e, 6, "Response " + a[s]);
                      break;
                    default:
                      console.error(
                        "Failed to send VRGamepadUI Message Response:",
                        a[s],
                        { requestHeader: e, responseHeader: r },
                      );
                  }
              },
              (t) => {
                this.SendErrorResponse(e, 3, t);
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
            const r = o(() => i.pD.deserializeBinary(t).toObject());
            if ("error" in r)
              return void console.error(
                "Received a VRGamepadUI Message error response, but couldn't deserialize it.",
                e,
              );
            const s = new l(r.result);
            return (
              console.warn(
                "Received a VRGamepadUI Message error response",
                s.message,
              ),
              void n.fnReject(s)
            );
          }
          const r = o(() =>
            n.msgExpectedResponseClass_t.deserializeBinary(t).toObject(),
          );
          "error" in r
            ? console.error(
                "Received a VRGamepadUI Message response, but couldn't deserialize it.",
                e,
              )
            : n.fnResolve(r.result);
        }
        SendVRGamepadUIRequest(e, t, n) {
          return new Promise((i, s) => {
            const o = (e) => {
              try {
                s(e);
              } catch (e) {
                console.error(
                  "Error rejecting VRGamepadUI Message request call:",
                  e,
                );
              }
            };
            if (!this.m_Endpoint.IsConnected())
              return void o(new l({ error: 4 }));
            const c = this.m_Endpoint.CreateVRGamepadUIMessageId(),
              d = window.setTimeout(() => this.HandleTimeout(c), r);
            this.m_mapPendingResponses.set(c, {
              msgExpectedResponseClass_t: n,
              nTimeoutHandle: d,
              fnResolve: (e) => {
                try {
                  i(e);
                } catch (e) {
                  console.error(
                    "Error resolving VRGamepadUI Message request call:",
                    e,
                  );
                }
              },
              fnReject: o,
            });
            const p = { name: e, message_id: c },
              u = this.m_Endpoint.SendVRGamepadUIMessage(p, t);
            u == a.Success ||
              o(new l({ error: 0, origin: 1, description: "Request " + a[u] }));
          });
        }
        HandleTimeout(e) {
          const t = this.m_mapPendingResponses.get(e);
          this.DeletePendingRequest(e),
            null == t || t.fnReject(new l({ error: 5 }));
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
        BQ: () => u,
        G3: () => _,
        _e: () => p,
        _g: () => h,
      });
      var i = n(655),
        r = n(7056),
        s = n(9669),
        o = n.n(s),
        a = n(2188),
        l = n(5876),
        c = n(8261),
        d = n(7176);
      const p = 16,
        u = 0.2,
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
                o()
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
                o()
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
                o()
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
                o()
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
                      o()
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
              r = i.join("/");
            window.location.hash.substring(1) != r &&
              ((window.location.hash = r), (this.route = i));
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
          if (t && t.endsWith("*")) {
            let n = t.length - 1;
            return e.substr(0, n) == t.substr(0, n);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let n of t.values)
                if (n && this.SettingNameMatches(e, n.name)) return n;
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
              o()
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
          return o()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return o()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let n = Object.assign(Object.assign({}, t), { app: e });
          o().post("/app/setsettings", n);
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
              o()
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
              o()
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
          return Math.floor((h - u + 0.5 * m) / m);
        }
        SliderposToSupersample(e) {
          return e > h ? h : e < u ? u : e;
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
        (0, i.gn)([r.ak], S.prototype, "OpenWebSocketToHost", null),
        (0, i.gn)([r.ak], S.prototype, "OnWorkshopStateChangedMessage", null),
        (0, i.gn)([r.ak], S.prototype, "OnChangeRouteMessage", null),
        (0, i.gn)([r.ak], S.prototype, "OnAppConfigChangedMessage", null),
        (0, i.gn)([r.ak], S.prototype, "OnRefreshRateChangeMessage", null),
        (0, i.gn)([a.aD.bound], S.prototype, "onHashChanged", null),
        (0, i.gn)([a.Fl], S.prototype, "routePage", null),
        (0, i.gn)([a.Fl], S.prototype, "routePageSection", null),
        (0, i.gn)([a.Fl], S.prototype, "routePageSectionParams", null),
        (0, i.gn)([a.aD], S.prototype, "setRoutePage", null),
        (0, i.gn)([a.aD], S.prototype, "setRoutePageSection", null),
        (0, i.gn)([a.aD], S.prototype, "setRoutePageSectionParams", null),
        (0, i.gn)([a.aD], S.prototype, "setRoute", null),
        (0, i.gn)([r.ak], S.prototype, "SetDashboardFadeSupression", null),
        (0, i.gn)([r.ak], S.prototype, "SetDashboardForceBoundsVisible", null),
        (0, i.gn)([r.ak], S.prototype, "SetRestartRequired", null),
        (0, i.gn)([r.ak], S.prototype, "OnWebSocketOpen", null),
        (0, i.gn)([r.ak], S.prototype, "OnWebSocketClose", null),
        (0, i.gn)([r.ak], S.prototype, "WebSocketSend", null),
        (0, i.gn)([r.ak], S.prototype, "OnWebSocketMessage", null),
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
        r = n(7056),
        s = n(9669),
        o = n.n(s),
        a = n(2188);
      class l {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.IdentifyController = function (e) {
              return e
                ? new Promise(function (t, n) {
                    o()
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
                o()
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
                o()
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
            o()
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
            o()
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
        (0, i.gn)([r.ak], l.prototype, "OpenWebSocketToHost", null),
        (0, i.gn)([r.ak], l.prototype, "OnWebSocketOpen", null),
        (0, i.gn)([r.ak], l.prototype, "OnWebSocketClose", null),
        (0, i.gn)([r.ak], l.prototype, "WebSocketSend", null),
        (0, i.gn)([r.ak], l.prototype, "OnWebSocketMessage", null),
        (0, i.gn)(
          [r.ak],
          l.prototype,
          "TEMP_RegisterPollingWebsocketMessage",
          null,
        );
      const c = new l();
      window.VRSystemState = c;
    },
  },
]);
//# sourceMappingURL=vrwebui_shared.js.map?v=585bdf67d7bc1449e53f
