import menuIcon from "../assets/menu_icon.svg"
const Header = () => {
  return (
        <nav className="wrapper bg-secondaryGreen py-[25px] absolute ">
        <div className="sectionContent flex justify-between">
            <div className="flex">
                <img src="/logo.svg" alt="Brand Logo" width="148" />
                <div className="flex sm:hidden">
                    <img src={menuIcon} alt="Hamburger menu" />
                </div>
            </div>
            <div className="flex justify-center gap-7.5 items-center">
                <div className="flex items-center">
                    <a href="" className="navLink">Home</a>
                    <img src="/chevron-down.svg" alt="Dropdown icon" width="20" />
                </div>
                <div className="flex items-center">
                    <a href="" className="navLink">Pages</a>
                    <img src="/chevron-down.svg" alt="Dropdown icon" width="20" />
                </div>
                <div>
                    <a href="" className="navLink">About Us</a>
                </div>
                <div>
                    <a href="" className="navLink">Services</a>
                </div>
                <div>
                    <a href="" className="navLink">Blog</a>
                </div>
                <div>
                    <a href="" className="navLink">Contact</a>
                </div>
                <button className="navLink px-5.5 py-2.5 border-white border rounded-[8px]">
                    Let's talk
                </button>
            </div>
        </div>
        </nav>
  )
}

export default Header