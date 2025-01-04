


function showData(getData){

    boxes.innerHTML = "";

getData.map((ele)=> {

 boxes.innerHTML += `
 <div class="col ">
  <div class="card border-0 shadow-card p-2 h-100" >
  <img style="aspect-ratio:1/1" src=${ele.image} class="card-img-top img-thumbnail p-2" alt="...">
  <div class="card-body p-0 pt-1">
    <h6 class="card-title">${ele.title}</h6>
   
    <div class="d-flex justify-content-between">
       <span class="badge text-bg-secondary"> $ ${ele.price} /-</span>
       <span class="badge text-bg-light d-flex"><span style="display:block; overflow:hidden; width:${ele.rating.rate*16}px">⭐⭐⭐⭐⭐</span> ${ele.rating.rate}</span>
    </div>
    <div class="d-flex gap-2 pt-3">
    ${
      ( !checkCart(ele.id) && curUser)
       ?
        ` <div class="btn-group">
                <button onclick="incCount(${ele.id})" class="btn btn-dark btn-sm">+</button>
                <button class="btn btn-outline-dark disabled text-dark btn-sm">${checkQtn(ele.id)}</button>
                <button onclick="descCount(${ele.id})" class="btn btn-danger btn-sm btn-md-lg">-</button>
           </div>`
         :
          `
          <div class="text-center">
            <button onclick="addCart(${ele.id})" class="btn btn-success btn-sm btn-md-lg">Add to Cart</button>
          </div>
          `}
          <div class="text-center">
            <button onclick="addCart(${ele.id})" class="btn btn-warning btn-sm">More</button>
          </div>
    </div>
    
  </div>
</div>
</div>
 `
})

}

