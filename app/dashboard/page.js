import Cards from '@/components/cards'
import Graph from '@/components/graph'
import Firms from '@/components/percentageCircle/Firms'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Cards/>
      <Graph/>
      <Firms/>
    </div>
  )
}

export default Page