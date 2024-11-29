import ClientTable from '@/components/myClient'
import TodaySummary from '@/components/todaySummary'
import React from 'react'

const Client = () => {
  return (
    <div>
        <TodaySummary/>
        <ClientTable/>
    </div>
  )
}

export default Client