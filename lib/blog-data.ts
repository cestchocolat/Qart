export type BlogContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  content: BlogContentSection[];
  relatedPosts: string[];
};

export const blogCategories = [
  "All",
  "Market Guides",
  "Renting",
  "Neighborhoods",
  "Pet-Friendly",
  "Expat Guides",
] as const;

const qartAuthor: BlogAuthor = {
  name: "Qart Editorial Team",
  role: "Bangkok luxury rental advisors",
  bio: "Qart's editorial team combines neighborhood research, private rental advisory, and on-the-ground Bangkok market knowledge.",
};

const advisorAuthor: BlogAuthor = {
  name: "Maya Chen",
  role: "Senior residence advisor",
  bio: "Maya helps international clients compare premium Bangkok residences, commute patterns, lease terms, and lifestyle fit.",
};

const coreBlogPosts: BlogPost[] = [
  {
    title: "Bangkok Luxury Condo Rental Guide for 2026",
    slug: "bangkok-luxury-condo-rental-guide",
    excerpt:
      "A clear guide to rental budgets, lease expectations, building standards, and where premium renters should begin.",
    coverImage: "/assets/property-interior.png",
    category: "Renting",
    tags: ["Bangkok rentals", "Luxury condos", "Lease planning"],
    author: qartAuthor,
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-18",
    readingTime: 7,
    relatedPosts: ["expat-guide-renting-condo-bangkok", "sukhumvit-luxury-rental-market", "questions-before-signing-bangkok-lease"],
    content: [
      {
        id: "rental-budget",
        heading: "Understand your rental budget",
        paragraphs: [
          "Premium Bangkok rentals vary widely by building age, service level, view, floor, and proximity to BTS or MRT stations. A useful first step is to separate your must-have lifestyle requirements from features that are simply nice to have.",
          "For many clients, the right budget is not just the monthly rent. It also includes deposit timing, furniture expectations, parking needs, pet terms, and the likelihood of renewal at a similar rate.",
        ],
      },
      {
        id: "building-quality",
        heading: "Compare buildings, not only units",
        paragraphs: [
          "Two condos in the same neighborhood can feel completely different. Lobby service, lifts, maintenance standards, privacy, and resident mix all shape daily life.",
          "Qart recommends shortlisting residences by building reputation first, then comparing individual units once the lifestyle baseline is right.",
        ],
      },
      {
        id: "lease-process",
        heading: "Prepare for the lease process",
        paragraphs: [
          "Strong units move quickly, especially in established luxury buildings. Have passport copies, company documents if required, and preferred move-in dates ready before private viewings.",
          "A good advisor should clarify deposit expectations, included furnishings, appliance condition, minor repairs, and handover timing before you sign.",
        ],
      },
    ],
  },
  {
    title: "Where to Rent in Thonglor: Lifestyle, Buildings, and Daily Rhythm",
    slug: "where-to-rent-thonglor",
    excerpt:
      "Thonglor remains one of Bangkok's strongest rental addresses for dining, wellness, nightlife, and refined city convenience.",
    coverImage: "/assets/The strand.jpg",
    category: "Neighborhoods",
    tags: ["Thonglor", "Lifestyle", "Luxury residences"],
    author: advisorAuthor,
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-12",
    readingTime: 6,
    relatedPosts: ["sukhumvit-luxury-rental-market", "pet-friendly-condos-bangkok", "bangkok-luxury-condo-rental-guide"],
    content: [
      {
        id: "why-thonglor",
        heading: "Why renters choose Thonglor",
        paragraphs: [
          "Thonglor offers a rare mix of residential calm and high-energy convenience. Many renters choose it because daily life can feel compact: dining, gyms, clinics, supermarkets, cafes, and transport are all close.",
          "The best fit depends on whether you value walkability to BTS, quieter side streets, larger family layouts, or newer amenity-led buildings.",
        ],
      },
      {
        id: "building-types",
        heading: "Know the building types",
        paragraphs: [
          "Thonglor has design-led high-rises, low-density residences, family-scale layouts, and boutique projects. The difference matters because each style attracts a different pace of life.",
          "For privacy, look at lower-density projects. For services and amenities, compare newer towers with strong management and practical common spaces.",
        ],
      },
      {
        id: "viewing-strategy",
        heading: "View with a daily routine in mind",
        paragraphs: [
          "During viewings, imagine the ordinary day: school drop-offs, late dinners, grocery runs, commute time, and weekend traffic.",
          "A beautiful unit is only a strong rental if the surrounding routine works for the people living there.",
        ],
      },
    ],
  },
  {
    title: "A Practical Guide to Pet-Friendly Condos in Bangkok",
    slug: "pet-friendly-condos-bangkok",
    excerpt:
      "How to evaluate pet policies, building culture, outdoor access, and lease terms before choosing a Bangkok condo with pets.",
    coverImage: "/assets/Sindhorn.jpg",
    category: "Pet-Friendly",
    tags: ["Pet-friendly condos", "Bangkok pets", "Rental policy"],
    author: qartAuthor,
    publishedAt: "2026-05-28",
    updatedAt: "2026-06-05",
    readingTime: 8,
    relatedPosts: ["where-to-rent-thonglor", "family-friendly-bangkok-condos", "questions-before-signing-bangkok-lease"],
    content: [
      {
        id: "policy-vs-practice",
        heading: "Separate policy from practice",
        paragraphs: [
          "A building may allow pets on paper but still feel difficult day to day. Ask about pet size limits, lift rules, common-area expectations, and whether the landlord has approved your specific pet.",
          "The strongest options combine clear building policy with a resident culture that is comfortable around animals.",
        ],
      },
      {
        id: "daily-access",
        heading: "Prioritize outdoor access",
        paragraphs: [
          "Pet-friendly living is easier when walks are practical. Check nearby sidewalks, parks, traffic patterns, and lobby-to-street access.",
          "For dogs, a slightly older building with generous grounds can sometimes be more comfortable than a newer tower with strict common-area rules.",
        ],
      },
      {
        id: "lease-terms",
        heading: "Clarify lease terms early",
        paragraphs: [
          "Landlords may request additional deposits, professional cleaning, or specific repair obligations. These terms should be visible before the lease is finalized.",
          "A careful advisor will confirm building rules and landlord approval before a client becomes emotionally attached to a unit.",
        ],
      },
    ],
  },
  {
    title: "Sukhumvit Luxury Rental Market: What Expat Renters Should Know",
    slug: "sukhumvit-luxury-rental-market",
    excerpt:
      "A neighborhood-by-neighborhood overview of Sukhumvit rental demand, building styles, commute considerations, and lifestyle tradeoffs.",
    coverImage: "/assets/Marque.jpg",
    category: "Market Guides",
    tags: ["Sukhumvit", "Expat rentals", "Market guide"],
    author: advisorAuthor,
    publishedAt: "2026-05-20",
    updatedAt: "2026-06-01",
    readingTime: 7,
    relatedPosts: ["where-to-rent-thonglor", "expat-guide-renting-condo-bangkok", "bangkok-luxury-condo-rental-guide"],
    content: [
      {
        id: "sukhumvit-corridor",
        heading: "Read Sukhumvit as a corridor",
        paragraphs: [
          "Sukhumvit is not one market. Nana, Asoke, Phrom Phong, Thonglor, Ekkamai, and On Nut each serve a different lifestyle and commute pattern.",
          "Luxury renters often compare Phrom Phong for convenience, Thonglor for lifestyle, and Ekkamai for a slightly calmer residential feel.",
        ],
      },
      {
        id: "transport",
        heading: "Balance transport and privacy",
        paragraphs: [
          "Being close to BTS can be valuable, but the most private buildings are not always directly on the main road. The right balance depends on how often you commute and whether you use a driver.",
          "Ask to view at different times of day if road access matters to your routine.",
        ],
      },
      {
        id: "inventory",
        heading: "Expect fast movement in prime buildings",
        paragraphs: [
          "High-quality renovated units in respected buildings often move faster than generic new inventory. Strong preparation helps renters make confident decisions when a good unit appears.",
          "A shortlist should include both dream options and realistic backups that still meet the core brief.",
        ],
      },
    ],
  },
  {
    title: "Expat Guide to Renting a Condo in Bangkok",
    slug: "expat-guide-renting-condo-bangkok",
    excerpt:
      "From lease terms to deposits and handover checks, this guide helps international renters understand the Bangkok process.",
    coverImage: "/assets/consultation-atmosphere.png",
    category: "Expat Guides",
    tags: ["Expat guide", "Renting process", "Bangkok relocation"],
    author: qartAuthor,
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-30",
    readingTime: 9,
    relatedPosts: ["bangkok-luxury-condo-rental-guide", "questions-before-signing-bangkok-lease", "sukhumvit-luxury-rental-market"],
    content: [
      {
        id: "documents",
        heading: "Prepare the documents",
        paragraphs: [
          "Most private rentals require passport details, contact information, a signed lease, deposits, and first month's rent. Company leases may require additional corporate documents.",
          "Having documents ready makes negotiation smoother, especially when the unit is in high demand.",
        ],
      },
      {
        id: "deposits",
        heading: "Understand deposits and payments",
        paragraphs: [
          "A common structure is two months' security deposit plus one month of advance rent, though terms can vary by landlord and lease profile.",
          "Before transferring funds, confirm the payee, lease name, inventory list, and any agreed repairs or furniture changes.",
        ],
      },
      {
        id: "handover",
        heading: "Take handover seriously",
        paragraphs: [
          "A detailed handover protects both renter and landlord. Photograph appliance condition, furniture, walls, floors, keys, access cards, and meter readings.",
          "This is especially important for premium residences with custom furniture, imported appliances, or sensitive materials.",
        ],
      },
    ],
  },
  {
    title: "Questions to Ask Before Signing a Bangkok Lease",
    slug: "questions-before-signing-bangkok-lease",
    excerpt:
      "A concise checklist covering repairs, furnishing, renewal terms, building rules, invoices, pets, and move-in timing.",
    coverImage: "/assets/property-lounge.png",
    category: "Renting",
    tags: ["Lease checklist", "Rental advice", "Bangkok condos"],
    author: advisorAuthor,
    publishedAt: "2026-04-26",
    updatedAt: "2026-05-08",
    readingTime: 5,
    relatedPosts: ["expat-guide-renting-condo-bangkok", "pet-friendly-condos-bangkok", "bangkok-luxury-condo-rental-guide"],
    content: [
      {
        id: "condition",
        heading: "Confirm condition and repairs",
        paragraphs: [
          "Ask which repairs will be completed before move-in and whether any furniture changes are included. Verbal promises should be reflected in writing.",
          "Premium units often include special materials or imported fixtures, so maintenance responsibility should be clear.",
        ],
      },
      {
        id: "renewal",
        heading: "Discuss renewal expectations",
        paragraphs: [
          "Renewal terms are easy to ignore at signing but matter later. Ask whether rent may increase, how much notice is required, and whether the owner plans to sell.",
          "A stable landlord can be as important as a beautiful room.",
        ],
      },
      {
        id: "rules",
        heading: "Check building rules",
        paragraphs: [
          "Review parking, pets, guests, deliveries, renovation noise, move-in hours, and elevator bookings. These details shape daily comfort.",
          "The goal is to remove surprises before the lease begins.",
        ],
      },
    ],
  },
  {
    title: "Family-Friendly Bangkok Condos: What to Look For",
    slug: "family-friendly-bangkok-condos",
    excerpt:
      "How families can compare layout, storage, schools, safety, facilities, and neighborhood routines when renting in Bangkok.",
    coverImage: "/assets/The Diplomat 39.jpg",
    category: "Market Guides",
    tags: ["Family rentals", "Schools", "Bangkok condos"],
    author: qartAuthor,
    publishedAt: "2026-04-18",
    updatedAt: "2026-05-02",
    readingTime: 6,
    relatedPosts: ["pet-friendly-condos-bangkok", "sukhumvit-luxury-rental-market", "where-to-rent-thonglor"],
    content: [
      {
        id: "layout",
        heading: "Prioritize livable layouts",
        paragraphs: [
          "Families often need practical storage, separated bedrooms, usable kitchens, and enough common space for daily routines. Floor plan quality can matter more than square meters alone.",
          "A well-planned two-bedroom can feel calmer than a larger unit with awkward circulation.",
        ],
      },
      {
        id: "school-run",
        heading: "Map the school run",
        paragraphs: [
          "Traffic patterns can change the feel of a neighborhood. Compare commute times during actual school-run windows, not only on a map.",
          "Buildings with easy road access, covered pickup points, and practical parking often reduce family friction.",
        ],
      },
      {
        id: "facilities",
        heading: "Look beyond headline facilities",
        paragraphs: [
          "Pools and playrooms are useful only when they are well-maintained and genuinely accessible. Visit common areas and observe how residents use them.",
          "Good management creates a more comfortable family building than amenities alone.",
        ],
      },
    ],
  },
  {
    title: "Riverside or Sukhumvit: Which Bangkok Address Fits You?",
    slug: "riverside-or-sukhumvit-bangkok-address",
    excerpt:
      "A lifestyle comparison for renters deciding between riverfront calm and Sukhumvit's urban convenience.",
    coverImage: "/assets/property-riverside.png",
    category: "Neighborhoods",
    tags: ["Riverside", "Sukhumvit", "Lifestyle comparison"],
    author: advisorAuthor,
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-20",
    readingTime: 6,
    relatedPosts: ["sukhumvit-luxury-rental-market", "bangkok-luxury-condo-rental-guide", "expat-guide-renting-condo-bangkok"],
    content: [
      {
        id: "lifestyle",
        heading: "Start with lifestyle pace",
        paragraphs: [
          "Riverside addresses often feel calmer, more resort-like, and visually open. Sukhumvit offers denser convenience, stronger nightlife access, and easier daily errands for many renters.",
          "Neither is universally better. The right choice depends on how you want Bangkok to feel when you come home.",
        ],
      },
      {
        id: "commute",
        heading: "Test the commute honestly",
        paragraphs: [
          "Riverfront living can be excellent for certain offices and international schools, but less convenient for others. Sukhumvit can be faster by BTS but slower by road at peak hours.",
          "A private viewing itinerary should include commute context, not just building tours.",
        ],
      },
      {
        id: "views",
        heading: "Value views against routine",
        paragraphs: [
          "A river view can transform a home, but daily logistics still matter. The strongest choices combine emotional pull with practical rhythm.",
          "Qart usually recommends comparing one riverfront shortlist and one city shortlist before deciding.",
        ],
      },
    ],
  },
  {
    title: "The Quiet Details That Define a Luxury Bangkok Residence",
    slug: "quiet-details-luxury-bangkok-residence",
    excerpt:
      "From arrival sequences to materials, service, and privacy, the best residences are often defined by what feels effortless.",
    coverImage: "/assets/property-lounge.png",
    category: "Market Guides",
    tags: ["Luxury details", "Architecture", "Bangkok residences"],
    author: advisorAuthor,
    publishedAt: "2026-03-22",
    updatedAt: "2026-04-08",
    readingTime: 5,
    relatedPosts: ["bangkok-luxury-condo-rental-guide", "family-friendly-bangkok-condos", "riverside-or-sukhumvit-bangkok-address"],
    content: [
      {
        id: "arrival",
        heading: "Notice the arrival sequence",
        paragraphs: [
          "A refined residence begins before the unit door. The driveway, lobby lighting, concierge rhythm, lift privacy, and corridor proportions all shape the first impression.",
          "These small signals often reveal how carefully a building is operated and maintained.",
        ],
      },
      {
        id: "materials",
        heading: "Look closely at materials",
        paragraphs: [
          "Natural stone, timber, hardware, lighting temperature, and appliance quality influence how a home feels over time. Luxury is less about decoration and more about materials aging gracefully.",
          "A well-specified unit should feel calm, durable, and easy to live with.",
        ],
      },
      {
        id: "service",
        heading: "Service should feel invisible",
        paragraphs: [
          "The best luxury buildings remove friction quietly. Maintenance, deliveries, parking, guest access, and security should feel coordinated without becoming intrusive.",
          "When service is good, residents notice fewer interruptions and more ease.",
        ],
      },
    ],
  },
];

const mockPostBlueprints = [
  ["How to Compare Luxury Condos Near BTS Phrom Phong", "A practical guide to judging convenience, privacy, management quality, and long-term comfort around Phrom Phong.", "Market Guides", "Marque.jpg"],
  ["Thonglor Condo Viewing Checklist for Busy Renters", "What to inspect during a private viewing when time is limited and the best units move quickly.", "Renting", "The strand.jpg"],
  ["Pet-Friendly Living Around Lumphini and Wireless Road", "A refined look at buildings, walking routes, nearby green space, and lease questions for renters with pets.", "Pet-Friendly", "Sindhorn.jpg"],
  ["A Newcomer's Guide to Bangkok Condo Facilities", "How pools, gyms, lounges, parking, and concierge services shape daily life in premium Bangkok residences.", "Expat Guides", "property-lounge.png"],
  ["Choosing Between Asoke and Phrom Phong", "A lifestyle comparison for renters weighing transit access, dining, schools, parks, and building inventory.", "Neighborhoods", "The Esse.jpg"],
  ["What Makes a Bangkok Penthouse Feel Private", "Views matter, but true privacy depends on lift access, floor plate, acoustic comfort, and building operations.", "Market Guides", "property-interior.png"],
  ["How to Shortlist Condos Before You Arrive in Bangkok", "A relocation-friendly process for narrowing neighborhoods, buildings, budgets, and viewing priorities.", "Expat Guides", "consultation-atmosphere.png"],
  ["Luxury Rental Negotiation: What Is Realistic", "How renters can approach price, repairs, furniture, move-in dates, and renewal terms with confidence.", "Renting", "Muniq 23.jpg"],
  ["Where Quiet Luxury Lives in Sukhumvit", "A guide to calm side streets, low-density residences, and understated buildings along Bangkok's central corridor.", "Neighborhoods", "The Diplomat 39.jpg"],
  ["Pet Policies in Bangkok Condos: What to Confirm", "The rules and cultural details that matter before signing a lease with a dog or cat in Bangkok.", "Pet-Friendly", "KHUN by yoo.jpg"],
  ["How Families Evaluate Bangkok Luxury Residences", "Schools, storage, layouts, road access, and amenity quality all shape the right family rental decision.", "Market Guides", "39 by Sansiri.jpg"],
  ["The Expat Move-In Timeline for Bangkok Rentals", "A step-by-step guide to search timing, documents, deposits, handover, and settling into a new residence.", "Expat Guides", "property-riverside.png"],
] as const;

const mockContent = (topic: string): BlogContentSection[] => [
  {
    id: "context",
    heading: "Start with the lifestyle context",
    paragraphs: [
      `${topic} is best understood through the way a residence supports daily rhythm: commute, privacy, service, errands, wellness, and the feeling of arriving home.`,
      "Qart recommends comparing buildings by lived experience first, then refining the shortlist by unit condition, view, furnishing, and lease terms.",
    ],
  },
  {
    id: "viewing",
    heading: "Use viewings to test the details",
    paragraphs: [
      "A premium viewing should examine more than finishes. Light, acoustics, lift flow, parking, lobby service, storage, and maintenance standards often reveal whether a home will feel effortless.",
      "Strong residences tend to make ordinary routines smoother rather than simply looking impressive in photos.",
    ],
  },
  {
    id: "decision",
    heading: "Make the decision with clarity",
    paragraphs: [
      "Before committing, confirm deposit structure, included furnishings, repair obligations, pet terms if relevant, and the owner's expected renewal position.",
      "The right lease should feel aligned with both lifestyle and logistics, especially for renters relocating or comparing several Bangkok neighborhoods.",
    ],
  },
];

const generatedBlogPosts: BlogPost[] = Array.from({ length: 72 }, (_, index) => {
  const blueprint = mockPostBlueprints[index % mockPostBlueprints.length];
  const volume = Math.floor(index / mockPostBlueprints.length) + 1;
  const [baseTitle, excerpt, category, image] = blueprint;
  const title = `${baseTitle}${volume > 1 ? `: Part ${volume}` : ""}`;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const author = index % 2 === 0 ? qartAuthor : advisorAuthor;
  const month = 3 + Math.floor(index / 24);
  const day = (index % 24) + 1;
  const publishedAt = `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  return {
    title,
    slug,
    excerpt,
    coverImage: `/assets/${image}`,
    category,
    tags: [category, "Bangkok real estate", "Luxury condos"],
    author,
    publishedAt,
    updatedAt: publishedAt,
    readingTime: 4 + (index % 5),
    content: mockContent(baseTitle),
    relatedPosts: [
      "bangkok-luxury-condo-rental-guide",
      "where-to-rent-thonglor",
      "sukhumvit-luxury-rental-market",
    ],
  };
});

export const blogPosts: BlogPost[] = [...coreBlogPosts, ...generatedBlogPosts];

export function findPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost) {
  const explicitPosts = post.relatedPosts
    .map((slug) => findPostBySlug(slug))
    .filter((item): item is BlogPost => Boolean(item));

  if (explicitPosts.length >= 3) {
    return explicitPosts.slice(0, 3);
  }

  const categoryFallback = blogPosts.filter(
    (item) => item.category === post.category && item.slug !== post.slug,
  );

  return [...explicitPosts, ...categoryFallback].slice(0, 3);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
