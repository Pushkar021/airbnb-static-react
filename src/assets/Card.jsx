import React from "react"


// export default function Card(props) {
//     return(
//         <div className="card">
//         <img src={props.img} className="card1" />
//         <div className="stars">
//         <div className="card--stats">
//             <img src={star} className="card--star" />
//             <span>{props.rating}</span>
//             <span className="gray">({props.reviewCount}) • </span>
//             <span className="gray">{props.location}</span>
//             </div>
//             <p>{props.title}</p>
//             <p><span className="bold">From ${props.price}</span> / person</p>

//         {/* <img src={props.des} /> */}
        
//         </div>
//         </div>        
//     )
// }


export default function Card(props) {
      let badgeText
    if (props.x.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.x.location === "Online") {
        badgeText = "ONLINE"
    }
    
    console.log(props.x)
    return (
        
        <div className="card">
             {badgeText && <div className="cardlable">{badgeText}</div>}
                     <img src={"/images/" + props.x.img} className="card--image" />
            <div className="card--stats">
               <img src="../public/images/Star.jpg" className="card--star" />
                <span>{props.x.stats.rating}</span>
                <span className="gray">({props.x.stats.reviewCount}) • </span>
                <span className="gray">{props.x.location}</span>
            </div>
             <p className="card--title">{props.x.title}</p>
            <p><span className="bold">From ${props.x.price}</span> / person</p>
        </div>
    )
}
