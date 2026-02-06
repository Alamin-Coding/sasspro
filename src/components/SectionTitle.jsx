
const SectionTitle = ({align="center", title, description}) => {
    const postion = ()=> {
        if (align == "left") {
            return "right-auto"
        }
        return "0 auto"
    }

    const textAligns = {
        textAlign: align,
        margin: postion()
    }
  return (
    <div className={`py-10 max-w-[455px] `} style={textAligns}>
        <h2 className="font-bold text-[36px] leading-normal text-[#112F42]">{title}</h2>
        {description &&  <p className="text-base">{description}</p>}
    </div>
  )
}

export default SectionTitle