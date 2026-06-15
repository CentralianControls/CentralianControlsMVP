import {
  Camera,
  ShieldCheck,
  FlaskConical,
  RadioTower,
  Gauge,
  Container,
  PanelsTopLeft,
  Factory,
  Zap,
  Cpu,
  Sun,
  Activity,
  Waves,
  Radio,
} from "lucide-react";

export const solutions = [
  {
    slug: "camera-surveillance-systems",
    title: "Camera & Surveillance Systems",
    category: "Remote Visibility",
    icon: Camera,
    headline: "Remote Visibility, Supporting Safer and More Efficient Operations",
    shortDescription:
      "Solar-powered, fixed-point and portable camera packages for remote and industrial sites.",
    description:
      "Centralian Controls delivers camera and surveillance solutions designed to support and enhance operations across remote and industrial sites.",
    overview: [
      "These systems provide improved site visibility, security and operational awareness, helping reduce the need for personnel to attend site while maintaining oversight of critical infrastructure.",
      "Solutions include solar-powered, fixed-point and portable camera packages configured to suit site conditions and application requirements.",
      "Integration with communications systems enables reliable transmission of video and data, ensuring visibility from remote locations.",
    ],
    services: [
      "Supply and assembly of camera and surveillance hardware packages",
      "Configuration of solar-powered, fixed or portable systems to suit site conditions",
      "Procurement of cameras, mounting systems and communications equipment",
      "Integration of power and communications infrastructure within the package",
      "Coordination with system integrators responsible for configuration and commissioning",
      "Testing and verification of assembled systems prior to delivery",
    ],
  },
  {
    slug: "cathodic-protection-systems",
    title: "Cathodic Protection Systems",
    category: "Asset Protection",
    icon: ShieldCheck,
    headline: "Asset Protection Systems for Long-Term Integrity",
    shortDescription:
      "Cathodic protection systems for pipelines and critical infrastructure.",
    description:
      "Centralian Controls delivers cathodic protection systems for the long-term protection of pipelines and critical infrastructure.",
    overview: [
      "These systems are widely applied across oil and gas, water and industrial assets where effective corrosion control is essential to maintaining asset integrity and operational reliability.",
      "Centralian assembles solar and mains-powered CP systems incorporating CP controllers, rectifiers, anodes, monitoring equipment and communications.",
      "Systems are prepared with consideration for electrical limits, environmental conditions, long-term performance and relevant standards including the AS 2832 series.",
    ],
    services: [
      "Delivery of cathodic protection systems for pipelines and critical infrastructure",
      "Working from customer or engineering company designs to assemble compliant solutions",
      "Supply and assembly of CP controllers, rectifiers, anodes and monitoring equipment",
      "Configuration of solar-powered systems to support CP operation in remote locations",
      "Integration of battery storage and power management for continuous operation",
      "Integration of remote monitoring and communications for performance visibility",
      "Assembly into field-ready enclosures and mounting systems",
      "Testing and verification, including support for Factory Acceptance Testing",
    ],
  },
  {
    slug: "chemical-injection-systems",
    title: "Chemical Injection Systems",
    category: "Process Packages",
    icon: FlaskConical,
    headline: "Reliable Chemical Injection, Built for Field Performance",
    shortDescription:
      "Chemical injection systems for corrosion inhibition, biocide dosing and fluid conditioning.",
    description:
      "Centralian Controls delivers chemical injection systems for a wide range of process applications.",
    overview: [
      "Applications include corrosion inhibition, biocide dosing, anti-scalant treatment and other fluid conditioning requirements.",
      "Systems are commonly applied across oil and gas, water and industrial process environments where consistent and controlled chemical delivery is critical.",
      "Centralian assembles injection pumps, tanks, tubing, instrumentation and control systems into practical, fit-for-purpose packages.",
    ],
    services: [
      "Delivery of chemical injection systems covering a wide range of treatment applications",
      "Working from customer or engineering company specifications to assemble fit-for-purpose systems",
      "Supply and assembly of injection pumps, tanks, valving and associated equipment",
      "Configuration of systems in solar, electric or pneumatic arrangements to suit site conditions",
      "Installation of instrumentation and control interfaces for dosing and monitoring",
      "Assembly into skid-mounted or standalone packages for field deployment",
      "Testing and verification to ensure consistent and reliable operation",
    ],
  },
  {
    slug: "communications-remote-monitoring-systems",
    title: "Communications & Remote Monitoring Systems",
    category: "Remote Monitoring",
    icon: RadioTower,
    headline: "Reliable Connectivity for Remote and Distributed Assets",
    shortDescription:
      "Radio, cellular and IIoT communication systems for remote industrial assets.",
    description:
      "Centralian Controls delivers communications and remote monitoring systems that enable reliable data transfer and visibility across remote and distributed assets.",
    overview: [
      "These solutions are applied where traditional cabling is impractical, supporting monitoring and control across industries including energy, water, mining and infrastructure.",
      "Systems are configured using industrial radio, cellular and IIoT technologies, integrating field devices, RTU/PLC platforms and SCADA systems.",
      "The focus is selecting and assembling the appropriate communications architecture to suit the application, distance and operating environment.",
    ],
    services: [
      "Supply and assembly of communications systems, from simple pole-mounted radios through to complex network architectures",
      "Selection and procurement of radio, cellular and IIoT equipment to suit application and distance requirements",
      "Assembly of communications enclosures, power systems and mounting arrangements",
      "Integration of RTU/PLC interfaces and field communications hardware within the package",
      "Coordination with customers, system integrators and engineering companies for end-to-end implementation",
      "Testing and verification of communications hardware prior to deployment",
    ],
  },
  {
    slug: "compressor-facility-packages",
    title: "Compressor & Facility Packages",
    category: "Facility Infrastructure",
    icon: Gauge,
    headline: "Supporting Infrastructure for Compressor and Facility Operations",
    shortDescription:
      "Electrical and instrumentation support packages for compressor stations and process facilities.",
    description:
      "Centralian Controls delivers compressor and facility support packages based on customer or engineering company designs.",
    overview: [
      "These packages provide the electrical and instrumentation infrastructure required for reliable operation.",
      "They support new installations and brownfield upgrades across compressor stations and process facilities.",
      "Typical scope includes control enclosures, RTU/PLC panels, instrumentation and gauge panels, hazardous area marshalling enclosures and junction boxes.",
    ],
    services: [
      "Delivery of electrical and instrumentation support packages for compressor and facility applications",
      "Working from customer or EPC designs to assemble practical, buildable systems",
      "Hazardous area compliant assembly and wiring across panels and field enclosures",
      "Assembly of control panels, marshalling systems and junction boxes",
      "Coordination with site engineers, fabricators and contractors",
      "Support for FAT and client inspection activities",
    ],
  },
  {
    slug: "containerised-modular-systems",
    title: "Containerised & Modular Systems",
    category: "Modular Infrastructure",
    icon: Container,
    headline: "Modular Infrastructure, Delivered Ready for Deployment",
    shortDescription:
      "Self-contained containerised systems for control, power and instrumentation requirements.",
    description:
      "Centralian Controls delivers containerised and modular systems that provide complete, self-contained solutions.",
    overview: [
      "These systems are commonly used in remote and brownfield applications where rapid deployment, environmental protection and space efficiency are critical.",
      "Centralian integrates switchboards, VSDs, PLC/RTU systems, communications and instrumentation into containerised solutions configured to suit the application.",
      "Packages may include climate-controlled switchrooms, I&E fit-out and fully assembled internal systems within a single transportable unit.",
    ],
    services: [
      "Delivery of containerised and modular systems incorporating a wide range of products and solutions",
      "Assembly of switchboards, VSDs, RTU/PLC systems, communications and instrumentation within a single transportable unit",
      "Integration of solar power systems, battery storage and remote power infrastructure where required",
      "Inclusion of chemical injection systems and associated process equipment within containerised packages",
      "Working from customer or engineering company designs to configure practical, buildable systems",
      "Coordination of multi-discipline equipment and vendors within the container package",
      "Integration of power, control and communications infrastructure into a cohesive solution",
      "Assembly of climate-controlled switchrooms and I&E fit-out where required",
      "Support for FAT and client inspection activities prior to delivery",
    ],
  },
  {
    slug: "custom-panels-integrated-systems",
    title: "Custom Panels & Integrated Systems",
    category: "Control Systems",
    icon: PanelsTopLeft,
    headline: "Bespoke Control Systems, Built for Your Application",
    shortDescription:
      "Custom control panels and integrated systems tailored to project requirements.",
    description:
      "Centralian Controls delivers bespoke control panels and integrated systems tailored to specific project requirements.",
    overview: [
      "These solutions support industries including energy, water, mining and infrastructure.",
      "They incorporate control, instrumentation, communications and power distribution within a single coordinated system.",
      "Systems may include custom enclosures, local control stations, remote I/O panels, communications enclosures and battery systems.",
    ],
    services: [
      "Delivery of bespoke control panels and integrated systems across a wide range of industries",
      "Capability to support simple through to complex applications, tailored to project requirements",
      "Working from customer or engineering company designs, with practical input where required",
      "Panel layout and equipment arrangement to suit space, access and installation constraints",
      "Procurement and supply of control, instrumentation and communications components",
      "Electrical panel fabrication and wiring to a high standard of build quality",
      "Assembly into custom enclosures, local control stations, I/O panels and communications cabinets",
      "Hazardous area compliant wiring and assembly where required",
      "Electrical testing and FAT support to verify functionality prior to delivery",
      "Preparation of as-built documentation and handover packages",
    ],
  },
  {
    slug: "energy-process-skid-packages",
    title: "Energy & Process Skid Packages",
    category: "Skid Packages",
    icon: Factory,
    headline: "Process Skid Solutions, Engineered for Performance and Deployment",
    shortDescription:
      "Skid-based systems for custody transfer, metering, separation and gas regulation.",
    description:
      "Centralian Controls delivers energy and process skid packages based on customer, engineering company or third-party process designs.",
    overview: [
      "These packages typically include custody transfer, wellhead metering, separation and gas regulation systems.",
      "They integrate instrumentation, control and mechanical components into a single cohesive package.",
      "Centralian focuses on practical implementation, packaging and assembly to ensure the package is complete, functional and ready for installation.",
    ],
    services: [
      "Project coordination and delivery oversight across multi-discipline skid packages",
      "Working from customer or EPC process designs to assemble practical, buildable systems",
      "Procurement of process, instrumentation and control equipment from approved vendors",
      "Assembly of mechanical, instrumentation and electrical components into skid-based solutions",
      "Hazardous area compliant build practices across electrical and field installations",
      "Installation of process instrumentation and associated instrument tubing",
      "Assembly of control systems, marshalling and communications interfaces within the package",
      "Coordination with piping contractors, fabricators and equipment suppliers",
      "Support for Factory Acceptance Testing and client inspection activities",
      "Preparation of as-built documentation and project handover packages",
    ],
  },
  {
    slug: "lv-power-distribution-motor-control",
    title: "LV Power Distribution & Motor Control",
    category: "Electrical Systems",
    icon: Zap,
    headline: "Integrated Power Distribution for Complete Systems",
    shortDescription:
      "LV switchboards, motor control, VSDs and protection systems for packaged solutions.",
    description:
      "Centralian Controls delivers LV power distribution and motor control systems as part of broader packaged solutions.",
    overview: [
      "These systems are often integrated within skids, switchboards and containerised switchrooms.",
      "They provide the electrical backbone for control, automation and process equipment across industrial applications.",
      "Systems are built to meet relevant standards including AS3000 and AS61439.",
    ],
    services: [
      "Design support and assembly of LV switchboards and motor control systems based on project requirements",
      "Capability for indoor switchboards up to 400VAC, 1600A, 50kA",
      "Capability for outdoor switchboards up to 400VAC, 630A, 50kA",
      "Integration of motor control, VSDs, protection and distribution systems",
      "Assembly and wiring of switchboards and associated control equipment",
      "Integration with RTU/PLC control systems for monitoring and operation",
      "Built to Australian standards including AS61439",
      "Support for testing and FAT activities prior to delivery",
    ],
  },
  {
    slug: "plc-rtu-control-panels",
    title: "PLC / RTU Control Panels",
    category: "Automation Panels",
    icon: Cpu,
    headline: "Control Panels for Monitoring, Control and Communications",
    shortDescription:
      "PLC and RTU control panels for energy, water and infrastructure projects.",
    description:
      "Centralian Controls delivers PLC and RTU control panels for a wide range of industrial applications.",
    overview: [
      "These panels support monitoring, control and communications across energy, water and infrastructure projects.",
      "Panels are typically based on customer or engineering company designs to ensure alignment with overall system requirements.",
      "They are assembled using PLC/RTU platforms, instrumentation interfaces, communications and power distribution, with a focus on build quality and functionality.",
    ],
    services: [
      "Panels built, wired and tested in-house to consistent standards",
      "Assembly of control, communications and interface components",
      "Panel layout and configuration to suit installation space and access requirements",
      "Integration of field interfaces and instrumentation connections",
      "Electrical testing and verification prior to delivery",
      "Preparation of as-built documentation and panel schedules",
    ],
  },
  {
    slug: "solar-remote-power-systems",
    title: "Solar & Remote Power Systems",
    category: "Remote Power",
    icon: Sun,
    headline: "Reliable Remote Power, Engineered for the Application",
    shortDescription:
      "Solar and remote power systems for RTU, communications, monitoring and control equipment.",
    description:
      "Centralian Controls delivers solar and remote power systems engineered to meet specific energy demands.",
    overview: [
      "This includes in-house solar sizing and system design to support RTU, communications, monitoring and control systems in remote or off-grid locations.",
      "Systems are built using standardised engineered mounting frames designed to suit site conditions including wind loading.",
      "Integration of power systems with control and communications equipment ensures a complete practical solution tailored to the application.",
    ],
    services: [
      "In-house solar sizing and system configuration to meet application power requirements",
      "Selection and supply of solar panels, batteries, regulators and power systems",
      "Use of standardised engineered mounting frames designed for wind load and site conditions",
      "Mounting solutions including ballast or concrete slab installations",
      "Assembly of complete solar power systems for remote and off-grid applications",
      "Integration of customer control and communications equipment within the power package",
      "Configuration of battery storage and power distribution to support continuous operation",
      "Electrical assembly and system wiring for reliable field performance",
      "System testing and verification prior to deployment",
      "Delivery of complete, transportable power packages ready for installation",
    ],
  },
  {
    slug: "vsd-drive-packages",
    title: "VSD & Drive Packages",
    category: "Drive Systems",
    icon: Activity,
    headline: "Drive Solutions, Engineered for Performance and Integration",
    shortDescription:
      "VSD and drive packages for pumps, fans, compressors and process equipment.",
    description:
      "Centralian Controls delivers VSD and drive packages for a wide range of motor control applications.",
    overview: [
      "These applications include pumps, fans, compressors and process equipment.",
      "Solutions are often supplied as part of switchboards, skid packages or containerised switchrooms to ensure seamless integration within the overall system.",
      "Centralian selects and applies variable speed drives to match motor, process and operating conditions.",
    ],
    services: [
      "Selection and application of VSD and soft starter solutions to suit motor and process requirements",
      "Supply and assembly of drive systems within skids, switchboards or containerised switchrooms",
      "Integration of power protection, motor control and associated equipment within the package",
      "Inclusion of harmonic mitigation solutions where required",
      "Coordination with RTU/PLC control systems for monitoring and operation",
      "Assembly and wiring of drive panels and associated electrical systems",
      "Support for testing and FAT activities prior to delivery",
    ],
  },
  {
    slug: "water-infrastructure-packages",
    title: "Water & Infrastructure Packages",
    category: "Utilities Infrastructure",
    icon: Waves,
    headline: "Reliable Control Solutions for Water and Infrastructure Networks",
    shortDescription:
      "Packages for pump control, booster stations, dosing, blending and network monitoring.",
    description:
      "Centralian Controls delivers water and infrastructure packages supporting utility and infrastructure applications.",
    overview: [
      "Applications include pump control, booster stations, dosing, blending and network monitoring.",
      "Centralian assembles control panels, RTU/PLC systems, instrumentation, communications and power systems into coordinated solutions tailored to the application.",
      "These packages are typically deployed across distributed assets requiring consistent performance and alignment with existing networks and SCADA systems.",
    ],
    services: [
      "Delivery of water and infrastructure packages incorporating piping, valving and instrumentation systems",
      "Working from customer or engineering company designs to assemble practical, buildable solutions",
      "Assembly of process piping, valves and associated mechanical components",
      "Installation of instrumentation for flow, pressure, level and monitoring applications",
      "Integration of control panels, RTU/PLC systems and communications equipment",
      "Coordination with piping contractors, site engineers and system integrators",
      "Support for Factory Acceptance Testing and client inspection activities",
    ],
  },
  {
    slug: "wellhead-rtu-control-systems",
    title: "Wellhead RTU & Control Systems",
    category: "Oil & Gas Control",
    icon: Radio,
    headline: "Integrated Wellhead Control, Built for Remote Performance",
    shortDescription:
      "Wellhead RTU and control systems for upstream monitoring, measurement and shutdown functions.",
    description:
      "Centralian Controls delivers wellhead RTU and control systems designed for upstream applications.",
    overview: [
      "These systems integrate flow measurement, valve and choke control, chemical injection, shutdown functions and SCADA connectivity.",
      "Built around platforms such as Emerson RTUs and flow computers, packages are configured to suit site-specific requirements and operating conditions.",
      "Integration of communications and field instrumentation ensures seamless data acquisition and control across remote assets.",
    ],
    services: [
      "Project coordination and dedicated Project Engineer to support delivery of wellhead packages",
      "Early engagement to assist with package configuration and equipment selection",
      "Design support based on customer or engineering company specifications",
      "Procurement and supply of RTU/PLC platforms, instrumentation and communications equipment",
      "Electrical panel fabrication and wiring for control systems",
      "Instrumentation and electrical fit-out, including hazardous area field wiring",
      "Hazardous area compliant assembly and installation practices",
      "Mechanical assembly and instrument tubing for process and measurement systems",
      "Integration into skid-based packages for transport and installation",
      "Electrical testing and FAT support, including customer witnessing where required",
      "Development of as-built documentation and system mark-ups",
    ],
  },
];

export function getSolutionBySlug(slug) {
  return solutions.find((solution) => solution.slug === slug);
}