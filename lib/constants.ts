export const heroRotatingWords = ["D2C Brands", "eCommerce", "B2B Enterprises", "Your Business"];

export const heroStats = [
  { label: "Pin Codes", value: 18800, suffix: "+" },
  { label: "Parcels Delivered", value: 2.1, suffix: "B+", isDecimal: true },
  { label: "Sq Ft Network", value: 7, suffix: "Mn+" },
  { label: "Countries", value: 220, suffix: "+" },
];

export type NavItem = {
  label: string;
  href: string;
  dropdown?: { heading?: string; items: { label: string; href: string; badge?: string }[] }[];
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        items: [
          { label: "Express Parcel", href: "/services/express-parcel" },
          { label: "Warehousing", href: "/services/warehousing" },
          { label: "Part Truckload", href: "/services/part-truckload" },
          { label: "Full Truckload", href: "/services/full-truckload" },
          { label: "International", href: "/services/international" },
          { label: "Local Delivery", href: "/services/local-delivery" },
          { label: "TransportOne", href: "/services/transportone" },
          { label: "Data Intelligence", href: "/services/data-intelligence" },
          { label: "Nexpres Maps", href: "/services/maps", badge: "Beta" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      {
        items: [
          { label: "D2C Brands", href: "/solutions/d2c" },
          { label: "Personal Courier", href: "/solutions/personal-courier" },
          { label: "B2B Enterprises", href: "/solutions/b2b" },
          { label: "RTO Predictor", href: "/solutions/rto-predictor" },
        ],
      },
    ],
  },
  {
    label: "Partner",
    href: "/partner",
    dropdown: [
      {
        items: [
          { label: "Franchise Opportunities", href: "/partner/franchise" },
          { label: "Delivery Partner", href: "/partner/delivery" },
          { label: "Fleet Owners", href: "/partner/fleet" },
          { label: "Nexpres School of Logistics", href: "/partner/school" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    dropdown: [
      {
        items: [
          { label: "About Us", href: "/company/about" },
          { label: "Governance", href: "/company/governance" },
          { label: "Press Release", href: "/company/press" },
          { label: "Careers", href: "/company/careers" },
          { label: "Blog", href: "/company/blog" },
        ],
      },
    ],
  },
  { label: "Investors", href: "/investors" },
  { label: "Track", href: "/track" },
  { label: "Support", href: "/support" },
];

export type ServiceKey =
  | "express-parcel"
  | "warehousing"
  | "part-truckload"
  | "full-truckload"
  | "international"
  | "local-delivery"
  | "transportone"
  | "data-intelligence"
  | "maps";

export const services: {
  key: ServiceKey;
  tabLabel: string;
  icon: "Package" | "Warehouse" | "Truck" | "TruckIcon" | "Globe" | "MapPin" | "Route" | "BarChart3" | "Map";
  title: string;
  description: string;
  features: string[];
  stat: string;
  badge?: string;
}[] = [
  {
    key: "express-parcel",
    tabLabel: "Express Parcel",
    icon: "Package",
    title: "The fastest way to ship to every part of India",
    description:
      "Reliable, next-day express parcel delivery built for brands that can't afford delays — with real-time visibility at every step.",
    features: [
      "B2B / B2C / C2C shipping",
      "COD orders supported",
      "Built for D2C brands",
      "Bulk order handling",
      "RTO reduction tools",
      "Real-time tracking",
    ],
    stat: "Next Day Delivery to 18,800+ pincodes",
  },
  {
    key: "warehousing",
    tabLabel: "Warehousing",
    icon: "Warehouse",
    title: "Stock closer to your customers",
    description:
      "A pan-India fulfilment network that shortens delivery times and reduces freight cost, fully integrated with Parcel and Freight.",
    features: [
      "7Mn+ sq ft of warehousing",
      "Multi-tenant facilities",
      "End-to-end fulfilment",
      "Integrated with Parcel & Freight",
    ],
    stat: "7 Million+ sq ft network",
  },
  {
    key: "part-truckload",
    tabLabel: "Part Truckload",
    icon: "Truck",
    title: "Move B2B freight faster across India",
    description:
      "India's largest express PTL network, moving freight door-to-door and hub-to-hub with full shipment visibility.",
    features: [
      "Door-to-door delivery",
      "Hub-to-hub network",
      "Multi-modal transport",
      "DIY client dashboard",
    ],
    stat: "Largest Express PTL Network",
  },
  {
    key: "full-truckload",
    tabLabel: "Full Truckload",
    icon: "TruckIcon",
    title: "Dedicated truckloads, zero compromises",
    description:
      "Full truckload freight solutions with dedicated vehicles, live GPS tracking and guaranteed capacity for large shipments.",
    features: [
      "Dedicated vehicle capacity",
      "Live GPS tracking",
      "Flexible vehicle types",
      "Pan-India coverage",
    ],
    stat: "10,000+ vehicles on network",
  },
  {
    key: "international",
    tabLabel: "International",
    icon: "Globe",
    title: "Ship globally with Nexpres",
    description:
      "Cross-border express and freight shipping with full customs clearance support, air and sea options, and global tracking.",
    features: [
      "220+ Countries & Territories",
      "Full customs support",
      "Air & Sea freight",
      "Real-time global tracking",
    ],
    stat: "220+ Countries & Territories",
  },
  {
    key: "local-delivery",
    tabLabel: "Local Delivery",
    icon: "MapPin",
    title: "Hyperlocal delivery, same day",
    description:
      "Fast intra-city delivery for last-mile and same-day commerce, built for hyperlocal and quick-commerce businesses.",
    features: [
      "Same-day delivery",
      "Hyperlocal network",
      "Live rider tracking",
      "Flexible pickup slots",
    ],
    stat: "Same Day Delivery in 50+ cities",
  },
  {
    key: "transportone",
    tabLabel: "TransportOne",
    icon: "Route",
    title: "One platform for all your transport needs",
    description:
      "A unified digital freight platform connecting shippers with verified fleet owners for transparent, efficient transport.",
    features: [
      "Verified fleet network",
      "Transparent pricing",
      "Digital freight booking",
      "End-to-end visibility",
    ],
    stat: "50,000+ verified trucks",
  },
  {
    key: "data-intelligence",
    tabLabel: "Data Intelligence",
    icon: "BarChart3",
    title: "Logistics decisions, powered by data",
    description:
      "Actionable analytics across your shipping network — serviceability, RTO risk, delivery performance and more.",
    features: [
      "Serviceability insights",
      "RTO risk prediction",
      "Delivery performance analytics",
      "Custom dashboards",
    ],
    stat: "99.9% data accuracy",
  },
  {
    key: "maps",
    tabLabel: "Nexpres Maps",
    icon: "Map",
    title: "Hyperlocal mapping built for Indian addresses",
    description:
      "Nexpres Maps resolves incomplete and non-standard Indian addresses into precise delivery points, improving first-attempt delivery success across even the toughest pincodes.",
    features: [
      "AI-powered address resolution",
      "Hyperlocal pincode boundaries",
      "Rider navigation optimisation",
      "Plug-in API for any platform",
    ],
    stat: "Currently in Beta",
    badge: "Beta",
  },
];

export type ServiceVisual =
  | { kind: "photo"; src: string; focal: string }
  | { kind: "diagram" };

export const serviceVisuals: Record<ServiceKey, ServiceVisual> = {
  "express-parcel": {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed",
    focal: "center 35%",
  },
  warehousing: {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c",
    focal: "center 35%",
  },
  "part-truckload": {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1737713715449-07fef38d11e5",
    focal: "center 70%",
  },
  "full-truckload": {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1564957341116-ab017c60daca",
    focal: "center 65%",
  },
  international: {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1613690399151-65ea69478674",
    focal: "center",
  },
  "local-delivery": {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1788985375169-1cfe5ea940d0",
    focal: "center 30%",
  },
  transportone: {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1544451905-c7f1a9130570",
    focal: "center",
  },
  "data-intelligence": {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    focal: "center",
  },
  maps: {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1594935975218-a3596da034a3",
    focal: "center",
  },
};

export type GalleryItem =
  | { kind: "photo"; src: string; focal: string; caption: string }
  | {
      kind: "concept";
      icon: "Route" | "BarChart3" | "Map" | "Package" | "Truck" | "MapPin";
      caption: string;
    };

export const serviceGallery: Record<ServiceKey, GalleryItem[]> = {
  "express-parcel": [
    { kind: "photo", src: "https://images.unsplash.com/photo-1549194388-f61be84a6e9e", focal: "center", caption: "Processing — scanned, sorted and routed" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1790364757239-2bd1ab3b5f31", focal: "center", caption: "Transportation — moving toward its destination" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55", focal: "center", caption: "Last-Mile Delivery — reaching the customer" },
  ],
  warehousing: [
    { kind: "photo", src: "https://images.unsplash.com/photo-1622030411594-c282a63aa1bc", focal: "center", caption: "Storage — organized in appropriate locations" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1622127739239-1905bbaa21b8", focal: "center 30%", caption: "Picking & Packing — prepared for dispatch" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1668786710595-afc9d92f304e", focal: "center", caption: "Dispatch — handed over for transportation" },
  ],
  "part-truckload": [
    { kind: "photo", src: "https://images.unsplash.com/photo-1778015862504-b877b548266e", focal: "center", caption: "Consolidation — compatible shipments grouped together" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f", focal: "center 40%", caption: "Line-Haul Transportation — moving through the network" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1777793918890-0557166475bb", focal: "center", caption: "Final Delivery — separated at destination" },
  ],
  "full-truckload": [
    { kind: "photo", src: "https://images.unsplash.com/photo-1586781383963-8e66f88077ec", focal: "center", caption: "Suitable for Large Shipments" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1778016193071-c841d6a2fc6a", focal: "center 35%", caption: "Dedicated Capacity — no shared cargo" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a", focal: "center 30%", caption: "Better Shipment Control" },
  ],
  international: [
    { kind: "photo", src: "https://images.unsplash.com/photo-1571086291540-b137111fa1c7", focal: "center", caption: "International Transportation — by air" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10", focal: "center", caption: "International Transportation — by ocean" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1634646809203-f3b4adff9127", focal: "center", caption: "Documentation & Customs Coordination" },
  ],
  "local-delivery": [
    { kind: "photo", src: "https://images.unsplash.com/photo-1664353655022-35b9b0101d5f", focal: "center", caption: "Pickup — collected from your business location" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1", focal: "center 25%", caption: "Last-Mile Delivery — through the local network" },
    { kind: "photo", src: "https://images.unsplash.com/photo-1758523670564-d1d6a734dc0b", focal: "center", caption: "Delivery Confirmation" },
  ],
  transportone: [
    { kind: "concept", icon: "Route", caption: "Plan — map movement by shipment priority" },
    { kind: "concept", icon: "Truck", caption: "Assign — allocate vehicles and resources" },
    { kind: "concept", icon: "MapPin", caption: "Track — monitor shipment status" },
    { kind: "concept", icon: "BarChart3", caption: "Analyze — turn data into decisions" },
  ],
  "data-intelligence": [
    { kind: "concept", icon: "BarChart3", caption: "Transportation performance, by route" },
    { kind: "concept", icon: "Route", caption: "Delivery performance monitoring" },
    { kind: "concept", icon: "Package", caption: "Cost visibility across shipments" },
    { kind: "concept", icon: "Map", caption: "Network-wide insights" },
  ],
  maps: [
    { kind: "concept", icon: "Map", caption: "Visualize your network geographically" },
    { kind: "concept", icon: "MapPin", caption: "Discover location relationships" },
    { kind: "concept", icon: "Route", caption: "Analyze route and distribution data" },
  ],
};

export interface ServiceDetail {
  tagline: string;
  intro: string[];
  introHeading: string;
  offerings: string[];
  offeringsHeading: string;
  process: { title: string; body: string }[];
  processHeading: string;
  industries: string[];
  industriesHeading: string;
  whyHeading: string;
  whyBody: string;
  closingLine: string;
  faqs: { q: string; a: string }[];
  related: ServiceKey[];
}

export const serviceDetails: Record<ServiceKey, ServiceDetail> = {
  "express-parcel": {
    tagline: "Fast. Reliable. Delivered with Precision.",
    intro: [
      "When speed matters, every hour counts. NEXPRES Express Parcel provides fast, secure and dependable parcel delivery solutions designed for businesses that need their shipments to reach customers on time, every time.",
      "From important documents and small packages to e-commerce orders and time-sensitive consignments, our express delivery network helps businesses move parcels efficiently across locations.",
    ],
    introHeading: "Built for Businesses That Cannot Afford Delays",
    offerings: [
      "Door-to-door parcel delivery",
      "Time-sensitive shipment handling",
      "Business-to-business deliveries",
      "E-commerce parcel movement",
      "Scheduled and priority deliveries",
      "Shipment tracking and visibility",
      "Proof of delivery",
      "Secure handling of parcels",
      "Centralized shipment management",
      "Delivery status updates",
    ],
    offeringsHeading: "What We Offer",
    process: [
      { title: "Pickup", body: "Your shipment is collected from your warehouse, office, store or designated pickup location." },
      { title: "Processing", body: "The parcel is scanned, sorted and routed through the appropriate logistics network." },
      { title: "Transportation", body: "Our transportation network moves the shipment toward its destination using the most suitable route and service option." },
      { title: "Last-Mile Delivery", body: "The parcel reaches its final destination through an organized last-mile delivery process." },
      { title: "Confirmation", body: "Delivery status and proof of delivery are recorded, giving your business complete visibility." },
    ],
    processHeading: "How It Works",
    industries: ["E-commerce businesses", "Retailers", "Manufacturers", "D2C brands", "Distributors", "Corporate offices", "Spare-parts businesses", "Healthcare & essential-product businesses", "SMEs & growing enterprises"],
    industriesHeading: "Ideal For",
    whyHeading: "Why NEXPRES?",
    whyBody: "We don't simply move parcels. We help businesses create a dependable delivery experience. With technology-enabled tracking, operational visibility and scalable logistics solutions, NEXPRES helps you deliver faster while maintaining control over your shipments.",
    closingLine: "Your shipment moves fast. Your customers stay satisfied.",
    faqs: [
      { q: "What kind of shipments does Express Parcel cover?", a: "Documents, small packages, e-commerce orders and other time-sensitive consignments moving business-to-business, business-to-consumer or consumer-to-consumer." },
      { q: "Can I ship Cash on Delivery (COD) orders?", a: "Yes, COD orders are supported as part of the service, alongside prepaid shipments." },
      { q: "How do I know where my shipment is?", a: "Every shipment is scanned and tracked through pickup, processing, transportation and last-mile delivery, with status updates and proof of delivery recorded along the way." },
      { q: "Is this service suitable for bulk or recurring shipments?", a: "Yes — Express Parcel is built to handle bulk order volumes for D2C brands, e-commerce sellers and businesses with recurring shipping needs." },
    ],
    related: ["local-delivery", "part-truckload", "data-intelligence"],
  },
  "part-truckload": {
    tagline: "The Smart Way to Move Partial Loads.",
    intro: [
      "Not every shipment requires an entire truck. NEXPRES Part Truckload (PTL) solutions are designed for businesses that need to transport medium-sized or partial shipments efficiently without paying for unused truck capacity.",
      "We consolidate compatible shipments and optimize transportation so your goods can move economically while maintaining visibility and operational control.",
    ],
    introHeading: "Efficient Transportation Without Full-Truck Costs",
    offerings: [
      "Partial-load transportation",
      "Multi-location shipment movement",
      "Hub-and-spoke transportation",
      "Freight consolidation",
      "Scheduled transportation",
      "Intercity freight movement",
      "Shipment tracking",
      "Digital proof of delivery",
      "Route optimization",
      "Delivery coordination",
    ],
    offeringsHeading: "Our PTL Solutions Include",
    process: [
      { title: "Shipment Collection", body: "Goods are collected from your facility according to the agreed schedule." },
      { title: "Consolidation", body: "Compatible shipments are consolidated to make better use of available transportation capacity." },
      { title: "Optimized Routing", body: "Technology and operational planning help determine efficient routes and movement plans." },
      { title: "Line-Haul Transportation", body: "The consolidated freight travels toward its destination through the NEXPRES network." },
      { title: "Final Delivery", body: "Shipments are separated at the appropriate location and delivered to their respective destinations." },
    ],
    processHeading: "How NEXPRES PTL Works",
    industries: ["Manufacturers", "Distributors", "FMCG businesses", "Retail chains", "Industrial suppliers", "Automotive suppliers", "E-commerce companies", "SMEs", "Recurring medium-volume shippers"],
    industriesHeading: "Perfect For",
    whyHeading: "The NEXPRES Advantage",
    whyBody: "With PTL, the objective isn't simply to put more shipments on a truck. It is about making transportation smarter. NEXPRES focuses on better utilization, route efficiency, shipment visibility and dependable execution.",
    closingLine: "Move more. Waste less. Optimize every trip.",
    faqs: [
      { q: "What is Part Truckload (PTL) and when should I use it?", a: "PTL is for shipments that don't require a full truck. If your load is medium-sized or partial, PTL lets you move it without paying for unused capacity." },
      { q: "How are shipments consolidated?", a: "Compatible shipments heading in similar directions are grouped together to make better use of available transportation capacity." },
      { q: "Will my shipment move through a hub?", a: "Yes, PTL typically moves through a hub-and-spoke network — consolidation at a hub, line-haul transportation, then separation and final delivery at destination." },
      { q: "Can I track a PTL shipment?", a: "Yes, shipment tracking and digital proof of delivery are included so you have visibility from collection to final delivery." },
    ],
    related: ["full-truckload", "transportone", "express-parcel"],
  },
  "full-truckload": {
    tagline: "Dedicated Capacity. Direct Movement. Maximum Control.",
    intro: [
      "When your shipment requires an entire vehicle, NEXPRES Full Truckload (FTL) provides dedicated transportation designed around your cargo requirements.",
      "FTL transportation minimizes unnecessary handling and enables businesses to move large shipments directly from origin to destination.",
    ],
    introHeading: "Transportation Designed Around Your Shipment",
    offerings: [
      "Dedicated truck transportation",
      "Factory-to-warehouse movement",
      "Warehouse-to-distribution-center transportation",
      "Intercity freight",
      "Distribution movements",
      "Dedicated fleet solutions",
      "Scheduled transportation",
      "Route planning",
      "Real-time shipment visibility",
      "Delivery confirmation",
    ],
    offeringsHeading: "Our Full Truckload Solutions",
    process: [
      { title: "Dedicated Capacity", body: "Your shipment gets dedicated vehicle capacity without sharing the truck with unrelated cargo." },
      { title: "Fewer Handling Points", body: "Direct transportation can reduce unnecessary loading, unloading and transfer points." },
      { title: "Better Shipment Control", body: "Businesses can plan transportation around their own requirements." },
      { title: "Suitable for Large Shipments", body: "FTL is ideal for high-volume, heavy or space-intensive consignments." },
    ],
    processHeading: "Why Choose Full Truckload?",
    industries: ["Manufacturing", "Automotive", "FMCG", "Retail", "Industrial equipment", "Consumer electronics", "Building materials", "Agriculture", "E-commerce", "Distribution businesses"],
    industriesHeading: "Industries We Serve",
    whyHeading: "From Pickup to Delivery",
    whyBody: "NEXPRES coordinates the complete transportation journey — from vehicle allocation and pickup scheduling to route management and final delivery.",
    closingLine: "The right truck. The right route. The right destination.",
    faqs: [
      { q: "When should I choose Full Truckload over Part Truckload?", a: "Choose FTL when your shipment is large, heavy or space-intensive enough to need a dedicated vehicle rather than sharing capacity with other shipments." },
      { q: "Does FTL reduce handling of my goods?", a: "Yes — because the vehicle is dedicated to your shipment, there are typically fewer loading, unloading and transfer points than shared-load transportation." },
      { q: "Can I schedule recurring FTL movements?", a: "Yes, scheduled transportation and route planning are part of the service for businesses with regular factory-to-warehouse or distribution movements." },
      { q: "How is my shipment tracked?", a: "Real-time shipment visibility and delivery confirmation are provided so you know where your dedicated truck is throughout the journey." },
    ],
    related: ["part-truckload", "transportone", "international"],
  },
  international: {
    tagline: "Move Beyond Borders With Confidence.",
    intro: [
      "International logistics involves more than moving cargo from one country to another. It requires coordination across transportation modes, documentation, customs processes, schedules and multiple stakeholders.",
      "NEXPRES International logistics solutions are designed to simplify cross-border movement and give businesses greater control over their global shipments.",
    ],
    introHeading: "Connecting Businesses to Global Markets",
    offerings: [
      "International freight coordination",
      "Import and export movement",
      "Air freight coordination",
      "Ocean freight coordination",
      "Cross-border transportation",
      "Shipment documentation support",
      "Cargo tracking",
      "Customs coordination",
      "Destination delivery coordination",
      "International shipment visibility",
    ],
    offeringsHeading: "International Logistics Solutions",
    process: [
      { title: "Origin", body: "Cargo is collected from the supplier, manufacturer or designated origin location." },
      { title: "Documentation", body: "Required shipment information and documentation are coordinated for the movement." },
      { title: "International Transportation", body: "Cargo is moved through the appropriate transportation mode based on shipment requirements." },
      { title: "Customs & Clearance", body: "The shipment moves through applicable customs and regulatory processes." },
      { title: "Destination", body: "Cargo is coordinated for delivery to the warehouse, distribution center or final destination." },
    ],
    processHeading: "A Connected International Journey",
    industries: ["Exporters", "Importers", "Manufacturers", "Global retailers", "E-commerce businesses", "Trading companies", "Industrial businesses", "Distributors", "SMEs entering international markets"],
    industriesHeading: "Built for Global Businesses",
    whyHeading: "Global Logistics. Local Attention.",
    whyBody: "International shipping can become complicated quickly. NEXPRES aims to simplify the process by coordinating the moving parts and providing greater shipment visibility.",
    closingLine: "Your business may cross borders. Your logistics shouldn't lose control.",
    faqs: [
      { q: "What's involved in shipping internationally with NEXPRES?", a: "Cargo collection at origin, documentation coordination, international transportation (air or ocean), customs and regulatory clearance, and coordinated delivery at destination." },
      { q: "Do you support both air and ocean freight?", a: "Yes, international shipments are coordinated through the transportation mode that best fits the shipment's requirements — air or sea." },
      { q: "Who handles customs clearance?", a: "Customs coordination is part of the service, helping the shipment move through applicable regulatory processes." },
      { q: "Can I track an international shipment end-to-end?", a: "Yes, international shipment visibility is provided from origin through to final destination delivery." },
    ],
    related: ["full-truckload", "part-truckload", "express-parcel"],
  },
  "local-delivery": {
    tagline: "Faster Deliveries. Closer Connections.",
    intro: [
      "Your customers are closer than ever — and they expect their orders to reach them quickly. NEXPRES Local Delivery solutions help businesses manage reliable last-mile and city-level transportation for parcels, products and commercial shipments.",
      "The final stage of logistics is often the most visible part of the customer experience. NEXPRES helps businesses build an efficient local delivery operation with structured pickup, route planning, delivery management and shipment visibility.",
    ],
    introHeading: "Designed for the Last Mile",
    offerings: [
      "Same-city delivery",
      "Last-mile delivery",
      "Scheduled delivery",
      "Business deliveries",
      "Retail distribution",
      "E-commerce delivery",
      "Store-to-customer delivery",
      "Warehouse-to-store delivery",
      "Reverse logistics coordination",
      "Proof of delivery",
    ],
    offeringsHeading: "Local Delivery Services",
    process: [
      { title: "Pickup", body: "Shipments are collected from your warehouse, store or business location." },
      { title: "Route Planning", body: "Deliveries are organized based on destination, priority and operational requirements." },
      { title: "Local Movement", body: "Shipments move through the local transportation network." },
      { title: "Last-Mile Delivery", body: "The shipment reaches the customer's doorstep, store or designated delivery location." },
      { title: "Delivery Confirmation", body: "The delivery is recorded with relevant status information." },
    ],
    processHeading: "From Your Door to Their Door",
    industries: ["E-commerce brands", "Retailers", "Restaurants & food businesses", "Pharmacies", "D2C companies", "Local manufacturers", "Distributors", "Service businesses", "Corporate offices"],
    industriesHeading: "Ideal For",
    whyHeading: "Why NEXPRES Local Delivery?",
    whyBody: "Local delivery isn't only about speed. It is about consistency. NEXPRES combines operational planning and technology to help businesses deliver a smoother customer experience.",
    closingLine: "Closer customers. Faster fulfillment. Better delivery experiences.",
    faqs: [
      { q: "What counts as a Local Delivery shipment?", a: "Same-city and intra-city movement — from store-to-customer and warehouse-to-store deliveries to scheduled business deliveries within a city." },
      { q: "Is same-day delivery available?", a: "Same-day delivery is part of the service where the route and schedule allow it, built around hyperlocal and quick-commerce needs." },
      { q: "How are delivery routes planned?", a: "Deliveries are organized based on destination, priority and operational requirements before the shipment moves through the local network." },
      { q: "Do you support reverse logistics (returns)?", a: "Yes, reverse logistics coordination is included for businesses that need return pickups handled as part of their local delivery operation." },
    ],
    related: ["express-parcel", "maps", "data-intelligence"],
  },
  transportone: {
    tagline: "One Platform. Complete Transportation Control.",
    intro: [
      "Managing transportation across multiple vehicles, routes, vendors and destinations can quickly become complicated. TransportOne brings transportation operations together through a centralized digital solution designed to give businesses greater visibility and control over their logistics network.",
      "Instead of managing transportation information across spreadsheets, phone calls, messages and disconnected systems, TransportOne creates a more structured way to manage your transportation operations.",
    ],
    introHeading: "Simplify Transportation Management",
    offerings: [
      "Vehicle allocation",
      "Transport planning",
      "Shipment assignments",
      "Route management",
      "Driver and vehicle information",
      "Shipment status",
      "Delivery tracking",
      "Transportation costs",
      "Performance monitoring",
      "Operational reporting",
    ],
    offeringsHeading: "TransportOne Helps You Manage",
    process: [
      { title: "Plan", body: "Create transportation requirements and plan movement according to shipment priorities." },
      { title: "Assign", body: "Allocate vehicles and transportation resources based on operational requirements." },
      { title: "Track", body: "Monitor shipment movement and transportation status." },
      { title: "Manage", body: "Identify operational exceptions and coordinate corrective action." },
      { title: "Analyze", body: "Use transportation data to understand performance and identify opportunities for improvement." },
    ],
    processHeading: "One View of Your Transportation Network",
    industries: ["Manufacturers", "Enterprises", "Distribution networks", "Retail businesses", "Logistics teams", "Supply-chain departments", "Fleet operators", "Multi-location businesses"],
    industriesHeading: "Built For",
    whyHeading: "Why TransportOne?",
    whyBody: "Transportation becomes easier to manage when information is connected. TransportOne helps organizations move from fragmented transportation management toward a more structured, technology-enabled operating model.",
    closingLine: "One platform. One operational view. Smarter transportation.",
    faqs: [
      { q: "Who is TransportOne built for?", a: "Businesses managing transportation across multiple vehicles, routes, vendors and destinations that want it centralized in one digital platform instead of spreadsheets and phone calls." },
      { q: "What can I manage through the platform?", a: "Vehicle allocation, transport planning, shipment assignments, route management, driver and vehicle information, delivery tracking and operational reporting." },
      { q: "Does TransportOne replace my existing fleet?", a: "No — it's a management layer that connects shippers with verified fleet owners and brings transportation operations into one structured view." },
      { q: "Can I see how my transportation network is performing?", a: "Yes, performance monitoring and operational reporting are part of the platform so you can analyze transportation data over time." },
    ],
    related: ["part-truckload", "full-truckload", "data-intelligence"],
  },
  warehousing: {
    tagline: "More Than Storage. A Smarter Place for Your Inventory.",
    intro: [
      "Warehousing is no longer simply about keeping products on shelves. Modern businesses need speed, accuracy, visibility and flexibility across their inventory operations.",
      "NEXPRES provides warehousing solutions designed to help businesses store, organize, process and move inventory efficiently.",
    ],
    introHeading: "Warehousing Built Around Your Business",
    offerings: [
      "Inventory storage",
      "Inbound receiving",
      "Goods inspection",
      "Put-away management",
      "Inventory organization",
      "Order processing",
      "Picking and packing",
      "Dispatch management",
      "Stock movement",
      "Inventory visibility",
      "Distribution support",
      "Reverse logistics",
    ],
    offeringsHeading: "Our Warehousing Solutions",
    process: [
      { title: "Inbound Receiving", body: "Goods arrive at the facility and are received into the warehouse process." },
      { title: "Quality & Quantity Check", body: "Inventory can be verified according to the defined operational process." },
      { title: "Storage", body: "Products are organized in appropriate storage locations." },
      { title: "Inventory Management", body: "Stock movement and inventory information are maintained for better operational visibility." },
      { title: "Order Processing", body: "Customer or business orders are processed for fulfillment." },
      { title: "Picking & Packing", body: "Products are picked, packed and prepared for dispatch." },
      { title: "Dispatch", body: "Completed orders are handed over for transportation and final delivery." },
    ],
    processHeading: "From Inbound to Outbound",
    industries: ["E-commerce", "FMCG", "Retail", "Manufacturing", "D2C brands", "Consumer electronics", "Automotive parts", "Industrial products", "Importers & exporters"],
    industriesHeading: "Suitable For",
    whyHeading: "The NEXPRES Difference",
    whyBody: "A warehouse should work as an extension of your supply chain. NEXPRES focuses on creating organized, efficient and technology-enabled warehouse operations that help businesses reduce complexity and improve fulfillment.",
    closingLine: "Store smarter. Fulfill faster. Move better.",
    faqs: [
      { q: "What warehousing stages does NEXPRES manage?", a: "The full cycle — inbound receiving, quality and quantity checks, storage, inventory management, order processing, picking and packing, and dispatch." },
      { q: "Is warehousing integrated with delivery?", a: "Yes, warehousing is fully integrated with Parcel and Freight services so stock can move from storage to final delivery without separate handoffs." },
      { q: "Do you support reverse logistics?", a: "Yes, reverse logistics is included as part of the warehousing solution for handling returns and reverse stock movement." },
      { q: "What kind of inventory visibility do I get?", a: "Stock movement and inventory information are maintained throughout the process for better operational visibility into what's in the warehouse and where it's headed." },
    ],
    related: ["part-truckload", "full-truckload", "transportone"],
  },
  "data-intelligence": {
    tagline: "Turn Logistics Data Into Better Decisions.",
    intro: [
      "Every shipment creates data. Every delivery creates a data point. Every route, vehicle, warehouse movement and transportation transaction tells a story about how your supply chain is performing.",
      "NEXPRES Data Intelligence helps businesses transform logistics data into meaningful insights that can support better operational decisions.",
    ],
    introHeading: "From Data to Decisions",
    offerings: [
      "Logistics performance analytics",
      "Shipment analysis",
      "Transportation analytics",
      "Delivery performance monitoring",
      "Route performance analysis",
      "Cost analysis",
      "Operational dashboards",
      "Exception monitoring",
      "Trend identification",
      "KPI reporting",
    ],
    offeringsHeading: "Our Data Intelligence Capabilities",
    process: [
      { title: "Transportation Performance", body: "Understand how your transportation network is performing across routes, locations and movements." },
      { title: "Delivery Performance", body: "Identify delivery patterns and monitor service performance." },
      { title: "Cost Visibility", body: "Analyze transportation-related costs and identify potential efficiency opportunities." },
      { title: "Operational Efficiency", body: "Discover recurring bottlenecks and areas where operational processes can improve." },
      { title: "Network Insights", body: "Use historical and operational data to understand how your logistics network behaves." },
    ],
    processHeading: "What Can You Understand?",
    industries: ["Enterprise supply chains", "Multi-location retailers", "Fleet-heavy operations", "3PL & logistics providers", "Manufacturing networks", "Distribution-led businesses"],
    industriesHeading: "Built for Modern Supply Chains",
    whyHeading: "Turn Questions Into Insights",
    whyBody: "Instead of simply asking \"Why are deliveries getting delayed?\", data can help you investigate which routes are affected, which locations experience repeated delays, what time periods show the highest exceptions, which transportation partners perform differently and where operational bottlenecks are occurring.",
    closingLine: "See the data. Understand the operation. Improve the decision.",
    faqs: [
      { q: "What kind of data does Data Intelligence analyze?", a: "Shipment, transportation, delivery and cost data generated across your logistics network — routes, vehicles, warehouse movement and transactions." },
      { q: "Can it help identify delivery delays?", a: "Yes — it helps you investigate which routes or locations experience repeated delays, which time periods show the highest exceptions, and where bottlenecks occur." },
      { q: "Do I need a technical team to use it?", a: "Insights are presented through operational dashboards and reporting built for logistics and supply-chain teams, not just data specialists." },
      { q: "Is this connected to RTO risk analysis?", a: "Yes, RTO risk prediction is one of the analytics capabilities, alongside delivery performance and route performance monitoring." },
    ],
    related: ["transportone", "maps", "express-parcel"],
  },
  maps: {
    tagline: "See Your Logistics Network Differently.",
    intro: [
      "NEXPRES Maps — BETA is a technology-driven mapping experience designed to bring logistics movement, locations and network information into a more visual environment.",
      "Instead of viewing logistics only as tables, numbers and shipment statuses, NEXPRES Maps helps businesses visualize their logistics network.",
    ],
    introHeading: "A Visual Layer for Modern Logistics",
    offerings: [
      "Locations",
      "Warehouses",
      "Delivery points",
      "Transportation routes",
      "Shipment movement",
      "Service areas",
      "Distribution networks",
      "Logistics hubs",
      "Geographic coverage",
    ],
    offeringsHeading: "Explore Your Logistics Network",
    process: [
      { title: "Visualize", body: "Understand your network through a geographic interface." },
      { title: "Discover", body: "Identify relationships between locations, routes and logistics operations." },
      { title: "Analyze", body: "Use geographic information to support transportation and distribution decisions." },
      { title: "Optimize", body: "Identify opportunities for better network planning and operational efficiency." },
    ],
    processHeading: "Designed for Better Visibility",
    industries: ["Network planners", "Distribution & logistics teams", "Multi-hub operators", "Regional fleet managers", "Supply-chain analysts"],
    industriesHeading: "Why Maps Matter in Logistics",
    whyHeading: "Built for the Future",
    whyBody: "NEXPRES Maps is currently in Beta, with capabilities evolving as we continue developing the platform. Our goal is to create a more intelligent and visual way for businesses to understand their logistics networks.",
    closingLine: "Your logistics network has a geography. Now you can see it.",
    faqs: [
      { q: "What does NEXPRES Maps actually show?", a: "Locations, warehouses, delivery points, transportation routes and service areas presented through a geographic, visual interface instead of tables and numbers." },
      { q: "Why is it in Beta?", a: "NEXPRES Maps is an evolving platform — capabilities are being developed and refined, so it's currently offered as a Beta feature." },
      { q: "Who benefits most from this?", a: "Network planners, distribution teams, multi-hub operators and supply-chain analysts who need to understand their network geographically, not just as a list of shipments." },
      { q: "Can I use Maps alongside Data Intelligence?", a: "Yes — Maps gives a geographic view of the network while Data Intelligence provides the performance analytics; the two complement each other." },
    ],
    related: ["local-delivery", "data-intelligence", "express-parcel"],
  },
};

export const solutionCards = [
  {
    icon: "ShoppingBag" as const,
    title: "D2C Brands",
    body: "Grow your direct-to-consumer brand with India's most reliable express parcel network and smart RTO tools.",
    href: "/solutions/d2c",
    features: [
      "Plug-and-play shipping API",
      "COD and prepaid support",
      "Branded tracking pages",
      "Smart RTO reduction tools",
    ],
  },
  {
    icon: "Send" as const,
    title: "Personal Courier",
    body: "Send personal packages door-to-door across India with real-time tracking and safe handling.",
    href: "/solutions/personal-courier",
    features: [
      "Doorstep pickup & delivery",
      "Real-time shipment tracking",
      "Safe, insured handling",
      "Transparent flat pricing",
    ],
  },
  {
    icon: "Building2" as const,
    title: "B2B Enterprises",
    body: "End-to-end supply chain solutions from suppliers to customers with full technology-powered visibility.",
    href: "/solutions/b2b",
    features: [
      "Multi-location fulfilment",
      "Dedicated account management",
      "Custom SLAs & reporting",
      "ERP & WMS integrations",
    ],
  },
  {
    icon: "LineChart" as const,
    title: "RTO Predictor",
    body: "Cut reverse logistics costs with an AI model that flags high-risk COD orders before they ship.",
    href: "/solutions/rto-predictor",
    features: [
      "AI-based RTO risk scoring",
      "Pre-dispatch order flagging",
      "Address quality checks",
      "Continuous model learning",
    ],
  },
];

export const networkHubs = [
  { name: "Delhi", x: 180, y: 95 },
  { name: "Jaipur", x: 150, y: 140 },
  { name: "Ahmedabad", x: 110, y: 230 },
  { name: "Mumbai", x: 115, y: 300 },
  { name: "Surat", x: 105, y: 265 },
  { name: "Pune", x: 140, y: 335 },
  { name: "Hyderabad", x: 195, y: 370 },
  { name: "Bangalore", x: 175, y: 450 },
  { name: "Chennai", x: 225, y: 460 },
  { name: "Kolkata", x: 300, y: 230 },
];

export const networkStats = [
  { icon: "MapPinned" as const, value: 18800, suffix: "+", label: "Pin Codes Served" },
  { icon: "Building" as const, value: 2500, suffix: "+", label: "Service Centers" },
  { icon: "Warehouse" as const, value: 24, suffix: "+", label: "Fulfillment Centers" },
  { icon: "Users" as const, value: 30000, suffix: "+", label: "Team Members" },
];

export const processSteps = [
  {
    icon: "Plug" as const,
    bg: "bg-navy",
    title: "Register & Integrate",
    body: "Connect your store via API or our DIY dashboard in minutes.",
  },
  {
    icon: "Warehouse" as const,
    bg: "bg-sky",
    title: "Stock Your Inventory",
    body: "Store goods in our 7Mn+ sq ft fulfillment center network.",
  },
  {
    icon: "ShoppingCart" as const,
    bg: "bg-light-blue",
    title: "Order Placed",
    body: "Customer places order — we auto-assign the optimal delivery route instantly.",
  },
  {
    icon: "CheckCircle" as const,
    bg: "bg-success",
    title: "Delivered",
    body: "Real-time tracked delivery to 18,800+ pin codes across India.",
  },
];

export const partnerCards = [
  {
    icon: "MapPin" as const,
    title: "Franchise Opportunities",
    body: "Own a Nexpres service center in your city",
    href: "/partner/franchise",
    features: [
      "Low-investment franchise model",
      "Full operational training",
      "Territory exclusivity",
      "Dedicated partner support",
    ],
  },
  {
    icon: "Bike" as const,
    title: "Delivery Partner",
    body: "Earn daily by delivering parcels in your area",
    href: "/partner/delivery",
    features: [
      "Flexible working hours",
      "Daily payouts",
      "Earnings & incentive bonuses",
      "In-app route optimisation",
    ],
  },
  {
    icon: "Truck" as const,
    title: "Fleet Owners",
    body: "Register your trucks for consistent freight contracts",
    href: "/partner/fleet",
    features: [
      "Consistent freight contracts",
      "Timely digital payments",
      "Pan-India load matching",
      "Vehicle tracking support",
    ],
  },
  {
    icon: "GraduationCap" as const,
    title: "Nexpres School of Logistics",
    body: "Get certified in supply chain & logistics",
    href: "/partner/school",
    features: [
      "Industry-recognised certification",
      "Online & in-person batches",
      "Hands-on warehouse training",
      "Placement assistance",
    ],
  },
];

export const brandLogos = Array.from({ length: 12 }, (_, i) => `Brand ${i + 1}`);

export const testimonials = [
  {
    quote:
      "Nexpres transformed our delivery operations. Our next-day delivery rate across tier-2 cities improved dramatically within the first quarter.",
    name: "Ananya Sharma",
    role: "Head of Supply Chain",
    company: "Veloura D2C",
  },
  {
    quote:
      "The warehousing and fulfilment network let us scale into new regions without building our own infrastructure. Game changer for our growth.",
    name: "Rohit Malhotra",
    role: "Founder & CEO",
    company: "Urban Nest Furnishings",
  },
  {
    quote:
      "Their RTO predictor alone saved us lakhs in reverse logistics costs. The data intelligence dashboard is something every D2C brand needs.",
    name: "Priya Nair",
    role: "COO",
    company: "Freshline Foods",
  },
  {
    quote:
      "From freight to last-mile, Nexpres is the single logistics partner we rely on across every region we operate in.",
    name: "Karan Mehta",
    role: "VP Operations",
    company: "Stratus Apparel",
  },
];

export const pressReleases = [
  {
    date: "Oct 12, 2026",
    category: "Product Launch",
    headline: "Nexpres launches TransportOne — a unified digital freight platform",
    excerpt:
      "The new platform connects shippers with verified fleet owners across India, bringing full transparency to freight pricing and booking.",
  },
  {
    date: "Sep 28, 2026",
    category: "Expansion",
    headline: "Nexpres crosses 7 million sq ft of fulfilment infrastructure",
    excerpt:
      "Milestone marks continued investment in pan-India warehousing to support the growing D2C and enterprise ecosystem.",
  },
  {
    date: "Sep 03, 2026",
    category: "Partnership",
    headline: "Nexpres partners with leading e-commerce marketplaces for 1-day delivery",
    excerpt:
      "The partnership extends next-day delivery guarantees to over 18,800 pin codes across the country.",
  },
  {
    date: "Aug 14, 2026",
    category: "Technology",
    headline: "Nexpres Maps enters public Beta for hyperlocal address resolution",
    excerpt:
      "The new mapping engine improves first-attempt delivery success by resolving incomplete Indian addresses with AI.",
  },
  {
    date: "Jul 22, 2026",
    category: "Sustainability",
    headline: "Nexpres commits to an EV-first last-mile fleet by 2028",
    excerpt:
      "The company outlines a phased rollout of electric delivery vehicles across its top 25 metro markets.",
  },
  {
    date: "Jun 30, 2026",
    category: "Recognition",
    headline: "Nexpres named among India's fastest-growing logistics companies",
    excerpt:
      "Industry recognition highlights the company's network expansion and technology-led delivery performance.",
  },
];

export const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
];
