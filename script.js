const images = [
  "assets/property-interior.png",
  "assets/property-riverside.png",
  "assets/property-lounge.png",
  "assets/qart-luxury-hero-v2.png",
];

const areas = [
  {
    id: "langsuan",
    label: "Langsuan",
    projects: [
      ["Scope Langsuan", "Private freehold residences with refined materials, park proximity, and discreet hotel-inspired service.", "From THB 180k/mo"],
      ["98 Wireless", "An iconic embassy-row address with grand proportions, white-glove service, and timeless European detailing.", "From THB 260k/mo"],
      ["Sindhorn Residence", "Quiet leafy residences with generous layouts, warm interiors, and immediate access to Langsuan village life.", "From THB 150k/mo"],
      ["The Residences at Sindhorn Kempinski", "Hotel-serviced residences with calm wellness amenities and an elegant garden-side arrival.", "From THB 220k/mo"],
      ["Magnolias Ratchadamri Boulevard", "Skyline residences moments from the Royal Bangkok Sports Club and central retail destinations.", "From THB 130k/mo"],
      ["The Rajdamri", "Established high-rise homes with city views, practical layouts, and a polished central Bangkok address.", "From THB 90k/mo"],
    ],
  },
  {
    id: "thonglor",
    label: "Thonglor",
    projects: [
      ["Park Origin Thonglor", "Elevated urban living with resort-style amenities, skyline views, and access to Bangkok's dining quarter.", "From THB 85k/mo"],
      ["HYDE Heritage Thonglor", "A sculptural residence with private ambience, concierge comforts, and refined Sukhumvit connectivity.", "From THB 110k/mo"],
      ["MARU Ekkamai 2", "Modern residences with warm Japanese-inspired details and a calm lifestyle setting near Ekkamai.", "From THB 55k/mo"],
      ["The Monument Thonglor", "Large-format residences with rare privacy, family-scale layouts, and a quietly prestigious Thonglor address.", "From THB 190k/mo"],
      ["Beatniq Sukhumvit 32", "Mid-century inspired residences with warm timber, graceful common spaces, and understated city elegance.", "From THB 95k/mo"],
      ["Khun by Yoo", "Design-led residences with expressive interiors, strong amenities, and a distinctive Thonglor personality.", "From THB 120k/mo"],
    ],
  },
  {
    id: "riverside",
    label: "Riverside / Chao Phraya",
    projects: [
      ["Four Seasons Private Residences", "Landmark riverfront homes with hotel-level service, panoramic water views, and resort serenity.", "From THB 300k/mo"],
      ["The Residences at Mandarin Oriental", "Rare branded residences with polished service, elegant river arrival, and expansive private homes.", "From THB 320k/mo"],
      ["Banyan Tree Residences Riverside", "Warm riverfront residences with hospitality-led details and uninterrupted Chao Phraya outlooks.", "From THB 180k/mo"],
      ["The River", "Expansive waterfront homes with generous plans, sweeping views, and quiet resort-like amenities.", "From THB 140k/mo"],
      ["Magnolias Waterfront Residences", "High-floor river residences connected to ICONSIAM with dramatic views and polished services.", "From THB 170k/mo"],
      ["Canapaya Residences", "Private riverside living with generous glass lines, relaxed luxury, and a calm residential atmosphere.", "From THB 120k/mo"],
    ],
  },
  {
    id: "sathorn",
    label: "Sathorn",
    projects: [
      ["The Ritz-Carlton Residences Bangkok", "Landmark branded residences with dramatic city views, expansive plans, and white-glove service.", "From THB 220k/mo"],
      ["Saladaeng One", "Boutique luxury residences near Lumpini Park with quiet interiors and a precise architectural profile.", "From THB 120k/mo"],
      ["Banyan Tree Residences Sathorn", "A refined city address with hospitality sensibility, warm amenities, and polished Sathorn access.", "From THB 150k/mo"],
      ["The Sukhothai Residences", "Generous residences with calm landscaped grounds, timeless detailing, and discreet five-star heritage.", "From THB 190k/mo"],
      ["185 Rajadamri", "Freehold residences beside the park with gracious proportions and classic central Bangkok prestige.", "From THB 210k/mo"],
      ["Supalai ICON Sathorn", "New-generation city residences with broad facilities, skyline perspectives, and business-district ease.", "From THB 95k/mo"],
    ],
  },
  {
    id: "asoke",
    label: "Asoke",
    projects: [
      ["The Esse at Singha Complex", "Sculptural high-rise residences connected to MRT access, crafted for polished city living.", "From THB 75k/mo"],
      ["Ashton Asoke", "A central Sukhumvit tower with sharp city views, efficient layouts, and immediate transit convenience.", "From THB 65k/mo"],
      ["Ashton Asoke - Rama 9", "Modern residences with skyline outlooks, strong amenities, and access to Rama 9's business corridor.", "From THB 55k/mo"],
      ["Noble BE33", "Quiet Sukhumvit residences with softened contemporary interiors and convenient access to Phrom Phong.", "From THB 70k/mo"],
      ["Q Asoke", "Established urban residences with strong connectivity, clean layouts, and balanced city comfort.", "From THB 55k/mo"],
      ["Circle Living Prototype", "Distinctive city homes with generous amenities, high-floor views, and a private residential rhythm.", "From THB 80k/mo"],
    ],
  },
  {
    id: "phrom-phong",
    label: "Phrom Phong",
    projects: [
      ["Vittorio Sukhumvit 39", "Boutique residences moments from Em District with private lift access and collector-grade interiors.", "From THB 150k/mo"],
      ["The Diplomat 39", "A refined low-density address with quiet detailing, warm materials, and prime Sukhumvit convenience.", "From THB 105k/mo"],
      ["Prompong Penthouse", "Private penthouse living with expansive entertainment space and city views near Bangkok's retail core.", "From THB 240k/mo"],
      ["Marque Sukhumvit", "High-rise luxury residences with generous amenities, direct BTS proximity, and polished city energy.", "From THB 130k/mo"],
      ["Emporio Place", "Established residences near Emporium with practical luxury, large layouts, and excellent walkability.", "From THB 85k/mo"],
      ["Aguston Sukhumvit 22", "Characterful residences with resort-style facilities, family-friendly scale, and a calm Sukhumvit setting.", "From THB 75k/mo"],
    ],
  },
  {
    id: "pet-friendly",
    label: "Pet Friendly",
    projects: [
      ["M Thonglor 10", "Pet-welcoming residences with convenient Thonglor access, warm interiors, and lifestyle-led amenities.", "From THB 80k/mo"],
      ["Baan Siri 24", "Comfortable residences with pet-friendly flexibility, leafy surroundings, and easy Phrom Phong access.", "From THB 70k/mo"],
      ["The Monument Thonglor", "Large private homes suited to families and pets, with rare space in the heart of Thonglor.", "From THB 190k/mo"],
      ["Aguston Sukhumvit 22", "Resort-style residences with generous facilities and practical layouts for relaxed pet-friendly living.", "From THB 75k/mo"],
      ["Maestria 39", "Quiet Sukhumvit residences with softened interiors, pet-friendly options, and a neighborhood feel.", "From THB 65k/mo"],
      ["Siamese Exclusive Sukhumvit 31", "Modern residences with strong connectivity, calm amenities, and select pet-friendly availability.", "From THB 70k/mo"],
    ],
  },
];

const tabs = document.querySelector(".area-tabs");
const grid = document.querySelector(".property-grid");

function renderTabs(activeId) {
  tabs.innerHTML = areas
    .map(
      (area) => `
        <button
          class="area-tab${area.id === activeId ? " is-active" : ""}"
          type="button"
          data-area="${area.id}"
          aria-pressed="${area.id === activeId}"
        >
          ${area.label}
        </button>
      `,
    )
    .join("");
}

function renderProjects(areaId) {
  const area = areas.find((item) => item.id === areaId) ?? areas[0];

  grid.classList.remove("is-visible");
  window.setTimeout(() => {
    grid.innerHTML = area.projects
      .map(
        ([name, description, price], index) => `
          <article class="property-card image-pos-${index + 1}">
            <div class="property-image">
              <img src="${images[index % images.length]}" alt="${name} luxury Bangkok residence" />
            </div>
            <div class="property-content">
              <p class="property-area">${area.label}</p>
              <h3>${name}</h3>
              <p class="property-description">${description}</p>
              <div class="property-meta" aria-label="Residence details">
                <span>Curated Residence</span>
                <span>${price}</span>
              </div>
              <a class="card-button" href="#">View Residence</a>
            </div>
          </article>
        `,
      )
      .join("");
    grid.classList.add("is-visible");
  }, 130);
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-area]");
  if (!button) return;

  renderTabs(button.dataset.area);
  renderProjects(button.dataset.area);
});

renderTabs(areas[0].id);
renderProjects(areas[0].id);
