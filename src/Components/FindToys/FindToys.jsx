import React from 'react'
import { findToys } from '../../assets/assets'
import FindCard from '../CardDesign/FindCard/FindCard'
import Title from '../Title/Title'

const FindToys = () => {
  return (
    <div className='my-5 mt-15'>
        <div className='flex justify-center items-center'>
            <Title title1={<>Find the Perfect Toy</>} title2={<>Our Collections</>} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center px-20 md:px-30 lg:px-50'>
            {
                findToys.map((item) => {
                    return(
                        <FindCard 
                        key={item.id} 
                        image={item.image}
                        title={item.title}
                    />
                    )
                })
            }
        </div>
    </div>
  )
}

export default FindToys
