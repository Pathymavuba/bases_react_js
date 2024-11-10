

function Menu ({color,children}){
return (
    <>
     <ul style={{width:"100%",height:"30vh",backgroundColor:`${color}`}}>
     {children}
     </ul>
    </>
)
}

export default Menu