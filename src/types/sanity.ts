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

export interface PortfolioHero {
  mediaType: 'image' | 'video';
  image?: SanityImage;
  video?: MuxVideo;
}

export interface FeaturedProject {
  _id: string;
  title: string;
  slug: string;
  hero: PortfolioHero;
}

export interface MainPage {
  _id: string;
  title?: string;
  hero: HeroSection;
  featuredProjects?: FeaturedProject[];
}

export interface AboutPage {
  _id: string;
  media1Desktop?: PortfolioHero;
  media1Mobile?: PortfolioHero;
  media2Desktop?: PortfolioHero;
  media2Mobile?: PortfolioHero;
  media3Desktop?: PortfolioHero;
  media3Mobile?: PortfolioHero;
}
