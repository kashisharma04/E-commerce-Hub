import React from 'react'

export default function Wishlist() {
  function wishlist(){
    let wish = "abc"
    alert(wish)
    
  }
  return (
    <>
        <h1 >My WishList!</h1>
        <button onClick={wishlist}>wish!</button>

        <div className="wishlist-div">
          
        </div>
        
    </>
  )
}



