import React from "react";
import styles from "./card.module.css";
import Button from './button.jsx';

export default function Card(
    {
        label,
        image,
        pricelabel,
        list1,
        list2,
        list3,
        children, 
        duration=""
    }
    
){
    let year= duration==="";
    return(
        <>
            <div className={styles.card}>
                <div className="center">
                    <p className={styles.label}>
                        {label}
                    </p>
                </div>
                <div className={`${styles.imgheight} center`}>
                    <img className={`${styles.cardimg} `} src={image} alt="" />
                </div>
                <div className="center">
                  <p className={styles.price}> {pricelabel}{year ? null:duration}</p>
                </div>
                <div className={`${styles.listdiv} center`}>
                    <p className={styles.list}>{list1}</p>
                    <p className={styles.list}>{list2}</p>
                    <p className={styles.list}>{list3}</p>
                </div>
               <Button theme=""  labelbtn={label} >Purchase</Button>
            </div>
        </>
    )
}