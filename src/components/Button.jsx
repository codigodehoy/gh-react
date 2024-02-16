

const Button = ({children, handleOnClick}) => {
  return (
    <button onClick={handleOnClick}>{children}</button>
  )
}

export default Button;
