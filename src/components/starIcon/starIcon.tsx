"use client";

import React, { useState } from "react";
import "../../styles/starIcon.css";

interface Link {
  text: string;
  url: string;
}

interface StarIconProps {
  title: string;
  description?: string;
  links?: Link[];
  customContent?: React.ReactNode;
}

const StarIcon: React.FC<StarIconProps> = ({
  title,
  description,
  links,
  customContent,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="star-icon-container" onClick={() => setActive(!active)}>
      <div className={`star-icon ${active ? "active" : ""}`}></div>
      {active && (
        <div className="description">
          <h3>{title}</h3>
          {customContent ? (
            <div className="custom-content">{customContent}</div>
          ) : (
            <>
              {description && <p>{description}</p>}
              {links && (
                <div className="links">
                  {links.map((link: Link, index: number) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default StarIcon;
