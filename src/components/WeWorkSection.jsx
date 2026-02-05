import React from 'react'
import Container from './Container'
import SectionTitle from './SectionTitle'
import Section from './Section'
import WorkCard from './WorkCard'
import workimage_1 from '../assets/work-1.png'

const WeWorkSection = () => {
    return (
        <Section>
            <Container>
                <SectionTitle title={"The Product we work with."} />
                <div className='grid grid-cols-3 gap-5'>
                    <WorkCard img={workimage_1} title={"Consulting"} description={`Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.`} />
                    <WorkCard img={workimage_1} title={"Consulting"} description={`Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.`} />
                    <WorkCard img={workimage_1} title={"Consulting"} description={`Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.`} />
                </div>
            </Container>
        </Section>
    )
}

export default WeWorkSection