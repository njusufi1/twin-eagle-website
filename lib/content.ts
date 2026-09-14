import {
  Building2,
  CheckCircle2,
  Clock3,
  CloudCog,
  DollarSign,
  Factory,
  Headphones,
  HeartPulse,
  Laptop,
  LineChart,
  MailCheck,
  Network,
  ClipboardCheck,
  ServerCog,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Why Partner", href: "/why-twin-eagle" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------------------
// The four pillars - cost, control, coverage, standards. This replaces the
// generic "trusted partnership" framing with the concrete, provable reasons
// a client should choose Twin Eagle over a US hire or an unguaranteed
// offshore vendor.
// ---------------------------------------------------------------------------
export const pillars = [
  {
    title: "Lower Cost, Same Standards",
    stat: "50%+",
    statLabel: "typical savings vs. a US hire",
    description:
      "Kosovo-based professionals at 50%+ below comparable US salaries, without cutting corners on skill, English fluency, or reliability.",
    icon: DollarSign,
  },
  {
    title: "You Approve Every Hire",
    stat: "100%",
    statLabel: "of placements you interview first",
    description:
      "We source and vet candidates, but nothing starts without your sign-off. You interview and approve before anyone joins your team.",
    icon: UserCheck,
  },
  {
    title: "The Coverage Guarantee",
    stat: "1 week",
    statLabel: "free replacement, unlimited",
    description:
      "If a placement doesn't work out, we replace them within a week at no additional cost, for the life of the engagement. No gap, no risk.",
    icon: ShieldCheck,
  },
  {
    title: "Built for Your Hours",
    stat: "US / CA / AU",
    statLabel: "coverage across time zones",
    description:
      "Schedules built around North American and Australian business hours, so your team gets real-time coverage, not a hand-off delay.",
    icon: Clock3,
  },
];

// ---------------------------------------------------------------------------
// The Coverage Guarantee - named, explicit policy. Terms are stated plainly
// so a skeptical buyer doesn't have to guess what "guarantee" means.
// ---------------------------------------------------------------------------
export const guarantee = {
  name: "The Coverage Guarantee",
  summary:
    "If a placed professional doesn't work out (performance issues, poor fit, or they leave), we replace them within one week at no additional cost, for the life of the placement. And you're never left short-handed: backup professionals are on standby, ready to step in immediately while we transition your replacement.",
  terms: [
    {
      label: "What's covered",
      detail: "Performance issues, poor fit, resignation, or termination: any reason a placement isn't working.",
    },
    {
      label: "Replacement speed",
      detail: "A qualified replacement within 1 week of confirming the change is needed.",
    },
    {
      label: "Interim coverage",
      detail: "Backup professionals are on standby and can step in immediately, so responsibilities don't drop while we transition.",
    },
    {
      label: "Duration",
      detail: "Unlimited. This guarantee applies for the full life of the placement, not just an initial window.",
    },
    {
      label: "Cost to you",
      detail: "None. Replacement and interim coverage are included at no additional charge.",
    },
  ],
};

// ---------------------------------------------------------------------------
// The 4-step process - reframes "client approves the hire" from a footnote
// into the differentiator it actually is versus a body-shop staffing model.
// ---------------------------------------------------------------------------
export const processSteps = [
  {
    title: "We source and vet",
    description: "Candidates are screened for skills, English fluency, and reliability before you ever see a profile.",
    icon: ClipboardCheck,
  },
  {
    title: "You interview and approve",
    description: "You talk to the candidate directly and make the final call. Nothing starts without your sign-off.",
    icon: UserCheck,
  },
  {
    title: "We onboard and integrate",
    description: "Contracts, payroll, and ramp-up are handled so your new team member is productive fast.",
    icon: Users,
  },
  {
    title: "Guaranteed coverage if needed",
    description: "Protected by the Coverage Guarantee: free replacement within a week, for the life of the placement.",
    icon: ShieldCheck,
  },
];

export const services = [
  {
    title: "Help Desk Support",
    description: "Responsive L1 and L2 support for end users, service desks, and MSP ticket queues.",
    items: ["Ticket triage", "User support", "Active Directory", "Remote troubleshooting"],
    icon: Headphones,
  },
  {
    title: "Microsoft 365 Administration",
    description: "Administration and support across the Microsoft cloud ecosystem.",
    items: ["Exchange Online", "SharePoint", "Teams", "Intune", "Email migrations"],
    icon: CloudCog,
  },
  {
    title: "Systems Administration",
    description: "Reliable system operations for Windows, endpoints, networks, and infrastructure.",
    items: ["Windows Server", "Networking", "Patch management", "Endpoint management"],
    icon: ServerCog,
  },
  {
    title: "Customer Support",
    description: "Professional customer-facing support delivered with clear communication.",
    items: ["Email support", "Chat support", "Phone support", "Escalation management"],
    icon: MailCheck,
  },
];

export const jobs = [
  {
    title: "Executive Assistant",
    type: "Full-time",
    location: "Kosovo-based candidates only",
    description:
      "Twin Eagle Technologies is looking for a highly organized Executive Assistant to support daily operations, scheduling, communication, documentation, and coordination across client and internal workstreams. This role is ideal for someone who is proactive, detail-oriented, comfortable communicating in English, and able to keep priorities moving with professionalism and discretion.",
    responsibilities: [
      "Manage calendars, meetings, follow-ups, and internal coordination",
      "Prepare documents, reports, notes, and client-ready materials",
      "Support recruiting, onboarding, and operational administration",
      "Track action items and help keep projects and conversations organized",
    ],
  },
  {
    title: "Tech Support Specialist",
    type: "Full-time",
    location: "Kosovo-based candidates only",
    description:
      "We are hiring Tech Support Specialists for Layer 1 and Layer 2 support roles. This position supports end users, service desks, and business teams through clear communication, accurate troubleshooting, ticket ownership, and reliable documentation. Candidates should be comfortable with Microsoft 365, Windows environments, remote support tools, and customer-facing technical communication.",
    responsibilities: [
      "Handle L1 and L2 tickets with clear documentation and timely updates",
      "Support Microsoft 365, Windows workstations, passwords, access, and common user issues",
      "Perform remote troubleshooting and escalate complex issues appropriately",
      "Communicate professionally with clients and internal technical teams",
    ],
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Kosovo-based candidates only",
    description:
      "Twin Eagle Technologies is seeking a Project Manager to coordinate technical initiatives, client deliverables, onboarding plans, and cross-functional tasks. The ideal candidate brings structure, strong English communication, ownership, and the ability to keep people, timelines, and priorities aligned.",
    responsibilities: [
      "Plan and coordinate technical projects, milestones, and deliverables",
      "Communicate updates, risks, dependencies, and next steps clearly",
      "Work with technical teams and clients to maintain execution visibility",
      "Improve processes, documentation, and delivery consistency",
    ],
  },
  {
    title: "Software Developer",
    type: "Full-time",
    location: "Kosovo-based candidates only",
    description:
      "We are looking for Software Developers who can build reliable, maintainable applications and contribute to client and internal technology initiatives. Candidates should have strong fundamentals, clean coding habits, comfort working with modern development tools, and the ability to collaborate in a professional delivery environment.",
    responsibilities: [
      "Develop, test, and maintain web applications, integrations, and internal tools",
      "Write clean, readable, and maintainable code",
      "Collaborate with project managers, support teams, and stakeholders",
      "Troubleshoot issues and contribute to technical documentation",
    ],
  },
];

export const fullServices = [
  {
    title: "Help Desk Support",
    body: "Dedicated L1 and L2 professionals who help MSPs and internal IT teams maintain responsive service levels.",
    items: ["Ticket management", "User support", "Password resets", "Active Directory", "Remote troubleshooting"],
    icon: Headphones,
  },
  {
    title: "Microsoft 365 Administration",
    body: "Practical Microsoft cloud administration for organizations that need dependable day-to-day coverage.",
    items: ["Exchange Online", "SharePoint", "Teams", "Intune", "Migrations", "Security"],
    icon: CloudCog,
  },
  {
    title: "Systems Administration",
    body: "Remote systems expertise for maintaining healthy infrastructure, endpoints, and business-critical services.",
    items: ["Windows Server", "Networking", "Monitoring", "Patching", "Backups"],
    icon: ServerCog,
  },
  {
    title: "Customer Support",
    body: "Clear, professional support for technology companies that need reliable customer communications.",
    items: ["Email support", "Chat support", "Phone support", "CRM systems"],
    icon: MailCheck,
  },
];

export const industries = [
  { title: "Managed Service Providers", description: "Extend help desk capacity and improve response times without long recruiting cycles.", icon: Network },
  { title: "SaaS Companies", description: "Add knowledgeable support professionals who understand technical products and customer expectations.", icon: Laptop },
  { title: "Healthcare", description: "Support operational teams with dependable technical assistance and disciplined communication.", icon: HeartPulse },
  { title: "Manufacturing", description: "Keep users, devices, and core systems supported across distributed environments.", icon: Factory },
  { title: "Professional Services", description: "Provide polished IT support for teams where responsiveness and trust matter.", icon: Building2 },
  { title: "Small and Mid-Sized Businesses", description: "Access skilled technical talent that scales with business needs.", icon: LineChart },
];

export const clientSuccess = [
  {
    title: "Managed Service Providers",
    description: "Helping MSPs expand service capacity and deliver exceptional support experiences.",
    icon: Network,
  },
  {
    title: "Professional Services",
    description: "Providing technical expertise and dependable support for client-focused teams.",
    icon: Building2,
  },
  {
    title: "Healthcare Organizations",
    description: "Supporting secure and reliable IT operations for organizations with high service expectations.",
    icon: HeartPulse,
  },
  {
    title: "SaaS Companies",
    description: "Delivering responsive technical support and administration services for growing platforms.",
    icon: Laptop,
  },
  {
    title: "Manufacturing Businesses",
    description: "Helping maintain productivity and operational continuity across users, endpoints, and systems.",
    icon: Factory,
  },
];

export const teamRoles = [
  {
    role: "Help Desk Specialist",
    specialty: "L1/L2 user support and ticket handling",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    role: "Microsoft 365 Administrator",
    specialty: "Exchange, Teams, SharePoint, and Intune",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    role: "Systems Engineer",
    specialty: "Windows Server, endpoints, and monitoring",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    role: "Technical Support Engineer",
    specialty: "Troubleshooting, escalation, and documentation",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    role: "Customer Success Specialist",
    specialty: "Client communication and support experience",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    role: "Project Coordinator",
    specialty: "Onboarding, reporting, and delivery alignment",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
];

export const whyCards = [
  {
    title: "North American Experience",
    text: "Over 8 years supporting US-based companies and understanding Western business culture.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Communication",
    text: "English-speaking professionals focused on customer satisfaction.",
    icon: CheckCircle2,
  },
  {
    title: "Dedicated Team Members",
    text: "Your technicians become extensions of your team.",
    icon: Users,
  },
  {
    title: "Flexible Scaling",
    text: "Expand your capabilities without lengthy recruiting cycles.",
    icon: Clock3,
  },
];

export const faqs = [
  {
    question: "What happens if a hire doesn't work out?",
    answer:
      "You're covered by the Coverage Guarantee. If a placement isn't meeting expectations, for any reason, at any point in the engagement, we provide a replacement within one week at no additional cost. Backup professionals are on standby and can step in immediately, so you're never stuck without coverage while we transition someone new in.",
  },
  {
    question: "Do we get to choose who we hire?",
    answer:
      "Yes. We source and vet candidates, but you interview and approve every placement before they start. Twin Eagle isn't a body-shop staffing model; nothing begins without your sign-off.",
  },
  {
    question: "How much can we actually save?",
    answer:
      "Clients typically save 50% or more compared to hiring the same role in the US, while working with professionals held to the same skill and communication standards.",
  },
  {
    question: "What services do you provide?",
    answer: "Twin Eagle Technologies provides Help Desk Support, Microsoft 365 Administration, Systems Administration, Customer Support, Technical Staffing, and dedicated remote IT professionals.",
  },
  {
    question: "How do dedicated technicians work?",
    answer: "Dedicated technicians integrate with your tools, workflows, escalation paths, and communication channels so they operate as an extension of your existing team.",
  },
  {
    question: "Do your team members speak English?",
    answer: "Yes. Communication quality is a core requirement, and team members are selected for strong English proficiency and professional client-facing standards.",
  },
  {
    question: "Can technicians work during North American business hours?",
    answer: "Yes. Coverage can be structured around North American business hours, with flexible scheduling based on client needs.",
  },
  {
    question: "How quickly can you provide talent?",
    answer: "Timelines depend on the role profile and coverage requirements, but the model is built to reduce hiring delays and provide qualified candidates efficiently.",
  },
  {
    question: "How do you ensure quality?",
    answer: "Quality is supported through careful candidate selection, clear onboarding, defined expectations, communication standards, and ongoing performance alignment, backed by the Coverage Guarantee if a placement doesn't work out.",
  },
  {
    question: "Where do you recruit talent?",
    answer: "Twin Eagle Technologies is based in Kosovo and currently recruits Kosovo-based professionals only.",
  },
  {
    question: "What industries do you support?",
    answer: "The company supports MSPs, SaaS companies, healthcare, manufacturing, professional services, small and mid-sized businesses, and technology organizations.",
  },
];

export const partnershipReasons = [
  {
    title: "Strong Communication",
    description: "Clear, professional communication across tickets, documentation, meetings, and escalations.",
    icon: CheckCircle2,
  },
  {
    title: "Technical Expertise",
    description: "Experienced professionals across Help Desk, Microsoft 365, systems administration, and customer support.",
    icon: ServerCog,
  },
  {
    title: "Flexible Support Models",
    description: "Engagements designed around client workflows, coverage requirements, and service expectations.",
    icon: Clock3,
  },
  {
    title: "Seamless Team Integration",
    description: "Dedicated professionals work inside client tools, processes, and operating rhythms.",
    icon: Users,
  },
  {
    title: "Long-Term Relationships",
    description: "A partnership model focused on dependable delivery, accountability, and continuous improvement.",
    icon: ShieldCheck,
  },
];
