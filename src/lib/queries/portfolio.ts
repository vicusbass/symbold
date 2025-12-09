export const allProjectsQuery = `*[_type == "workPage" && _id == "workPage"][0].projects[]->{
  _id,
  title,
  slug,
  hero{
    mediaType,
    image{
      asset,
      alt
    },
    video{
      asset->{
        playbackId,
        "aspectRatio": data.aspect_ratio
      }
    }
  },
  team,
  description,
  tags[]->{
    _id,
    id,
    text,
    hoverColor{
      hex,
      alpha
    }
  },
  content[]{
    _type,
    _key,

    _type == "portfolioRowFull" => {
      desktopMedia{ mediaType, image{ asset, alt }, video{ asset->{ playbackId, "aspectRatio": data.aspect_ratio } } },
      mobileMedia{ mediaType, image{ asset, alt }, video{ asset->{ playbackId, "aspectRatio": data.aspect_ratio } } }
    },

    _type == "portfolioRowWithDescription" => {
      media{ mediaType, image{ asset, alt }, video{ asset->{ playbackId, "aspectRatio": data.aspect_ratio } } },
      description[]{
        ...,
        markDefs[]{
          ...,
          _type == "link" => {
            "href": @.href,
            "blank": @.blank
          }
        }
      },
      descriptionPosition
    },

    _type == "portfolioRowSplit" => {
      leftMedia{ mediaType, image{ asset, alt }, video{ asset->{ playbackId, "aspectRatio": data.aspect_ratio } } },
      rightMedia{ mediaType, image{ asset, alt }, video{ asset->{ playbackId, "aspectRatio": data.aspect_ratio } } }
    },

    _type == "portfolioRowText" => {
      text
    }
  },
  publishedAt
}`;

// GROQ query to fetch a single portfolio project by slug
export const portfolioQuery = `*[_type == "portfolio" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  hero{
    mediaType,
    image{
      asset,
      alt
    },
    video{
      asset->{
        playbackId,
        "aspectRatio": data.aspect_ratio
      }
    }
  },
  team,
  description,
  tags[]->{
    _id,
    text,
    hoverColor{
      hex,
      alpha
    }
  },
  content[]{
    _type,
    _key,

    // Full Width Row
    _type == "portfolioRowFull" => {
      desktopMedia{
        mediaType,
        image{
          asset,
          alt
        },
        video{
          asset->{
            playbackId,
            "aspectRatio": data.aspect_ratio
          }
        }
      },
      mobileMedia{
        mediaType,
        image{
          asset,
          alt
        },
        video{
          asset->{
            playbackId,
            "aspectRatio": data.aspect_ratio
          }
        }
      }
    },

    // Media with Description Row
    _type == "portfolioRowWithDescription" => {
      media{
        mediaType,
        image{
          asset,
          alt
        },
        video{
          asset->{
            playbackId,
            "aspectRatio": data.aspect_ratio
          }
        }
      },
      description[]{
        ...,
        markDefs[]{
          ...,
          _type == "link" => {
            "href": @.href,
            "blank": @.blank
          }
        }
      },
      descriptionPosition
    },

    // Split Row
    _type == "portfolioRowSplit" => {
      leftMedia{
        mediaType,
        image{
          asset,
          alt
        },
        video{
          asset->{
            playbackId,
            "aspectRatio": data.aspect_ratio
          }
        }
      },
      rightMedia{
        mediaType,
        image{
          asset,
          alt
        },
        video{
          asset->{
            playbackId,
            "aspectRatio": data.aspect_ratio
          }
        }
      }
    },

    // Text Block Row
    _type == "portfolioRowText" => {
      text
    }
  },
  publishedAt
}`;

// GROQ query to fetch all portfolio projects in the order defined by Work Page
export const portfolioListQuery = `*[_type == "workPage" && _id == "workPage"][0].projects[]-> {
  _id,
  title,
  slug,
  hero{
    mediaType,
    image{
      asset,
      alt
    },
    video{
      asset->{
        playbackId,
        "aspectRatio": data.aspect_ratio
      }
    }
  },
  description,
  tags[]->{
    _id,
    id,
    text,
    hoverColor{
      hex,
      alpha
    }
  },
  publishedAt
}`;

// GROQ query to get all portfolio slugs
export const portfolioSlugsQuery = `*[_type == "portfolio"].slug.current`;
