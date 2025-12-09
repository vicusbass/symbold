// GROQ query to fetch the main page content
export const mainPageQuery = `*[_type == "mainPage"][0]{
  _id,
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
    },
    mobileMediaType,
    mobileImage{
      asset,
      alt
    },
    mobileVideo{
      asset->{
        playbackId
      }
    }
  },
  "featuredProjects": *[_type == "workPage"][0].projects[0...3]->{
    _id,
    title,
    "slug": slug.current,
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
    }
  }
}`;
