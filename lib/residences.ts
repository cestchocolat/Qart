export type ResidenceProject = {
  name: string;
  description: string;
};

export type ResidenceArea = {
  id: string;
  label: string;
  projects: ResidenceProject[];
};

export const fallbackImages = [
  "/assets/property-interior.png",
  "/assets/property-riverside.png",
  "/assets/property-lounge.png",
  "/assets/qart-luxury-hero-v2.png",
];

export const projectImages: Record<string, string> = {
  "98 Wireless": "/assets/98 wireless.png",
  "Sindhorn Residence": "/assets/Sindhorn.jpg",
  "The Residences at Sindhorn Kempinski": "/assets/sindhorn-kempin-residence.jpg",
  "Sindhorn Tonson": "/assets/Sindhorn Tonson.jpg",
  "Scope Langsuan": "/assets/Scope Langsuan.png",
  "Magnolias Ratchadamri Boulevard": "/assets/Magnolias Ratchadamri.jpg",
  "185 Rajadamri": "/assets/185.jpg",
  "The Residences at St. Regis Bangkok": "/assets/The Residences at The St..jpg",
  "The Strand Thonglor": "/assets/The strand.jpg",
  "KHUN by Yoo": "/assets/Khun by Yoo.jpg",
  "Tela Thonglor": "/assets/Tela.jpg",
  "The Monument Thong Lo": "/assets/The monument.jpg",
  "The Reserve 61 Hideaway": "/assets/The Reserve Hideaway.png",
  "The Reserve 61 Sukhumvit": "/assets/The Reserve Sukhumvot 61.png",
  "BEATNIQ Sukhumvit 32": "/assets/beatniq.jpg",
  "MARQUE Sukhumvit": "/assets/Marque.jpg",
  "The Diplomat 39": "/assets/The Diplomat 39.jpg",
  "MUNIQ Sukhumvit 23": "/assets/Muniq 23.jpg",
  "39 by Sansiri": "/assets/39 by Sansiri.jpg",
  "Le Raffine Sukhumvit 39": "/assets/Le-Raffine.jpg",
  "The ESSE at Singha Complex": "/assets/The Esse.jpg",
};

export const residenceAreas: ResidenceArea[] = [
  {
    id: "central",
    label: "CENTRAL",
    projects: [
      { name: "98 Wireless", description: "An embassy-row residence with grand proportions, refined detailing, and discreet central Bangkok prestige." },
      { name: "Sindhorn Residence", description: "Quiet leafy residences with generous layouts, warm interiors, and immediate access to Langsuan village life." },
      { name: "The Residences at Sindhorn Kempinski", description: "Hotel-serviced residences with calm wellness amenities and an elegant garden-side arrival." },
      { name: "Sindhorn Tonson", description: "A polished central address with serene residential privacy and sophisticated city convenience." },
      { name: "Scope Langsuan", description: "Private freehold residences with refined materials, park proximity, and discreet hotel-inspired service." },
      { name: "Magnolias Ratchadamri Boulevard", description: "Skyline residences moments from the Royal Bangkok Sports Club and central retail destinations." },
      { name: "185 Rajadamri", description: "Freehold residences beside the park with gracious proportions and classic central Bangkok prestige." },
      { name: "The Residences at St. Regis Bangkok", description: "A branded residence with polished service, refined interiors, and rare Rajadamri convenience." },
    ],
  },
  {
    id: "thonglor",
    label: "THONGLOR",
    projects: [
      { name: "The Strand Thonglor", description: "A refined transit-connected residence with modern detailing and a polished Thonglor lifestyle." },
      { name: "KHUN by Yoo", description: "Design-led residences with expressive interiors, strong amenities, and a distinctive Thonglor personality." },
      { name: "Tela Thonglor", description: "Low-density luxury residences with expansive layouts, privacy, and an established Thonglor address." },
      { name: "The Monument Thong Lo", description: "Large-format residences with rare privacy, family-scale layouts, and a quietly prestigious presence." },
      { name: "The Reserve 61 Sukhumvit", description: "A refined Sukhumvit residence with calm contemporary interiors and convenient access to Thonglor and Ekkamai." },
      { name: "The Reserve 61 Hideaway", description: "A discreet residential retreat with calm interiors and easy access to Thonglor and Ekkamai." },
    ],
  },
  {
    id: "asoke-phrom-phong",
    label: "ASOKE / PHROM PHONG",
    projects: [
      { name: "BEATNIQ Sukhumvit 32", description: "Mid-century inspired residences with warm timber, graceful common spaces, and understated city elegance." },
      { name: "MARQUE Sukhumvit", description: "High-rise luxury residences with generous amenities, direct BTS proximity, and polished city energy." },
      { name: "The Diplomat 39", description: "A refined low-density address with quiet detailing, warm materials, and prime Sukhumvit convenience." },
      { name: "MUNIQ Sukhumvit 23", description: "A contemporary Asoke residence with sculptural lines, city views, and seamless urban access." },
      { name: "39 by Sansiri", description: "Established Phrom Phong living with generous layouts and a quietly residential Sukhumvit setting." },
      { name: "Le Raffine Sukhumvit 39", description: "Private duplex-style residences with expansive interiors and a discreet neighborhood atmosphere." },
      { name: "The ESSE at Singha Complex", description: "Sculptural high-rise residences connected to MRT access, crafted for polished city living." },
    ],
  },
  {
    id: "sathorn",
    label: "SATHORN",
    projects: [
      { name: "The Ritz-Carlton Residences Bangkok", description: "Landmark branded residences with dramatic city views, expansive plans, and white-glove service." },
      { name: "The Sukhothai Residences", description: "Generous residences with calm landscaped grounds, timeless detailing, and discreet five-star heritage." },
      { name: "Saladaeng One", description: "Boutique luxury residences near Lumpini Park with quiet interiors and a precise architectural profile." },
      { name: "The Met Sathorn", description: "An architectural Sathorn landmark with spacious city homes and a refined residential rhythm." },
    ],
  },
  {
    id: "riverside",
    label: "RIVERSIDE",
    projects: [
      { name: "Four Seasons Private Residences Bangkok", description: "Landmark riverfront homes with hotel-level service, panoramic water views, and resort serenity." },
      { name: "The Residences at Mandarin Oriental Bangkok", description: "Rare branded residences with polished service, elegant river arrival, and expansive private homes." },
      { name: "Magnolias Waterfront Residences", description: "High-floor river residences connected to ICONSIAM with dramatic views and polished services." },
      { name: "Canapaya Residences", description: "Private riverside living with generous glass lines, relaxed luxury, and a calm residential atmosphere." },
      { name: "Banyan Tree Residences Riverside Bangkok", description: "Warm riverfront residences with hospitality-led details and uninterrupted Chao Phraya outlooks." },
      { name: "The River", description: "Expansive waterfront homes with generous plans, sweeping views, and quiet resort-like amenities." },
      { name: "Menam Residences", description: "Modern riverfront residences with open views, generous facilities, and a calm waterfront setting." },
      { name: "Watermark Chaophraya", description: "Spacious riverside homes with broad river views and an established residential community." },
    ],
  },
  {
    id: "pet-friendly",
    label: "PET FRIENDLY",
    projects: [
      { name: "Sindhorn Residence", description: "Pet-welcoming residences with leafy surroundings, generous layouts, and a calm central atmosphere." },
      { name: "The Residences at Sindhorn Kempinski", description: "Hotel-serviced living with garden-side calm and select residences suited to refined pet-friendly lifestyles." },
      { name: "98 Wireless", description: "An embassy-row address with rare privacy, premium service, and a polished pet-friendly residential mood." },
      { name: "Scope Langsuan", description: "A refined Langsuan residence offering privacy, park proximity, and an elevated city lifestyle." },
      { name: "Aguston Sukhumvit 22", description: "Resort-style residences with generous facilities and practical layouts for relaxed pet-friendly living." },
      { name: "Le Raffine Sukhumvit 39", description: "Expansive private residences with duplex-style comfort and a discreet Phrom Phong setting." },
      { name: "Wilshire Condominium", description: "Established Sukhumvit residences with spacious layouts and a quietly residential neighborhood feel." },
      { name: "M Thonglor 10", description: "Pet-welcoming residences with convenient Thonglor access, warm interiors, and lifestyle-led amenities." },
      { name: "The Monument Thong Lo", description: "Large private homes suited to families and pets, with rare space in the heart of Thonglor." },
      { name: "Menam Residences", description: "Modern riverfront residences with open views, generous facilities, and a relaxed residential atmosphere." },
      { name: "Canapaya Residences", description: "Private riverside living with generous glass lines, relaxed luxury, and a calm waterfront setting." },
      { name: "Watermark Chaophraya", description: "Spacious riverside homes with broad river views and an established pet-friendly community feel." },
      { name: "The Sukhothai Residences", description: "Generous residences with landscaped calm, timeless detailing, and discreet five-star heritage." },
      { name: "Sathorn Gardens", description: "Established garden-side residences with practical layouts and easy access to Sathorn and Silom." },
      { name: "Sathorn Park Place", description: "Spacious central residences with a quiet residential atmosphere and convenient city access." },
      { name: "Via 34", description: "A boutique Sukhumvit residence with calm interiors and a neighborhood setting suited to refined daily living." },
    ],
  },
];
