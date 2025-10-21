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
        playbackId
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
            playbackId
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
            playbackId
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
            playbackId
          }
        }
      },
      description,
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
            playbackId
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
            playbackId
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

// GROQ query to fetch all portfolio projects (for listing pages)
export const portfolioListQuery = `*[_type == "portfolio"] | order(publishedAt desc){
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
        playbackId
      }
    }
  },
  description,
  tags[]->{
    _id,
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
