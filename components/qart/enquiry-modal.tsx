"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { createLeadPayload, getFormValue, postLead } from "@/lib/enquiry";

type EnquiryModalProps = {
  residence: string;
  onClose: () => void;
};

export function EnquiryModal({ residence, onClose }: EnquiryModalProps) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(residence));

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, residence]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("Sending your private enquiry...");

    try {
      await postLead(
        createLeadPayload({
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
        }),
      );
      form.reset();
      setStatus(
        "Thank you for your enquiry.\nQart will contact you shortly regarding availability and viewing options.",
      );
    } catch {
      setStatus("We could not send the enquiry just now. Please try again in a moment.");
    }
  }

  return (
    <div
      className={`enquiry-modal${residence ? " is-open" : ""}`}
      id="residence-enquiry"
      aria-hidden={!residence}
    >
      <div className="enquiry-backdrop" onClick={onClose} />
      <div
        className="enquiry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
      >
        <button className="enquiry-x" type="button" onClick={onClose} aria-label="Close enquiry">
          ×
        </button>
        <div className="enquiry-heading">
          <p>
            Interested Residence: <span id="enquiry-residence-name">{residence || "Residence"}</span>
          </p>
          <h2 id="enquiry-title">Private Residence Enquiry</h2>
          <p>
            Please leave your details and Qart will contact you with curated
            availability, pricing, and private viewing options.
          </p>
        </div>

        <p className={`enquiry-status${status ? " is-success" : ""}`} role="status" aria-live="polite">
          {status}
        </p>

        <form className="enquiry-form" action="#" method="post" onSubmit={onSubmit}>
          <input type="hidden" name="residence" value={residence} readOnly />
          <label className="enquiry-left">
            <span>Full Name</span>
            <input type="text" name="full-name" autoComplete="name" />
          </label>
          <label className="enquiry-right">
            <span>WhatsApp / Phone Number</span>
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label className="enquiry-left">
            <span>Email Address</span>
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label className="enquiry-right">
            <span>Preferred Areas</span>
            <select name="preferred-areas" defaultValue="">
              <option value="">Select preferred area</option>
              <option>Central</option>
              <option>Thonglor</option>
              <option>Asoke / Phrom Phong</option>
              <option>Sathorn</option>
              <option>Riverside</option>
              <option>Pet Friendly</option>
              <option>Other</option>
            </select>
          </label>
          <label className="enquiry-left">
            <span>Property Type</span>
            <select name="property-type" defaultValue="">
              <option value="">Select property type</option>
              <option>Condominium</option>
              <option>Penthouse</option>
              <option>Duplex</option>
              <option>Villa</option>
              <option>Townhouse</option>
            </select>
          </label>
          <label className="enquiry-right">
            <span>Bedrooms</span>
            <select name="bedrooms" defaultValue="">
              <option value="">Select bedrooms</option>
              <option>Studio</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
              <option>4+ Bedrooms</option>
            </select>
          </label>
          <label className="enquiry-left">
            <span>Budget Range</span>
            <input type="text" name="budget" />
          </label>
          <label className="enquiry-right">
            <span>Move-in Date</span>
            <input type="date" name="move-in-date" />
          </label>
          <label className="enquiry-left">
            <span>Additional Requirements</span>
            <textarea name="message" rows={4} />
          </label>
          <fieldset className="enquiry-pet enquiry-right">
            <legend>Pet Friendly?</legend>
            <div>
              <label>
                <input type="radio" name="pet-friendly" value="yes" />
                <span>Yes</span>
              </label>
              <label>
                <input type="radio" name="pet-friendly" value="no" />
                <span>No</span>
              </label>
            </div>
          </fieldset>
          <div className="enquiry-actions">
            <button type="submit">Submit Enquiry</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
