"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  createLeadPayload,
  getFormValue,
  getSelectedOrOther,
  postLead,
} from "@/lib/enquiry";
import { EnquiryModal } from "./enquiry-modal";
import { PropertyGallery } from "./property-gallery";

export function QartHome() {
  const [selectedResidence, setSelectedResidence] = useState("");
  const [consultationStatus, setConsultationStatus] = useState("");

  return (
    <>
      <main className="hero" aria-label="QART luxury property homepage">
        <header className="site-header">
          <a className="brand" href="#" aria-label="QART home">QART</a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#properties">Properties</a>
            <a href="#areas">Areas</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="/blog">Blog</a>
          </nav>
          <a className="header-cta" href="#consultation">Private Consultation</a>
        </header>

        <section className="hero-content">
          <div className="rule" aria-hidden="true" />
          <h1>Curated Luxury<br />Living in Bangkok</h1>
          <p>
            Discover premium residences, penthouses, and exclusive homes in
            Bangkok&apos;s most sought-after neighborhoods.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#areas">
              <span>Explore Properties</span>
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#consultation">Private Consultation</a>
          </div>
        </section>

        <p className="photo-credit">
          Photo: Linh Anh Moreau / Wikimedia Commons, CC BY-SA 4.0
        </p>
      </main>

      <div id="areas">
        <PropertyGallery onSelectResidence={setSelectedResidence} />
      </div>

      <DifferenceSection />
      <ConsultationSection
        status={consultationStatus}
        onStatusChange={setConsultationStatus}
      />
      <SiteFooter />
      <EnquiryModal
        residence={selectedResidence}
        onClose={() => setSelectedResidence("")}
      />
    </>
  );
}

function DifferenceSection() {
  return (
    <section className="difference-section" id="about" aria-labelledby="difference-title">
      <div className="difference-shell">
        <p className="difference-kicker">Our Difference</p>
        <h2 id="difference-title">Why Clients Choose <span>Qart</span></h2>
        <div className="difference-list">
          {[
            ["01", "Curated Luxury Listings", "Every property in our portfolio is personally vetted for quality, location, and investment potential. We present only the finest."],
            ["02", "Personalized Consultation", "Your dedicated advisor understands your lifestyle, preferences, and goals — guiding you from first inquiry to key handover."],
            ["03", "Trusted Bangkok Expertise", "Over a decade navigating Bangkok's luxury market. We know every building, every developer, and every opportunity before it lists."],
            ["04", "International Client Support", "Seamless service in English and Thai, with tailored guidance for international buyers and relocations."],
          ].map(([number, title, copy]) => (
            <article className="difference-item" key={number}>
              <span className="difference-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationSection({
  status,
  onStatusChange,
}: {
  status: string;
  onStatusChange: (status: string) => void;
}) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    onStatusChange("Sending your private consultation request...");

    try {
      await postLead(
        createLeadPayload({
          inquiryType: "General Search",
          residence: "",
          fullName: getFormValue(formData, "full-name"),
          email: getFormValue(formData, "email"),
          phone: getFormValue(formData, "phone"),
          preferredAreas: getSelectedOrOther(
            formData,
            "preferred-areas",
            "preferred-area-other",
          ),
          propertyType: getSelectedOrOther(
            formData,
            "property-type",
            "property-type-other",
          ),
          bedrooms: getFormValue(formData, "bedrooms"),
          petFriendly: "",
          budget: getFormValue(formData, "budget"),
          moveInDate: getFormValue(formData, "move-in-date"),
          message: getFormValue(formData, "requirements"),
        }),
      );
      form.reset();
      onStatusChange(
        "Thank you for your enquiry.\nQart will contact you shortly regarding availability and viewing options.",
      );
    } catch {
      onStatusChange("We could not send the enquiry just now. Please try again in a moment.");
    }
  }

  return (
    <section className="consultation-section" id="consultation" aria-labelledby="consultation-title">
      <div className="consultation-shell">
        <div className="consultation-copy">
          <h2 id="consultation-title">Begin Your Search with <span>Qart</span></h2>
          <p>
            Tell us about your preferred lifestyle, locations, and requirements.
            Our team will curate a personalized selection of luxury residences
            across Bangkok.
          </p>
          <small>
            Discreet guidance for rentals, relocations, and luxury residences.
          </small>
        </div>

        <form className="consultation-form" action="#" method="post" onSubmit={onSubmit}>
          <label>
            <span>Full Name</span>
            <input type="text" name="full-name" autoComplete="name" />
          </label>
          <label>
            <span>WhatsApp / Phone Number</span>
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label>
            <span>Email Address</span>
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label className="field-with-other">
            <span>Preferred Areas</span>
            <select name="preferred-areas" defaultValue="">
              <option value="">Select preferred area</option>
              <option>Central</option>
              <option>Thonglor</option>
              <option>Riverside</option>
              <option>Sathorn</option>
              <option>Asoke</option>
              <option>Phrom Phong</option>
              <option>Other</option>
            </select>
            <input
              className="other-field"
              id="preferred-area-other"
              type="text"
              name="preferred-area-other"
              placeholder="Preferred area"
              hidden
            />
          </label>
          <label className="field-with-other">
            <span>Property Type</span>
            <select name="property-type" defaultValue="">
              <option value="">Select property type</option>
              <option>Condo</option>
              <option>Penthouse</option>
              <option>House</option>
              <option>Other</option>
            </select>
            <input
              className="other-field"
              id="property-type-other"
              type="text"
              name="property-type-other"
              placeholder="Property type"
              hidden
            />
          </label>
          <label>
            <span>Bedrooms</span>
            <select name="bedrooms" defaultValue="">
              <option value="">Select bedrooms</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
              <option>4 Bedrooms</option>
              <option>5 Bedrooms+</option>
            </select>
          </label>
          <label>
            <span>Budget Range</span>
            <input type="text" name="budget" placeholder="THB / month or purchase budget" />
          </label>
          <label>
            <span>Move-in Date</span>
            <input type="date" name="move-in-date" />
          </label>
          <label className="form-wide">
            <span>Additional Requirements</span>
            <textarea name="requirements" rows={5} />
          </label>
          <p className="consultation-status enquiry-status form-wide" role="status" aria-live="polite">
            {status}
          </p>
          <button type="submit">Request Private Consultation</button>
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#">Qart</a>
            <p>
              Curated luxury residences and personalized property consultation
              in Bangkok.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#">Home</a>
            <a href="#areas">Areas</a>
            <a href="#areas">Properties</a>
            <a href="#consultation">Consultation</a>
            <a href="#contact">Contact</a>
          </nav>
          <address className="footer-contact">
            <span>WHATSAPP</span>
            <a href="tel:+66612901977">+66 61 290 1977</a>
          </address>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Qart. All rights reserved.</p>
          <p>Designed for modern luxury living</p>
        </div>
      </div>
    </footer>
  );
}
