import React from 'react'

function Card({item}) { //passed as a props because it is referingfrom the parent to child 
  console.log(item)
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img src={"https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1729163441~exp=1729167041~hmac=7cb7c556014b2061cbacd30b0fbcab2357f7bda949dea3536d15a0193c7ea981&w=740"} alt="Shoes" />
   
    

  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>Best books for the sell </p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline">{item.category}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
