

cartData = JSON.parse(localStorage.getItem("cartData"))


function showCart(){
 let cartData = JSON.parse(localStorage.getItem("cartData"))

  let cart = document.querySelector(".cart");
  cart.innerHTML = "";

  cartData.map((ele) => {
  cart.innerHTML += `


              <div class="col-12">
                <div class="card border-0 p-2 shadow-card">
                  <div class="row">
                    <div class="col-3">
                      <img src=${ele.image} alt="${ele.title}" style="aspect-ratio:1/1" class="img-fluid rounded">
                    </div>
                    <div class="col-9">
                      <div class="card-body p-0 ps-2">
                        <h6 class="card-title">${ele.title}</h6>
                        <div class="card-text d-flex justify-content-between align-items-center">
                          <h6 class="card-text m-0"> <span class="badge text-bg-secondary"> $ ${ele.price*ele.quentity} /-</span></h6>
                           <div class="btn-group">
                            <button onclick="incCount(${ele.id})" class="btn btn-dark btn-sm">+</button>
                            <button class="btn btn-outline-dark disabled text-dark btn-sm">${ele.quentity}</button>
                            <button onclick="descCount(${ele.id})" class="btn btn-danger btn-sm">-</button>
                          </div>
                          <button onclick="removeItem(${ele.id})" class="btn btn-sm btn-light "><i class="bi bi-trash"></i></button>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
  `
})

}

