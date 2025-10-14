import type { ImageMetadata } from 'astro';

import heroProj1 from '../assets/poc/project-hero-1.png';
import heroProj2 from '../assets/poc/project-hero-2.png';
import heroProj3 from '../assets/poc/project-hero-3.png';

export type ProjectDetail = {
  image: ImageMetadata;
  alt: string;
  size: 'full' | 'half';
  description?: string;
  isDescriptionFirst?: boolean;
};

export type Project = {
  id: number;
  hero: ImageMetadata;
  alt: string;
  title: string;
  team: string;
  description: string;
  tags: string[];
  details?: ProjectDetail[];
};

export const tags = [
  { id: 'all', label: 'All' },
  { id: 'brand', label: 'Brand identity' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'naming', label: 'Naming & Strategy' },
  { id: 'graphic', label: 'Graphic design' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'motion', label: 'Motion' },
];

export const projects: Project[] = [
  {
    id: 1,
    hero: heroProj1,
    alt: 'Hero Project 1',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['brand', 'graphic'],
    details: [
      {
        image: heroProj2,
        alt: 'Detail Image 2',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'An extensive description for the second detail image, explaining the design choices and project context.',
      },
      { image: heroProj1, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj3,
        alt: 'Detail Image 3',
        size: 'half',
        description:
          'Another extensive description for the third detail image, providing insights into the design process.',
      },
    ],
  },
  {
    id: 2,
    hero: heroProj2,
    alt: 'Hero Project 2',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['packaging', 'brand'],
    details: [
      { image: heroProj2, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj1,
        alt: 'Detail Image 2',
        size: 'half',
        description:
          'We explored multiple packaging mockups to communicate freshness while keeping costs efficient.',
      },
      {
        image: heroProj3,
        alt: 'Detail Image 3',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'The digital touchpoints extended the tactile experience online, resulting in a unified customer journey.',
      },
    ],
  },
  {
    id: 3,
    hero: heroProj3,
    alt: 'Hero Project 3',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['uiux', 'motion'],
    details: [
      { image: heroProj3, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj1,
        alt: 'Detail Image 2',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'A responsive design system empowered the team to ship new features without reinventing the interface.',
      },
      {
        image: heroProj2,
        alt: 'Detail Image 3',
        size: 'half',
        description:
          'Motion studies helped us choreograph micro-interactions that made onboarding intuitive and delightful.',
      },
    ],
  },
  {
    id: 4,
    hero: heroProj1,
    alt: 'Hero Project 4',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['brand', 'naming'],
    details: [
      { image: heroProj1, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj2,
        alt: 'Detail Image 2',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'An extensive description for the second detail image, explaining the design choices and project context.',
      },
      {
        image: heroProj3,
        alt: 'Detail Image 3',
        size: 'half',
        description:
          'Another extensive description for the third detail image, providing insights into the design process.',
      },
      { image: heroProj1, alt: 'Detail Image 4', size: 'full' },
      { image: heroProj2, alt: 'Detail Image 5', size: 'full' },
    ],
  },
  {
    id: 5,
    hero: heroProj2,
    alt: 'Hero Project 5',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['graphic', 'motion'],
    details: [
      { image: heroProj1, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj2,
        alt: 'Detail Image 2',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'An extensive description for the second detail image, explaining the design choices and project context.',
      },
      {
        image: heroProj3,
        alt: 'Detail Image 3',
        size: 'half',
        description:
          'Another extensive description for the third detail image, providing insights into the design process.',
      },
      { image: heroProj1, alt: 'Detail Image 4', size: 'full' },
      { image: heroProj2, alt: 'Detail Image 5', size: 'full' },
    ],
  },
  {
    id: 6,
    hero: heroProj3,
    alt: 'Hero Project 6',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['packaging', 'uiux'],
    details: [
      { image: heroProj1, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj2,
        alt: 'Detail Image 2',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'An extensive description for the second detail image, explaining the design choices and project context.',
      },
      {
        image: heroProj3,
        alt: 'Detail Image 3',
        size: 'half',
        description:
          'Another extensive description for the third detail image, providing insights into the design process.',
      },
      { image: heroProj1, alt: 'Detail Image 4', size: 'full' },
      { image: heroProj2, alt: 'Detail Image 5', size: 'full' },
    ],
  },
  {
    id: 7,
    hero: heroProj1,
    alt: 'Hero Project 7',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['brand', 'uiux'],
    details: [
      { image: heroProj1, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj2,
        alt: 'Detail Image 2',
        size: 'half',
        description:
          'We detailed a modular signage system, scaling from storefronts to pop-up experiences.',
      },
      {
        image: heroProj3,
        alt: 'Detail Image 3',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'Digital prototypes validated the redesigned booking flow with power users before launch.',
      },
    ],
  },
  {
    id: 8,
    hero: heroProj2,
    alt: 'Hero Project 8',
    title: 'Rebranding Outdoorz',
    team: `Team:
Creative director: Ovidiu Pop
Designer: Alexandru Kun
Designer: Emilia Ciorea`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['motion', 'graphic'],
    details: [
      { image: heroProj1, alt: 'Detail Image 1', size: 'full' },
      {
        image: heroProj2,
        alt: 'Detail Image 2',
        size: 'half',
        isDescriptionFirst: true,
        description:
          'An extensive description for the second detail image, explaining the design choices and project context.',
      },
      {
        image: heroProj3,
        alt: 'Detail Image 3',
        size: 'half',
        description:
          'Another extensive description for the third detail image, providing insights into the design process.',
      },
      { image: heroProj1, alt: 'Detail Image 4', size: 'full' },
      { image: heroProj2, alt: 'Detail Image 5', size: 'full' },
    ],
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
