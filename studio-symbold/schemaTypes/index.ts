import {tag} from './tag'
import {heroSection} from './objects/heroSection'
import {portfolioMedia} from './objects/portfolioMedia'
import {
  portfolioRowFull,
  portfolioRowWithDescription,
  portfolioRowSplit,
  portfolioRowText,
} from './objects/portfolioRow'
import {mainPage} from './documents/mainPage'
import {portfolio} from './documents/portfolio'
import {workPage} from './documents/workPage'

export const schemaTypes = [
  // Documents
  mainPage,
  portfolio,
  workPage,
  tag,
  // Objects
  heroSection,
  portfolioMedia,
  portfolioRowFull,
  portfolioRowWithDescription,
  portfolioRowSplit,
  portfolioRowText,
]
