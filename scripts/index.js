//store the products array in localstorage as "products"

function Product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}


function storeData(){
    event.preventDefault();
    let form=document.getElementById("products");

    let type=document.getElementById("type").value;
    let desc=document.getElementById("desc").value;
    let price=document.getElementById("price").value;
    let image=document.getElementById("image").value;

    let p1= new Product (type,desc,price,image);

    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.push(p1);

    localStorage.setItem("products",JSON.stringify(data));

    document.getElementById("type").value=null;
    document.getElementById("desc").value=null;
    document.getElementById("price").value=null;
    document.getElementById("image").value=null;
    
}