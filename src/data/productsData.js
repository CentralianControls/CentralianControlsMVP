import {
  BellRing,
  MonitorCog,
  RadioTower,
  Gauge,
  ShieldAlert,
  Cpu,
  Zap,
  Activity,
  Waves,
  SlidersHorizontal,
  ToggleLeft,
  Wifi,
} from "lucide-react";

export const products = [
  {
    slug: "alarm-notification-analytics-software",
    title: "Alarm Notification & Analytics Software",
    category: "Alarm Software",
    icon: BellRing,
    headline: "Real-Time Alerts. Actionable Insights.",
    shortDescription:
      "Alarm notification and escalation software for critical industrial events.",
    description:
      "Industrial alarm notification and escalation solutions ensure critical events and process conditions are communicated to the right personnel in a timely manner.",
    overview: [
      "These systems work alongside SCADA, PLC and HMI platforms to improve visibility, response times and operational awareness.",
      "By delivering alerts through multiple channels and escalating where required, these solutions reduce reliance on manual monitoring and help minimise missed alarms.",
    ],
    sections: [
      {
        title: "SmartSights",
        items: [
          "Alarm notification",
          "Alarm escalation",
          "SCADA integration",
          "Operational analytics",
          "Real-time visibility",
        ],
      },
    ],
    whyCentralian: [
      "Supplies proven SmartSights software platforms.",
      "Provides guidance on product selection and licensing models.",
      "Supports capability fit and long-term use within industrial environments.",
    ],
    cta:
      "Talk to our team about SmartSights alarm notification and analytics software.",
  },
  {
    slug: "automation-scada-historian-software",
    title: "Automation | SCADA | Historian Software",
    category: "Industrial Software",
    icon: MonitorCog,
    headline: "Industrial Data. Unified and Actionable.",
    shortDescription:
      "SCADA, automation and historian platforms for monitoring, visibility and data management.",
    description:
      "Industrial software platforms provide the core operational visibility and data management layer for modern industrial and infrastructure systems.",
    overview: [
      "These platforms capture, visualise and store real-time and historical operational data.",
      "They support centralised monitoring, alarm management, reporting and long-term data retention across distributed assets and sites.",
    ],
    sections: [
      {
        title: "GE Vernova Platforms",
        items: [
          "Proficy Historian",
          "Proficy HMI / SCADA",
          "iFIX",
          "CIMPLICITY",
          "Proficy Operations Hub",
          "Proficy CSense",
        ],
      },
    ],
    whyCentralian: [
      "Supplies long-lifecycle GE Vernova software platforms.",
      "Provides guidance on product selection and capability fit.",
      "Supports alignment with operational requirements and compliance needs.",
    ],
    cta:
      "Talk to our team about GE Vernova industrial software platforms.",
  },
  {
    slug: "communications",
    title: "Communications",
    category: "Industrial Connectivity",
    icon: RadioTower,
    headline: "Industrial Connectivity Without Compromise.",
    shortDescription:
      "Networking, telemetry and communications products for industrial field systems.",
    description:
      "Communications products provide the networking and telemetry infrastructure required to connect industrial field devices, control systems and monitoring platforms.",
    overview: [
      "These solutions enable reliable data transfer between assets and control layers using wired, wireless and cellular architectures.",
      "Industrial communications products support secure networking, remote monitoring and resilient data transport in harsh and distributed applications.",
    ],
    sections: [
      {
        title: "Industrial Networking & Gateways",
        items: ["Advantech", "Industrial networking", "Gateways", "Remote connectivity"],
      },
      {
        title: "Wireless Sensing",
        items: ["EDGE SENSAiO", "Wireless sensors", "Remote asset visibility"],
      },
      {
        title: "Telemetry & Radio",
        items: ["ELPRO Technologies", "Industrial radio", "Telemetry systems"],
      },
    ],
    whyCentralian: [
      "Supplies proven industrial communications and telemetry products.",
      "Supports product selection, availability and procurement.",
      "Assists with critical and remote connectivity applications.",
    ],
    cta:
      "Talk to our team about industrial communications and telemetry solutions.",
  },
  {
    slug: "drive-accessories-filters-braking",
    title: "Drive Accessories: Filters & Braking",
    category: "Motor Control",
    icon: Gauge,
    headline: "Power Quality. Controlled Energy.",
    shortDescription:
      "Filters and braking accessories for reliable and compliant drive installations.",
    description:
      "Drive accessories such as harmonic filters, output filters and braking solutions support the reliable, compliant and efficient operation of variable speed drive systems.",
    overview: [
      "These products manage harmonic distortion, reflected wave phenomena and regenerative energy during deceleration.",
      "They help extend equipment life, improve system stability and reduce unplanned downtime.",
    ],
    sections: [
      {
        title: "Danfoss Drive Accessories",
        items: [
          "Harmonic filters",
          "Output filters",
          "Braking solutions",
          "Motor protection",
          "Power quality support",
        ],
      },
    ],
    whyCentralian: [
      "Advises on drive accessory selection.",
      "Supplies compatible and proven Danfoss solutions.",
      "Supports retrofit, upgrade and standards-driven drive installations.",
    ],
    cta:
      "Talk to our team about Danfoss filters and braking options.",
  },
  {
    slug: "hazardous-area-equipment",
    title: "Hazardous Area Equipment",
    category: "Safety & Compliance",
    icon: ShieldAlert,
    headline: "Engineered for Hazardous Environments.",
    shortDescription:
      "Hazardous area equipment for safe instrumentation, control and monitoring.",
    description:
      "Hazardous area equipment enables safe and compliant operation of instrumentation, control and monitoring systems where explosive gases, vapours or dusts may be present.",
    overview: [
      "These environments require strict control of electrical energy to prevent ignition under normal and fault conditions.",
      "Solutions are used across oil and gas, energy, water, chemical processing and safety-critical environments.",
    ],
    sections: [
      {
        title: "Intrinsic Safety & Signal Conditioning",
        items: ["MTL Instruments", "Isolators", "Barriers", "Signal conditioning"],
      },
      {
        title: "Wireless Sensing in Hazardous Areas",
        items: ["EDGE SENSAiO", "Wireless sensors", "Low-power monitoring"],
      },
    ],
    whyCentralian: [
      "Has extensive experience supplying hazardous area equipment.",
      "Supports product selection and hazardous area compliance considerations.",
      "Supports compliant assembly, inspection and delivery where required.",
    ],
    cta:
      "Talk to our team about hazardous area equipment solutions.",
  },
  {
    slug: "industrial-pcs-edge-computing",
    title: "Industrial PCs & Edge Computing",
    category: "Industrial Computing",
    icon: Cpu,
    headline: "Industrial Computing at the Edge.",
    shortDescription:
      "Industrial PC and edge computing platforms for automation and monitoring systems.",
    description:
      "Industrial PCs provide the computing foundation for automation, monitoring and visualisation systems where commercial IT hardware is unsuitable.",
    overview: [
      "These platforms support HMI runtimes, supervisory software, soft PLC applications and edge-level data processing.",
      "They are available in fanless embedded, modular, high-performance and industrial panel PC form factors.",
    ],
    sections: [
      {
        title: "Advantech Industrial Computing",
        items: [
          "Industrial PCs",
          "Panel PCs",
          "Embedded automation computers",
          "Edge computing platforms",
          "Industrial operating environments",
        ],
      },
    ],
    whyCentralian: [
      "Supplies industrial-grade PC platforms.",
      "Supports product selection for durability, performance and lifecycle.",
      "Assists with matching hardware to automation software environments.",
    ],
    cta:
      "Talk to our team about industrial PCs and edge computing platforms.",
  },
  {
    slug: "lightning-prevention-surge-protection",
    title: "Lightning Prevention & Surge Protection",
    category: "Asset Protection",
    icon: Zap,
    headline: "Protecting Critical Infrastructure.",
    shortDescription:
      "Lightning prevention and surge protection for exposed industrial assets.",
    description:
      "Lightning prevention and surge protection systems safeguard infrastructure, assets and personnel from lightning strikes and transient overvoltages.",
    overview: [
      "Lightning prevention solutions reduce the probability and impact of direct lightning attachment.",
      "Surge protection devices limit transient energy entering sensitive electrical, instrumentation and communications circuits.",
    ],
    sections: [
      {
        title: "Lightning Prevention Systems",
        items: ["SERTEC S.R.L.", "CMCE systems", "Critical infrastructure protection"],
      },
      {
        title: "Instrumentation Surge Protection",
        items: ["MTL Instruments", "Surge protection devices", "Circuit protection"],
      },
    ],
    whyCentralian: [
      "Supplies proven lightning prevention and surge protection solutions.",
      "Supports selection based on site exposure and asset criticality.",
      "Aligns protection with electrical, instrumentation and communication needs.",
    ],
    cta:
      "Centralian can support reliable protection of your critical assets.",
  },
  {
    slug: "motor-drives-soft-starters",
    title: "Motor Drives and Soft Starters",
    category: "Motor Control",
    icon: Activity,
    headline: "Precision Motor Control. Proven Performance.",
    shortDescription:
      "Variable speed drives and soft starters for efficient motor control.",
    description:
      "Motor drives and soft starters regulate motor speed, torque and starting performance across industrial and infrastructure applications.",
    overview: [
      "Correct motor control equipment improves energy efficiency, reliability and long-term asset performance.",
      "These technologies are widely applied across pumping, HVAC, materials handling, processing and general industrial systems.",
    ],
    sections: [
      {
        title: "Danfoss Drives",
        items: [
          "Variable speed drives",
          "Soft starters",
          "General-purpose drives",
          "Application-specific drives",
          "Motor protection",
        ],
      },
    ],
    whyCentralian: [
      "Supplies proven Danfoss motor control products.",
      "Provides guidance on product selection.",
      "Maintains local stock to support uptime and project schedules.",
      "Works with Danfoss Drives Australia across lifecycle requirements.",
    ],
    cta:
      "Talk to our team about motor drives, soft starters and supporting drive accessories.",
  },
  {
    slug: "pipeline-leak-detection",
    title: "Pipeline Leak Detection",
    category: "Pipeline Integrity",
    icon: Waves,
    headline: "Advanced Leak Detection and Pipeline Insight.",
    shortDescription:
      "Leak detection technologies for pipeline monitoring, safety and integrity.",
    description:
      "Pipeline leak detection systems identify, locate and analyse leaks, theft and abnormal operating conditions across pipeline networks.",
    overview: [
      "These systems support operational integrity, environmental protection and risk reduction.",
      "They are applied across oil, gas, water, slurry and multi-product pipelines.",
    ],
    sections: [
      {
        title: "Atmos International",
        items: [
          "Pipeline leak detection",
          "Pipeline integrity monitoring",
          "Real-time monitoring",
          "Advanced analytics",
          "Onshore, offshore and remote pipeline systems",
        ],
      },
    ],
    whyCentralian: [
      "Supplies Atmos International pipeline leak detection solutions.",
      "Supports product selection and capability fit.",
      "Helps ensure suitability for pipeline characteristics and lifecycle needs.",
    ],
    cta:
      "Talk to our team about Atmos International pipeline leak detection solutions.",
  },
  {
    slug: "rtu-plc-datalogger-hmi",
    title: "RTU | PLC | Datalogger | HMI",
    category: "Control Platforms",
    icon: SlidersHorizontal,
    headline: "Control Systems Built for Integration.",
    shortDescription:
      "RTUs, PLCs, dataloggers and HMIs for control, monitoring and visualisation.",
    description:
      "RTUs, PLCs, dataloggers, industrial PCs and HMIs form the core field-level platforms used to control, monitor and visualise industrial processes.",
    overview: [
      "These devices acquire data from field instruments, execute control logic, present information to operators and securely transmit data to higher-level systems.",
      "Centralian supplies platforms selected for energy, infrastructure and industrial automation applications.",
    ],
    sections: [
      {
        title: "Energy & Critical Infrastructure RTUs",
        items: ["Emerson", "RTUs", "Flow computers", "Remote automation"],
      },
      {
        title: "Industrial RTU / PLC Platforms",
        items: ["Brodersen", "RTU32M", "Modular RTU / PLC platforms"],
      },
      {
        title: "Compact PLC Platforms",
        items: ["Eaton", "easyE4", "Small to mid-sized automation"],
      },
      {
        title: "Data Loggers",
        items: ["Lacroix", "SOFREL", "Remote water and wastewater monitoring"],
      },
      {
        title: "Operator Interfaces",
        items: ["Beijer Electronics", "Industrial HMI platforms", "iX HMI software"],
      },
    ],
    whyCentralian: [
      "Supplies field-level control, monitoring and data acquisition platforms.",
      "Understands practical differences between RTUs, PLCs, HMIs, industrial PCs and dataloggers.",
      "Helps customers select platforms aligned with environment, application and lifecycle expectations.",
    ],
    cta:
      "Talk to our team about RTU, PLC, HMI and data logging platforms.",
  },
  {
    slug: "switchgear-motor-control",
    title: "Switchgear and Motor Control",
    category: "Electrical Control",
    icon: ToggleLeft,
    headline: "Reliable Power Distribution and Control.",
    shortDescription:
      "Switchgear and motor control products for safe industrial power distribution.",
    description:
      "Switchgear and motor control equipment provides the foundation for safe electrical distribution, protection and motor operation.",
    overview: [
      "These systems manage power distribution, protect electrical assets and control motor-driven equipment.",
      "They support safe operation, standards compliance and continuity of service across industrial and infrastructure environments.",
    ],
    sections: [
      {
        title: "Eaton",
        items: [
          "Low-voltage switchgear",
          "Motor control",
          "Electrical protection",
          "Power distribution",
          "Industrial electrical products",
        ],
      },
    ],
    whyCentralian: [
      "Supplies genuine Eaton switchgear and motor control products.",
      "Maintains local stock holdings to support availability.",
      "Assists with product selection and procurement.",
    ],
    cta:
      "Talk to our team about Eaton switchgear and motor control products.",
  },
  {
    slug: "wireless-iot-sensors-remote-monitoring",
    title: "Wireless IoT Sensors & Remote Monitoring",
    category: "Remote Monitoring",
    icon: Wifi,
    headline: "Unlocking Data from Remote and Hard-to-Reach Assets",
    shortDescription:
      "Wireless sensing and remote monitoring for distributed industrial assets.",
    description:
      "Wireless IoT sensor solutions support remote monitoring of critical assets across energy, water and industrial applications.",
    overview: [
      "These solutions enable rapid deployment without extensive cabling or infrastructure.",
      "Sensors monitor pressure, temperature, level, vibration and position, providing real-time data for visibility and decision-making.",
    ],
    sections: [
      {
        title: "EDGE SENSAiO",
        items: [
          "Wireless sensors",
          "Hazardous-area sensing",
          "Pressure, temperature, level and environmental monitoring",
        ],
      },
      {
        title: "Advantech",
        items: [
          "Wireless sensing",
          "IoT gateways",
          "Field data acquisition",
          "Industrial monitoring architectures",
        ],
      },
    ],
    whyCentralian: [
      "Combines practical experience in wireless IoT sensing applications.",
      "Provides access to EDGE SENSAiO and Advantech technologies.",
      "Supports deployment across remote and hazardous environments.",
      "Aligns sensors with communications, control systems and industrial applications.",
    ],
    cta:
      "Talk to our team about wireless IoT sensor solutions and remote monitoring.",
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}