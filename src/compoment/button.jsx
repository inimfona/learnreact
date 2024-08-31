import React from "react";
import styles from "./card.module.css";
import propTypes  from "prop-types";


 function Button({
    children,
    labelbtn,
    theme  
})
    {
        // function something(){
        //     alert('please input details'+ " "+labelbtn)
        // }
         theme={ 'Saiu digitals':styles.purchase1,
            'Lol ventures':styles.purchase2,
            'Cloud rentals':styles.purchase3,}
           let done=theme[labelbtn]
       
        return(
            <div className="center">
                <button 
                onClick={ function something(){
                    alert('please input details'+ " "+labelbtn)
                }} 
                className={`${styles.purchase} ${done}`}>{children}</button>
            </div>
        )
    }
    Button.propTypes={
          
    }
    export default Button    