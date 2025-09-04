import React from 'react'
import CustomNavbar from '../../../components/custom_navbar/CustomNavbar'
import Hero from './sub_components/hero/Hero'
import CustomSearchbar from '../../../components/custom_search_bar/CustomSearchbar'
import Services from './sub_components/services/Services'
import Category from './sub_components/category/Category'
import BestSeller from './sub_components/best_seller/BestSeller'
import NewArrivals from './sub_components/new_arrivals/NewArrivals'
import BestOffer from './sub_components/best_offer/BestOffer'
import ProductShorts from './sub_components/product_shorts/ProductShorts'
import LatestNewsAndContactUs from './sub_components/latest_news_and_contact_us/LatestNewsAndContactUs'
import Footer from './sub_components/footer/Footer'

function HomePage() {
  function userSearch(value){
    console.log(value)
  }
  return (
    <div>
        <CustomNavbar/>
        <Hero/>
        <Services/>
        <Category/>
         <NewArrivals/>
        <BestSeller/>
        <BestOffer/>
        <ProductShorts/>
        <LatestNewsAndContactUs/>
        <Footer/>
        {/* <CustomSearchbar onChange={userSearch}/> */}
    </div>
  )
}

export default HomePage