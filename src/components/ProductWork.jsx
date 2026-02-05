import React from 'react'
import SectionTitle from './SectionTitle'
import AppImage from './AppImage'

import productImage from "../assets/div.work-thumb.png"
import Section from './Section'
import Container from './Container'
const ProductWork = () => {
  return (
    <Section className='bg-[#F3F3F3]'>
        <Container>
            <SectionTitle 
             title={"All product work with several devices."}
             description={"A great SaaS UI/UX design can make your product addictive and uncomfortable to give up."}
            //  align='left'
             />

             <div className='flex justify-center gap-2'>
                <AppImage img={"/a.btn.png"} />
                <AppImage img={"/apple.png"} />
             </div>

             <div className='flex justify-center mt-6'>
                <img src={productImage} alt="image" className='w-full' />
             </div>
        </Container>
    </Section>
  )
}

export default ProductWork