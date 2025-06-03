/*! For license information please see settings_desktop.js.LICENSE.txt */
(() => {
  var e,
    t = {
      5928: (e, t, a) => {
        "use strict";
        a.d(t, { L: () => f });
        var o,
          n = a(655),
          r = a(7294),
          i = a(7056),
          s = a(3568),
          l = a(5876),
          c = a(9809),
          d = a(5211),
          u = a(2893),
          h = a(7062),
          m = a(2188),
          p = a(8242),
          v = a(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(o || (o = {}));
        class g extends r.Component {
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
          ComponentUpdated(e, t, a) {
            e == this.props.devicePath &&
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: a }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: a }),
              t == this.props.sourcePath + "/x" && this.setState({ x: a }),
              t == this.props.sourcePath + "/y" && this.setState({ y: a }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: a }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: a }));
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
          renderBar(e, t, a) {
            let o = { width: String(100 * a) + "%" };
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
                a = this.m_svgRef.current.children.namedItem("SourceCircle"),
                n = this.props.side == o.Right,
                r = this.m_nameRef.current.getBoundingClientRect(),
                i = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new d.E9(0, r.top + r.height / 2);
              l.x = n ? i.left - 10 : i.right + 10;
              let c = n ? -20 : 20,
                u = l.x + c + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", u);
              let h = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
              t.setAttribute("points", h),
                a.setAttribute("cx", s.x + ""),
                a.setAttribute("cy", s.y + "");
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
        (0, n.gn)([i.ak], g.prototype, "ComponentUpdated", null),
          (0, n.gn)([i.ak], g.prototype, "UpdateSVGPath", null);
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
        class S extends r.Component {
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
          renderSource(e, t, a) {
            let o = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return r.createElement(_, {
                  key: o,
                  side: a,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return r.createElement(y, {
                  key: o,
                  side: a,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "joystick":
              case "trackpad":
                return r.createElement(b, {
                  key: o,
                  side: a,
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
              a = this.ControllerTypeInfo;
            return (
              "/user/hand/left" == this.props.devicePath
                ? a.input_bindingui_left &&
                  ((e = a.input_bindingui_left.uri),
                  (t = a.input_bindingui_left.transform
                    ? a.input_bindingui_left.transform
                    : ""))
                : "/user/hand/right" == this.props.devicePath
                  ? a.input_bindingui_right &&
                    ((e = a.input_bindingui_right.uri),
                    (t = a.input_bindingui_right.transform
                      ? a.input_bindingui_right.transform
                      : ""))
                  : a.input_bindingui_left
                    ? ((e = a.input_bindingui_left.uri),
                      (t = a.input_bindingui_left.transform
                        ? a.input_bindingui_left.transform
                        : ""))
                    : a.input_bindingui_right &&
                      ((e = a.input_bindingui_right.uri),
                      (t = a.input_bindingui_right.transform
                        ? a.input_bindingui_right.transform
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
                    r.createElement(u.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              a = this.ControllerTypeInfo,
              n = 0,
              i = [];
            for (let e in a.input_source) {
              let t = a.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let o = this.EstimateSourceHeight(t);
              (n += o),
                i.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: o,
                });
            }
            let s = 8;
            n > 16 && (s = n / 2);
            let l = 0,
              c = i.sort((e, t) => e.order - t.order);
            for (let a of c) {
              l += a.height;
              let n = l > s ? o.Right : o.Left,
                r = this.renderSource(a.sSourcePath, a.inputSource, n);
              r && (n == o.Left ? e.push(r) : t.push(r));
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
        (0, n.gn)([i.ak], S.prototype, "OnImageLoaded", null),
          (0, n.gn)([i.ak], S.prototype, "OnImageReflow", null);
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
                    (this.m_observeDisposer = (0, m.N7)(
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
              let a = e.device + t;
              this.m_componentRegistrations[a] &&
                this.m_componentRegistrations[a](e.device, t, e.components[t]);
            }
          }
          RegisterSourceVisualizer(e, t, a) {
            this.m_componentRegistrations[e + t] = a;
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
              a = this.GetSortedDevices();
            if (!a)
              return r.createElement(
                p.TB,
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
            for (let o of a)
              "TrackedDeviceClass_HMD" != o.class &&
                (o.root_path == this.state.devicePath && (e = o.serial_number),
                t.push({
                  value: o.root_path,
                  sLabel: (0, s.Xx)("#" + o.root_path),
                }));
            return r.createElement(
              p.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: r.createElement(p.U5, {
                  leftControls: [
                    r.createElement(v.hu, {
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
                r.createElement(S, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                }),
            );
          }
        };
        (0, n.gn)([i.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, n.gn)([i.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, n.gn)([h.Pi], f));
      },
      9671: (e, t, a) => {
        "use strict";
        a.d(t, { V: () => c });
        var o = a(655),
          n = a(7294),
          r = a(7056),
          i = a(3568),
          s = a(5876);
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
              for (let a of e.pressed)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    a,
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
              for (let a of e.touched)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    a,
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
              for (let a of e.supported_buttons)
                t.push(
                  n.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    a,
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
            for (let a of e.axis)
              t.push(
                n.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  a.x.toFixed(2),
                  " Y: ",
                  a.y.toFixed(2),
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
                  (0, i.Xx)("#LegacyDebugger_NoApp"),
                );
          }
        }
        (0, o.gn)([r.ak], l.prototype, "OnLegacyInputFrame", null);
        class c extends n.Component {
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
      792: (e, t, a) => {
        "use strict";
        a.d(t, { C: () => m, w: () => o });
        var o,
          n = a(655),
          r = a(7056),
          i = a(2188),
          s = a(5876),
          l = a(9942),
          c = a(1628),
          d = a(9626),
          u = a(8547);
        !(function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.RoomSetupPlayspaceCircle = 4)] = "RoomSetupPlayspaceCircle"),
            (e[(e.RoomSetupPlayspaceDrawn = 5)] = "RoomSetupPlayspaceDrawn");
        })(o || (o = {}));
        class h {
          constructor() {
            (this.m_bBoundsVisible = void 0),
              (this.m_bHmdOutOfBoundsStrict = void 0),
              (this.m_bOkOutsideOfPlayspace = !1),
              (this.m_eRoomSetupStep = o.Off);
          }
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.Load(),
                (0, i.EH)(() => this.Save()),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForChaperoneStatusEvents(
                    this.onChaperoneStatusEvents,
                  ),
                (0, i.U5)(
                  () => this.m_bOkOutsideOfPlayspace,
                  (e) => {
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperone.SetOkOutsidePlayspace(e);
                  },
                ),
                (0, i.U5)(
                  () => l.H.Instance.SceneAppKey,
                  (e) => {
                    this.m_bOkOutsideOfPlayspace = !1;
                  },
                );
            });
          }
          get roomSetupStep() {
            return this.m_eRoomSetupStep;
          }
          setRoomSetupStep(e, t) {
            let a = !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  s.Uk.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
                ));
            if (
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    s.Uk.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
                  )) &&
              d.BV.activeLinkServer
            ) {
              const t = (function (e) {
                switch (e) {
                  case o.RecenterCountdown:
                    return s.o4.RecenterCountdown;
                  case o.RoomSetupFloor:
                    return s.o4.RoomSetupFloor;
                  case o.FloorAdjustExisting:
                    return s.o4.FloorAdjustExisting;
                  default:
                    return s.o4.Invalid;
                }
              })(e);
              t != s.o4.Invalid
                ? (console.log(
                    `Remoting RoomSetupStep change request to client ${e}`,
                  ),
                  VRHTML.VRLink.SendRoomSetupRequest(t))
                : console.log(
                    `Invalid remote RoomSetupStep change request ${e}`,
                  );
            } else {
              if (
                !a &&
                (function (e) {
                  switch (e) {
                    case o.Off:
                    case o.RecenterCountdown:
                      return !1;
                    default:
                      return !0;
                  }
                })(e)
              )
                return void console.warn(
                  "HMD doesnt support setRoomSetupStep " + JSON.stringify(e),
                );
              (e != o.FloorAdjustExisting && e != o.RoomSetupFloor) ||
                this.m_eRoomSetupStep == o.RoomSetupPlayspaceCircle ||
                null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                  e == o.FloorAdjustExisting
                    ? s.yA.Manual
                    : s.yA.PendingResetIfNeeded,
                ),
                e == o.RoomSetupPlayspaceCircle &&
                  this.m_eRoomSetupStep == o.RoomSetupFloor &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.ResetPlayspaceRadius()),
                e == o.RoomSetupPlayspaceCircle
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.SetPlayspaceMode(u.yv.Circle)
                  : e == o.RoomSetupPlayspaceDrawn
                    ? null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperoneSetup.SetPlayspaceMode(u.yv.Drawn)
                    : null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperoneSetup.SetPlayspaceMode(u.yv.None),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperoneSetup.NotifyRoomSetupStep(e, !!t),
                (this.m_eRoomSetupStep = e);
            }
          }
          Load() {
            var e, t, a, o, r;
            return (0, n.mG)(this, void 0, void 0, function* () {
              (this.m_bShowFloor =
                null !==
                  (e = c.G3.settings.get("/settings/steamvr/showFloor")) &&
                void 0 !== e &&
                e),
                (this.m_bShowFloorFar =
                  null !==
                    (t = c.G3.settings.get("/settings/steamvr/showFloorFar")) &&
                  void 0 !== t &&
                  t),
                (this.m_fBackgroundDomeRadius =
                  null !==
                    (a = c.G3.settings.get(
                      "/settings/steamvr/backgroundDomeRadius",
                    )) && void 0 !== a
                    ? a
                    : 20),
                (this.m_fBackgroundOffsetX =
                  null !==
                    (o = c.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetX",
                    )) && void 0 !== o
                    ? o
                    : 0),
                (this.m_fBackgroundOffsetZ =
                  null !==
                    (r = c.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetZ",
                    )) && void 0 !== r
                    ? r
                    : 0);
            });
          }
          Save() {
            return (0, n.mG)(this, void 0, void 0, function* () {});
          }
          onChaperoneStatusEvents(e) {
            const t = !!(1 & e),
              a = !!(2 & e);
            t != this.m_bBoundsVisible && (this.m_bBoundsVisible = t),
              a != this.m_bHmdOutOfBoundsStrict &&
                (this.m_bHmdOutOfBoundsStrict = a);
          }
        }
        (0, n.gn)([i.LO], h.prototype, "m_bShowFloor", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_bShowFloorFar", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_fBackgroundOffsetX", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_bBoundsVisible", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_bHmdOutOfBoundsStrict", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_bOkOutsideOfPlayspace", void 0),
          (0, n.gn)([i.LO], h.prototype, "m_eRoomSetupStep", void 0),
          (0, n.gn)([i.aD], h.prototype, "setRoomSetupStep", null),
          (0, n.gn)([r.ak], h.prototype, "Load", null),
          (0, n.gn)([r.ak], h.prototype, "Save", null),
          (0, n.gn)([r.ak], h.prototype, "onChaperoneStatusEvents", null);
        const m = new h();
        window.ConstructStore = m;
      },
      9626: (e, t, a) => {
        "use strict";
        a.d(t, {
          A3: () => v,
          BV: () => S,
          Dz: () => g,
          J_: () => m,
          fq: () => p,
        });
        var o = a(655),
          n = a(5876),
          r = a(7056),
          i = a(2188),
          s = a(4790),
          l = a(1628),
          c = a(7176),
          d = a(8261),
          u = a(2758),
          h = a(3107);
        const m = ["system.dashboard.quicklaunch", void 0].filter(Boolean);
        var p, v, g, _;
        function y(e) {
          return (
            !(!(null == e ? void 0 : e.startsWith(c.wX)) || e == c.T2) ||
            e == c.AC
          );
        }
        !(function (e) {
          (e[(e.Large = 0)] = "Large"), (e[(e.Medium = 1)] = "Medium");
        })(p || (p = {})),
          (function (e) {
            (e[(e.PlayArea = 0)] = "PlayArea"),
              (e[(e.Dashboard = 1)] = "Dashboard");
          })(v || (v = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.View = 1)] = "View"),
              (e[(e.Theater = 2)] = "Theater");
          })(g || (g = {})),
          (function (e) {
            (e[(e.Persistent = 0)] = "Persistent"),
              (e[(e.OnDemand = 1)] = "OnDemand");
          })(_ || (_ = {}));
        class b {
          constructor() {
            (this.m_bPreviousDashboardVisible = void 0),
              (this.m_bVS = !1),
              (this.m_eVSMode = g.None),
              (this.m_sVSOverlayKey = void 0),
              (this.m_nNumRemoteUsers = 0),
              (this.m_nNumRemoteVS = 0),
              (this.m_eTheaterStereo = n.Ko.Mono),
              (this.m_eIncognitoMode = n.Qu.Unavailable),
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
          get activeLinkServer() {
            return this.m_bIsLinkServer && this.m_bLinkStreamActive;
          }
          Init() {
            var e;
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, i.EH)(() => this.SaveSessionDevData()),
                (0, i.EH)(this.updateBodyClasses),
                (this.m_bDashboardVisible =
                  VRHTML.VRCompositor.IsDashboardVisibleInternal()),
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
                  ),
                (0, i.U5)(
                  () => this.isTheaterMode,
                  (e) => {
                    VRHTML.VRCompositor.SetAnimatedValue(
                      n.uM.TheaterFast,
                      e,
                      0.25,
                    ),
                      VRHTML.VRCompositor.SetAnimatedValue(
                        n.uM.TheaterSlow,
                        e,
                        e ? 2 : 1,
                      );
                  },
                ),
                VRHTML.VRCompositor.SetAnimatedValue(
                  n.uM.TheaterFast,
                  this.isTheaterMode,
                  0,
                ),
                VRHTML.VRCompositor.SetAnimatedValue(
                  n.uM.TheaterSlow,
                  this.isTheaterMode,
                  0,
                ),
                (0, i.U5)(
                  () => this.m_bDashboardVisible,
                  (e) => {
                    this.m_bPreviousDashboardVisible != e &&
                      h.G.Instance.playSound(
                        e ? h.y.DashboardOpen : h.y.DashboardClose,
                      ),
                      (this.m_bPreviousDashboardVisible = e);
                  },
                );
            });
          }
          LoadSessionDevData() {
            var e, t, a, n, r;
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(b.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              (this.m_bShowLegacyBar =
                null !== (t = o.m_bShowLegacyBar) && void 0 !== t && t),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (a = o.m_fVRGamepadUI_MetersPerPixel) && void 0 !== a
                    ? a
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (n = o.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== n
                    ? n
                    : 1.17);
              for (const e of null !== (r = o.m_rgPooledPopups) && void 0 !== r
                ? r
                : [])
                this.m_mapActivePooledPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, o.mG)(this, void 0, void 0, function* () {
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
                b.k_strSessionStorageKey,
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
              for (const [e, a] of this.m_mapOverlayState.entries())
                if (a.dockLocation == t && y(e)) return e;
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
              this.m_eTheaterStereo == n.Ko.Mono ? n.Ko.Parallel : n.Ko.Mono;
            this.m_eTheaterStereo = e;
          }
          HideTheaterOverlay(e = s.RA.Dashboard, t) {
            for (const [a, o] of this.m_mapOverlayState.entries())
              o.dockLocation == s.RA.Theater &&
                ((o.dockLocation = e),
                t &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(a)));
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
            return u.U.BOverlayExists(c.T2) && u.U.BOverlayExists(c.BZ);
          }
          get isVRGamepadUI() {
            return (
              !l.G3.settings.get(c.YL) ||
              u.U.BOverlayExists(c.T2) ||
              u.U.BOverlayExists(c.BZ)
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
              a = !!(2 & e),
              o = !!(4 & e),
              n = 8 & e ? _.OnDemand : _.Persistent;
            t != this.m_bLinkStreamActive && (this.m_bLinkStreamActive = t),
              a != this.m_bIsLinkClient && (this.m_bIsLinkClient = a),
              o != this.m_bIsLinkServer && (this.m_bIsLinkServer = o),
              n != this.m_streamingMode && (this.m_streamingMode = n);
          }
        }
        (b.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
          (0, o.gn)([i.LO], b.prototype, "m_bDashboardVisible", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_bShowLegacyBar", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_bVS", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_eVSMode", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_sVSOverlayKey", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_nNumRemoteUsers", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_nNumRemoteVS", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_eTheaterStereo", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_eIncognitoMode", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_mapOverlayState", void 0),
          (0, o.gn)(
            [i.LO],
            b.prototype,
            "m_setOverlaysViewedThisSession",
            void 0,
          ),
          (0, o.gn)(
            [i.LO],
            b.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, o.gn)(
            [i.LO],
            b.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, o.gn)(
            [i.LO],
            b.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, o.gn)([i.LO], b.prototype, "m_bRoomViewActive", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_bRoomViewStreaming", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_bGamepadFocusActive", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_bLinkStreamActive", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_bIsLinkClient", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_bIsLinkServer", void 0),
          (0, o.gn)([i.LO], b.prototype, "m_streamingMode", void 0),
          (0, o.gn)([r.ak], b.prototype, "LoadSessionDevData", null),
          (0, o.gn)([r.ak], b.prototype, "SaveSessionDevData", null),
          (0, o.gn)([i.Fl], b.prototype, "isTheaterMode", null),
          (0, o.gn)([i.Fl], b.prototype, "priorityGamepadFocusOverlay", null),
          (0, o.gn)([i.Fl], b.prototype, "eTheaterCurvature", null),
          (0, o.gn)([i.aD], b.prototype, "setIncognitoMode", null),
          (0, o.gn)([i.Fl], b.prototype, "WorldLightingGain", null),
          (0, o.gn)([i.Fl], b.prototype, "isVRGamepadUIReady", null),
          (0, o.gn)([i.Fl], b.prototype, "isVRGamepadUI", null),
          (0, o.gn)([r.ak], b.prototype, "updateBodyClasses", null),
          (0, o.gn)([r.ak], b.prototype, "onRoomViewChanged", null),
          (0, o.gn)([r.ak], b.prototype, "onRoomViewStreamChanged", null),
          (0, o.gn)([r.ak], b.prototype, "onGamepadFocusChanged", null),
          (0, o.gn)([r.ak], b.prototype, "onLinkStreamStatusEvents", null);
        const S = new b();
        window.DashboardStore = S;
      },
      2758: (e, t, a) => {
        "use strict";
        a.d(t, { U: () => s });
        var o = a(655),
          n = a(2188),
          r = a(4687);
        class i {
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
              a = [],
              o = [];
            for (const o of e)
              (null == o ? void 0 : o.sOverlayKey) &&
                (this.m_mapAllOverlays.has(o.sOverlayKey) || a.push(o),
                this.m_mapAllOverlays.set(o.sOverlayKey, o),
                t.delete(o.sOverlayKey));
            for (const e of t)
              o.push(this.m_mapAllOverlays.get(e)),
                this.m_mapAllOverlays.delete(e);
            a.forEach(this.m_rgOverlayCreatedCallbacks.Dispatch),
              o.forEach(this.m_rgOverlayDestroyedCallbacks.Dispatch);
          }
        }
        (0, o.gn)([n.LO], i.prototype, "m_mapAllOverlays", void 0),
          (0, o.gn)([n.aD.bound], i.prototype, "OnAllOverlayInfo", null);
        const s = new i();
        window.OverlayStore = s;
      },
      9764: (e, t, a) => {
        "use strict";
        a.d(t, { J: () => c });
        var o = a(655),
          n = a(7056),
          r = a(2188),
          i = a(2477),
          s = a(2758);
        class l {
          constructor() {
            (this.m_mapActivePooledPopupRequests = new Map()),
              (this.m_mapRemoteVSIds = new Map());
          }
          GetActivePooledPopups() {
            return Array.from(this.m_mapActivePooledPopupRequests.values());
          }
          Init() {
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, r.EH)(() => this.SaveSessionDevData()),
                i.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) => {
                  this.m_mapActivePooledPopupRequests.set(
                    e.dashboard_popup_request_id,
                    e,
                  );
                }),
                i.Q.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
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
            return (0, o.mG)(this, void 0, void 0, function* () {
              const a = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(l.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              for (const e of null !== (t = a.m_rgPooledPopups) && void 0 !== t
                ? t
                : [])
                this.m_mapActivePooledPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, o.mG)(this, void 0, void 0, function* () {
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
          (0, o.gn)(
            [r.LO],
            l.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, o.gn)([r.LO], l.prototype, "m_mapRemoteVSIds", void 0),
          (0, o.gn)([n.ak], l.prototype, "LoadSessionDevData", null),
          (0, o.gn)([n.ak], l.prototype, "SaveSessionDevData", null);
        const c = new l();
        window.PooledPopupStore = c;
      },
      1983: (e, t, a) => {
        "use strict";
        var o = a(7294),
          n = a(3935),
          r = a(5876),
          i = a(3568),
          s = a(1628),
          l = a(9809),
          c = a(1380),
          d = a(5211),
          u = a(4285),
          h = a(1509),
          m = a(9626),
          p = a(2758);
        Promise.all([
          (0, i.CK)(
            ["vrmonitor", "bindingui"],
            null === r.Co || void 0 === r.Co ? void 0 : r.Co.GetSteamLanguage(),
          ),
          s.G3.Init(!0),
          l.I.Init(!0),
          d.c6.Init(),
          c.S.Init(),
          u.E.Init(),
          p.U.Init(),
          m.BV.Init(),
        ])
          .then(() => {
            (document.title = (0, i.Xx)("#Settings_Header_SteamVR")),
              n.render(
                o.createElement(h._, { visible: !0 }),
                document.getElementById("settingsRoot"),
              );
          })
          .catch((e) => console.error("Failed to initialize vr settings:", e));
      },
      7726: (e, t, a) => {
        "use strict";
        a.d(t, { A: () => n, X: () => d });
        var o,
          n,
          r = a(655),
          i = a(7294),
          s = a(7056),
          l = a(5876),
          c = (a(6698), a(9626), a(7062));
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(n || (n = {}));
        let d = (o = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.batteryLevelStable = null),
              (this.state = {
                batteryIconPath: null,
                roleIconPath: null,
                eRole: l.Kg.TrackedControllerRole_Invalid,
              });
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
              a = l.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
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
                      t + o.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      t - o.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            let i = o.GetBatteryIcon(
                t,
                r,
                this.batteryLevelStable,
                n.HorizontalPips,
              ),
              s = this.GetRoleIcon(a);
            (i == this.state.batteryIconPath &&
              s == this.state.roleIconPath &&
              a == this.state.eRole) ||
              this.setState({ batteryIconPath: i, roleIconPath: s, eRole: a });
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
          static GetBatteryIcon(e, t, a, o) {
            if (!e) return null;
            const r =
              o == n.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? a < 0.15
                ? r + "_charging_red.png"
                : r + "_charging.png"
              : 0 == a
                ? null
                : a < 0.15
                  ? r + "_low.png"
                  : a < 0.3
                    ? r + "_battery_1.png"
                    : a < 0.6
                      ? r + "_battery_2.png"
                      : a < 0.9
                        ? r + "_battery_3.png"
                        : r + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, a) {
            e == l.XX.Activated &&
              a == this.props.trackedDeviceIndex &&
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
              a = 0;
            e == l.Kg.TrackedControllerRole_LeftHand
              ? ((t = "/user/hand/left"), (a = -0.05))
              : e == l.Kg.TrackedControllerRole_RightHand
                ? ((t = "/user/hand/right"), (a = 0.05))
                : (t = void 0);
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
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
                      false,
                      false,
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
              ),
            );
          }
        });
        (d.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([s.ak], d.prototype, "OnBatteryStateChanged", null),
          (0, r.gn)([s.ak], d.prototype, "OnDeviceRoleChanged", null),
          (0, r.gn)([s.ak], d.prototype, "OnDeviceEvent", null),
          (d = o = (0, r.gn)([c.Pi], d));
      },
      8261: (e, t, a) => {
        "use strict";
        a.d(t, { g: () => le, _: () => Q });
        var o,
          n = a(655),
          r = a(5876),
          i = a(7056),
          s = a(2188),
          l = a(7294),
          c = a(1509),
          d = a(5177),
          u = a(7176),
          h = a(3568),
          m = a(8495),
          p = a(7008),
          v = a(9942),
          g = a(1628),
          _ = a(7062),
          y = a(7726),
          b = a(4790),
          S = a(6459),
          f = a(9347),
          R = a(7830),
          k = a(7095),
          V = a(8980);
        let C = (o = class extends l.Component {
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
                  className: (0, V.LJ)("PortraitAppImageContainer", [
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
          (0, n.gn)([i.ak], C.prototype, "loadNextImage", null),
          (0, n.gn)([i.ak], C.prototype, "onLoad", null),
          (0, n.gn)([i.ak], C.prototype, "onError", null),
          (C = o = (0, n.gn)([_.Pi], C));
        var w = a(8242);
        const M = (e) => {
          if (null == e) return "";
          let t = e.image_path_capsule || e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        };
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
            k.f.OpenDeepLink(k.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = v.H.Instance.SceneAppKey;
            R.Ux.OpenDeepLink(R.Yw.Name, e);
          }
          render() {
            var e;
            const t = v.H.Instance.SceneAppKey,
              a = v.H.Instance.SceneAppName,
              o = v.H.Instance.SceneApplicationState,
              n = v.H.Instance.SceneAppIsHome,
              i = g.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = g.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              c = g.G3.apps && g.G3.apps.find((e) => e.key == t);
            let m = !1;
            switch (o) {
              case r.xY.Quitting:
              case r.xY.Starting:
              case r.xY.Waiting:
                m = !0;
            }
            return l.createElement(
              S.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: u.PF,
                scrollable: !1,
              },
              l.createElement(
                "div",
                { className: "ArtworkColumn" },
                l.createElement(C, { appkey: t, title: a, imageUrl: M(c) }),
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, a),
                l.createElement(
                  d.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  n
                    ? (0, h.Xx)("#Return_To_Home")
                    : (0, h.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    w.ls,
                    {
                      icon: w.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, h.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    w.ls,
                    { icon: w.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, h.Xx)("#App_Video_Settings"),
                  ),
                i &&
                  l.createElement(
                    d.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    n ? (0, h.Xx)("#Exit_Home") : (0, h.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, n.gn)([i.ak], T.prototype, "onExitApp", null),
          (0, n.gn)([i.ak], T.prototype, "onReturnToGame", null),
          (0, n.gn)(
            [i.ak],
            T.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, n.gn)([i.ak], T.prototype, "onOpenAppVideoSettings", null);
        var L,
          E = a(9669),
          I = a.n(E),
          D = a(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(L || (L = {}));
        const O = (e) =>
          l.createElement(
            "div",
            {
              className: (0, V.LJ)("ButtonContainer", L[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              d.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == L.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›"),
            ),
          );
        class x extends l.Component {
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
            const a = this.m_refScrollPanel.current;
            if (!a) return;
            if (a.isThrown)
              return void a.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const o = a.children;
            if (!o || 0 == o.length) return;
            const n =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              r = o[0],
              i = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : a.scrollLeft,
              s = r.getBoundingClientRect().left + a.scrollLeft,
              l = r.clientWidth,
              c = a.clientWidth,
              d = Math.floor(c / l) - 1,
              u = Math.round((i - s + n + 1) / l) + d * e - 0.4999,
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
                className: (0, V.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames,
                ),
              },
              l.createElement(
                D.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: D.I.Horizontal,
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
                      side: L.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(O, {
                      side: L.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, n.gn)([i.ZP], x.prototype, "onAnimationFrame", null),
          (0, n.gn)([i.ZP], x.prototype, "onScroll", null),
          (0, n.gn)([i.ZP], x.prototype, "onLeftButtonClick", null),
          (0, n.gn)([i.ZP], x.prototype, "onRightButtonClick", null);
        let H = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new V.cB()),
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
                  className: (0, V.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      g.G3.probablyOwnedAppkeys.has(this.props.appkey),
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
                  l.createElement(C, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, n.gn)([i.ZP], H.prototype, "buttonMouseEnter", null),
          (0, n.gn)([i.ZP], H.prototype, "buttonMouseLeave", null),
          (0, n.gn)([i.ZP], H.prototype, "onParentScrollStop", null),
          (H = (0, n.gn)([_.Pi], H));
        const P = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          B = (e) => {
            var t;
            const a = !!e.loading,
              o = null !== (t = e.apps) && void 0 !== t ? t : [];
            let n = "AppCarousel";
            return (
              e.className && (n += " " + e.className),
              l.createElement(
                x,
                { additionalClassNames: n, paginationAlignmentOffset: -20 },
                a &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(P, null),
                    l.createElement(P, null),
                    l.createElement(P, null),
                    l.createElement(P, null),
                  ),
                !a &&
                  o.map((e) =>
                    l.createElement(H, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var A;
        class G extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            I()
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
                a = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; a.has(t[0].appid); ) t.shift();
                let o = t.shift();
                a.add(o.appid),
                  e.push(
                    l.createElement(
                      d.z,
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
                  (0, h.Xx)("#WelcomeToSteamVR"),
                ),
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, h.Xx)("#LaunchSteamToFindGames"),
                ),
              ),
            );
          }
        }
        let N = (A = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, a) {
            var o, n;
            m.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + a,
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
            if (null != g.G3.apps)
              for (let t of g.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  A.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let a = t.library_priority - e.library_priority;
              return 0 == a && (a = t.last_launch - e.last_launch), a;
            });
            const t = (e) => {
              let t = e.image_path_capsule || e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, a) => {
              let o = a;
              const n = a < A.TOP_ROW_LENGTH;
              return (
                n || (o -= A.TOP_ROW_LENGTH),
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
          render() {
            let e,
              t = this.makeAppButtonList();
            const a =
              0 == t.length ||
              g.G3.settings.get("/settings/dashboard/forceWelcomeScreen");
            if (a) e = l.createElement(G, null);
            else {
              let a = t.slice(0, A.TOP_ROW_LENGTH),
                o = t.slice(A.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                l.createElement(B, { className: "TopRow", apps: a }),
                l.createElement(B, { className: "BottomRow", apps: o }),
              );
            }
            return l.createElement(
              S.lL,
              {
                visible: this.props.visible,
                scrollable: !a,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: u.po,
              },
              e,
            );
          }
        });
        (N.TOP_ROW_LENGTH = 4),
          (N.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            u.W4,
            u.jW,
          ])),
          (N = A = (0, n.gn)([_.Pi], N));
        var F = a(421),
          U = a(6063),
          z = (a(9462), a(9626)),
          W = a(792),
          K = a(6346),
          q = a(6821),
          X = a(2477);
        function j(e) {
          const { debugHostLocation: t, onGrabStart: a, onGrabEnd: o } = e,
            n = z.BV.isVRGamepadUI,
            i = (0, V.aB)();
          if (!i) return null;
          const s =
              null != (null == i ? void 0 : i.overlayKey) &&
              "" != (null == i ? void 0 : i.overlayKey),
            c = !!(i.keyboardFlags & r.vS.Minimal),
            d = n ? 2 : 1.5,
            h = n ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            m = n
              ? c
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : c
                ? { y: -0.73, z: 0.05 }
                : { y: -0.87, z: 0.05 };
          return l.createElement(
            r.wx,
            { translation: h },
            l.createElement(
              r.wx,
              { scale: { y: d, x: d } },
              l.createElement(r.sl, { mountedId: (0, r.iN)(u.GN, u.gC) }),
              l.createElement(r.sl, { mountedId: (0, r.iN)(u.GN, u.jw) }),
            ),
            !1,
            s &&
              l.createElement(
                r.wx,
                { translation: m },
                l.createElement(U.J, {
                  tint: z.BV.GrabHandleTint,
                  onStartMove: a,
                  onEndMove: o,
                }),
              ),
          );
        }
        function Z(e) {
          const t = (0, V.aB)();
          if (!t) return null;
          const a = le.k_nControlBarPitch;
          return (
            t.visible &&
            !t.dockedInDashboard &&
            l.createElement(
              r.eK,
              { bContinuousRelatch: !1 },
              l.createElement(
                r.wx,
                {
                  translation: le.getDashboardTranslation(),
                  scale: le.getDashboardScale(),
                },
                l.createElement(
                  r.wx,
                  { translation: le.getControlBarTranslation() },
                  l.createElement(
                    r.wx,
                    { translation: le.k_nKeyboardGrabTransformOffset },
                    l.createElement(
                      F.Z,
                      { min_distance: 0.2, should_head_align: !1 },
                      l.createElement(
                        r.wx,
                        {
                          translation: {
                            x: -1 * le.k_nKeyboardGrabTransformOffset.x,
                            y: -1 * le.k_nKeyboardGrabTransformOffset.y,
                            z: -1 * le.k_nKeyboardGrabTransformOffset.z,
                          },
                        },
                        l.createElement(
                          r.wx,
                          { rotation: { x: a }, curvature_pitch: a },
                          l.createElement(j, { debugHostLocation: "Undocked" }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        }
        var J,
          Q,
          Y,
          $ = a(138),
          ee = a(2758),
          te = a(6698);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
        })(Q || (Q = {}));
        class ae extends l.Component {
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
          return e == u.AC || e.startsWith(u.wX);
        }
        function ne(e) {
          var t;
          const a =
            null === (t = ee.U.GetOverlayInfo(e)) || void 0 === t
              ? void 0
              : t.sHandle;
          return a ? VRHTML.VROverlay.GetVisibleTimeInSeconds(a) : 0;
        }
        function re(e, t, a) {
          var o;
          const n = Date.now(),
            r = n - t.nDockStartMs;
          if (r >= 1e3) {
            const n = /^valve\.steam\.desktopgame\.(\d+)$/,
              i = e.match(n),
              s = v.H.Instance.SceneAppKey,
              l =
                t.dockLocation == b.RA.Theater &&
                null !==
                  (o = g.G3.settings.get(
                    "/settings/dashboard/autoShowGameTheater",
                  )) &&
                void 0 !== o &&
                o;
            void 0 === a && (a = ne(e));
            const c = Math.floor(1e3 * (a - t.fLastTotalVisibleTimeInSeconds)),
              d = {
                OverlayKeyID: e,
                Location: b.RA[t.dockLocation],
                DurationMs: r,
                VisibleMs: c > 0 ? c : void 0,
                OverlayAppID:
                  2 == (null == i ? void 0 : i.length)
                    ? parseInt(i[1], 10)
                    : void 0,
                SceneAppKeyID: "" != s ? s : void 0,
                autoShowGameTheater: l,
              };
            (t.fLastTotalVisibleTimeInSeconds = a),
              m.e.instance.AddRow("SteamVROverlayDockStats", d);
          }
          t.nDockStartMs = n;
        }
        function ie(e, t, a) {
          t.dockLocation != a && (re(e, t), (t.dockLocation = a));
        }
        function se(e) {
          e &&
            e != u.T2 &&
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
        })(Y || (Y = {}));
        let le = (J = class extends l.Component {
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
                sActiveOverlayID: null,
                bMuted: !1,
                bGrabbed: !1,
                sLastShownAppKey: "",
                eShowPopoverMenu: Y.None,
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
              (window.setDashboardScale = (e) => (J.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (J.s_dashboardUserDistance = e)),
              g.G3.Init(!1),
              r.hz.getInstance(),
              this.m_mailbox.Init(J.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  J.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sSetDashboardForceBoundsVisible,
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
                  this.m_mailbox.RegisterHandler("toggle_theater_stereo", () =>
                    z.BV.ToggleTheaterStereo(),
                  ),
                  this.m_mailbox.RegisterHandler("room_setup", (e) =>
                    this.onVRLinkRoomSetup(e),
                  );
              }),
              X.Q.SteamVR.SetImplementation(
                "DashboardTabClicked",
                ({ tab_id: e }) => {
                  const t = z.BV.GetSummonKeyForTabId(e);
                  if (
                    !this.switchToOverlayInternal(
                      t,
                      "User clicked VRGamepadUI tab",
                    )
                  )
                    throw new Error("Failed to switch to overlay: " + t);
                },
              ),
              X.Q.SteamVR.SetImplementation("ShowGame", this.onShowOverlay),
              X.Q.SteamVR.SetImplementation("ShowOverlay", this.onShowOverlay),
              X.Q.SteamVR.SetImplementation(
                "DashboardActionInvoked",
                ({ action_id: e, toggle_value: t }) => {
                  switch (e) {
                    case 0:
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitOpenVR();
                      break;
                    case 1:
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.ShutdownSystem();
                      break;
                    case 2:
                      this.onToggleRoomView(t);
                      break;
                    case 8:
                      W.C.setRoomSetupStep(W.w.RoomSetupFloor);
                      break;
                    case 7:
                      W.C.setRoomSetupStep(W.w.FloorAdjustExisting);
                      break;
                    case 6:
                      W.C.setRoomSetupStep(W.w.RecenterCountdown);
                      break;
                    case 9:
                      z.BV.activeLinkServer
                        ? VRHTML.VRLink.SendRoomSetupRequest(
                            r.o4.ClearRoomSetup,
                          )
                        : VRHTML.VRChaperoneSetup.ClearRoomSetup();
                      break;
                    case 3:
                    case 4:
                      break;
                    case 12:
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
              a =
                t == r.a0.AppLaunch_Unknown ||
                t == r.a0.AppLaunch_Steam ||
                t == r.a0.Unknown,
              o = g.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              n = g.G3.settings.get("/settings/steamvr/enableHomeApp"),
              i = g.G3.settings.get(u.y3);
            ((a || (!o && n)) && !i) ||
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
                  a = t != r.xY.None;
                if (a && this.m_eSceneApplicationState == r.xY.None)
                  z.BV.HideTheaterOverlay();
                else if (
                  !a &&
                  this.m_eSceneApplicationState != r.xY.None &&
                  !z.BV.isTheaterMode &&
                  null !==
                    (e = g.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of z.BV.m_mapOverlayState)
                    if (e.startsWith(u.wX)) {
                      this.setOverlayDockLocation(e, b.RA.Theater), se(e);
                      break;
                    }
                (this.m_eSceneApplicationState = t),
                  this.isOverlayActive(u.PF) &&
                    !a &&
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
                const e = z.BV.priorityGamepadFocusOverlay,
                  t = v.H.Instance.SceneApplicationState !== r.xY.None;
                z.BV.m_bDashboardVisible ||
                !e ||
                t ||
                W.C.roomSetupStep != W.w.Off
                  ? this.SetGamepadFocusEnable(!1, null)
                  : this.SetGamepadFocusEnable(!0, e);
              }));
            const l = new K.JN();
            l.set_can_sleep(!1),
              l.set_can_shutdown(
                g.G3.settings.get("/settings/dashboard/allowSystemShutdown"),
              ),
              l.set_can_restart_system(
                g.G3.settings.get("/settings/dashboard/allowSystemRestart"),
              ),
              l.set_can_exitvr(
                null ===
                  (e = g.G3.settings.get("/settings/dashboard/allowExitVR")) ||
                  void 0 === e ||
                  e,
              ),
              (0, q.W)(l);
          }
          componentDidUpdate(e, t) {
            this.updateSiblingReferences(),
              this.updateVRGamepadUIPathProperties();
          }
          updateVRGamepadUIPathProperties() {
            var e, t, a, o;
            const n = Array.from(
                null !==
                  (t =
                    null === (e = this.state.mapWindows) || void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== t
                  ? t
                  : [],
              ).sort(me),
              r = this.getActiveOverlaySummonKey(),
              i = $.l.BHasMutualCapability(2),
              s = $.l.BHasMutualCapability(6),
              l = new K.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                a = z.BV.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == u.gB) continue;
              const o = new K.D3();
              o.set_tab_id(a);
              const n = this.shouldShowOverlayTab(t, !0),
                s = i && z.J_.includes(t.summon_overlay_key),
                c = z.BV.m_setOverlaysViewedThisSession.has(
                  t.summon_overlay_key,
                );
              o.set_visible_in_dashboard_menu(n && s),
                o.set_visible_in_dashboard_bar(n && (!s || c)),
                t.summon_overlay_key == u.T2
                  ? o.set_display_name((0, h.Xx)("#Steam"))
                  : o.set_display_name(t.tab_name);
              const d = new K.I_();
              switch (t.summon_overlay_key) {
                case u.T2:
                  d.set_enum(1);
                  break;
                case u.Xl:
                  d.set_enum(2);
                  break;
                case u.A4:
                  d.set_enum(3);
                  break;
                case u.PF:
                  if (
                    (d.set_enum(4), v.H.Instance.SceneAppKey.startsWith(u.I8))
                  ) {
                    const e = Number.parseInt(
                      v.H.Instance.SceneAppKey.substring(u.I8.length),
                    );
                    Number.isInteger(e) && d.set_appid(e);
                  }
                  break;
                default:
                  d.set_overlay(t.summon_overlay_key), d.set_enum(0);
              }
              o.set_icon(d),
                l.add_tabs(o),
                r == t.summon_overlay_key && l.set_selected_tab_id(a),
                u.A4 == t.summon_overlay_key && l.set_vr_settings_tab_id(a),
                t.summon_overlay_key == u.T2 && l.set_vr_steam_tab_id(a);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (a = this.m_refDesktopView.current) ||
                void 0 === a ||
                a.state.desktopIndices.forEach((t) => {
                  var a;
                  const o = `${u.r4}.${t}`,
                    n = z.BV.GetTabIdForSummonKey(o),
                    i = new K.D3();
                  i.set_tab_id(n),
                    i.set_display_name(
                      e > 1
                        ? (0, h.Xx)("#Desktop_X", t)
                        : (0, h.Xx)("#Desktop"),
                    ),
                    i.set_visible_in_dashboard_bar(!0);
                  const s = new K.I_();
                  s.set_enum(2),
                    i.set_icon(s),
                    l.add_tabs(i),
                    (null == r ? void 0 : r.startsWith(u.gB)) &&
                      (null === (a = this.m_refDesktopView.current) ||
                      void 0 === a
                        ? void 0
                        : a.currentDesktopIndex) == t &&
                      l.set_selected_tab_id(n);
                });
            }
            for (const e of n) {
              if (!e.overlay_key) continue;
              const t = z.BV.GetTabIdForSummonKey(e.overlay_key),
                a = new K.D3();
              a.set_tab_id(t),
                a.set_display_name(e.title),
                a.set_visible_in_dashboard_bar(!0);
              const n = new K.I_();
              n.set_enum(5),
                n.set_hwnd(Number.parseInt(e.hwnd)),
                a.set_icon(n),
                l.add_tabs(a),
                (null == r ? void 0 : r.startsWith(u.gB)) &&
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.sCurrentOverlayKey) == e.overlay_key &&
                  l.set_selected_tab_id(t);
            }
            l.tabs().sort(he), (0, q.W)(l);
            const c = new K.yt();
            c.add_actions(
              K.z3.fromObject({
                action_id: 12,
                display_name: "User Guide",
                visible_in_menu: this.BShouldShowDashboardAction(12),
                invocation: 1,
                icon: { enum: 0 },
              }),
            );
            const d =
              $.l.BHasMutualCapability(8) && this.BShouldShowDashboardAction(8);
            c.add_actions(
              K.z3.fromObject({
                action_id: 8,
                parent_menu_action_id: d ? 5 : null,
                display_name: (0, h.Xx)("#MenuPlayspaceSetup"),
                visible_in_menu: this.BShouldShowDashboardAction(8),
                invocation: 1,
                icon: { enum: 12 },
              }),
            ),
              c.add_actions(
                K.z3.fromObject({
                  action_id: 7,
                  parent_menu_action_id: d ? 5 : null,
                  display_name: (0, h.Xx)("#MenuPlayspaceAdjustFloorHeight"),
                  visible_in_menu: this.BShouldShowDashboardAction(7),
                  invocation: 1,
                  icon: { enum: 13 },
                }),
              ),
              d &&
                c.add_actions(
                  K.z3.fromObject({
                    action_id: 6,
                    parent_menu_action_id: 5,
                    display_name: (0, h.Xx)("#Button_Recenter"),
                    visible_in_menu: this.BShouldShowDashboardAction(6),
                    invocation: 1,
                    icon: { enum: 3 },
                  }),
                ),
              d &&
                c.add_actions(
                  K.z3.fromObject({
                    action_id: 9,
                    parent_menu_action_id: 5,
                    display_name: "Clear Playspace",
                    visible_in_menu: this.BShouldShowDashboardAction(9),
                    invocation: 1,
                  }),
                ),
              s ||
                (c.add_actions(
                  K.z3.fromObject({
                    action_id: 0,
                    display_name: (0, h.Xx)("#PowerMenuExitVR"),
                    visible_in_menu: this.BShouldShowDashboardAction(0),
                    invocation: 1,
                    icon: { enum: 10 },
                  }),
                ),
                c.add_actions(
                  K.z3.fromObject({
                    action_id: 1,
                    display_name: (0, h.Xx)("#PowerMenuShutdown"),
                    visible_in_menu: this.BShouldShowDashboardAction(1),
                    invocation: 1,
                    icon: { enum: 11 },
                  }),
                )),
              c.add_actions(
                K.z3.fromObject({
                  action_id: 2,
                  display_name: (0, h.Xx)("#Toggle_Room_View"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(2),
                  invocation: 2,
                  active: z.BV.m_bRoomViewActive,
                  enabled:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                  icon: { enum: 2 },
                  icon_active: { enum: 1 },
                }),
              ),
              d
                ? c.add_actions(
                    K.z3.fromObject({
                      action_id: 5,
                      display_name: (0, h.Xx)("#MenuPlayspaceMenu"),
                      visible_in_dashboard_bar: !0,
                      icon: { enum: 12 },
                      is_menu: !0,
                    }),
                  )
                : c.add_actions(
                    K.z3.fromObject({
                      action_id: 6,
                      display_name: (0, h.Xx)("#Button_Recenter"),
                      visible_in_dashboard_bar:
                        this.BShouldShowDashboardAction(6),
                      invocation: 1,
                      icon: { enum: 3 },
                    }),
                  ),
              $.l.BHasMutualCapability(3) &&
                c.add_actions(
                  K.z3.fromObject({
                    action_id: 10,
                    invocation: 3,
                    special_invocation: 1,
                    visible_in_dashboard_bar: !0,
                  }),
                ),
              (0, q.W)(c);
            const m = new K.Jl();
            m.set_windows(
              n.map((e) => {
                const t = new K.fY();
                return (
                  t.set_hwnd(Number.parseInt(e.hwnd)),
                  t.set_window_id(Number.parseInt(e.hwnd)),
                  t.set_title(e.title),
                  e.overlay_key &&
                    t.set_tab_id(z.BV.GetTabIdForSummonKey(e.overlay_key)),
                  t
                );
              }),
            ),
              (0, q.W)(m);
          }
          initializeOverlayState(e) {
            g.G3.GetAppInfo(e).then((t) => {
              var a, o;
              let n = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                n = null !== (a = g.G3.settings.get(t)) && void 0 !== a ? a : 1;
              }
              z.BV.m_mapOverlayState.set(e, {
                refOverlayWidget: l.createRef(),
                dockLocation: b.RA.Dashboard,
                nDockStartMs: Date.now(),
                xfInitial: null,
                fScale: n,
                fLastTotalVisibleTimeInSeconds: ne(e),
              }),
                (null == t ? void 0 : t.starts_theater_mode)
                  ? (this.setOverlayDockLocation(e, b.RA.Theater), se(e))
                  : oe(e) &&
                    (null !==
                      (o = g.G3.settings.get(
                        "/settings/dashboard/autoShowGameTheater",
                      )) &&
                    void 0 !== o &&
                    o
                      ? (this.setOverlayDockLocation(e, b.RA.Theater), se(e))
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
            var e, t, a, o;
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
              null === (a = this.m_dashboardThumbnailsChangedEventHandle) ||
                void 0 === a ||
                a.unregister(),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              null === (o = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === o ||
                o.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            return J.s_dashboardUserDistance
              ? J.s_dashboardUserDistance
              : {
                  [Q.Near]: 0.925,
                  [Q.Middle]: 1.05,
                  [Q.Far]: 1.2,
                  [Q.VRGamepadUI]: 1.15,
                }[z.BV.currentDashboardPosition];
          }
          static getDashboardTranslation() {
            var e;
            let t =
              0.01 *
              (null !==
                (e = g.G3.settings.get(
                  "/settings/dashboard/verticalOffsetCm_2",
                )) && void 0 !== e
                ? e
                : 0);
            t += {
              [Q.Near]: -0.07,
              [Q.Middle]: -0.08,
              [Q.Far]: -0.09,
              [Q.VRGamepadUI]: -0.09,
            }[z.BV.currentDashboardPosition];
            const a = -J.getDashboardDistance();
            return {
              channel: r.uM.TheaterFast,
              from: [0, t, a],
              to: [0, t - 0.15, a],
              interp: r.O3.SmoothStep,
            };
          }
          static getDashboardScale() {
            var e;
            if (J.s_dashboardUserScale) return J.s_dashboardUserScale;
            let t = 1;
            const a = z.BV.currentDashboardPosition;
            return (
              (t =
                a == Q.Near
                  ? 0.36
                  : a == Q.Middle
                    ? 0.41
                    : a == Q.Far
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
            const t = z.BV.currentTheaterScreenSize;
            switch (e) {
              case b.RA.LeftHand:
              case b.RA.RightHand:
                return 0.4 * J.getDashboardScale();
              case b.RA.Dashboard:
              case b.RA.World:
                return 1 * J.getDashboardScale();
              case b.RA.Theater:
                return J.getDashboardScale() * (t == z.fq.Large ? 2.35 : 1.8);
            }
            return J.getDashboardScale();
          }
          static getControlBarTranslation() {
            return z.BV.isVRGamepadUI
              ? { y: -1.2, z: 0.35 }
              : { y: -1.2, z: 0.15 };
          }
          onShowOverlay(e) {
            if (!e.overlay_key)
              return void console.log(
                "ShowGame called with invalid overlay_key",
                e.overlay_key,
              );
            const t = z.BV.m_mapOverlayState.get(e.overlay_key);
            t &&
              (t.dockLocation == b.RA.Theater
                ? e.overlay_key != u.T2 &&
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
          isSceneAppDimmingActive() {
            const e = v.H.Instance.SceneApplicationState !== r.xY.None,
              t =
                this.m_setSuppressingFade.size > 0 &&
                this.getActiveOverlaySummonKey() == u.A4,
              a = g.G3.settings.get(
                "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
              ),
              o = !v.H.Instance.SceneAppIsHome || !a;
            return z.BV.m_bDashboardVisible && o && !t && e;
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
            this.setState((t, a) => {
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
            const a = z.BV.m_mapOverlayState.get(e.overlay_key);
            a && re(e.overlay_key, a, e.visible_time_in_seconds),
              z.BV.m_mapOverlayState.delete(e.overlay_key);
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
            const a = g.G3.settings.get(u.y3);
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              this.hasDashboardOverlay(a) &&
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
            var t, a;
            this.switchToOverlayInternal(u.gB),
              null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewCreated(e.overlay_key, e.hwnd),
              null === (a = this.m_refDesktopTray.current) ||
                void 0 === a ||
                a.onWindowViewCreated(e.overlay_key, e.hwnd);
          }
          onWindowViewDestroyed(e) {}
          onUpdateWindowList(e) {
            var t;
            let a = new Map();
            e.windows.forEach((e) => {
              a.set(e.hwnd, e);
            }),
              this.setState({
                mapWindows: a,
                bWindowViewEnabled:
                  null === (t = g.G3.settings.get(u.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          setOverlayDockLocation(e, t, a) {
            var o, n;
            z.BV.isTheaterMode,
              (t != b.RA.LeftHand &&
                t != b.RA.RightHand &&
                t != b.RA.Theater) ||
                z.BV.m_mapOverlayState.forEach((a, o) => {
                  a.dockLocation == t && ie(e, a, b.RA.Dashboard);
                });
            const r = z.BV.m_mapOverlayState.get(e);
            if (
              (r &&
                (r.dockLocation == b.RA.Theater &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e)),
                ie(e, r, t),
                (r.xfInitial = a)),
              t === b.RA.Dashboard)
            )
              if (e.startsWith(u.r4)) {
                const t = Number.parseInt(e.substring(u.r4.length + 1));
                null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t);
              } else
                e.startsWith(u.Vq) &&
                  (null === (n = this.m_refDesktopView.current) ||
                    void 0 === n ||
                    n.onWindowViewChange(e));
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = this.getActiveOverlay();
            if (!t) return null;
            const a = z.BV.m_mapOverlayState.get(e),
              o = a ? a.fScale : 1,
              n = z.BV.isVRGamepadUI
                ? z.BV.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                { scale: n },
                l.createElement(r.sl, {
                  mountedId: t.mountable_id,
                  fDashboardScale: o,
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
                    ((a = e.summon_overlay_key),
                    null !== (o = null == a ? void 0 : a.startsWith(u.MI)) &&
                      void 0 !== o &&
                      o))
                );
            var a, o;
          }
          computeFilteredOverlayTabs(e) {
            return Object.values(this.m_mapExternalOverlays)
              .filter((t) => this.shouldShowOverlayTab(t, e))
              .sort((e, t) => e.tab_name.localeCompare(t.tab_name));
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let a = this.m_mapExternalOverlays[t];
              if (a.summon_overlay_key == e) return a;
            }
            return null;
          }
          switchToHomeOverlay() {
            const e = [u.T2, u.po];
            for (const t of e)
              if (this.hasDashboardOverlay(t)) {
                this.switchToOverlayInternal(t, "switchToDashboardLibrary");
                break;
              }
          }
          switchToSteamOverlay() {
            z.BV.isVRGamepadUI &&
              this.switchToOverlayInternal(u.T2, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var a, o, n, i;
            if (!e) return !1;
            if (e == u.Us) {
              let t = {
                  type: "show_app_binding",
                  app_key:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRApplications.GetSceneApplicationKey(),
                },
                a = "bindingui/" + r.qA[(0, r.Op)()];
              this.m_mailbox.SendMessage(a, t), (e = u.RM);
            }
            if (e.startsWith(u.r4)) {
              const t = Number.parseInt(e.substring(u.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (a = this.m_refDesktopView.current) ||
                  void 0 === a ||
                  a.onDesktopChange(t)),
                (e = u.gB);
            } else if (e.startsWith(u.Vq)) {
              if (
                !(null === (o = this.m_refDesktopView.current) || void 0 === o
                  ? void 0
                  : o.hasWindowView(e))
              )
                return !1;
              null === (n = this.m_refDesktopView.current) ||
                void 0 === n ||
                n.onWindowViewChange(e),
                (e = u.gB);
            }
            let s = this.findDashboardTab(e);
            return (
              !!s &&
              (this.computeFilteredOverlayTabs(!1).includes(s) &&
                g.G3.SetSettingsValue(
                  u.nf,
                  null !== (i = s.summon_overlay_key) && void 0 !== i ? i : "",
                ),
              (this.m_activeOverlayThatVanished = null),
              z.BV.m_setOverlaysViewedThisSession.add(s.summon_overlay_key),
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
              e.push(g.G3.settings.get(u.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  J.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == u.po && !this.m_bUserManuallySwitchToOldLibrary)) &&
                e.push(u.T2),
              null == t && e.push(u.po);
            const a = e.find(this.hasDashboardOverlay);
            a && this.switchToOverlayInternal(a, "autoSwitchOverlayIfNeeded");
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
            return z.BV.m_mapOverlayState.get(e);
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
            this.getActiveOverlaySummonKey() == u.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e, t) {
            var a;
            if (!g.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const o = z.BV.m_mapOverlayState.get(e.overlay_key);
            (null == o ? void 0 : o.dockLocation) != b.RA.Theater &&
              (t &&
                (this.show(
                  null !== (a = e.reason) && void 0 !== a ? a : "unknown",
                ),
                this.setDashboardVisibility(
                  !0,
                  e.tracked_device_index,
                  e.reason,
                )),
              e.overlay_key
                ? this.switchToOverlayInternal(e.overlay_key, e.reason)
                : z.BV.isTheaterMode
                  ? z.BV.getTheaterOverlay() != u.T2 &&
                    X.Q.Steam.ExecuteSteamURL({
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
            const a = z.BV.m_mapOverlayState.get(e.overlay_key);
            a
              ? a.dockLocation != t
                ? this.setOverlayDockLocation(e.overlay_key, t)
                : console.log(
                    "dock_overlay_requested: ignoring redundant request",
                    e,
                  )
              : console.log("dock_overlay_requested: unknown overlay_key", e);
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(u.f8, "onHideDashboardRequested")
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          onVRLinkRoomSetup(e) {
            e.mode == r.o4.RecenterCountdown
              ? W.C.setRoomSetupStep(W.w.RecenterCountdown)
              : e.mode == r.o4.FloorAdjustExisting
                ? W.C.setRoomSetupStep(W.w.FloorAdjustExisting)
                : e.mode == r.o4.RoomSetupFloor
                  ? W.C.setRoomSetupStep(W.w.RoomSetupFloor)
                  : e.mode == r.o4.ClearRoomSetup
                    ? VRHTML.VRChaperoneSetup.ClearRoomSetup()
                    : console.error("Unknown onVRLinkRoomSetup mode ", e.mode);
          }
          setDashboardVisibility(e, t, a) {
            let o = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: a,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o);
          }
          show(e) {
            if (z.BV.m_bDashboardVisible) return;
            m.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = v.H.Instance.SceneAppKey,
              a = v.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              a
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(u.PF, "show")),
              (this.m_activeOverlayThatVanished = null),
              (z.BV.m_bDashboardVisible = !0);
            let o = { type: J.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o),
              (0, r.qI)();
          }
          hide(e) {
            z.BV.m_bDashboardVisible &&
              ((this.m_activeOverlayThatVanished = null),
              (z.BV.m_bDashboardVisible = !1),
              this.setState({ eShowPopoverMenu: Y.None }),
              m.e.instance.EndDashboardSession(e));
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView(e) {
            const t = z.BV.m_bRoomViewActive,
              a = "boolean" == typeof e ? e : !t;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(a);
          }
          onLegacyQuickLaunchButtonClick() {
            this.switchToOverlayInternal(u.po);
          }
          onUserGuideClick() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRApplications.LaunchApplication("user_guide");
          }
          SetGamepadFocusEnable(e, t) {
            if (
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    r.Uk.Prop_Hmd_SupportsVRGamepadFocus_Bool,
                  )
            ) {
              let a = {
                type: "set_enable_vr_gamepad_focus",
                enable: e,
                sOverlayKey: t,
              };
              this.m_mailbox.SendMessage("vrcompositor_systemlayer", a);
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
              t = g.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              a = this.BShouldShowDashboardAction(1);
            let o = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (o = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                r.Uk.DeviceCanPowerOff_Bool,
              ));
            const n = v.H.Instance.SceneAppName,
              i = v.H.Instance.SceneAppIsHome;
            let s, c;
            return (
              (s = i
                ? (0, h.Xx)("#Exit_SteamVR_Home")
                : n
                  ? (0, h.Xx)("#PowerMenuQuitSceneApp", n)
                  : (0, h.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (c = i
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                l.createElement(
                  l.Fragment,
                  null,
                  z.BV.isVRGamepadUI &&
                    l.createElement(S.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(u.po),
                          this.showPopoverMenu(Y.None);
                      },
                    }),
                  o &&
                    l.createElement(S.dy, {
                      label: (0, h.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(Y.None);
                      },
                    }),
                  t &&
                    e &&
                    l.createElement(S.dy, {
                      label: s,
                      imageUrl: c,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(Y.None);
                      },
                    }),
                  l.createElement(S.dy, {
                    label: (0, h.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  a &&
                    l.createElement(S.dy, {
                      label: (0, h.Xx)("#PowerMenuShutdown"),
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
              this.setState({ eShowPopoverMenu: Y.None });
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
                !(function (e, t, a) {
                  let o = a.getBoundingClientRect();
                  return (
                    e >= o.left && e <= o.right && t >= o.top && t <= o.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, a, o;
            let n = this.getActiveOverlay();
            if (!n) return null;
            if (n.summon_overlay_key == u.gB) {
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
                return l.createElement(S.Rk, {
                  name:
                    null === (a = this.state.mapWindows.get(e)) || void 0 === a
                      ? void 0
                      : a.title,
                  iconUrl: this.getDashboardIconUri(n),
                });
              }
              return l.createElement(S.Rk, {
                name:
                  "Desktop " +
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(n),
              });
            }
            return n.summon_overlay_key == u.RM
              ? l.createElement(S.Rk, {
                  name: (0, h.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : l.createElement(S.Rk, {
                  name: n.tab_name,
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
            let a = [];
            const o =
              null !== (e = g.G3.settings.get(u.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, r.M9)((0, r.eQ)(e[3], e[0])),
                n = (0, r.M9)((0, r.eQ)(e[1], e[0])),
                i = (0, r.dq)(t, n),
                s = (0, r.Pd)((0, r.tS)(t, n, i)),
                c = (0, r.LY)((0, r.eQ)(e[0], e[3]));
              if (c < 0.4) continue;
              let d = Math.max(1, Math.floor(c));
              for (let t = 0; t < d; t++) {
                let n = (t + 1) / (d + 1),
                  i = (0, r.Oq)();
                (i.rotation = s),
                  (i.translation = (0, r.q9)(n, e[0], e[3])),
                  (i.scale = { x: 0.005, y: 0.005, z: o });
                let c = l.createElement(
                  r.wx,
                  { transform: i },
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
                a.push(c);
              }
              if (a.length > 20) break;
            }
            return a;
          }
          render() {
            const e = this.getActiveOverlaySummonKey(),
              t =
                z.BV.m_bDashboardVisible &&
                this.state.setForcingBoundsVisible[e],
              a = t && t.size > 0,
              o = W.C.roomSetupStep != W.w.Off;
            let n = [];
            return (
              a && (n = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                l.Fragment,
                null,
                !o &&
                  l.createElement(
                    "div",
                    { className: "DashboardMain" },
                    a && l.createElement(ae, null),
                    a && l.createElement("span", null, n),
                    z.BV.m_bDashboardVisible && this.renderDashboard(),
                    l.createElement(Z, null),
                    this.renderInternalOverlays(),
                    this.renderOverlayWidgets(),
                    !1,
                  ),
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
            return S.Eu.has(e)
              ? S.Eu.get(e)
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
              a = S.IO.Center;
            return l.createElement(S.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: a,
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
              (this.state.eShowPopoverMenu == Y.None ||
                this.state.eShowPopoverMenu == Y.Windows)
            );
          }
          isVolumeTrayActive() {
            return this.state.eShowPopoverMenu == Y.Volume;
          }
          isSteamOverlayActive() {
            return (
              this.isOverlayActive(u.T2) &&
              this.state.eShowPopoverMenu == Y.None
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
              enable: null != e ? e : !z.BV.isGroupMode,
            };
            this.m_mailbox.SendMessage("web_steam_mailbox", t);
          }
          BShouldShowDashboardAction(e) {
            var t, a, o, n, i;
            const s =
                null !== (t = g.G3.settings.get(u.Av)) && void 0 !== t && t,
              l =
                null !== (a = g.G3.settings.get(u.k_)) && void 0 !== a ? a : 0;
            let c = !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  r.Uk.SupportsInHMDRoomSetup_Bool,
                ));
            switch (e) {
              case 0:
                return (
                  null ===
                    (o = g.G3.settings.get(
                      "/settings/dashboard/allowExitVR",
                    )) ||
                  void 0 === o ||
                  o
                );
              case 1:
                return g.G3.settings.get(
                  "/settings/dashboard/allowSystemShutdown",
                );
              case 2:
                return s && l > 0 && !z.BV.activeLinkServer;
              case 3:
              case 4:
              default:
                return !1;
              case 6:
                return (
                  1 !=
                  (null !==
                    (n =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            r.Uk.Prop_Driver_RecenterSupport_Int32,
                          )) && void 0 !== n
                    ? n
                    : 0)
                );
              case 11:
                return z.BV.isTheaterMode || W.C.m_bShowFloor;
              case 12:
                return (
                  null !==
                    (i = g.G3.settings.get(
                      "/settings/dashboard/allowUserGuide",
                    )) &&
                  void 0 !== i &&
                  i
                );
              case 8:
              case 7:
              case 9:
                return c;
            }
          }
          renderLegacyControlBar(e, t) {
            var a, o, n, i;
            const s =
                null ===
                  (a = g.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === a ||
                a,
              c =
                null ===
                  (o = g.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === o ||
                o,
              m = ee.U.BOverlayExists(u.T2),
              _ = !z.BV.isVRGamepadUI,
              y = !(
                null !==
                  (n = g.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== n &&
                n
              ),
              b = v.H.Instance.SceneApplicationState,
              f = v.H.Instance.SceneAppIsHome,
              R =
                null ===
                  (i = g.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === i ||
                i
                  ? u.ml
                  : null,
              k = v.H.Instance.SceneAppKey;
            let V = "images/appimage_default.png";
            return (
              k && (V = "/app/image?app_key=" + k),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    r.VW,
                    { color: z.BV.ControlBarTint },
                    l.createElement(
                      r.wx,
                      { translation: { z: 1e-5 } },
                      l.createElement(
                        r.s_,
                        {
                          curvature_origin_id: R,
                          meters_per_pixel: u.F$,
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
                              l.createElement(S.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_menu_c.svg",
                                label: (0, h.Xx)("#Menu"),
                                style: S.zk.Small,
                                onClick: () => this.showPopoverMenu(Y.Power),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            l.createElement(
                              S.dw,
                              { style: S.zk.Small },
                              m &&
                                l.createElement(S.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/vr_steam.svg",
                                  label: (0, h.Xx)("#Steam"),
                                  active: this.isSteamOverlayActive(),
                                  onClick: () => this.switchToSteamOverlay(),
                                }),
                              _ &&
                                l.createElement(S.B8, {
                                  label: (0, h.Xx)("#Library"),
                                  imageUrl:
                                    "/dashboard/images/icons/svr_items.svg",
                                  active: this.isOverlayActive(u.po),
                                  onClick: this.onLegacyQuickLaunchButtonClick,
                                }),
                              c &&
                                l.createElement(S.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_desktop_alt.svg",
                                  label: (0, h.Xx)("#Desktops"),
                                  active: this.isDesktopTrayActive(),
                                  onClick: () =>
                                    this.switchToOverlayInternal(u.gB),
                                }),
                            ),
                            l.createElement(
                              S.dw,
                              { style: S.zk.Small },
                              l.createElement(
                                l.Fragment,
                                null,
                                e.map(
                                  this.renderExternalOverlayControlBarButton,
                                ),
                                t.length > 0 &&
                                  l.createElement(S.B8, {
                                    imageUrl:
                                      "/dashboard/images/icons/svr_more.svg",
                                    label: (0, h.Xx)(
                                      "#X_More_Overlays",
                                      t.length,
                                    ),
                                    active:
                                      this.state.eShowPopoverMenu ==
                                      Y.ExternalOverlays,
                                    onClick: () =>
                                      this.showPopoverMenu(Y.ExternalOverlays),
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
                            b != r.xY.None &&
                              l.createElement(
                                "div",
                                { className: "NowPlayingSpacer" },
                                l.createElement(
                                  p.d,
                                  {
                                    allowableParentSelectors: [
                                      ".DashboardMain",
                                    ],
                                  },
                                  l.createElement(
                                    r.VW,
                                    { color: z.BV.ControlBarTint },
                                    l.createElement(
                                      r.wx,
                                      { translation: { z: 0.02 } },
                                      l.createElement(
                                        r.s_,
                                        {
                                          debug_name: "NowPlayingButton",
                                          interactive: !0,
                                          curvature_origin_id: R,
                                          meters_per_pixel: u.F$,
                                        },
                                        l.createElement(
                                          "div",
                                          { className: "ControlBar" },
                                          l.createElement(S.NT, {
                                            label: f
                                              ? (0, h.Xx)("#SteamVR_Home")
                                              : (0, h.Xx)("#Now_Playing"),
                                            active: this.isOverlayActive(u.PF),
                                            style: S.zk.App,
                                            imageUrl: V,
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
                              S.dw,
                              { style: S.zk.Small },
                              this.BShouldShowDashboardAction(6) &&
                                l.createElement(S.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_recenter.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, h.Xx)("#Button_Recenter"),
                                  onClick: () => {
                                    W.C.setRoomSetupStep(W.w.RecenterCountdown);
                                  },
                                }),
                              this.BShouldShowDashboardAction(8) &&
                                l.createElement(S.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_room_setup.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, h.Xx)("#RoomSetup"),
                                  onClick: () => {},
                                }),
                              this.BShouldShowDashboardAction(2) &&
                                l.createElement(S.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_eye.svg",
                                  label: (0, h.Xx)("#Toggle_Room_View"),
                                  onClick: this.onToggleRoomView,
                                  active: z.BV.m_bRoomViewActive,
                                  enabled:
                                    null === VRHTML || void 0 === VRHTML
                                      ? void 0
                                      : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                                }),
                              l.createElement(S.D6, {
                                active: this.state.eShowPopoverMenu == Y.Volume,
                                refVolumeTray: this.m_refVolumeTray,
                                onShowTray: () =>
                                  this.showPopoverMenu(Y.Volume),
                                onHideTray: () => this.showPopoverMenu(Y.None),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            ),
                            y &&
                              l.createElement(S.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_settings.svg",
                                active: this.isOverlayActive(u.A4),
                                enabled: this.hasDashboardOverlay(u.A4),
                                label: (0, h.Xx)("#VRSettings"),
                                style: S.zk.Small,
                                centerPanelAnchorID: "VolumeButton",
                                onClick: () =>
                                  this.switchToOverlayInternal(u.A4),
                              }),
                          ),
                        ),
                        this.renderLegacyControlBarTrays(R),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const a = z.BV.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(f.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: a,
                onToggleWindowList: () => this.showPopoverMenu(Y.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              l.createElement(S.z, {
                ref: this.m_refVolumeTray,
                curvatureOriginId: e,
                scale: t,
                position: 0.337,
                visible: this.isVolumeTrayActive(),
                tintColor: a,
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
            const a =
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
              o = z.BV.isVRGamepadUI && !!(1 & a) && z.BV.m_bLinkStreamActive;
            let n = o ? 0.425 : 0.35;
            return l.createElement(
              l.Fragment,
              null,
              o &&
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
                  meters_per_pixel: z.BV.m_fVRGamepadUI_MetersPerPixel,
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
                  l.createElement(r.wx, { id: u.ZN, translation: { y: n } }),
                  l.createElement(r.wx, { id: u.dG, translation: { y: -0.1 } }),
                ),
              ),
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(z.BV.m_mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != b.RA.Dashboard);
            return l.createElement(
              l.Fragment,
              null,
              e.map((e) => {
                var t;
                return l.createElement(b.Sm, {
                  bDashboardShown: z.BV.m_bDashboardVisible,
                  bHasSceneApp:
                    v.H.Instance.SceneApplicationState !== r.xY.None,
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
              z.BV.m_bDashboardVisible &&
              this.isOverlayActive(u.gB) &&
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
            var e, t, a, o;
            const n =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              i =
                null !==
                  (o =
                    null === (a = this.m_refDesktopView.current) || void 0 === a
                      ? void 0
                      : a.desktopCount) && void 0 !== o
                  ? o
                  : 1,
              s = g.G3.settings.get(u.YL) || z.BV.m_bShowLegacyBar;
            return l.createElement(
              l.Fragment,
              null,
              s &&
                l.createElement(
                  r.Y9,
                  {
                    tabName: (0, h.Xx)("#Library"),
                    iconUri: "/dashboard/images/icons/svr_items.svg",
                    summonOverlayKey: u.po,
                  },
                  l.createElement(N, {
                    visible:
                      z.BV.m_bDashboardVisible && this.isOverlayActive(u.po),
                    onGameLaunched: this.onGameLaunched,
                  }),
                ),
              l.createElement(
                r.Y9,
                { tabName: (0, h.Xx)("#Now_Playing"), summonOverlayKey: u.PF },
                l.createElement(T, {
                  visible:
                    z.BV.m_bDashboardVisible && this.isOverlayActive(u.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              l.createElement(
                r.Y9,
                {
                  summonOverlayKey: u.gB,
                  tabName:
                    i > 1 ? (0, h.Xx)("#Desktop_X", n) : (0, h.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                l.createElement(f.N, {
                  visible: this.isDesktopViewVisible(),
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
              l.createElement(c._, {
                visible: z.BV.m_bDashboardVisible && this.isOverlayActive(u.A4),
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
          renderOverlayControlBar() {
            var e, t, a, o;
            let n = !1,
              i = !1;
            const s = this.getActiveOverlayKey(),
              c =
                null === (e = ee.U.GetOverlayInfo(s)) || void 0 === e
                  ? void 0
                  : e.sHandle;
            if (!c) return null;
            try {
              (n = VRHTML.VROverlay.GetFlag(c, r.Z9.EnableControlBarKeyboard)),
                (i = VRHTML.VROverlay.GetFlag(c, r.Z9.EnableControlBarClose));
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
                  (t = g.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === t ||
                t
                  ? u.ml
                  : null,
              m = { x: 0, y: 0.15, z: 0 },
              p =
                (null === (a = z.BV.m_mapOverlayState.get(s)) || void 0 === a
                  ? void 0
                  : a.dockLocation) == b.RA.Dashboard;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                { parent_id: u.ZN },
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: d,
                      origin: r.Ic.TopCenter,
                      interactive: !0,
                      meters_per_pixel: u.F$,
                      debug_name: "ActiveOverlayControlBar",
                      reflect: 0.1,
                    },
                    l.createElement(
                      "div",
                      { className: "TransparentOverlayControlBar" },
                      l.createElement(
                        "div",
                        { className: "Section" },
                        l.createElement(S.CS, {
                          tooltipTranslation: m,
                          overlayKey: this.getActiveOverlayKey(),
                          additionalClassNames: "LargeIcon",
                        }),
                        null === (o = this.m_refDesktopView.current) ||
                          void 0 === o
                          ? void 0
                          : o.renderControlBarButtons(m),
                      ),
                      l.createElement(
                        "div",
                        { className: "Section" },
                        !p &&
                          l.createElement(S.zN, {
                            icon: l.createElement(te.gR, null),
                            title: (0, h.Xx)("#ReturnToDashboard"),
                            tooltipTranslation: m,
                            onClick: () => {
                              const e = this.getActiveOverlayKey();
                              this.setOverlayDockLocation(e, b.RA.Dashboard);
                            },
                            additionalClassNames: "LargeIcon",
                          }),
                        p &&
                          l.createElement(
                            l.Fragment,
                            null,
                            l.createElement(S.zN, {
                              iconUrl:
                                "/dashboard/images/icons/mirror_left.png",
                              title: (0, h.Xx)("#DockOnLeftController"),
                              tooltipTranslation: m,
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
                            l.createElement(S.zN, {
                              iconUrl:
                                "/dashboard/images/icons/mirror_right.png",
                              title: (0, h.Xx)("#DockOnRightController"),
                              tooltipTranslation: m,
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
                      (p || i) &&
                        l.createElement(
                          "div",
                          { className: "Section" },
                          p &&
                            l.createElement(S.zN, {
                              icon: l.createElement(te.yR, null),
                              title: (0, h.Xx)("#FloatInWorld"),
                              tooltipTranslation: m,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, b.RA.World);
                              },
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.World,
                            }),
                          p &&
                            l.createElement(S.zN, {
                              icon: l.createElement(te.SV, null),
                              title: (0, h.Xx)("#ViewInTheater"),
                              tooltipTranslation: m,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, b.RA.Theater);
                              },
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.Theater,
                              additionalClassNames: "LargeIcon",
                            }),
                          i &&
                            l.createElement(S.zN, {
                              iconUrl:
                                "/dashboard/images/icons/icon_close_black.png",
                              title: (0, h.Xx)(
                                oe(s) ? "#QuitApp" : "#CloseOverlay",
                              ),
                              tooltipTranslation: m,
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
            const t = z.BV.isDarkMode,
              a = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              o = t ? 0 : 0.1,
              n = !t;
            let i = null;
            return (
              this.isDesktopOverlayActive() && (i = 2048),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  r.wx,
                  { translation: { y: 0.008 } },
                  l.createElement(
                    r.VW,
                    { color: a },
                    l.createElement(
                      r.s_,
                      {
                        curvature_origin_id: e,
                        origin: r.Ic.BottomCenter,
                        interactive: !1,
                        meters_per_pixel: u.F$,
                        debug_name: "StatusBar",
                        reflect: o,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: i } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          n && this.renderStatusBarTitle(),
                          l.createElement(S.j6, {
                            role: r.Kg.TrackedControllerRole_LeftHand,
                            style: y.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(S.j6, {
                            deviceIndex: r.wU,
                            style: y.A.VerticalBattery,
                          }),
                          l.createElement(S.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(S.j6, {
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
            var e, t, a, o, n;
            const i = this.computeFilteredOverlayTabs(!1),
              s = z.BV.isVRGamepadUIReady,
              c = !z.BV.isVRGamepadUI || z.BV.m_bShowLegacyBar;
            let d = [],
              h = [],
              m =
                null !== (e = g.G3.settings.get(u.FM)) && void 0 !== e ? e : 2;
            if (i.length > m) {
              const e = g.G3.settings.get(u.nf);
              (d = [
                null !== (t = i.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : i[0],
              ]),
                (h = i.filter((e) => !d.includes(e)));
            } else d = i;
            let p = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && p.push(e);
            });
            const v = this.getActiveOverlayDockLocation(),
              _ = (0, b.fT)(v),
              y = (0, b.sg)(v),
              f = this.getActiveOverlayKey(),
              R =
                null === (a = ee.U.GetOverlayInfo(f)) || void 0 === a
                  ? void 0
                  : a.sHandle,
              k = !!R && VRHTML.VROverlay.GetFlag(R, r.Z9.MinimalControlBar),
              V =
                null ===
                  (o = g.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o,
              C = V ? u.ml : null,
              w = { y: k ? -1.03375 : -0.9, z: 0.05 },
              M = s ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              T = J.k_nControlBarPitch;
            let L = V ? 1 : 0;
            const E =
                null !==
                  (n = g.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== n &&
                n,
              I = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: E && this.state.bPlacementModeActive,
                },
                l.createElement(
                  r.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    r.wx,
                    { translation: J.getDashboardTranslation() },
                    l.createElement(
                      r.wx,
                      { translation: { y: -0.15 } },
                      l.createElement(
                        F.Z,
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
                            id: C,
                            translation: { z: J.getDashboardDistance() + 1.8 },
                          }),
                          l.createElement(
                            r.wx,
                            { scale: J.getDashboardScale() },
                            l.createElement(
                              r.wx,
                              { parent_id: I },
                              z.BV.isVRGamepadUI
                                ? this.renderVRGamepadUIHeader(C)
                                : this.renderLegacyHeader(C),
                            ),
                            l.createElement(
                              r.wx,
                              {
                                id: "active_overlay_transform",
                                translation: w,
                                ref: this.m_refOverlayTransform,
                              },
                              !_ && y && this.renderActiveOverlay(),
                            ),
                            !1,
                            !1,
                            l.createElement(
                              r.wx,
                              { parent_id: s ? u.dG : u.f$ },
                              l.createElement(U.J, {
                                curvature_origin_id: C,
                                tint: z.BV.GrabHandleTint,
                                onStartMove: this.onGrabStart,
                                onEndMove: this.onGrabEnd,
                              }),
                            ),
                            !1,
                            l.createElement(
                              r.wx,
                              { translation: M, id: u.Qg },
                              !k && this.renderOverlayControlBar(),
                              l.createElement(r.wx, {
                                id: u.f$,
                                translation: { y: 0.08, z: -0.12 },
                              }),
                              l.createElement(
                                r.wx,
                                {
                                  rotation: { x: T },
                                  curvature_pitch: T,
                                  translation: s ? { y: -0.65, z: 0.2 } : {},
                                },
                                c && this.renderLegacyControlBar(d, h),
                                l.createElement(
                                  r.wx,
                                  { translation: { y: -0.65, z: -0.01 } },
                                  l.createElement(de, null),
                                ),
                              ),
                              s &&
                                l.createElement(
                                  r.wx,
                                  { rotation: { x: T }, curvature_pitch: T },
                                  this.renderVRGamepadUIBar(C),
                                ),
                              l.createElement(
                                r.wx,
                                { rotation: { x: T } },
                                l.createElement(
                                  r.wx,
                                  {
                                    translation:
                                      J.k_nKeyboardGrabTransformOffset,
                                  },
                                  l.createElement(
                                    F.Z,
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
                                            J.k_nKeyboardGrabTransformOffset.x,
                                          y:
                                            -1 *
                                            J.k_nKeyboardGrabTransformOffset.y,
                                          z:
                                            -1 *
                                            J.k_nKeyboardGrabTransformOffset.z,
                                        },
                                      },
                                      l.createElement(
                                        r.wx,
                                        {
                                          rotation: { x: -10 },
                                          curvature_pitch: T,
                                        },
                                        !1,
                                        this.state.bKeyboardVisible &&
                                          l.createElement(j, {
                                            debugHostLocation: "Dashboard",
                                            onGrabStart: this.onGrabStart,
                                            onGrabEnd: this.onGrabEnd,
                                          }),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              this.state.eShowPopoverMenu == Y.Power &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                                    rotation: { y: 19 * L },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: C,
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
                                Y.ExternalOverlays &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                                    rotation: { y: 6 * L },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: C,
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
                                        h.map((e) =>
                                          l.createElement(S.dy, {
                                            key: e.mountable_id,
                                            imageUrl:
                                              this.getDashboardIconUri(e),
                                            label: e.tab_name,
                                            onClick: () => {
                                              this.switchToOverlayInternal(
                                                e.summon_overlay_key,
                                              ),
                                                this.showPopoverMenu(Y.None);
                                            },
                                          }),
                                        ),
                                        " ",
                                      ),
                                    ),
                                  ),
                                ),
                              this.state.eShowPopoverMenu == Y.Windows &&
                                l.createElement(
                                  r.wx,
                                  {
                                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                                    rotation: { y: -16 * L },
                                  },
                                  l.createElement(
                                    r.s_,
                                    {
                                      curvature_origin_id: C,
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
                                        p.map((e) =>
                                          l.createElement(S.dy, {
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
                                                this.showPopoverMenu(Y.None);
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
        (le.k_sDashboardMailboxName = "systemui_dashboard"),
          (le.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (le.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (le.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (le.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (le.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (le.k_sWindowViewCreatedMessage = "window_view_created"),
          (le.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (le.k_sUpdateWindowListMessage = "update_window_list"),
          (le.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (le.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (le.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (le.k_nControlBarPitch = -40),
          (le.k_nKeyboardGrabTransformOffset = { x: 0, y: -0.85, z: 0.35 }),
          (le.s_dashboardUserDistance = void 0),
          (le.s_dashboardUserScale = void 0),
          (0, n.gn)([i.ak], le.prototype, "isSceneAppDimmingActive", null),
          (0, n.gn)(
            [i.ak],
            le.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, n.gn)([i.ak], le.prototype, "onKeyboardVisibilityChanged", null),
          (0, n.gn)([i.ak], le.prototype, "onGrabStart", null),
          (0, n.gn)([i.ak], le.prototype, "onGrabEnd", null),
          (0, n.gn)(
            [i.ak],
            le.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, n.gn)([i.ak], le.prototype, "onDashboardOverlayCreated", null),
          (0, n.gn)([i.ak], le.prototype, "onDashboardOverlayDestroyed", null),
          (0, n.gn)([i.ak], le.prototype, "onUpdateDashboardTabs", null),
          (0, n.gn)([i.ak], le.prototype, "onWindowViewCreated", null),
          (0, n.gn)([i.ak], le.prototype, "onWindowViewDestroyed", null),
          (0, n.gn)([i.ak], le.prototype, "onUpdateWindowList", null),
          (0, n.gn)([i.ak], le.prototype, "onUpdateDebugInfo", null),
          (0, n.gn)([i.ak], le.prototype, "setOverlayDockLocation", null),
          (0, n.gn)([i.ak], le.prototype, "onShowDashboardRequested", null),
          (0, n.gn)([i.ak], le.prototype, "onDockOverlayRequested", null),
          (0, n.gn)([i.ak], le.prototype, "onHideDashboardRequested", null),
          (0, n.gn)([i.ak], le.prototype, "onVRLinkRoomSetup", null),
          (0, n.gn)([i.ak], le.prototype, "show", null),
          (0, n.gn)([i.ak], le.prototype, "hide", null),
          (0, n.gn)([i.ak], le.prototype, "setPlacementModeActive", null),
          (0, n.gn)([i.ak], le.prototype, "onToggleRoomView", null),
          (0, n.gn)(
            [i.ak],
            le.prototype,
            "onLegacyQuickLaunchButtonClick",
            null,
          ),
          (0, n.gn)([i.ak], le.prototype, "onUserGuideClick", null),
          (0, n.gn)([i.ak], le.prototype, "SetGamepadFocusEnable", null),
          (0, n.gn)([i.ak], le.prototype, "renderLegacyPowerMenu", null),
          (0, n.gn)([i.ak], le.prototype, "startPopoverMenuTimeout", null),
          (0, n.gn)([i.ak], le.prototype, "clearPopoverMenuTimeout", null),
          (0, n.gn)([i.ak], le.prototype, "showPopoverMenu", null),
          (0, n.gn)([i.ak], le.prototype, "popoverMenuMouseLeave", null),
          (0, n.gn)([i.ak], le.prototype, "popoverMenuMouseUp", null),
          (0, n.gn)([i.ak], le.prototype, "hasDashboardOverlay", null),
          (0, n.gn)(
            [i.ak],
            le.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, n.gn)([i.ak], le.prototype, "isDesktopTrayActive", null),
          (0, n.gn)([i.ak], le.prototype, "isVolumeTrayActive", null),
          (0, n.gn)([i.ak], le.prototype, "isSteamOverlayActive", null),
          (0, n.gn)([i.ak], le.prototype, "isDesktopOverlayActive", null),
          (0, n.gn)([i.ak], le.prototype, "handleVRLinkInfoClick", null),
          (0, n.gn)([i.ak], le.prototype, "ToggleIncognitoMode", null),
          (0, n.gn)([i.ak], le.prototype, "getRenderModelForShape", null),
          (0, n.gn)([i.ak], le.prototype, "isDesktopViewVisible", null),
          (0, n.gn)([i.ak], le.prototype, "onGameLaunched", null),
          (0, n.gn)([i.ak], le.prototype, "onAddPortal", null),
          (0, n.gn)([i.ak], le.prototype, "onRemovePortal", null),
          (0, n.gn)([i.ak], le.prototype, "onActiveOverlayScaleChange", null),
          (0, n.gn)([i.ak], le.prototype, "onActiveOverlayClosed", null),
          (0, n.gn)([s.LO], le, "s_dashboardUserDistance", void 0),
          (0, n.gn)([s.LO], le, "s_dashboardUserScale", void 0),
          (le = J = (0, n.gn)([_.Pi], le));
        const ce = (0, _.Pi)(function (e) {
            var t;
            let a =
              null !== (t = VRHTML.GetHostInfo(r.zA.Hostname)) && void 0 !== t
                ? t
                : "unknown";
            return l.createElement(
              r.s_,
              {
                meters_per_pixel: u.F$,
                interactive: !0,
                debug_name: "vrlink-info",
              },
              l.createElement(
                "div",
                { className: "FloatingButtonRow" },
                l.createElement(
                  d.z,
                  { className: "ButtonControl", onClick: e.onClick },
                  l.createElement("span", null, a.toLowerCase(), " "),
                ),
              ),
            );
          }),
          de = (0, _.Pi)(function (e) {
            return null;
          }),
          ue = [
            (e) => {
              var t;
              return (
                1 ==
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
              );
            },
            (e) => {
              var t;
              return (
                4 ==
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
              );
            },
            (e) => null == e.icon(),
            (e) => {
              var t;
              return (
                2 ==
                (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
              );
            },
          ];
        function he(e, t) {
          let a = -1,
            o = -1;
          for (let n = 0; n < ue.length && a < 0 && o < 0; n++)
            ue[n](e) && (a = n), ue[n](t) && (o = n);
          return (
            a < 0 && (a = ue.length),
            o < 0 && (o = ue.length),
            a == o ? e.tab_id() - t.tab_id() : a - o
          );
        }
        function me(e, t) {
          var a, o, n, r, i, s;
          let l;
          const c =
              null !== (a = null == e ? void 0 : e.product_name) && void 0 !== a
                ? a
                : "",
            d =
              null !== (o = null == t ? void 0 : t.product_name) && void 0 !== o
                ? o
                : "";
          if (((l = c.localeCompare(d)), 0 != l)) return l;
          const u =
              null !== (n = null == e ? void 0 : e.title) && void 0 !== n
                ? n
                : "",
            h =
              null !== (r = null == t ? void 0 : t.title) && void 0 !== r
                ? r
                : "";
          if (((l = u.localeCompare(h)), 0 != l)) return l;
          const m =
              null !== (i = null == e ? void 0 : e.hwnd) && void 0 !== i
                ? i
                : "",
            p =
              null !== (s = null == t ? void 0 : t.hwnd) && void 0 !== s
                ? s
                : "";
          return m.localeCompare(p);
        }
      },
      4790: (e, t, a) => {
        "use strict";
        a.d(t, {
          MH: () => V,
          RA: () => n,
          Sm: () => E,
          Uj: () => r,
          fT: () => M,
          sg: () => w,
        });
        var o,
          n,
          r,
          i = a(655),
          s = a(5876),
          l = a(7056),
          c = a(7062),
          d = a(7294),
          u = a(424),
          h = a(7176),
          m = a(1628),
          p = a(9626),
          v = a(421),
          g = a(6063),
          _ = a(6509),
          y = a(792),
          b = a(9347),
          S = a(8261),
          f = a(6459),
          R = a(6698),
          k = a(3568);
        function V(e) {
          switch (e) {
            case n.Dashboard:
            case n.World:
              return 1;
            case n.Theater:
              return 3;
            case n.LeftHand:
            case n.RightHand:
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
        })(n || (n = {})),
          (function (e) {
            (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
          })(r || (r = {}));
        const C = "TheaterCurvatureOriginId";
        function w(e) {
          return e == n.Dashboard;
        }
        function M(e) {
          return e == n.World;
        }
        function T(e) {
          return e == n.LeftHand || e == n.RightHand;
        }
        function L(e) {
          switch (e) {
            case n.LeftHand:
              return "/user/hand/left";
            case n.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        let E = (o = class extends d.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: null,
                sParent: L(this.props.dockLocation),
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
                  sParent: L(this.props.dockLocation),
                  xfTransform: null,
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
            let a = { x: 0, y: 0 };
            try {
              a = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let o =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              n = (o * a.y) / a.x;
            return (
              (this.props.sOverlayKey.startsWith(h.r4) ||
                this.props.sOverlayKey.startsWith(h.Vq)) &&
                ((n = b.N.k_nDesktopPanelBaseHeight), (o = (n * a.x) / a.y)),
              { width: o, height: n }
            );
          }
          getPanelScaleForLocation() {
            const e = p.BV.currentTheaterScreenSize;
            switch (this.props.dockLocation) {
              case n.LeftHand:
              case n.RightHand:
                return 0.15;
              case n.Dashboard:
              case n.World:
                let t = p.BV.isVRGamepadUI
                  ? p.BV.m_fVRGamepadUI_GlobalActiveOverlayScale
                  : 1;
                t *= S.g.getDashboardScale();
                const a = p.BV.m_mapOverlayState.get(this.props.sOverlayKey);
                return t * (a ? a.fScale : 1);
              case n.Theater:
                let o = e == p.fq.Large ? 2.35 : 1.8;
                const r = this.getCurrentOverlaySize();
                return null === r || 0 == r.height ? o : o / r.height;
            }
            return 1;
          }
          setInitialTransformForTheater() {
            const e = p.BV.currentTheaterScreenSize == p.fq.Large ? 0.6 : 0.4;
            switch (p.BV.currentTheaterScreenAlignment) {
              case p.A3.PlayArea: {
                let t = (0, s.Oq)();
                (t.translation.y = e),
                  (t.translation.z = -3.3),
                  this.setState({ xfTransform: t });
                break;
              }
              case p.A3.Dashboard: {
                let t = 3;
                s.hz
                  .getInstance()
                  .requestSGTransform(h.Az + "::active_overlay_transform", t)
                  .then((t) => {
                    let a = (0, s.Oq)();
                    (a.rotation = t.rotation),
                      (a.translation = {
                        x: t.translation.x,
                        y: e,
                        z: t.translation.z,
                      }),
                      this.setState({ xfTransform: a });
                  })
                  .catch((t) => {
                    console.warn(
                      "Failed to get SGTransform in setInitialTransformForTheater. Using head fallback",
                      t,
                    );
                    let a = (function () {
                      const e =
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.GetPose("/user/head", s.zq.Standing);
                      if (
                        e &&
                        (null == e ? void 0 : e.bPoseIsValid) &&
                        (null == e ? void 0 : e.xfDeviceToAbsoluteTracking)
                      ) {
                        const t = 4,
                          a = -0.75,
                          o = (0, s.Pf)(e.xfDeviceToAbsoluteTracking);
                        let n = (0, s.Nz)(o);
                        n.y = 0;
                        let r = (0, s.mT)((0, s.M9)(n), t);
                        r.y += a;
                        let i = (0, s.Oq)();
                        return (
                          (i.rotation = o.rotation),
                          (i.translation = (0, s.ui)(r, o.translation)),
                          i
                        );
                      }
                      return null;
                    })();
                    (null == a ? void 0 : a.translation) &&
                      (a.translation.y = e),
                      this.setState({ xfTransform: a });
                  });
                break;
              }
              default:
                console.log(
                  "DashboardOverlay ERROR: Unhandled TheaterScreenAlignment",
                );
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial)
              switch (this.props.dockLocation) {
                case n.LeftHand:
                case n.RightHand:
                case n.World:
                  this.setState({ xfTransform: this.props.xfInitial });
              }
            else
              switch (this.props.dockLocation) {
                case n.Dashboard:
                case n.LeftHand:
                case n.RightHand: {
                  let e = (0, s.Oq)();
                  (e.rotation = (0, s.UU)({ x: -45, y: 0, z: 0 })),
                    this.setState({ xfTransform: e });
                  break;
                }
                case n.World:
                  s.hz
                    .getInstance()
                    .requestSGTransform(h.Az + "::active_overlay_transform", 0)
                    .then((e) => {
                      let t = (0, s.Oq)();
                      (t.rotation = e.rotation),
                        (t.translation = {
                          x: e.translation.x,
                          y: e.translation.y,
                          z: e.translation.z,
                        }),
                        this.setState({ xfTransform: t });
                    })
                    .catch((e) => {
                      console.warn(
                        "Failed to get SGTransform in setInitialTransformForLocation.",
                        e,
                      );
                    });
                  break;
                case n.Theater:
                  this.setInitialTransformForTheater();
              }
          }
          computeDestination() {
            if (!this.state.bIsMoving || null === this.state.xfTransform)
              return;
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_LeftHand,
            ) != s.Kf && (t = VRHTML.GetPose("/user/hand/left", s.zq.Standing));
            let a = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_RightHand,
            ) != s.Kf &&
              (a = VRHTML.GetPose("/user/hand/right", s.zq.Standing));
            let r = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                a && r.push({ pose: a, location: n.RightHand });
                break;
              case "/user/hand/right":
                t && r.push({ pose: t, location: n.LeftHand });
                break;
              case "/user/head":
                t && r.push({ pose: t, location: n.LeftHand }),
                  a && r.push({ pose: a, location: n.RightHand });
            }
            if (0 == r.length)
              return void setTimeout(this.computeDestination, o.sfMovePulseMS);
            let i = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            r.forEach((e) => {
              let t = VRHTML.ChangeBasis(i, e.pose.xfDeviceToAbsoluteTracking);
              (0, s.LY)(t.translation) > o.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (u.L.Instance.triggerHaptic(s.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: n.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == n.World &&
                      this.state.destination == n.World)) &&
                  (u.L.Instance.triggerHaptic(s.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, o.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving || null === this.state.xfTransform) return;
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
              a = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing);
            switch (this.props.dockLocation) {
              case n.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_LeftHand,
                  ) == s.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
                break;
              case n.RightHand:
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
            let o = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              r = VRHTML.ChangeBasis(o, a.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: r,
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
                  s.Kg.TrackedControllerRole_LeftHand,
                ) == s.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == n.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_RightHand,
                ) == s.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", s.zq.Standing);
            }
            let a,
              o = {
                xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: s.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case n.LeftHand:
                a = e;
                break;
              case n.RightHand:
                a = t;
                break;
              default:
                a = o;
            }
            let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              i = VRHTML.MultiplyTransforms(
                r.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              l = VRHTML.ChangeBasis(i, a.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: L(this.state.destination),
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
            var e, t, a;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let i = this.getCurrentOverlaySize();
            if (null === i) return null;
            let l,
              c = !this.props.bDashboardShown,
              u = !1;
            if (this.props.dockLocation == n.Theater) {
              if (this.props.bHasSceneApp && y.C.m_bShowFloor) return null;
              c = !0;
              const t =
                null !==
                  (e = m.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e;
              (u = !p.BV.isGroupMode && p.BV.isDarkMode && t),
                p.BV.eTheaterCurvature == r.Curved && (l = C);
            }
            const b = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
              w =
                b && VRHTML.VROverlay.GetFlag(b, s.Z9.EnableControlBarKeyboard),
              M =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(h.r4),
              L = { x: 0, y: -0.15, z: 0.1 },
              E = (0, s.iN)(h.Az, "Floating-Panel"),
              I = (e) =>
                d.createElement(
                  s.wx,
                  {
                    parent_id: e.parent_id,
                    translation: { x: e.x_offset, y: e.y_offset, z: 0.01 },
                  },
                  d.createElement(_.O, {
                    id: e.target_id + ".ResizeHandle",
                    target_id: e.target_id,
                    min_target_scale: h.k3,
                    max_target_scale: h.qV,
                    displacement: e.displacement,
                    bVisible: !0,
                    scale: e.scale,
                    tint: p.BV.GrabHandleTint,
                  }),
                );
            if (c) {
              const e =
                  this.props.dockLocation == n.Theater ||
                  (null !==
                    (t = m.G3.settings.get(
                      "/settings/dashboard/inputCaptureEnabled",
                    )) &&
                    void 0 !== t &&
                    t),
                r =
                  null !==
                    (a = m.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== a
                    ? a
                    : 0.5,
                c = 0.5 * Math.pow(r, 2.2);
              let _ = -0.1,
                y = 4;
              const b = !0;
              let w = 0.1,
                T = i.width,
                D = i.height,
                O = 0.75;
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
                    { translation: { y: O } },
                    d.createElement(
                      v.Z,
                      {
                        min_distance: 0.7,
                        should_head_align: !0,
                        lerp_speed: o.flGrabTransformLerpSpeed,
                      },
                      d.createElement(s.wx, { id: C, translation: { z: y } }),
                      d.createElement(
                        s.wx,
                        { translation: { y: -1 * O } },
                        d.createElement(
                          s.wx,
                          { scale: this.getPanelScaleForLocation() },
                          d.createElement(
                            s.s_,
                            {
                              id: E,
                              overlay_key: this.props.sOverlayKey,
                              height: D,
                              width:
                                p.BV.m_eTheaterStereo != s.Ko.Mono ? T : void 0,
                              interactive: !0,
                              allow_input_capture: e,
                              undocked: !0,
                              origin:
                                this.props.dockLocation == n.Theater
                                  ? { x: 0, y: -0.75 }
                                  : s.Ic.BottomCenter,
                              curvature_origin_id: l,
                              stereoscopy: p.BV.m_eTheaterStereo,
                              scale_index: V(this.props.dockLocation),
                              debug_name: "dashboard-overlay",
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
                            d.createElement(s.at, {
                              id: "Floating-Panel-CenterLeft",
                              location: s.Ic.CenterLeft,
                            }),
                            d.createElement(s.at, {
                              id: "Floating-Panel-CenterRight",
                              location: s.Ic.CenterRight,
                            }),
                            d.createElement(s.sl, {
                              mountedId: (0, s.iN)(
                                h.GN,
                                this.props.sOverlayKey + ".cursor",
                              ),
                            }),
                          ),
                        ),
                        d.createElement(
                          s.wx,
                          { parent_id: "Floating-Panel-CenterLeft" },
                          d.createElement(s.CS, {
                            name: this.props.sOverlayKey,
                            channel: "front_left",
                          }),
                        ),
                        d.createElement(
                          s.wx,
                          { parent_id: "Floating-Panel-CenterRight" },
                          d.createElement(s.CS, {
                            name: this.props.sOverlayKey,
                            channel: "front_right",
                          }),
                        ),
                        u &&
                          d.createElement(s.bt, {
                            target_id: E,
                            "near-z": _,
                            "far-z": 0.1,
                            specular: { color: { r: c, g: c, b: c } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        this.props.dockLocation == n.Theater &&
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
                                  scale: S.g.getUiScaleForLocation(
                                    this.props.dockLocation,
                                  ),
                                },
                                b &&
                                  d.createElement(
                                    s.s_,
                                    {
                                      height: w,
                                      width: void 0,
                                      interactive: !0,
                                      requires_laser: !0,
                                      origin: s.Ic.TopCenter,
                                      curvature_origin_id: l,
                                      debug_name: "theater-control-bar",
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
                                        M &&
                                          d.createElement(f.zN, {
                                            key: "multitask",
                                            iconUrl:
                                              "/dashboard/images/icons/icon_multitasking_view.png",
                                            tooltipTranslation: L,
                                            onClick:
                                              this.props.ShowMultitaskingView,
                                            additionalClassNames: "LargeIcon",
                                          }),
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "Section" },
                                        d.createElement(f.zN, {
                                          icon: d.createElement(R.gR, null),
                                          title: (0, k.Xx)(
                                            "#ReturnToDashboard",
                                          ),
                                          key: "dock",
                                          tooltipTranslation: L,
                                          onClick: () => {
                                            this.props.setOverlayDockLocation(
                                              this.props.sOverlayKey,
                                              n.Dashboard,
                                            );
                                          },
                                          additionalClassNames: "LargeIcon",
                                        }),
                                      ),
                                    ),
                                  ),
                                d.createElement(
                                  s.wx,
                                  { translation: { y: -w - 0.1, z: 0.03 } },
                                  d.createElement(g.J, {
                                    scale: 1.5,
                                    tint: p.BV.GrabHandleTint,
                                    curvature_origin_id: l,
                                  }),
                                ),
                              ),
                              d.createElement(I, {
                                parent_id: "Floating-Panel-BottomRight",
                                target_id: E,
                                scale: 1.25,
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
            const D = i.height,
              O = Math.max(i.width, 0.175),
              x = p.BV.isVRGamepadUI
                ? {
                    r: (14 / 255) * 0.1,
                    g: (20 / 255) * 0.1,
                    b: (27 / 255) * 0.1,
                  }
                : { r: 0.016, g: 0.017, b: 0.02 };
            return d.createElement(
              s.wx,
              {
                parent_path: this.state.sParent,
                transform: this.state.xfTransform,
                id: "xf_widget",
              },
              d.createElement(
                s.wx,
                { scale: this.getPanelScaleForLocation() },
                d.createElement(
                  s.s_,
                  {
                    id: E,
                    overlay_key: this.props.sOverlayKey,
                    height: i.height,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: s.Ic.BottomCenter,
                    scale_index: V(this.props.dockLocation),
                    debug_name: "control-bar-floating-overlay",
                  },
                  d.createElement(
                    s.wx,
                    {
                      translation: { z: -0.005 },
                      scale: { x: O, y: D, z: 0.008 },
                    },
                    d.createElement(
                      s.VW,
                      { color: x },
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
                  d.createElement(s.at, {
                    id: "Floating-Panel-CenterLeft",
                    location: s.Ic.CenterLeft,
                  }),
                  d.createElement(s.at, {
                    id: "Floating-Panel-CenterRight",
                    location: s.Ic.CenterRight,
                  }),
                  d.createElement(s.sl, {
                    mountedId: (0, s.iN)(
                      h.GN,
                      this.props.sOverlayKey + ".cursor",
                    ),
                  }),
                ),
              ),
              d.createElement(
                s.wx,
                { parent_id: "Floating-Panel-CenterLeft" },
                d.createElement(s.CS, {
                  name: this.props.sOverlayKey,
                  channel: "front_left",
                }),
              ),
              d.createElement(
                s.wx,
                { parent_id: "Floating-Panel-CenterRight" },
                d.createElement(s.CS, {
                  name: this.props.sOverlayKey,
                  channel: "front_right",
                }),
              ),
              d.createElement(I, {
                parent_id: "Floating-Panel-BottomRight",
                target_id: E,
                scale:
                  S.g.getUiScaleForLocation(this.props.dockLocation) *
                  (T(this.props.dockLocation) ? 1.5 : 1),
                displacement: 0,
                x_offset: T(this.props.dockLocation) ? 0.02 : 0.01,
                y_offset: 0,
              }),
              d.createElement(
                s.wx,
                {
                  parent_id: "Floating-Panel-BottomCenter",
                  translation: { y: -0.01, z: 0 },
                  ignore_parent_scale: !0,
                  scale: S.g.getUiScaleForLocation(this.props.dockLocation),
                },
                d.createElement(
                  s.s_,
                  {
                    height: o.sfOverlayTrayHeight,
                    width: void 0,
                    interactive: !0,
                    origin: s.Ic.TopCenter,
                    debug_name: "control-bar-floating",
                  },
                  d.createElement(
                    "div",
                    { className: "TransparentOverlayControlBar" },
                    d.createElement(
                      "div",
                      { className: "Section" },
                      M &&
                        d.createElement(f.zN, {
                          key: "multitask",
                          iconUrl:
                            "/dashboard/images/icons/icon_multitasking_view.png",
                          tooltipTranslation: L,
                          onClick: this.props.ShowMultitaskingView,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      w &&
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
                        icon: d.createElement(R.gR, null),
                        title: (0, k.Xx)("#ReturnToDashboard"),
                        key: "dock",
                        tooltipTranslation: L,
                        onClick: () => {
                          this.props.setOverlayDockLocation(
                            this.props.sOverlayKey,
                            n.Dashboard,
                          );
                        },
                        additionalClassNames: "LargeIcon",
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
                        this.state.destination == n.LeftHand
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
        (E.sfMaxDockDist = 0.4),
          (E.sfMovePulseMS = 100),
          (E.sfOverlayTrayHeight = 0.12),
          (E.flGrabTransformLerpSpeed = 0.125),
          (0, i.gn)([l.ZP], E.prototype, "computeDestination", null),
          (0, i.gn)([l.ZP], E.prototype, "startMove", null),
          (0, i.gn)([l.ZP], E.prototype, "endMove", null),
          (E = o = (0, i.gn)([c.Pi], E));
      },
      6459: (e, t, a) => {
        "use strict";
        a.d(t, {
          B8: () => G,
          CS: () => Z,
          D6: () => X,
          Eu: () => T,
          IO: () => B,
          M3: () => D,
          NT: () => N,
          Rk: () => U,
          Yd: () => L,
          dw: () => A,
          dy: () => O,
          j4: () => z,
          j6: () => F,
          lL: () => E,
          z: () => W,
          zN: () => j,
          zk: () => P,
        });
        var o,
          n,
          r = a(655),
          i = a(5876),
          s = a(7056),
          l = a(2188),
          c = a(7062),
          d = a(7294),
          u = a(5177),
          h = a(9755),
          m = a(7475),
          p = a(4979),
          v = a(3107),
          g = a(2749),
          _ = a(7176),
          y = a(3568),
          b = a(7008),
          S = a(8980),
          f = a(9897),
          R = a(1628),
          k = a(8322),
          V = a.n(k),
          C = a(7726),
          w = a(7471),
          M = a(9626);
        const T = new l.vP();
        function L(e) {
          const { summonOverlayKey: t } = e,
            { ids: a, anchors: o } = d.useMemo(() => {
              const e = "DashboardPanel_" + t,
                a = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                  strBottomRightAnchorID: e + "_BottomRight",
                };
              return {
                ids: a,
                anchors: d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(i.at, {
                    id: a.strTopCenterAnchorID,
                    location: i.Ic.TopCenter,
                  }),
                  d.createElement(i.at, {
                    id: a.strCenterLeftAnchorID,
                    location: i.Ic.CenterLeft,
                  }),
                  d.createElement(i.at, {
                    id: a.strCenterRightAnchorID,
                    location: i.Ic.CenterRight,
                  }),
                  d.createElement(i.at, {
                    id: a.strBottomCenterAnchorID,
                    location: i.Ic.BottomCenter,
                  }),
                  d.createElement(i.at, {
                    id: a.strBottomRightAnchorID,
                    location: i.Ic.BottomRight,
                  }),
                ),
              };
            }, [t]);
          return (
            d.useEffect(
              () => (
                T.set(t, a),
                () => {
                  T.get(t) === a && T.delete(t);
                }
              ),
              [t, a],
            ),
            t ? o : null
          );
        }
        const E = (0, c.Pi)(function (e) {
            return d.createElement(
              I,
              Object.assign({}, e, { VRGamepadUI: M.BV.isVRGamepadUI }),
            );
          }),
          I = (e) => {
            var t, a, o;
            const n = e.VRGamepadUI,
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
                null !== (a = e.foregroundReflectMultiplier) && void 0 !== a
                  ? a
                  : 1,
              p =
                null ===
                  (o = R.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o
                  ? _.ml
                  : null;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                i.s_,
                {
                  visibility: e.visible ? i.Bl.Visible : i.Bl.Hidden,
                  debug_name: "homepanelbackground",
                  curvature_origin_id: p,
                  origin: i.Ic.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  meters_per_pixel: n ? void 0 : 2 * _.F$,
                  width: n ? 2.67 : void 0,
                  reflect: n ? 0 : 0.01,
                  sampler: i.Vv.SingleTap,
                },
                d.createElement(L, { summonOverlayKey: e.summonOverlayKey }),
                d.createElement(
                  h.vz,
                  { ref: r },
                  d.createElement("div", {
                    className: (0, S.LJ)(
                      "DashboardPanelBackground",
                      e.additionalClassNames,
                    ),
                    style: e.additionalStyle,
                  }),
                ),
              ),
              d.createElement(
                i.wx,
                { translation: { z: 1e-5 } },
                d.createElement(
                  i.s_,
                  {
                    id: "dashboard_widget_panel_id",
                    visibility: e.visible ? i.Bl.Visible : i.Bl.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: p,
                    origin: i.Ic.BottomCenter,
                    interactive: !0,
                    scrollable: l,
                    meters_per_pixel: n ? void 0 : _.F$,
                    reflect: n ? void 0 : 0.2 * c,
                    width: n ? 2.67 : void 0,
                  },
                  d.createElement(
                    h.sC,
                    { ref: s },
                    d.createElement(
                      u.q,
                      null,
                      d.createElement(
                        m.P,
                        {
                          scrollDirection: l ? m.I.Vertical : m.I.None,
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
        class D extends d.Component {
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
              a = null;
            const o = t.toLowerCase(),
              n = Math.max(o.lastIndexOf("am"), o.lastIndexOf("pm"));
            return (
              n >= 0 && ((a = t.substring(n)), (t = t.substring(0, n - 1))),
              d.createElement(
                "div",
                { className: "ClockContainer" },
                d.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  d.createElement("span", { className: "Suffix" }, a),
                ),
              )
            );
          }
        }
        function O(e) {
          return d.createElement(
            u.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            d.createElement("div", { className: "HoverGradient" }),
            d.createElement("div", { className: "ClickGradient" }),
            d.createElement("span", null, e.label),
            e.lineBelow && d.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, r.gn)([s.ak], D.prototype, "updateTime", null);
        let x = (o = class extends d.Component {
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
              a = this.props.translation
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
            return d.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              d.createElement(
                b.d,
                { allowableParentSelectors: [".DashboardMain"] },
                d.createElement(
                  i.wx,
                  { translation: a },
                  d.createElement(
                    i.s_,
                    {
                      visibility: t ? i.Bl.Visible : i.Bl.SkipInSceneGraph,
                      meters_per_pixel: _.F$,
                      curvature_origin_id: o,
                      debug_name: "control-bar-tooltip",
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
        (x.s_CurrentlyShownTooltip = null),
          (0, r.gn)([l.Fl], x.prototype, "isShowingTooltip", null),
          (0, r.gn)([l.aD.bound], x.prototype, "show", null),
          (0, r.gn)([l.aD.bound], x.prototype, "hide", null),
          (0, r.gn)([l.LO], x, "s_CurrentlyShownTooltip", void 0),
          (x = o = (0, r.gn)([c.Pi], x));
        class H extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !H.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  H.k_rsThumbnailHashesToInvert.indexOf(V().hash(e)) >= 0 &&
                  (t = !0),
                H.s_mapShouldInvertThumbnail.set(e, t);
            }
            return H.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              a = H.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, S.LJ)(["BlackToWhite", a]),
                src: this.props.src,
              }),
            );
          }
        }
        var P, B;
        (H.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (H.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(P || (P = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(B || (B = {}));
        const A = (e) =>
          d.createElement(
            "div",
            { className: (0, S.LJ)("ControlBarGroup", P[e.style]) },
            e.children,
          );
        let G = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter() {
            var e, t, a;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (a = (t = this.props).onMouseEnter) ||
                void 0 === a ||
                a.call(t);
          }
          onMouseLeave() {
            var e, t, a;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (a = (t = this.props).onMouseLeave) ||
                void 0 === a ||
                a.call(t);
          }
          render() {
            var e;
            return d.createElement(
              u.z,
              {
                className: (0, S.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  B[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : B.Center
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
                d.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  d.createElement(b.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              d.createElement(x, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              d.createElement(H, { src: this.props.imageUrl }),
            );
          }
        };
        (0, r.gn)([s.ak], G.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], G.prototype, "onMouseLeave", null),
          (G = (0, r.gn)([c.Pi], G));
        const N = (e) =>
          d.createElement(
            A,
            { style: e.style },
            d.createElement(G, Object.assign({}, e)),
          );
        class F extends d.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.deviceIndex = i.Kf),
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
              a = i.Kf;
            if (
              (void 0 !== this.props.role
                ? (a = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role,
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (a = this.props.deviceIndex),
              a != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = a)),
              a != i.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  a,
                  i.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  a,
                  i.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  a,
                  i.Uk.DeviceIsCharging_Bool,
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
                a,
                i.Uk.DevicePowerUsage_Float,
              );
            }
            let o = C.X.GetBatteryIcon(
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
          onDeviceEvent(e, t, a) {
            (e != i.XX.Activated && e != i.XX.Deactivated) || this.update();
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
        (F.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([s.ak], F.prototype, "updateControllerStatus", null),
          (0, r.gn)([s.ak], F.prototype, "onBatteryStateChanged", null),
          (0, r.gn)([s.ak], F.prototype, "onDeviceRoleChanged", null),
          (0, r.gn)([s.ak], F.prototype, "onDeviceEvent", null),
          d.Component;
        const U = (e) =>
          d.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && d.createElement(H, { src: e.iconUrl, shadow: !0 }),
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
            var e, t, a;
            const o = this.props.position,
              n = Math.asin(o) / Math.PI,
              r = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                i.at,
                { location: { x: o, y: -1 } },
                d.createElement(i.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(n),
                    z: -0.03 * Math.abs(n),
                  },
                  rotation: { y: 15 * n, z: 2 * n },
                }),
              ),
              d.createElement(
                b.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                d.createElement(
                  i.VW,
                  { color: this.props.tintColor },
                  d.createElement(
                    g.Ti,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    d.createElement(
                      i.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04 * r, z: -0.01 },
                        scale: r,
                      },
                      d.createElement(
                        i.s_,
                        {
                          curvature_origin_id:
                            null !== (t = this.props.curvatureOriginId) &&
                            void 0 !== t
                              ? t
                              : null,
                          origin: i.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          meters_per_pixel: _.F$,
                          sort_depth_bias: this.props.sort_depth_bias,
                          debug_name: "control-bar-tray",
                        },
                        d.createElement(
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
                      d.createElement(
                        i.wx,
                        { translation: { z: -1e-5 } },
                        d.createElement(
                          i.s_,
                          {
                            curvature_origin_id:
                              null !== (a = this.props.curvatureOriginId) &&
                              void 0 !== a
                                ? a
                                : null,
                            origin: i.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            meters_per_pixel: 2 * _.F$,
                            reflect: 0.005,
                            sampler: i.Vv.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias,
                            debug_name: "control-bar-tray-bg",
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
                      ? (0, y.Xx)("#UnmuteMicrophone")
                      : (0, y.Xx)("#MuteMicrophone"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                d.createElement(K, {
                  title: (0, y.Xx)("#MicrophoneVolume"),
                  value: f.f.Instance.microphoneVolume,
                  onChange: f.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: p.px.OnHandle,
                  additionalClassName: (0, S.LJ)([
                    "Muted",
                    f.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: v.y.VolumePreview,
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
                        ? (0, y.Xx)("#UnmuteAudioMirror")
                        : (0, y.Xx)("#MuteAudioMirror"),
                    },
                    d.createElement("img", {
                      className: "BlackToWhite",
                      src: f.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  d.createElement(K, {
                    title: (0, y.Xx)("#AudioMirrorVolume"),
                    value: f.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: f.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: p.px.OnHandle,
                    additionalClassName: (0, S.LJ)([
                      "Muted",
                      f.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: v.y.VolumePreview,
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
                      ? (0, y.Xx)("#Unmute_Headset")
                      : (0, y.Xx)("#Mute_Headset"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                d.createElement(K, {
                  title: (0, y.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: f.f.Instance.volume,
                  onChange: f.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: p.px.OnHandle,
                  additionalClassName: (0, S.LJ)(["Muted", f.f.Instance.muted]),
                  interactionEndSoundEffect: v.y.VolumePreview,
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
        let K = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, a;
            this.setState({ bHover: !0 }),
              null === (a = (t = this.props).onMouseEnter) ||
                void 0 === a ||
                a.call(t, e);
          }
          onMouseLeave(e) {
            var t, a;
            this.setState({ bHover: !1 }),
              null === (a = (t = this.props).onMouseLeave) ||
                void 0 === a ||
                a.call(t, e);
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
                d.createElement(x, {
                  text: this.props.title,
                  shown: this.state.bHover || this.state.bSliding,
                }),
              d.createElement(
                p.iR,
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
        (0, r.gn)([s.ak], K.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], K.prototype, "onMouseLeave", null),
          (0, r.gn)([s.ak], K.prototype, "onInteractionStart", null),
          (0, r.gn)([s.ak], K.prototype, "onInteractionEnd", null),
          (K = (0, r.gn)([c.Pi], K));
        let q = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter(e) {
            var t, a, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (o = (a = this.props).onMouseEnter) ||
                void 0 === o ||
                o.call(a, e);
          }
          onMouseLeave(e) {
            var t, a, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (o = (a = this.props).onMouseLeave) ||
                void 0 === o ||
                o.call(a, e);
          }
          render() {
            return d.createElement(
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
                d.createElement(x, {
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
        let X = (n = class extends d.Component {
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
            var t, a;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              null === (a = (t = this.props).onShowTray) ||
                void 0 === a ||
                a.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, i.JR)((0, i.Zj)(t, this.m_vecOriginalMousePosition)) >
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
            var e, t, a, o;
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
                (null === (a = (t = this.props).onHideTray) ||
                  void 0 === a ||
                  a.call(t)),
              null === (o = this.slider) ||
                void 0 === o ||
                o.stopExternalSliding();
          }
          render() {
            return d.createElement(G, {
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
          (0, r.gn)([s.ak], X.prototype, "onButtonMouseDown", null),
          (0, r.gn)([s.ak], X.prototype, "onWindowMouseMove", null),
          (0, r.gn)([s.ak], X.prototype, "onWindowMouseUp", null),
          (X = n = (0, r.gn)([c.Pi], X));
        const j = (e) => {
          var t;
          const a = d.useRef();
          return d.createElement(
            u.z,
            {
              className: (0, S.LJ)(
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
                null === (t = a.current) || void 0 === t || t.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var t;
                null === (t = a.current) || void 0 === t || t.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              d.createElement(x, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: a,
              }),
            e.label && d.createElement("span", null, e.label),
            e.iconUrl &&
              d.createElement("img", {
                className: (0, w.Z)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            !e.iconUrl && e.icon,
          );
        };
        function Z(e) {
          var t, a;
          const o = (0, S.aB)(),
            n =
              null !== (t = null == o ? void 0 : o.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == o.overlayKey,
            r = d.useRef(!1),
            s =
              null === (a = e.showTooltip) || void 0 === a || a
                ? n
                  ? (0, y.Xx)("#HideKeyboardTooltip")
                  : (0, y.Xx)("#ShowKeyboardTooltip")
                : void 0;
          return d.createElement(
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
                  r.current = n;
                },
                onClick: () => {
                  if (r.current) VRHTML.VROverlay.HideKeyboard();
                  else {
                    let t =
                      i.vS.Minimal | i.vS.HideDoneKey | i.vS.ShowArrowKeys;
                    e.modal && (t |= i.vS.Modal),
                      VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.overlayKey,
                        i.Pw.Normal,
                        i.l0.SingleLine,
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
      9347: (e, t, a) => {
        "use strict";
        a.d(t, { N: () => R, e: () => f });
        var o,
          n,
          r = a(655),
          i = a(5876),
          s = a(7056),
          l = a(2477),
          c = a(2188),
          d = a(7062),
          u = a(7294),
          h = a(7475),
          m = a(7176),
          p = a(3568),
          v = a(1628),
          g = a(6459),
          _ = a(9626),
          y = a(8261),
          b = a(6509),
          S = a(4790);
        let f = (o = class extends u.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new i.Nv()),
              (this.m_refWindowScrollPanel = u.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(o.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var a, o;
            null === (a = this.m_refWindowScrollPanel.current) ||
              void 0 === a ||
              a.scrollTo({
                left:
                  null === (o = this.m_refWindowScrollPanel.current) ||
                  void 0 === o
                    ? void 0
                    : o.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, a, o;
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
              r = { x: 0, y: -0.15, z: 0.1 };
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
                    null === (a = this.state.desktopView) || void 0 === a
                      ? void 0
                      : a.state.desktopIndices.map((e) => {
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
                            title: (0, p.Xx)("#Desktop_X", e),
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
                      var t, a, o;
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
                              null === (a = this.state.desktopView) ||
                                void 0 === a
                                ? void 0
                                : a.state.mapWindowInfo.get(e).sHwnd,
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
                u.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  u.createElement(g.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, p.Xx)("#AddView"),
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
          (f = o = (0, r.gn)([d.Pi], f));
        let R = (n = class extends u.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new i.Nv()),
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
                  var t, a;
                  const o =
                    null !==
                      (a =
                        null === (t = e.window_id) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== a
                      ? a
                      : "";
                  for (const [e, t] of this.state.mapWindowInfo.entries())
                    if (t.sHwnd == o)
                      return (
                        this.onWindowViewChange(e),
                        void VRHTML.VROverlay.ShowDashboard(m.gB)
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
              : VRHTML.VROverlay.FindOverlay(m.Xl))
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
                    (e = v.G3.settings.get(
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
              a = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));
            )
              a.push(t), t++;
            (null !==
              (e = v.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > a.length &&
              v.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: a });
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
                  title: (0, p.Xx)("#MultitaskingView"),
                  tooltipTranslation: e,
                  onClick: this.ShowMultitaskingView,
                }),
            );
          }
          render() {
            var e;
            const t =
                null ===
                  (e = v.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? m.ml
                  : null,
              a = m.Az + "::id.panel.desktop." + this.currentDesktopIndex,
              o = (e) =>
                u.createElement(
                  i.wx,
                  {
                    parent_id: e.parent_id,
                    translation: { x: e.x_offset, y: e.y_offset, z: 0.01 },
                  },
                  u.createElement(b.O, {
                    id: e.target_id + ".ResizeHandle",
                    target_id: e.target_id,
                    min_target_scale: m.k3,
                    max_target_scale: m.qV,
                    displacement: e.displacement,
                    bVisible: !0,
                    scale: e.scale,
                    tint: _.BV.GrabHandleTint,
                  }),
                );
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? u.createElement(i.sl, { mountedId: (0, i.iN)(m.GN, m.Xl) })
                : this.state.bIsReady
                  ? 0 === this.state.desktopIndices.length
                    ? u.createElement(
                        g.lL,
                        { visible: !0, summonOverlayKey: m.gB },
                        u.createElement(
                          "div",
                          { className: "NoDesktopFound" },
                          u.createElement(
                            "h2",
                            null,
                            (0, p.Xx)("#NoDesktopFound"),
                          ),
                        ),
                      )
                    : u.createElement(
                        u.Fragment,
                        null,
                        u.createElement(
                          i.s_,
                          {
                            id: a,
                            overlay_key:
                              -1 == this.currentDesktopIndex
                                ? this.state.sCurrentWindowOverlayKey
                                : "system.desktop." + this.currentDesktopIndex,
                            height: n.k_nDesktopPanelBaseHeight,
                            curvature_origin_id: t,
                            interactive: !0,
                            origin: i.Ic.BottomCenter,
                            debug_name: "System Desktop",
                            scale_index: (0, S.MH)(S.RA.Dashboard),
                          },
                          u.createElement(g.Yd, { summonOverlayKey: m.gB }),
                          u.createElement(i.sl, {
                            mountedId:
                              -1 == this.currentDesktopIndex
                                ? (0, i.iN)(
                                    m.GN,
                                    this.state.sCurrentWindowOverlayKey +
                                      ".cursor",
                                  )
                                : (0, i.iN)(
                                    m.GN,
                                    "system.desktop." +
                                      this.currentDesktopIndex +
                                      ".cursor",
                                  ),
                          }),
                        ),
                        u.createElement(o, {
                          parent_id: "DashboardPanel_" + m.gB + "_BottomRight",
                          scale: y.g.getUiScaleForLocation(S.RA.Dashboard),
                          target_id: a,
                          displacement: 0,
                          x_offset: 0.03,
                          y_offset: 0,
                        }),
                      )
                  : u.createElement(
                      g.lL,
                      { visible: !0, summonOverlayKey: m.gB },
                      u.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        u.createElement(
                          "h2",
                          null,
                          (0, p.Xx)("#DesktopViewsUpdating"),
                        ),
                      ),
                    )
              : null;
          }
        });
        (R.k_sMailboxName = "systemui_desktopview"),
          (R.k_nDesktopPanelBaseHeight = 2),
          (0, r.gn)([c.Fl], R.prototype, "desktopCount", null),
          (0, r.gn)([c.Fl], R.prototype, "sCurrentOverlayKey", null),
          (0, r.gn)([c.Fl], R.prototype, "currentDesktopIndex", null),
          (0, r.gn)([c.Fl], R.prototype, "currentWindowHwnd", null),
          (0, r.gn)([s.ZP], R.prototype, "onDesktopScaleChange", null),
          (0, r.gn)([s.ZP], R.prototype, "onDesktopChange", null),
          (0, r.gn)([s.ZP], R.prototype, "onDesktopViewUpdating", null),
          (0, r.gn)([s.ZP], R.prototype, "onDesktopViewReady", null),
          (0, r.gn)([s.ZP], R.prototype, "onWindowViewChange", null),
          (0, r.gn)([s.ZP], R.prototype, "ShowMultitaskingView", null),
          (R = n = (0, r.gn)([d.Pi], R));
      },
      6063: (e, t, a) => {
        "use strict";
        a.d(t, { J: () => u });
        var o = a(655),
          n = a(7294),
          r = a(7056),
          i = a(5876),
          s = a(7062),
          l = a(5177),
          c = a(421),
          d = a(8980);
        let u = class extends n.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: this.props.xfTransform
                  ? this.props.xfTransform
                  : (0, i.Oq)(),
                bActive: !1,
              });
          }
          componentDidUpdate(e, t) {
            var a;
            e.bVisible != this.props.bVisible &&
              (null === (a = this.props.bVisible) ||
                void 0 === a ||
                a ||
                this.endMove()),
              e.xfTransform != this.props.xfTransform &&
                this.setState({
                  xfTransform: this.props.xfTransform
                    ? this.props.xfTransform
                    : (0, i.Oq)(),
                });
          }
          startMove() {
            let e,
              t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
            if (t != i.Kf) {
              switch (
                VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)
              ) {
                case i.Kg.TrackedControllerRole_LeftHand:
                  e = "/user/hand/left/pose/tip";
                  break;
                case i.Kg.TrackedControllerRole_RightHand:
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
            const a = null === (e = this.props.bVisible) || void 0 === e || e,
              o = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
            return (
              a &&
              n.createElement(
                i.wx,
                null,
                n.createElement(
                  i.Dd,
                  { value: this.props.opacity },
                  n.createElement(
                    i.VW,
                    { color: this.props.tint },
                    n.createElement(
                      i.s_,
                      {
                        width: 0.66675 * o,
                        interactive: !0,
                        requires_laser: !0,
                        debug_name: "DashboardGrabHandle",
                        origin: i.Ic.BottomCenter,
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
        (u.contextType = c.E),
          (0, o.gn)([r.ZP], u.prototype, "startMove", null),
          (0, o.gn)([r.ZP], u.prototype, "endMove", null),
          (u = (0, o.gn)([s.Pi], u));
      },
      421: (e, t, a) => {
        "use strict";
        a.d(t, { E: () => s, Z: () => l });
        var o = a(655),
          n = a(5876),
          r = a(7062),
          i = a(7294);
        const s = i.createContext(void 0);
        let l = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = { transform: (0, n.Oq)(), parent_path: "" });
          }
          render() {
            return i.createElement(
              n.sO,
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
              i.createElement(s.Provider, { value: this }, this.props.children),
            );
          }
        };
        l = (0, o.gn)([r.Pi], l);
      },
      3033: (e, t, a) => {
        "use strict";
        a.d(t, { p: () => h });
        var o = a(5876),
          n = a(7294),
          r = a(7062),
          i = a(9626),
          s = a(7176),
          l = a(9764);
        function c(e) {
          const { children: t, invertParentPanelPitch: a, pitch: r } = e;
          return a || 0 != r
            ? n.createElement(
                o.wx,
                {
                  invert_parent_panel_pitch: null != a && a,
                  curvature_pitch: null != r ? r : 0,
                },
                t,
              )
            : n.createElement(n.Fragment, null, t);
        }
        function d(e) {
          let { children: t, offsetPixels: a, offsetMeters: r } = e;
          (a = null != a ? a : { x: 0, y: 0, z: 0 }),
            (r = null != r ? r : { x: 0, y: 0, z: 0 });
          const s = (0, o.ui)(
            r,
            (0, o.mT)(a, i.BV.m_fVRGamepadUI_MetersPerPixel),
          );
          return 0 != s.x || 0 != s.y || 0 != s.z
            ? n.createElement(o.wx, { translation: s }, t)
            : n.createElement(n.Fragment, null, t);
        }
        function u(e) {
          const { children: t, rotation: a } = e;
          return null == a || (0 == a.x && 0 == a.y && 0 == a.z)
            ? n.createElement(n.Fragment, null, t)
            : n.createElement(o.wx, { rotation: a }, t);
        }
        function h(e) {
          var t,
            a,
            r,
            l,
            h,
            m,
            p,
            v,
            g,
            _,
            y,
            b,
            S,
            f,
            R,
            k,
            V,
            C,
            w,
            M,
            T,
            L,
            E,
            I,
            D,
            O,
            x,
            H,
            P,
            B,
            A,
            G,
            N,
            F,
            U,
            z,
            W;
          const { popupRequest: K, reparent: q } = e,
            X = null == q || q,
            j = {
              x:
                null !==
                  (a =
                    null === (t = K.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== a
                  ? a
                  : 0,
              y:
                null !==
                  (l =
                    null === (r = K.origin_on_parent) || void 0 === r
                      ? void 0
                      : r.y) && void 0 !== l
                  ? l
                  : 0,
            },
            Z = {
              x:
                null !==
                  (m =
                    null === (h = K.origin_on_popup) || void 0 === h
                      ? void 0
                      : h.x) && void 0 !== m
                  ? m
                  : 0,
              y:
                null !==
                  (v =
                    null === (p = K.origin_on_popup) || void 0 === p
                      ? void 0
                      : p.y) && void 0 !== v
                  ? v
                  : 0,
            },
            J = {
              u:
                null !==
                  (_ =
                    null === (g = K.clip_rect) || void 0 === g
                      ? void 0
                      : g.u_min) && void 0 !== _
                  ? _
                  : 0,
              v:
                null !==
                  (b =
                    null === (y = K.clip_rect) || void 0 === y
                      ? void 0
                      : y.v_min) && void 0 !== b
                  ? b
                  : 0,
            },
            Q = {
              u:
                null !==
                  (f =
                    null === (S = K.clip_rect) || void 0 === S
                      ? void 0
                      : S.u_max) && void 0 !== f
                  ? f
                  : 1,
              v:
                null !==
                  (k =
                    null === (R = K.clip_rect) || void 0 === R
                      ? void 0
                      : R.v_max) && void 0 !== k
                  ? k
                  : 1,
            },
            Y = {
              x:
                null !==
                  (C =
                    null === (V = K.offset) || void 0 === V
                      ? void 0
                      : V.x_pixels) && void 0 !== C
                  ? C
                  : 0,
              y:
                null !==
                  (M =
                    null === (w = K.offset) || void 0 === w
                      ? void 0
                      : w.y_pixels) && void 0 !== M
                  ? M
                  : 0,
              z:
                null !==
                  (L =
                    null === (T = K.offset) || void 0 === T
                      ? void 0
                      : T.z_pixels) && void 0 !== L
                  ? L
                  : 0,
            },
            $ = {
              x:
                null !==
                  (I =
                    null === (E = K.offset) || void 0 === E
                      ? void 0
                      : E.x_meters) && void 0 !== I
                  ? I
                  : 0,
              y:
                null !==
                  (O =
                    null === (D = K.offset) || void 0 === D
                      ? void 0
                      : D.y_meters) && void 0 !== O
                  ? O
                  : 0,
              z:
                null !==
                  (H =
                    null === (x = K.offset) || void 0 === x
                      ? void 0
                      : x.z_meters) && void 0 !== H
                  ? H
                  : 0,
            },
            ee = {
              x:
                null !==
                  (B =
                    null === (P = K.rotation) || void 0 === P
                      ? void 0
                      : P.pitch_degrees) && void 0 !== B
                  ? B
                  : 0,
              y:
                null !==
                  (G =
                    null === (A = K.rotation) || void 0 === A
                      ? void 0
                      : A.yaw_degrees) && void 0 !== G
                  ? G
                  : 0,
            },
            te = null === (N = K.inherit_parent_pitch) || void 0 === N || N,
            ae = null === (F = K.inherit_parent_curvature) || void 0 === F || F,
            oe = null === (U = K.interactive) || void 0 === U || U,
            ne = null !== (z = K.requires_laser) && void 0 !== z && z,
            re =
              1 == (null !== (W = K.sort_order) && void 0 !== W ? W : 0)
                ? 101
                : null,
            ie = (function (e) {
              var t, a, o;
              const n =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                r =
                  null !==
                    (o =
                      null === (a = null == e ? void 0 : e.offset) ||
                      void 0 === a
                        ? void 0
                        : a.z_pixels) && void 0 !== o
                    ? o
                    : 0;
              return n == s.BZ && r >= 0 ? -0.5 : 0;
            })(K);
          n.useLayoutEffect(
            () => o.n0.Current().forceLayoutUpdate(),
            [J.u, J.v, Q.u, Q.v],
          );
          const se = n.createElement(
            c,
            { invertParentPanelPitch: !te },
            n.createElement(
              d,
              { offsetPixels: Y, offsetMeters: $ },
              n.createElement(
                u,
                { rotation: ee },
                n.createElement(o.s_, {
                  debug_name: `VRGamepadUI-PooledPopup-${K.dashboard_popup_request_id}`,
                  interactive: oe,
                  requires_laser: ne,
                  curvature: ae ? "inherit-from-parent-panel" : void 0,
                  overlay_key: K.popup_overlay_key,
                  origin: Z,
                  meters_per_pixel: i.BV.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.03,
                  sort_depth_bias: ie,
                  uv_min: J,
                  uv_max: Q,
                  sort_order: re,
                }),
              ),
            ),
          );
          return K.parent_device_path
            ? n.createElement(o.wx, { parent_path: K.parent_device_path }, se)
            : X
              ? n.createElement(
                  o.Sb,
                  {
                    parent_overlay_key: K.parent_overlay_key,
                    key: K.dashboard_popup_request_id,
                  },
                  n.createElement(
                    o.at,
                    { key: K.dashboard_popup_request_id, location: j },
                    se,
                  ),
                )
              : n.createElement(
                  o.at,
                  { key: K.dashboard_popup_request_id, location: j },
                  se,
                );
        }
        (0, r.Pi)((e) => {
          const t = l.J.GetActivePooledPopups();
          return n.createElement(
            n.Fragment,
            null,
            t.map((e) =>
              n.createElement(h, {
                popupRequest: e,
                key: e.dashboard_popup_request_id,
              }),
            ),
          );
        });
      },
      6509: (e, t, a) => {
        "use strict";
        a.d(t, { O: () => d });
        var o = a(655),
          n = a(7294),
          r = a(7056),
          i = a(7062),
          s = a(5177),
          l = a(8980),
          c = a(5876);
        let d = class extends n.Component {
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
              a = 0.2667 * t;
            return n.createElement(
              c.wx,
              { ignore_parent_scale: !0 },
              n.createElement(
                c.kL,
                {
                  id: this.props.id,
                  target_id: this.props.target_id,
                  is_active: this.state.bActive,
                  min_target_scale: this.props.min_target_scale,
                  max_target_scale: this.props.max_target_scale,
                  displacement: this.props.displacement,
                },
                n.createElement(
                  c.Dd,
                  { value: this.props.opacity },
                  n.createElement(
                    c.VW,
                    { color: this.props.tint },
                    n.createElement(
                      c.wx,
                      { translation: { y: a / 2 } },
                      n.createElement(
                        c.s_,
                        {
                          height: a,
                          interactive: !0,
                          requires_laser: !0,
                          debug_name: "ResizeHandle",
                          hide_lasermouse_when_clicking: !0,
                        },
                        n.createElement(
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
                          n.createElement("div", {
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
        (0, o.gn)([r.ZP], d.prototype, "startMove", null),
          (0, o.gn)([r.ZP], d.prototype, "endMove", null),
          (d = (0, o.gn)([i.Pi], d));
      },
      1283: (e, t, a) => {
        "use strict";
        a.d(t, { s: () => g });
        var o = a(655),
          n = a(7294),
          r = a(7062),
          i = a(7056),
          s = a(3568),
          l = a(5211),
          c = a(4285),
          d = a(2188),
          u = a(9809),
          h = a(5177),
          m = a(8980),
          p = a(8242);
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
            let a = t;
            const o = "vive_tracker";
            a.includes(o) &&
              (a = a.substring(a.indexOf(o) + o.length, a.length));
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
              n.createElement(
                p.GV,
                { className: "SettingsItem TrackerEntry" },
                n.createElement(
                  "div",
                  { className: "Label", title: t },
                  n.createElement("span", null, a),
                  n.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected",
                    ),
                    className: (0, m.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", c.E.connected && this.IsConnected()],
                      ["Disconnected", c.E.connected && !this.IsConnected()],
                    ),
                  }),
                ),
                n.createElement(
                  "div",
                  { className: (0, m.LJ)("SubsectionStem") },
                  n.createElement(
                    p.GV,
                    { title: r },
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
                  n.createElement(p.Xp, {
                    label: (0, s.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, s.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    n.createElement(p.Xp, {
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
        (0, o.gn)([d.Fl], v.prototype, "trackerConfig", null),
          (0, o.gn)([i.ak], v.prototype, "OnTrackerRoleChanged", null),
          (0, o.gn)([i.ak], v.prototype, "OnControllerRoleChanged", null),
          (0, o.gn)([i.ak], v.prototype, "BuzzTracker", null),
          (0, o.gn)([d.Fl], v.prototype, "deviceInfo", null),
          (v = (0, o.gn)([r.Pi], v));
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
                (e = t.trackers.map((e, a) =>
                  n.createElement(v, {
                    key: a,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              n.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        g = (0, o.gn)([r.Pi], g);
      },
      6698: (e, t, a) => {
        "use strict";
        a.d(t, {
          SV: () => h,
          X7: () => d,
          Y2: () => c,
          gR: () => u,
          ur: () => r,
          yR: () => i,
        });
        var o = a(655),
          n = a(7294);
        function r(e) {
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
              e,
            ),
            n.createElement(
              "g",
              null,
              n.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              }),
            ),
          );
        }
        function i(e) {
          return n.createElement(
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
            n.createElement("path", {
              d: "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
            }),
          );
        }
        function s(e) {
          return n.createElement(
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
            n.createElement("path", {
              fill: "currentColor",
              d: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
            }),
          );
        }
        function l(e) {
          return n.createElement(
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
            n.createElement("path", {
              fill: "currentColor",
              d: "M1 30.6985L7.90454 23.7939C6.78948 23.3564 6 22.2705 6 21.0002C6 19.3434 7.34315 18.0002 9 18.0002C10.2703 18.0002 11.3561 18.7897 11.7937 19.9048L22.6985 9H11V15.3415C10.3744 15.1203 9.70126 15 9 15C8.65929 15 8.32521 15.0284 8 15.083V6H25.6985L30.6985 1L32.8198 3.12132L3.12132 32.8198L1 30.6985Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M22.0095 18.1743L18.1741 22.0097C18.5886 23.17 19.6973 24.0002 21 24.0002C22.6569 24.0002 24 22.6571 24 21.0002C24 19.6976 23.1697 18.5888 22.0095 18.1743Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M8.18356 32.0002H14V30.0002C14 28.9217 13.6585 27.9229 13.0777 27.1061L8.18356 32.0002Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M26 30.0002C26 27.2388 23.7614 25.0002 21 25.0002C18.2386 25.0002 16 27.2388 16 30.0002V32.0002H26V30.0002Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M29 19V11.1836L32 8.18356V22H26.917C26.9716 21.6748 27 21.3407 27 21C27 20.2987 26.8797 19.6256 26.6585 19H29Z",
            }),
          );
        }
        function c(e) {
          const { off: t } = e,
            a = (0, o._T)(e, ["off"]);
          return t
            ? n.createElement(l, Object.assign({}, a))
            : n.createElement(s, Object.assign({}, a));
        }
        function d(e) {
          const { none: t, partial: a, right: r, left: i } = e,
            s = (0, o._T)(e, ["none", "partial", "right", "left"]);
          return t
            ? n.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "SVGIcon_Button SVGIcon_ControllerStatus",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  s,
                ),
                n.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : a || r
              ? n.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    s,
                  ),
                  n.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  n.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.5",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : i
                ? n.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "SVGIcon_Button SVGIcon_ControllerStatus",
                        viewBox: "0 0 36 36",
                        fill: "none",
                      },
                      s,
                    ),
                    n.createElement("path", {
                      fill: "currentColor",
                      opacity: "0.5",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                    }),
                    n.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                    }),
                  )
                : n.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "SVGIcon_Button SVGIcon_ControllerStatus",
                        viewBox: "0 0 36 36",
                        fill: "none",
                      },
                      s,
                    ),
                    n.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                    }),
                  );
        }
        function u(e) {
          return n.createElement(
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
            n.createElement("path", {
              d: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
              fill: "currentColor",
            }),
          );
        }
        function h(e) {
          return n.createElement(
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
            n.createElement("path", {
              fill: "currentColor",
              d: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M8 31.3209L11.2 34.5391L18 27.73L24.8182 34.5391L28 31.3209L18 21.3209L8 31.3209Z",
            }),
          );
        }
      },
      2477: (e, t, a) => {
        "use strict";
        a.d(t, { Q: () => l });
        var o = a(655),
          n = a(5876),
          r = a(328),
          i = a(4820);
        const s = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new r.fH(this, i.Al)),
              (this.m_Steam_Client = new r.q0(this)),
              (this.m_Steam_ClientMethods = new i.x2(this.m_Steam_Client)),
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
            let a, o;
            try {
              a = i.Vg.fromObject(e).serializeBase64String();
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
                header: a,
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
    a = {};
  function o(e) {
    var n = a[e];
    if (void 0 !== n) return n.exports;
    var r = (a[e] = { id: e, exports: {} });
    return t[e].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, a, n, r) => {
      if (!a) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [a, n, r] = e[d], s = !0, l = 0; l < a.length; l++)
            (!1 & r || i >= r) && Object.keys(o.O).every((e) => o.O[e](a[l]))
              ? a.splice(l--, 1)
              : ((s = !1), r < i && (i = r));
          if (s) {
            e.splice(d--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      r = r || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
      e[d] = [a, n, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var a in t)
        o.o(t, a) &&
          !o.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
      var t = (t, a) => {
          var n,
            r,
            [i, s, l] = a,
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (n in s) o.o(s, n) && (o.m[n] = s[n]);
            if (l) var d = l(o);
          }
          for (t && t(a); c < i.length; c++)
            (r = i[c]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(d);
        },
        a = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (o.nc = void 0);
  var n = o.O(void 0, [968, 683], () => o(1983));
  n = o.O(n);
})();
//# sourceMappingURL=settings_desktop.js.map?v=982840b07a69ff740604
