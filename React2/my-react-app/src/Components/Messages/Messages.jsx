import "./Message.css"
import {format} from "timeago.js"
import { useRef,useEffect } from "react"
export default function Messages({own,text,Time,REF,msg}){

    const Scrollref = useRef()
   
    useEffect(()=>{
        Scrollref.current?.scrollIntoView({behavior:"smooth"})
  
      },[msg])

    return(
    
        <div  ref = {Scrollref} className={own?"MessageContainer own":"MessageContainer"}>
            <div className="MessageContainerTop">
            <img className="MessageImage" src="./Assets/R.jpg" style={{height:"32px",width:"32px"}}/>
             <div className="message_text">{text} </div>
            </div>
             
            <div className="MessageContainerBottom" >
            {format(Time)}
            </div>
        </div>

    )
}

/*             </img>
                */