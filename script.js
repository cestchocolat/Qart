const images = [
  "assets/property-interior.png",
  "assets/property-riverside.png",
  "assets/property-lounge.png",
  "assets/qart-luxury-hero-v2.png",
];

const projectImages = {
  "98 Wireless": "assets/98 wireless.png",
  "Sindhorn Residence": "assets/Sindhorn.jpg",
  "The Residences at Sindhorn Kempinski": "assets/sindhorn-kempin-residence.jpg",
  "Sindhorn Tonson": "assets/Sindhorn Tonson.jpg",
  "Scope Langsuan": "assets/Scope Langsuan.png",
  "Magnolias Ratchadamri Boulevard": "assets/Magnolias Ratchadamri.jpg",
  "185 Rajadamri": "assets/185.jpg",
  "The Residences at St. Regis Bangkok": "assets/The Residences at The St..jpg",
  "MARQUE Sukhumvit": "assets/Marque.jpg",
};

// Paste the deployed Google Apps Script Web App URL here.
const ENQUIRY_ENDPOINT = "https://script.google.com/macros/s/AKfycbzNmFKp71Uy9HerB85c-4S-AIpG8dHvLIkeMJGGfv8AZT9tT2Fvnv_cyiz9ls9XxBLN/exec";

const areas = [
  {
    id: "central",
    label: "CENTRAL",
    projects: [
      ["98 Wireless", "An embassy-row residence with grand proportions, refined detailing, and discreet central Bangkok prestige."],
      ["Sindhorn Residence", "Quiet leafy residences with generous layouts, warm interiors, and immediate access to Langsuan village life."],
      ["The Residences at Sindhorn Kempinski", "Hotel-serviced residences with calm wellness amenities and an elegant garden-side arrival."],
      ["Sindhorn Tonson", "A polished central address with serene residential privacy and sophisticated city convenience."],
      ["Scope Langsuan", "Private freehold residences with refined materials, park proximity, and discreet hotel-inspired service."],
      ["Magnolias Ratchadamri Boulevard", "Skyline residences moments from the Royal Bangkok Sports Club and central retail destinations."],
      ["185 Rajadamri", "Freehold residences beside the park with gracious proportions and classic central Bangkok prestige."],
      ["The Residences at St. Regis Bangkok", "A branded residence with polished service, refined interiors, and rare Rajadamri convenience."],
    ],
  },
  {
    id: "thonglor",
    label: "THONGLOR",
    projects: [
      ["The Strand Thonglor", "A refined transit-connected residence with modern detailing and a polished Thonglor lifestyle."],
      ["KHUN by Yoo", "Design-led residences with expressive interiors, strong amenities, and a distinctive Thonglor personality."],
      ["Tela Thonglor", "Low-density luxury residences with expansive layouts, privacy, and an established Thonglor address."],
      ["The Monument Thong Lo", "Large-format residences with rare privacy, family-scale layouts, and a quietly prestigious presence."],
      ["The Reserve 61 Hideaway", "A discreet residential retreat with calm interiors and easy access to Thonglor and Ekkamai."],
    ],
  },
  {
    id: "asoke-phrom-phong",
    label: "ASOKE / PHROM PHONG",
    projects: [
      ["BEATNIQ Sukhumvit 32", "Mid-century inspired residences with warm timber, graceful common spaces, and understated city elegance."],
      ["MARQUE Sukhumvit", "High-rise luxury residences with generous amenities, direct BTS proximity, and polished city energy."],
      ["The Diplomat 39", "A refined low-density address with quiet detailing, warm materials, and prime Sukhumvit convenience."],
      ["MUNIQ Sukhumvit 23", "A contemporary Asoke residence with sculptural lines, city views, and seamless urban access."],
      ["39 by Sansiri", "Established Phrom Phong living with generous layouts and a quietly residential Sukhumvit setting."],
      ["Le Raffine Sukhumvit 39", "Private duplex-style residences with expansive interiors and a discreet neighborhood atmosphere."],
      ["The ESSE at Singha Complex", "Sculptural high-rise residences connected to MRT access, crafted for polished city living."],
    ],
  },
  {
    id: "sathorn",
    label: "SATHORN",
    projects: [
      ["The Ritz-Carlton Residences Bangkok", "Landmark branded residences with dramatic city views, expansive plans, and white-glove service."],
      ["The Sukhothai Residences", "Generous residences with calm landscaped grounds, timeless detailing, and discreet five-star heritage."],
      ["Saladaeng One", "Boutique luxury residences near Lumpini Park with quiet interiors and a precise architectural profile."],
      ["The Met Sathorn", "An architectural Sathorn landmark with spacious city homes and a refined residential rhythm."],
    ],
  },
  {
    id: "riverside",
    label: "RIVERSIDE",
    projects: [
      ["Four Seasons Private Residences Bangkok", "Landmark riverfront homes with hotel-level service, panoramic water views, and resort serenity."],
      ["The Residences at Mandarin Oriental Bangkok", "Rare branded residences with polished service, elegant river arrival, and expansive private homes."],
      ["Magnolias Waterfront Residences", "High-floor river residences connected to ICONSIAM with dramatic views and polished services."],
      ["Canapaya Residences", "Private riverside living with generous glass lines, relaxed luxury, and a calm residential atmosphere."],
      ["Banyan Tree Residences Riverside Bangkok", "Warm riverfront residences with hospitality-led details and uninterrupted Chao Phraya outlooks."],
      ["The River", "Expansive waterfront homes with generous plans, sweeping views, and quiet resort-like amenities."],
      ["Menam Residences", "Modern riverfront residences with open views, generous facilities, and a calm waterfront setting."],
      ["Watermark Chaophraya", "Spacious riverside homes with broad river views and an established residential community."],
    ],
  },
  {
    id: "pet-friendly",
    label: "PET FRIENDLY",
    projects: [
      ["Sindhorn Residence", "Pet-welcoming residences with leafy surroundings, generous layouts, and a calm central atmosphere."],
      ["The Residences at Sindhorn Kempinski", "Hotel-serviced living with garden-side calm and select residences suited to refined pet-friendly lifestyles."],
      ["98 Wireless", "An embassy-row address with rare privacy, premium service, and a polished pet-friendly residential mood."],
      ["Scope Langsuan", "A refined Langsuan residence offering privacy, park proximity, and an elevated city lifestyle."],
      ["Aguston Sukhumvit 22", "Resort-style residences with generous facilities and practical layouts for relaxed pet-friendly living."],
      ["Le Raffine Sukhumvit 39", "Expansive private residences with duplex-style comfort and a discreet Phrom Phong setting."],
      ["Wilshire Condominium", "Established Sukhumvit residences with spacious layouts and a quietly residential neighborhood feel."],
      ["M Thonglor 10", "Pet-welcoming residences with convenient Thonglor access, warm interiors, and lifestyle-led amenities."],
      ["The Monument Thong Lo", "Large private homes suited to families and pets, with rare space in the heart of Thonglor."],
      ["Menam Residences", "Modern riverfront residences with open views, generous facilities, and a relaxed residential atmosphere."],
      ["Canapaya Residences", "Private riverside living with generous glass lines, relaxed luxury, and a calm waterfront setting."],
      ["Watermark Chaophraya", "Spacious riverside homes with broad river views and an established pet-friendly community feel."],
      ["The Sukhothai Residences", "Generous residences with landscaped calm, timeless detailing, and discreet five-star heritage."],
      ["Sathorn Gardens", "Established garden-side residences with practical layouts and easy access to Sathorn and Silom."],
      ["Sathorn Park Place", "Spacious central residences with a quiet residential atmosphere and convenient city access."],
      ["Via 34", "A boutique Sukhumvit residence with calm interiors and a neighborhood setting suited to refined daily living."],
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
        ([name, description], index) => `
          <article class="property-card image-pos-${index + 1}">
            <div class="property-image">
              <img src="${projectImages[name] ?? images[index % images.length]}" alt="${name} luxury Bangkok residence" />
            </div>
            <div class="property-content">
              <h3>${name}</h3>
              <p class="property-description">${description}</p>
              <button class="card-button" type="button" data-residence="${name}">View Residence</button>
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

document.querySelectorAll("[data-other-target]").forEach((select) => {
  const otherField = document.getElementById(select.dataset.otherTarget);
  if (!otherField) return;

  select.addEventListener("change", () => {
    const shouldShow = select.value === "Other";
    otherField.hidden = !shouldShow;
    otherField.toggleAttribute("required", shouldShow);

    if (shouldShow) {
      otherField.focus();
    } else {
      otherField.value = "";
    }
  });
});

const enquiryModal = document.getElementById("residence-enquiry");
const enquiryResidenceName = document.getElementById("enquiry-residence-name");
const enquiryResidenceInput = document.getElementById("enquiry-residence-input");
const enquiryForm = enquiryModal?.querySelector(".enquiry-form");
const consultationForm = document.querySelector(".consultation-form");
const consultationStatus = consultationForm?.querySelector(".consultation-status");
const enquiryFirstField = enquiryModal?.querySelector('input[name="full-name"]');
const enquiryStatus = enquiryModal?.querySelector(".enquiry-status");

function setEnquiryStatus(message, type = "") {
  if (!enquiryStatus) return;

  enquiryStatus.textContent = message;
  enquiryStatus.className = `enquiry-status${type ? ` is-${type}` : ""}`;
}

function resetEnquiryState() {
  enquiryForm?.classList.remove("is-submitted", "is-submitting");
  enquiryForm?.querySelector('button[type="submit"]')?.removeAttribute("disabled");
  setEnquiryStatus("");
}

function setConsultationStatus(message, type = "") {
  if (!consultationStatus) return;

  consultationStatus.textContent = message;
  consultationStatus.className = `consultation-status enquiry-status form-wide${type ? ` is-${type}` : ""}`;
}

function openEnquiryModal(residenceName) {
  if (!enquiryModal) return;

  resetEnquiryState();
  enquiryResidenceName.textContent = residenceName;
  enquiryResidenceInput.value = residenceName;
  enquiryModal.classList.add("is-open");
  enquiryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  window.setTimeout(() => enquiryFirstField?.focus(), 180);
}

function closeEnquiryModal() {
  if (!enquiryModal) return;

  enquiryModal.classList.remove("is-open");
  enquiryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  window.setTimeout(resetEnquiryState, 220);
}

function getFormValue(formData, name) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function getSelectedOrOther(formData, selectName, otherName) {
  const selectedValue = getFormValue(formData, selectName);
  const otherValue = getFormValue(formData, otherName);

  return selectedValue === "Other" && otherValue ? otherValue : selectedValue;
}

function createLeadPayload(payload) {
  return {
    ...payload,
    name: payload.fullName,
    "full-name": payload.fullName,
    "Full Name Field": payload.fullName,
    interestedResidence: payload.residence,
    "residence": payload.residence,
    inquiryType: payload.inquiryType,
    "Inquiry Type": payload.inquiryType,
    "Interested Residence": payload.residence,
    Name: payload.fullName,
    "Full Name": payload.fullName,
    "Email Address": payload.email,
    "WhatsApp / Phone Number": payload.phone,
    "Preferred Areas": payload.preferredAreas,
    "Property Type": payload.propertyType,
    "Pet Friendly": payload.petFriendly,
    budgetRange: payload.budget,
    "budget": payload.budget,
    "Budget Range": payload.budget,
    "Move-in Date": payload.moveInDate,
    additionalRequirements: payload.message,
    "message": payload.message,
    "Additional Requirements": payload.message,
  };
}

function buildEnquiryPayload(form) {
  const formData = new FormData(form);

  return createLeadPayload({
    inquiryType: "Private Residence Enquiry",
    residence: getFormValue(formData, "residence"),
    fullName: getFormValue(formData, "full-name"),
    email: getFormValue(formData, "email"),
    phone: getFormValue(formData, "phone"),
    preferredAreas: getFormValue(formData, "preferred-areas"),
    propertyType: getFormValue(formData, "property-type"),
    bedrooms: getFormValue(formData, "bedrooms"),
    petFriendly: getFormValue(formData, "pet-friendly"),
    budget: getFormValue(formData, "budget"),
    moveInDate: getFormValue(formData, "move-in-date"),
    message: getFormValue(formData, "message"),
  });
}

function buildConsultationPayload(form) {
  const formData = new FormData(form);

  return createLeadPayload({
    inquiryType: "General Search",
    residence: "",
    fullName: getFormValue(formData, "full-name"),
    email: getFormValue(formData, "email"),
    phone: getFormValue(formData, "phone"),
    preferredAreas: getSelectedOrOther(formData, "preferred-areas", "preferred-area-other"),
    propertyType: getSelectedOrOther(formData, "property-type", "property-type-other"),
    bedrooms: getFormValue(formData, "bedrooms"),
    petFriendly: "",
    budget: getFormValue(formData, "budget"),
    moveInDate: getFormValue(formData, "move-in-date"),
    message: getFormValue(formData, "requirements"),
  });
}

async function postLead(payload) {
  const endpoint = ENQUIRY_ENDPOINT.trim();

  if (!endpoint) {
    throw new Error("Missing Google Apps Script endpoint.");
  }

  await fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
}

async function submitEnquiry(event) {
  event.preventDefault();
  if (!enquiryForm) return;

  const submitButton = enquiryForm.querySelector('button[type="submit"]');

  enquiryForm.classList.add("is-submitting");
  submitButton?.setAttribute("disabled", "disabled");
  setEnquiryStatus("Sending your private enquiry...", "pending");

  try {
    await postLead(buildEnquiryPayload(enquiryForm));

    enquiryForm.reset();
    enquiryForm.classList.remove("is-submitting");
    enquiryForm.classList.add("is-submitted");
    setEnquiryStatus(
      "Thank you for your enquiry.\nQart will contact you shortly regarding availability and viewing options.",
      "success",
    );
  } catch (error) {
    enquiryForm.classList.remove("is-submitting");
    submitButton?.removeAttribute("disabled");
    setEnquiryStatus(
      "We could not send the enquiry just now. Please try again in a moment.",
      "error",
    );
  }
}

async function submitConsultation(event) {
  event.preventDefault();
  if (!consultationForm) return;

  const submitButton = consultationForm.querySelector('button[type="submit"]');
  submitButton?.setAttribute("disabled", "disabled");
  setConsultationStatus("Sending your private consultation request...", "pending");

  try {
    await postLead(buildConsultationPayload(consultationForm));
    consultationForm.reset();
    consultationForm.querySelectorAll(".other-field").forEach((field) => {
      field.hidden = true;
      field.removeAttribute("required");
    });
    setConsultationStatus(
      "Thank you for your enquiry.\nQart will contact you shortly regarding availability and viewing options.",
      "success",
    );
  } catch (error) {
    setConsultationStatus(
      "We could not send the enquiry just now. Please try again in a moment.",
      "error",
    );
  } finally {
    submitButton?.removeAttribute("disabled");
  }
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-residence]");
  if (!button) return;

  openEnquiryModal(button.dataset.residence);
});

document.querySelectorAll("[data-close-enquiry]").forEach((button) => {
  button.addEventListener("click", closeEnquiryModal);
});

enquiryForm?.addEventListener("submit", submitEnquiry);
consultationForm?.addEventListener("submit", submitConsultation);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEnquiryModal();
  }
});
