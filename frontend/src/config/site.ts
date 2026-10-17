export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  isPrimary: boolean;
  category: 'DOOH' | 'Transit' | 'Outdoor' | 'Digital' | 'Events';
  features: string[];
  deliverables: string[];
  idealFor: string;
  locationsSample: string[];
  metricsSample: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  client: string;
  reach: string;
  image: string;
  description: string;
  dimensions?: string;
  executionTime?: string;
  tags?: string[];
  specs?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  campaignType: string;
  isSample: boolean; // Flagged clearly as sample placeholder per master prompt rules
}

export const SITE_CONFIG = {
  brand: {
    name: 'VR MEDIA & ADVERTISING',
    legalName: 'VR Media & Advertising Private Enterprise',
    tagline: 'CONNECTING BRANDS WITH PEOPLE',
    established: '2016',
    founder: {
      name: 'MELAM NAVEEN KUMAR',
      title: 'Founder & Proprietor',
      image: '/images/founder-naveen-kumar.jpg',
      bio: 'Visionary entrepreneur in Out-Of-Home (OOH) media infrastructure, transit advertising, and high-impact experiential brand activations across Andhra Pradesh, Telangana, and Pan-India networks.',
    },
  },
  contact: {
    phone1: '+91 92462 60400',
    phone2: '+91 97037 71117',
    phone1Raw: '+919246260400',
    phone2Raw: '+919703771117',
    email: 'vrmedia.naveen@gmail.com',
    whatsappUrl: 'https://wa.me/919246260400',
    address: {
      street: 'Prime Media Arcade, Road No. 36',
      area: 'Jubilee Hills / Banjara Hills Hub',
      city: 'Hyderabad & Vijayawada Hubs',
      state: 'Telangana & Andhra Pradesh',
      country: 'India',
      note: 'TODO: replace with exact registered head office address',
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121804.83296181282!2d78.38421869999999!3d17.4477532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8a77464cf%3A0x6b8b0e8b15d6c8b9!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000',
    socials: {
      linkedin: 'https://linkedin.com/company/vr-media-advertising-sample',
      instagram: 'https://instagram.com/vrmedia_advertising_sample',
      facebook: 'https://facebook.com/vrmediaadvertising.sample',
      twitter: 'https://twitter.com/vrmedia_sample',
      youtube: 'https://youtube.com/@vrmediaadvertising_sample',
    },
  },
  stats: [
    { value: '1,500+', label: 'Campaigns Delivered', suffix: '' },
    { value: '450+', label: 'High-Impact LED Screens', suffix: '' },
    { value: '40+', label: 'Railway Stations & Hubs', suffix: '' },
    { value: '98%', label: 'Client Retention Rate', suffix: '' },
  ],
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
    },
    { label: 'Contact', href: '/contact' },
  ],
  differentiators: [
    {
      title: 'Prime High-Footfall Locations',
      description: 'Exclusive arterial road junctions, prime transit concourses, and state-of-the-art railway platforms maximizing daily impressions.',
      icon: 'MapPin',
    },
    {
      title: 'End-to-End Turnkey Execution',
      description: 'From creative artwork and structural fabrication to government licensing, installation, and real-time photographic proof of display.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Transparent Pricing & ROI',
      description: 'No hidden agency markups. Direct site inventory ownership guarantees the most competitive media rates in the market.',
      icon: 'BarChart3',
    },
    {
      title: 'Ultra-Fast Turnaround',
      description: 'Rapid campaign rollout capabilities. Have your digital campaigns live across multiple screens in under 12 hours.',
      icon: 'Zap',
    },
    {
      title: 'Deep Regional & Local Expertise',
      description: 'Unmatched insights into consumer footfalls, regional demographics, and municipal regulations across South India.',
      icon: 'Compass',
    },
    {
      title: 'Creative + Media Under One Roof',
      description: 'Full-service graphic and motion design team engineering 3D anamorphic visuals, high-contrast print hoardings, and digital campaigns.',
      icon: 'Layers',
    },
  ],
  processSteps: [
    {
      step: '01',
      title: 'Strategic Brief & Audience Mapping',
      description: 'We analyze your target demographics, geographic priorities, and budget parameters to select the most impactful media inventory.',
    },
    {
      step: '02',
      title: 'Location & Inventory Selection',
      description: 'Curating prime LED screens, railway platform sites, and highway unipoles with verified daily traffic counts and maximum line-of-sight visibility.',
    },
    {
      step: '03',
      title: 'Creative Production & Flawless Rollout',
      description: 'High-resolution printing, LED color calibration, precision mounting, and live broadcast synchronization monitored by on-ground engineers.',
    },
    {
      step: '04',
      title: 'Audit, Proof of Performance & Analytics',
      description: 'Timestamped geo-tagged photo/video audits, uptime telemetry, estimated footfall impressions, and campaign post-evaluation reports.',
    },
  ],
  services: [
    {
      id: 'led-screen-advertising',
      slug: 'led-screen-advertising',
      title: 'LED Screen Advertising',
      shortDesc: 'Ultra-bright P4/P6 outdoor digital LED video walls and dynamic screens positioned at high-density traffic junctions.',
      longDesc: 'Transform passersby into engaged customers with high-definition digital outdoor LED screens. VR Media owns and operates top-tier commercial LED display boards boasting exceptional daytime visibility, vibrant color accuracy, and dynamic scheduling capabilities. Whether launching a product, broadcasting live score updates, or displaying high-impact motion commercials, our digital out-of-home (DOOH) network commands unbeatable brand recall.',
      iconName: 'Tv',
      isPrimary: true,
      category: 'DOOH',
      features: [
        'Ultra-high nit brightness (7,500+ nits) for crystal-clear sunlight visibility',
        'Dynamic time-of-day ad rotation and multi-creative scheduling',
        'High-resolution P4 and P6 outdoor waterproof LED modules',
        'Real-time broadcast monitoring and 99.8% uptime SLA',
      ],
      deliverables: [
        'Prime traffic junction screen slots (10s/20s/30s slots)',
        'Motion graphic formatting and aspect ratio optimization',
        'Geo-tagged broadcast logs and photographic verification',
      ],
      idealFor: 'Automotive brands, retail chains, real estate launches, and FMCG brands seeking high frequency and modern prestige.',
      locationsSample: ['Jubilee Hills Checkpost', 'Banjara Hills Road No. 1', 'Cyber Towers Junction', 'Benz Circle Vijayawada'],
      metricsSample: '450,000+ Daily Commuter Impressions per screen',
    },
    {
      id: 'railway-advertising',
      slug: 'railway-advertising',
      title: 'Railway Advertising',
      shortDesc: 'Captive audience branding across railway platforms, foot-over-bridges, concourses, and train wraps.',
      longDesc: 'Indian Railways represents the largest mass transit system in the world. VR Media brings exclusive and premier advertising opportunities across A1 and A category railway stations. From illuminated platform hoardings and Foot-Over-Bridge (FOB) arch boards to interior train panels and full train exterior livery vinyl wrapping, our railway media delivers guaranteed long dwell-time engagement with thousands of intercity travelers daily.',
      iconName: 'Train',
      isPrimary: true,
      category: 'Transit',
      features: [
        'Platform hoardings directly facing waiting passengers (15-45 minute average dwell time)',
        'High-visibility Foot-Over-Bridge (FOB) header and banister displays',
        'Main concourse illuminated backlit glow signs and drop-down banners',
        'Full train wraps and carriage interior brand immersion',
      ],
      deliverables: [
        'Exclusive railway division approved media sites',
        'Railway authority compliances, licenses, and permits handled 100%',
        'Heavy-duty all-weather anti-graffiti vinyl printing and mounting',
      ],
      idealFor: 'National consumer brands, education institutes, telecom operators, banking & finance, and consumer electronics.',
      locationsSample: ['Secunderabad Junction', 'Hyderabad Deccan', 'Vijayawada Central', 'Visakhapatnam Station', 'Tirupati Junction'],
      metricsSample: '1.2M+ Monthly Passenger Footfall per key junction',
    },
    {
      id: 'outdoor-advertising',
      slug: 'outdoor-advertising',
      title: 'Outdoor Advertising',
      shortDesc: 'Monolithic highway hoardings, illuminated unipoles, gantries, and street furniture in prime strategic corridors.',
      longDesc: 'Dominate the city skyline with traditional Out-Of-Home (OOH) media built to astronomical proportions. VR Media holds premier hoarding sites, cantilever unipoles, and skywalk branding rights across vital arterial roads, toll plazas, and expressways. Our structural integrity, high-grade illumination, and vantage point selection ensure your brand remains an inescapable landmark day and night.',
      iconName: 'Building2',
      isPrimary: true,
      category: 'Outdoor',
      features: [
        'Massive format hoardings (up to 80ft × 40ft) on vital expressway corridors',
        '360-degree rotation unipoles with dedicated LED floodlighting',
        'Toll plaza and flyover pillar consecutive brand dominance',
        'Engineered structural safety with certified wind-load tolerance',
      ],
      deliverables: [
        'Complete municipal body permissions & site leasing',
        'High-density frontlit/backlit heavy flex vinyl fabrication',
        'Night illumination maintenance and round-the-clock site inspection',
      ],
      idealFor: 'Real estate developers, mega retail outlets, jewelry brands, political campaigns, and hospital networks.',
      locationsSample: ['Outer Ring Road (ORR) Expressways', 'National Highway 65 & 44', 'Gachibowli Financial District', 'MG Road Vijayawada'],
      metricsSample: '350,000+ Daily Vehicular Traffic Volume',
    },
    {
      id: 'digital-marketing',
      slug: 'digital-marketing',
      title: 'Digital Marketing',
      shortDesc: 'Performance marketing, social media dominance, hyper-local geo-fenced mobile ads, and search visibility.',
      longDesc: 'Synergize your physical outdoor footprint with omnichannel digital precision. VR Media bridges the physical and virtual worlds through hyper-local mobile advertising (geo-fencing travelers around our billboard locations), high-converting Meta and Google ad funnels, influencer collaborations, and search engine dominance. We ensure prospects who see your billboard are retargeted immediately on their smartphones.',
      iconName: 'Share2',
      isPrimary: true,
      category: 'Digital',
      features: [
        'Geo-fenced mobile advertising targeting audiences within 500m of our physical hoardings',
        'Hyper-targeted Meta (Instagram/Facebook) and Google Search / Display campaigns',
        'Creative content production, reels, and video ad production',
        'Conversion-rate optimization and ROI lead generation funnels',
      ],
      deliverables: [
        'Multi-channel performance campaigns set up and managed by certified specialists',
        'Weekly analytics dashboards with ROAS and CAC transparency',
        'Lead qualification and CRM integration hooks',
      ],
      idealFor: 'D2C brands, luxury showrooms, healthcare centers, educational academies, and B2B enterprises.',
      locationsSample: ['Pan-India Geo-Targeting', 'Custom City Radius Fencing', 'Pincode-level Demographic Retargeting'],
      metricsSample: '4.8x Average Return on Ad Spend (ROAS)',
    },
    {
      id: 'events-promotions',
      slug: 'events-promotions',
      title: 'Events & Promotions',
      shortDesc: 'Turnkey event production, high-impact brand experiential pop-ups, sound & light staging, and public promotions.',
      longDesc: 'Bring your brand story to life in the physical realm with turnkey event planning and execution. VR Media designs, fabricates, and manages high-octane brand roadshows, mall activation setups, trade exhibitions, and outdoor consumer engagement stalls. With our own proprietary trussing, AV sound systems, LED video walls, and fabrication workshops, we eliminate intermediary costs while ensuring flawless stagecraft.',
      iconName: 'Sparkles',
      isPrimary: true,
      category: 'Events',
      features: [
        'Custom modular exhibition stalls and interactive experiential pavilions',
        'Full AV production: concert-grade sound, intelligent lighting, and P3 LED stage backdrops',
        'Permission acquisition from police, fire, and municipal authorities',
        'Trained brand promoters, emcees, hospitality crew, and on-site event managers',
      ],
      deliverables: [
        '3D stage and stall walkthrough designs prior to fabrication',
        'On-site live production crew and backup power generators',
        'Post-event engagement metrics and customer lead capture logs',
      ],
      idealFor: 'Product launches, government summits, automobile test drive roadshows, and retail festival promotions.',
      locationsSample: ['Hitex Exhibition Center', 'Hyderabad International Convention Centre (HICC)', 'Leading City Malls', 'Open Arenas'],
      metricsSample: '15,000+ Average Attendees per Mega Event',
    },
    {
      id: 'wedding-events',
      slug: 'wedding-events',
      title: 'Wedding Events',
      shortDesc: 'Bespoke grand wedding stages, royal mandap decor, cinematic lighting, and VIP celebrity event coordination.',
      longDesc: 'Celebrate lifelong milestones with regal grandeur and meticulous precision. VR Media delivers end-to-end luxury wedding design, including monumental entrance gateways, bespoke floral and theme-based mandap installations, concert-grade acoustic sound, and dazzling ambient illumination. We ensure every moment is picture-perfect while your family relaxes and celebrates.',
      iconName: 'HeartHandshake',
      isPrimary: false,
      category: 'Events',
      features: [
        'Magnificent theme-based wedding stage design and floral decor',
        'Cinematic LED video backdrops for wedding films and live telecasts',
        'Architectural lighting packages: uplighting, haze effects, and follow spots',
        'VIP hospitality management and bridal pathway coordination',
      ],
      deliverables: [
        'Full 3D visualization renders of wedding stage and mandap',
        'Dedicated 24/7 on-ground event director and logistical crew',
        'Complete sound, lighting, and power infrastructure setup',
      ],
      idealFor: 'Destination weddings, grand banquets, sangeet nights, and intimate luxury ceremonies.',
      locationsSample: ['Heritage Palaces', 'Luxury 5-Star Resorts', 'Convention Centers', 'Private Farmhouses'],
      metricsSample: '100% On-Time Stage Delivery Record',
    },
    {
      id: 'birthday-celebrations',
      slug: 'birthday-celebrations',
      title: 'Birthday Celebrations',
      shortDesc: 'Vibrant theme decors, customized backdrops, interactive kids entertainment, and milestone party coordination.',
      longDesc: 'Make birthdays unforgettable with breathtaking theme setups tailored for children, teens, and milestone adult jubilees. From enchanted fairy-tale castles and superhero arenas to chic adult cocktail lounges, VR Media constructs tailor-made balloon sculptures, 3D character props, dessert table styling, and dynamic lighting that spark pure joy.',
      iconName: 'Cake',
      isPrimary: false,
      category: 'Events',
      features: [
        'Tailored 3D theme backdrops with personalized neon name signage',
        'Interactive entertainment: magic shows, caricature artists, and game hosts',
        'Themed dessert bar styling, cake stands, and photo booth kiosks',
        'Synchronized sound and celebration confetti / cold-pyro effects',
      ],
      deliverables: [
        'Theme concept moodboard and prop sourcing',
        'Rapid 3-hour setup and post-party tear down',
        'Professional photographer / videographer coordination',
      ],
      idealFor: '1st Birthday Grand Milestones, 16th/18th/21st Celebrations, 50th/60th Jubilees.',
      locationsSample: ['Clubhouses', 'Private Residences', 'Boutique Cafes', 'Banquet Halls'],
      metricsSample: '500+ Joyous Birthdays Executed',
    },
    {
      id: 'corporate-events',
      slug: 'corporate-events',
      title: 'Corporate Events',
      shortDesc: 'Annual general meetings, leadership summits, dealer meets, gala dinners, and tech product unveilings.',
      longDesc: 'Project confidence, sophistication, and executive polish at your next corporate gathering. VR Media produces high-stakes annual shareholder meetings, tech summits, dealer conferences, and corporate award galas. We provide broadcast-quality audiovisual streaming, seamless registration desk operations, stagecraft, and branded collaterals that honor your company stature.',
      iconName: 'Briefcase',
      isPrimary: false,
      category: 'Events',
      features: [
        'State-of-the-art P2.5 indoor LED video walls with seamless multi-input switcher',
        'Acoustically tuned line-array sound systems with wireless podium microphones',
        'Digital delegate badge printing, RFID scanning, and reception branding',
        'Corporate gift hampers, trophy fabrication, and branded backdrops',
      ],
      deliverables: [
        'Complete event run-of-show timeline and technical stage direction',
        'Live video streaming to global branches and remote stakeholders',
        'Post-event feedback synthesis and photographic archive',
      ],
      idealFor: 'MNCs, tech conglomerates, financial institutions, and automotive dealership networks.',
      locationsSample: ['Five-Star Hotel Ballrooms', 'Trade Convention Centers', 'Corporate Campus Auditoriums'],
      metricsSample: 'Zero AV Glitch Protocol Guarantee',
    },
    {
      id: 'festivals-celebrations',
      slug: 'festivals-celebrations',
      title: 'Festivals & Celebrations',
      shortDesc: 'Grand community pandals, festival public lighting, cultural music shows, and holiday shopping carnivals.',
      longDesc: 'Celebrate India\'s rich cultural tapestry with monumental public festival infrastructure. VR Media handles large-scale religious and cultural celebrations, including Ganesh Utsav pandals, Diwali illumination lighting, Sankranti cultural fairs, Eid gatherings, and New Year Eve public countdown concerts. We bridge massive crowd management with stunning celebratory aesthetics.',
      iconName: 'PartyPopper',
      isPrimary: false,
      category: 'Events',
      features: [
        'Monumental themed pandal fabrication with weather-resistant materials',
        'High-voltage decorative LED street archways and public lighting displays',
        'Mega concert sound systems (covering 20,000+ audience capacity)',
        'Comprehensive barricading, emergency exits, and CCTV surveillance integration',
      ],
      deliverables: [
        'Police, fire, and municipal corporation permissions guidance',
        'Round-the-clock electrical safety monitoring and diesel generator redundancy',
        'Stage management for cultural music and dance performances',
      ],
      idealFor: 'Community associations, municipal bodies, cultural organizations, and festival sponsors.',
      locationsSample: ['Public Grounds', 'Temple Complexes', 'Town Plazas', 'City Center Thoroughfares'],
      metricsSample: '50,000+ Peak Footfall Safety Record',
    },
    {
      id: 'brand-activations',
      slug: 'brand-activations',
      title: 'Brand Activations & Promotions',
      shortDesc: 'High-converting retail mall stalls, mobile promotional canopies, college campus roadshows, and sampling drives.',
      longDesc: 'Put your product directly into the hands of qualified consumers. VR Media engineers high-impact field marketing campaigns that break through digital noise. From branded promotional canopies outside key IT parks to immersive interactive kiosks inside premier shopping malls, our activations spark genuine curiosity, trial, and direct sales velocity.',
      iconName: 'Megaphone',
      isPrimary: false,
      category: 'Outdoor',
      features: [
        'Custom eye-catching promotional canopies, demo tables, and pull-up banners',
        'Direct sampling stations with cold-chain storage or live product demonstrations',
        'Engaging touchscreens, digital spin-to-win games, and customer data collection apps',
        'Comprehensive crew recruitment, uniform branding, and sales briefing',
      ],
      deliverables: [
        'Mall and tech park space leasing permissions negotiated at preferred rates',
        'Daily qualified lead sheets and consumer trial survey data',
        'High-res photo and video reels for digital marketing amplification',
      ],
      idealFor: 'FMCG goods, beverage brands, mobile apps, fintech cards, and automotive test drives.',
      locationsSample: ['Inorbit Mall', 'Forum Sujana Mall', 'Mindspace IT Hub', 'Major Metro Rail Stations'],
      metricsSample: '3,000+ Direct Product Samplings per weekend',
    },
  ],
  testimonials: [
    {
      id: 't-1',
      clientName: 'Suresh Varma',
      company: 'Apex Realty Developers',
      role: 'Head of Marketing',
      content: 'VR Media delivered our mega residential project launch campaign across 15 prime outdoor hoardings and 4 LED screens in Hyderabad. The visual impact was colossal, directly resulting in a 40% jump in site visit inquiries within the first 10 days.',
      rating: 5,
      campaignType: 'Outdoor & LED Advertising',
      isSample: true, // TODO: replace with client quote
    },
    {
      id: 't-2',
      clientName: 'Pooja Reddy',
      company: 'Sri Chaitanya Educational Institutes',
      role: 'Director of Brand Communications',
      content: 'The railway station advertising campaign managed by Melam Naveen Kumar and his team at Secunderabad and Vijayawada stations provided unprecedented visibility during our admissions cycle. Truly end-to-end execution with flawless reporting.',
      rating: 5,
      campaignType: 'Railway Transit Advertising',
      isSample: true, // TODO: replace with client quote
    },
    {
      id: 't-3',
      clientName: 'K. R. Rao',
      company: 'TechSphere Mobility',
      role: 'Vice President of Growth',
      content: 'The dual combination of outdoor LED video walls synchronized with geo-fenced digital mobile marketing gave us an unbeatable presence. VR Media is our go-to agency for any high-stakes media launch in South India.',
      rating: 5,
      campaignType: 'DOOH & Digital Marketing',
      isSample: true, // TODO: replace with client quote
    },
    {
      id: 't-4',
      clientName: 'Anita Murthy',
      company: 'GreenLeaf Organics',
      role: 'Brand Manager',
      content: 'From mall activation setup to on-ground promoters, the events team handled everything seamlessly. We sampled over 8,000 shoppers in just two days with zero operational hiccups.',
      rating: 5,
      campaignType: 'Brand Activation & Events',
      isSample: true, // TODO: replace with client quote
    },
  ],
  portfolio: [
    {
      id: 'p-1',
      title: 'Mega Highway Unipole Campaign',
      category: 'Outdoor Advertising',
      categorySlug: 'outdoor-advertising',
      location: 'Hyderabad Outer Ring Road (ORR)',
      client: 'Luxury Automotive Brand',
      reach: '500,000+ Commuters / Day',
      image: '/images/portfolio/portfolio-highway-unipole.jpg',
      description: 'Monolithic illuminated double-sided unipole positioned at the prime toll corridor ensuring 24/7 high-speed line of sight.',
      dimensions: '60ft × 30ft Monolith',
      executionTime: '24 Hours Turnaround',
      tags: ['Highway Unipole', 'Night Floodlit', 'Toll Plaza Vantage'],
      specs: 'Certified Wind-Load Structural Engineering • 360° Visibility',
    },
    {
      id: 'p-2',
      title: 'Digital LED Curved Video Wall',
      category: 'LED Screen Advertising',
      categorySlug: 'led-screen-advertising',
      location: 'Jubilee Hills Prime Arterial Crossing',
      client: 'Premium Smartphone Brand',
      reach: '350,000+ Impressions / Day',
      image: '/images/portfolio/portfolio-curved-led.jpg',
      description: 'P4 high-refresh rate outdoor LED billboard with 4K motion loop scheduling delivering staggering color vibrancy.',
      dimensions: '40ft × 20ft (Curved P4)',
      executionTime: 'Continuous 30-Day Run',
      tags: ['4K Dynamic DOOH', '7,500 Nits Brightness', 'Daylight Calibration'],
      specs: 'Dynamic Loop Scheduling • Real-Time Broadcast Telemetry',
    },
    {
      id: 'p-3',
      title: 'Grand Concourse Railway Branding',
      category: 'Railway Advertising',
      categorySlug: 'railway-advertising',
      location: 'Secunderabad Central Junction',
      client: 'Leading Regional Banking Network',
      reach: '900,000+ Monthly Footfalls',
      image: '/images/portfolio/portfolio-railway-branding.jpg',
      description: 'High-density illuminated glow signs and archway pillars greeting passengers across platforms 1 to 5.',
      dimensions: '12 Consecutive Pillar Displays',
      executionTime: '90-Day Campaign',
      tags: ['Transit Domination', 'Concourse Backlit', 'High Dwell Time'],
      specs: 'A1 Station Railway Board Clearances • Long Dwell Exposure',
    },
    {
      id: 'p-4',
      title: 'Experiential Mall Pop-Up & Sampling',
      category: 'Events & Promotions',
      categorySlug: 'events-promotions',
      location: 'Premier Inorbit Mall Atrium',
      client: 'FMCG Beverage Launch',
      reach: '45,000+ Weekend Interactions',
      image: '/images/portfolio/portfolio-mall-activation.jpg',
      description: 'Custom fabricated 3D walk-through booth with interactive digital prize wheels and chilled product sampling bar.',
      dimensions: '20ft × 20ft Island Pavilion',
      executionTime: '3-Day Weekend Activation',
      tags: ['Experiential Atrium', 'Live Product Trial', 'AV Sound & Lights'],
      specs: 'Turnkey Fabrication • Promoters Briefing • Lead Capture',
    },
    {
      id: 'p-5',
      title: 'Omnichannel Geo-Fenced Mobile Sync',
      category: 'Digital Marketing',
      categorySlug: 'digital-marketing',
      location: 'Hi-Tech City Corridor',
      client: 'Fintech Credit Platform',
      reach: '1.2M+ Targeted Digital Impressions',
      image: '/images/portfolio/portfolio-mobile-marketing.jpg',
      description: 'Hyper-local geofenced ads triggered on mobile apps as commuters passed our physical outdoor billboards.',
      dimensions: 'Multi-Channel Campaign (Meta/Google)',
      executionTime: '6-Week Performance Sprint',
      tags: ['Geo-Fencing 500m', '4.8x Avg ROAS', 'Conversion Funnels'],
      specs: 'Geo-Radius Mobile Sync • Real-Time Attribution Analytics',
    },
    {
      id: 'p-6',
      title: 'Annual Executive Leadership Gala',
      category: 'Corporate Events',
      categorySlug: 'corporate-events',
      location: 'HICC Novotel Grand Ballroom',
      client: 'Global Software Enterprise',
      reach: '1,200 Executive Delegates',
      image: '/images/portfolio/portfolio-corporate-gala.jpg',
      description: 'Turnkey stage design with 50ft P2.5 indoor LED backdrop, intelligent beam lighting, and seamless live broadcast.',
      dimensions: '60ft × 16ft Main Stage',
      executionTime: 'Overnight Setup & Flawless Show',
      tags: ['P2.5 Indoor LED', 'Line-Array Acoustics', 'Live Broadcast'],
      specs: 'Broadcast Switcher • RFID Badging • Zero-Glitch Protocol',
    },
    {
      id: 'p-7',
      title: 'Regal Destination Wedding Staging',
      category: 'Wedding Events',
      categorySlug: 'events-promotions',
      location: 'Heritage Palace Resort',
      client: 'VIP Private Client',
      reach: '2,500 Elite Guests',
      image: '/images/portfolio/portfolio-wedding-events.jpg',
      description: 'Monumental themed floral mandap, concert-grade acoustic line arrays, and panoramic LED cinematic wedding films.',
      dimensions: 'Palace Courtyard Full Takeover',
      executionTime: '36 Hours Turnkey Production',
      tags: ['Royal Mandap', 'Architectural Staging', 'VIP Hospitality'],
      specs: 'Full 3D Stage Renders • 24/7 Production Director on Ground',
    },
    {
      id: 'p-8',
      title: 'Mega City Festival Pandals & Illumination',
      category: 'Festivals & Celebrations',
      categorySlug: 'events-promotions',
      location: 'Central Thoroughfare & Public Grounds',
      client: 'Cultural Festival Committee',
      reach: '50,000+ Daily Visitors',
      image: '/images/portfolio/portfolio-festivals-celebrations.jpg',
      description: 'Massive all-weather decorative street lighting archways, heavy-duty barricading, and public sound reinforcement.',
      dimensions: '500m Continuous Street Archways',
      executionTime: '10-Day Festival Dominance',
      tags: ['Public Festival', 'Street Illumination', 'Municipal Clearances'],
      specs: 'Police & Fire Permissions • Round-the-Clock Power Generators',
    },
    {
      id: 'p-9',
      title: 'IT Park Direct Sampling Roadshow',
      category: 'Brand Activations',
      categorySlug: 'outdoor-advertising',
      location: 'Mindspace & Cyber Gateway Hubs',
      client: 'National Energy Beverage Brand',
      reach: '25,000+ Verified Samplings',
      image: '/images/portfolio/portfolio-brand-activations.jpg',
      description: 'Branded promotional canopies, interactive touch game kiosks, and cold-chain sample distribution for young tech professionals.',
      dimensions: 'Multi-Hub Canopy Deployment',
      executionTime: '5-Day Corporate Corridor Drive',
      tags: ['Direct Sampling', 'Qualified Leads', 'Tech Park Permissions'],
      specs: 'Mall & Tech Park Space Leasing • Daily Consumer Trial Logs',
    },
  ],
  clientsMarquee: [
    { name: 'Apex Realty Group', category: 'Real Estate' },
    { name: 'Sri Chaitanya', category: 'Education' },
    { name: 'TechSphere Mobility', category: 'Automotive' },
    { name: 'GreenLeaf Organics', category: 'FMCG' },
    { name: 'FinPrime Capital', category: 'Banking & Finance' },
    { name: 'Novacom Networks', category: 'Telecom' },
    { name: 'Apollo Healthways', category: 'Healthcare' },
    { name: 'Royal Jewelers', category: 'Luxury Retail' },
  ],
};
