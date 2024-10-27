
const Button = ({titre,handleAction}) =>{
    return(
      <button onClick={handleAction}>{titre}</button>
    )
}

export default Button