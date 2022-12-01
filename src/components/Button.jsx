
const Button = ( {texto, color, onClick} ) => {
  
    /*const saludo = () => {
        console.log('click')
    }*/
  
  
    return (
    <button 
        onClick={onClick} 
        style={ {backgroundColor: color} } 
        className="btn"> {texto} 
    </button>
  )
}

export default Button