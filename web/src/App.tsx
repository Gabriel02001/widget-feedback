// import react, { ButtonHTMLAttributes } from 'react'

// interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
//   text?: string;
// }

// const Button: React.FC<buttonProps> = ({type, text}) => {
//   return <button className='bg-violet-500 p-2' type={type}>{text ?? "default"}</button>
// }
// function App() {
//    return ( 
//   <div>
//    <Button type="submit" text="tchau" />
//    <Button type="button" text="tchau" />
//    <Button type="submit"  />
//   </div>
   
//    )
// }

// export default App

import { Widget } from "./components/Widget";


export function App(){
  return <Widget />
}