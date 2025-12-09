// GROQ query to fetch the about page content
export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  _id,
  media1Desktop{
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
  media1Mobile{
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
  media2Desktop{
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
  media2Mobile{
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
  media3Desktop{
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
  media3Mobile{
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
}`;
