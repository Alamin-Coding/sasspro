import React from 'react'
import Section from './Section'
import Container from './Container'
import engage from "../assets/engage.png"
import SectionTitle from './SectionTitle'

const EngageSection = () => {
    return (
        <Section>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div>
                        <img src={engage} alt="image" />
                    </div>
                    <div className=''>
                        <SectionTitle title={"Don’t just engage, make it engaging."} align='left' />
                        <p className='text-base py-5'>Since 1999. For millions of users. We transform businesses with powerful and
                            adaptable digital solutions.</p>
                        <p className='pb-6'>Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus
                            imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim.</p>
                        <button className='bg-primary inline-block rounded-[6px] text-white px-12.5 py-5 cursor-pointer'>
                            Read More
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default EngageSection