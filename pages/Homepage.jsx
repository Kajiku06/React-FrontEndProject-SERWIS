import React from 'react'
import WelcomeSection from '../components/homepage/WelcomeSection'
import PortfolioSection from '../components/homepage/PortfolioSection'
import OfferSection from '../components/homepage/OfferSection'

export default function Homepage() {
  return (
    <div>
        <WelcomeSection/>
        <PortfolioSection/>
        <OfferSection/>
    </div>
  )
}
