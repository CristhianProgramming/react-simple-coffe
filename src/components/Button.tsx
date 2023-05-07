
function Button(props : any) {



  return (
    <button className=" p-2 m-auto rounded-3xl button-style text-lg" style={{backgroundColor:props.color}}>{props.text}</button>
  )
}

export default Button
