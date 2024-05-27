import React from 'react'
import styles from './Cards.module.scss'


const Cards = ({results}) => {
  let display;
  if(results){

    display = results.map(x=>{

      let {id , name,image,location,status} = x
      return( <div key={id} className="col-4 position-relative ">
        <div className={styles.cards}>
         <img src={image} alt="" className={`${styles.img} img-fluid`} />
         <div className="content pb-4 ">
          <div className="fs-4 mb-4">{name}</div>
          <div className="fs-6">Last Location</div>
          <div className="">{location.name}</div>
         </div>
        </div>
      {(()=>{
        if(status === "Dead"){
          return(
            <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
          )

        }
        else if(status === "Alive"){
          return(
            <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
          )
          
        }
        else{
          return(
            <div className={`${styles.badge} badge bg-primary position-absolute`}>{status}</div>
          )
        }
      })()}
        
      </div> )
    })

  } else{
    display = "No characters found"
  }

  return (
    <>{display}</>
  )
}

export default Cards