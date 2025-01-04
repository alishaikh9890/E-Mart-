

let cartData = JSON.parse(localStorage.getItem("cartData")) || []
window.onload= showData(data);
window.onload = showCart(cartData)




function incCount(id){
    cartData =  cartData.map((ele) => {
      if(ele.id == id){
        ele.quentity += 1;
      }
      return ele;
    })

    localStorage.setItem("cartData", JSON.stringify(cartData));

    showCart();
    showData(data)
}


function descCount(id){
    cartData =  cartData.map((ele) => {
      if(ele.id == id){
        if(ele.quentity > 1){
              ele.quentity -= 1;
        }
        else{
          return ele = null;
        }
 
      }
      return ele;
    }).filter((ele) => ele != null)

    localStorage.setItem("cartData", JSON.stringify(cartData));

    showCart();
    document.getElementById("cartlength").innerHTML = cartData.length
    showData(data)
}


function removeItem(id){

     cartData = cartData.filter((ele) => ele.id != id);
   
    localStorage.setItem("cartData", JSON.stringify(cartData))

    // setCartData(remcartData);
    showCart()
    document.getElementById("cartlength").innerHTML = cartData.length;
    showData(data);

}


function checkCart(id){

  let cartData = JSON.parse(localStorage.getItem("cartData")) || []

  cartData = cartData.filter((ele) => ele.id == id)

  return !cartData[0]
}



function checkQtn(id){

  let cartData = JSON.parse(localStorage.getItem("cartData")) || []

  cartData = cartData.filter((ele) => ele.id == id)

  return cartData[0].quentity;
}





function addCart(id){

  let curUser = JSON.parse(localStorage.getItem("curUser"));

  if(curUser)
  {
    let newcartData = data.filter((ele) => ele.id == id).map((ele) => {
        if(ele.id == id){
          ele.quentity = 1; 
        }
      return ele;
      })

      cartData = [...cartData, ...newcartData]
      console.log(cartData)
    
      setCartData(cartData)

      document.getElementById("cartlength").innerHTML = cartData.length

      showData(data)
  }
  else
  {
                 
    let myModal = new bootstrap.Modal(document.querySelector("#exampleModal"))
          myModal.show();
  }

}


document.getElementById("cartlength").innerHTML = cartData.length;


