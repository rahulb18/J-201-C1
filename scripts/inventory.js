



function append(){
    
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let pro=document.getElementById("all_products");
    pro.innerHTML=null;

    let div=document.createElement("div");
    

    data.forEach(function(el,index){

        let td1=document.createElement("h3");
        td1.innerText=el.type;

        let td2=document.createElement("p");
        td2.innerText=el.desc;

        let td3=document.createElement("h3");
        td3.innerText=el.price;

        let img=document.createElement("img");
        img.src=el.image;

        let remove=document.createElement("button");
        remove.innerHTML="Remove Product";
        remove.id="remove_product";

        remove.addEventListener("click",function(){
            removee(index);
        })


        div.append(td1,td2,td3,img,remove);
        pro.append(div);


    })

    
}
append();

function removee(index){

    let data=JSON.parse(localStorage.getItem("products")) || [];

    let newData=data.filter(function(el,i){

        
            return i!==index;
    
    });
    localStorage.setItem("products",JSON.stringify(newData));
    append();

    

}