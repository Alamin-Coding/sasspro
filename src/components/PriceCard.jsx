import Button from "./Button"

const PriceCard = ({ title, price, planText, planInfo = [] }) => {
    return (
        <div className="bg-[#F3F3F3] px-[30px] py-[50px]">
            <div className="border-b border-b-[#2C83BB] pb-6">
                <h2>{title}</h2>
                <p className="text-base text-slate-500"><strong className="text-5xl">${price}</strong>/{planText}</p>
            </div>
            <ul className="pt-9 pb-5 space-y-5">
                {
                    planInfo.map((info, index) => <li key={index} className="flex gap-3 items-center">

                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.4343 13.7312L0.234305 8.53123C-0.0781016 8.21883 -0.0781016 7.7123 0.234305 7.39986L1.36565 6.26848C1.67805 5.95605 2.18462 5.95605 2.49702 6.26848L5.99999 9.77142L13.503 2.26848C13.8154 1.95608 14.3219 1.95608 14.6343 2.26848L15.7657 3.39986C16.0781 3.71227 16.0781 4.2188 15.7657 4.53123L6.56568 13.7313C6.25324 14.0437 5.74671 14.0437 5.4343 13.7312Z" fill="#2C83BB" />
</svg>


                        {info}
                    </li>)
                }
            </ul>

            <Button type="button">Try for Free</Button>
        </div>

    )
}

export default PriceCard