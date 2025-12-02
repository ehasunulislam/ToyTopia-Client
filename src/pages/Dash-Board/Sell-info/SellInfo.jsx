import React from 'react'
import SellTable from '../../../Components/Sell-Info-table/SellTable'

const SellInfo = () => {
  return (
    <div>
        <div className="header pb-4">
            <h3 className='text-2xl font-bold text-center'>Sell Information</h3>
        </div>
        <SellTable/>
    </div>
  )
}

export default SellInfo