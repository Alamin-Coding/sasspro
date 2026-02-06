import React, { useEffect, useState } from 'react'
import Section from './Section'
import Container from './Container'
import PriceCard from './PriceCard'
import SectionTitle from './SectionTitle'

const PriceSection = () => {
    const [plan, setPlan] = useState("Monthly")

    const handlePlan = (e) => {
        const isMonthly = e.target.checked
        if (isMonthly) {
            setPlan("Annualy")
        }else {
            setPlan("Monthly")
        }
    }
    return (
        <Section>
            <Container>
                <SectionTitle title={"Affordable Pricing"}  />
                <div>
                    <div class="flex items-center justify-center w-full my-8">
                        <span class={`text-xs mx-5 ${plan === "Monthly" && "font-bold"}`}>Monthly</span> 
                        <label for="toggle" class="flex items-center cursor-pointer">
                            <input onChange={(e)=> handlePlan(e)} type="checkbox" id="toggle" class="sr-only peer" />
                            <div class="block relative bg-primary w-16 h-9 p-1 rounded-full before:absolute before:bg-white before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
                        </label>
                        <span class={`text-xs mx-5 ${plan !== "Monthly" && "font-bold"}`}>Annualy</span>
                    </div>
                </div>
                {
                    plan==="Monthly" ? 
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                    <PriceCard title={"Premium Plan"} price={0} planText={"Free"} planInfo={[
                        "Access to editing all blocks",
                        "Editing blocks together",
                        "Access to all premium icons",
                        "A dedicated domain"
                    ]} />
                    <PriceCard title={"Premium Plan"} price={plan=="Monthly"? 236 :800} planText={"Monthly"} planInfo={[
                        "Access to editing all blocks",
                        "Editing blocks together",
                        "Access to all premium icons",
                        "A dedicated domain"
                    ]} />
                    <PriceCard title={"Premium Plan"} price={599} planText={"Yearly"} planInfo={[
                        "Access to editing all blocks",
                        "Editing blocks together",
                        "Access to all premium icons",
                        "A dedicated domain"
                    ]} />
                </div>
                    :

<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                    <PriceCard title={"Premium Plan"} price={0} planText={"Free"} planInfo={[
                        "Access to editing all blocks",
                        "Editing blocks together",
                        "Access to all premium icons",
                        "A dedicated domain"
                    ]} />
                    <PriceCard title={"Premium Plan"} price={plan=="Monthly"? 236 :800} planText={"Monthly"} planInfo={[
                        "Access to editing all blocks",
                        "Editing blocks together",
                        "Access to all premium icons",
                        "A dedicated domain"
                    ]} />
                    <PriceCard title={"Premium Plan"} price={599} planText={"Yearly"} planInfo={[
                        "Access to editing all blocks",
                        "Editing blocks together",
                        "Access to all premium icons",
                        "A dedicated domain"
                    ]} />
                    <PriceCard title={"Premium Plan"} price={599} planText={"Yearly"} planInfo={[
                        "1 year service free",
                    ]} />
                </div>
                }
                
            </Container>
        </Section>
    )
}

export default PriceSection