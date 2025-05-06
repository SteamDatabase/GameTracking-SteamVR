/*! For license information please see bindingcallouts.js.LICENSE.txt */
(() => {
  var e,
    t = {
      5928: (e, t, o) => {
        "use strict";
        o.d(t, { L: () => S });
        var a,
          n = o(655),
          i = o(7294),
          r = o(7056),
          s = o(3568),
          l = o(9313),
          c = o(9809),
          d = o(5211),
          u = o(2893),
          h = o(7062),
          m = o(2188),
          p = o(8242),
          v = o(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(a || (a = {}));
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
            let a = { width: String(100 * o) + "%" };
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
                  style: a,
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
                n = this.props.side == a.Right,
                i = this.m_nameRef.current.getBoundingClientRect(),
                r = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new d.E9(0, i.top + i.height / 2);
              l.x = n ? r.left - 10 : r.right + 10;
              let c = n ? -20 : 20,
                u = l.x + c + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", u);
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
              this.props.side == a.Left
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
                    c.I.LocalizeControllerString(
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
        (0, n.gn)([r.ak], g.prototype, "ComponentUpdated", null),
          (0, n.gn)([r.ak], g.prototype, "UpdateSVGPath", null);
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
        class f extends i.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = i.createRef()),
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
            let a = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return i.createElement(_, {
                  key: a,
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
                  key: a,
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
                  key: a,
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
                  { key: a },
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
                    i.createElement(u.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              o = this.ControllerTypeInfo,
              n = 0,
              r = [];
            for (let e in o.input_source) {
              let t = o.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let a = this.EstimateSourceHeight(t);
              (n += a),
                r.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: a,
                });
            }
            let s = 8;
            n > 16 && (s = n / 2);
            let l = 0,
              c = r.sort((e, t) => e.order - t.order);
            for (let o of c) {
              l += o.height;
              let n = l > s ? a.Right : a.Left,
                i = this.renderSource(o.sSourcePath, o.inputSource, n);
              i && (n == a.Left ? e.push(i) : t.push(i));
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
        (0, n.gn)([r.ak], f.prototype, "OnImageLoaded", null),
          (0, n.gn)([r.ak], f.prototype, "OnImageReflow", null);
        let S = class extends i.Component {
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
              return i.createElement(
                p.TB,
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
            for (let a of o)
              "TrackedDeviceClass_HMD" != a.class &&
                (a.root_path == this.state.devicePath && (e = a.serial_number),
                t.push({
                  value: a.root_path,
                  sLabel: (0, s.Xx)("#" + a.root_path),
                }));
            return i.createElement(
              p.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: i.createElement(p.U5, {
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
                i.createElement(f, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                }),
            );
          }
        };
        (0, n.gn)([r.ak], S.prototype, "OnConnectedDevicesChanged", null),
          (0, n.gn)([r.ak], S.prototype, "OnUpdateComponentStates", null),
          (S = (0, n.gn)([h.Pi], S));
      },
      9671: (e, t, o) => {
        "use strict";
        o.d(t, { V: () => c });
        var a = o(655),
          n = o(7294),
          i = o(7056),
          r = o(3568),
          s = o(9313);
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
                  (0, r.Xx)("#LegacyDebugger_NoApp"),
                );
          }
        }
        (0, a.gn)([i.ak], l.prototype, "OnLegacyInputFrame", null);
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
      792: (e, t, o) => {
        "use strict";
        o.d(t, { C7: () => u, wk: () => a });
        var a,
          n = o(655),
          i = o(7056),
          r = o(2188),
          s = o(9313),
          l = o(9942),
          c = o(1628);
        !(function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.FloorAutoDetect = 3)] = "FloorAutoDetect"),
            (e[(e.AdjustPlayspaceRadius = 4)] = "AdjustPlayspaceRadius"),
            (e[(e.AdjustPlayspaceAdvanced = 5)] = "AdjustPlayspaceAdvanced");
        })(a || (a = {}));
        class d {
          constructor() {
            (this.m_bBoundsVisible = void 0),
              (this.m_bHmdOutOfBoundsStrict = void 0),
              (this.m_bOkOutsideOfPlayspace = !1),
              (this.m_eRoomSetupStep = a.Off),
              (this.m_bDriverProvidedInHMDRoomSetupActive = void 0),
              (this.m_previousRoomSetupStep = void 0);
          }
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.Load(),
                (0, r.EH)(() => this.Save()),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForChaperoneStatusEvents(
                    this.onChaperoneStatusEvents,
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForInHmdRoomSetupChangedEvents(
                    this.onInHMDRoomSetupActiveChanged,
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
                ),
                (0, r.U5)(
                  () => this.m_eRoomSetupStep,
                  (e) => {
                    console.log(
                      `RoomSetupStep changed from ${this.m_previousRoomSetupStep} to ${e}`,
                    ),
                      (e != a.FloorAdjustExisting && e != a.FloorAutoDetect) ||
                        this.m_previousRoomSetupStep ==
                          a.AdjustPlayspaceRadius ||
                        null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetDynamicFloorHeight(
                          s.Ip.CvManualHybrid,
                          !1,
                        ),
                      e != a.AdjustPlayspaceRadius ||
                        (this.m_previousRoomSetupStep != a.FloorAutoDetect &&
                          this.m_previousRoomSetupStep !=
                            a.FloorAdjustExisting) ||
                        null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetPlayspaceRadius(1),
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.SetFloorDetectEnabled(
                          e == a.FloorAutoDetect,
                        ),
                      (this.m_previousRoomSetupStep = e);
                  },
                );
            });
          }
          Load() {
            var e, t, o, a, i;
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
                    (o = c.G3.settings.get(
                      "/settings/steamvr/backgroundDomeRadius",
                    )) && void 0 !== o
                    ? o
                    : 20),
                (this.m_fBackgroundOffsetX =
                  null !==
                    (a = c.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetX",
                    )) && void 0 !== a
                    ? a
                    : 0),
                (this.m_fBackgroundOffsetZ =
                  null !==
                    (i = c.G3.settings.get(
                      "/settings/steamvr/backgroundOffsetZ",
                    )) && void 0 !== i
                    ? i
                    : 0);
            });
          }
          Save() {
            return (0, n.mG)(this, void 0, void 0, function* () {});
          }
          onInHMDRoomSetupActiveChanged(e) {
            this.m_bDriverProvidedInHMDRoomSetupActive = e;
          }
          onChaperoneStatusEvents(e) {
            const t = !!(1 & e),
              o = !!(2 & e);
            t != this.m_bBoundsVisible && (this.m_bBoundsVisible = t),
              o != this.m_bHmdOutOfBoundsStrict &&
                (this.m_bHmdOutOfBoundsStrict = o);
          }
        }
        (0, n.gn)([r.LO], d.prototype, "m_bShowFloor", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_bShowFloorFar", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_fBackgroundOffsetX", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_bBoundsVisible", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_bHmdOutOfBoundsStrict", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_bOkOutsideOfPlayspace", void 0),
          (0, n.gn)([r.LO], d.prototype, "m_eRoomSetupStep", void 0),
          (0, n.gn)(
            [r.LO],
            d.prototype,
            "m_bDriverProvidedInHMDRoomSetupActive",
            void 0,
          ),
          (0, n.gn)([i.ak], d.prototype, "Load", null),
          (0, n.gn)([i.ak], d.prototype, "Save", null),
          (0, n.gn)([i.ak], d.prototype, "onInHMDRoomSetupActiveChanged", null),
          (0, n.gn)([i.ak], d.prototype, "onChaperoneStatusEvents", null);
        const u = new d();
        window.ConstructStore = u;
      },
      9626: (e, t, o) => {
        "use strict";
        o.d(t, {
          A3: () => v,
          BV: () => f,
          Dz: () => g,
          J_: () => m,
          fq: () => p,
        });
        var a = o(655),
          n = o(9313),
          i = o(7056),
          r = o(2188),
          s = o(4790),
          l = o(1628),
          c = o(7176),
          d = o(8261),
          u = o(2758),
          h = o(3107);
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
          Init() {
            var e;
            return (0, a.mG)(this, void 0, void 0, function* () {
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
            var e, t, o, n, i;
            return (0, a.mG)(this, void 0, void 0, function* () {
              const a = JSON.parse(
                null !==
                  (e = sessionStorage.getItem(b.k_strSessionStorageKey)) &&
                  void 0 !== e
                  ? e
                  : "{}",
              );
              (this.m_bShowLegacyBar =
                null !== (t = a.m_bShowLegacyBar) && void 0 !== t && t),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (o = a.m_fVRGamepadUI_MetersPerPixel) && void 0 !== o
                    ? o
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (n = a.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== n
                    ? n
                    : 1.17);
              for (const e of null !== (i = a.m_rgPooledPopups) && void 0 !== i
                ? i
                : [])
                this.m_mapActivePooledPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
            });
          }
          SaveSessionDevData() {
            return (0, a.mG)(this, void 0, void 0, function* () {
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
              for (const [e, o] of this.m_mapOverlayState.entries())
                if (o.dockLocation == t && y(e)) return e;
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
            for (const [o, a] of this.m_mapOverlayState.entries())
              a.dockLocation == s.RA.Theater &&
                ((a.dockLocation = e),
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
              o = !!(2 & e),
              a = !!(4 & e),
              n = 8 & e ? _.OnDemand : _.Persistent;
            t != this.m_bLinkStreamActive && (this.m_bLinkStreamActive = t),
              o != this.m_bIsLinkClient && (this.m_bIsLinkClient = o),
              a != this.m_bIsLinkServer && (this.m_bIsLinkServer = a),
              n != this.m_streamingMode && (this.m_streamingMode = n);
          }
        }
        (b.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
          (0, a.gn)([r.LO], b.prototype, "m_bDashboardVisible", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_bShowLegacyBar", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_bVS", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_eVSMode", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_sVSOverlayKey", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_nNumRemoteUsers", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_nNumRemoteVS", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_eTheaterStereo", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_eIncognitoMode", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_mapOverlayState", void 0),
          (0, a.gn)(
            [r.LO],
            b.prototype,
            "m_setOverlaysViewedThisSession",
            void 0,
          ),
          (0, a.gn)(
            [r.LO],
            b.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, a.gn)(
            [r.LO],
            b.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, a.gn)(
            [r.LO],
            b.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, a.gn)([r.LO], b.prototype, "m_bRoomViewActive", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_bRoomViewStreaming", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_bGamepadFocusActive", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_bLinkStreamActive", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_bIsLinkClient", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_bIsLinkServer", void 0),
          (0, a.gn)([r.LO], b.prototype, "m_streamingMode", void 0),
          (0, a.gn)([i.ak], b.prototype, "LoadSessionDevData", null),
          (0, a.gn)([i.ak], b.prototype, "SaveSessionDevData", null),
          (0, a.gn)([r.Fl], b.prototype, "isTheaterMode", null),
          (0, a.gn)([r.Fl], b.prototype, "priorityGamepadFocusOverlay", null),
          (0, a.gn)([r.Fl], b.prototype, "eTheaterCurvature", null),
          (0, a.gn)([r.aD], b.prototype, "setIncognitoMode", null),
          (0, a.gn)([r.Fl], b.prototype, "WorldLightingGain", null),
          (0, a.gn)([r.Fl], b.prototype, "isVRGamepadUIReady", null),
          (0, a.gn)([r.Fl], b.prototype, "isVRGamepadUI", null),
          (0, a.gn)([i.ak], b.prototype, "updateBodyClasses", null),
          (0, a.gn)([i.ak], b.prototype, "onRoomViewChanged", null),
          (0, a.gn)([i.ak], b.prototype, "onRoomViewStreamChanged", null),
          (0, a.gn)([i.ak], b.prototype, "onGamepadFocusChanged", null),
          (0, a.gn)([i.ak], b.prototype, "onLinkStreamStatusEvents", null);
        const f = new b();
        window.DashboardStore = f;
      },
      2758: (e, t, o) => {
        "use strict";
        o.d(t, { U: () => s });
        var a = o(655),
          n = o(2188),
          i = o(4687);
        class r {
          constructor() {
            (this.m_mapAllOverlays = new Map()),
              (this.m_rgOverlayCreatedCallbacks = new i.p()),
              (this.m_rgOverlayDestroyedCallbacks = new i.p());
          }
          Init() {
            return (0, a.mG)(this, void 0, void 0, function* () {
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
              a = [];
            for (const a of e)
              (null == a ? void 0 : a.sOverlayKey) &&
                (this.m_mapAllOverlays.has(a.sOverlayKey) || o.push(a),
                this.m_mapAllOverlays.set(a.sOverlayKey, a),
                t.delete(a.sOverlayKey));
            for (const e of t)
              a.push(this.m_mapAllOverlays.get(e)),
                this.m_mapAllOverlays.delete(e);
            o.forEach(this.m_rgOverlayCreatedCallbacks.Dispatch),
              a.forEach(this.m_rgOverlayDestroyedCallbacks.Dispatch);
          }
        }
        (0, a.gn)([n.LO], r.prototype, "m_mapAllOverlays", void 0),
          (0, a.gn)([n.aD.bound], r.prototype, "OnAllOverlayInfo", null);
        const s = new r();
        window.OverlayStore = s;
      },
      9764: (e, t, o) => {
        "use strict";
        o.d(t, { J: () => c });
        var a = o(655),
          n = o(7056),
          i = o(2188),
          r = o(2477),
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
            return (0, a.mG)(this, void 0, void 0, function* () {
              yield this.LoadSessionDevData(),
                (0, i.EH)(() => this.SaveSessionDevData()),
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
            return (0, a.mG)(this, void 0, void 0, function* () {
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
            return (0, a.mG)(this, void 0, void 0, function* () {
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
          (0, a.gn)(
            [i.LO],
            l.prototype,
            "m_mapActivePooledPopupRequests",
            void 0,
          ),
          (0, a.gn)([i.LO], l.prototype, "m_mapRemoteVSIds", void 0),
          (0, a.gn)([n.ak], l.prototype, "LoadSessionDevData", null),
          (0, a.gn)([n.ak], l.prototype, "SaveSessionDevData", null);
        const c = new l();
        window.PooledPopupStore = c;
      },
      4599: (e, t, o) => {
        "use strict";
        var a = o(655),
          n = o(7294),
          i = o(3935),
          r = o(7056),
          s = o(9313),
          l = o(5211),
          c = o(3568),
          d = o(9809),
          u = o(1380),
          h = o(5177),
          m = o(8261),
          p = o(1628),
          v = o(7062),
          g = o(7176);
        function _(e, t) {
          let o = "";
          switch (t.mode) {
            case "dpad":
            case "dpad_touch":
            case "dpad_click":
              o =
                "/input/thumbstick" == t.input_path ||
                "/input/joystick" == t.input_path
                  ? "_" + t.slot
                  : "_dpad_" + t.slot;
              break;
            case "button":
              ("/input/trackpad" != t.input_path &&
                "/input/joystick" != t.input_path) ||
                (o = "_click");
          }
          switch (t.slot) {
            case "position":
              o = "_move";
              break;
            case "scroll":
              o = "_scroll";
          }
          let a = "/dashboard/images/bindingcallouts/";
          switch (t.input_path) {
            case "/input/a":
              return a + "button_a.svg";
            case "/input/b":
              return a + "button_b.svg";
            case "/input/x":
              return a + "button_x.svg";
            case "/input/y":
              return a + "button_y.svg";
            case "/input/grip":
              return a + "button_grip.svg";
            case "/input/system":
              return a + "button_system.svg";
            case "/input/application_menu":
              return a + "button_menu.svg";
            case "/input/trackpad":
              return "knuckles" == e
                ? a + "button_trackbutton" + o + ".svg"
                : a + "button_trackpad" + o + ".svg";
            case "/input/thumbstick":
            case "/input/joystick":
              return a + "button_thumbstick" + o + ".svg";
            case "/input/trigger":
              return a + "button_trigger.svg";
          }
          return null;
        }
        function y(e) {
          switch (e) {
            case "north":
            case "south":
            case "east":
            case "west":
            case "center":
              return "dpad";
            default:
              return "button";
          }
        }
        class b extends n.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          renderSlot(e, t) {
            let o,
              a = _(this.props.controllerType, e);
            o = a
              ? n.createElement("img", {
                  className: "BindingCalloutIcon",
                  src: a,
                })
              : n.createElement("div", { className: "BindingCalloutIcon" });
            let i,
              r = (function (e) {
                let t = "/dashboard/images/bindingcallouts/";
                switch (e.mode) {
                  case "dpad":
                  case "dpad_click":
                    return t + "modifier_click.svg";
                  case "dpad_touch":
                    return t + "modifier_touch.svg";
                }
                switch (e.slot) {
                  case "grab":
                  case "click":
                  case "single":
                    return t + "modifier_click.svg";
                  case "double":
                    return t + "modifier_doubleclick.svg";
                  case "long":
                    return t + "modifier_long.svg";
                  case "held":
                    return t + "modifier_held.svg";
                  case "scroll":
                  case "position":
                  case "touch":
                    return t + "modifier_touch.svg";
                  case "force":
                    return t + "modifier_force.svg";
                }
                return null;
              })(e);
            return (
              (i = r
                ? n.createElement("img", {
                    className: "BindingCalloutModifierIcon",
                    src: r,
                  })
                : n.createElement("div", {
                    className: "BindingCalloutModifierIcon",
                  })),
              n.createElement(
                "div",
                { className: "BindingCalloutContents", key: t },
                o,
                i,
                n.createElement(
                  "div",
                  { className: "BindingCalloutLabelContainer" },
                  n.createElement(
                    "div",
                    { className: "Label" },
                    e.localized_action_name,
                  ),
                  n.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot" },
                    this.props.localizedInputName,
                    " : ",
                    (0, c.Xx)("#SourceInputMode_" + e.slot),
                  ),
                ),
              )
            );
          }
          render() {
            let e,
              t = "BindingCallout";
            this.props.leftAlign
              ? ((e = -0.05), (t += " AlignCalloutRight"))
              : ((e = 0.05), (t += " AlignCalloutLeft")),
              this.props.inputActive && (t += " CalloutInputActive");
            let o =
              this.props.devicePath +
              this.props.inputCallout.input_path +
              "_component";
            return n.createElement(
              "div",
              { className: "BindingCalloutContainer" },
              n.createElement(s.CH, {
                id: o,
                sDevicePath: this.props.devicePath,
                sInputPath: this.props.inputCallout.input_path,
                key: o,
              }),
              n.createElement(
                "div",
                { className: t },
                this.props.inputCallout.slot_callouts.map((e, t) =>
                  this.renderSlot(e, String(t)),
                ),
                n.createElement(
                  "div",
                  { className: "CalloutAnchorPoint" },
                  n.createElement(
                    s.at,
                    null,
                    this.props.inputActive &&
                      n.createElement(s.x1, {
                        target_id: o,
                        thickness: 0.002,
                        start_buffer: 0,
                        end_buffer: 0,
                      }),
                  ),
                ),
              ),
            );
          }
        }
        class f extends n.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            let e = [],
              t = [];
            for (let o of this.props.chordCallout.inputs) {
              let a = o.device_path + o.input_path + o.slot,
                i = {
                  device_path: o.device_path,
                  input_path: o.input_path,
                  mode: y(o.slot),
                  slot: o.slot,
                  localized_action_name:
                    this.props.chordCallout.localized_action_name,
                };
              e.length > 0 &&
                e.push(
                  n.createElement(
                    "div",
                    { className: "ChordCalloutPlus", key: "plus" + e.length },
                    "+",
                  ),
                ),
                e.push(
                  n.createElement("img", {
                    className: "BindingCalloutIcon",
                    key: a + "_icon",
                    src: _(this.props.controllerType, i),
                  }),
                ),
                t.push(
                  n.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot", key: a + "_text" },
                    d.I.LocalizeControllerString(
                      this.props.controllerTypeInfo,
                      o.input_path,
                    ),
                    " : ",
                    (0, c.Xx)("#SourceInputMode_" + o.slot),
                  ),
                );
            }
            let o = "ChordCalloutContainer";
            return (
              this.props.inputActive && (o += " CalloutInputActive"),
              n.createElement(
                "div",
                { className: o },
                n.createElement("div", { className: "ChordCalloutHeader" }, e),
                n.createElement(
                  "div",
                  { className: "ChordCalloutBody" },
                  n.createElement(
                    "div",
                    { className: "Label" },
                    this.props.chordCallout.localized_action_name,
                  ),
                  t,
                ),
              )
            );
          }
        }
        class S extends n.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new s.Nv()),
              (this.m_sMailboxName = void 0),
              (this.m_sMailboxName =
                "devicecallout/" +
                this.props.device.device_path.replace(/\//g, "_")),
              this.m_mailbox.Init(this.m_sMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  "input_active_state",
                  this.OnInputActiveState,
                );
                let e = {
                  type: "request_input_in_use_updates",
                  device_path: this.props.device.device_path,
                  mailbox: this.m_sMailboxName,
                };
                this.m_mailbox.SendMessage("input_server", e);
              });
            let t = {};
            for (let e of Object.keys(this.props.device.input_callouts))
              t[e] = !1;
            this.state = { input_state: t };
          }
          OnInputActiveState(e) {
            let t = Object.assign({}, this.state.input_state);
            (t[e.input_path] = e.state), this.setState({ input_state: t });
          }
          componentWillUnmount() {
            let e = {
              type: "cancel_input_in_use_updates",
              device_path: this.props.device.device_path,
              mailbox: this.m_sMailboxName,
            };
            this.m_mailbox.SendMessage("input_server", e);
          }
          render() {
            if (!VRHTML) return null;
            if (
              !VRHTML.VRSystem.IsDevicePathValid(this.props.device.device_path)
            )
              return null;
            let e = -0.05,
              t = { x: -0.08, y: 0.05, z: 0.12 },
              o = !0;
            "/user/hand/left" == this.props.device.device_path &&
              ((t.x = -t.x), (e = -e), (o = !1));
            let a = d.I.GetControllerTypeInfo(this.props.controllerType);
            if (!a) return null;
            let i = [],
              r = Object.keys(this.props.device.input_callouts);
            for (let e of r) {
              let t = this.props.device.input_callouts[e],
                s = (t.slot_callouts.length, e);
              a && (s = d.I.LocalizeControllerString(a, e));
              let l = a.input_source[e],
                c = 999;
              l && l.order && (c = l.order);
              let u = n.createElement(b, {
                devicePath: this.props.device.device_path,
                inputCallout: t,
                leftAlign: o,
                inputActive:
                  1 == r.length || this.state.input_state[t.input_path],
                localizedInputName: s,
                controllerType: this.props.controllerType,
                key: this.props.device.device_path + e,
              });
              i.push({ order: c, callout: u });
            }
            i.sort((e, t) => e.order - t.order);
            let l = i.map((e) => e.callout),
              c = [];
            for (let e of this.props.device.chords) {
              let t = !1;
              for (let o of e.inputs)
                t = t || this.state.input_state[o.input_path];
              c.push(
                n.createElement(f, {
                  controllerTypeInfo: a,
                  chordCallout: e,
                  controllerType: this.props.controllerType,
                  key: "chord_" + c.length,
                  inputActive: t,
                }),
              );
            }
            return n.createElement(
              s.wx,
              { parent_path: this.props.device.device_path },
              n.createElement(
                s.A4,
                { vOffset: t },
                n.createElement(
                  s.jm,
                  null,
                  n.createElement(
                    s.wx,
                    { rotation: { y: o ? 7 : -7 } },
                    n.createElement(
                      s.wx,
                      { translation: { x: e } },
                      n.createElement(
                        s.s_,
                        { width: 0.1, debug_name: "bindingcallouts-2" },
                        n.createElement(
                          "div",
                          { className: "FlexColumn BindingCalloutColumn" },
                          l,
                          c,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (0, a.gn)([r.ak], S.prototype, "OnInputActiveState", null);
        class C extends n.Component {
          constructor(e) {
            super(e);
          }
          GenerateCalloutDirections(e) {
            switch (e) {
              case 0:
                return [];
              case 1:
                return [{ x: -0.05, y: 0.06 }];
              default: {
                let t = Math.PI / 8,
                  o = (7 * Math.PI) / 8,
                  a = [];
                for (let n = 0; n < e; n++) {
                  let i = t + ((o - t) * n) / (e - 1),
                    r = { x: -Math.cos(i), y: Math.sin(i) };
                  a.push(r);
                }
                return a;
              }
            }
          }
          ComputeActualRect(e, t) {
            return e.dir.x <= 0
              ? {
                  left: e.dir.x * t - e.size.x,
                  right: e.dir.x * t,
                  top: e.dir.y * t - e.size.y / 2,
                  bottom: e.dir.y * t + e.size.y / 2,
                }
              : {
                  left: e.dir.x * t,
                  right: e.dir.x * t + e.size.x,
                  top: e.dir.y * t - e.size.y / 2,
                  bottom: e.dir.y * t + e.size.y / 2,
                };
          }
          HasIntersection(e, t) {
            return !(
              e.right < t.left ||
              e.left > t.right ||
              e.bottom < t.top ||
              e.top > t.bottom
            );
          }
          HasCollision(e, t) {
            for (let o = 0; o < e.length; o++)
              for (let a = 0; a < e.length; a++) {
                if (o == a) continue;
                let n = this.ComputeActualRect(e[o], t),
                  i = this.ComputeActualRect(e[a], t);
                if (this.HasIntersection(n, i)) return !0;
              }
            return !1;
          }
          FindDistanceThatFits(e, t, o) {
            let a = t;
            for (; this.HasCollision(e, a); ) a += o;
            return a;
          }
          render() {
            return this.props.devices
              ? n.createElement(
                  "div",
                  { className: "DeviceCalloutList" },
                  Object.keys(this.props.devices).map((e) =>
                    n.createElement(
                      "div",
                      { key: e, className: "DeviceCalloutListEntry" },
                      n.createElement(S, {
                        device: this.props.devices[e],
                        controllerType: this.props.controllerType,
                        key: e,
                      }),
                    ),
                  ),
                )
              : null;
          }
        }
        let k = class extends n.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(g.Ml).then(() => {
                this.m_mailbox.RegisterHandler(
                  "request_binding_callouts",
                  this.OnRequestBindingCallouts,
                ),
                  this.m_mailbox.RegisterHandler(
                    "cancel_binding_callouts",
                    this.OnCancelBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "should_show_binding_callouts",
                    this.OnShouldShowBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "request_tutorial_callout",
                    this.OnRequestTutorialCallout,
                  );
              }),
              p.G3.Init(!1),
              (this.state = {});
          }
          GetDefaultControllerType() {
            let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              t = e.find((e) => e.eClass == s.qR.Controller);
            return (
              t || (t = e.find((e) => e.eClass == s.qR.HMD)),
              t
                ? VRHTML.VRProperties.GetStringProperty(
                    t.unIndex,
                    s.Uk.ControllerType_String,
                  )
                : null
            );
          }
          SendShouldShowBindingCalloutsResponse(e, t) {
            let o = {
              type: "should_show_binding_callouts_response",
              app_key: e.app_key,
              has_callouts: t,
            };
            this.m_mailbox.SendResponse(e, o);
          }
          OnShouldShowBindingCallouts(e) {
            let t = this.GetDefaultControllerType();
            (0, l._l)(e.app_key)
              .then((o) => {
                let a = "legacy" == o.category,
                  n = !a;
                return (
                  a &&
                    (n =
                      o.current_binding_url[t] !=
                      (o.default_bindings && o.default_bindings[t])),
                  n
                    ? (this.SendShouldShowBindingCalloutsResponse(e, !0), null)
                    : (0, l.Cl)(e.app_key, t, o.current_binding_url[t])
                );
              })
              .then((t) => {
                let o = !1;
                if (t.binding_config.alias_info)
                  for (let e in t.binding_config.alias_info) {
                    let a = t.binding_config.alias_info[e];
                    if (!a.hidden && a.alias_name) {
                      o = !0;
                      break;
                    }
                  }
                t.binding_config.simulated_actions &&
                  t.binding_config.simulated_actions.length > 0 &&
                  (o = !0),
                  this.SendShouldShowBindingCalloutsResponse(e, o);
              })
              .catch((t) => {
                this.SendShouldShowBindingCalloutsResponse(e, !1);
              });
          }
          OnRequestBindingCallouts(e) {
            let t,
              o = e.controller_type
                ? e.controller_type
                : this.GetDefaultControllerType();
            (0, l._l)(e.app_key)
              .then(
                (a) => (
                  (t = a), (0, l.Cl)(e.app_key, o, t.current_binding_url[o])
                ),
              )
              .then((a) => {
                (Object.assign({}, e).controller_type = o),
                  this.ShowCallouts(e, o, t, a.binding_config);
              })
              .catch((e) => {
                console.log("Request for bindings failed: ", e);
              });
          }
          OnCancelBindingCallouts(e) {
            this.state.sAppKey == e.app_key && this.OnCloseCallouts();
          }
          OnRequestTutorialCallout(e) {
            this.setState({
              actionManifest: null,
              bindingConfig: null,
              sActionSet: null,
              sRestrictToAction: null,
              sAppKey: e.app_key,
              sControllerType: e.controller_type,
              tutorialCallout: e,
            });
          }
          IsActionSetAllowed(e, t) {
            if (e.required_options)
              for (let o of e.required_options) if (!t.options[o]) return !1;
            if (e.forbidden_options)
              for (let o of e.forbidden_options) if (t.options[o]) return !1;
            return !0;
          }
          DoesActionSetHaveBindings(e, t) {
            if (
              t.bindings &&
              t.bindings[e.name] &&
              t.bindings[e.name].sources.length > 0
            ) {
              let t = !1;
              for (let o of e.actions)
                if (!o.hide_callout) {
                  t = !0;
                  break;
                }
              return t;
            }
            return !1;
          }
          DetermineDefaultActionSet(e, t) {
            for (let o of e.action_sets)
              if (
                this.IsActionSetAllowed(o, t) &&
                this.DoesActionSetHaveBindings(o, t)
              )
                return o.name;
          }
          ShowCallouts(e, t, o, a) {
            let n = null,
              i = null;
            if (e.action) {
              e: for (let t of o.action_sets)
                if (this.DoesActionSetHaveBindings(t, a))
                  for (let o of t.actions)
                    if (o.name.toUpperCase() == e.action.toUpperCase()) {
                      n = t.name;
                      break e;
                    }
              i = e.action.toUpperCase();
            } else
              n = e.action_sets
                ? e.action_sets[0]
                : this.DetermineDefaultActionSet(o, a);
            n &&
              this.setState({
                actionManifest: o,
                bindingConfig: a,
                sActionSet: n,
                sRestrictToAction: i,
                sAppKey: e.app_key,
                sControllerType: t,
              });
          }
          ComputeCalloutsForActionSet(e) {
            let t = [],
              o = this.state.bindingConfig.bindings[e.name];
            if (o && o.sources)
              for (let a of o.sources)
                if (a.inputs)
                  for (let o of Object.keys(a.inputs)) {
                    let n = a.inputs[o];
                    if (!n.output) continue;
                    if (
                      this.state.sRestrictToAction &&
                      n.output.toUpperCase() != this.state.sRestrictToAction
                    )
                      continue;
                    let i = a.path.indexOf("/input");
                    if (-1 == i) continue;
                    let r = {
                        device_path: a.path.substring(0, i),
                        input_path: a.path.substring(i),
                        mode: a.mode,
                        slot: o,
                        localized_action_name: null,
                      },
                      s = e.actions.find(
                        (e) => e.name.toUpperCase() == n.output.toUpperCase(),
                      );
                    if (s) {
                      if (s.hide_callout) continue;
                      let e = s.localized_name,
                        t =
                          this.state.bindingConfig.alias_info &&
                          this.state.bindingConfig.alias_info[s.name];
                      if (t && (t.alias_name && (e = t.alias_name), t.hidden))
                        continue;
                      r.localized_action_name = e;
                    } else if (n.output.startsWith("/simactions/")) {
                      let e = parseInt(
                          n.output.slice(n.output.lastIndexOf("/") + 1),
                        ),
                        t = this.state.bindingConfig.simulated_actions.find(
                          (t) => t.id == e,
                        );
                      if (!t) continue;
                      r.localized_action_name = t.name;
                    }
                    r.localized_action_name && t.push(r);
                  }
            return t;
          }
          ComputeChordCalloutsForActionSet(e) {
            let t = [],
              o = this.state.bindingConfig.bindings[e.name];
            if (o && o.chords)
              for (let a of o.chords) {
                if (!a.inputs || !a.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  a.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let o = e.actions.find(
                  (e) => e.name.toUpperCase() == a.output.toUpperCase(),
                );
                if (!o) continue;
                let n = { inputs: [], localized_action_name: o.localized_name };
                for (let e of a.inputs) {
                  if (2 != e.length) continue;
                  let t = e[0].indexOf("/input");
                  if (-1 == t) continue;
                  let o = {
                    device_path: e[0].substring(0, t),
                    input_path: e[0].substring(t),
                    slot: e[1],
                  };
                  n.inputs.push(o);
                }
                n.inputs.length > 0 && t.push(n);
              }
            return t;
          }
          ComputeGroupedCallouts() {
            if (
              !(
                this.state.actionManifest &&
                this.state.bindingConfig &&
                this.state.sActionSet &&
                this.state.sAppKey &&
                this.state.sControllerType
              )
            )
              return {};
            let e = [],
              t = [];
            for (let o of this.state.actionManifest.action_sets)
              (o.name != this.state.sActionSet &&
                o.display_with != this.state.sActionSet) ||
                ((e = e.concat(this.ComputeCalloutsForActionSet(o))),
                (t = t.concat(this.ComputeChordCalloutsForActionSet(o))));
            return this.GroupCallouts(e, t);
          }
          GroupCallouts(e, t) {
            let o = {};
            for (let t of e) {
              let e = t.device_path.toLowerCase();
              o.hasOwnProperty(e) ||
                (o[e] = { device_path: e, input_callouts: {}, chords: [] });
              let a = o[e];
              a.input_callouts.hasOwnProperty(t.input_path) ||
                (a.input_callouts[t.input_path] = {
                  input_path: t.input_path,
                  slot_callouts: [],
                }),
                a.input_callouts[t.input_path].slot_callouts.push(t);
            }
            for (let e of t) {
              if (0 == e.inputs.length) continue;
              let t = e.inputs[0].device_path.toLowerCase(),
                a = !1;
              for (let o of e.inputs)
                if (o.device_path.toLowerCase() != t) {
                  a = !0;
                  break;
                }
              a
                ? console.log(
                    "chord is multi-device, which we don't know how to draw yet",
                    e,
                  )
                : o[t].chords.push(e);
            }
            return o;
          }
          OnSelectActionSet(e) {
            this.setState({ sActionSet: e });
          }
          OnCloseCallouts() {
            this.setState({
              actionManifest: void 0,
              bindingConfig: void 0,
              sActionSet: void 0,
              sRestrictToAction: void 0,
              sAppKey: void 0,
              sControllerType: void 0,
              tutorialCallout: void 0,
            });
          }
          renderTutorialCallout() {
            let e = {
                device_path: this.state.tutorialCallout.device_path,
                input_path: this.state.tutorialCallout.input_path,
                mode: this.state.tutorialCallout.mode,
                slot: this.state.tutorialCallout.slot,
                localized_action_name:
                  this.state.tutorialCallout.localized_action_name,
              },
              t = {
                input_path: this.state.tutorialCallout.input_path,
                slot_callouts: [e],
              },
              o = {
                device_path: this.state.tutorialCallout.device_path,
                input_callouts: {},
                chords: [],
              };
            o.input_callouts[this.state.tutorialCallout.input_path] = t;
            let a = {};
            return (
              (a[this.state.tutorialCallout.device_path] = o),
              n.createElement(C, {
                devices: a,
                controllerType: this.state.sControllerType,
              })
            );
          }
          render() {
            if (this.state.tutorialCallout) return this.renderTutorialCallout();
            let e = this.ComputeGroupedCallouts();
            if (0 == Object.keys(e).length) return null;
            let t = [];
            this.state.actionManifest.action_sets.forEach((e) => {
              if (
                this.IsActionSetAllowed(e, this.state.bindingConfig) &&
                !e.display_with &&
                this.DoesActionSetHaveBindings(e, this.state.bindingConfig)
              ) {
                let o = "ActionSetName ButtonControl";
                e.name == this.state.sActionSet && (o += " ActionSetSelected"),
                  t.push(
                    n.createElement(
                      h.z,
                      {
                        className: o,
                        onClick: () => {
                          this.OnSelectActionSet(e.name);
                        },
                        key: e.name,
                      },
                      e.localized_name,
                    ),
                  );
              }
            });
            let o = u.S.GetApp(this.state.sAppKey);
            return n.createElement(
              "div",
              { className: "CalloutTopLevelContainer" },
              !this.state.sRestrictToAction &&
                n.createElement(
                  "div",
                  { className: "CalloutActionSetDialogContainer" },
                  n.createElement(
                    s.wx,
                    { parent_path: "/user/head" },
                    n.createElement(
                      s.iC,
                      { start_angle_threshold: 40, stop_angle_threshold: 5 },
                      n.createElement(
                        s.wx,
                        { rotation: { x: -10, y: 10, z: 0 } },
                        n.createElement(
                          s.wx,
                          {
                            translation: {
                              x: -0,
                              y: -0,
                              z: -0.85 * m.g.getDashboardDistance(),
                            },
                          },
                          n.createElement(
                            s.s_,
                            {
                              width: 0.65 * m.g.getDashboardScale(),
                              interactive: !0,
                              debug_name: "bindingcallouts-1",
                            },
                            n.createElement(
                              h.q,
                              { className: "BindingCalloutActionPanel" },
                              o &&
                                n.createElement(
                                  "div",
                                  { className: "BindingCalloutAppHeader" },
                                  n.createElement("img", {
                                    className: "BindingCalloutImage",
                                    src: u.S.GetAppImageURL(this.state.sAppKey),
                                  }),
                                  n.createElement(
                                    "div",
                                    { className: "BindingCalloutTitle" },
                                    "Controller Bindings",
                                  ),
                                  n.createElement(
                                    "div",
                                    { className: "BindingCalloutConfigName" },
                                    this.state.bindingConfig.name,
                                  ),
                                ),
                              n.createElement(
                                "div",
                                { className: "BindingCalloutActionList" },
                                t,
                                n.createElement(
                                  h.z,
                                  {
                                    className: "ButtonControl CloseButton",
                                    onClick: this.OnCloseCallouts,
                                  },
                                  "Close",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              n.createElement(C, {
                devices: e,
                controllerType: this.state.sControllerType,
              }),
            );
          }
        };
        (0, a.gn)([r.ak], k.prototype, "OnShouldShowBindingCallouts", null),
          (0, a.gn)([r.ak], k.prototype, "OnRequestBindingCallouts", null),
          (0, a.gn)([r.ak], k.prototype, "OnCancelBindingCallouts", null),
          (0, a.gn)([r.ak], k.prototype, "OnRequestTutorialCallout", null),
          (0, a.gn)([r.ak], k.prototype, "OnCloseCallouts", null),
          (k = (0, a.gn)([v.Pi], k)),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              s.Z9.MakeOverlaysInteractiveIfVisible,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              s.qC.Mouse,
            ),
          (0, c.CK)(
            ["bindingui"],
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetSteamLanguage(),
          )
            .then(() => d.I.Init())
            .then(() => u.S.Init())
            .then(() => {
              i.render(
                n.createElement(s.n0, null, n.createElement(k, null)),
                document.getElementById("root"),
              );
            });
      },
      7726: (e, t, o) => {
        "use strict";
        o.d(t, { A: () => n, X: () => d });
        var a,
          n,
          i = o(655),
          r = o(7294),
          s = o(7056),
          l = o(9313),
          c = (o(6698), o(9626), o(7062));
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(n || (n = {}));
        let d = (a = class extends r.Component {
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
              o = l.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex,
              );
            let i = !1;
            if (t) {
              const t =
                null !==
                  (e = l.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    l.Uk.DeviceBatteryPercentage_Float,
                  )) && void 0 !== e
                  ? e
                  : 0;
              (i = l.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                l.Uk.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = t)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      t + a.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      t - a.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            let r = a.GetBatteryIcon(
                t,
                i,
                this.batteryLevelStable,
                n.HorizontalPips,
              ),
              s = this.GetRoleIcon(o);
            (r == this.state.batteryIconPath &&
              s == this.state.roleIconPath &&
              o == this.state.eRole) ||
              this.setState({ batteryIconPath: r, roleIconPath: s, eRole: o });
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
          static GetBatteryIcon(e, t, o, a) {
            if (!e) return null;
            const i =
              a == n.VerticalBattery
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
            e == l.Kg.TrackedControllerRole_LeftHand
              ? ((t = "/user/hand/left"), (o = -0.05))
              : e == l.Kg.TrackedControllerRole_RightHand
                ? ((t = "/user/hand/right"), (o = 0.05))
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
          (0, i.gn)([s.ak], d.prototype, "OnBatteryStateChanged", null),
          (0, i.gn)([s.ak], d.prototype, "OnDeviceRoleChanged", null),
          (0, i.gn)([s.ak], d.prototype, "OnDeviceEvent", null),
          (d = a = (0, i.gn)([c.Pi], d));
      },
      8261: (e, t, o) => {
        "use strict";
        o.d(t, { g: () => ce, _: () => J });
        var a,
          n = o(655),
          i = o(9313),
          r = o(7056),
          s = o(2188),
          l = o(7294),
          c = o(1509),
          d = o(5177),
          u = o(7176),
          h = o(3568),
          m = o(8495),
          p = o(7008),
          v = o(9942),
          g = o(1628),
          _ = o(7062),
          y = o(7726),
          b = o(4790),
          f = o(6459),
          S = o(9347),
          C = o(7830),
          k = o(7095),
          R = o(8980);
        let w = (a = class extends l.Component {
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
                (e) => !a.s_failedImages.includes(e),
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
              a.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
                  className: (0, R.LJ)("PortraitAppImageContainer", [
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
        (w.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (w.s_failedImages = []),
          (0, n.gn)([r.ak], w.prototype, "loadNextImage", null),
          (0, n.gn)([r.ak], w.prototype, "onLoad", null),
          (0, n.gn)([r.ak], w.prototype, "onError", null),
          (w = a = (0, n.gn)([_.Pi], w));
        var V = o(8242);
        const T = (e) => {
          if (null == e) return "";
          let t = e.image_path_capsule || e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        };
        class M extends l.Component {
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
            C.Ux.OpenDeepLink(C.Yw.Name, e);
          }
          render() {
            var e;
            const t = v.H.Instance.SceneAppKey,
              o = v.H.Instance.SceneAppName,
              a = v.H.Instance.SceneApplicationState,
              n = v.H.Instance.SceneAppIsHome,
              r = g.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = g.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              c = g.G3.apps && g.G3.apps.find((e) => e.key == t);
            let m = !1;
            switch (a) {
              case i.xY.Quitting:
              case i.xY.Starting:
              case i.xY.Waiting:
                m = !0;
            }
            return l.createElement(
              f.lL,
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
                l.createElement(w, { appkey: t, title: o, imageUrl: T(c) }),
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
                  n
                    ? (0, h.Xx)("#Return_To_Home")
                    : (0, h.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    V.ls,
                    {
                      icon: V.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, h.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    V.ls,
                    { icon: V.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, h.Xx)("#App_Video_Settings"),
                  ),
                r &&
                  l.createElement(
                    d.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    n ? (0, h.Xx)("#Exit_Home") : (0, h.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, n.gn)([r.ak], M.prototype, "onExitApp", null),
          (0, n.gn)([r.ak], M.prototype, "onReturnToGame", null),
          (0, n.gn)(
            [r.ak],
            M.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, n.gn)([r.ak], M.prototype, "onOpenAppVideoSettings", null);
        var E,
          L = o(9669),
          I = o.n(L),
          D = o(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(E || (E = {}));
        const O = (e) =>
          l.createElement(
            "div",
            {
              className: (0, R.LJ)("ButtonContainer", E[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              d.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == E.Left
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
            const o = this.m_refScrollPanel.current;
            if (!o) return;
            if (o.isThrown)
              return void o.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const a = o.children;
            if (!a || 0 == a.length) return;
            const n =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              i = a[0],
              r = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : o.scrollLeft,
              s = i.getBoundingClientRect().left + o.scrollLeft,
              l = i.clientWidth,
              c = o.clientWidth,
              d = Math.floor(c / l) - 1,
              u = Math.round((r - s + n + 1) / l) + d * e - 0.4999,
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
                className: (0, R.LJ)(
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
                      side: E.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(O, {
                      side: E.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, n.gn)([r.ZP], x.prototype, "onAnimationFrame", null),
          (0, n.gn)([r.ZP], x.prototype, "onScroll", null),
          (0, n.gn)([r.ZP], x.prototype, "onLeftButtonClick", null),
          (0, n.gn)([r.ZP], x.prototype, "onRightButtonClick", null);
        let H = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new R.cB()),
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
                  className: (0, R.LJ)(
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
                  l.createElement(w, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, n.gn)([r.ZP], H.prototype, "buttonMouseEnter", null),
          (0, n.gn)([r.ZP], H.prototype, "buttonMouseLeave", null),
          (0, n.gn)([r.ZP], H.prototype, "onParentScrollStop", null),
          (H = (0, n.gn)([_.Pi], H));
        const P = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          A = (e) => {
            var t;
            const o = !!e.loading,
              a = null !== (t = e.apps) && void 0 !== t ? t : [];
            let n = "AppCarousel";
            return (
              e.className && (n += " " + e.className),
              (n += " NoAnimations"),
              l.createElement(
                x,
                { additionalClassNames: n, paginationAlignmentOffset: -20 },
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
                  a.map((e) =>
                    l.createElement(H, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var B;
        class N extends l.Component {
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
                o = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; o.has(t[0].appid); ) t.shift();
                let a = t.shift();
                o.add(a.appid),
                  e.push(
                    l.createElement(
                      d.z,
                      {
                        key: `appid_${a.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        enabled: !1,
                      },
                      l.createElement("img", { src: a.logo }),
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
        let G = (B = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new i.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, o) {
            var a, n;
            m.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + o,
              e.key,
            ),
              null === (n = (a = this.props).onGameLaunched) ||
                void 0 === n ||
                n.call(a, e),
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
                  B.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let o = t.library_priority - e.library_priority;
              return 0 == o && (o = t.last_launch - e.last_launch), o;
            });
            const t = (e) => {
              let t = e.image_path_capsule || e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, o) => {
              let a = o;
              const n = o < B.TOP_ROW_LENGTH;
              return (
                n || (a -= B.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, n, a),
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
            const o =
              0 == t.length ||
              g.G3.settings.get("/settings/dashboard/forceWelcomeScreen");
            if (o) e = l.createElement(N, null);
            else {
              let o = t.slice(0, B.TOP_ROW_LENGTH),
                a = t.slice(B.TOP_ROW_LENGTH);
              e = l.createElement(
                l.Fragment,
                null,
                l.createElement(A, { className: "TopRow", apps: o }),
                l.createElement(A, { className: "BottomRow", apps: a }),
              );
            }
            return l.createElement(
              f.lL,
              {
                visible: this.props.visible,
                scrollable: !o,
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
          (G = B = (0, n.gn)([_.Pi], G));
        var F = o(421),
          U = o(6063),
          z = (o(9462), o(9626)),
          W = o(792),
          K = o(6346),
          q = o(6821),
          X = o(2477);
        function j(e) {
          const { debugHostLocation: t, onGrabStart: o, onGrabEnd: a } = e,
            n = z.BV.isVRGamepadUI,
            r = (0, R.aB)();
          if (!r) return null;
          const s =
              null != (null == r ? void 0 : r.overlayKey) &&
              "" != (null == r ? void 0 : r.overlayKey),
            c = !!(r.keyboardFlags & i.vS.Minimal),
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
            i.wx,
            { translation: h },
            l.createElement(
              i.wx,
              { scale: { y: d, x: d } },
              l.createElement(i.sl, { mountedId: (0, i.iN)(u.GN, u.gC) }),
              l.createElement(i.sl, { mountedId: (0, i.iN)(u.GN, u.jw) }),
            ),
            !1,
            s &&
              l.createElement(
                i.wx,
                { translation: m },
                l.createElement(U.J, {
                  tint: z.BV.GrabHandleTint,
                  onStartMove: o,
                  onEndMove: a,
                }),
              ),
          );
        }
        function Z(e) {
          const t = (0, R.aB)();
          if (!t) return null;
          const o = ce.k_nControlBarPitch;
          return (
            t.visible &&
            !t.dockedInDashboard &&
            l.createElement(
              i.eK,
              { bContinuousRelatch: !1 },
              l.createElement(
                i.wx,
                {
                  translation: ce.getDashboardTranslation(),
                  scale: ce.getDashboardScale(),
                },
                l.createElement(
                  i.wx,
                  { translation: ce.getControlBarTranslation() },
                  l.createElement(
                    i.wx,
                    { translation: ce.k_nKeyboardGrabTransformOffset },
                    l.createElement(
                      F.Z,
                      { min_distance: 0.2, should_head_align: !1 },
                      l.createElement(
                        i.wx,
                        {
                          translation: {
                            x: -1 * ce.k_nKeyboardGrabTransformOffset.x,
                            y: -1 * ce.k_nKeyboardGrabTransformOffset.y,
                            z: -1 * ce.k_nKeyboardGrabTransformOffset.z,
                          },
                        },
                        l.createElement(
                          i.wx,
                          { rotation: { x: o }, curvature_pitch: o },
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
        var Q,
          J,
          Y,
          $ = o(138),
          ee = o(2758),
          te = o(6698),
          oe = o(9589);
        !(function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
        })(J || (J = {}));
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
        function ne(e) {
          return e == u.AC || e.startsWith(u.wX);
        }
        function ie(e) {
          var t;
          const o =
            null === (t = ee.U.GetOverlayInfo(e)) || void 0 === t
              ? void 0
              : t.sHandle;
          return o ? VRHTML.VROverlay.GetVisibleTimeInSeconds(o) : 0;
        }
        function re(e, t, o) {
          var a;
          const n = Date.now(),
            i = n - t.nDockStartMs;
          if (i >= 1e3) {
            const n = /^valve\.steam\.desktopgame\.(\d+)$/,
              r = e.match(n),
              s = v.H.Instance.SceneAppKey,
              l =
                t.dockLocation == b.RA.Theater &&
                null !==
                  (a = g.G3.settings.get(
                    "/settings/dashboard/autoShowGameTheater",
                  )) &&
                void 0 !== a &&
                a;
            void 0 === o && (o = ie(e));
            const c = Math.floor(1e3 * (o - t.fLastTotalVisibleTimeInSeconds)),
              d = {
                OverlayKeyID: e,
                Location: b.RA[t.dockLocation],
                DurationMs: i,
                VisibleMs: c > 0 ? c : void 0,
                OverlayAppID:
                  2 == (null == r ? void 0 : r.length)
                    ? parseInt(r[1], 10)
                    : void 0,
                SceneAppKeyID: "" != s ? s : void 0,
                autoShowGameTheater: l,
              };
            (t.fLastTotalVisibleTimeInSeconds = o),
              m.e.instance.AddRow("SteamVROverlayDockStats", d);
          }
          t.nDockStartMs = n;
        }
        function se(e, t, o) {
          t.dockLocation != o && (re(e, t), (t.dockLocation = o));
        }
        function le(e) {
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
        let ce = (Q = class extends l.Component {
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
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              (this.m_keyboardVisibilityChangedEventHandle = null),
              (this.m_miscEventHandles = []),
              (this.m_eSceneApplicationState = i.xY.None),
              (this.m_bRoomSetupUI_exitAfterFloorAdjust = !1),
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
              (window.setDashboardScale = (e) => (Q.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (Q.s_dashboardUserDistance = e)),
              g.G3.Init(!1),
              i.hz.getInstance(),
              this.m_mailbox.Init(Q.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  Q.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    Q.k_sSetDashboardForceBoundsVisible,
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
                  var o;
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
                    case 9:
                      (this.m_bRoomSetupUI_exitAfterFloorAdjust = !1),
                        (W.C7.m_eRoomSetupStep = W.wk.FloorAutoDetect);
                      break;
                    case 8:
                      (this.m_bRoomSetupUI_exitAfterFloorAdjust = !0),
                        (W.C7.m_eRoomSetupStep = W.wk.FloorAdjustExisting);
                      break;
                    case 7:
                      null ===
                        (o =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRChaperone) ||
                        void 0 === o ||
                        o.StartInHMDRoomSetup(i.X3.Default);
                      break;
                    case 2:
                      this.onToggleRoomView(t);
                      break;
                    case 6:
                      this.onRecenterClick();
                      break;
                    case 10:
                      this.onClearRoomSetupClick();
                      break;
                    case 3:
                    case 4:
                      break;
                    case 13:
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
                t == i.a0.AppLaunch_Unknown ||
                t == i.a0.AppLaunch_Steam ||
                t == i.a0.Unknown,
              a = g.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              n = g.G3.settings.get("/settings/steamvr/enableHomeApp"),
              r = g.G3.settings.get(u.y3);
            ((o || (!a && n)) && !r) ||
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
                const t = v.H.Instance.SceneApplicationState,
                  o = t != i.xY.None;
                if (o && this.m_eSceneApplicationState == i.xY.None)
                  z.BV.HideTheaterOverlay();
                else if (
                  !o &&
                  this.m_eSceneApplicationState != i.xY.None &&
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
                      this.setOverlayDockLocation(e, b.RA.Theater), le(e);
                      break;
                    }
                (this.m_eSceneApplicationState = t),
                  this.isOverlayActive(u.PF) &&
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
                const e = z.BV.priorityGamepadFocusOverlay,
                  t = v.H.Instance.SceneApplicationState !== i.xY.None;
                z.BV.m_bDashboardVisible ||
                !e ||
                t ||
                W.C7.m_bDriverProvidedInHMDRoomSetupActive
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
            var e, t, o, a;
            const n = Array.from(
                null !==
                  (t =
                    null === (e = this.state.mapWindows) || void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== t
                  ? t
                  : [],
              ).sort(pe),
              i = this.getActiveOverlaySummonKey(),
              r = $.l.BHasMutualCapability(2),
              s = $.l.BHasMutualCapability(6),
              l = new K.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                o = z.BV.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == u.gB) continue;
              const a = new K.D3();
              a.set_tab_id(o);
              const n = this.shouldShowOverlayTab(t, !0),
                s = r && z.J_.includes(t.summon_overlay_key),
                c = z.BV.m_setOverlaysViewedThisSession.has(
                  t.summon_overlay_key,
                );
              a.set_visible_in_dashboard_menu(n && s),
                a.set_visible_in_dashboard_bar(n && (!s || c)),
                t.summon_overlay_key == u.T2
                  ? a.set_display_name((0, h.Xx)("#Steam"))
                  : a.set_display_name(t.tab_name);
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
              a.set_icon(d),
                l.add_tabs(a),
                i == t.summon_overlay_key && l.set_selected_tab_id(o),
                u.A4 == t.summon_overlay_key && l.set_vr_settings_tab_id(o),
                t.summon_overlay_key == u.T2 && l.set_vr_steam_tab_id(o);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (o = this.m_refDesktopView.current) ||
                void 0 === o ||
                o.state.desktopIndices.forEach((t) => {
                  var o;
                  const a = `${u.r4}.${t}`,
                    n = z.BV.GetTabIdForSummonKey(a),
                    r = new K.D3();
                  r.set_tab_id(n),
                    r.set_display_name(
                      e > 1
                        ? (0, h.Xx)("#Desktop_X", t)
                        : (0, h.Xx)("#Desktop"),
                    ),
                    r.set_visible_in_dashboard_bar(!0);
                  const s = new K.I_();
                  s.set_enum(2),
                    r.set_icon(s),
                    l.add_tabs(r),
                    (null == i ? void 0 : i.startsWith(u.gB)) &&
                      (null === (o = this.m_refDesktopView.current) ||
                      void 0 === o
                        ? void 0
                        : o.currentDesktopIndex) == t &&
                      l.set_selected_tab_id(n);
                });
            }
            for (const e of n) {
              if (!e.overlay_key) continue;
              const t = z.BV.GetTabIdForSummonKey(e.overlay_key),
                o = new K.D3();
              o.set_tab_id(t),
                o.set_display_name(e.title),
                o.set_visible_in_dashboard_bar(!0);
              const n = new K.I_();
              n.set_enum(5),
                n.set_hwnd(Number.parseInt(e.hwnd)),
                o.set_icon(n),
                l.add_tabs(o),
                (null == i ? void 0 : i.startsWith(u.gB)) &&
                  (null === (a = this.m_refDesktopView.current) || void 0 === a
                    ? void 0
                    : a.sCurrentOverlayKey) == e.overlay_key &&
                  l.set_selected_tab_id(t);
            }
            l.tabs().sort(me), (0, q.W)(l);
            const c = new K.yt();
            c.add_actions(
              K.z3.fromObject({
                action_id: 13,
                display_name: "User Guide",
                visible_in_menu: this.BShouldShowDashboardAction(13),
                invocation: 1,
                icon: { enum: 0 },
              }),
            );
            const d =
              $.l.BHasMutualCapability(8) && this.BShouldShowDashboardAction(9);
            c.add_actions(
              K.z3.fromObject({
                action_id: 9,
                parent_menu_action_id: d ? 5 : null,
                display_name: (0, h.Xx)("#MenuPlayspaceSetup"),
                visible_in_menu: this.BShouldShowDashboardAction(9),
                invocation: 1,
                icon: { enum: 12 },
              }),
            ),
              c.add_actions(
                K.z3.fromObject({
                  action_id: 8,
                  parent_menu_action_id: d ? 5 : null,
                  display_name: (0, h.Xx)("#MenuPlayspaceAdjustFloorHeight"),
                  visible_in_menu: this.BShouldShowDashboardAction(8),
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
                    action_id: 10,
                    parent_menu_action_id: 5,
                    display_name: "Clear Playspace",
                    visible_in_menu: this.BShouldShowDashboardAction(10),
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
                    action_id: 11,
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
              var o, a;
              let n = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                n = null !== (o = g.G3.settings.get(t)) && void 0 !== o ? o : 1;
              }
              z.BV.m_mapOverlayState.set(e, {
                refOverlayWidget: l.createRef(),
                dockLocation: b.RA.Dashboard,
                nDockStartMs: Date.now(),
                xfInitial: null,
                fScale: n,
                fLastTotalVisibleTimeInSeconds: ie(e),
              }),
                (null == t ? void 0 : t.starts_theater_mode)
                  ? (this.setOverlayDockLocation(e, b.RA.Theater), le(e))
                  : ne(e) &&
                    (null !==
                      (a = g.G3.settings.get(
                        "/settings/dashboard/autoShowGameTheater",
                      )) &&
                    void 0 !== a &&
                    a
                      ? (this.setOverlayDockLocation(e, b.RA.Theater), le(e))
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
            var e, t, o, a;
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
              null === (o = this.m_dashboardThumbnailsChangedEventHandle) ||
                void 0 === o ||
                o.unregister(),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              null === (a = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === a ||
                a.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            return Q.s_dashboardUserDistance
              ? Q.s_dashboardUserDistance
              : {
                  [J.Near]: 0.925,
                  [J.Middle]: 1.05,
                  [J.Far]: 1.2,
                  [J.VRGamepadUI]: 1.15,
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
              [J.Near]: -0.07,
              [J.Middle]: -0.08,
              [J.Far]: -0.09,
              [J.VRGamepadUI]: -0.09,
            }[z.BV.currentDashboardPosition];
            const o = -Q.getDashboardDistance();
            return {
              channel: i.uM.TheaterFast,
              from: [0, t, o],
              to: [0, t - 0.15, o],
              interp: i.O3.SmoothStep,
            };
          }
          static getDashboardScale() {
            var e;
            if (Q.s_dashboardUserScale) return Q.s_dashboardUserScale;
            let t = 1;
            const o = z.BV.currentDashboardPosition;
            return (
              (t =
                o == J.Near
                  ? 0.36
                  : o == J.Middle
                    ? 0.41
                    : o == J.Far
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
          static getUiScaleForLocation(e) {
            const t = z.BV.currentTheaterScreenSize;
            switch (e) {
              case b.RA.LeftHand:
              case b.RA.RightHand:
                return 0.4 * Q.getDashboardScale();
              case b.RA.Dashboard:
              case b.RA.World:
                return 1 * Q.getDashboardScale();
              case b.RA.Theater:
                return Q.getDashboardScale() * (t == z.fq.Large ? 2.35 : 1.8);
            }
            return Q.getDashboardScale();
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
            const e = v.H.Instance.SceneApplicationState !== i.xY.None,
              t =
                this.m_setSuppressingFade.size > 0 &&
                this.getActiveOverlaySummonKey() == u.A4,
              o = g.G3.settings.get(
                "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
              ),
              a = !v.H.Instance.SceneAppIsHome || !o;
            return z.BV.m_bDashboardVisible && a && !t && e;
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
              let a = Object.assign({}, t.setForcingBoundsVisible);
              return (
                (a[e.for_overlay_key] = new Set(a[e.for_overlay_key])),
                e.force_bounds_visible
                  ? a[e.for_overlay_key].add(e.for_id)
                  : a[e.for_overlay_key].delete(e.for_id),
                { setForcingBoundsVisible: a }
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
            const o = z.BV.m_mapOverlayState.get(e.overlay_key);
            o && re(e.overlay_key, o, e.visible_time_in_seconds),
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
            const o = g.G3.settings.get(u.y3);
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
            this.switchToOverlayInternal(u.gB),
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
                  null === (t = g.G3.settings.get(u.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          setOverlayDockLocation(e, t, o) {
            var a, n;
            z.BV.isTheaterMode,
              (t != b.RA.LeftHand &&
                t != b.RA.RightHand &&
                t != b.RA.Theater) ||
                z.BV.m_mapOverlayState.forEach((o, a) => {
                  o.dockLocation == t && se(e, o, b.RA.Dashboard);
                });
            const i = z.BV.m_mapOverlayState.get(e);
            if (
              (i &&
                (i.dockLocation == b.RA.Theater &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e)),
                se(e, i, t),
                (i.xfInitial = o)),
              t === b.RA.Dashboard)
            )
              if (e.startsWith(u.r4)) {
                const t = Number.parseInt(e.substring(u.r4.length + 1));
                null === (a = this.m_refDesktopView.current) ||
                  void 0 === a ||
                  a.onDesktopChange(t);
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
            const o = z.BV.m_mapOverlayState.get(e),
              a = o ? o.fScale : 1,
              n = z.BV.isVRGamepadUI
                ? z.BV.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                { scale: n },
                l.createElement(i.sl, {
                  mountedId: t.mountable_id,
                  fDashboardScale: a,
                }),
              ),
            );
          }
          shouldShowOverlayTab(e, t) {
            return t && e.summon_overlay_key == u.PF
              ? v.H.Instance.SceneApplicationState != i.xY.None
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
                    ((o = e.summon_overlay_key),
                    null !== (a = null == o ? void 0 : o.startsWith(u.MI)) &&
                      void 0 !== a &&
                      a))
                );
            var o, a;
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
            var o, a, n, r;
            if (!e) return !1;
            if (e == u.Us) {
              let t = {
                  type: "show_app_binding",
                  app_key:
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRApplications.GetSceneApplicationKey(),
                },
                o = "bindingui/" + i.qA[(0, i.Op)()];
              this.m_mailbox.SendMessage(o, t), (e = u.RM);
            }
            if (e.startsWith(u.r4)) {
              const t = Number.parseInt(e.substring(u.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (o = this.m_refDesktopView.current) ||
                  void 0 === o ||
                  o.onDesktopChange(t)),
                (e = u.gB);
            } else if (e.startsWith(u.Vq)) {
              if (
                !(null === (a = this.m_refDesktopView.current) || void 0 === a
                  ? void 0
                  : a.hasWindowView(e))
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
                  null !== (r = s.summon_overlay_key) && void 0 !== r ? r : "",
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
                  Q.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == u.po && !this.m_bUserManuallySwitchToOldLibrary)) &&
                e.push(u.T2),
              null == t && e.push(u.po);
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
            var o;
            if (!g.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const a = z.BV.m_mapOverlayState.get(e.overlay_key);
            (null == a ? void 0 : a.dockLocation) != b.RA.Theater &&
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
            const o = z.BV.m_mapOverlayState.get(e.overlay_key);
            o
              ? o.dockLocation != t
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
          setDashboardVisibility(e, t, o) {
            let a = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: o,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", a);
          }
          show(e) {
            if (z.BV.m_bDashboardVisible) return;
            m.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = v.H.Instance.SceneAppKey,
              o = v.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              o
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(u.PF, "show")),
              (this.m_activeOverlayThatVanished = null),
              (z.BV.m_bDashboardVisible = !0);
            let a = { type: Q.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", a),
              (0, i.qI)();
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
              o = "boolean" == typeof e ? e : !t;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(o);
          }
          onLegacyQuickLaunchButtonClick() {
            this.switchToOverlayInternal(u.po);
          }
          onRecenterClick() {
            z.BV.m_bLinkStreamActive && z.BV.m_bIsLinkServer
              ? (this.m_mailbox.SendMessage("svl", { type: "handle_recenter" }),
                VRHTML.VRDashboardManager.HideDashboard(
                  "onRecenterClick stream active",
                ))
              : (VRHTML.VRDashboardManager.HideDashboard("onRecenterClick"),
                (W.C7.m_eRoomSetupStep = W.wk.RecenterCountdown));
          }
          onClearRoomSetupClick() {
            z.BV.m_bLinkStreamActive && z.BV.m_bIsLinkServer
              ? console.log(
                  "Error: onClearRoomSetupClick not implemented during VRLink sessions",
                )
              : VRHTML.VRChaperoneSetup.ClearRoomSetup();
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
                    i.Uk.Prop_Hmd_SupportsVRGamepadFocus_Bool,
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
              t = g.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              o = this.BShouldShowDashboardAction(1);
            let a = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (a = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                i.Uk.DeviceCanPowerOff_Bool,
              ));
            const n = v.H.Instance.SceneAppName,
              r = v.H.Instance.SceneAppIsHome;
            let s, c;
            return (
              (s = r
                ? (0, h.Xx)("#Exit_SteamVR_Home")
                : n
                  ? (0, h.Xx)("#PowerMenuQuitSceneApp", n)
                  : (0, h.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (c = r
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                l.createElement(
                  l.Fragment,
                  null,
                  z.BV.isVRGamepadUI &&
                    l.createElement(f.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(u.po),
                          this.showPopoverMenu(Y.None);
                      },
                    }),
                  a &&
                    l.createElement(f.dy, {
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
                    l.createElement(f.dy, {
                      label: s,
                      imageUrl: c,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(Y.None);
                      },
                    }),
                  l.createElement(f.dy, {
                    label: (0, h.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  o &&
                    l.createElement(f.dy, {
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
                !(function (e, t, o) {
                  let a = o.getBoundingClientRect();
                  return (
                    e >= a.left && e <= a.right && t >= a.top && t <= a.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, o, a;
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
                return l.createElement(f.Rk, {
                  name:
                    null === (o = this.state.mapWindows.get(e)) || void 0 === o
                      ? void 0
                      : o.title,
                  iconUrl: this.getDashboardIconUri(n),
                });
              }
              return l.createElement(f.Rk, {
                name:
                  "Desktop " +
                  (null === (a = this.m_refDesktopView.current) || void 0 === a
                    ? void 0
                    : a.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(n),
              });
            }
            return n.summon_overlay_key == u.RM
              ? l.createElement(f.Rk, {
                  name: (0, h.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : l.createElement(f.Rk, {
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
            let o = [];
            const a =
              null !== (e = g.G3.settings.get(u.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, i.M9)((0, i.eQ)(e[3], e[0])),
                n = (0, i.M9)((0, i.eQ)(e[1], e[0])),
                r = (0, i.dq)(t, n),
                s = (0, i.Pd)((0, i.tS)(t, n, r)),
                c = (0, i.LY)((0, i.eQ)(e[0], e[3]));
              if (c < 0.4) continue;
              let d = Math.max(1, Math.floor(c));
              for (let t = 0; t < d; t++) {
                let n = (t + 1) / (d + 1),
                  r = (0, i.Oq)();
                (r.rotation = s),
                  (r.translation = (0, i.q9)(n, e[0], e[3])),
                  (r.scale = { x: 0.005, y: 0.005, z: a });
                let c = l.createElement(
                  i.wx,
                  { transform: r },
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
                o.push(c);
              }
              if (o.length > 20) break;
            }
            return o;
          }
          render() {
            if (W.C7.m_bDriverProvidedInHMDRoomSetupActive) return null;
            const e = this.getActiveOverlaySummonKey(),
              t =
                z.BV.m_bDashboardVisible &&
                this.state.setForcingBoundsVisible[e],
              o = t && t.size > 0,
              a = W.C7.m_eRoomSetupStep != W.wk.Off;
            let n = [];
            return (
              o && (n = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(oe.Sd, {
                  exitAfterFloorAdjust:
                    this.m_bRoomSetupUI_exitAfterFloorAdjust,
                }),
                !1,
                !a &&
                  l.createElement(
                    "div",
                    { className: "DashboardMain" },
                    o && l.createElement(ae, null),
                    o && l.createElement("span", null, n),
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
            var t, o, a, n, r, s;
            const l =
                null !== (t = g.G3.settings.get(u.Av)) && void 0 !== t && t,
              c =
                null !== (o = g.G3.settings.get(u.k_)) && void 0 !== o ? o : 0;
            switch (e) {
              case 0:
                return (
                  null ===
                    (a = g.G3.settings.get(
                      "/settings/dashboard/allowExitVR",
                    )) ||
                  void 0 === a ||
                  a
                );
              case 1:
                return g.G3.settings.get(
                  "/settings/dashboard/allowSystemShutdown",
                );
              case 2:
                return (
                  l &&
                  c > 0 &&
                  !(z.BV.m_bLinkStreamActive && z.BV.m_bIsLinkServer)
                );
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
                            i.Uk.Prop_Driver_RecenterSupport_Int32,
                          )) && void 0 !== n
                    ? n
                    : 0)
                );
              case 12:
                return z.BV.isTheaterMode || W.C7.m_bShowFloor;
              case 13:
                return (
                  null !==
                    (r = g.G3.settings.get(
                      "/settings/dashboard/allowUserGuide",
                    )) &&
                  void 0 !== r &&
                  r
                );
              case 9:
              case 8:
              case 10:
              case 7:
                return !(
                  null ===
                    (s =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            i.Uk.SupportsInHMDRoomSetup_Int32,
                          )) ||
                  void 0 === s ||
                  !s
                );
            }
          }
          renderLegacyControlBar(e, t) {
            var o, a, n, r;
            const s =
                null ===
                  (o = g.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === o ||
                o,
              c =
                null ===
                  (a = g.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === a ||
                a,
              m = ee.U.BOverlayExists(u.T2),
              _ = !z.BV.isVRGamepadUI,
              y = !(
                null !==
                  (n = g.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== n &&
                n
              ),
              b = v.H.Instance.SceneApplicationState,
              S = v.H.Instance.SceneAppIsHome,
              C =
                null ===
                  (r = g.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === r ||
                r
                  ? u.ml
                  : null,
              k = v.H.Instance.SceneAppKey;
            let R = "images/appimage_default.png";
            return (
              k && (R = "/app/image?app_key=" + k),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    i.VW,
                    { color: z.BV.ControlBarTint },
                    l.createElement(
                      i.wx,
                      { translation: { z: 1e-5 } },
                      l.createElement(
                        i.s_,
                        {
                          curvature_origin_id: C,
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
                              l.createElement(f.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_menu_c.svg",
                                label: (0, h.Xx)("#Menu"),
                                style: f.zk.Small,
                                onClick: () => this.showPopoverMenu(Y.Power),
                                onMouseEnter: this.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  this.startPopoverMenuTimeout(500),
                              }),
                            l.createElement(
                              f.dw,
                              { style: f.zk.Small },
                              m &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/vr_steam.svg",
                                  label: (0, h.Xx)("#Steam"),
                                  active: this.isSteamOverlayActive(),
                                  onClick: () => this.switchToSteamOverlay(),
                                }),
                              _ &&
                                l.createElement(f.B8, {
                                  label: (0, h.Xx)("#Library"),
                                  imageUrl:
                                    "/dashboard/images/icons/svr_items.svg",
                                  active: this.isOverlayActive(u.po),
                                  onClick: this.onLegacyQuickLaunchButtonClick,
                                }),
                              c &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_desktop_alt.svg",
                                  label: (0, h.Xx)("#Desktops"),
                                  active: this.isDesktopTrayActive(),
                                  onClick: () =>
                                    this.switchToOverlayInternal(u.gB),
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
                            b != i.xY.None &&
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
                                    i.VW,
                                    { color: z.BV.ControlBarTint },
                                    l.createElement(
                                      i.wx,
                                      { translation: { z: 0.02 } },
                                      l.createElement(
                                        i.s_,
                                        {
                                          debug_name: "NowPlayingButton",
                                          interactive: !0,
                                          curvature_origin_id: C,
                                          meters_per_pixel: u.F$,
                                        },
                                        l.createElement(
                                          "div",
                                          { className: "ControlBar" },
                                          l.createElement(f.NT, {
                                            label: S
                                              ? (0, h.Xx)("#SteamVR_Home")
                                              : (0, h.Xx)("#Now_Playing"),
                                            active: this.isOverlayActive(u.PF),
                                            style: f.zk.App,
                                            imageUrl: R,
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
                              f.dw,
                              { style: f.zk.Small },
                              this.BShouldShowDashboardAction(6) &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_recenter.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, h.Xx)("#Button_Recenter"),
                                  onClick: this.onRecenterClick,
                                }),
                              this.BShouldShowDashboardAction(9) &&
                                l.createElement(f.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_room_setup.svg",
                                  additionalClassNames: "CenterImageLarge",
                                  label: (0, h.Xx)("#RoomSetup"),
                                  onClick: () => {
                                    var e;
                                    return null ===
                                      (e =
                                        null === VRHTML || void 0 === VRHTML
                                          ? void 0
                                          : VRHTML.VRChaperone) || void 0 === e
                                      ? void 0
                                      : e.StartInHMDRoomSetup(i.X3.Default);
                                  },
                                }),
                              this.BShouldShowDashboardAction(2) &&
                                l.createElement(f.B8, {
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
                              l.createElement(f.D6, {
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
                              l.createElement(f.NT, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_settings.svg",
                                active: this.isOverlayActive(u.A4),
                                enabled: this.hasDashboardOverlay(u.A4),
                                label: (0, h.Xx)("#VRSettings"),
                                style: f.zk.Small,
                                centerPanelAnchorID: "VolumeButton",
                                onClick: () =>
                                  this.switchToOverlayInternal(u.A4),
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
            const o = z.BV.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(S.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: o,
                onToggleWindowList: () => this.showPopoverMenu(Y.Windows),
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
                          i.Uk.DashboardLinkSupport_Int32,
                        )) && void 0 !== t
                  ? t
                  : 0,
              a = z.BV.isVRGamepadUI && !!(1 & o) && z.BV.m_bLinkStreamActive;
            let n = a ? 0.425 : 0.35;
            return l.createElement(
              l.Fragment,
              null,
              a &&
                l.createElement(
                  i.wx,
                  { translation: { y: 0.075, z: 0 } },
                  l.createElement(de, {
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
                  overlay_key: u.BZ,
                  origin: i.Ic.TopCenter,
                  meters_per_pixel: z.BV.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
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
                  l.createElement(i.wx, { id: u.ZN, translation: { y: n } }),
                  l.createElement(i.wx, { id: u.dG, translation: { y: -0.1 } }),
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
                    v.H.Instance.SceneApplicationState !== i.xY.None,
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
            var e, t, o, a;
            const n =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              r =
                null !==
                  (a =
                    null === (o = this.m_refDesktopView.current) || void 0 === o
                      ? void 0
                      : o.desktopCount) && void 0 !== a
                  ? a
                  : 1,
              s = g.G3.settings.get(u.YL) || z.BV.m_bShowLegacyBar;
            return l.createElement(
              l.Fragment,
              null,
              s &&
                l.createElement(
                  i.Y9,
                  {
                    tabName: (0, h.Xx)("#Library"),
                    iconUri: "/dashboard/images/icons/svr_items.svg",
                    summonOverlayKey: u.po,
                  },
                  l.createElement(G, {
                    visible:
                      z.BV.m_bDashboardVisible && this.isOverlayActive(u.po),
                    onGameLaunched: this.onGameLaunched,
                  }),
                ),
              l.createElement(
                i.Y9,
                { tabName: (0, h.Xx)("#Now_Playing"), summonOverlayKey: u.PF },
                l.createElement(M, {
                  visible:
                    z.BV.m_bDashboardVisible && this.isOverlayActive(u.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              l.createElement(
                i.Y9,
                {
                  summonOverlayKey: u.gB,
                  tabName:
                    r > 1 ? (0, h.Xx)("#Desktop_X", n) : (0, h.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                l.createElement(S.N, {
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
            var e, t, o, a;
            let n = !1,
              r = !1;
            const s = this.getActiveOverlayKey(),
              c =
                null === (e = ee.U.GetOverlayInfo(s)) || void 0 === e
                  ? void 0
                  : e.sHandle;
            if (!c) return null;
            try {
              (n = VRHTML.VROverlay.GetFlag(c, i.Z9.EnableControlBarKeyboard)),
                (r = VRHTML.VROverlay.GetFlag(c, i.Z9.EnableControlBarClose));
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
                (null === (o = z.BV.m_mapOverlayState.get(s)) || void 0 === o
                  ? void 0
                  : o.dockLocation) == b.RA.Dashboard;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                i.wx,
                { parent_id: u.ZN },
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    i.s_,
                    {
                      curvature_origin_id: d,
                      origin: i.Ic.TopCenter,
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
                        l.createElement(f.CS, {
                          tooltipTranslation: m,
                          overlayKey: this.getActiveOverlayKey(),
                          additionalClassNames: "LargeIcon",
                        }),
                        null === (a = this.m_refDesktopView.current) ||
                          void 0 === a
                          ? void 0
                          : a.renderControlBarButtons(m),
                      ),
                      l.createElement(
                        "div",
                        { className: "Section" },
                        !p &&
                          l.createElement(f.zN, {
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
                            l.createElement(f.zN, {
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
                                  i.Kg.TrackedControllerRole_LeftHand,
                                ) != i.Kf,
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.LeftHand,
                              additionalClassNames: "LargeIcon",
                            }),
                            l.createElement(f.zN, {
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
                                  i.Kg.TrackedControllerRole_RightHand,
                                ) != i.Kf,
                              active:
                                this.getActiveOverlayDockLocation() ==
                                b.RA.RightHand,
                              additionalClassNames: "LargeIcon",
                            }),
                            " ",
                          ),
                      ),
                      (p || r) &&
                        l.createElement(
                          "div",
                          { className: "Section" },
                          p &&
                            l.createElement(f.zN, {
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
                            l.createElement(f.zN, {
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
                          r &&
                            l.createElement(f.zN, {
                              iconUrl:
                                "/dashboard/images/icons/icon_close_black.png",
                              title: (0, h.Xx)(
                                ne(s) ? "#QuitApp" : "#CloseOverlay",
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
              o = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              a = t ? 0 : 0.1,
              n = !t;
            let r = null;
            return (
              this.isDesktopOverlayActive() && (r = 2048),
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
                        meters_per_pixel: u.F$,
                        debug_name: "StatusBar",
                        reflect: a,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: r } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          n && this.renderStatusBarTitle(),
                          l.createElement(f.j6, {
                            role: i.Kg.TrackedControllerRole_LeftHand,
                            style: y.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(f.j6, {
                            deviceIndex: i.wU,
                            style: y.A.VerticalBattery,
                          }),
                          l.createElement(f.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(f.j6, {
                            role: i.Kg.TrackedControllerRole_RightHand,
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
                i.wx,
                { translation: { y: 0.01 } },
                l.createElement(
                  i.s_,
                  {
                    id: "VRGamepadUI-Header-Panel",
                    debug_name: "VRGamepadUI-Header-Panel",
                    interactive: !0,
                    curvature_origin_id: e,
                    overlay_key: u.rl,
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
            var e, t, o, a, n;
            const r = this.computeFilteredOverlayTabs(!1),
              s = z.BV.isVRGamepadUIReady,
              c = !z.BV.isVRGamepadUI || z.BV.m_bShowLegacyBar;
            let d = [],
              h = [],
              m =
                null !== (e = g.G3.settings.get(u.FM)) && void 0 !== e ? e : 2;
            if (r.length > m) {
              const e = g.G3.settings.get(u.nf);
              (d = [
                null !== (t = r.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : r[0],
              ]),
                (h = r.filter((e) => !d.includes(e)));
            } else d = r;
            let p = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && p.push(e);
            });
            const v = this.getActiveOverlayDockLocation(),
              _ = (0, b.fT)(v),
              y = (0, b.sg)(v),
              S = this.getActiveOverlayKey(),
              C =
                null === (o = ee.U.GetOverlayInfo(S)) || void 0 === o
                  ? void 0
                  : o.sHandle,
              k = !!C && VRHTML.VROverlay.GetFlag(C, i.Z9.MinimalControlBar),
              R =
                null ===
                  (a = g.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === a ||
                a,
              w = R ? u.ml : null,
              V = { y: k ? -1.03375 : -0.9, z: 0.05 },
              T = s ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              M = Q.k_nControlBarPitch;
            let E = R ? 1 : 0;
            const L =
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
                i.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: L && this.state.bPlacementModeActive,
                },
                l.createElement(
                  i.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    i.wx,
                    { translation: Q.getDashboardTranslation() },
                    l.createElement(
                      i.wx,
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
                          i.wx,
                          { translation: { y: 0.15 } },
                          l.createElement(i.wx, {
                            id: w,
                            translation: { z: Q.getDashboardDistance() + 1.8 },
                          }),
                          l.createElement(
                            i.wx,
                            { scale: Q.getDashboardScale() },
                            l.createElement(
                              i.wx,
                              { parent_id: I },
                              z.BV.isVRGamepadUI
                                ? this.renderVRGamepadUIHeader(w)
                                : this.renderLegacyHeader(w),
                            ),
                            l.createElement(
                              i.wx,
                              {
                                id: "active_overlay_transform",
                                translation: V,
                                ref: this.m_refOverlayTransform,
                              },
                              !_ && y && this.renderActiveOverlay(),
                            ),
                            !1,
                            !1,
                            l.createElement(
                              i.wx,
                              { parent_id: s ? u.dG : u.f$ },
                              l.createElement(U.J, {
                                curvature_origin_id: w,
                                tint: z.BV.GrabHandleTint,
                                onStartMove: this.onGrabStart,
                                onEndMove: this.onGrabEnd,
                              }),
                            ),
                            !1,
                            l.createElement(
                              i.wx,
                              { translation: T, id: u.Qg },
                              !k && this.renderOverlayControlBar(),
                              l.createElement(i.wx, {
                                id: u.f$,
                                translation: { y: 0.08, z: -0.12 },
                              }),
                              l.createElement(
                                i.wx,
                                {
                                  rotation: { x: M },
                                  curvature_pitch: M,
                                  translation: s ? { y: -0.65, z: 0.2 } : {},
                                },
                                c && this.renderLegacyControlBar(d, h),
                                l.createElement(
                                  i.wx,
                                  { translation: { y: -0.65, z: -0.01 } },
                                  l.createElement(ue, null),
                                ),
                              ),
                              s &&
                                l.createElement(
                                  i.wx,
                                  { rotation: { x: M }, curvature_pitch: M },
                                  this.renderVRGamepadUIBar(w),
                                ),
                              l.createElement(
                                i.wx,
                                { rotation: { x: M } },
                                l.createElement(
                                  i.wx,
                                  {
                                    translation:
                                      Q.k_nKeyboardGrabTransformOffset,
                                  },
                                  l.createElement(
                                    F.Z,
                                    {
                                      min_distance: 0.2,
                                      should_head_align: !1,
                                    },
                                    l.createElement(
                                      i.wx,
                                      {
                                        translation: {
                                          x:
                                            -1 *
                                            Q.k_nKeyboardGrabTransformOffset.x,
                                          y:
                                            -1 *
                                            Q.k_nKeyboardGrabTransformOffset.y,
                                          z:
                                            -1 *
                                            Q.k_nKeyboardGrabTransformOffset.z,
                                        },
                                      },
                                      l.createElement(
                                        i.wx,
                                        {
                                          rotation: { x: -10 },
                                          curvature_pitch: M,
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
                                  i.wx,
                                  {
                                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                                    rotation: { y: 19 * E },
                                  },
                                  l.createElement(
                                    i.s_,
                                    {
                                      curvature_origin_id: w,
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
                                Y.ExternalOverlays &&
                                l.createElement(
                                  i.wx,
                                  {
                                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                                    rotation: { y: 6 * E },
                                  },
                                  l.createElement(
                                    i.s_,
                                    {
                                      curvature_origin_id: w,
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
                                          l.createElement(f.dy, {
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
                                  i.wx,
                                  {
                                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                                    rotation: { y: -16 * E },
                                  },
                                  l.createElement(
                                    i.s_,
                                    {
                                      curvature_origin_id: w,
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
                                        p.map((e) =>
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
        (ce.k_sDashboardMailboxName = "systemui_dashboard"),
          (ce.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (ce.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (ce.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (ce.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (ce.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (ce.k_sWindowViewCreatedMessage = "window_view_created"),
          (ce.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (ce.k_sUpdateWindowListMessage = "update_window_list"),
          (ce.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (ce.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (ce.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (ce.k_nControlBarPitch = -40),
          (ce.k_nKeyboardGrabTransformOffset = { x: 0, y: -0.85, z: 0.35 }),
          (ce.s_dashboardUserDistance = void 0),
          (ce.s_dashboardUserScale = void 0),
          (0, n.gn)([r.ak], ce.prototype, "isSceneAppDimmingActive", null),
          (0, n.gn)(
            [r.ak],
            ce.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, n.gn)([r.ak], ce.prototype, "onKeyboardVisibilityChanged", null),
          (0, n.gn)([r.ak], ce.prototype, "onGrabStart", null),
          (0, n.gn)([r.ak], ce.prototype, "onGrabEnd", null),
          (0, n.gn)(
            [r.ak],
            ce.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, n.gn)([r.ak], ce.prototype, "onDashboardOverlayCreated", null),
          (0, n.gn)([r.ak], ce.prototype, "onDashboardOverlayDestroyed", null),
          (0, n.gn)([r.ak], ce.prototype, "onUpdateDashboardTabs", null),
          (0, n.gn)([r.ak], ce.prototype, "onWindowViewCreated", null),
          (0, n.gn)([r.ak], ce.prototype, "onWindowViewDestroyed", null),
          (0, n.gn)([r.ak], ce.prototype, "onUpdateWindowList", null),
          (0, n.gn)([r.ak], ce.prototype, "onUpdateDebugInfo", null),
          (0, n.gn)([r.ak], ce.prototype, "setOverlayDockLocation", null),
          (0, n.gn)([r.ak], ce.prototype, "onShowDashboardRequested", null),
          (0, n.gn)([r.ak], ce.prototype, "onDockOverlayRequested", null),
          (0, n.gn)([r.ak], ce.prototype, "onHideDashboardRequested", null),
          (0, n.gn)([r.ak], ce.prototype, "show", null),
          (0, n.gn)([r.ak], ce.prototype, "hide", null),
          (0, n.gn)([r.ak], ce.prototype, "setPlacementModeActive", null),
          (0, n.gn)([r.ak], ce.prototype, "onToggleRoomView", null),
          (0, n.gn)(
            [r.ak],
            ce.prototype,
            "onLegacyQuickLaunchButtonClick",
            null,
          ),
          (0, n.gn)([r.ak], ce.prototype, "onRecenterClick", null),
          (0, n.gn)([r.ak], ce.prototype, "onClearRoomSetupClick", null),
          (0, n.gn)([r.ak], ce.prototype, "onUserGuideClick", null),
          (0, n.gn)([r.ak], ce.prototype, "SetGamepadFocusEnable", null),
          (0, n.gn)([r.ak], ce.prototype, "renderLegacyPowerMenu", null),
          (0, n.gn)([r.ak], ce.prototype, "startPopoverMenuTimeout", null),
          (0, n.gn)([r.ak], ce.prototype, "clearPopoverMenuTimeout", null),
          (0, n.gn)([r.ak], ce.prototype, "showPopoverMenu", null),
          (0, n.gn)([r.ak], ce.prototype, "popoverMenuMouseLeave", null),
          (0, n.gn)([r.ak], ce.prototype, "popoverMenuMouseUp", null),
          (0, n.gn)([r.ak], ce.prototype, "hasDashboardOverlay", null),
          (0, n.gn)(
            [r.ak],
            ce.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, n.gn)([r.ak], ce.prototype, "isDesktopTrayActive", null),
          (0, n.gn)([r.ak], ce.prototype, "isVolumeTrayActive", null),
          (0, n.gn)([r.ak], ce.prototype, "isSteamOverlayActive", null),
          (0, n.gn)([r.ak], ce.prototype, "isDesktopOverlayActive", null),
          (0, n.gn)([r.ak], ce.prototype, "handleVRLinkInfoClick", null),
          (0, n.gn)([r.ak], ce.prototype, "ToggleIncognitoMode", null),
          (0, n.gn)([r.ak], ce.prototype, "getRenderModelForShape", null),
          (0, n.gn)([r.ak], ce.prototype, "isDesktopViewVisible", null),
          (0, n.gn)([r.ak], ce.prototype, "onGameLaunched", null),
          (0, n.gn)([r.ak], ce.prototype, "onAddPortal", null),
          (0, n.gn)([r.ak], ce.prototype, "onRemovePortal", null),
          (0, n.gn)([r.ak], ce.prototype, "onActiveOverlayScaleChange", null),
          (0, n.gn)([r.ak], ce.prototype, "onActiveOverlayClosed", null),
          (0, n.gn)([s.LO], ce, "s_dashboardUserDistance", void 0),
          (0, n.gn)([s.LO], ce, "s_dashboardUserScale", void 0),
          (ce = Q = (0, n.gn)([_.Pi], ce));
        const de = (0, _.Pi)(function (e) {
            var t;
            let o =
              null !== (t = VRHTML.GetHostInfo(i.zA.Hostname)) && void 0 !== t
                ? t
                : "unknown";
            return l.createElement(
              i.s_,
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
                  l.createElement("span", null, o.toLowerCase(), " "),
                ),
              ),
            );
          }),
          ue = (0, _.Pi)(function (e) {
            return null;
          }),
          he = [
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
        function me(e, t) {
          let o = -1,
            a = -1;
          for (let n = 0; n < he.length && o < 0 && a < 0; n++)
            he[n](e) && (o = n), he[n](t) && (a = n);
          return (
            o < 0 && (o = he.length),
            a < 0 && (a = he.length),
            o == a ? e.tab_id() - t.tab_id() : o - a
          );
        }
        function pe(e, t) {
          var o, a, n, i, r, s;
          let l;
          const c =
              null !== (o = null == e ? void 0 : e.product_name) && void 0 !== o
                ? o
                : "",
            d =
              null !== (a = null == t ? void 0 : t.product_name) && void 0 !== a
                ? a
                : "";
          if (((l = c.localeCompare(d)), 0 != l)) return l;
          const u =
              null !== (n = null == e ? void 0 : e.title) && void 0 !== n
                ? n
                : "",
            h =
              null !== (i = null == t ? void 0 : t.title) && void 0 !== i
                ? i
                : "";
          if (((l = u.localeCompare(h)), 0 != l)) return l;
          const m =
              null !== (r = null == e ? void 0 : e.hwnd) && void 0 !== r
                ? r
                : "",
            p =
              null !== (s = null == t ? void 0 : t.hwnd) && void 0 !== s
                ? s
                : "";
          return m.localeCompare(p);
        }
      },
      4790: (e, t, o) => {
        "use strict";
        o.d(t, {
          MH: () => R,
          RA: () => n,
          Sm: () => L,
          Uj: () => i,
          fT: () => T,
          sg: () => V,
        });
        var a,
          n,
          i,
          r = o(655),
          s = o(9313),
          l = o(7056),
          c = o(7062),
          d = o(7294),
          u = o(424),
          h = o(7176),
          m = o(1628),
          p = o(9626),
          v = o(421),
          g = o(6063),
          _ = o(6509),
          y = o(792),
          b = o(9347),
          f = o(8261),
          S = o(6459),
          C = o(6698),
          k = o(3568);
        function R(e) {
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
          })(i || (i = {}));
        const w = "TheaterCurvatureOriginId";
        function V(e) {
          return e == n.Dashboard;
        }
        function T(e) {
          return e == n.World;
        }
        function M(e) {
          return e == n.LeftHand || e == n.RightHand;
        }
        function E(e) {
          switch (e) {
            case n.LeftHand:
              return "/user/hand/left";
            case n.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        let L = (a = class extends d.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: null,
                sParent: E(this.props.dockLocation),
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
                  sParent: E(this.props.dockLocation),
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
            let o = { x: 0, y: 0 };
            try {
              o = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let a =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              n = (a * o.y) / o.x;
            return (
              (this.props.sOverlayKey.startsWith(h.r4) ||
                this.props.sOverlayKey.startsWith(h.Vq)) &&
                ((n = b.N.k_nDesktopPanelBaseHeight), (a = (n * o.x) / o.y)),
              { width: a, height: n }
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
                t *= f.g.getDashboardScale();
                const o = p.BV.m_mapOverlayState.get(this.props.sOverlayKey);
                return t * (o ? o.fScale : 1);
              case n.Theater:
                let a = e == p.fq.Large ? 2.35 : 1.8;
                const i = this.getCurrentOverlaySize();
                return null === i || 0 == i.height ? a : a / i.height;
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
                    let o = (0, s.Oq)();
                    (o.rotation = t.rotation),
                      (o.translation = {
                        x: t.translation.x,
                        y: e,
                        z: t.translation.z,
                      }),
                      this.setState({ xfTransform: o });
                  })
                  .catch((t) => {
                    console.warn(
                      "Failed to get SGTransform in setInitialTransformForTheater. Using head fallback",
                      t,
                    );
                    let o = (function () {
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
                          o = -0.75,
                          a = (0, s.Pf)(e.xfDeviceToAbsoluteTracking);
                        let n = (0, s.Nz)(a);
                        n.y = 0;
                        let i = (0, s.mT)((0, s.M9)(n), t);
                        i.y += o;
                        let r = (0, s.Oq)();
                        return (
                          (r.rotation = a.rotation),
                          (r.translation = (0, s.ui)(i, a.translation)),
                          r
                        );
                      }
                      return null;
                    })();
                    (null == o ? void 0 : o.translation) &&
                      (o.translation.y = e),
                      this.setState({ xfTransform: o });
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
            let o = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_RightHand,
            ) != s.Kf &&
              (o = VRHTML.GetPose("/user/hand/right", s.zq.Standing));
            let i = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                o && i.push({ pose: o, location: n.RightHand });
                break;
              case "/user/hand/right":
                t && i.push({ pose: t, location: n.LeftHand });
                break;
              case "/user/head":
                t && i.push({ pose: t, location: n.LeftHand }),
                  o && i.push({ pose: o, location: n.RightHand });
            }
            if (0 == i.length)
              return void setTimeout(this.computeDestination, a.sfMovePulseMS);
            let r = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            i.forEach((e) => {
              let t = VRHTML.ChangeBasis(r, e.pose.xfDeviceToAbsoluteTracking);
              (0, s.LY)(t.translation) > a.sfMaxDockDist
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
              setTimeout(this.computeDestination, a.sfMovePulseMS);
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
              o = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing);
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
            let a = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              i = VRHTML.ChangeBasis(a, o.xfDeviceToAbsoluteTracking);
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
            let o,
              a = {
                xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: s.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case n.LeftHand:
                o = e;
                break;
              case n.RightHand:
                o = t;
                break;
              default:
                o = a;
            }
            let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              r = VRHTML.MultiplyTransforms(
                i.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              l = VRHTML.ChangeBasis(r, o.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: E(this.state.destination),
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
            let r = this.getCurrentOverlaySize();
            if (null === r) return null;
            let l,
              c = !this.props.bDashboardShown,
              u = !1;
            if (this.props.dockLocation == n.Theater) {
              if (this.props.bHasSceneApp && y.C7.m_bShowFloor) return null;
              c = !0;
              const t =
                null !==
                  (e = m.G3.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e;
              (u = !p.BV.isGroupMode && p.BV.isDarkMode && t),
                p.BV.eTheaterCurvature == i.Curved && (l = w);
            }
            const b = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
              V =
                b && VRHTML.VROverlay.GetFlag(b, s.Z9.EnableControlBarKeyboard),
              T =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(h.r4),
              E = { x: 0, y: -0.15, z: 0.1 },
              L = (0, s.iN)(h.Az, "Floating-Panel"),
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
                i =
                  null !==
                    (o = m.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== o
                    ? o
                    : 0.5,
                c = 0.5 * Math.pow(i, 2.2);
              let _ = -0.1,
                y = 4;
              const b = !0;
              let V = 0.1,
                M = r.width,
                D = r.height,
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
                        lerp_speed: a.flGrabTransformLerpSpeed,
                      },
                      d.createElement(s.wx, { id: w, translation: { z: y } }),
                      d.createElement(
                        s.wx,
                        { translation: { y: -1 * O } },
                        d.createElement(
                          s.wx,
                          { scale: this.getPanelScaleForLocation() },
                          d.createElement(
                            s.s_,
                            {
                              id: L,
                              overlay_key: this.props.sOverlayKey,
                              height: D,
                              width:
                                p.BV.m_eTheaterStereo != s.Ko.Mono ? M : void 0,
                              interactive: !0,
                              allow_input_capture: e,
                              undocked: !0,
                              origin:
                                this.props.dockLocation == n.Theater
                                  ? { x: 0, y: -0.75 }
                                  : s.Ic.BottomCenter,
                              curvature_origin_id: l,
                              stereoscopy: p.BV.m_eTheaterStereo,
                              scale_index: R(this.props.dockLocation),
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
                            target_id: L,
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
                                  scale: f.g.getUiScaleForLocation(
                                    this.props.dockLocation,
                                  ),
                                },
                                b &&
                                  d.createElement(
                                    s.s_,
                                    {
                                      height: V,
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
                                        T &&
                                          d.createElement(S.zN, {
                                            key: "multitask",
                                            iconUrl:
                                              "/dashboard/images/icons/icon_multitasking_view.png",
                                            tooltipTranslation: E,
                                            onClick:
                                              this.props.ShowMultitaskingView,
                                            additionalClassNames: "LargeIcon",
                                          }),
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "Section" },
                                        d.createElement(S.zN, {
                                          icon: d.createElement(C.gR, null),
                                          title: (0, k.Xx)(
                                            "#ReturnToDashboard",
                                          ),
                                          key: "dock",
                                          tooltipTranslation: E,
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
                                  { translation: { y: -V - 0.1, z: 0.03 } },
                                  d.createElement(g.J, {
                                    scale: 1.5,
                                    tint: p.BV.GrabHandleTint,
                                    curvature_origin_id: l,
                                  }),
                                ),
                              ),
                              d.createElement(I, {
                                parent_id: "Floating-Panel-BottomRight",
                                target_id: L,
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
            const D = r.height,
              O = Math.max(r.width, 0.175),
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
                    id: L,
                    overlay_key: this.props.sOverlayKey,
                    height: r.height,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: s.Ic.BottomCenter,
                    scale_index: R(this.props.dockLocation),
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
                target_id: L,
                scale:
                  f.g.getUiScaleForLocation(this.props.dockLocation) *
                  (M(this.props.dockLocation) ? 1.5 : 1),
                displacement: 0,
                x_offset: M(this.props.dockLocation) ? 0.02 : 0.01,
                y_offset: 0,
              }),
              d.createElement(
                s.wx,
                {
                  parent_id: "Floating-Panel-BottomCenter",
                  translation: { y: -0.01, z: 0 },
                  ignore_parent_scale: !0,
                  scale: f.g.getUiScaleForLocation(this.props.dockLocation),
                },
                d.createElement(
                  s.s_,
                  {
                    height: a.sfOverlayTrayHeight,
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
                      T &&
                        d.createElement(S.zN, {
                          key: "multitask",
                          iconUrl:
                            "/dashboard/images/icons/icon_multitasking_view.png",
                          tooltipTranslation: E,
                          onClick: this.props.ShowMultitaskingView,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      V &&
                        d.createElement(S.CS, {
                          overlayKey: this.props.sOverlayKey,
                          showTooltip: !1,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      d.createElement(S.zN, {
                        icon: d.createElement(C.gR, null),
                        title: (0, k.Xx)("#ReturnToDashboard"),
                        key: "dock",
                        tooltipTranslation: E,
                        onClick: () => {
                          this.props.setOverlayDockLocation(
                            this.props.sOverlayKey,
                            n.Dashboard,
                          );
                        },
                        additionalClassNames: "LargeIcon",
                      }),
                      d.createElement(S.zN, {
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
        (L.sfMaxDockDist = 0.4),
          (L.sfMovePulseMS = 100),
          (L.sfOverlayTrayHeight = 0.12),
          (L.flGrabTransformLerpSpeed = 0.125),
          (0, r.gn)([l.ZP], L.prototype, "computeDestination", null),
          (0, r.gn)([l.ZP], L.prototype, "startMove", null),
          (0, r.gn)([l.ZP], L.prototype, "endMove", null),
          (L = a = (0, r.gn)([c.Pi], L));
      },
      6459: (e, t, o) => {
        "use strict";
        o.d(t, {
          B8: () => N,
          CS: () => Z,
          D6: () => X,
          Eu: () => M,
          IO: () => A,
          M3: () => D,
          NT: () => G,
          Rk: () => U,
          Yd: () => E,
          dw: () => B,
          dy: () => O,
          j4: () => z,
          j6: () => F,
          lL: () => L,
          z: () => W,
          zN: () => j,
          zk: () => P,
        });
        var a,
          n,
          i = o(655),
          r = o(9313),
          s = o(7056),
          l = o(2188),
          c = o(7062),
          d = o(7294),
          u = o(5177),
          h = o(9755),
          m = o(7475),
          p = o(4979),
          v = o(3107),
          g = o(2749),
          _ = o(7176),
          y = o(3568),
          b = o(7008),
          f = o(8980),
          S = o(9897),
          C = o(1628),
          k = o(8322),
          R = o.n(k),
          w = o(7726),
          V = o(7471),
          T = o(9626);
        const M = new l.vP();
        function E(e) {
          const { summonOverlayKey: t } = e,
            { ids: o, anchors: a } = d.useMemo(() => {
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
                  d.createElement(r.at, {
                    id: o.strTopCenterAnchorID,
                    location: r.Ic.TopCenter,
                  }),
                  d.createElement(r.at, {
                    id: o.strCenterLeftAnchorID,
                    location: r.Ic.CenterLeft,
                  }),
                  d.createElement(r.at, {
                    id: o.strCenterRightAnchorID,
                    location: r.Ic.CenterRight,
                  }),
                  d.createElement(r.at, {
                    id: o.strBottomCenterAnchorID,
                    location: r.Ic.BottomCenter,
                  }),
                  d.createElement(r.at, {
                    id: o.strBottomRightAnchorID,
                    location: r.Ic.BottomRight,
                  }),
                ),
              };
            }, [t]);
          return (
            d.useEffect(
              () => (
                M.set(t, o),
                () => {
                  M.get(t) === o && M.delete(t);
                }
              ),
              [t, o],
            ),
            t ? a : null
          );
        }
        const L = (0, c.Pi)(function (e) {
            return d.createElement(
              I,
              Object.assign({}, e, { VRGamepadUI: T.BV.isVRGamepadUI }),
            );
          }),
          I = (e) => {
            var t, o, a;
            const n = e.VRGamepadUI,
              i = d.useRef(null),
              s = d.useRef(null);
            d.useEffect(() => {
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
              c =
                null !== (o = e.foregroundReflectMultiplier) && void 0 !== o
                  ? o
                  : 1,
              p =
                null ===
                  (a = C.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === a ||
                a
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
                  curvature_origin_id: p,
                  origin: r.Ic.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  meters_per_pixel: n ? void 0 : 2 * _.F$,
                  width: n ? 2.67 : void 0,
                  reflect: n ? 0 : 0.01,
                  sampler: r.Vv.SingleTap,
                },
                d.createElement(E, { summonOverlayKey: e.summonOverlayKey }),
                d.createElement(
                  h.vz,
                  { ref: i },
                  d.createElement("div", {
                    className: (0, f.LJ)(
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
                    curvature_origin_id: p,
                    origin: r.Ic.BottomCenter,
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
                          className: (0, f.LJ)(
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
              o = null;
            const a = t.toLowerCase(),
              n = Math.max(a.lastIndexOf("am"), a.lastIndexOf("pm"));
            return (
              n >= 0 && ((o = t.substring(n)), (t = t.substring(0, n - 1))),
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
        (0, i.gn)([s.ak], D.prototype, "updateTime", null);
        let x = (a = class extends d.Component {
          get isShowingTooltip() {
            return a.s_CurrentlyShownTooltip === this;
          }
          show() {
            a.s_CurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip && (a.s_CurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              o = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              a =
                null ===
                  (e = C.G3.settings.get(
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
                  r.wx,
                  { translation: o },
                  d.createElement(
                    r.s_,
                    {
                      visibility: t ? r.Bl.Visible : r.Bl.SkipInSceneGraph,
                      meters_per_pixel: _.F$,
                      curvature_origin_id: a,
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
          (0, i.gn)([l.Fl], x.prototype, "isShowingTooltip", null),
          (0, i.gn)([l.aD.bound], x.prototype, "show", null),
          (0, i.gn)([l.aD.bound], x.prototype, "hide", null),
          (0, i.gn)([l.LO], x, "s_CurrentlyShownTooltip", void 0),
          (x = a = (0, i.gn)([c.Pi], x));
        class H extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !H.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  H.k_rsThumbnailHashesToInvert.indexOf(R().hash(e)) >= 0 &&
                  (t = !0),
                H.s_mapShouldInvertThumbnail.set(e, t);
            }
            return H.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              o = H.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, f.LJ)(["BlackToWhite", o]),
                src: this.props.src,
              }),
            );
          }
        }
        var P, A;
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
          })(A || (A = {}));
        const B = (e) =>
          d.createElement(
            "div",
            { className: (0, f.LJ)("ControlBarGroup", P[e.style]) },
            e.children,
          );
        let N = class extends d.Component {
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
              u.z,
              {
                className: (0, f.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  A[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : A.Center
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
        (0, i.gn)([s.ak], N.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], N.prototype, "onMouseLeave", null),
          (N = (0, i.gn)([c.Pi], N));
        const G = (e) =>
          d.createElement(
            B,
            { style: e.style },
            d.createElement(N, Object.assign({}, e)),
          );
        class F extends d.Component {
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
              o = r.Kf;
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
              o != r.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  o,
                  r.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  o,
                  r.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  o,
                  r.Uk.DeviceIsCharging_Bool,
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
                o,
                r.Uk.DevicePowerUsage_Float,
              );
            }
            let a = w.X.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style,
            );
            a != this.state.batteryIconPath &&
              this.setState({ batteryIconPath: a });
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
        (F.kBatteryLevelHysteresis = 0.02),
          (0, i.gn)([s.ak], F.prototype, "updateControllerStatus", null),
          (0, i.gn)([s.ak], F.prototype, "onBatteryStateChanged", null),
          (0, i.gn)([s.ak], F.prototype, "onDeviceRoleChanged", null),
          (0, i.gn)([s.ak], F.prototype, "onDeviceEvent", null),
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
            var e, t, o;
            const a = this.props.position,
              n = Math.asin(a) / Math.PI,
              i = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                r.at,
                { location: { x: a, y: -1 } },
                d.createElement(r.wx, {
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
                  r.VW,
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
                      r.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04 * i, z: -0.01 },
                        scale: i,
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
                            className: (0, f.LJ)(
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
                              null !== (o = this.props.curvatureOriginId) &&
                              void 0 !== o
                                ? o
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
        (0, i.gn)([s.ak], z.prototype, "onResizeObserved", null),
          (0, i.gn)([s.ak], z.prototype, "updateBackgroundSize", null),
          (0, i.gn)([s.ak], z.prototype, "onPortalDidMount", null);
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
                    onClick: S.f.Instance.toggleMicrophoneMute,
                    title: S.f.Instance.microphoneMuted
                      ? (0, y.Xx)("#UnmuteMicrophone")
                      : (0, y.Xx)("#MuteMicrophone"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: S.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                d.createElement(K, {
                  title: (0, y.Xx)("#MicrophoneVolume"),
                  value: S.f.Instance.microphoneVolume,
                  onChange: S.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: p.px.OnHandle,
                  additionalClassName: (0, f.LJ)([
                    "Muted",
                    S.f.Instance.microphoneMuted,
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
                      onClick: S.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: S.f.Instance.mirrorMuted
                        ? (0, y.Xx)("#UnmuteAudioMirror")
                        : (0, y.Xx)("#MuteAudioMirror"),
                    },
                    d.createElement("img", {
                      className: "BlackToWhite",
                      src: S.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  d.createElement(K, {
                    title: (0, y.Xx)("#AudioMirrorVolume"),
                    value: S.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: S.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: p.px.OnHandle,
                    additionalClassName: (0, f.LJ)([
                      "Muted",
                      S.f.Instance.mirrorMuted,
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
                    onClick: S.f.Instance.toggleMute,
                    title: S.f.Instance.muted
                      ? (0, y.Xx)("#Unmute_Headset")
                      : (0, y.Xx)("#Mute_Headset"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: S.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                d.createElement(K, {
                  title: (0, y.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: S.f.Instance.volume,
                  onChange: S.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: p.px.OnHandle,
                  additionalClassName: (0, f.LJ)(["Muted", S.f.Instance.muted]),
                  interactionEndSoundEffect: v.y.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, i.gn)([s.ak], W.prototype, "onSliderMouseEnter", null),
          (0, i.gn)([s.ak], W.prototype, "onSliderMouseLeave", null),
          (0, i.gn)([s.ak], W.prototype, "onSliderFinalChange", null),
          (0, i.gn)([l.Fl], W.prototype, "showAudioMirrorControls", null),
          (0, i.gn)([l.Fl], W.prototype, "enableAudioMirrorControls", null),
          (W = (0, i.gn)([c.Pi], W));
        let K = class extends d.Component {
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
        (0, i.gn)([s.ak], K.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], K.prototype, "onMouseLeave", null),
          (0, i.gn)([s.ak], K.prototype, "onInteractionStart", null),
          (0, i.gn)([s.ak], K.prototype, "onInteractionEnd", null),
          (K = (0, i.gn)([c.Pi], K));
        let q = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter(e) {
            var t, o, a;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (a = (o = this.props).onMouseEnter) ||
                void 0 === a ||
                a.call(o, e);
          }
          onMouseLeave(e) {
            var t, o, a;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (a = (o = this.props).onMouseLeave) ||
                void 0 === a ||
                a.call(o, e);
          }
          render() {
            return d.createElement(
              u.z,
              Object.assign({}, this.props, {
                className: (0, f.LJ)(
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
        (0, i.gn)([s.ak], q.prototype, "onMouseEnter", null),
          (0, i.gn)([s.ak], q.prototype, "onMouseLeave", null),
          (q = (0, i.gn)([c.Pi], q));
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
            (0, r.JR)((0, r.Zj)(t, this.m_vecOriginalMousePosition)) >
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
            var e, t, o, a;
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
              null === (a = this.slider) ||
                void 0 === a ||
                a.stopExternalSliding();
          }
          render() {
            return d.createElement(N, {
              imageUrl: S.f.Instance.muted
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
          (X = n = (0, i.gn)([c.Pi], X));
        const j = (e) => {
          var t;
          const o = d.useRef();
          return d.createElement(
            u.z,
            {
              className: (0, f.LJ)(
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
              d.createElement(x, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: o,
              }),
            e.label && d.createElement("span", null, e.label),
            e.iconUrl &&
              d.createElement("img", {
                className: (0, V.Z)(
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
          var t, o;
          const a = (0, f.aB)(),
            n =
              null !== (t = null == a ? void 0 : a.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == a.overlayKey,
            i = d.useRef(!1),
            s =
              null === (o = e.showTooltip) || void 0 === o || o
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
                additionalClassNames: (0, f.LJ)(
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
                active: n,
              },
              e,
            ),
          );
        }
      },
      9347: (e, t, o) => {
        "use strict";
        o.d(t, { N: () => C, e: () => S });
        var a,
          n,
          i = o(655),
          r = o(9313),
          s = o(7056),
          l = o(2477),
          c = o(2188),
          d = o(7062),
          u = o(7294),
          h = o(7475),
          m = o(7176),
          p = o(3568),
          v = o(1628),
          g = o(6459),
          _ = o(9626),
          y = o(8261),
          b = o(6509),
          f = o(4790);
        let S = (a = class extends u.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
              (this.m_refWindowScrollPanel = u.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(a.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var o, a;
            null === (o = this.m_refWindowScrollPanel.current) ||
              void 0 === o ||
              o.scrollTo({
                left:
                  null === (a = this.m_refWindowScrollPanel.current) ||
                  void 0 === a
                    ? void 0
                    : a.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, o, a;
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
                    null === (o = this.state.desktopView) || void 0 === o
                      ? void 0
                      : o.state.desktopIndices.map((e) => {
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
                      null === (a = this.state.desktopView) || void 0 === a
                        ? void 0
                        : a.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, o, a;
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
                            (a = this.props.mapWindows.get(
                              null === (o = this.state.desktopView) ||
                                void 0 === o
                                ? void 0
                                : o.state.mapWindowInfo.get(e).sHwnd,
                            )) || void 0 === a
                            ? void 0
                            : a.title,
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
                    title: (0, p.Xx)("#AddView"),
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
        (S.k_sMailboxName = "systemui_desktoptray"),
          (S = a = (0, i.gn)([d.Pi], S));
        let C = (n = class extends u.Component {
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
              this.m_mailbox.Init(n.k_sMailboxName).then(() => {}),
              l.Q.SteamVR.SetImplementation(
                "DashboardDesktopWindowClicked",
                (e) => {
                  var t, o;
                  const a =
                    null !==
                      (o =
                        null === (t = e.window_id) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== o
                      ? o
                      : "";
                  for (const [e, t] of this.state.mapWindowInfo.entries())
                    if (t.sHwnd == a)
                      return (
                        this.onWindowViewChange(e),
                        void VRHTML.VROverlay.ShowDashboard(m.gB)
                      );
                  const n = { type: "request_spawn_window_view", hwnd: a };
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
              o = m.Az + "::id.panel.desktop." + this.currentDesktopIndex,
              a = (e) =>
                u.createElement(
                  r.wx,
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
                ? u.createElement(r.sl, { mountedId: (0, r.iN)(m.GN, m.Xl) })
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
                          r.s_,
                          {
                            id: o,
                            overlay_key:
                              -1 == this.currentDesktopIndex
                                ? this.state.sCurrentWindowOverlayKey
                                : "system.desktop." + this.currentDesktopIndex,
                            height: n.k_nDesktopPanelBaseHeight,
                            curvature_origin_id: t,
                            interactive: !0,
                            origin: r.Ic.BottomCenter,
                            debug_name: "System Desktop",
                            scale_index: (0, f.MH)(f.RA.Dashboard),
                          },
                          u.createElement(g.Yd, { summonOverlayKey: m.gB }),
                          u.createElement(r.sl, {
                            mountedId:
                              -1 == this.currentDesktopIndex
                                ? (0, r.iN)(
                                    m.GN,
                                    this.state.sCurrentWindowOverlayKey +
                                      ".cursor",
                                  )
                                : (0, r.iN)(
                                    m.GN,
                                    "system.desktop." +
                                      this.currentDesktopIndex +
                                      ".cursor",
                                  ),
                          }),
                        ),
                        u.createElement(a, {
                          parent_id: "DashboardPanel_" + m.gB + "_BottomRight",
                          scale: y.g.getUiScaleForLocation(f.RA.Dashboard),
                          target_id: o,
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
        (C.k_sMailboxName = "systemui_desktopview"),
          (C.k_nDesktopPanelBaseHeight = 2),
          (0, i.gn)([c.Fl], C.prototype, "desktopCount", null),
          (0, i.gn)([c.Fl], C.prototype, "sCurrentOverlayKey", null),
          (0, i.gn)([c.Fl], C.prototype, "currentDesktopIndex", null),
          (0, i.gn)([c.Fl], C.prototype, "currentWindowHwnd", null),
          (0, i.gn)([s.ZP], C.prototype, "onDesktopScaleChange", null),
          (0, i.gn)([s.ZP], C.prototype, "onDesktopChange", null),
          (0, i.gn)([s.ZP], C.prototype, "onDesktopViewUpdating", null),
          (0, i.gn)([s.ZP], C.prototype, "onDesktopViewReady", null),
          (0, i.gn)([s.ZP], C.prototype, "onWindowViewChange", null),
          (0, i.gn)([s.ZP], C.prototype, "ShowMultitaskingView", null),
          (C = n = (0, i.gn)([d.Pi], C));
      },
      6063: (e, t, o) => {
        "use strict";
        o.d(t, { J: () => u });
        var a = o(655),
          n = o(7294),
          i = o(7056),
          r = o(9313),
          s = o(7062),
          l = o(5177),
          c = o(421),
          d = o(8980);
        let u = class extends n.Component {
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
            const o = null === (e = this.props.bVisible) || void 0 === e || e,
              a = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
            return (
              o &&
              n.createElement(
                r.wx,
                null,
                n.createElement(
                  r.Dd,
                  { value: this.props.opacity },
                  n.createElement(
                    r.VW,
                    { color: this.props.tint },
                    n.createElement(
                      r.s_,
                      {
                        width: 0.66675 * a,
                        interactive: !0,
                        requires_laser: !0,
                        debug_name: "DashboardGrabHandle",
                        origin: r.Ic.BottomCenter,
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
          (0, a.gn)([i.ZP], u.prototype, "startMove", null),
          (0, a.gn)([i.ZP], u.prototype, "endMove", null),
          (u = (0, a.gn)([s.Pi], u));
      },
      421: (e, t, o) => {
        "use strict";
        o.d(t, { E: () => s, Z: () => l });
        var a = o(655),
          n = o(9313),
          i = o(7062),
          r = o(7294);
        const s = r.createContext(void 0);
        let l = class extends r.Component {
          constructor(e) {
            super(e),
              (this.state = { transform: (0, n.Oq)(), parent_path: "" });
          }
          render() {
            return r.createElement(
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
              r.createElement(s.Provider, { value: this }, this.props.children),
            );
          }
        };
        l = (0, a.gn)([i.Pi], l);
      },
      3033: (e, t, o) => {
        "use strict";
        o.d(t, { p: () => h });
        var a = o(9313),
          n = o(7294),
          i = o(7062),
          r = o(9626),
          s = o(7176),
          l = o(9764);
        function c(e) {
          const { children: t, invertParentPanelPitch: o, pitch: i } = e;
          return o || 0 != i
            ? n.createElement(
                a.wx,
                {
                  invert_parent_panel_pitch: null != o && o,
                  curvature_pitch: null != i ? i : 0,
                },
                t,
              )
            : n.createElement(n.Fragment, null, t);
        }
        function d(e) {
          let { children: t, offsetPixels: o, offsetMeters: i } = e;
          (o = null != o ? o : { x: 0, y: 0, z: 0 }),
            (i = null != i ? i : { x: 0, y: 0, z: 0 });
          const s = (0, a.ui)(
            i,
            (0, a.mT)(o, r.BV.m_fVRGamepadUI_MetersPerPixel),
          );
          return 0 != s.x || 0 != s.y || 0 != s.z
            ? n.createElement(a.wx, { translation: s }, t)
            : n.createElement(n.Fragment, null, t);
        }
        function u(e) {
          const { children: t, rotation: o } = e;
          return null == o || (0 == o.x && 0 == o.y && 0 == o.z)
            ? n.createElement(n.Fragment, null, t)
            : n.createElement(a.wx, { rotation: o }, t);
        }
        function h(e) {
          var t,
            o,
            i,
            l,
            h,
            m,
            p,
            v,
            g,
            _,
            y,
            b,
            f,
            S,
            C,
            k,
            R,
            w,
            V,
            T,
            M,
            E,
            L,
            I,
            D,
            O,
            x,
            H,
            P,
            A,
            B,
            N,
            G,
            F,
            U,
            z,
            W;
          const { popupRequest: K, reparent: q } = e,
            X = null == q || q,
            j = {
              x:
                null !==
                  (o =
                    null === (t = K.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== o
                  ? o
                  : 0,
              y:
                null !==
                  (l =
                    null === (i = K.origin_on_parent) || void 0 === i
                      ? void 0
                      : i.y) && void 0 !== l
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
            Q = {
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
            J = {
              u:
                null !==
                  (S =
                    null === (f = K.clip_rect) || void 0 === f
                      ? void 0
                      : f.u_max) && void 0 !== S
                  ? S
                  : 1,
              v:
                null !==
                  (k =
                    null === (C = K.clip_rect) || void 0 === C
                      ? void 0
                      : C.v_max) && void 0 !== k
                  ? k
                  : 1,
            },
            Y = {
              x:
                null !==
                  (w =
                    null === (R = K.offset) || void 0 === R
                      ? void 0
                      : R.x_pixels) && void 0 !== w
                  ? w
                  : 0,
              y:
                null !==
                  (T =
                    null === (V = K.offset) || void 0 === V
                      ? void 0
                      : V.y_pixels) && void 0 !== T
                  ? T
                  : 0,
              z:
                null !==
                  (E =
                    null === (M = K.offset) || void 0 === M
                      ? void 0
                      : M.z_pixels) && void 0 !== E
                  ? E
                  : 0,
            },
            $ = {
              x:
                null !==
                  (I =
                    null === (L = K.offset) || void 0 === L
                      ? void 0
                      : L.x_meters) && void 0 !== I
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
                  (A =
                    null === (P = K.rotation) || void 0 === P
                      ? void 0
                      : P.pitch_degrees) && void 0 !== A
                  ? A
                  : 0,
              y:
                null !==
                  (N =
                    null === (B = K.rotation) || void 0 === B
                      ? void 0
                      : B.yaw_degrees) && void 0 !== N
                  ? N
                  : 0,
            },
            te = null === (G = K.inherit_parent_pitch) || void 0 === G || G,
            oe = null === (F = K.inherit_parent_curvature) || void 0 === F || F,
            ae = null === (U = K.interactive) || void 0 === U || U,
            ne = null !== (z = K.requires_laser) && void 0 !== z && z,
            ie =
              1 == (null !== (W = K.sort_order) && void 0 !== W ? W : 0)
                ? 101
                : null,
            re = (function (e) {
              var t, o, a;
              const n =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                i =
                  null !==
                    (a =
                      null === (o = null == e ? void 0 : e.offset) ||
                      void 0 === o
                        ? void 0
                        : o.z_pixels) && void 0 !== a
                    ? a
                    : 0;
              return n == s.BZ && i >= 0 ? -0.5 : 0;
            })(K);
          n.useLayoutEffect(
            () => a.n0.Current().forceLayoutUpdate(),
            [Q.u, Q.v, J.u, J.v],
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
                n.createElement(a.s_, {
                  debug_name: `VRGamepadUI-PooledPopup-${K.dashboard_popup_request_id}`,
                  interactive: ae,
                  requires_laser: ne,
                  curvature: oe ? "inherit-from-parent-panel" : void 0,
                  overlay_key: K.popup_overlay_key,
                  origin: Z,
                  meters_per_pixel: r.BV.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.03,
                  sort_depth_bias: re,
                  uv_min: Q,
                  uv_max: J,
                  sort_order: ie,
                }),
              ),
            ),
          );
          return K.parent_device_path
            ? n.createElement(a.wx, { parent_path: K.parent_device_path }, se)
            : X
              ? n.createElement(
                  a.Sb,
                  {
                    parent_overlay_key: K.parent_overlay_key,
                    key: K.dashboard_popup_request_id,
                  },
                  n.createElement(
                    a.at,
                    { key: K.dashboard_popup_request_id, location: j },
                    se,
                  ),
                )
              : n.createElement(
                  a.at,
                  { key: K.dashboard_popup_request_id, location: j },
                  se,
                );
        }
        (0, i.Pi)((e) => {
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
      6509: (e, t, o) => {
        "use strict";
        o.d(t, { O: () => d });
        var a = o(655),
          n = o(7294),
          i = o(7056),
          r = o(7062),
          s = o(5177),
          l = o(8980),
          c = o(9313);
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
              o = 0.2667 * t;
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
                      { translation: { y: o / 2 } },
                      n.createElement(
                        c.s_,
                        {
                          height: o,
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
        (0, a.gn)([i.ZP], d.prototype, "startMove", null),
          (0, a.gn)([i.ZP], d.prototype, "endMove", null),
          (d = (0, a.gn)([r.Pi], d));
      },
      9589: (e, t, o) => {
        "use strict";
        o.d(t, { Sd: () => _ });
        var a = o(7294),
          n = o(9313),
          i = o(7062),
          r = o(1628),
          s = o(9942),
          l = o(792),
          c = o(7176),
          d = o(5177),
          u = o(6698),
          h = o(5774);
        const m = (0, i.Pi)(function (e) {
            return a.createElement(
              "div",
              { className: "RoomSetupUI" },
              a.createElement(
                "div",
                { className: "Title" },
                "Adjust Floor Height",
                " ",
              ),
              a.createElement(
                "div",
                { className: "Body" },
                "Touch the floor (or use thumbstick) to adjust.",
              ),
              a.createElement(
                "div",
                { className: "ButtonRow" },
                a.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: null == e ? void 0 : e.onCancel,
                  },
                  a.createElement(u.x8, null),
                  " ",
                  "Cancel",
                ),
                a.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetDynamicFloorHeight(
                          n.Ip.Manual,
                          !0,
                        );
                    },
                  },
                  "Reset",
                ),
                a.createElement(
                  d.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.CommitDynamicFloorHeight(
                          null == e ? void 0 : e.bRecenter,
                        ),
                        null == e || e.onAccept();
                    },
                  },
                  (null == e ? void 0 : e.bRecenter) ? "Next" : "Accept",
                ),
              ),
            );
          }),
          p = (0, i.Pi)(function (e) {
            return a.createElement(
              "div",
              { className: "RoomSetupUI" },
              a.createElement(
                "div",
                { className: "Title" },
                "Adjust Playspace",
              ),
              a.createElement(
                "div",
                { className: "Body" },
                "Drag to adjust size",
              ),
              a.createElement(
                "div",
                { className: "ButtonRow" },
                a.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: null == e ? void 0 : e.onCancel,
                  },
                  a.createElement(u.x8, null),
                  " ",
                  "Cancel",
                ),
                !!(null == e ? void 0 : e.onBack) &&
                  a.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                a.createElement(
                  d.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.CommitDynamicFloorRadius(),
                        null == e || e.onAccept();
                    },
                  },
                  "Accept",
                ),
              ),
              a.createElement(
                "div",
                { className: "ButtonRow" },
                !!(null == e ? void 0 : e.onAdvanced) &&
                  a.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onAdvanced,
                    },
                    a.createElement(u.or, null),
                    " ",
                    "Advanced",
                  ),
              ),
            );
          }),
          v = (0, i.Pi)(function (e) {
            return a.createElement(
              "div",
              { className: "RoomSetupUI" },
              a.createElement("div", { className: "Title" }, "Draw Playspace"),
              a.createElement(
                "div",
                { className: "Body" },
                "Use your controller to draw the safe playspace bounds.",
              ),
              a.createElement(
                "div",
                { className: "ButtonRow" },
                a.createElement(
                  d.z,
                  {
                    className: "ButtonControl",
                    onClick: null == e ? void 0 : e.onCancel,
                  },
                  a.createElement(u.x8, null),
                  " ",
                  "Cancel",
                ),
                !!(null == e ? void 0 : e.onBack) &&
                  a.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                a.createElement(
                  d.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      null == e || e.onAccept();
                    },
                  },
                  "Accept",
                ),
              ),
            );
          });
        function g() {
          const [e, t] = a.useState(2.5);
          if (
            (a.useEffect(() => {
              e < 0 &&
                ((l.C7.m_eRoomSetupStep = l.wk.Off),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperone.ResetZeroPose());
              const o = setInterval(() => {
                t((e) => e - 0.04);
              }, 40);
              return () => clearInterval(o);
            }, [e]),
            e < 0.12)
          )
            return null;
          const o = (100 * e) / 2.5;
          return a.createElement(
            "div",
            { className: "ProgressContainer" },
            a.createElement(h.Ip, {
              background: !0,
              backgroundPadding: 2,
              counterClockwise: !0,
              value: o,
            }),
            a.createElement(u.Qc, null),
          );
        }
        const _ = (0, i.Pi)(function (e) {
            var t;
            if (l.C7.m_eRoomSetupStep == l.wk.Off) return null;
            const o = () => {
                l.C7.m_eRoomSetupStep = l.wk.Off;
              },
              i = l.C7.m_eRoomSetupStep == l.wk.RecenterCountdown,
              r = l.C7.m_eRoomSetupStep != l.wk.RecenterCountdown,
              s = a.createElement(
                n.s_,
                {
                  meters_per_pixel: 0.5 * c.F$,
                  interactive: r,
                  scrollable: !1,
                  debug_name: "room-setup-ui",
                },
                l.C7.m_eRoomSetupStep == l.wk.FloorAdjustExisting &&
                  a.createElement(m, {
                    onAccept: () => {
                      l.C7.m_eRoomSetupStep = (
                        null == e
                          ? void 0
                          : e.exitAfterFloorAdjust
                      )
                        ? l.wk.Off
                        : l.wk.AdjustPlayspaceRadius;
                    },
                    onCancel: o,
                    bRecenter: !(null == e ? void 0 : e.exitAfterFloorAdjust),
                  }),
                l.C7.m_eRoomSetupStep == l.wk.FloorAutoDetect &&
                  a.createElement(m, {
                    onAccept: () => {
                      l.C7.m_eRoomSetupStep = (
                        null == e
                          ? void 0
                          : e.exitAfterFloorAdjust
                      )
                        ? l.wk.Off
                        : l.wk.AdjustPlayspaceRadius;
                    },
                    onCancel: o,
                    bRecenter: !(null == e ? void 0 : e.exitAfterFloorAdjust),
                  }),
                l.C7.m_eRoomSetupStep == l.wk.AdjustPlayspaceRadius &&
                  a.createElement(p, {
                    onCancel: o,
                    onAccept: () => {
                      l.C7.m_eRoomSetupStep = l.wk.Off;
                    },
                    onBack: () => {
                      l.C7.m_eRoomSetupStep = l.wk.FloorAutoDetect;
                    },
                    onAdvanced: () => {
                      l.C7.m_eRoomSetupStep = l.wk.AdjustPlayspaceAdvanced;
                    },
                  }),
                l.C7.m_eRoomSetupStep == l.wk.AdjustPlayspaceAdvanced &&
                  a.createElement(v, {
                    onCancel: o,
                    onAccept: () => {
                      l.C7.m_eRoomSetupStep = l.wk.Off;
                    },
                    onBack: () => {
                      l.C7.m_eRoomSetupStep = l.wk.AdjustPlayspaceRadius;
                    },
                  }),
                l.C7.m_eRoomSetupStep == l.wk.RecenterCountdown &&
                  a.createElement(g, null),
              );
            if (i) {
              const e =
                0.15 *
                (null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetFloatProperty(
                          n.wU,
                          n.Uk.DashboardScale_Float,
                        )) && void 0 !== t
                  ? t
                  : 1);
              return a.createElement(
                n.wx,
                { parent_path: "/user/head" },
                a.createElement(
                  n.wx,
                  { translation: { z: -0.5, y: -0.2 }, scale: e },
                  a.createElement(n.jm, null, s),
                ),
              );
            }
            return a.createElement(
              n.wx,
              { parent_path: "/user/head" },
              a.createElement(
                n.iC,
                {
                  start_angle_threshold: 30,
                  stop_angle_threshold: 10,
                  ease_out_angle_threshold: 90,
                  min_angular_velocity: 105,
                  ease_in_power: 1.5,
                  lock_to_horizon: !0,
                },
                a.createElement(
                  n.wx,
                  { translation: { y: -0.1875, z: -1.25 } },
                  s,
                ),
              ),
            );
          }),
          y =
            ((0, i.Pi)(function (e) {
              return l.C7.m_eRoomSetupStep == l.wk.FloorAdjustExisting
                ? a.createElement(
                    n.wx,
                    { parent_path: "/user/head" },
                    a.createElement(
                      n.wx,
                      { rotation: { x: 30 } },
                      a.createElement(
                        n.pL,
                        {
                          projection_constraint: n.kF.WorldDynamicFloor,
                          inital_guess_alpha: (null == e ? void 0 : e.bRecenter)
                            ? 0.8
                            : 0.3,
                        },
                        a.createElement(
                          n.wx,
                          { rotation: { x: -90 } },
                          a.createElement(
                            n.s_,
                            {
                              meters_per_pixel: c.F$,
                              interactive: !1,
                              scrollable: !1,
                              debug_name: "room-setup-floor-circle",
                            },
                            a.createElement(
                              "div",
                              { className: "RoomSetupFloorGeoRoot" },
                              a.createElement("div", {
                                className: "FloorGeo Center",
                              }),
                            ),
                          ),
                        ),
                        !1,
                      ),
                    ),
                  )
                : null;
            }),
            (0, i.Pi)(function () {
              return a.createElement(
                "div",
                { className: "RoomSetupUI" },
                a.createElement(
                  "div",
                  { className: "Title" },
                  "Boundary Warning",
                ),
                a.createElement(
                  "div",
                  { className: "ButtonRow" },
                  a.createElement(
                    d.z,
                    {
                      className: "ButtonControl",
                      onClick: () => {
                        l.C7.m_bOkOutsideOfPlayspace = !0;
                      },
                    },
                    a.createElement(u.x8, null),
                    " ",
                    "Dismiss",
                  ),
                  a.createElement(
                    d.z,
                    {
                      className: "ButtonControl Colorful",
                      onClick: () => {
                        var e;
                        return null ===
                          (e =
                            null === VRHTML || void 0 === VRHTML
                              ? void 0
                              : VRHTML.VRChaperone) || void 0 === e
                          ? void 0
                          : e.StartInHMDRoomSetup(n.X3.Default);
                      },
                    },
                    a.createElement(u.or, null),
                    " ",
                    "Setup Playspace",
                  ),
                ),
              );
            }));
        (0, i.Pi)(() => {
          var e;
          return null !==
            (e = r.G3.settings.get("/settings/internal/enableSafeChaperone")) &&
            void 0 !== e &&
            e
            ? s.H.Instance.SceneApplicationState == n.xY.None ||
              l.C7.m_bDriverProvidedInHMDRoomSetupActive ||
              !l.C7.m_bHmdOutOfBoundsStrict ||
              l.C7.m_bOkOutsideOfPlayspace ||
              l.C7.m_eRoomSetupStep != l.wk.Off
              ? null
              : a.createElement(
                  n.wx,
                  { parent_path: "/user/head" },
                  a.createElement(
                    n.iC,
                    {
                      start_angle_threshold: 30,
                      stop_angle_threshold: 10,
                      ease_out_angle_threshold: 90,
                      min_angular_velocity: 105,
                      ease_in_power: 1.5,
                    },
                    a.createElement(
                      n.wx,
                      { translation: { y: 0.1875, z: -1.25 } },
                      a.createElement(
                        n.jm,
                        null,
                        a.createElement(
                          n.s_,
                          {
                            meters_per_pixel: 0.5 * c.F$,
                            interactive: !0,
                            debug_name: "chaperone-popup",
                          },
                          a.createElement(y, null),
                        ),
                      ),
                    ),
                  ),
                )
            : null;
        });
      },
      1283: (e, t, o) => {
        "use strict";
        o.d(t, { s: () => g });
        var a = o(655),
          n = o(7294),
          i = o(7062),
          r = o(7056),
          s = o(3568),
          l = o(5211),
          c = o(4285),
          d = o(2188),
          u = o(9809),
          h = o(5177),
          m = o(8980),
          p = o(8242);
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
            let o = t;
            const a = "vive_tracker";
            o.includes(a) &&
              (o = o.substring(o.indexOf(a) + a.length, o.length));
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
                p.GV,
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
        (0, a.gn)([d.Fl], v.prototype, "trackerConfig", null),
          (0, a.gn)([r.ak], v.prototype, "OnTrackerRoleChanged", null),
          (0, a.gn)([r.ak], v.prototype, "OnControllerRoleChanged", null),
          (0, a.gn)([r.ak], v.prototype, "BuzzTracker", null),
          (0, a.gn)([d.Fl], v.prototype, "deviceInfo", null),
          (v = (0, a.gn)([i.Pi], v));
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
        g = (0, a.gn)([i.Pi], g);
      },
      6698: (e, t, o) => {
        "use strict";
        o.d(t, {
          Qc: () => l,
          SV: () => p,
          X7: () => h,
          Y2: () => u,
          gR: () => m,
          or: () => s,
          ur: () => i,
          x8: () => v,
          yR: () => r,
        });
        var a = o(655),
          n = o(7294);
        function i(e) {
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
        function r(e) {
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
                className: "SVGIcon_Button SVGIcon_Playspace",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            n.createElement("path", {
              fill: "currentColor",
              d: "M15.6615 10.25C15.3525 10.7125 15.1875 11.2562 15.1875 11.8125C15.1867 12.1821 15.2589 12.5482 15.3999 12.8898C15.541 13.2314 15.7481 13.5417 16.0094 13.8031C16.2708 14.0644 16.5811 14.2715 16.9227 14.4126C17.2643 14.5536 17.6304 14.6258 18 14.625C18.5563 14.625 19.1 14.4601 19.5625 14.151C20.0251 13.842 20.3855 13.4027 20.5984 12.8888C20.8113 12.3749 20.867 11.8094 20.7585 11.2638C20.6499 10.7182 20.3821 10.2171 19.9887 9.82376C19.5954 9.43043 19.0943 9.16256 18.5487 9.05404C18.0031 8.94552 17.4376 9.00122 16.9237 9.21409C16.4098 9.42696 15.9705 9.78745 15.6615 10.25Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M14.4645 17.9645C15.4021 17.0268 16.6739 16.5 18 16.5C19.3261 16.5 20.5979 17.0268 21.5355 17.9645C22.4732 18.9021 23 20.1739 23 21.5V24H21L20.5 29H15.5L15 24H13V21.5C13 20.1739 13.5268 18.9021 14.4645 17.9645Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 0L35 7.00016V29L18 36L1 29V7.00016L18 0ZM4 27.7647V9.76471L18 4L32 9.76471V27.7647L24.6111 24.7222L24.1734 27.7864L27.1208 29L18 32.7556L8.87919 29L11.8266 27.7864L11.3889 24.7222L4 27.7647Z",
            }),
          );
        }
        function l(e) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Recenter",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            n.createElement("path", {
              fill: "currentColor",
              d: "M14.7261 2.74994C14.2934 3.39746 14.0625 4.15874 14.0625 4.9375C14.0613 5.45491 14.1624 5.96744 14.3599 6.44568C14.5573 6.92392 14.8473 7.35845 15.2132 7.72431C15.5791 8.09017 16.0136 8.38016 16.4918 8.57763C16.9701 8.7751 17.4826 8.87616 18 8.875C18.7788 8.875 19.54 8.64407 20.1876 8.21141C20.8351 7.77876 21.3398 7.1638 21.6378 6.44432C21.9358 5.72483 22.0138 4.93313 21.8618 4.16933C21.7099 3.40553 21.3349 2.70394 20.7842 2.15327C20.2336 1.6026 19.532 1.22759 18.7682 1.07566C18.0044 0.92373 17.2127 1.00171 16.4932 1.29973C15.7737 1.59775 15.1587 2.10243 14.7261 2.74994Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M13.0503 13.5503C14.363 12.2375 16.1435 11.5 18 11.5C19.8565 11.5 21.637 12.2375 22.9497 13.5503C24.2625 14.863 25 16.6435 25 18.5V22H22.2L21.5 29H14.5L13.8 22H11V18.5C11 16.6435 11.7375 14.863 13.0503 13.5503Z",
            }),
            n.createElement("path", {
              fill: "currentColor",
              d: "M3 29C3 26.5645 5.66517 24.4196 9.70869 23.1656L10.0112 26.224C9.52728 26.393 9.07639 26.5754 8.66205 26.7688C6.18364 27.9254 6 28.9249 6 29C6 29.0751 6.18364 30.0746 8.66205 31.2312C10.8969 32.2741 14.1952 33 18 33C21.8048 33 25.1031 32.2741 27.3379 31.2312C29.8164 30.0746 30 29.0751 30 29C30 28.9249 29.8164 27.9254 27.3379 26.7688C26.9236 26.5754 26.4727 26.393 25.9888 26.224L26.2913 23.1656C30.3348 24.4196 33 26.5645 33 29C33 32.866 26.2843 36 18 36C9.71573 36 3 32.866 3 29Z",
            }),
          );
        }
        function c(e) {
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
        function d(e) {
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
        function u(e) {
          const { off: t } = e,
            o = (0, a._T)(e, ["off"]);
          return t
            ? n.createElement(d, Object.assign({}, o))
            : n.createElement(c, Object.assign({}, o));
        }
        function h(e) {
          const { none: t, partial: o, right: i, left: r } = e,
            s = (0, a._T)(e, ["none", "partial", "right", "left"]);
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
            : o || i
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
              : r
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
        function m(e) {
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
        function p(e) {
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
        function v(e) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Close",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            n.createElement("path", {
              d: "M32.12 7.41L28.59 3.88L18 14.46L7.41 3.88L3.88 7.41L14.46 18L3.88 28.59L7.41 32.12L18 21.54L28.59 32.12L32.12 28.59L21.54 18L32.12 7.41Z",
              fill: "currentColor",
            }),
          );
        }
      },
      2477: (e, t, o) => {
        "use strict";
        o.d(t, { Q: () => l });
        var a = o(655),
          n = o(9313),
          i = o(328),
          r = o(4820);
        const s = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new i.fH(this, r.Al)),
              (this.m_Steam_Client = new i.q0(this)),
              (this.m_Steam_ClientMethods = new r.x2(this.m_Steam_Client)),
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
            return (0, a.mG)(this, void 0, void 0, function* () {
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
            let o, a;
            try {
              o = r.Vg.fromObject(e).serializeBase64String();
            } catch (e) {
              return i.n5.HeaderSerializationFailure;
            }
            try {
              a = t.serializeBase64String();
            } catch (e) {
              return i.n5.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: o,
                payload: a,
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
  function a(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var i = (o[e] = { id: e, exports: {} });
    return t[e].call(i.exports, i, i.exports, a), i.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, o, n, i) => {
      if (!o) {
        var r = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, n, i] = e[d], s = !0, l = 0; l < o.length; l++)
            (!1 & i || r >= i) && Object.keys(a.O).every((e) => a.O[e](o[l]))
              ? o.splice(l--, 1)
              : ((s = !1), i < r && (r = i));
          if (s) {
            e.splice(d--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [o, n, i];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var o in t)
        a.o(t, o) &&
          !a.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.j = 627),
    (() => {
      var e = { 627: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var n,
            i,
            [r, s, l] = o,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (n in s) a.o(s, n) && (a.m[n] = s[n]);
            if (l) var d = l(a);
          }
          for (t && t(o); c < r.length; c++)
            (i = r[c]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return a.O(d);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })(),
    (a.nc = void 0);
  var n = a.O(void 0, [968, 683], () => a(4599));
  n = a.O(n);
})();
//# sourceMappingURL=bindingcallouts.js.map?v=250fe7b3b11ea5f3afa9
