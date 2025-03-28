import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="event planning Uganda, event decorations Uganda, wedding tents, corporate event setup, Tinah Events" />
      <meta name="author" content="Tinah Events" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://tinah-events.com/images/banner.jpg" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://tinah-events.com/images/banner.jpg" />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
