
const Button = ({Tagname="button", children, ...props}) => {
  return (
    <Tagname {...props} className="bg-primary text-white rounded-md cursor-pointer px-3 py-2 inline-flex">
        {children}
    </Tagname>
  )
}

export default Button