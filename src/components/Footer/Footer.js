import React from "react";
import "./styles.scss";

export const FooterTemplate = ({ data }) => {
  const { linksTitle, footerLinks, description, title } = data;

  return (
    <nav className="footer">
      <div className="footer-container  container">
        <div className="footer-top">
          <div className="footer-about">
            <h2 className="footer-aboutTitle">
              {title}
            </h2>
            <p className="footer-aboutDescription">{description}</p>
          </div>
          {footerLinks.length > 0 && (
            <div className="footer-linksContainer">
              <h2 className="footer-aboutTitle">
                {linksTitle}
              </h2>
              <ul className="footer-socialMenu">
                {footerLinks.map(footerLink => (
                  <li key={footerLink.linkURL} className="footer-socialMenuItem">
                    <a
                      className="footer-footerLink"
                      href={footerLink.linkURL}
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="footer-footerLinkIcon"
                        src={footerLink.image}
                        alt={footerLink.imageAlt}
                      />
                      {footerLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };
