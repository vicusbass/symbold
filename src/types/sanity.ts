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
  desktopTextColor?: SanityColor;
  mobileMediaType: 'image' | 'video';
  mobileImage?: SanityImage;
  mobileVideo?: MuxVideo;
  mobileTextColor?: SanityColor;
}

export interface MainPage {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  hero: HeroSection;
}
