import React from 'react'
import CartTable from '../../../Components/Add-To-Cart-Table/CartTable'

const BuyProduct = () => {
  return (
    <div>
         <div className="header pb-4">
            <h3 className='text-2xl font-bold text-center'>You want buy this product</h3>
        </div>

        {/* table-sec */}
        <CartTable />
    </div>
  )
}

export default BuyProduct