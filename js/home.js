
function setCartData(d){
    localStorage.setItem("cartData", JSON.stringify(d))
  }
  
  
  
  let search = document.getElementById("search")
  
    search.addEventListener("keyup", function(e){
      let val = e.target.value.toUpperCase();
      
      let searchData = data.filter((ele) => !ele.title.toUpperCase().indexOf(val) || !ele.category.toUpperCase().indexOf(val))
   console.log(searchData)
  
      showData(searchData);
  
    })
  
  
  
  let boxes = document.querySelector("#boxes")
  
  let mens= document.querySelector("#mens");
  let viewall= document.querySelector("#viewall");
  let jewelery = document.querySelector("#jewelery")
  let price_sort = document.querySelector("#price_sort");
  
  
  
  price_sort.addEventListener("click", ()=>{
      // let getData = data.map((ele) => ele.price.sort());
  
      data.sort((a, b) => a.price - b.price);
      let getData = data;
      showData(getData)
  
      // let , amul, joke, amit
      // amit, amul, let, joke
  })
  
  jewelery.addEventListener("click", ()=>{
      let getData = data.filter((ele)=> ele.category=="jewelery");
      showData(getData)
  })
  
  mens.addEventListener("click", ()=>{
     let getData = data.filter((ele) => ele.category=="men's clothing");
      console.log(getData) ;
      showData(getData)
  })
  
  
  viewall.addEventListener("click", ()=>{
     let getData = data.map((ele) => ele);
      console.log(getData) ;
      showData(getData)
  })
  
  