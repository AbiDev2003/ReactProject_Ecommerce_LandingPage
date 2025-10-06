import React from 'react'
import { useId } from 'react';
import ProductCard from './ProductCard.jsx';
import ProductData from './../utilities/productData.js';
import DashboardHeader from './DashboardHeader.jsx';
import UserDetailCardSection from './UserDetailCardSection.jsx';

function Dashboard({userName, location, email}) {
    const productCards = ProductData.map(items => 
        <ProductCard 
            key={useId()}
            location={location}
            {...items}
        />
    )
  return (
    <>

        {/* Dashboard welcome header */}
        <div className='bg-gray-300 p-4'>
            <DashboardHeader 
                    userName = {userName} 
                    productLength = {ProductData.length}
            />
        </div>

        {/* Products Grid */}
        <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 py-8">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto auto-rows-fr">
                {productCards}
            </section>
        </div>

        {/* information section */}
        <UserDetailCardSection email={email} userName = {userName}/>
    </>
  )
}

export default Dashboard