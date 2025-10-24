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
        playbackId
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
  featuredProjects{
    projects[]{
      _key,
      mediaType,
      image{
        asset,
        alt
      },
      video{
        asset->{
          playbackId
        }
      },
      "title": projectReference->title,
      "slug": projectReference->slug.current
    }
  }
}`;
