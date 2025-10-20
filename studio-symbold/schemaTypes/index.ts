import {tag} from './tag'
import {heroSection} from './objects/heroSection'
import {portfolioMedia} from './objects/portfolioMedia'
import {
  portfolioRowFull,
  portfolioRowWithDescription,
  portfolioRowSplit,
} from './objects/portfolioRow'
import {mainPage} from './documents/mainPage'
import {portfolio} from './documents/portfolio'

export const schemaTypes = [
  // Documents
  mainPage,
  portfolio,
  tag,
  // Objects
  heroSection,
  portfolioMedia,
  portfolioRowFull,
  portfolioRowWithDescription,
  portfolioRowSplit,
]
