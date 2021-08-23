const getProducts = () => {

    const InnerProducts = ProductosJSON.map(el => `<div class="col card p-3">
        <img src="${el.img}" alt="...${el.name}" style="width:60px"/>
        <h4>${el.name}</h4>
        <p>
            Color: <input type="color" value="${el.color}"/>
        </p>
        <p>
            Precio: ${el.price}
        </p>
    </div>`)

    const containerHTML = document.getElementById("container-products")
    
    let htmlInner = ""

    InnerProducts.forEach(element => {
        htmlInner = htmlInner + element
    });

    containerHTML.innerHTML = htmlInner

}

getProducts()

