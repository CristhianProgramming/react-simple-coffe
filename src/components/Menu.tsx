
import icon from "../assets/coffeIcon.webp";


export function MenuComponenet() {
  return (
    <div className='container w-full m-auto mt-4 p-3 rounded-2xl grid grid-cols-2' style={{backgroundColor:"#BF8F73"}}>
      <h3 className="titleMenu text-2xl" >COFFE FANTASY</h3>
      <img src={icon} className="w-7 ml-auto" />
    </div>
  )
}


