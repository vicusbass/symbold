import type { MuxVideo, SanityImage, SanityColor, PortableText } from './sanity';

export interface PortfolioMedia {
  mediaType: 'image' | 'video';
  image?: SanityImage;
  video?: MuxVideo;
}

export interface Tag {
  _id: string;
  text: string;
  hoverColor?: SanityColor;
}

// Full Width Row
export interface PortfolioRowFull {
  _type: 'portfolioRowFull';
  _key: string;
  desktopMedia: PortfolioMedia;
  mobileMedia: PortfolioMedia;
}

// Media with Description Row
export interface PortfolioRowWithDescription {
  _type: 'portfolioRowWithDescription';
  _key: string;
  media: PortfolioMedia;
  description: PortableText;
  descriptionPosition: 'left' | 'right';
}

// Split Row
export interface PortfolioRowSplit {
  _type: 'portfolioRowSplit';
  _key: string;
  desktopLeftMedia: PortfolioMedia;
  desktopRightMedia: PortfolioMedia;
  mobileTopMedia: PortfolioMedia;
  mobileBottomMedia: PortfolioMedia;
}

// Union type for all row types
export type PortfolioRow =
  | PortfolioRowFull
  | PortfolioRowWithDescription
  | PortfolioRowSplit;

// Full Portfolio Document
export interface Portfolio {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  hero: PortfolioMedia;
  team?: string;
  description: string;
  tags: Tag[];
  content?: PortfolioRow[];
  publishedAt?: string;
}

// Portfolio List Item (for listing pages)
export interface PortfolioListItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  hero: PortfolioMedia;
  description: string;
  tags: Tag[];
  publishedAt?: string;
}
