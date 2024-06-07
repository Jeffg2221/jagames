import React from 'react'
import ExploreTopGames from './components/ExploreTopGames'
import Carousel from './components/Carousel'
import GameServices from './components/GameServices'
import Heros from './components/Heros'

function HomePage() {
  return (
    <>
         <ExploreTopGames/>
    <Carousel/>
    <Heros/>
    <GameServices/>
    </>
  )
}

export default HomePage