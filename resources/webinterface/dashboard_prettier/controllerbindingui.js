/*! For license information please see controllerbindingui.js.LICENSE.txt */
(() => {
  var e,
    t = {
      5928: (e, t, n) => {
        "use strict";
        n.d(t, { L: () => C });
        var o,
          i = n(655),
          a = n(7294),
          r = n(7056),
          s = n(3568),
          l = n(5876),
          c = n(9809),
          d = n(5211),
          p = n(2893),
          h = n(7062),
          u = n(2188),
          m = n(8242),
          g = n(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(o || (o = {}));
        class v extends a.Component {
          constructor(e) {
            super(e),
              (this.m_containerRef = null),
              (this.m_nameRef = null),
              (this.m_svgRef = null),
              (this.m_containerRef = a.createRef()),
              (this.m_nameRef = a.createRef()),
              (this.m_svgRef = a.createRef()),
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
              a.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                a.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                }),
              )
            );
          }
          renderBar(e, t, n) {
            let o = { width: String(100 * n) + "%" };
            return a.createElement(
              "div",
              { className: "TriggerBar " + t },
              a.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, s.Xx)(e),
              ),
              a.createElement(
                "div",
                { className: "TriggerBarBackground" },
                a.createElement("div", {
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
                a = this.m_nameRef.current.getBoundingClientRect(),
                r = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new d.E9(0, a.top + a.height / 2);
              l.x = i ? r.left - 10 : r.right + 10;
              let c = i ? -20 : 20,
                p = l.x + c + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", p);
              let h = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
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
              a.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                a.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  a.createElement(
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
                a.createElement(
                  "svg",
                  {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.m_svgRef,
                  },
                  a.createElement(
                    "defs",
                    null,
                    a.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      a.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      a.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      }),
                    ),
                  ),
                  a.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  a.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  a.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  }),
                ),
              )
            );
          }
        }
        (0, i.gn)([r.ak], v.prototype, "ComponentUpdated", null),
          (0, i.gn)([r.ak], v.prototype, "UpdateSVGPath", null);
        class _ extends v {
          constructor(e) {
            super(e);
          }
        }
        class S extends v {
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
            return a.createElement(
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
        class y extends v {
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
              a.createElement(
                "div",
                {
                  className:
                    "TrackpadVisualizerContainer" +
                    (this.state.touch ? " Touched" : ""),
                },
                a.createElement(
                  "div",
                  { className: "TrackpadPosition" },
                  a.createElement(
                    "div",
                    { className: "VisualizerLabel" },
                    (0, s.Xx)("#SourceInputMode_Position"),
                  ),
                  a.createElement(
                    "div",
                    { className: "TrackpadVisualizerContainer" },
                    a.createElement(
                      "div",
                      { className: "TrackpadVisualizerBackground" },
                      e &&
                        a.createElement(
                          "div",
                          { style: e },
                          a.createElement(
                            "div",
                            { className: "TrackpadVisualizerPipContainer" },
                            a.createElement("div", { className: t }),
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
        class b extends a.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = a.createRef()),
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
          renderSource(e, t, n) {
            let o = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return a.createElement(_, {
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
                return a.createElement(S, {
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
                return a.createElement(y, {
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
                return a.createElement(
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
                ? a.createElement(
                    "div",
                    { className: "VisualizerImageContainer" },
                    a.createElement("img", {
                      className: "VisualizerImage",
                      ref: this.m_imageRef,
                      onLoad: this.OnImageLoaded,
                      src: e,
                      style: { transform: t },
                    }),
                    a.createElement(p.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              n = this.ControllerTypeInfo,
              i = 0,
              r = [];
            for (let e in n.input_source) {
              let t = n.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let o = this.EstimateSourceHeight(t);
              (i += o),
                r.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: o,
                });
            }
            let s = 8;
            i > 16 && (s = i / 2);
            let l = 0,
              c = r.sort((e, t) => e.order - t.order);
            for (let n of c) {
              l += n.height;
              let i = l > s ? o.Right : o.Left,
                a = this.renderSource(n.sSourcePath, n.inputSource, i);
              a && (i == o.Left ? e.push(a) : t.push(a));
            }
            return a.createElement(
              "div",
              { className: "ControllerVisualizer" },
              a.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e,
              ),
              this.renderImage(),
              a.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t,
              ),
            );
          }
        }
        (0, i.gn)([r.ak], b.prototype, "OnImageLoaded", null),
          (0, i.gn)([r.ak], b.prototype, "OnImageReflow", null);
        let C = class extends a.Component {
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
            return c.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
            );
          }
          render() {
            let e,
              t = [],
              n = this.GetSortedDevices();
            if (!n)
              return a.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, s.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                a.createElement(
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
            return a.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: a.createElement(m.U5, {
                  leftControls: [
                    a.createElement(g.hu, {
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
                a.createElement(b, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                }),
            );
          }
        };
        (0, i.gn)([r.ak], C.prototype, "OnConnectedDevicesChanged", null),
          (0, i.gn)([r.ak], C.prototype, "OnUpdateComponentStates", null),
          (C = (0, i.gn)([h.Pi], C));
      },
      9671: (e, t, n) => {
        "use strict";
        n.d(t, { V: () => c });
        var o = n(655),
          i = n(7294),
          a = n(7056),
          r = n(3568),
          s = n(5876);
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
                  (0, r.Xx)("#LegacyDebugger_NoApp"),
                );
          }
        }
        (0, o.gn)([a.ak], l.prototype, "OnLegacyInputFrame", null);
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
      792: (e, t, n) => {
        "use strict";
        n.d(t, { C: () => u, w: () => o });
        var o,
          i = n(655),
          a = n(7056),
          r = n(2188),
          s = n(5876),
          l = n(9942),
          c = n(1628),
          d = n(9626),
          p = n(8547);
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
            return (0, i.mG)(this, void 0, void 0, function* () {
              yield this.Load(),
                (0, r.EH)(() => this.Save()),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForChaperoneStatusEvents(
                    this.onChaperoneStatusEvents,
                  ),
                (0, r.U5)(
                  () => this.m_bOkOutsideOfPlayspace,
                  (e) => {
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperone.SetOkOutsidePlayspace(e);
                  },
                ),
                (0, r.U5)(
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
            let n = !!(null === VRHTML || void 0 === VRHTML
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
                !n &&
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
                    VRHTML.VRChaperoneSetup.SetPlayspaceMode(p.yv.Circle)
                  : e == o.RoomSetupPlayspaceDrawn
                    ? null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperoneSetup.SetPlayspaceMode(p.yv.Drawn)
                    : null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperoneSetup.SetPlayspaceMode(p.yv.None),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperoneSetup.NotifyRoomSetupStep(e, !!t),
                (this.m_eRoomSetupStep = e);
            }
          }
          Load() {
            var e, t, n, o, a;
            return (0, i.mG)(this, void 0, void 0, function* () {
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
                    (n = c.G3.settings.get(
                      "/settings/steamvr/backgroundDomeRadius",
                    )) && void 0 !== n
                    ? n
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
                    (a = c.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetZ",
                    )) && void 0 !== a
                    ? a
                    : 0);
            });
          }
          Save() {
            return (0, i.mG)(this, void 0, void 0, function* () {});
          }
          onChaperoneStatusEvents(e) {
            const t = !!(1 & e),
              n = !!(2 & e);
            t != this.m_bBoundsVisible && (this.m_bBoundsVisible = t),
              n != this.m_bHmdOutOfBoundsStrict &&
                (this.m_bHmdOutOfBoundsStrict = n);
          }
        }
        (0, i.gn)([r.LO], h.prototype, "m_bShowFloor", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_bShowFloorFar", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_fBackgroundOffsetX", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_bBoundsVisible", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_bHmdOutOfBoundsStrict", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_bOkOutsideOfPlayspace", void 0),
          (0, i.gn)([r.LO], h.prototype, "m_eRoomSetupStep", void 0),
          (0, i.gn)([r.aD], h.prototype, "setRoomSetupStep", null),
          (0, i.gn)([a.ak], h.prototype, "Load", null),
          (0, i.gn)([a.ak], h.prototype, "Save", null),
          (0, i.gn)([a.ak], h.prototype, "onChaperoneStatusEvents", null);
        const u = new h();
        window.ConstructStore = u;
      },
      9626: (e, t, n) => {
        "use strict";
        n.d(t, {
          A3: () => g,
          BV: () => b,
          Dz: () => v,
          J_: () => u,
          fq: () => m,
        });
        var o = n(655),
          i = n(5876),
          a = n(7056),
          r = n(2188),
          s = n(4790),
          l = n(1628),
          c = n(7176),
          d = n(8261),
          p = n(2758),
          h = n(3107);
        const u = ["system.dashboard.quicklaunch", void 0].filter(Boolean);
        var m, g, v, _;
        function S(e) {
          return (
            !(!(null == e ? void 0 : e.startsWith(c.wX)) || e == c.T2) ||
            e == c.AC
          );
        }
        !(function (e) {
          (e[(e.Large = 0)] = "Large"), (e[(e.Medium = 1)] = "Medium");
        })(m || (m = {})),
          (function (e) {
            (e[(e.PlayArea = 0)] = "PlayArea"),
              (e[(e.Dashboard = 1)] = "Dashboard");
          })(g || (g = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.View = 1)] = "View"),
              (e[(e.Theater = 2)] = "Theater");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Persistent = 0)] = "Persistent"),
              (e[(e.OnDemand = 1)] = "OnDemand");
          })(_ || (_ = {}));
        class y {
          constructor() {
            (this.m_bPreviousDashboardVisible = void 0),
              (this.m_bVS = !1),
              (this.m_eVSMode = v.None),
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
          get activeLinkServer() {
            return this.m_bIsLinkServer && this.m_bLinkStreamActive;
          }
          Init() {
            var e;
            return (0, o.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, r.EH)(() => this.SaveSessionDevData()),
                (0, r.EH)(this.updateBodyClasses),
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
                (0, r.U5)(
                  () => this.isTheaterMode,
                  (e) => {
                    VRHTML.VRCompositor.SetAnimatedValue(
                      i.uM.TheaterFast,
                      e,
                      0.25,
                    ),
                      VRHTML.VRCompositor.SetAnimatedValue(
                        i.uM.TheaterSlow,
                        e,
                        e ? 2 : 1,
                      );
                  },
                ),
                VRHTML.VRCompositor.SetAnimatedValue(
                  i.uM.TheaterFast,
                  this.isTheaterMode,
                  0,
                ),
                VRHTML.VRCompositor.SetAnimatedValue(
                  i.uM.TheaterSlow,
                  this.isTheaterMode,
                  0,
                ),
                (0, r.U5)(
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
            var e, t, n, i, a;
            return (0, o.mG)(this, void 0, void 0, function* () {
              const o = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(y.k_strSessionStorageKey)) &&
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
              for (const e of null !== (a = o.m_rgPooledPopups) && void 0 !== a
                ? a
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
                y.k_strSessionStorageKey,
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
              for (const [e, n] of this.m_mapOverlayState.entries())
                if (n.dockLocation == t && S(e)) return e;
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
            for (const [n, o] of this.m_mapOverlayState.entries())
              o.dockLocation == s.RA.Theater &&
                ((o.dockLocation = e),
                t &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(n)));
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
              n = !!(2 & e),
              o = !!(4 & e),
              i = 8 & e ? _.OnDemand : _.Persistent;
            t != this.m_bLinkStreamActive && (this.m_bLinkStreamActive = t),
              n != this.m_bIsLinkClient && (this.m_bIsLinkClient = n),
              o != this.m_bIsLinkServer && (this.m_bIsLinkServer = o),
              i != this.m_streamingMode && (this.m_streamingMode = i);
          }
        }
        (y.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
          (0, o.gn)([r.LO], y.prototype, "m_bDashboardVisible", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_bShowLegacyBar", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_bVS", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_eVSMode", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_sVSOverlayKey", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_nNumRemoteUsers", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_nNumRemoteVS", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_eTheaterStereo", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_eIncognitoMode", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_mapOverlayState", void 0),
          (0, o.gn)(
            [r.LO],
            y.prototype,
            "m_setOverlaysViewedThisSession",
            void 0,
          ),
          (0, o.gn)(
            [r.LO],
            y.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, o.gn)(
            [r.LO],
            y.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, o.gn)(
            [r.LO],
            y.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, o.gn)([r.LO], y.prototype, "m_bRoomViewActive", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_bRoomViewStreaming", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_bGamepadFocusActive", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_bLinkStreamActive", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_bIsLinkClient", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_bIsLinkServer", void 0),
          (0, o.gn)([r.LO], y.prototype, "m_streamingMode", void 0),
          (0, o.gn)([a.ak], y.prototype, "LoadSessionDevData", null),
          (0, o.gn)([a.ak], y.prototype, "SaveSessionDevData", null),
          (0, o.gn)([r.Fl], y.prototype, "isTheaterMode", null),
          (0, o.gn)([r.Fl], y.prototype, "priorityGamepadFocusOverlay", null),
          (0, o.gn)([r.Fl], y.prototype, "eTheaterCurvature", null),
          (0, o.gn)([r.aD], y.prototype, "setIncognitoMode", null),
          (0, o.gn)([r.Fl], y.prototype, "WorldLightingGain", null),
          (0, o.gn)([r.Fl], y.prototype, "isVRGamepadUIReady", null),
          (0, o.gn)([r.Fl], y.prototype, "isVRGamepadUI", null),
          (0, o.gn)([a.ak], y.prototype, "updateBodyClasses", null),
          (0, o.gn)([a.ak], y.prototype, "onRoomViewChanged", null),
          (0, o.gn)([a.ak], y.prototype, "onRoomViewStreamChanged", null),
          (0, o.gn)([a.ak], y.prototype, "onGamepadFocusChanged", null),
          (0, o.gn)([a.ak], y.prototype, "onLinkStreamStatusEvents", null);
        const b = new y();
        window.DashboardStore = b;
      },
      1176: (e, t, n) => {
        "use strict";
        var o = n(655),
          i = n(7294),
          a = n(3935),
          r = n(7062),
          s = n(3365),
          l = (n(1783), n(5876)),
          c = n(8980),
          d = n(3568),
          p = n(5211),
          h = n(7056),
          u = n(8048),
          m = n(2893),
          g = n(2188),
          v = n(1114),
          _ = n(8155),
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
            let n = t.map(
              (e, t) =>
                new _.GZ(
                  e,
                  (0, d.Xx)("#SourceInputMode_" + e),
                  null,
                  (0, d.Xx)("#SourceInputMode_" + e + "_tooltip"),
                ),
            );
            n.push(new _.GZ("none", (0, d.Xx)("#SourceInputMode_none")));
            let o =
                1 == e.GetButtonSide
                  ? "#BindingUI_LeftHandController"
                  : "#BindingUI_RightHandController",
              a = p.c6.SelectedControllerTypeLocalizedName;
            0 != e.GetButtonSide && (a = (0, d.Xx)(o, a, ""));
            let r = (0, d.Xx)(
              "#SourceInputMode_SelectMode",
              a,
              e.GetControllerInputName,
            );
            return i.createElement(
              "div",
              { className: "FlexRow BindingHeaderWrapper" },
              i.createElement(_.vs, {
                sModalTitleString: r,
                vecOptions: n,
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
        (0, o.gn)([h.ak], y.prototype, "OnDelete", null),
          (0, o.gn)([h.ak], y.prototype, "OnDeleteConfirmed", null),
          (0, o.gn)([h.ak], y.prototype, "OnDeleteCancel", null),
          (0, o.gn)([h.ak], y.prototype, "OnSourceModeChanged", null),
          (0, o.gn)([h.ak], y.prototype, "renderDeleteConfirmModal", null),
          (y = (0, o.gn)([r.Pi], y));
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
                    content: (0, d.Xx)(
                      this.props.sLocalizedInputType + "_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "div",
                    { className: o },
                    (0, d.Xx)(this.props.sLocalizedInputType),
                  ),
                ),
                !this.props.bReadOnly &&
                  i.createElement(_.vs, {
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
        class C extends i.Component {
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
            e.push(new _.GZ("-blank", "")),
              e.push(new _.GZ("none", (0, d.Xx)("#SourceInputAction_none")));
          }
          AddBlankItem(e) {
            e.push(new _.GZ("-blank", ""));
          }
          AddNoActionsItem(e) {
            e.push(
              new _.GZ("-nonitem", (0, d.Xx)("#SourceInputAction_NoItems")),
            );
          }
          AddHeaderItem(e, t) {
            e.push(new _.GZ("-subHeader", (0, d.Xx)(t)));
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
                  " (" + (0, d.Xx)("#BindingUI_SelectAction_Required") + ")"),
              new _.GZ(e.name, n, t)
            );
          }
        }
        (0, o.gn)([h.ak], C.prototype, "onPropertyChanged", null),
          (0, o.gn)([h.ak], C.prototype, "onPropertyReset", null),
          (0, o.gn)([h.ak], C.prototype, "OnEdit", null),
          (0, o.gn)([h.ak], C.prototype, "OnShowModeSettings", null),
          (0, o.gn)([h.ak], C.prototype, "CloseModeSettings", null),
          (0, o.gn)([h.ak], C.prototype, "renderFooter", null),
          (0, o.gn)([h.ak], C.prototype, "renderHeader", null),
          (0, o.gn)([g.Fl], C.prototype, "WrapperClasses", null);
        class f extends i.Component {
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
        class E extends i.Component {
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
                i.createElement(_.vs, {
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
        let I = class extends C {
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
                mode: "click",
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
              (0, v.enableUniqueIds)(this);
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
              n,
              o = this.props.controllerWatcher[0].GetInputSource,
              a = [];
            o.click &&
              a.push(
                new _.GZ("click", this.LocalizeForceInputModeString("click")),
              ),
              o.touch &&
                a.push(
                  new _.GZ("touch", this.LocalizeForceInputModeString("touch")),
                ),
              o.value &&
                a.push(
                  new _.GZ("value", this.LocalizeForceInputModeString("value")),
                ),
              o.force &&
                a.push(
                  new _.GZ("force", this.LocalizeForceInputModeString("force")),
                ),
              a.length > 1 &&
                a.push(new _.GZ("", this.LocalizeForceInputModeString("")));
            let r = this.BShowClickOptions,
              s = this.BShowTouchOptions,
              l = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (l = this.nextUniqueId()),
              r &&
                (e = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                      (0, d.Xx)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                n,
                a.length > 1 &&
                  i.createElement(E, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: l,
                    vecValues: a,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(f, {
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
                i.createElement(f, {
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
                i.createElement(f, {
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
        (0, o.gn)([h.ak], I.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], I.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([g.Fl], I.prototype, "BShowClickOptions", null),
          (0, o.gn)([g.Fl], I.prototype, "BShowTouchOptions", null),
          (I = (0, o.gn)([r.Pi], I));
        let M = class extends C {
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
              n,
              o = this.props.controllerWatcher[0],
              a = (o.GetInputSource, this.RInputOptions),
              r = [];
            a.length > 1 && a.push("");
            for (let e of a)
              r.push(new _.GZ(e, this.LocalizeForceInputModeString(e)));
            let s = this.BShowClickOptions,
              l = this.BShowTouchOptions,
              c = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (c = this.nextUniqueId()),
              s &&
                (e = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                (n = [
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
                n,
                r.length > 1 &&
                  i.createElement(E, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: c,
                    vecValues: r,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(f, {
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
                i.createElement(f, {
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
                i.createElement(f, {
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
                    i.createElement(f, {
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
                    i.createElement(f, {
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
                o.GetInputSourceTouchSupport &&
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
                    (0, d.Xx)("#SourceInputMode_MoreOptions"),
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
          (M = (0, o.gn)([r.Pi], M));
        let R = class extends C {
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
                i.createElement(f, {
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
                i.createElement(f, {
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
        (0, o.gn)([h.ak], R.prototype, "OnHeldActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnLongActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnSingleActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnDoubleActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], R.prototype, "OnTouchActionChanged", null),
          (R = (0, o.gn)([r.Pi], R));
        let T = class extends C {
          render() {
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              this.renderFooter(),
            );
          }
        };
        T = (0, o.gn)([r.Pi], T);
        let w = class extends C {
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
                i.createElement(f, {
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
                i.createElement(f, {
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
                new _.GZ("click", (0, d.Xx)("#SourceInputMode_Click")),
                new _.GZ("touch", (0, d.Xx)("#SourceInputMode_Touch")),
              ],
              a =
                (this.state.sSubMode,
                "click" == this.state.sSubMode
                  ? (0, d.Xx)("#SourceInputMode_Click")
                  : (0, d.Xx)("#SourceInputMode_Touch"));
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
                    (0, d.Xx)("#SourceInputMode_SubMode"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label BindingLabel BindingAction" },
                    this.state.bEditMode &&
                      i.createElement(_.vs, {
                        sLocalizedSelectedItem: a,
                        sValueSelectedItem: this.state.sSubMode,
                        vecOptions: o,
                        fnOptionSelected: this.onPropertyChanged.bind(
                          this,
                          "sub_mode",
                        ),
                      }),
                    !this.state.bEditMode && a,
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
        (0, o.gn)([h.ak], w.prototype, "OnActionChanged", null),
          (w = (0, o.gn)([r.Pi], w));
        let O = class extends C {
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
                o = t ? ("x" == o ? "xy" : "y") : "xy" == o ? "x" : "";
                break;
              case "x":
                o = t ? ("y" == o ? "xy" : "x") : "xy" == o ? "y" : "";
            }
            n.SetTrackpadInvertState(this.props.iMode, o),
              this.setState({ eTrackpadInvertMode: o });
          }
          OnTrackpadInvertModeReset() {
            this.setState({ eTrackpadInvertMode: "" });
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
                    i.createElement(f, {
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
                    i.createElement(f, {
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
                    "y" == this.state.eTrackpadInvertMode ||
                    "xy" == this.state.eTrackpadInvertMode,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "y"),
                }),
                i.createElement(k, {
                  labelName: "#SourceInputMode_InvertXAxis",
                  elementId: e,
                  value:
                    "x" == this.state.eTrackpadInvertMode ||
                    "xy" == this.state.eTrackpadInvertMode,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "x"),
                }),
                i.createElement(f, {
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
                i.createElement(f, {
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
                i.createElement(f, {
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
        (0, o.gn)([h.ak], O.prototype, "OnTrackpadInvertModeChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnTrackpadInvertModeReset", null),
          (0, o.gn)([h.ak], O.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([h.ak], O.prototype, "OnPositionActionChanged", null),
          (O = (0, o.gn)([r.Pi], O));
        let V = class extends C {
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
                new _.GZ("smooth", this.LocalizeScrollModeString("smooth")),
                new _.GZ("discrete", this.LocalizeScrollModeString("discrete")),
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
                    (0, d.Xx)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "InputSettingsScrollablePanel" },
                i.createElement(E, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
        (0, o.gn)([h.ak], V.prototype, "OnSave", null),
          (0, o.gn)([h.ak], V.prototype, "OnScrollActionChanged", null),
          (V = (0, o.gn)([r.Pi], V));
        let L = class extends C {
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
        (0, o.gn)([h.ak], L.prototype, "OnClickActionChanged", null),
          (0, o.gn)([h.ak], L.prototype, "OnTouchActionChanged", null),
          (0, o.gn)([h.ak], L.prototype, "OnPullActionChanged", null),
          (L = (0, o.gn)([r.Pi], L));
        let x = class extends C {
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
          (x = (0, o.gn)([r.Pi], x));
        let A = class extends C {
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
              (0, v.enableUniqueIds)(this);
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
              e.toString() + " " + (0, d.Xx)("#MetersPerSecond_Abbreviation")
            );
          }
          renderSettingsContent() {
            let e = this.props.controllerWatcher[0],
              t = "pinch" == e.GetInputSourceType,
              n = (0, d.Xx)(
                "pinch" == e.GetInputSourceType
                  ? "#SourceInputMode_Pull"
                  : "#SourceInputMode_Proximity",
              ),
              a = !("pinch" == e.GetInputSourceType),
              r = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (r = this.nextUniqueId()),
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
                    i.createElement(f, {
                      labelName: "#SourceInputMode_CapsenseEnableThreshold",
                      elementId: r,
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
                  i.createElement(f, {
                    labelName: "#SourceInputMode_GrabThreshold",
                    elementId: r,
                    halfSplit: a,
                    min: 0,
                    max: a ? 2 : 1,
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
                        (0, d.Xx)("#SourceInputMode_Force"),
                      ),
                  }),
                  i.createElement(f, {
                    labelName: "#SourceInputMode_ReleaseThreshold",
                    elementId: r,
                    halfSplit: a,
                    min: 0,
                    max: a ? 2 : 1,
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
                      i.createElement(f, {
                        labelName: "#SourceInputMode_ForceHoldThreshold",
                        elementId: r,
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
                      i.createElement(f, {
                        labelName: "#SourceInputMode_ForceReleaseThreshold",
                        elementId: r,
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
                      i.createElement(f, {
                        labelName: "#SourceInputMode_DowngradeSpeed",
                        elementId: r,
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
                      i.createElement(f, {
                        labelName: "#SourceInputMode_DropSpeed",
                        elementId: r,
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
        (0, o.gn)([h.ak], A.prototype, "OnGrabActionChanged", null),
          (A = (0, o.gn)([r.Pi], A));
        let B = class extends C {
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
              (0, v.enableUniqueIds)(this);
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                  i.createElement(f, {
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
                i.createElement(f, {
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
                i.createElement(f, {
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
                i.createElement(f, {
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
        (0, o.gn)([h.ak], B.prototype, "OnValueActionChanged", null),
          (B = (0, o.gn)([r.Pi], B));
        var D = n(9809);
        let P = class extends i.Component {
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
                return i.createElement(I, Object.assign({}, e));
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
                return i.createElement(w, Object.assign({}, e));
              case "scroll":
              case "trackpad_scroll":
                return i.createElement(V, Object.assign({}, e));
              case "trigger":
                return i.createElement(L, Object.assign({}, e));
              case "force_sensor":
                return i.createElement(x, Object.assign({}, e));
              case "grab":
                return i.createElement(A, Object.assign({}, e));
              case "scalar_constant":
                return i.createElement(B, Object.assign({}, e));
              default:
                return i.createElement(T, Object.assign({}, e));
            }
          }
        };
        (0, o.gn)([h.ak], P.prototype, "OnEdit", null),
          (P = (0, o.gn)([r.Pi], P));
        class N {
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
                i = 2 == this.props.eControllerButtonSide,
                a = 0 == this.props.eControllerButtonSide,
                r = this.m_HTMLButton.getBoundingClientRect(),
                s = this.m_SVGElement.getBoundingClientRect(),
                l = o.GetSVGEndPoint();
              (l.x *= this.props.ptControllerImagePosition.nPointScale),
                (l.y *= this.props.ptControllerImagePosition.nPointScale),
                a ||
                  i ||
                  (l.x = this.props.ptControllerImagePosition.width - l.x),
                (l.x += this.props.ptControllerImagePosition.x - s.left),
                (l.y += this.props.ptControllerImagePosition.y - s.top);
              let c = new p.E9(0, r.top - s.top);
              c.x = i ? r.left - 10 : r.right + 10;
              let d = i ? -20 : 20,
                h = c.x + d + "," + c.y + " " + l.x + "," + l.y;
              e.setAttribute("points", h);
              let u = c.x + "," + c.y + " " + (c.x + d) + "," + c.y;
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
                  i.createElement(P, {
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
          (H = (0, o.gn)([r.Pi], H));
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
                !D.I.ShowHiddenInputs
              )
                return null;
              if (null != o.side)
                switch (o.side) {
                  case "left":
                    if (1 != this.props.eControllerButtonSide) return null;
                    break;
                  case "right":
                    if (2 != this.props.eControllerButtonSide) return null;
                }
              let a = [];
              return (
                a.push(
                  p.c6.GetControllerWatcherForSourceFromControllerType(
                    e,
                    this.props.eControllerButtonSide,
                    t.name,
                    this.props.selectedActionSet.name,
                  ),
                ),
                this.props.eControllerButtonOtherSide &&
                  0 != this.props.eControllerButtonOtherSide.valueOf() &&
                  a.push(
                    p.c6.GetControllerWatcherForSourceFromControllerType(
                      e,
                      this.props.eControllerButtonOtherSide,
                      t.name,
                      this.props.selectedActionSet.name,
                    ),
                  ),
                i.createElement(H, {
                  key: n,
                  controllerWatcher: a,
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
        F = (0, o.gn)([r.Pi], F);
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
                      1,
                      e,
                      n.name,
                    ),
                    i = p.c6.GetControllerWatcherForSourceFromControllerType(
                      p.c6.SelectedControllerTypeInfo,
                      2,
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
                        1,
                        e,
                        this.props.selectedActionSet.name,
                      );
                    p.c6
                      .GetControllerWatcherForSourceFromControllerType(
                        p.c6.SelectedControllerTypeInfo,
                        2,
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
              let a = e.getBoundingClientRect();
              if (((i = a.width), e.naturalWidth > 0))
                return (
                  (t = a.height / e.naturalHeight),
                  (o = a.left),
                  (n = a.top),
                  new N(o, n, i, t)
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
              a = e.input_bindingui_right.uri
                ? e.input_bindingui_right.uri
                : "",
              r = "",
              s = this.props.selectedActionSet,
              l = !1,
              c = 0;
            if (!this.props.bSingleMode) {
              if (null == s)
                return (
                  console.warn(
                    "ControllerBindingHandedControllers::render - Got undefined actionSet.",
                  ),
                  null
                );
              "single" == s.usage &&
                ((r = this.state.bMirrorBinding ? "Mirrored" : ""),
                (l = !this.props.bReadOnly),
                this.state.bMirrorBinding && (c = 2));
            }
            let h = p.c6.SelectedControllerTypeLocalizedName,
              u = (0, d.Xx)("#BindingUI_LeftHandController", h),
              g = (0, d.Xx)("#BindingUI_RightHandController", h),
              v =
                (this.props.bReadOnly,
                !this.props.bReadOnly ||
                  (p.c6.SelectedActionSetChords &&
                    p.c6.SelectedActionSetChords.length > 0));
            const _ = p.c6.GetSimulatedControllerProperties();
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
                    { className: r + " ControllerImageColumn FlexColumn" },
                    i.createElement("img", {
                      className: "ControllerImage ControllerImageRight",
                      src: a,
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
                  l &&
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
                _.bIsSimulatingController &&
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
                        _.strLocalizedSimulatedControllerType,
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
                      eControllerButtonSide: 0,
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
                      u,
                    ),
                    i.createElement(F, {
                      eControllerButtonSide: 1,
                      strSVGClass: "MenuLeftLine",
                      bReadOnly: this.props.bReadOnly,
                      eControllerButtonOtherSide: c,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptLeftController,
                    }),
                  ),
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn " + r },
                    i.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      g,
                    ),
                    i.createElement(F, {
                      eControllerButtonSide: 2,
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
          (G = (0, o.gn)([r.Pi], G)),
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
                n = this.state.SVGElement.children.namedItem("SourceCircle"),
                o = Object.assign({}, this.props.endPoint),
                i = Object.assign({}, this.props.startPoint);
              if (this.state.WrapperHTMLElement) {
                let e = this.state.WrapperHTMLElement.getBoundingClientRect(),
                  t =
                    this.state.WrapperHTMLElement.parentElement.parentElement.parentElement.getBoundingClientRect();
                i.y += e.top - t.top + e.height / 2;
              }
              let a = 20,
                r = i.x + a + "," + i.y + " " + o.x + "," + o.y;
              e.setAttribute("points", r);
              let s = i.x + "," + i.y + " " + (i.x + a) + "," + i.y;
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
              o = (0, d.Xx)("#SourceInputMode_none"),
              a = this.FullInputPaths()[0],
              r = p.c6.LocalizePathNameForSelectedControllerType(a);
            switch (this.props.type) {
              case "pose":
                (e = p.c6.GetPoseActionByPath(a)),
                  (t = "#SourceInputSubHeader_PoseActions");
                break;
              case "skeleton":
                (e = p.c6.GetSkeletonActionByPath(a)),
                  (t = "#SourceInputSubHeader_SkeletonActions");
                break;
              case "vibration":
                (e = p.c6.GetHapticsActionByPath(a)),
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
              let a;
              return (
                e &&
                  e[0].output.toLowerCase() == t.name.toLowerCase() &&
                  ((this.currentAction = t),
                  (n = t.name),
                  (o = t.localized_name)),
                "mandatory" == t.requirement &&
                  (a =
                    " (" + (0, d.Xx)("#BindingUI_SelectAction_Required") + ")"),
                new _.GZ(t.name, t.localized_name, a)
              );
            });
            return (
              (null != s && 0 != s.length) ||
                s.push(
                  new _.GZ("-nonitem", (0, d.Xx)("#SourceInputAction_NoItems")),
                ),
              s.unshift(new _.GZ("-subHeader", (0, d.Xx)(t))),
              s.push(new _.GZ("-blank", "")),
              s.push(new _.GZ("none", (0, d.Xx)("#SourceInputMode_none"))),
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
                    r,
                  ),
                  i.createElement(
                    "div",
                    null,
                    i.createElement(_.vs, {
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
        (0, o.gn)([h.ak], z.prototype, "BindSVGRef", null),
          (0, o.gn)([h.ak], z.prototype, "BindWrapperElement", null),
          (0, o.gn)([h.ak], z.prototype, "UpdateSVGPath", null),
          (0, o.gn)([h.ak], z.prototype, "OnActionChanged", null),
          (0, o.gn)([h.ak], z.prototype, "OnPoseActionChanged", null),
          (0, o.gn)([h.ak], z.prototype, "OnHapticsActionChanged", null),
          (0, o.gn)([h.ak], z.prototype, "OnSkeletonActionChanged", null),
          (z = (0, o.gn)([r.Pi], z));
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
            let n = p.c6.SelectedControllerTypeInfo,
              o = p.c6.SelectedControllerTypeInfo.input_source,
              a = [];
            if (
              "controller_handed" ==
              p.c6.SelectedControllerTypeInfo.input_bindingui_mode
            )
              a = ["/user/hand/left", "/user/hand/right"];
            else {
              let e = p.c6.DeviceForControllerType(n.controller_type);
              e &&
                (e.root_path && a.push(e.root_path),
                e.root_path_alt && a.push(e.root_path_alt));
            }
            if (0 == a.length)
              return console.log("Missing base root path for controller"), null;
            p.c6.GetPoseActionBindings;
            let r,
              s = [];
            for (let n in o) {
              let r = o[n];
              for (let l of a) {
                if (r.type != e) continue;
                let c = "none";
                if (
                  ("/user/hand/right" == l
                    ? (c = "right")
                    : "/user/hand/left" == l && (c = "left"),
                  r.side && r.side != c)
                )
                  continue;
                let d = l + n,
                  h = "left" == c,
                  u = h
                    ? this.props.ptLeftController.x
                    : this.props.ptRightController.x,
                  m = h
                    ? this.props.ptLeftController.y
                    : this.props.ptRightController.y,
                  g = new p.E9(0, 0);
                if (
                  (o.hasOwnProperty(n) &&
                    ((g.x = r.binding_image_point[0]),
                    (g.y = r.binding_image_point[1]),
                    (g.x *= this.props.nPointScale),
                    (g.y *= this.props.nPointScale)),
                  h ? (g.x = u - g.x) : (g.x += u),
                  (g.y += m),
                  h && this.props.bSlaveSecondaryControllerBinding)
                )
                  continue;
                let v = new p.E9(this.props.ptPoseListOffset.x + 5, 0),
                  _ = (t.length, [l]);
                this.props.bSlaveSecondaryControllerBinding && (_ = a),
                  s.push(
                    i.createElement(z, {
                      key: d,
                      InputSource: r,
                      sInputPath: n,
                      type: e,
                      vecDevicePathsToSet: _,
                      startPoint: v,
                      endPoint: g,
                    }),
                  );
              }
            }
            switch (this.props.eActionType) {
              case U.Pose:
                r = (0, d.Xx)("#BindingUI_PoseListTitle");
                break;
              case U.Haptics:
                r = (0, d.Xx)("#BindingUI_HapticsListTitle");
                break;
              case U.Skeleton:
                r = (0, d.Xx)("#BindingUI_SkeletonListTitle");
            }
            return i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement("div", { className: "Label Title AllCaps" }, r),
              s,
            );
          }
        };
        W = (0, o.gn)([r.Pi], W);
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
              a = this.props.bLeftHandController ? 6 : -6;
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
                  x: t.x + a,
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
                  x: t.x + a,
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
        X = (0, o.gn)([r.Pi], X);
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
              a = "",
              r = "",
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
            (r = s.input_bindingui_right.uri),
              (o = s.input_bindingui_right.transform),
              this.props.bSlaveSecondaryControllerBinding ||
                ((n = s.input_bindingui_left.transform),
                (a = s.input_bindingui_left.uri));
            let l = function (t, n, o, i, a) {
                let r = t.input_source[i];
                if (r.type == e && (null == r.side || r.side == o)) {
                  let e = new p.E9(
                    r.binding_image_point[0],
                    r.binding_image_point[1],
                  );
                  n.hasOwnProperty(e.toString()) || (n[e.toString()] = []),
                    n[e.toString()].push(i);
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
                        src: a,
                        style: { transform: n },
                        ref: this.BindLeftControllerImage,
                      }),
                    ),
                  i.createElement(
                    "div",
                    { className: "ControllerImageContainer" },
                    i.createElement("img", {
                      className: "ControllerImage",
                      src: r,
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
                (0, d.Xx)("#Button_Close"),
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
          (K = (0, o.gn)([r.Pi], K));
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
            let a,
              r = e.map(
                (e, n) => (
                  this.props.chord.output &&
                    e.name.toLowerCase() ==
                      this.props.chord.output.toLowerCase() &&
                    (t = e.localized_name),
                  new _.GZ(e.name.toLowerCase(), e.localized_name)
                ),
              ),
              s = p.c6.SelectedActionSetSources;
            return s && 0 != s.length
              ? (this.props.chord.inputs
                  ? (a = this.props.chord.inputs.map((e, t) => {
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
                              let a = t
                                .filter((t) => {
                                  let o = n.inputs.filter(
                                    (e) => e[0] == t.path,
                                  );
                                  return t.path == e || 0 == o.length;
                                })
                                .map(
                                  (e, t) =>
                                    new _.GZ(
                                      e.path,
                                      p.c6.LocalizePathNameForSelectedControllerType(
                                        e.path,
                                      ),
                                    ),
                                );
                              return i.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                i.createElement(_.vs, {
                                  vecOptions: a,
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
                              let a = p.c6.GetActionBinding(
                                e,
                                p.c6.SelectedActionSet,
                              );
                              if (!a || 0 == a.length) return null;
                              let r = [],
                                s = "";
                              if (
                                (a.forEach((e) => {
                                  let n = p.c6.GetBooleanInputOptionsForMode(
                                    e.mode,
                                  );
                                  for (let o of n)
                                    r.push({
                                      sActionBindMode: e.mode,
                                      sInputOption: o,
                                    }),
                                      o == t && (s = e.mode);
                                }),
                                0 == r.length)
                              )
                                return null;
                              let l = r.map(
                                (e, t) =>
                                  new _.GZ(
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
                                i.createElement(_.vs, {
                                  vecOptions: l,
                                  sValueSelectedItem: t,
                                  sLocalizedSelectedItem:
                                    (0, d.Xx)("#SourceInputMode_" + s) +
                                    " " +
                                    (0, d.Xx)("#SourceInputMode_" + t),
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
                      i.createElement(_.vs, {
                        sHeaderClass: "ChordBindingAction",
                        vecOptions: r,
                        sValueSelectedItem: n,
                        sModalTitleString: (0, d.Xx)(
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
                      a,
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
        (0, o.gn)([h.ak], q.prototype, "OnActionOutputChanged", null),
          (0, o.gn)([h.ak], q.prototype, "DeleteChord", null),
          (0, o.gn)([h.ak], q.prototype, "DeleteSourceFromChord", null),
          (0, o.gn)([h.ak], q.prototype, "AddSourceToChord", null),
          (q = (0, o.gn)([r.Pi], q));
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
        (0, o.gn)([h.ak], Z.prototype, "AddChord", null),
          (Z = (0, o.gn)([r.Pi], Z));
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
                    "PageTitleBar" + (D.I.IsSteamAvailable ? "" : " NoSteam"),
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
                !D.I.IsSteamAvailable &&
                  i.createElement(
                    "div",
                    { className: "NoSteamWarning" },
                    (0, d.Xx)("#NoSteamWarning"),
                  ),
              )
            );
          }
        };
        J = (0, o.gn)([r.Pi], J);
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
        (0, o.gn)([h.ak], Q.prototype, "CloseSaveDialog", null),
          (Q = (0, o.gn)([r.Pi], Q));
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
        (0, o.gn)([h.ak], Y.prototype, "onHiddenChanged", null),
          (0, o.gn)([h.ak], Y.prototype, "onNameChanged", null),
          (Y = (0, o.gn)([r.Pi], Y));
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
        (0, o.gn)([h.ak], $.prototype, "OnShowHidden", null),
          (0, o.gn)([h.ak], $.prototype, "OnCloseHidden", null),
          ($ = (0, o.gn)([r.Pi], $));
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
                  new _.GZ(
                    n.controller_type,
                    (0, d.Xx)("#" + n.controller_type),
                  ),
                );
            t.push(new _.GZ("none", (0, d.Xx)("#None")));
            let n = "InputOption" + this.props.sOptionName;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(_.vs, {
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
              (e, t) => new _.GZ(e.name, e.localized_name),
            );
            e.push(new _.GZ("none", (0, d.Xx)("#SourceInputAction_none")));
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
              i.createElement(_.vs, {
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
            let a = p.c6.ComputeSimulatedActionPathFromId(i.id);
            p.c6.SetSimulatedActionByPath(a, i);
          }
          render() {
            let e = [];
            p.c6.GetOptionValue("mirror_actions") ||
              (e.push(new _.GZ("left", (0, d.Xx)("#TrackpadClickLeft"))),
              e.push(new _.GZ("right", (0, d.Xx)("#TrackpadClickRight"))),
              e.push(new _.GZ("none", (0, d.Xx)("#TrackpadClickNone"))));
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
                i.createElement(_.vs, {
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
                  (0, d.Xx)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, o.gn)([h.ak], ie.prototype, "onNameChanged", null),
          (0, o.gn)([h.ak], ie.prototype, "onOutputChanged", null),
          (0, o.gn)([h.ak], ie.prototype, "onDelete", null),
          (0, o.gn)([h.ak], ie.prototype, "OnClickTrackpad", null);
        let ae = class extends i.Component {
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
                new _.GZ(
                  "fake_trigger",
                  (0, d.Xx)("#SimulatedAction_FakeTrigger"),
                ),
              ),
              e.push(
                new _.GZ(
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
                    i.createElement(_.vs, {
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
        (0, o.gn)([h.ak], ae.prototype, "OnCreateSimAction", null),
          (ae = (0, o.gn)([r.Pi], ae));
        let re = class extends i.Component {
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
              a = o && "none" != o;
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
                  n &&
                  i.createElement(se, { bReadOnly: this.props.bReadOnly }),
                !t &&
                  i.createElement(le, {
                    sOptionName: "simulated_controller_type",
                    bAllowNone: !0,
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  a &&
                  i.createElement(ce, {
                    sOptionName: "simulate_rendermodel",
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  a &&
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
        re = (0, o.gn)([r.Pi], re);
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
                t.push(new _.GZ(e, n, null, e));
              }),
              t.push(new _.GZ(" ", (0, d.Xx)("#None"))),
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
                      i.createElement(_.vs, {
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
              e.push(new _.GZ(t.sValue, t.sName, null, t.sValue));
            return (
              this.props.bAllowNone &&
                e.push(new _.GZ("none", (0, d.Xx)("#None"))),
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
                      i.createElement(_.vs, {
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
        (0, o.gn)([h.ak], ce.prototype, "onCheckboxChanged", null);
        var de,
          pe = n(7475);
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
            for (const n of e) {
              const [e, { vecRequired: o }] = n;
              for (const n of o)
                t.push(
                  `${p.c6.GetActionSetLocalizedNameByName(e)}: ${n.localized_name}`,
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
        (0, o.gn)([h.ak], he.prototype, "CloseSaveDialog", null),
          (0, o.gn)([h.ak], he.prototype, "ConfirmBindingName", null),
          (0, o.gn)([h.ak], he.prototype, "BindNameInput", null),
          (0, o.gn)([h.ak], he.prototype, "BindDescriptionInput", null),
          (0, o.gn)([h.ak], he.prototype, "OnNameFocus", null),
          (0, o.gn)([h.ak], he.prototype, "OnOverlayNameText", null),
          (0, o.gn)([h.ak], he.prototype, "OnDescriptionFocus", null),
          (0, o.gn)([h.ak], he.prototype, "OnOverlayDescriptionText", null),
          (0, o.gn)([h.ak], he.prototype, "GetUnboundActionItems", null),
          (he = (0, o.gn)([r.Pi], he));
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
        (ue = (0, o.gn)([r.Pi], ue)),
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
              o = (0, d.Xx)("#Button_Discard");
            if (this.ThisConfigNeedsUpgrade()) {
              let i = j.S.GetApp(p.c6.SelectedApp);
              (e = (0, d.Xx)("#BindingUI_List_Upgrade_Confirm", i.name)),
                (n = this.SelectWouldOverwriteAutosave()),
                n
                  ? (t = (0, d.Xx)("#BindingUI_List_Select_Confirm_Convert"))
                  : (o = (0, d.Xx)("#Button_Import"));
            } else e = (0, d.Xx)("#BindingUI_List_Select_Confirm");
            let a = null;
            return (
              u.w.DesktopMode || (a = { height: "30%", width: "30%" }),
              i.createElement(
                s.Z,
                {
                  visible: this.state.bShowSelectConfirmModal,
                  onClose: this.OnSelectDone,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "ModeSettingsModal",
                  closeOnEsc: !0,
                  customStyles: a,
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
                        o,
                      ),
                      n &&
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
                let n = "Label Tab PositionRelative",
                  o = new p.Fv();
                p.c6.UnboundActions.has(e.name) &&
                  (o = p.c6.UnboundActions.get(e.name));
                let a = o.vecRequired.length + o.vecSuggested.length;
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
                    a > 0 &&
                      i.createElement(
                        "div",
                        { className: "UnboundActionsCount" },
                        a,
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
            let n,
              o = !1,
              a = !1;
            p.c6.SelectedControllerTypeInfo &&
              this.state.eTabType == me.ActionSet &&
              ((n = p.c6.SelectedControllerTypeInfo),
              (o = "controller_handed" == n.input_bindingui_mode),
              (a =
                "hmd" == n.input_bindingui_mode ||
                "single_device" == n.input_bindingui_mode));
            let r = this.state.bDeveloperOutput
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
            let v,
              _ = this.props.bReadOnlyView
                ? (0, d.Xx)("#BindingUI_ViewPageTitle", p.c6.ConfigName)
                : (0, d.Xx)("#BindingUI_EditPageTitle", p.c6.ConfigName),
              S = "#BindingUI_PageSubTitle",
              y = p.c6.GetOptionValue("variant");
            y &&
              ((v = (0, d.Xx)("#BindingVariant_" + y)),
              (S = "#BindingUI_PageSubTitle_WithVariant"));
            let b = (0, d.Xx)(
                S,
                p.c6.SelectedControllerTypeLocalizedName,
                g,
                (0, d.Xx)(
                  "#BindingUI_BindingType_" + p.c6.CurrentBindingSaveType,
                ),
                v,
              ),
              C = !this.ThisConfigNeedsUpgrade() && this.props.bReadOnlyView,
              f = this.ThisConfigNeedsUpgrade();
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
                    strTitle: _,
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
              a &&
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
                    i.createElement(ae, { readOnly: this.props.bReadOnlyView }),
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
                  C &&
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
                  C &&
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
                  f &&
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
                  D.I.BDevMode &&
                    i.createElement("div", {
                      className: "BindingManageButtonsHR",
                    }),
                  D.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ToggleDeveloperOutput,
                      },
                      r,
                    ),
                  D.I.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowExportModal,
                      },
                      (0, d.Xx)("#BindingUI_ExportBindingFile"),
                    ),
                  D.I.BDevMode &&
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
                        i.createElement(K, {
                          fnCloseModal: this.ClosePoseBindingsModal,
                          eActionSourceType: U.Pose,
                          bSingleControllerMode: a,
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
                          bSingleControllerMode: a,
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
                          bSingleControllerMode: a,
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
                      i.createElement(re, {
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
          (ge = (0, o.gn)([r.Pi], ge));
        var ve = n(6166);
        let _e = class extends i.Component {
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
        (0, o.gn)([h.ak], _e.prototype, "CloseDialog", null),
          (_e = (0, o.gn)([r.Pi], _e));
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
                ve.s.RequestUserInformation(this.props.result.steamIDOwner);
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
              n,
              o = new Date(),
              a = new Date(1e3 * this.props.result.time),
              r =
                o.getTime() - a.getTime() > 1728e5
                  ? a.toLocaleDateString()
                  : a.toLocaleString(),
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
                ((n = ve.s.GetUserInformation(s.steamIDOwner).avatar_url),
                (t = ve.s.GetUserInformation(s.steamIDOwner).persona_name));
            let m = this.props.bCurrentlySelectedBinding
                ? (0, d.Xx)("#BindingUI_List_Edit")
                : (0, d.Xx)("#BindingUI_List_View"),
              g = s.name;
            "autosave" == s.type &&
              (g = (0, d.Xx)("#BindingUI_List_Autosave", s.name));
            let v = null;
            this.state.bOldVersion &&
              (v = this.props.bCurrentlySelectedBinding
                ? (0, d.Xx)(
                    "#BindingUI_List_OldVersionWarning_CurrentBinding",
                    u,
                  )
                : (0, d.Xx)("#BindingUI_List_OldVersionWarning", u));
            let _ = null;
            if (s.secondsPlayed > 0) {
              let e = s.secondsPlayed / 60;
              _ = (0, d.Xx)("#BindingUI_List_MinutesPlayed", e.toFixed(0));
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
              n &&
                i.createElement("img", {
                  className: "SteamCommunityProfileImage",
                  src: n,
                }),
              c &&
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
                    r,
                    S && " - " + S,
                    _ && " - " + _,
                    i.createElement("br", null),
                  ),
                v &&
                  i.createElement(
                    "span",
                    { className: "ConvertWarning" },
                    v,
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
        (0, o.gn)([h.ak], Se.prototype, "OnDelete", null),
          (0, o.gn)([h.ak], Se.prototype, "OnDeleteConfirmed", null),
          (0, o.gn)([h.ak], Se.prototype, "OnDeleteCancel", null),
          (0, o.gn)([h.ak], Se.prototype, "renderDeleteConfirmModal", null),
          (0, o.gn)([h.ak], Se.prototype, "OnView", null),
          (0, o.gn)([h.ak], Se.prototype, "OnSelect", null),
          (Se = (0, o.gn)([r.Pi], Se));
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
                    (0, d.Xx)(e),
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
            D.I.ControllerTypes.forEach((n) => {
              (t || "InputValueVisibility_SteamVRInternal" != n.visibility) &&
                "InputValueVisibility_None" != n.visibility &&
                e.push(n);
            }),
              e.sort((e, t) => e.priority - t.priority);
            let n = [];
            e.forEach((e) => {
              n.push(
                new _.GZ(
                  e.controller_type,
                  D.I.LocalizeDriverString(e.resource_root, e.controller_type),
                ),
              );
            });
            let o = "",
              a = "",
              r = p.c6.SelectedControllerTypeInfo;
            return (
              r &&
                (r.input_bindingui_right.transform &&
                  (o = r.input_bindingui_right.transform),
                (a = r.input_bindingui_right.uri)),
              r.device_class,
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
                    src: a,
                    style: { transform: o },
                  }),
                  i.createElement(_.vs, {
                    vecOptions: n,
                    sModalClass: "PinTop",
                    sValueSelectedItem: r ? r.controller_type : "",
                    sLocalizedSelectedItem: D.I.LocalizeControllerString(
                      r,
                      r ? r.controller_type : "",
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
            let a = [];
            return (
              null != u.w.BindingQueryResults &&
                (a = u.w.BindingQueryResults.filter(
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
                        0 == a.length &&
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
                  i.createElement(_e, {
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
          (ye = (0, o.gn)([r.Pi], ye));
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
        be = (0, o.gn)([r.Pi], be);
        let Ce = class extends i.Component {
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
              a = j.S.GetCurrentSceneProcess();
            return (
              !a && n.length > 0 && (a = n[0]),
              a && (n = n.filter((e) => e.key != a.key)),
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
                    a &&
                      i.createElement(be, {
                        app: a,
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
        (0, o.gn)([h.ak], Ce.prototype, "SelectApplication", null),
          (0, o.gn)([h.ak], Ce.prototype, "OnShowMoreApps", null),
          (Ce = (0, o.gn)([r.Pi], Ce));
        var fe,
          ke,
          Ee,
          Ie = n(3010),
          Me = n(5177),
          Re = n(3930),
          Te = n(2609);
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
        })(fe || (fe = {})),
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
          })(Ee || (Ee = {}));
        let we = 16777216;
        function Oe(e) {
          return "number" != typeof e
            ? "-"
            : e >= we && e <= 33554431
              ? (0, d.Xx)("#InputDebugger_Priority_Overlay", e - we)
              : e.toFixed(0);
        }
        class Ve extends i.Component {
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
            var t, n, o, i, a, r;
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
                (r =
                  null ===
                    (a =
                      null === (i = this.state.latestState) || void 0 === i
                        ? void 0
                        : i.globalPriorityMap) || void 0 === a
                    ? void 0
                    : a[e]) && void 0 !== r
                ? r
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
              let n, o;
              t.secondaryActionSet
                ? ((n = t.secondaryActionSet), (o = this.GetActionSetName(n)))
                : ((o = (0, d.Xx)("#InputDebugger_None")), (n = ""));
              let a = this.GetActionSetName(t.actionSet),
                r = t.restrictToDevice
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
                    a,
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
                    r,
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
              case fe.Boolean:
              case fe.Vector1:
              case fe.Vector2:
              case fe.Vector3:
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
              case fe.Pose:
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
              case fe.EyeTracking:
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
                  (0, d.Xx)("#InputDebugger_FilterDetails"),
                ),
              );
            {
              let n = this.GetMaxPriority(e.binding),
                a = null !== (o = e.binding) && void 0 !== o ? o : "-";
              return (
                "number" == typeof n &&
                  (a += " " + (0, d.Xx)("#InputDebugger_PriorityValue", Oe(n))),
                i.createElement(
                  "div",
                  {
                    className: "Label ActionEntry",
                    key: t + e.inputSource + "_binding",
                  },
                  a,
                )
              );
            }
          }
          renderActionEntry(e, t, n) {
            var o, a, r, s, l, c, d, p, h;
            switch (e.type) {
              case fe.Boolean:
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
                    null !== (a = t.data.activeOrigin) && void 0 !== a
                      ? a
                      : "-",
                  ),
                  this.renderBoolean(e.state, n + "_value"),
                ];
              case fe.Vector1:
              case fe.Vector2:
              case fe.Vector3:
                let u = t.data,
                  m = u.x.toFixed(2);
                return (
                  void 0 !== u.y && (m += ", " + u.y.toFixed(2)),
                  void 0 !== u.z && (m += ", " + u.z.toFixed(2)),
                  [
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: n + "_source" },
                      null !== (r = t.inputSource) && void 0 !== r ? r : "-",
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
                      m,
                    ),
                  ]
                );
              case fe.Pose:
                let g = t.data,
                  v = `${g.position_x.toFixed(2)}, ${g.position_y.toFixed(2)}, ${g.position_z.toFixed(2)}`,
                  _ = {
                    x: g.rotation_x,
                    y: g.rotation_y,
                    z: g.rotation_z,
                    w: g.rotation_w,
                  },
                  S = `(${g.rotation_x.toFixed(2)}, ${g.rotation_y.toFixed(2)}, ${g.rotation_z.toFixed(2)})`;
                return [
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
                    null !== (c = t.data.activeOrigin) && void 0 !== c
                      ? c
                      : "-",
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_position" },
                    g ? v : "-",
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_rotation" },
                    null != S ? S : "-",
                    i.createElement(Te.Z, {
                      quaternion: _,
                      width: 50,
                      height: 50,
                    }),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_state" },
                    null !== (d = g.tracking) && void 0 !== d ? d : "-",
                  ),
                ];
              case fe.EyeTracking:
                let y = t.data,
                  b = `${y.origin_position_x.toFixed(5)}, ${y.origin_position_y.toFixed(5)}, ${y.origin_position_z.toFixed(5)}`,
                  C = `${y.target_position_x.toFixed(5)}, ${y.target_position_y.toFixed(5)}, ${y.target_position_z.toFixed(5)}`;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_source" },
                    null !== (p = t.inputSource) && void 0 !== p ? p : "-",
                  ),
                  this.renderBinding(t, n),
                  this.renderBoolean(t.data.active, n + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: n + "_origin" },
                    null !== (h = t.data.activeOrigin) && void 0 !== h
                      ? h
                      : "-",
                  ),
                  this.renderBoolean(y.tracked, n + "_tracked"),
                  this.renderBoolean(y.valid, n + "_valid"),
                  i.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: n + "_origin_position",
                    },
                    y ? b : "-",
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: n + "_target_position",
                    },
                    y ? C : "-",
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
            let n = [t],
              o = 1;
            if (e.entries)
              for (let i of e.entries) {
                let a = this.renderActionEntry(e, i, (o++).toString());
                if (a) {
                  if (a.length != t.length)
                    throw new Error(
                      "Values must have the same length as header",
                    );
                  n.push(a);
                }
              }
            let a = [];
            for (let e = 0; e < n[0].length; e++)
              for (let t = 0; t < n.length; t++) a.push(n[t][e]);
            let r = Math.max(n.length, 5);
            return [
              i.createElement(
                "div",
                { className: "Action", key: e.path },
                i.createElement(
                  "div",
                  {
                    className: "ActionName Label",
                    style: { gridColumn: "1 / " + (r + 1) },
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
                a,
              ),
              r,
            ];
          }
          renderCurrentActions() {
            if (!this.state.sCurrentActionSet) return null;
            let e = new Set(),
              t = [],
              n = 0;
            for (let o of this.state.latestState.actions)
              if (o.actionSet == this.state.sCurrentActionSet) {
                let [i, a] = this.renderAction(o);
                if (!i) continue;
                (n = Math.max(a, n)), t.push(i), e.add(o.path.toLowerCase());
              }
            if (this.state.actionManifest) {
              let o = this.state.actionManifest.action_sets.find(
                (e) => e.name == this.state.sCurrentActionSet,
              );
              if (o)
                for (let a of o.actions)
                  e.has(a.name.toLowerCase()) ||
                    ("pose" != a.type &&
                      "skeleton" != a.type &&
                      "vibration" != a.type &&
                      (t.push(
                        i.createElement(
                          "div",
                          { className: "Action", key: a.name },
                          i.createElement(
                            "div",
                            {
                              className: "ActionName Label",
                              style: { gridColumn: "1 / " + (n + 1) },
                            },
                            a.localized_name,
                            i.createElement(
                              "span",
                              { className: "ActionPath" },
                              " (",
                              a.name,
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
                      e.add(a.name.toLowerCase())));
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
            for (let n of e)
              t.push(
                i.createElement(
                  Me.z,
                  {
                    onClick: () => {
                      this.SetActionSet(n);
                    },
                    key: n,
                    className: (0, c.LJ)("ActionSetButton", "ButtonControl", [
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
              case Ee.Boolean:
                n = this.renderBoolean(e.value);
                break;
              case Ee.Scalar:
                n = this.renderScalar(e.value);
                break;
              default:
                n = i.createElement("div", { className: "Label" }, Ee[e.type]);
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
                  (0, d.Xx)("#InputDebugger_FilterDetails"),
                ),
              "number" == typeof o &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.Xx)("#InputDebugger_PriorityValue", Oe(o)),
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
            for (let n in e.parameters) {
              let o,
                a = e.parameters[n];
              switch (typeof a) {
                case "boolean":
                  o = a ? "true" : "false";
                  break;
                case "number":
                  o = a.toFixed(2);
                  break;
                default:
                  o = JSON.stringify(a);
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
                  (0, d.Xx)("#InputDebugger_None"),
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
                i.createElement("div", { className: "InputList" }, n),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, d.Xx)("#InputDebugger_Outputs"),
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
                strTitle: (0, d.Xx)("#InputDebugger_Title"),
              }),
              i.createElement(
                "div",
                { className: "AppDropdownWrapper" },
                i.createElement(Ie.Lt, {
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
        (0, o.gn)([h.ak], Ve.prototype, "OnSelectApp", null),
          (0, o.gn)([h.ak], Ve.prototype, "OnInputFrame", null),
          (0, o.gn)([h.ak], Ve.prototype, "SetActionSet", null);
        var Le = n(775),
          xe = n(1628);
        let Ae = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return (
              u.w.Loading
                ? document.body.classList.add("Loading")
                : document.body.classList.remove("Loading"),
              D.I.IsSteamAvailable
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
                u.w.GetUIState == u.g.AppSelect && i.createElement(Ce, null),
                u.w.GetUIState == u.g.Debugger && i.createElement(Ve, null),
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
        Ae = (0, o.gn)([r.Pi], Ae);
        const Be = document.getElementById("root");
        (0, d.CK)(
          ["bindingui"],
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage(),
        )
          .then(() => Le.n.Init())
          .then(() => j.S.Init())
          .then(() => D.I.Init())
          .then(() => xe.G3.Init(!1))
          .then(() => p.c6.Init())
          .then(() =>
            (function () {
              return (0, o.mG)(this, void 0, void 0, function* () {
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
            (e = Ae), a.render(i.createElement(e, null), Be);
          })
          .catch((e) => console.log("FAILED TO INITIALIZE BINDINGUI " + e));
      },
      2758: (e, t, n) => {
        "use strict";
        n.d(t, { U: () => s });
        var o = n(655),
          i = n(2188),
          a = n(4687);
        class r {
          constructor() {
            (this.m_mapAllOverlays = new Map()),
              (this.m_rgOverlayCreatedCallbacks = new a.p()),
              (this.m_rgOverlayDestroyedCallbacks = new a.p());
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
        (0, o.gn)([i.LO], r.prototype, "m_mapAllOverlays", void 0),
          (0, o.gn)([i.aD.bound], r.prototype, "OnAllOverlayInfo", null);
        const s = new r();
        window.OverlayStore = s;
      },
      9764: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => c });
        var o = n(655),
          i = n(7056),
          a = n(2188),
          r = n(2477),
          s = n(2758);
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
                (0, a.EH)(() => this.SaveSessionDevData()),
                r.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) => {
                  this.m_mapActivePooledPopupRequests.set(
                    e.dashboard_popup_request_id,
                    e,
                  );
                }),
                r.Q.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
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
              const n = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(l.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              for (const e of null !== (t = n.m_rgPooledPopups) && void 0 !== t
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
            [a.LO],
            l.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, o.gn)([a.LO], l.prototype, "m_mapRemoteVSIds", void 0),
          (0, o.gn)([i.ak], l.prototype, "LoadSessionDevData", null),
          (0, o.gn)([i.ak], l.prototype, "SaveSessionDevData", null);
        const c = new l();
        window.PooledPopupStore = c;
      },
      7726: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => i, X: () => d });
        var o,
          i,
          a = n(655),
          r = n(7294),
          s = n(7056),
          l = n(5876),
          c = (n(6698), n(9626), n(7062));
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(i || (i = {}));
        let d = (o = class extends r.Component {
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
              n = l.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex,
              );
            let a = !1;
            if (t) {
              const t =
                null !==
                  (e = l.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    l.Uk.DeviceBatteryPercentage_Float,
                  )) && void 0 !== e
                  ? e
                  : 0;
              (a = l.Co.VRProperties.GetBoolProperty(
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
            let r = o.GetBatteryIcon(
                t,
                a,
                this.batteryLevelStable,
                i.HorizontalPips,
              ),
              s = this.GetRoleIcon(n);
            (r == this.state.batteryIconPath &&
              s == this.state.roleIconPath &&
              n == this.state.eRole) ||
              this.setState({ batteryIconPath: r, roleIconPath: s, eRole: n });
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
          static GetBatteryIcon(e, t, n, o) {
            if (!e) return null;
            const a =
              o == i.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? n < 0.15
                ? a + "_charging_red.png"
                : a + "_charging.png"
              : 0 == n
                ? null
                : n < 0.15
                  ? a + "_low.png"
                  : n < 0.3
                    ? a + "_battery_1.png"
                    : n < 0.6
                      ? a + "_battery_2.png"
                      : n < 0.9
                        ? a + "_battery_3.png"
                        : a + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, n) {
            e == l.XX.Activated &&
              n == this.props.trackedDeviceIndex &&
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
              n = 0;
            e == l.Kg.TrackedControllerRole_LeftHand
              ? ((t = "/user/hand/left"), (n = -0.05))
              : e == l.Kg.TrackedControllerRole_RightHand
                ? ((t = "/user/hand/right"), (n = 0.05))
                : (t = void 0);
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(
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
                      false,
                      false,
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
              ),
            );
          }
        });
        (d.kBatteryLevelHysteresis = 0.02),
          (0, a.gn)([s.ak], d.prototype, "OnBatteryStateChanged", null),
          (0, a.gn)([s.ak], d.prototype, "OnDeviceRoleChanged", null),
          (0, a.gn)([s.ak], d.prototype, "OnDeviceEvent", null),
          (d = o = (0, a.gn)([c.Pi], d));
      },
      8261: (e, t, n) => {
        "use strict";
        n.d(t, { g: () => le, _: () => Q });
        var o,
          i = n(655),
          a = n(5876),
          r = n(7056),
          s = n(2188),
          l = n(7294),
          c = n(1509),
          d = n(5177),
          p = n(7176),
          h = n(3568),
          u = n(8495),
          m = n(7008),
          g = n(9942),
          v = n(1628),
          _ = n(7062),
          S = n(7726),
          y = n(4790),
          b = n(6459),
          C = n(9347),
          f = n(7830),
          k = n(7095),
          E = n(8980);
        let I = (o = class extends l.Component {
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
        (I.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (I.s_failedImages = []),
          (0, i.gn)([r.ak], I.prototype, "loadNextImage", null),
          (0, i.gn)([r.ak], I.prototype, "onLoad", null),
          (0, i.gn)([r.ak], I.prototype, "onError", null),
          (I = o = (0, i.gn)([_.Pi], I));
        var M = n(8242);
        const R = (e) => {
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
            const e = g.H.Instance.SceneAppKey;
            k.f.OpenDeepLink(k.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = g.H.Instance.SceneAppKey;
            f.Ux.OpenDeepLink(f.Yw.Name, e);
          }
          render() {
            var e;
            const t = g.H.Instance.SceneAppKey,
              n = g.H.Instance.SceneAppName,
              o = g.H.Instance.SceneApplicationState,
              i = g.H.Instance.SceneAppIsHome,
              r = v.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = v.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              c = v.G3.apps && v.G3.apps.find((e) => e.key == t);
            let u = !1;
            switch (o) {
              case a.xY.Quitting:
              case a.xY.Starting:
              case a.xY.Waiting:
                u = !0;
            }
            return l.createElement(
              b.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: p.PF,
                scrollable: !1,
              },
              l.createElement(
                "div",
                { className: "ArtworkColumn" },
                l.createElement(I, { appkey: t, title: n, imageUrl: R(c) }),
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, n),
                l.createElement(
                  d.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  i
                    ? (0, h.Xx)("#Return_To_Home")
                    : (0, h.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    M.ls,
                    {
                      icon: M.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, h.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    M.ls,
                    { icon: M.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, h.Xx)("#App_Video_Settings"),
                  ),
                r &&
                  l.createElement(
                    d.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    i ? (0, h.Xx)("#Exit_Home") : (0, h.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, i.gn)([r.ak], T.prototype, "onExitApp", null),
          (0, i.gn)([r.ak], T.prototype, "onReturnToGame", null),
          (0, i.gn)(
            [r.ak],
            T.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, i.gn)([r.ak], T.prototype, "onOpenAppVideoSettings", null);
        var w,
          O = n(9669),
          V = n.n(O),
          L = n(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(w || (w = {}));
        const x = (e) =>
          l.createElement(
            "div",
            {
              className: (0, E.LJ)("ButtonContainer", w[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              d.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == w.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›"),
            ),
          );
        class A extends l.Component {
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
              a = o[0],
              r = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : n.scrollLeft,
              s = a.getBoundingClientRect().left + n.scrollLeft,
              l = a.clientWidth,
              c = n.clientWidth,
              d = Math.floor(c / l) - 1,
              p = Math.round((r - s + i + 1) / l) + d * e - 0.4999,
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
                L.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: L.I.Horizontal,
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
                    l.createElement(x, {
                      side: w.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(x, {
                      side: w.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, i.gn)([r.ZP], A.prototype, "onAnimationFrame", null),
          (0, i.gn)([r.ZP], A.prototype, "onScroll", null),
          (0, i.gn)([r.ZP], A.prototype, "onLeftButtonClick", null),
          (0, i.gn)([r.ZP], A.prototype, "onRightButtonClick", null);
        let B = class extends l.Component {
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
                  l.createElement(I, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, i.gn)([r.ZP], B.prototype, "buttonMouseEnter", null),
          (0, i.gn)([r.ZP], B.prototype, "buttonMouseLeave", null),
          (0, i.gn)([r.ZP], B.prototype, "onParentScrollStop", null),
          (B = (0, i.gn)([_.Pi], B));
        const D = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          P = (e) => {
            var t;
            const n = !!e.loading,
              o = null !== (t = e.apps) && void 0 !== t ? t : [];
            let i = "AppCarousel";
            return (
              e.className && (i += " " + e.className),
              l.createElement(
                A,
                { additionalClassNames: i, paginationAlignmentOffset: -20 },
                n &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(D, null),
                    l.createElement(D, null),
                    l.createElement(D, null),
                    l.createElement(D, null),
                  ),
                !n &&
                  o.map((e) =>
                    l.createElement(B, Object.assign({ key: e.appkey }, e)),
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
            V()
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
        let F = (N = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, n) {
            var o, i;
            u.e.instance.RecordUIEvent(
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
            if (null != v.G3.apps)
              for (let t of v.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  N.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let n = t.library_priority - e.library_priority;
              return 0 == n && (n = t.last_launch - e.last_launch), n;
            });
            const t = (e) => {
              let t = e.image_path_capsule || e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, n) => {
              let o = n;
              const i = n < N.TOP_ROW_LENGTH;
              return (
                i || (o -= N.TOP_ROW_LENGTH),
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
          render() {
            let e,
              t = this.makeAppButtonList();
            const n =
              0 == t.length ||
              v.G3.settings.get("/settings/dashboard/forceWelcomeScreen");
            if (n) e = l.createElement(H, null);
            else {
              let n = t.slice(0, N.TOP_ROW_LENGTH),
                o = t.slice(N.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                l.createElement(P, { className: "TopRow", apps: n }),
                l.createElement(P, { className: "BottomRow", apps: o }),
              );
            }
            return l.createElement(
              b.lL,
              {
                visible: this.props.visible,
                scrollable: !n,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: p.po,
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
            p.W4,
            p.jW,
          ])),
          (F = N = (0, i.gn)([_.Pi], F));
        var G = n(421),
          U = n(6063),
          z = (n(9462), n(9626)),
          W = n(792),
          X = n(6346),
          K = n(6821),
          q = n(2477);
        function Z(e) {
          const { debugHostLocation: t, onGrabStart: n, onGrabEnd: o } = e,
            i = z.BV.isVRGamepadUI,
            r = (0, E.aB)();
          if (!r) return null;
          const s =
              null != (null == r ? void 0 : r.overlayKey) &&
              "" != (null == r ? void 0 : r.overlayKey),
            c = !!(r.keyboardFlags & a.vS.Minimal),
            d = i ? 2 : 1.5,
            h = i ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            u = i
              ? c
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : c
                ? { y: -0.73, z: 0.05 }
                : { y: -0.87, z: 0.05 };
          return l.createElement(
            a.wx,
            { translation: h },
            l.createElement(
              a.wx,
              { scale: { y: d, x: d } },
              l.createElement(a.sl, { mountedId: (0, a.iN)(p.GN, p.gC) }),
              l.createElement(a.sl, { mountedId: (0, a.iN)(p.GN, p.jw) }),
            ),
            !1,
            s &&
              l.createElement(
                a.wx,
                { translation: u },
                l.createElement(U.J, {
                  tint: z.BV.GrabHandleTint,
                  onStartMove: n,
                  onEndMove: o,
                }),
              ),
          );
        }
        function j(e) {
          const t = (0, E.aB)();
          if (!t) return null;
          const n = le.k_nControlBarPitch;
          return (
            t.visible &&
            !t.dockedInDashboard &&
            l.createElement(
              a.eK,
              { bContinuousRelatch: !1 },
              l.createElement(
                a.wx,
                {
                  translation: le.getDashboardTranslation(),
                  scale: le.getDashboardScale(),
                },
                l.createElement(
                  a.wx,
                  { translation: le.getControlBarTranslation() },
                  l.createElement(
                    a.wx,
                    { translation: le.k_nKeyboardGrabTransformOffset },
                    l.createElement(
                      G.Z,
                      { min_distance: 0.2, should_head_align: !1 },
                      l.createElement(
                        a.wx,
                        {
                          translation: {
                            x: -1 * le.k_nKeyboardGrabTransformOffset.x,
                            y: -1 * le.k_nKeyboardGrabTransformOffset.y,
                            z: -1 * le.k_nKeyboardGrabTransformOffset.z,
                          },
                        },
                        l.createElement(
                          a.wx,
                          { rotation: { x: n }, curvature_pitch: n },
                          l.createElement(Z, { debugHostLocation: "Undocked" }),
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
          $ = n(138),
          ee = n(2758),
          te = n(6698);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
        })(Q || (Q = {}));
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
        function oe(e) {
          return e == p.AC || e.startsWith(p.wX);
        }
        function ie(e) {
          var t;
          const n =
            null === (t = ee.U.GetOverlayInfo(e)) || void 0 === t
              ? void 0
              : t.sHandle;
          return n ? VRHTML.VROverlay.GetVisibleTimeInSeconds(n) : 0;
        }
        function ae(e, t, n) {
          var o;
          const i = Date.now(),
            a = i - t.nDockStartMs;
          if (a >= 1e3) {
            const i = /^valve\.steam\.desktopgame\.(\d+)$/,
              r = e.match(i),
              s = g.H.Instance.SceneAppKey,
              l =
                t.dockLocation == y.RA.Theater &&
                null !==
                  (o = v.G3.settings.get(
                    "/settings/dashboard/autoShowGameTheater",
                  )) &&
                void 0 !== o &&
                o;
            void 0 === n && (n = ie(e));
            const c = Math.floor(1e3 * (n - t.fLastTotalVisibleTimeInSeconds)),
              d = {
                OverlayKeyID: e,
                Location: y.RA[t.dockLocation],
                DurationMs: a,
                VisibleMs: c > 0 ? c : void 0,
                OverlayAppID:
                  2 == (null == r ? void 0 : r.length)
                    ? parseInt(r[1], 10)
                    : void 0,
                SceneAppKeyID: "" != s ? s : void 0,
                autoShowGameTheater: l,
              };
            (t.fLastTotalVisibleTimeInSeconds = n),
              u.e.instance.AddRow("SteamVROverlayDockStats", d);
          }
          t.nDockStartMs = i;
        }
        function re(e, t, n) {
          t.dockLocation != n && (ae(e, t), (t.dockLocation = n));
        }
        function se(e) {
          e &&
            e != p.T2 &&
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
              (this.m_mailbox = new a.Nv()),
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
              (this.m_eSceneApplicationState = a.xY.None),
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
              v.G3.Init(!1),
              a.hz.getInstance(),
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
              q.Q.SteamVR.SetImplementation(
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
              q.Q.SteamVR.SetImplementation("ShowGame", this.onShowOverlay),
              q.Q.SteamVR.SetImplementation("ShowOverlay", this.onShowOverlay),
              q.Q.SteamVR.SetImplementation(
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
                            a.o4.ClearRoomSetup,
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
              n =
                t == a.a0.AppLaunch_Unknown ||
                t == a.a0.AppLaunch_Steam ||
                t == a.a0.Unknown,
              o = v.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              i = v.G3.settings.get("/settings/steamvr/enableHomeApp"),
              r = v.G3.settings.get(p.y3);
            ((n || (!o && i)) && !r) ||
              ((this.m_bWaitingOnInitialOverlayToAutoShow = !0),
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != r ? r : ""),
                500,
              )),
              (this.m_appStateChangedAutorunDisposer = (0, s.EH)(() => {
                var e;
                const t = g.H.Instance.SceneApplicationState,
                  n = t != a.xY.None;
                if (n && this.m_eSceneApplicationState == a.xY.None)
                  z.BV.HideTheaterOverlay();
                else if (
                  !n &&
                  this.m_eSceneApplicationState != a.xY.None &&
                  !z.BV.isTheaterMode &&
                  null !==
                    (e = v.G3.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of z.BV.m_mapOverlayState)
                    if (e.startsWith(p.wX)) {
                      this.setOverlayDockLocation(e, y.RA.Theater), se(e);
                      break;
                    }
                (this.m_eSceneApplicationState = t),
                  this.isOverlayActive(p.PF) &&
                    !n &&
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
                  t = g.H.Instance.SceneApplicationState !== a.xY.None;
                z.BV.m_bDashboardVisible ||
                !e ||
                t ||
                W.C.roomSetupStep != W.w.Off
                  ? this.SetGamepadFocusEnable(!1, null)
                  : this.SetGamepadFocusEnable(!0, e);
              }));
            const l = new X.JN();
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
              (0, K.W)(l);
          }
          componentDidUpdate(e, t) {
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
              ).sort(ue),
              a = this.getActiveOverlaySummonKey(),
              r = $.l.BHasMutualCapability(2),
              s = $.l.BHasMutualCapability(6),
              l = new X.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                n = z.BV.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == p.gB) continue;
              const o = new X.D3();
              o.set_tab_id(n);
              const i = this.shouldShowOverlayTab(t, !0),
                s = r && z.J_.includes(t.summon_overlay_key),
                c = z.BV.m_setOverlaysViewedThisSession.has(
                  t.summon_overlay_key,
                );
              o.set_visible_in_dashboard_menu(i && s),
                o.set_visible_in_dashboard_bar(i && (!s || c)),
                t.summon_overlay_key == p.T2
                  ? o.set_display_name((0, h.Xx)("#Steam"))
                  : o.set_display_name(t.tab_name);
              const d = new X.I_();
              switch (t.summon_overlay_key) {
                case p.T2:
                  d.set_enum(1);
                  break;
                case p.Xl:
                  d.set_enum(2);
                  break;
                case p.A4:
                  d.set_enum(3);
                  break;
                case p.PF:
                  if (
                    (d.set_enum(4), g.H.Instance.SceneAppKey.startsWith(p.I8))
                  ) {
                    const e = Number.parseInt(
                      g.H.Instance.SceneAppKey.substring(p.I8.length),
                    );
                    Number.isInteger(e) && d.set_appid(e);
                  }
                  break;
                default:
                  d.set_overlay(t.summon_overlay_key), d.set_enum(0);
              }
              o.set_icon(d),
                l.add_tabs(o),
                a == t.summon_overlay_key && l.set_selected_tab_id(n),
                p.A4 == t.summon_overlay_key && l.set_vr_settings_tab_id(n),
                t.summon_overlay_key == p.T2 && l.set_vr_steam_tab_id(n);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (n = this.m_refDesktopView.current) ||
                void 0 === n ||
                n.state.desktopIndices.forEach((t) => {
                  var n;
                  const o = `${p.r4}.${t}`,
                    i = z.BV.GetTabIdForSummonKey(o),
                    r = new X.D3();
                  r.set_tab_id(i),
                    r.set_display_name(
                      e > 1
                        ? (0, h.Xx)("#Desktop_X", t)
                        : (0, h.Xx)("#Desktop"),
                    ),
                    r.set_visible_in_dashboard_bar(!0);
                  const s = new X.I_();
                  s.set_enum(2),
                    r.set_icon(s),
                    l.add_tabs(r),
                    (null == a ? void 0 : a.startsWith(p.gB)) &&
                      (null === (n = this.m_refDesktopView.current) ||
                      void 0 === n
                        ? void 0
                        : n.currentDesktopIndex) == t &&
                      l.set_selected_tab_id(i);
                });
            }
            for (const e of i) {
              if (!e.overlay_key) continue;
              const t = z.BV.GetTabIdForSummonKey(e.overlay_key),
                n = new X.D3();
              n.set_tab_id(t),
                n.set_display_name(e.title),
                n.set_visible_in_dashboard_bar(!0);
              const i = new X.I_();
              i.set_enum(5),
                i.set_hwnd(Number.parseInt(e.hwnd)),
                n.set_icon(i),
                l.add_tabs(n),
                (null == a ? void 0 : a.startsWith(p.gB)) &&
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.sCurrentOverlayKey) == e.overlay_key &&
                  l.set_selected_tab_id(t);
            }
            l.tabs().sort(he), (0, K.W)(l);
            const c = new X.yt();
            c.add_actions(
              X.z3.fromObject({
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
              X.z3.fromObject({
                action_id: 8,
                parent_menu_action_id: d ? 5 : null,
                display_name: (0, h.Xx)("#MenuPlayspaceSetup"),
                visible_in_menu: this.BShouldShowDashboardAction(8),
                invocation: 1,
                icon: { enum: 12 },
              }),
            ),
              c.add_actions(
                X.z3.fromObject({
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
                  X.z3.fromObject({
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
                  X.z3.fromObject({
                    action_id: 9,
                    parent_menu_action_id: 5,
                    display_name: "Clear Playspace",
                    visible_in_menu: this.BShouldShowDashboardAction(9),
                    invocation: 1,
                  }),
                ),
              s ||
                (c.add_actions(
                  X.z3.fromObject({
                    action_id: 0,
                    display_name: (0, h.Xx)("#PowerMenuExitVR"),
                    visible_in_menu: this.BShouldShowDashboardAction(0),
                    invocation: 1,
                    icon: { enum: 10 },
                  }),
                ),
                c.add_actions(
                  X.z3.fromObject({
                    action_id: 1,
                    display_name: (0, h.Xx)("#PowerMenuShutdown"),
                    visible_in_menu: this.BShouldShowDashboardAction(1),
                    invocation: 1,
                    icon: { enum: 11 },
                  }),
                )),
              c.add_actions(
                X.z3.fromObject({
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
                    X.z3.fromObject({
                      action_id: 5,
                      display_name: (0, h.Xx)("#MenuPlayspaceMenu"),
                      visible_in_dashboard_bar: !0,
                      icon: { enum: 12 },
                      is_menu: !0,
                    }),
                  )
                : c.add_actions(
                    X.z3.fromObject({
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
                  X.z3.fromObject({
                    action_id: 10,
                    invocation: 3,
                    special_invocation: 1,
                    visible_in_dashboard_bar: !0,
                  }),
                ),
              (0, K.W)(c);
            const u = new X.Jl();
            u.set_windows(
              i.map((e) => {
                const t = new X.fY();
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
              (0, K.W)(u);
          }
          initializeOverlayState(e) {
            v.G3.GetAppInfo(e).then((t) => {
              var n, o;
              let i = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                i = null !== (n = v.G3.settings.get(t)) && void 0 !== n ? n : 1;
              }
              z.BV.m_mapOverlayState.set(e, {
                refOverlayWidget: l.createRef(),
                dockLocation: y.RA.Dashboard,
                nDockStartMs: Date.now(),
                xfInitial: null,
                fScale: i,
                fLastTotalVisibleTimeInSeconds: ie(e),
              }),
                (null == t ? void 0 : t.starts_theater_mode)
                  ? (this.setOverlayDockLocation(e, y.RA.Theater), se(e))
                  : oe(e) &&
                    (null !==
                      (o = v.G3.settings.get(
                        "/settings/dashboard/autoShowGameTheater",
                      )) &&
                    void 0 !== o &&
                    o
                      ? (this.setOverlayDockLocation(e, y.RA.Theater), se(e))
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
            var e, t, n, o;
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
              null === (n = this.m_dashboardThumbnailsChangedEventHandle) ||
                void 0 === n ||
                n.unregister(),
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
                (e = v.G3.settings.get(
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
            const n = -J.getDashboardDistance();
            return {
              channel: a.uM.TheaterFast,
              from: [0, t, n],
              to: [0, t - 0.15, n],
              interp: a.O3.SmoothStep,
            };
          }
          static getDashboardScale() {
            var e;
            if (J.s_dashboardUserScale) return J.s_dashboardUserScale;
            let t = 1;
            const n = z.BV.currentDashboardPosition;
            return (
              (t =
                n == Q.Near
                  ? 0.36
                  : n == Q.Middle
                    ? 0.41
                    : n == Q.Far
                      ? 0.47
                      : 0.41),
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
          static getUiScaleForLocation(e) {
            const t = z.BV.currentTheaterScreenSize;
            switch (e) {
              case y.RA.LeftHand:
              case y.RA.RightHand:
                return 0.4 * J.getDashboardScale();
              case y.RA.Dashboard:
              case y.RA.World:
                return 1 * J.getDashboardScale();
              case y.RA.Theater:
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
              (t.dockLocation == y.RA.Theater
                ? e.overlay_key != p.T2 &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard("ShowGame/theater"))
                : t.dockLocation == y.RA.Dashboard
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e.overlay_key)
                  : null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard("ShowGame/other"));
          }
          isSceneAppDimmingActive() {
            const e = g.H.Instance.SceneApplicationState !== a.xY.None,
              t =
                this.m_setSuppressingFade.size > 0 &&
                this.getActiveOverlaySummonKey() == p.A4,
              n = v.G3.settings.get(
                "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
              ),
              o = !g.H.Instance.SceneAppIsHome || !n;
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
            e.overlay_key.startsWith(p.Vq)
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay();
            const n = z.BV.m_mapOverlayState.get(e.overlay_key);
            n && ae(e.overlay_key, n, e.visible_time_in_seconds),
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
            const n = v.G3.settings.get(p.y3);
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
            this.switchToOverlayInternal(p.gB),
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
                  null === (t = v.G3.settings.get(p.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          setOverlayDockLocation(e, t, n) {
            var o, i;
            z.BV.isTheaterMode,
              (t != y.RA.LeftHand &&
                t != y.RA.RightHand &&
                t != y.RA.Theater) ||
                z.BV.m_mapOverlayState.forEach((n, o) => {
                  n.dockLocation == t && re(e, n, y.RA.Dashboard);
                });
            const a = z.BV.m_mapOverlayState.get(e);
            if (
              (a &&
                (a.dockLocation == y.RA.Theater &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e)),
                re(e, a, t),
                (a.xfInitial = n)),
              t === y.RA.Dashboard)
            )
              if (e.startsWith(p.r4)) {
                const t = Number.parseInt(e.substring(p.r4.length + 1));
                null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t);
              } else
                e.startsWith(p.Vq) &&
                  (null === (i = this.m_refDesktopView.current) ||
                    void 0 === i ||
                    i.onWindowViewChange(e));
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = this.getActiveOverlay();
            if (!t) return null;
            const n = z.BV.m_mapOverlayState.get(e),
              o = n ? n.fScale : 1,
              i = z.BV.isVRGamepadUI
                ? z.BV.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                a.wx,
                { scale: i },
                l.createElement(a.sl, {
                  mountedId: t.mountable_id,
                  fDashboardScale: o,
                }),
              ),
            );
          }
          shouldShowOverlayTab(e, t) {
            return t && e.summon_overlay_key == p.PF
              ? g.H.Instance.SceneApplicationState != a.xY.None
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
                    ((n = e.summon_overlay_key),
                    null !== (o = null == n ? void 0 : n.startsWith(p.MI)) &&
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
            const e = [p.T2, p.po];
            for (const t of e)
              if (this.hasDashboardOverlay(t)) {
                this.switchToOverlayInternal(t, "switchToDashboardLibrary");
                break;
              }
          }
          switchToSteamOverlay() {
            z.BV.isVRGamepadUI &&
              this.switchToOverlayInternal(p.T2, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var n, o, i, r;
            if (!e) return !1;
            if (e == p.Us) {
              let t = {
                  type: "show_app_binding",
                  app_key:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRApplications.GetSceneApplicationKey(),
                },
                n = "bindingui/" + a.qA[(0, a.Op)()];
              this.m_mailbox.SendMessage(n, t), (e = p.RM);
            }
            if (e.startsWith(p.r4)) {
              const t = Number.parseInt(e.substring(p.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t)),
                (e = p.gB);
            } else if (e.startsWith(p.Vq)) {
              if (
                !(null === (o = this.m_refDesktopView.current) || void 0 === o
                  ? void 0
                  : o.hasWindowView(e))
              )
                return !1;
              null === (i = this.m_refDesktopView.current) ||
                void 0 === i ||
                i.onWindowViewChange(e),
                (e = p.gB);
            }
            let s = this.findDashboardTab(e);
            return (
              !!s &&
              (this.computeFilteredOverlayTabs(!1).includes(s) &&
                v.G3.SetSettingsValue(
                  p.nf,
                  null !== (r = s.summon_overlay_key) && void 0 !== r ? r : "",
                ),
              (this.m_activeOverlayThatVanished = null),
              z.BV.m_setOverlaysViewedThisSession.add(s.summon_overlay_key),
              this.setState({ sActiveOverlayID: s.mountable_id }),
              u.e.instance.RecordUIEvent(
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
              e.push(v.G3.settings.get(p.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  J.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == p.po && !this.m_bUserManuallySwitchToOldLibrary)) &&
                e.push(p.T2),
              null == t && e.push(p.po);
            const n = e.find(this.hasDashboardOverlay);
            n && this.switchToOverlayInternal(n, "autoSwitchOverlayIfNeeded");
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
            return z.BV.m_mapOverlayState.get(e);
          }
          getActiveOverlayDockLocation() {
            var e;
            const t = this.getActiveOverlayState();
            return null !== (e = null == t ? void 0 : t.dockLocation) &&
              void 0 !== e
              ? e
              : y.RA.Dashboard;
          }
          hideMessageOverlay() {
            this.getActiveOverlaySummonKey() == p.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e, t) {
            var n;
            if (!v.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const o = z.BV.m_mapOverlayState.get(e.overlay_key);
            (null == o ? void 0 : o.dockLocation) != y.RA.Theater &&
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
                ? this.switchToOverlayInternal(e.overlay_key, e.reason)
                : z.BV.isTheaterMode
                  ? z.BV.getTheaterOverlay() != p.T2 &&
                    q.Q.Steam.ExecuteSteamURL({
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
            const t = y.RA[e.dock_location.toString()];
            if (void 0 === t)
              return void console.log(
                "dock_overlay_requested: invalid dock_location",
                e,
              );
            const n = z.BV.m_mapOverlayState.get(e.overlay_key);
            n
              ? n.dockLocation != t
                ? this.setOverlayDockLocation(e.overlay_key, t)
                : console.log(
                    "dock_overlay_requested: ignoring redundant request",
                    e,
                  )
              : console.log("dock_overlay_requested: unknown overlay_key", e);
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(p.f8, "onHideDashboardRequested")
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          onVRLinkRoomSetup(e) {
            e.mode == a.o4.RecenterCountdown
              ? W.C.setRoomSetupStep(W.w.RecenterCountdown)
              : e.mode == a.o4.FloorAdjustExisting
                ? W.C.setRoomSetupStep(W.w.FloorAdjustExisting)
                : e.mode == a.o4.RoomSetupFloor
                  ? W.C.setRoomSetupStep(W.w.RoomSetupFloor)
                  : e.mode == a.o4.ClearRoomSetup
                    ? VRHTML.VRChaperoneSetup.ClearRoomSetup()
                    : console.error("Unknown onVRLinkRoomSetup mode ", e.mode);
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
            if (z.BV.m_bDashboardVisible) return;
            u.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = g.H.Instance.SceneAppKey,
              n = g.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              n
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(p.PF, "show")),
              (this.m_activeOverlayThatVanished = null),
              (z.BV.m_bDashboardVisible = !0);
            let o = { type: J.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", o),
              (0, a.qI)();
          }
          hide(e) {
            z.BV.m_bDashboardVisible &&
              ((this.m_activeOverlayThatVanished = null),
              (z.BV.m_bDashboardVisible = !1),
              this.setState({ eShowPopoverMenu: Y.None }),
              u.e.instance.EndDashboardSession(e));
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView(e) {
            const t = z.BV.m_bRoomViewActive,
              n = "boolean" == typeof e ? e : !t;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(n);
          }
          onLegacyQuickLaunchButtonClick() {
            this.switchToOverlayInternal(p.po);
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
                    a.Uk.Prop_Hmd_SupportsVRGamepadFocus_Bool,
                  )
            ) {
              let n = {
                type: "set_enable_vr_gamepad_focus",
                enable: e,
                sOverlayKey: t,
              };
              this.m_mailbox.SendMessage("vrcompositor_systemlayer", n);
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
              n = this.BShouldShowDashboardAction(1);
            let o = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (o = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                a.Uk.DeviceCanPowerOff_Bool,
              ));
            const i = g.H.Instance.SceneAppName,
              r = g.H.Instance.SceneAppIsHome;
            let s, c;
            return (
              (s = r
                ? (0, h.Xx)("#Exit_SteamVR_Home")
                : i
                  ? (0, h.Xx)("#PowerMenuQuitSceneApp", i)
                  : (0, h.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (c = r
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                l.createElement(
                  l.Fragment,
                  null,
                  z.BV.isVRGamepadUI &&
                    l.createElement(b.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(p.po),
                          this.showPopoverMenu(Y.None);
                      },
                    }),
                  o &&
                    l.createElement(b.dy, {
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
                    l.createElement(b.dy, {
                      label: s,
                      imageUrl: c,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(Y.None);
                      },
                    }),
                  l.createElement(b.dy, {
                    label: (0, h.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  n &&
                    l.createElement(b.dy, {
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
            if (i.summon_overlay_key == p.gB) {
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
                return l.createElement(b.Rk, {
                  name:
                    null === (n = this.state.mapWindows.get(e)) || void 0 === n
                      ? void 0
                      : n.title,
                  iconUrl: this.getDashboardIconUri(i),
                });
              }
              return l.createElement(b.Rk, {
                name:
                  "Desktop " +
                  (null === (o = this.m_refDesktopView.current) || void 0 === o
                    ? void 0
                    : o.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(i),
              });
            }
            return i.summon_overlay_key == p.RM
              ? l.createElement(b.Rk, {
                  name: (0, h.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : l.createElement(b.Rk, {
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
            let n = [];
            const o =
              null !== (e = v.G3.settings.get(p.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, a.M9)((0, a.eQ)(e[3], e[0])),
                i = (0, a.M9)((0, a.eQ)(e[1], e[0])),
                r = (0, a.dq)(t, i),
                s = (0, a.Pd)((0, a.tS)(t, i, r)),
                c = (0, a.LY)((0, a.eQ)(e[0], e[3]));
              if (c < 0.4) continue;
              let d = Math.max(1, Math.floor(c));
              for (let t = 0; t < d; t++) {
                let i = (t + 1) / (d + 1),
                  r = (0, a.Oq)();
                (r.rotation = s),
                  (r.translation = (0, a.q9)(i, e[0], e[3])),
                  (r.scale = { x: 0.005, y: 0.005, z: o });
                let c = l.createElement(
                  a.wx,
                  { transform: r },
                  l.createElement(
                    a.Dd,
                    { value: 0.25 },
                    l.createElement(
                      a.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      l.createElement(a.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: a.xj.Backface,
                      }),
                    ),
                  ),
                );
                n.push(c);
              }
              if (n.length > 20) break;
            }
            return n;
          }
          render() {
            const e = this.getActiveOverlaySummonKey(),
              t =
                z.BV.m_bDashboardVisible &&
                this.state.setForcingBoundsVisible[e],
              n = t && t.size > 0,
              o = W.C.roomSetupStep != W.w.Off;
            let i = [];
            return (
              n && (i = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                l.Fragment,
                null,
                !o &&
                  l.createElement(
                    "div",
                    { className: "DashboardMain" },
                    n && l.createElement(ne, null),
                    n && l.createElement("span", null, i),
                    z.BV.m_bDashboardVisible && this.renderDashboard(),
                    l.createElement(j, null),
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
            return b.Eu.has(e)
              ? b.Eu.get(e)
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
              n = b.IO.Center;
            return l.createElement(b.B8, {
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
              (this.isOverlayActive(p.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith(p.Vq))) &&
              (this.state.eShowPopoverMenu == Y.None ||
                this.state.eShowPopoverMenu == Y.Windows)
            );
          }
          isVolumeTrayActive() {
            return this.state.eShowPopoverMenu == Y.Volume;
          }
          isSteamOverlayActive() {
            return (
              this.isOverlayActive(p.T2) &&
              this.state.eShowPopoverMenu == Y.None
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
              enable: null != e ? e : !z.BV.isGroupMode,
            };
            this.m_mailbox.SendMessage("web_steam_mailbox", t);
          }
          BShouldShowDashboardAction(e) {
            var t, n, o, i, r;
            const s =
                null !== (t = v.G3.settings.get(p.Av)) && void 0 !== t && t,
              l =
                null !== (n = v.G3.settings.get(p.k_)) && void 0 !== n ? n : 0;
            let c = !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  a.Uk.SupportsInHMDRoomSetup_Bool,
                ));
            switch (e) {
              case 0:
                return (
                  null ===
                    (o = v.G3.settings.get(
                      "/settings/dashboard/allowExitVR",
                    )) ||
                  void 0 === o ||
                  o
                );
              case 1:
                return v.G3.settings.get(
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
                    (i =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            a.Uk.Prop_Driver_RecenterSupport_Int32,
                          )) && void 0 !== i
                    ? i
                    : 0)
                );
              case 11:
                return z.BV.isTheaterMode || W.C.m_bShowFloor;
              case 12:
                return (
                  null !==
                    (r = v.G3.settings.get(
                      "/settings/dashboard/allowUserGuide",
                    )) &&
                  void 0 !== r &&
                  r
                );
              case 8:
              case 7:
              case 9:
                return c;
            }
          }
          renderLegacyControlBar(e, t) {
            var n, o, i, r;
            const s =
                null ===
                  (n = v.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === n ||
                n,
              c =
                null ===
                  (o = v.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === o ||
                o,
              u = ee.U.BOverlayExists(p.T2),
              _ = !z.BV.isVRGamepadUI,
              S = !(
                null !==
                  (i = v.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== i &&
                i
              ),
              y = g.H.Instance.SceneApplicationState,
              C = g.H.Instance.SceneAppIsHome,
              f =
                null ===
                  (r = v.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r
                  ? p.ml
                  : null,
              k = g.H.Instance.SceneAppKey;
            let E = "images/appimage_default.png";
            return (
              k && (E = "/app/image?app_key=" + k),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    a.VW,
                    { color: z.BV.ControlBarTint },
                    l.createElement(
                      a.wx,
                      { translation: { z: 1e-5 } },
                      l.createElement(
                        a.s_,
                        {
                          curvature_origin_id: f,
                          meters_per_pixel: p.F$,
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
                              l.createElement(b.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_menu_c.svg",
                                label: (0, h.Xx)("#Menu"),
                                style: b.zk.Small,
                                onClick: () => this.showPopoverMenu(Y.Power),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            l.createElement(
                              b.dw,
                              { style: b.zk.Small },
                              u &&
                                l.createElement(b.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/vr_steam.svg",
                                  label: (0, h.Xx)("#Steam"),
                                  active: this.isSteamOverlayActive(),
                                  onClick: () => this.switchToSteamOverlay(),
                                }),
                              _ &&
                                l.createElement(b.B8, {
                                  label: (0, h.Xx)("#Library"),
                                  imageUrl:
                                    "/dashboard/images/icons/svr_items.svg",
                                  active: this.isOverlayActive(p.po),
                                  onClick: this.onLegacyQuickLaunchButtonClick,
                                }),
                              c &&
                                l.createElement(b.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_desktop_alt.svg",
                                  label: (0, h.Xx)("#Desktops"),
                                  active: this.isDesktopTrayActive(),
                                  onClick: () =>
                                    this.switchToOverlayInternal(p.gB),
                                }),
                            ),
                            l.createElement(
                              b.dw,
                              { style: b.zk.Small },
                              l.createElement(
                                l.Fragment,
                                null,
                                e.map(
                                  this.renderExternalOverlayControlBarButton,
                                ),
                                t.length > 0 &&
                                  l.createElement(b.B8, {
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
                            y != a.xY.None &&
                              l.createElement(
                                "div",
                                { className: "NowPlayingSpacer" },
                                l.createElement(
                                  m.d,
                                  {
                                    allowableParentSelectors: [
                                      ".DashboardMain",
                                    ],
                                  },
                                  l.createElement(
                                    a.VW,
                                    { color: z.BV.ControlBarTint },
                                    l.createElement(
                                      a.wx,
                                      { translation: { z: 0.02 } },
                                      l.createElement(
                                        a.s_,
                                        {
                                          debug_name: "NowPlayingButton",
                                          interactive: !0,
                                          curvature_origin_id: f,
                                          meters_per_pixel: p.F$,
                                        },
                                        l.createElement(
                                          "div",
                                          { className: "ControlBar" },
                                          l.createElement(b.NT, {
                                            label: C
                                              ? (0, h.Xx)("#SteamVR_Home")
                                              : (0, h.Xx)("#Now_Playing"),
                                            active: this.isOverlayActive(p.PF),
                                            style: b.zk.App,
                                            imageUrl: E,
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
                              b.dw,
                              { style: b.zk.Small },
                              this.BShouldShowDashboardAction(6) &&
                                l.createElement(b.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_recenter.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, h.Xx)("#Button_Recenter"),
                                  onClick: () => {
                                    W.C.setRoomSetupStep(W.w.RecenterCountdown);
                                  },
                                }),
                              this.BShouldShowDashboardAction(8) &&
                                l.createElement(b.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_room_setup.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, h.Xx)("#RoomSetup"),
                                  onClick: () => {},
                                }),
                              this.BShouldShowDashboardAction(2) &&
                                l.createElement(b.B8, {
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
                              l.createElement(b.D6, {
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
                            S &&
                              l.createElement(b.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_settings.svg",
                                active: this.isOverlayActive(p.A4),
                                enabled: this.hasDashboardOverlay(p.A4),
                                label: (0, h.Xx)("#VRSettings"),
                                style: b.zk.Small,
                                centerPanelAnchorID: "VolumeButton",
                                onClick: () =>
                                  this.switchToOverlayInternal(p.A4),
                              }),
                          ),
                        ),
                        this.renderLegacyControlBarTrays(f),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const n = z.BV.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(C.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: n,
                onToggleWindowList: () => this.showPopoverMenu(Y.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              l.createElement(b.z, {
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
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetInt32Property(
                          "/user/head",
                          a.Uk.DashboardLinkSupport_Int32,
                        )) && void 0 !== t
                  ? t
                  : 0,
              o = z.BV.isVRGamepadUI && !!(1 & n) && z.BV.m_bLinkStreamActive;
            let i = o ? 0.425 : 0.35;
            return l.createElement(
              l.Fragment,
              null,
              o &&
                l.createElement(
                  a.wx,
                  { translation: { y: 0.075, z: 0 } },
                  l.createElement(ce, {
                    onClick: () => this.handleVRLinkInfoClick(),
                  }),
                ),
              l.createElement(
                a.s_,
                {
                  id: "VRGamepadUI-DashboardBar-Panel",
                  debug_name: "VRGamepadUI-DashboardBar-Panel",
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e,
                  overlay_key: p.BZ,
                  origin: a.Ic.TopCenter,
                  meters_per_pixel: z.BV.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
                },
                l.createElement(a.at, {
                  id: "VRGamepadUI-DashboardBar-Panel-TopCenter",
                  location: a.Ic.TopCenter,
                }),
                l.createElement(
                  a.at,
                  {
                    id: "VRGamepadUI-DashboardBar-Panel-BottomCenter",
                    location: a.Ic.BottomCenter,
                  },
                  l.createElement(a.wx, { id: p.ZN, translation: { y: i } }),
                  l.createElement(a.wx, { id: p.dG, translation: { y: -0.1 } }),
                ),
              ),
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(z.BV.m_mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != y.RA.Dashboard);
            return l.createElement(
              l.Fragment,
              null,
              e.map((e) => {
                var t;
                return l.createElement(y.Sm, {
                  bDashboardShown: z.BV.m_bDashboardVisible,
                  bHasSceneApp:
                    g.H.Instance.SceneApplicationState !== a.xY.None,
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
              this.isOverlayActive(p.gB) &&
              (0, y.sg)(this.getActiveOverlayDockLocation())
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
              r =
                null !==
                  (o =
                    null === (n = this.m_refDesktopView.current) || void 0 === n
                      ? void 0
                      : n.desktopCount) && void 0 !== o
                  ? o
                  : 1,
              s = v.G3.settings.get(p.YL) || z.BV.m_bShowLegacyBar;
            return l.createElement(
              l.Fragment,
              null,
              s &&
                l.createElement(
                  a.Y9,
                  {
                    tabName: (0, h.Xx)("#Library"),
                    iconUri: "/dashboard/images/icons/svr_items.svg",
                    summonOverlayKey: p.po,
                  },
                  l.createElement(F, {
                    visible:
                      z.BV.m_bDashboardVisible && this.isOverlayActive(p.po),
                    onGameLaunched: this.onGameLaunched,
                  }),
                ),
              l.createElement(
                a.Y9,
                { tabName: (0, h.Xx)("#Now_Playing"), summonOverlayKey: p.PF },
                l.createElement(T, {
                  visible:
                    z.BV.m_bDashboardVisible && this.isOverlayActive(p.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              l.createElement(
                a.Y9,
                {
                  summonOverlayKey: p.gB,
                  tabName:
                    r > 1 ? (0, h.Xx)("#Desktop_X", i) : (0, h.Xx)("#Desktop"),
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
                visible: z.BV.m_bDashboardVisible && this.isOverlayActive(p.A4),
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
          renderOverlayControlBar() {
            var e, t, n, o;
            let i = !1,
              r = !1;
            const s = this.getActiveOverlayKey(),
              c =
                null === (e = ee.U.GetOverlayInfo(s)) || void 0 === e
                  ? void 0
                  : e.sHandle;
            if (!c) return null;
            try {
              (i = VRHTML.VROverlay.GetFlag(c, a.Z9.EnableControlBarKeyboard)),
                (r = VRHTML.VROverlay.GetFlag(c, a.Z9.EnableControlBarClose));
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
                  ? p.ml
                  : null,
              u = { x: 0, y: 0.15, z: 0 },
              m =
                (null === (n = z.BV.m_mapOverlayState.get(s)) || void 0 === n
                  ? void 0
                  : n.dockLocation) == y.RA.Dashboard;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                a.wx,
                { parent_id: p.ZN },
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    a.s_,
                    {
                      curvature_origin_id: d,
                      origin: a.Ic.TopCenter,
                      interactive: !0,
                      meters_per_pixel: p.F$,
                      debug_name: "ActiveOverlayControlBar",
                      reflect: 0.1,
                    },
                    l.createElement(
                      "div",
                      { className: "TransparentOverlayControlBar" },
                      l.createElement(
                        "div",
                        { className: "Section" },
                        l.createElement(b.CS, {
                          tooltipTranslation: u,
                          overlayKey: this.getActiveOverlayKey(),
                          additionalClassNames: "LargeIcon",
                        }),
                        null === (o = this.m_refDesktopView.current) ||
                          void 0 === o
                          ? void 0
                          : o.renderControlBarButtons(u),
                      ),
                      l.createElement(
                        "div",
                        { className: "Section" },
                        !m &&
                          l.createElement(b.zN, {
                            icon: l.createElement(te.gR, null),
                            title: (0, h.Xx)("#ReturnToDashboard"),
                            tooltipTranslation: u,
                            onClick: () => {
                              const e = this.getActiveOverlayKey();
                              this.setOverlayDockLocation(e, y.RA.Dashboard);
                            },
                            additionalClassNames: "LargeIcon",
                          }),
                        m &&
                          l.createElement(
                            l.Fragment,
                            null,
                            l.createElement(b.zN, {
                              iconUrl:
                                "/dashboard/images/icons/mirror_left.png",
                              title: (0, h.Xx)("#DockOnLeftController"),
                              tooltipTranslation: u,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, y.RA.LeftHand);
                              },
                              enabled:
                                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                  a.Kg.TrackedControllerRole_LeftHand,
                                ) != a.Kf,
                              active:
                                this.getActiveOverlayDockLocation() ==
                                y.RA.LeftHand,
                              additionalClassNames: "LargeIcon",
                            }),
                            l.createElement(b.zN, {
                              iconUrl:
                                "/dashboard/images/icons/mirror_right.png",
                              title: (0, h.Xx)("#DockOnRightController"),
                              tooltipTranslation: u,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, y.RA.RightHand);
                              },
                              enabled:
                                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                  a.Kg.TrackedControllerRole_RightHand,
                                ) != a.Kf,
                              active:
                                this.getActiveOverlayDockLocation() ==
                                y.RA.RightHand,
                              additionalClassNames: "LargeIcon",
                            }),
                            " ",
                          ),
                      ),
                      (m || r) &&
                        l.createElement(
                          "div",
                          { className: "Section" },
                          m &&
                            l.createElement(b.zN, {
                              icon: l.createElement(te.yR, null),
                              title: (0, h.Xx)("#FloatInWorld"),
                              tooltipTranslation: u,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, y.RA.World);
                              },
                              active:
                                this.getActiveOverlayDockLocation() ==
                                y.RA.World,
                            }),
                          m &&
                            l.createElement(b.zN, {
                              icon: l.createElement(te.SV, null),
                              title: (0, h.Xx)("#ViewInTheater"),
                              tooltipTranslation: u,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, y.RA.Theater);
                              },
                              active:
                                this.getActiveOverlayDockLocation() ==
                                y.RA.Theater,
                              additionalClassNames: "LargeIcon",
                            }),
                          r &&
                            l.createElement(b.zN, {
                              iconUrl:
                                "/dashboard/images/icons/icon_close_black.png",
                              title: (0, h.Xx)(
                                oe(s) ? "#QuitApp" : "#CloseOverlay",
                              ),
                              tooltipTranslation: u,
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
              n = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              o = t ? 0 : 0.1,
              i = !t;
            let r = null;
            return (
              this.isDesktopOverlayActive() && (r = 2048),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  a.wx,
                  { translation: { y: 0.008 } },
                  l.createElement(
                    a.VW,
                    { color: n },
                    l.createElement(
                      a.s_,
                      {
                        curvature_origin_id: e,
                        origin: a.Ic.BottomCenter,
                        interactive: !1,
                        meters_per_pixel: p.F$,
                        debug_name: "StatusBar",
                        reflect: o,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: r } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          i && this.renderStatusBarTitle(),
                          l.createElement(b.j6, {
                            role: a.Kg.TrackedControllerRole_LeftHand,
                            style: S.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(b.j6, {
                            deviceIndex: a.wU,
                            style: S.A.VerticalBattery,
                          }),
                          l.createElement(b.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(b.j6, {
                            role: a.Kg.TrackedControllerRole_RightHand,
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
                a.wx,
                { translation: { y: 0.01 } },
                l.createElement(
                  a.s_,
                  {
                    id: "VRGamepadUI-Header-Panel",
                    debug_name: "VRGamepadUI-Header-Panel",
                    interactive: !0,
                    curvature_origin_id: e,
                    overlay_key: p.rl,
                    origin: a.Ic.BottomCenter,
                    width: 2.667,
                    reflect: 0.01,
                  },
                  l.createElement(a.at, {
                    id: "VRGamepadUI-Header-Panel-TopCenter",
                    location: a.Ic.TopCenter,
                  }),
                ),
              ),
            );
          }
          renderDashboard() {
            var e, t, n, o, i;
            const r = this.computeFilteredOverlayTabs(!1),
              s = z.BV.isVRGamepadUIReady,
              c = !z.BV.isVRGamepadUI || z.BV.m_bShowLegacyBar;
            let d = [],
              h = [],
              u =
                null !== (e = v.G3.settings.get(p.FM)) && void 0 !== e ? e : 2;
            if (r.length > u) {
              const e = v.G3.settings.get(p.nf);
              (d = [
                null !== (t = r.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : r[0],
              ]),
                (h = r.filter((e) => !d.includes(e)));
            } else d = r;
            let m = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && m.push(e);
            });
            const g = this.getActiveOverlayDockLocation(),
              _ = (0, y.fT)(g),
              S = (0, y.sg)(g),
              C = this.getActiveOverlayKey(),
              f =
                null === (n = ee.U.GetOverlayInfo(C)) || void 0 === n
                  ? void 0
                  : n.sHandle,
              k = !!f && VRHTML.VROverlay.GetFlag(f, a.Z9.MinimalControlBar),
              E =
                null ===
                  (o = v.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o,
              I = E ? p.ml : null,
              M = { y: k ? -1.03375 : -0.9, z: 0.05 },
              R = s ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              T = J.k_nControlBarPitch;
            let w = E ? 1 : 0;
            const O =
                null !==
                  (i = v.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== i &&
                i,
              V = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                a.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: O && this.state.bPlacementModeActive,
                },
                l.createElement(
                  a.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    a.wx,
                    { translation: J.getDashboardTranslation() },
                    l.createElement(
                      a.wx,
                      { translation: { y: -0.15 } },
                      l.createElement(
                        G.Z,
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
                          a.wx,
                          { translation: { y: 0.15 } },
                          l.createElement(a.wx, {
                            id: I,
                            translation: { z: J.getDashboardDistance() + 1.8 },
                          }),
                          l.createElement(
                            a.wx,
                            { scale: J.getDashboardScale() },
                            l.createElement(
                              a.wx,
                              { parent_id: V },
                              z.BV.isVRGamepadUI
                                ? this.renderVRGamepadUIHeader(I)
                                : this.renderLegacyHeader(I),
                            ),
                            l.createElement(
                              a.wx,
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
                              a.wx,
                              { parent_id: s ? p.dG : p.f$ },
                              l.createElement(U.J, {
                                curvature_origin_id: I,
                                tint: z.BV.GrabHandleTint,
                                onStartMove: this.onGrabStart,
                                onEndMove: this.onGrabEnd,
                              }),
                            ),
                            !1,
                            l.createElement(
                              a.wx,
                              { translation: R, id: p.Qg },
                              !k && this.renderOverlayControlBar(),
                              l.createElement(a.wx, {
                                id: p.f$,
                                translation: { y: 0.08, z: -0.12 },
                              }),
                              l.createElement(
                                a.wx,
                                {
                                  rotation: { x: T },
                                  curvature_pitch: T,
                                  translation: s ? { y: -0.65, z: 0.2 } : {},
                                },
                                c && this.renderLegacyControlBar(d, h),
                                l.createElement(
                                  a.wx,
                                  { translation: { y: -0.65, z: -0.01 } },
                                  l.createElement(de, null),
                                ),
                              ),
                              s &&
                                l.createElement(
                                  a.wx,
                                  { rotation: { x: T }, curvature_pitch: T },
                                  this.renderVRGamepadUIBar(I),
                                ),
                              l.createElement(
                                a.wx,
                                { rotation: { x: T } },
                                l.createElement(
                                  a.wx,
                                  {
                                    translation:
                                      J.k_nKeyboardGrabTransformOffset,
                                  },
                                  l.createElement(
                                    G.Z,
                                    {
                                      min_distance: 0.2,
                                      should_head_align: !1,
                                    },
                                    l.createElement(
                                      a.wx,
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
                                        a.wx,
                                        {
                                          rotation: { x: -10 },
                                          curvature_pitch: T,
                                        },
                                        !1,
                                        this.state.bKeyboardVisible &&
                                          l.createElement(Z, {
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
                                  a.wx,
                                  {
                                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                                    rotation: { y: 19 * w },
                                  },
                                  l.createElement(
                                    a.s_,
                                    {
                                      curvature_origin_id: I,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: a.Ic.BottomRight,
                                      debug_name: "Power Menu",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderLegacyPowerMenu(),
                                  ),
                                ),
                              this.state.eShowPopoverMenu ==
                                Y.ExternalOverlays &&
                                l.createElement(
                                  a.wx,
                                  {
                                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                                    rotation: { y: 6 * w },
                                  },
                                  l.createElement(
                                    a.s_,
                                    {
                                      curvature_origin_id: I,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: a.Ic.BottomRight,
                                      debug_name: "OverlaysList",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderPopoverMenu(
                                      l.createElement(
                                        l.Fragment,
                                        null,
                                        " ",
                                        h.map((e) =>
                                          l.createElement(b.dy, {
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
                                  a.wx,
                                  {
                                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                                    rotation: { y: -16 * w },
                                  },
                                  l.createElement(
                                    a.s_,
                                    {
                                      curvature_origin_id: I,
                                      height: void 0,
                                      width: 0.925,
                                      interactive: !0,
                                      origin: a.Ic.BottomRight,
                                      debug_name: "WindowList",
                                      sort_depth_bias: -0.1,
                                    },
                                    this.renderPopoverMenu(
                                      l.createElement(
                                        l.Fragment,
                                        null,
                                        " ",
                                        m.map((e) =>
                                          l.createElement(b.dy, {
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
          (0, i.gn)([r.ak], le.prototype, "isSceneAppDimmingActive", null),
          (0, i.gn)(
            [r.ak],
            le.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, i.gn)([r.ak], le.prototype, "onKeyboardVisibilityChanged", null),
          (0, i.gn)([r.ak], le.prototype, "onGrabStart", null),
          (0, i.gn)([r.ak], le.prototype, "onGrabEnd", null),
          (0, i.gn)(
            [r.ak],
            le.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, i.gn)([r.ak], le.prototype, "onDashboardOverlayCreated", null),
          (0, i.gn)([r.ak], le.prototype, "onDashboardOverlayDestroyed", null),
          (0, i.gn)([r.ak], le.prototype, "onUpdateDashboardTabs", null),
          (0, i.gn)([r.ak], le.prototype, "onWindowViewCreated", null),
          (0, i.gn)([r.ak], le.prototype, "onWindowViewDestroyed", null),
          (0, i.gn)([r.ak], le.prototype, "onUpdateWindowList", null),
          (0, i.gn)([r.ak], le.prototype, "onUpdateDebugInfo", null),
          (0, i.gn)([r.ak], le.prototype, "setOverlayDockLocation", null),
          (0, i.gn)([r.ak], le.prototype, "onShowDashboardRequested", null),
          (0, i.gn)([r.ak], le.prototype, "onDockOverlayRequested", null),
          (0, i.gn)([r.ak], le.prototype, "onHideDashboardRequested", null),
          (0, i.gn)([r.ak], le.prototype, "onVRLinkRoomSetup", null),
          (0, i.gn)([r.ak], le.prototype, "show", null),
          (0, i.gn)([r.ak], le.prototype, "hide", null),
          (0, i.gn)([r.ak], le.prototype, "setPlacementModeActive", null),
          (0, i.gn)([r.ak], le.prototype, "onToggleRoomView", null),
          (0, i.gn)(
            [r.ak],
            le.prototype,
            "onLegacyQuickLaunchButtonClick",
            null,
          ),
          (0, i.gn)([r.ak], le.prototype, "onUserGuideClick", null),
          (0, i.gn)([r.ak], le.prototype, "SetGamepadFocusEnable", null),
          (0, i.gn)([r.ak], le.prototype, "renderLegacyPowerMenu", null),
          (0, i.gn)([r.ak], le.prototype, "startPopoverMenuTimeout", null),
          (0, i.gn)([r.ak], le.prototype, "clearPopoverMenuTimeout", null),
          (0, i.gn)([r.ak], le.prototype, "showPopoverMenu", null),
          (0, i.gn)([r.ak], le.prototype, "popoverMenuMouseLeave", null),
          (0, i.gn)([r.ak], le.prototype, "popoverMenuMouseUp", null),
          (0, i.gn)([r.ak], le.prototype, "hasDashboardOverlay", null),
          (0, i.gn)(
            [r.ak],
            le.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, i.gn)([r.ak], le.prototype, "isDesktopTrayActive", null),
          (0, i.gn)([r.ak], le.prototype, "isVolumeTrayActive", null),
          (0, i.gn)([r.ak], le.prototype, "isSteamOverlayActive", null),
          (0, i.gn)([r.ak], le.prototype, "isDesktopOverlayActive", null),
          (0, i.gn)([r.ak], le.prototype, "handleVRLinkInfoClick", null),
          (0, i.gn)([r.ak], le.prototype, "ToggleIncognitoMode", null),
          (0, i.gn)([r.ak], le.prototype, "getRenderModelForShape", null),
          (0, i.gn)([r.ak], le.prototype, "isDesktopViewVisible", null),
          (0, i.gn)([r.ak], le.prototype, "onGameLaunched", null),
          (0, i.gn)([r.ak], le.prototype, "onAddPortal", null),
          (0, i.gn)([r.ak], le.prototype, "onRemovePortal", null),
          (0, i.gn)([r.ak], le.prototype, "onActiveOverlayScaleChange", null),
          (0, i.gn)([r.ak], le.prototype, "onActiveOverlayClosed", null),
          (0, i.gn)([s.LO], le, "s_dashboardUserDistance", void 0),
          (0, i.gn)([s.LO], le, "s_dashboardUserScale", void 0),
          (le = J = (0, i.gn)([_.Pi], le));
        const ce = (0, _.Pi)(function (e) {
            var t;
            let n =
              null !== (t = VRHTML.GetHostInfo(a.zA.Hostname)) && void 0 !== t
                ? t
                : "unknown";
            return l.createElement(
              a.s_,
              {
                meters_per_pixel: p.F$,
                interactive: !0,
                debug_name: "vrlink-info",
              },
              l.createElement(
                "div",
                { className: "FloatingButtonRow" },
                l.createElement(
                  d.z,
                  { className: "ButtonControl", onClick: e.onClick },
                  l.createElement("span", null, n.toLowerCase(), " "),
                ),
              ),
            );
          }),
          de = (0, _.Pi)(function (e) {
            return null;
          }),
          pe = [
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
          let n = -1,
            o = -1;
          for (let i = 0; i < pe.length && n < 0 && o < 0; i++)
            pe[i](e) && (n = i), pe[i](t) && (o = i);
          return (
            n < 0 && (n = pe.length),
            o < 0 && (o = pe.length),
            n == o ? e.tab_id() - t.tab_id() : n - o
          );
        }
        function ue(e, t) {
          var n, o, i, a, r, s;
          let l;
          const c =
              null !== (n = null == e ? void 0 : e.product_name) && void 0 !== n
                ? n
                : "",
            d =
              null !== (o = null == t ? void 0 : t.product_name) && void 0 !== o
                ? o
                : "";
          if (((l = c.localeCompare(d)), 0 != l)) return l;
          const p =
              null !== (i = null == e ? void 0 : e.title) && void 0 !== i
                ? i
                : "",
            h =
              null !== (a = null == t ? void 0 : t.title) && void 0 !== a
                ? a
                : "";
          if (((l = p.localeCompare(h)), 0 != l)) return l;
          const u =
              null !== (r = null == e ? void 0 : e.hwnd) && void 0 !== r
                ? r
                : "",
            m =
              null !== (s = null == t ? void 0 : t.hwnd) && void 0 !== s
                ? s
                : "";
          return u.localeCompare(m);
        }
      },
      4790: (e, t, n) => {
        "use strict";
        n.d(t, {
          MH: () => E,
          RA: () => i,
          Sm: () => O,
          Uj: () => a,
          fT: () => R,
          sg: () => M,
        });
        var o,
          i,
          a,
          r = n(655),
          s = n(5876),
          l = n(7056),
          c = n(7062),
          d = n(7294),
          p = n(424),
          h = n(7176),
          u = n(1628),
          m = n(9626),
          g = n(421),
          v = n(6063),
          _ = n(6509),
          S = n(792),
          y = n(9347),
          b = n(8261),
          C = n(6459),
          f = n(6698),
          k = n(3568);
        function E(e) {
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
          })(a || (a = {}));
        const I = "TheaterCurvatureOriginId";
        function M(e) {
          return e == i.Dashboard;
        }
        function R(e) {
          return e == i.World;
        }
        function T(e) {
          return e == i.LeftHand || e == i.RightHand;
        }
        function w(e) {
          switch (e) {
            case i.LeftHand:
              return "/user/hand/left";
            case i.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        let O = (o = class extends d.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: null,
                sParent: w(this.props.dockLocation),
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
                  sParent: w(this.props.dockLocation),
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
            return (
              (this.props.sOverlayKey.startsWith(h.r4) ||
                this.props.sOverlayKey.startsWith(h.Vq)) &&
                ((i = y.N.k_nDesktopPanelBaseHeight), (o = (i * n.x) / n.y)),
              { width: o, height: i }
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
                const n = m.BV.m_mapOverlayState.get(this.props.sOverlayKey);
                return t * (n ? n.fScale : 1);
              case i.Theater:
                let o = e == m.fq.Large ? 2.35 : 1.8;
                const a = this.getCurrentOverlaySize();
                return null === a || 0 == a.height ? o : o / a.height;
            }
            return 1;
          }
          setInitialTransformForTheater() {
            const e = m.BV.currentTheaterScreenSize == m.fq.Large ? 0.6 : 0.4;
            switch (m.BV.currentTheaterScreenAlignment) {
              case m.A3.PlayArea: {
                let t = (0, s.Oq)();
                (t.translation.y = e),
                  (t.translation.z = -3.3),
                  this.setState({ xfTransform: t });
                break;
              }
              case m.A3.Dashboard: {
                let t = 3;
                s.hz
                  .getInstance()
                  .requestSGTransform(h.Az + "::active_overlay_transform", t)
                  .then((t) => {
                    let n = (0, s.Oq)();
                    (n.rotation = t.rotation),
                      (n.translation = {
                        x: t.translation.x,
                        y: e,
                        z: t.translation.z,
                      }),
                      this.setState({ xfTransform: n });
                  })
                  .catch((t) => {
                    console.warn(
                      "Failed to get SGTransform in setInitialTransformForTheater. Using head fallback",
                      t,
                    );
                    let n = (function () {
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
                          n = -0.75,
                          o = (0, s.Pf)(e.xfDeviceToAbsoluteTracking);
                        let i = (0, s.Nz)(o);
                        i.y = 0;
                        let a = (0, s.mT)((0, s.M9)(i), t);
                        a.y += n;
                        let r = (0, s.Oq)();
                        return (
                          (r.rotation = o.rotation),
                          (r.translation = (0, s.ui)(a, o.translation)),
                          r
                        );
                      }
                      return null;
                    })();
                    (null == n ? void 0 : n.translation) &&
                      (n.translation.y = e),
                      this.setState({ xfTransform: n });
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
                case i.LeftHand:
                case i.RightHand:
                case i.World:
                  this.setState({ xfTransform: this.props.xfInitial });
              }
            else
              switch (this.props.dockLocation) {
                case i.Dashboard:
                case i.LeftHand:
                case i.RightHand: {
                  let e = (0, s.Oq)();
                  (e.rotation = (0, s.UU)({ x: -45, y: 0, z: 0 })),
                    this.setState({ xfTransform: e });
                  break;
                }
                case i.World:
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
                case i.Theater:
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
            let n = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_RightHand,
            ) != s.Kf &&
              (n = VRHTML.GetPose("/user/hand/right", s.zq.Standing));
            let a = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                n && a.push({ pose: n, location: i.RightHand });
                break;
              case "/user/hand/right":
                t && a.push({ pose: t, location: i.LeftHand });
                break;
              case "/user/head":
                t && a.push({ pose: t, location: i.LeftHand }),
                  n && a.push({ pose: n, location: i.RightHand });
            }
            if (0 == a.length)
              return void setTimeout(this.computeDestination, o.sfMovePulseMS);
            let r = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            a.forEach((e) => {
              let t = VRHTML.ChangeBasis(r, e.pose.xfDeviceToAbsoluteTracking);
              (0, s.LY)(t.translation) > o.sfMaxDockDist
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
              n = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing);
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
            let o = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              a = VRHTML.ChangeBasis(o, n.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: a,
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
            let n,
              o = {
                xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: s.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case i.LeftHand:
                n = e;
                break;
              case i.RightHand:
                n = t;
                break;
              default:
                n = o;
            }
            let a = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              r = VRHTML.MultiplyTransforms(
                a.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              l = VRHTML.ChangeBasis(r, n.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: w(this.state.destination),
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
            var e, t, n;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let r = this.getCurrentOverlaySize();
            if (null === r) return null;
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
                m.BV.eTheaterCurvature == a.Curved && (l = I);
            }
            const y = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
              M =
                y && VRHTML.VROverlay.GetFlag(y, s.Z9.EnableControlBarKeyboard),
              R =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(h.r4),
              w = { x: 0, y: -0.15, z: 0.1 },
              O = (0, s.iN)(h.Az, "Floating-Panel"),
              V = (e) =>
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
                a =
                  null !==
                    (n = u.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== n
                    ? n
                    : 0.5,
                c = 0.5 * Math.pow(a, 2.2);
              let _ = -0.1,
                S = 4;
              const y = !0;
              let M = 0.1,
                T = r.width,
                L = r.height,
                x = 0.75;
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
                    { translation: { y: x } },
                    d.createElement(
                      g.Z,
                      {
                        min_distance: 0.7,
                        should_head_align: !0,
                        lerp_speed: o.flGrabTransformLerpSpeed,
                      },
                      d.createElement(s.wx, { id: I, translation: { z: S } }),
                      d.createElement(
                        s.wx,
                        { translation: { y: -1 * x } },
                        d.createElement(
                          s.wx,
                          { scale: this.getPanelScaleForLocation() },
                          d.createElement(
                            s.s_,
                            {
                              id: O,
                              overlay_key: this.props.sOverlayKey,
                              height: L,
                              width:
                                m.BV.m_eTheaterStereo != s.Ko.Mono ? T : void 0,
                              interactive: !0,
                              allow_input_capture: e,
                              undocked: !0,
                              origin:
                                this.props.dockLocation == i.Theater
                                  ? { x: 0, y: -0.75 }
                                  : s.Ic.BottomCenter,
                              curvature_origin_id: l,
                              stereoscopy: m.BV.m_eTheaterStereo,
                              scale_index: E(this.props.dockLocation),
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
                        p &&
                          d.createElement(s.bt, {
                            target_id: O,
                            "near-z": _,
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
                                        R &&
                                          d.createElement(C.zN, {
                                            key: "multitask",
                                            iconUrl:
                                              "/dashboard/images/icons/icon_multitasking_view.png",
                                            tooltipTranslation: w,
                                            onClick:
                                              this.props.ShowMultitaskingView,
                                            additionalClassNames: "LargeIcon",
                                          }),
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "Section" },
                                        d.createElement(C.zN, {
                                          icon: d.createElement(f.gR, null),
                                          title: (0, k.Xx)(
                                            "#ReturnToDashboard",
                                          ),
                                          key: "dock",
                                          tooltipTranslation: w,
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
                                  { translation: { y: -M - 0.1, z: 0.03 } },
                                  d.createElement(v.J, {
                                    scale: 1.5,
                                    tint: m.BV.GrabHandleTint,
                                    curvature_origin_id: l,
                                  }),
                                ),
                              ),
                              d.createElement(V, {
                                parent_id: "Floating-Panel-BottomRight",
                                target_id: O,
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
            const L = r.height,
              x = Math.max(r.width, 0.175),
              A = m.BV.isVRGamepadUI
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
                    id: O,
                    overlay_key: this.props.sOverlayKey,
                    height: r.height,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: s.Ic.BottomCenter,
                    scale_index: E(this.props.dockLocation),
                    debug_name: "control-bar-floating-overlay",
                  },
                  d.createElement(
                    s.wx,
                    {
                      translation: { z: -0.005 },
                      scale: { x, y: L, z: 0.008 },
                    },
                    d.createElement(
                      s.VW,
                      { color: A },
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
              d.createElement(V, {
                parent_id: "Floating-Panel-BottomRight",
                target_id: O,
                scale:
                  b.g.getUiScaleForLocation(this.props.dockLocation) *
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
                  scale: b.g.getUiScaleForLocation(this.props.dockLocation),
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
                      R &&
                        d.createElement(C.zN, {
                          key: "multitask",
                          iconUrl:
                            "/dashboard/images/icons/icon_multitasking_view.png",
                          tooltipTranslation: w,
                          onClick: this.props.ShowMultitaskingView,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      M &&
                        d.createElement(C.CS, {
                          overlayKey: this.props.sOverlayKey,
                          showTooltip: !1,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      d.createElement(C.zN, {
                        icon: d.createElement(f.gR, null),
                        title: (0, k.Xx)("#ReturnToDashboard"),
                        key: "dock",
                        tooltipTranslation: w,
                        onClick: () => {
                          this.props.setOverlayDockLocation(
                            this.props.sOverlayKey,
                            i.Dashboard,
                          );
                        },
                        additionalClassNames: "LargeIcon",
                      }),
                      d.createElement(C.zN, {
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
          (0, r.gn)([l.ZP], O.prototype, "computeDestination", null),
          (0, r.gn)([l.ZP], O.prototype, "startMove", null),
          (0, r.gn)([l.ZP], O.prototype, "endMove", null),
          (O = o = (0, r.gn)([c.Pi], O));
      },
      6459: (e, t, n) => {
        "use strict";
        n.d(t, {
          B8: () => H,
          CS: () => j,
          D6: () => q,
          Eu: () => T,
          IO: () => P,
          M3: () => L,
          NT: () => F,
          Rk: () => U,
          Yd: () => w,
          dw: () => N,
          dy: () => x,
          j4: () => z,
          j6: () => G,
          lL: () => O,
          z: () => W,
          zN: () => Z,
          zk: () => D,
        });
        var o,
          i,
          a = n(655),
          r = n(5876),
          s = n(7056),
          l = n(2188),
          c = n(7062),
          d = n(7294),
          p = n(5177),
          h = n(9755),
          u = n(7475),
          m = n(4979),
          g = n(3107),
          v = n(2749),
          _ = n(7176),
          S = n(3568),
          y = n(7008),
          b = n(8980),
          C = n(9897),
          f = n(1628),
          k = n(8322),
          E = n.n(k),
          I = n(7726),
          M = n(7471),
          R = n(9626);
        const T = new l.vP();
        function w(e) {
          const { summonOverlayKey: t } = e,
            { ids: n, anchors: o } = d.useMemo(() => {
              const e = "DashboardPanel_" + t,
                n = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                  strBottomRightAnchorID: e + "_BottomRight",
                };
              return {
                ids: n,
                anchors: d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(r.at, {
                    id: n.strTopCenterAnchorID,
                    location: r.Ic.TopCenter,
                  }),
                  d.createElement(r.at, {
                    id: n.strCenterLeftAnchorID,
                    location: r.Ic.CenterLeft,
                  }),
                  d.createElement(r.at, {
                    id: n.strCenterRightAnchorID,
                    location: r.Ic.CenterRight,
                  }),
                  d.createElement(r.at, {
                    id: n.strBottomCenterAnchorID,
                    location: r.Ic.BottomCenter,
                  }),
                  d.createElement(r.at, {
                    id: n.strBottomRightAnchorID,
                    location: r.Ic.BottomRight,
                  }),
                ),
              };
            }, [t]);
          return (
            d.useEffect(
              () => (
                T.set(t, n),
                () => {
                  T.get(t) === n && T.delete(t);
                }
              ),
              [t, n],
            ),
            t ? o : null
          );
        }
        const O = (0, c.Pi)(function (e) {
            return d.createElement(
              V,
              Object.assign({}, e, { VRGamepadUI: R.BV.isVRGamepadUI }),
            );
          }),
          V = (e) => {
            var t, n, o;
            const i = e.VRGamepadUI,
              a = d.useRef(null),
              s = d.useRef(null);
            d.useEffect(() => {
              var e, t;
              return null === (e = a.current) || void 0 === e
                ? void 0
                : e.setFloatingViewStack(
                    null === (t = s.current) || void 0 === t
                      ? void 0
                      : t.viewStack,
                  );
            });
            const l = null === (t = e.scrollable) || void 0 === t || t,
              c =
                null !== (n = e.foregroundReflectMultiplier) && void 0 !== n
                  ? n
                  : 1,
              m =
                null ===
                  (o = f.G3.settings.get(
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
                r.s_,
                {
                  visibility: e.visible ? r.Bl.Visible : r.Bl.Hidden,
                  debug_name: "homepanelbackground",
                  curvature_origin_id: m,
                  origin: r.Ic.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  meters_per_pixel: i ? void 0 : 2 * _.F$,
                  width: i ? 2.67 : void 0,
                  reflect: i ? 0 : 0.01,
                  sampler: r.Vv.SingleTap,
                },
                d.createElement(w, { summonOverlayKey: e.summonOverlayKey }),
                d.createElement(
                  h.vz,
                  { ref: a },
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
                r.wx,
                { translation: { z: 1e-5 } },
                d.createElement(
                  r.s_,
                  {
                    id: "dashboard_widget_panel_id",
                    visibility: e.visible ? r.Bl.Visible : r.Bl.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: m,
                    origin: r.Ic.BottomCenter,
                    interactive: !0,
                    scrollable: l,
                    meters_per_pixel: i ? void 0 : _.F$,
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
        class L extends d.Component {
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
              d.createElement(
                "div",
                { className: "ClockContainer" },
                d.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  d.createElement("span", { className: "Suffix" }, n),
                ),
              )
            );
          }
        }
        function x(e) {
          return d.createElement(
            p.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            d.createElement("div", { className: "HoverGradient" }),
            d.createElement("div", { className: "ClickGradient" }),
            d.createElement("span", null, e.label),
            e.lineBelow && d.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, a.gn)([s.ak], L.prototype, "updateTime", null);
        let A = (o = class extends d.Component {
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
                  (e = f.G3.settings.get(
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
                y.d,
                { allowableParentSelectors: [".DashboardMain"] },
                d.createElement(
                  r.wx,
                  { translation: n },
                  d.createElement(
                    r.s_,
                    {
                      visibility: t ? r.Bl.Visible : r.Bl.SkipInSceneGraph,
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
        (A.s_CurrentlyShownTooltip = null),
          (0, a.gn)([l.Fl], A.prototype, "isShowingTooltip", null),
          (0, a.gn)([l.aD.bound], A.prototype, "show", null),
          (0, a.gn)([l.aD.bound], A.prototype, "hide", null),
          (0, a.gn)([l.LO], A, "s_CurrentlyShownTooltip", void 0),
          (A = o = (0, a.gn)([c.Pi], A));
        class B extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !B.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  B.k_rsThumbnailHashesToInvert.indexOf(E().hash(e)) >= 0 &&
                  (t = !0),
                B.s_mapShouldInvertThumbnail.set(e, t);
            }
            return B.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              n = B.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, b.LJ)(["BlackToWhite", n]),
                src: this.props.src,
              }),
            );
          }
        }
        var D, P;
        (B.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (B.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(D || (D = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(P || (P = {}));
        const N = (e) =>
          d.createElement(
            "div",
            { className: (0, b.LJ)("ControlBarGroup", D[e.style]) },
            e.children,
          );
        let H = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
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
            return d.createElement(
              p.z,
              {
                className: (0, b.LJ)(
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
              d.createElement(A, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              d.createElement(B, { src: this.props.imageUrl }),
            );
          }
        };
        (0, a.gn)([s.ak], H.prototype, "onMouseEnter", null),
          (0, a.gn)([s.ak], H.prototype, "onMouseLeave", null),
          (H = (0, a.gn)([c.Pi], H));
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
              (this.deviceIndex = r.Kf),
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
              n = r.Kf;
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
              n != r.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  r.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  n,
                  r.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  r.Uk.DeviceIsCharging_Bool,
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
                r.Uk.DevicePowerUsage_Float,
              );
            }
            let o = I.X.GetBatteryIcon(
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
            (e != r.XX.Activated && e != r.XX.Deactivated) || this.update();
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
          (0, a.gn)([s.ak], G.prototype, "updateControllerStatus", null),
          (0, a.gn)([s.ak], G.prototype, "onBatteryStateChanged", null),
          (0, a.gn)([s.ak], G.prototype, "onDeviceRoleChanged", null),
          (0, a.gn)([s.ak], G.prototype, "onDeviceEvent", null),
          d.Component;
        const U = (e) =>
          d.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && d.createElement(B, { src: e.iconUrl, shadow: !0 }),
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
            var e, t, n;
            const o = this.props.position,
              i = Math.asin(o) / Math.PI,
              a = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                r.at,
                { location: { x: o, y: -1 } },
                d.createElement(r.wx, {
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
                  r.VW,
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
                      r.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04 * a, z: -0.01 },
                        scale: a,
                      },
                      d.createElement(
                        r.s_,
                        {
                          curvature_origin_id:
                            null !== (t = this.props.curvatureOriginId) &&
                            void 0 !== t
                              ? t
                              : null,
                          origin: r.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          meters_per_pixel: _.F$,
                          sort_depth_bias: this.props.sort_depth_bias,
                          debug_name: "control-bar-tray",
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
                        r.wx,
                        { translation: { z: -1e-5 } },
                        d.createElement(
                          r.s_,
                          {
                            curvature_origin_id:
                              null !== (n = this.props.curvatureOriginId) &&
                              void 0 !== n
                                ? n
                                : null,
                            origin: r.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            meters_per_pixel: 2 * _.F$,
                            reflect: 0.005,
                            sampler: r.Vv.SingleTap,
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
        (0, a.gn)([s.ak], z.prototype, "onResizeObserved", null),
          (0, a.gn)([s.ak], z.prototype, "updateBackgroundSize", null),
          (0, a.gn)([s.ak], z.prototype, "onPortalDidMount", null);
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
              f.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume",
              ) && f.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!f.G3.settings.get(
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
                  K,
                  {
                    onClick: C.f.Instance.toggleMicrophoneMute,
                    title: C.f.Instance.microphoneMuted
                      ? (0, S.Xx)("#UnmuteMicrophone")
                      : (0, S.Xx)("#MuteMicrophone"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: C.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                d.createElement(X, {
                  title: (0, S.Xx)("#MicrophoneVolume"),
                  value: C.f.Instance.microphoneVolume,
                  onChange: C.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, b.LJ)([
                    "Muted",
                    C.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: g.y.VolumePreview,
                }),
              ),
              this.showAudioMirrorControls &&
                d.createElement(
                  "div",
                  { className: "Section" },
                  d.createElement(
                    K,
                    {
                      onClick: C.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: C.f.Instance.mirrorMuted
                        ? (0, S.Xx)("#UnmuteAudioMirror")
                        : (0, S.Xx)("#MuteAudioMirror"),
                    },
                    d.createElement("img", {
                      className: "BlackToWhite",
                      src: C.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  d.createElement(X, {
                    title: (0, S.Xx)("#AudioMirrorVolume"),
                    value: C.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: C.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.px.OnHandle,
                    additionalClassName: (0, b.LJ)([
                      "Muted",
                      C.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: g.y.VolumePreview,
                  }),
                ),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  K,
                  {
                    onClick: C.f.Instance.toggleMute,
                    title: C.f.Instance.muted
                      ? (0, S.Xx)("#Unmute_Headset")
                      : (0, S.Xx)("#Mute_Headset"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: C.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                d.createElement(X, {
                  title: (0, S.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: C.f.Instance.volume,
                  onChange: C.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, b.LJ)(["Muted", C.f.Instance.muted]),
                  interactionEndSoundEffect: g.y.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, a.gn)([s.ak], W.prototype, "onSliderMouseEnter", null),
          (0, a.gn)([s.ak], W.prototype, "onSliderMouseLeave", null),
          (0, a.gn)([s.ak], W.prototype, "onSliderFinalChange", null),
          (0, a.gn)([l.Fl], W.prototype, "showAudioMirrorControls", null),
          (0, a.gn)([l.Fl], W.prototype, "enableAudioMirrorControls", null),
          (W = (0, a.gn)([c.Pi], W));
        let X = class extends d.Component {
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
            return d.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                d.createElement(A, {
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
        (0, a.gn)([s.ak], X.prototype, "onMouseEnter", null),
          (0, a.gn)([s.ak], X.prototype, "onMouseLeave", null),
          (0, a.gn)([s.ak], X.prototype, "onInteractionStart", null),
          (0, a.gn)([s.ak], X.prototype, "onInteractionEnd", null),
          (X = (0, a.gn)([c.Pi], X));
        let K = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
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
                d.createElement(A, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, a.gn)([s.ak], K.prototype, "onMouseEnter", null),
          (0, a.gn)([s.ak], K.prototype, "onMouseLeave", null),
          (K = (0, a.gn)([c.Pi], K));
        let q = (i = class extends d.Component {
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
            (0, r.JR)((0, r.Zj)(t, this.m_vecOriginalMousePosition)) >
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
            return d.createElement(H, {
              imageUrl: C.f.Instance.muted
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
          (0, a.gn)([s.ak], q.prototype, "onButtonMouseDown", null),
          (0, a.gn)([s.ak], q.prototype, "onWindowMouseMove", null),
          (0, a.gn)([s.ak], q.prototype, "onWindowMouseUp", null),
          (q = i = (0, a.gn)([c.Pi], q));
        const Z = (e) => {
          var t;
          const n = d.useRef();
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
              d.createElement(A, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: n,
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
          var t, n;
          const o = (0, b.aB)(),
            i =
              null !== (t = null == o ? void 0 : o.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == o.overlayKey,
            a = d.useRef(!1),
            s =
              null === (n = e.showTooltip) || void 0 === n || n
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
                  a.current = i;
                },
                onClick: () => {
                  if (a.current) VRHTML.VROverlay.HideKeyboard();
                  else {
                    let t =
                      r.vS.Minimal | r.vS.HideDoneKey | r.vS.ShowArrowKeys;
                    e.modal && (t |= r.vS.Modal),
                      VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.overlayKey,
                        r.Pw.Normal,
                        r.l0.SingleLine,
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
        n.d(t, { N: () => f, e: () => C });
        var o,
          i,
          a = n(655),
          r = n(5876),
          s = n(7056),
          l = n(2477),
          c = n(2188),
          d = n(7062),
          p = n(7294),
          h = n(7475),
          u = n(7176),
          m = n(3568),
          g = n(1628),
          v = n(6459),
          _ = n(9626),
          S = n(8261),
          y = n(6509),
          b = n(4790);
        let C = (o = class extends p.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
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
              a = { x: 0, y: -0.15, z: 0.1 };
            return p.createElement(
              v.j4,
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
                          return p.createElement(v.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, m.Xx)("#Desktop_X", e),
                            tooltipTranslation: a,
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
                      return p.createElement(v.zN, {
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
                        tooltipTranslation: a,
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
                  p.createElement(v.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, m.Xx)("#AddView"),
                    tooltipTranslation: a,
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  }),
                ),
            );
          }
        });
        (C.k_sMailboxName = "systemui_desktoptray"),
          (C = o = (0, a.gn)([d.Pi], C));
        let f = (i = class extends p.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
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
                p.createElement(v.zN, {
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
              n = u.Az + "::id.panel.desktop." + this.currentDesktopIndex,
              o = (e) =>
                p.createElement(
                  r.wx,
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
                    tint: _.BV.GrabHandleTint,
                  }),
                );
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? p.createElement(r.sl, { mountedId: (0, r.iN)(u.GN, u.Xl) })
                : this.state.bIsReady
                  ? 0 === this.state.desktopIndices.length
                    ? p.createElement(
                        v.lL,
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
                          r.s_,
                          {
                            id: n,
                            overlay_key:
                              -1 == this.currentDesktopIndex
                                ? this.state.sCurrentWindowOverlayKey
                                : "system.desktop." + this.currentDesktopIndex,
                            height: i.k_nDesktopPanelBaseHeight,
                            curvature_origin_id: t,
                            interactive: !0,
                            origin: r.Ic.BottomCenter,
                            debug_name: "System Desktop",
                            scale_index: (0, b.MH)(b.RA.Dashboard),
                          },
                          p.createElement(v.Yd, { summonOverlayKey: u.gB }),
                          p.createElement(r.sl, {
                            mountedId:
                              -1 == this.currentDesktopIndex
                                ? (0, r.iN)(
                                    u.GN,
                                    this.state.sCurrentWindowOverlayKey +
                                      ".cursor",
                                  )
                                : (0, r.iN)(
                                    u.GN,
                                    "system.desktop." +
                                      this.currentDesktopIndex +
                                      ".cursor",
                                  ),
                          }),
                        ),
                        p.createElement(o, {
                          parent_id: "DashboardPanel_" + u.gB + "_BottomRight",
                          scale: S.g.getUiScaleForLocation(b.RA.Dashboard),
                          target_id: n,
                          displacement: 0,
                          x_offset: 0.03,
                          y_offset: 0,
                        }),
                      )
                  : p.createElement(
                      v.lL,
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
        (f.k_sMailboxName = "systemui_desktopview"),
          (f.k_nDesktopPanelBaseHeight = 2),
          (0, a.gn)([c.Fl], f.prototype, "desktopCount", null),
          (0, a.gn)([c.Fl], f.prototype, "sCurrentOverlayKey", null),
          (0, a.gn)([c.Fl], f.prototype, "currentDesktopIndex", null),
          (0, a.gn)([c.Fl], f.prototype, "currentWindowHwnd", null),
          (0, a.gn)([s.ZP], f.prototype, "onDesktopScaleChange", null),
          (0, a.gn)([s.ZP], f.prototype, "onDesktopChange", null),
          (0, a.gn)([s.ZP], f.prototype, "onDesktopViewUpdating", null),
          (0, a.gn)([s.ZP], f.prototype, "onDesktopViewReady", null),
          (0, a.gn)([s.ZP], f.prototype, "onWindowViewChange", null),
          (0, a.gn)([s.ZP], f.prototype, "ShowMultitaskingView", null),
          (f = i = (0, a.gn)([d.Pi], f));
      },
      6063: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => p });
        var o = n(655),
          i = n(7294),
          a = n(7056),
          r = n(5876),
          s = n(7062),
          l = n(5177),
          c = n(421),
          d = n(8980);
        let p = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: this.props.xfTransform
                  ? this.props.xfTransform
                  : (0, r.Oq)(),
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
                    : (0, r.Oq)(),
                });
          }
          startMove() {
            let e,
              t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
            if (t != r.Kf) {
              switch (
                VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)
              ) {
                case r.Kg.TrackedControllerRole_LeftHand:
                  e = "/user/hand/left/pose/tip";
                  break;
                case r.Kg.TrackedControllerRole_RightHand:
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
                r.wx,
                null,
                i.createElement(
                  r.Dd,
                  { value: this.props.opacity },
                  i.createElement(
                    r.VW,
                    { color: this.props.tint },
                    i.createElement(
                      r.s_,
                      {
                        width: 0.66675 * o,
                        interactive: !0,
                        requires_laser: !0,
                        debug_name: "DashboardGrabHandle",
                        origin: r.Ic.BottomCenter,
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
          (0, o.gn)([a.ZP], p.prototype, "startMove", null),
          (0, o.gn)([a.ZP], p.prototype, "endMove", null),
          (p = (0, o.gn)([s.Pi], p));
      },
      421: (e, t, n) => {
        "use strict";
        n.d(t, { E: () => s, Z: () => l });
        var o = n(655),
          i = n(5876),
          a = n(7062),
          r = n(7294);
        const s = r.createContext(void 0);
        let l = class extends r.Component {
          constructor(e) {
            super(e),
              (this.state = { transform: (0, i.Oq)(), parent_path: "" });
          }
          render() {
            return r.createElement(
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
              r.createElement(s.Provider, { value: this }, this.props.children),
            );
          }
        };
        l = (0, o.gn)([a.Pi], l);
      },
      3033: (e, t, n) => {
        "use strict";
        n.d(t, { p: () => h });
        var o = n(5876),
          i = n(7294),
          a = n(7062),
          r = n(9626),
          s = n(7176),
          l = n(9764);
        function c(e) {
          const { children: t, invertParentPanelPitch: n, pitch: a } = e;
          return n || 0 != a
            ? i.createElement(
                o.wx,
                {
                  invert_parent_panel_pitch: null != n && n,
                  curvature_pitch: null != a ? a : 0,
                },
                t,
              )
            : i.createElement(i.Fragment, null, t);
        }
        function d(e) {
          let { children: t, offsetPixels: n, offsetMeters: a } = e;
          (n = null != n ? n : { x: 0, y: 0, z: 0 }),
            (a = null != a ? a : { x: 0, y: 0, z: 0 });
          const s = (0, o.ui)(
            a,
            (0, o.mT)(n, r.BV.m_fVRGamepadUI_MetersPerPixel),
          );
          return 0 != s.x || 0 != s.y || 0 != s.z
            ? i.createElement(o.wx, { translation: s }, t)
            : i.createElement(i.Fragment, null, t);
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
            a,
            l,
            h,
            u,
            m,
            g,
            v,
            _,
            S,
            y,
            b,
            C,
            f,
            k,
            E,
            I,
            M,
            R,
            T,
            w,
            O,
            V,
            L,
            x,
            A,
            B,
            D,
            P,
            N,
            H,
            F,
            G,
            U,
            z,
            W;
          const { popupRequest: X, reparent: K } = e,
            q = null == K || K,
            Z = {
              x:
                null !==
                  (n =
                    null === (t = X.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== n
                  ? n
                  : 0,
              y:
                null !==
                  (l =
                    null === (a = X.origin_on_parent) || void 0 === a
                      ? void 0
                      : a.y) && void 0 !== l
                  ? l
                  : 0,
            },
            j = {
              x:
                null !==
                  (u =
                    null === (h = X.origin_on_popup) || void 0 === h
                      ? void 0
                      : h.x) && void 0 !== u
                  ? u
                  : 0,
              y:
                null !==
                  (g =
                    null === (m = X.origin_on_popup) || void 0 === m
                      ? void 0
                      : m.y) && void 0 !== g
                  ? g
                  : 0,
            },
            J = {
              u:
                null !==
                  (_ =
                    null === (v = X.clip_rect) || void 0 === v
                      ? void 0
                      : v.u_min) && void 0 !== _
                  ? _
                  : 0,
              v:
                null !==
                  (y =
                    null === (S = X.clip_rect) || void 0 === S
                      ? void 0
                      : S.v_min) && void 0 !== y
                  ? y
                  : 0,
            },
            Q = {
              u:
                null !==
                  (C =
                    null === (b = X.clip_rect) || void 0 === b
                      ? void 0
                      : b.u_max) && void 0 !== C
                  ? C
                  : 1,
              v:
                null !==
                  (k =
                    null === (f = X.clip_rect) || void 0 === f
                      ? void 0
                      : f.v_max) && void 0 !== k
                  ? k
                  : 1,
            },
            Y = {
              x:
                null !==
                  (I =
                    null === (E = X.offset) || void 0 === E
                      ? void 0
                      : E.x_pixels) && void 0 !== I
                  ? I
                  : 0,
              y:
                null !==
                  (R =
                    null === (M = X.offset) || void 0 === M
                      ? void 0
                      : M.y_pixels) && void 0 !== R
                  ? R
                  : 0,
              z:
                null !==
                  (w =
                    null === (T = X.offset) || void 0 === T
                      ? void 0
                      : T.z_pixels) && void 0 !== w
                  ? w
                  : 0,
            },
            $ = {
              x:
                null !==
                  (V =
                    null === (O = X.offset) || void 0 === O
                      ? void 0
                      : O.x_meters) && void 0 !== V
                  ? V
                  : 0,
              y:
                null !==
                  (x =
                    null === (L = X.offset) || void 0 === L
                      ? void 0
                      : L.y_meters) && void 0 !== x
                  ? x
                  : 0,
              z:
                null !==
                  (B =
                    null === (A = X.offset) || void 0 === A
                      ? void 0
                      : A.z_meters) && void 0 !== B
                  ? B
                  : 0,
            },
            ee = {
              x:
                null !==
                  (P =
                    null === (D = X.rotation) || void 0 === D
                      ? void 0
                      : D.pitch_degrees) && void 0 !== P
                  ? P
                  : 0,
              y:
                null !==
                  (H =
                    null === (N = X.rotation) || void 0 === N
                      ? void 0
                      : N.yaw_degrees) && void 0 !== H
                  ? H
                  : 0,
            },
            te = null === (F = X.inherit_parent_pitch) || void 0 === F || F,
            ne = null === (G = X.inherit_parent_curvature) || void 0 === G || G,
            oe = null === (U = X.interactive) || void 0 === U || U,
            ie = null !== (z = X.requires_laser) && void 0 !== z && z,
            ae =
              1 == (null !== (W = X.sort_order) && void 0 !== W ? W : 0)
                ? 101
                : null,
            re = (function (e) {
              var t, n, o;
              const i =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                a =
                  null !==
                    (o =
                      null === (n = null == e ? void 0 : e.offset) ||
                      void 0 === n
                        ? void 0
                        : n.z_pixels) && void 0 !== o
                    ? o
                    : 0;
              return i == s.BZ && a >= 0 ? -0.5 : 0;
            })(X);
          i.useLayoutEffect(
            () => o.n0.Current().forceLayoutUpdate(),
            [J.u, J.v, Q.u, Q.v],
          );
          const se = i.createElement(
            c,
            { invertParentPanelPitch: !te },
            i.createElement(
              d,
              { offsetPixels: Y, offsetMeters: $ },
              i.createElement(
                p,
                { rotation: ee },
                i.createElement(o.s_, {
                  debug_name: `VRGamepadUI-PooledPopup-${X.dashboard_popup_request_id}`,
                  interactive: oe,
                  requires_laser: ie,
                  curvature: ne ? "inherit-from-parent-panel" : void 0,
                  overlay_key: X.popup_overlay_key,
                  origin: j,
                  meters_per_pixel: r.BV.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.03,
                  sort_depth_bias: re,
                  uv_min: J,
                  uv_max: Q,
                  sort_order: ae,
                }),
              ),
            ),
          );
          return X.parent_device_path
            ? i.createElement(o.wx, { parent_path: X.parent_device_path }, se)
            : q
              ? i.createElement(
                  o.Sb,
                  {
                    parent_overlay_key: X.parent_overlay_key,
                    key: X.dashboard_popup_request_id,
                  },
                  i.createElement(
                    o.at,
                    { key: X.dashboard_popup_request_id, location: Z },
                    se,
                  ),
                )
              : i.createElement(
                  o.at,
                  { key: X.dashboard_popup_request_id, location: Z },
                  se,
                );
        }
        (0, a.Pi)((e) => {
          const t = l.J.GetActivePooledPopups();
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
      6509: (e, t, n) => {
        "use strict";
        n.d(t, { O: () => d });
        var o = n(655),
          i = n(7294),
          a = n(7056),
          r = n(7062),
          s = n(5177),
          l = n(8980),
          c = n(5876);
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
              n = 0.2667 * t;
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
                      { translation: { y: n / 2 } },
                      i.createElement(
                        c.s_,
                        {
                          height: n,
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
        (0, o.gn)([a.ZP], d.prototype, "startMove", null),
          (0, o.gn)([a.ZP], d.prototype, "endMove", null),
          (d = (0, o.gn)([r.Pi], d));
      },
      1283: (e, t, n) => {
        "use strict";
        n.d(t, { s: () => v });
        var o = n(655),
          i = n(7294),
          a = n(7062),
          r = n(7056),
          s = n(3568),
          l = n(5211),
          c = n(4285),
          d = n(2188),
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
            let a = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (a = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable",
                  ))
                : (a = (0, s.Xx)(
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
                    { title: a },
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
        (0, o.gn)([d.Fl], g.prototype, "trackerConfig", null),
          (0, o.gn)([r.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, o.gn)([r.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, o.gn)([r.ak], g.prototype, "BuzzTracker", null),
          (0, o.gn)([d.Fl], g.prototype, "deviceInfo", null),
          (g = (0, o.gn)([a.Pi], g));
        let v = class extends i.Component {
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
        v = (0, o.gn)([a.Pi], v);
      },
      6698: (e, t, n) => {
        "use strict";
        n.d(t, {
          SV: () => h,
          X7: () => d,
          Y2: () => c,
          gR: () => p,
          ur: () => a,
          yR: () => r,
        });
        var o = n(655),
          i = n(7294);
        function a(e) {
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
        function r(e) {
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
            n = (0, o._T)(e, ["off"]);
          return t
            ? i.createElement(l, Object.assign({}, n))
            : i.createElement(s, Object.assign({}, n));
        }
        function d(e) {
          const { none: t, partial: n, right: a, left: r } = e,
            s = (0, o._T)(e, ["none", "partial", "right", "left"]);
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
                  s,
                ),
                i.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : n || a
              ? i.createElement(
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
              : r
                ? i.createElement(
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
                    i.createElement("path", {
                      fill: "currentColor",
                      opacity: "0.5",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                    }),
                    i.createElement("path", {
                      fill: "currentColor",
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
                      s,
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
      2477: (e, t, n) => {
        "use strict";
        n.d(t, { Q: () => l });
        var o = n(655),
          i = n(5876),
          a = n(328),
          r = n(4820);
        const s = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new a.fH(this, r.Al)),
              (this.m_Steam_Client = new a.q0(this)),
              (this.m_Steam_ClientMethods = new r.x2(this.m_Steam_Client)),
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
                  const t = (0, a.u8)(e.header);
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
            if (!this.m_mailbox.connected) return a.n5.SendFailure;
            let n, o;
            try {
              n = r.Vg.fromObject(e).serializeBase64String();
            } catch (e) {
              return a.n5.HeaderSerializationFailure;
            }
            try {
              o = t.serializeBase64String();
            } catch (e) {
              return a.n5.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: n,
                payload: o,
              });
            } catch (e) {
              return a.n5.SendFailure;
            }
            return a.n5.Success;
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
    var a = (n[e] = { id: e, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), a.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, n, i, a) => {
      if (!n) {
        var r = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, i, a] = e[d], s = !0, l = 0; l < n.length; l++)
            (!1 & a || r >= a) && Object.keys(o.O).every((e) => o.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((s = !1), a < r && (r = a));
          if (s) {
            e.splice(d--, 1);
            var c = i();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
      e[d] = [n, i, a];
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
            a,
            [r, s, l] = n,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (i in s) o.o(s, i) && (o.m[i] = s[i]);
            if (l) var d = l(o);
          }
          for (t && t(n); c < r.length; c++)
            (a = r[c]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return o.O(d);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (o.nc = void 0);
  var i = o.O(void 0, [968, 683], () => o(1176));
  i = o.O(i);
})();
//# sourceMappingURL=controllerbindingui.js.map?v=af0a301dd23401538731
