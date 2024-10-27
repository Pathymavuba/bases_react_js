

function Menu ({color,firstMenu,secondMenu}){
return (
    <>
     <ul style={{width:"100%",height:"30vh",backgroundColor:`${color}`}}>
      <li>{firstMenu}</li>
      <li>{secondMenu}</li>
     </ul>
    </>
)
}

export default Menu