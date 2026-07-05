"use client";

import { useState } from "react";
import {
  fallbackImages,
  projectImages,
  residenceAreas,
} from "@/lib/residences";

type PropertyGalleryProps = {
  onSelectResidence: (residence: string) => void;
};

export function PropertyGallery({ onSelectResidence }: PropertyGalleryProps) {
  const [activeAreaId, setActiveAreaId] = useState(residenceAreas[0].id);
  const activeArea =
    residenceAreas.find((area) => area.id === activeAreaId) ?? residenceAreas[0];

  return (
    <section className="area-section" aria-labelledby="browse-by-area-title">
      <div className="area-shell">
        <div className="section-kicker" aria-hidden="true" />
        <div className="section-heading">
          <h2 id="browse-by-area-title">Browse by Area</h2>
          <p>
            Explore curated luxury residences across Bangkok&apos;s most
            sought-after neighborhoods.
          </p>
        </div>

        <div className="area-panel">
          <div className="area-tabs" aria-label="Browse properties by area">
            {residenceAreas.map((area) => (
              <button
                className={`area-tab${area.id === activeAreaId ? " is-active" : ""}`}
                type="button"
                key={area.id}
                aria-pressed={area.id === activeAreaId}
                onClick={() => setActiveAreaId(area.id)}
              >
                {area.label}
              </button>
            ))}
          </div>
          <div className="property-grid is-visible" aria-live="polite">
            {activeArea.projects.map((project, index) => (
              <article
                className={`property-card image-pos-${index + 1}`}
                key={`${activeArea.id}-${project.name}`}
              >
                <div className="property-image">
                  <img
                    src={
                      projectImages[project.name] ??
                      fallbackImages[index % fallbackImages.length]
                    }
                    alt={`${project.name} luxury Bangkok residence`}
                  />
                </div>
                <div className="property-content">
                  <h3>{project.name}</h3>
                  <p className="property-description">{project.description}</p>
                  <button
                    className="card-button"
                    type="button"
                    onClick={() => onSelectResidence(project.name)}
                  >
                    View Residence
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
