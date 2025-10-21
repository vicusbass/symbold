export interface MuxVideo {
  asset: {
    _ref: string;
    _type: 'reference';
    playbackId?: string;
  };
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface SanityColor {
  hex?: string;
  alpha?: number;
}

export interface HeroSection {
  mediaType: 'image' | 'video';
  image?: SanityImage;
  video?: MuxVideo;
  mobileMediaType: 'image' | 'video';
  mobileImage?: SanityImage;
  mobileVideo?: MuxVideo;
}

export interface FeaturedProject {
  _key: string;
  mediaType: 'image' | 'video';
  image?: SanityImage;
  video?: MuxVideo;
  description: string;
  textColor: SanityColor;
  projectReference: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
}

export interface FeaturedProjectsSection {
  projects: FeaturedProject[];
}

export interface MainPage {
  _id: string;
  title?: string;
  hero: HeroSection;
  featuredProjects?: FeaturedProjectsSection;
}
