const main = document.getElementById('main')
const cart = document.querySelector('.carta')

carrito = [];

//Llamando funciones
mostrarCarrito();
crearCartas()

//Creacion de las Cards
function  crearCartas() {
    products.forEach((elemento) => {

      const divCarta = document.createElement('div') 
      const h2 = document.createElement('h2')
      const divImg = document.createElement('div')
      const img = document.createElement('img')
      const precio = document.createElement('figPrecio')
      const boton = document.createElement('button')
      const br = document.createElement('br')
      const br2 = document.createElement('br')

      boton.setAttribute('id_product', elemento.id)
      boton.addEventListener('click', agregarCarrito);

      divCarta.classList.add('container')
      divImg.classList.add('divImg')
      h2.classList.add('h2')
      h2.textContent = elemento.name;
      precio.textContent = elemento.price
      precio.classList.add('classPrecio')
      boton.textContent = "Agregar"
      boton.classList.add('classBoton')

      img.src = elemento.img

      divCarta.appendChild(h2);
      divCarta.appendChild(divImg)
      divCarta.appendChild(img)
      divCarta.appendChild(br2)
      divCarta.appendChild(precio)
      divCarta.appendChild(br)
      divCarta.appendChild(boton)
      main.appendChild(divCarta)

      console.log(elemento)

  });
}



//Carrito nuevo de compras
function mostrarCarrito (){
  cart.innerHTML = ''
  let nuevoCarrito = [...new Set(carrito)];

  nuevoCarrito.forEach(Element => {
      const productos = products.filter(products =>{
          return products.id == parseInt(Element);
      })

      //Cantidades
      let cont = 0;
      for(let id of carrito){
          if(id === Element){
              cont++
          }
      }

      //Creacion nuevo carrito
      const card_container = document.createElement('div');
      const card_name = document.createElement('h2');
      const img_container = document.createElement('div')
      const card_img = document.createElement('img');
      const card_price = document.createElement('p');
      const aumento = document.createElement('p');
      const card_button_suma = document.createElement('button');
      const card_button_resta = document.createElement('button');  
      const card_button_eliminar = document.createElement('button');  
      card_button_suma.setAttribute('id_product',productos[0].id);
      card_button_resta.setAttribute('id_product',productos[0].id);
      card_button_eliminar.setAttribute('id_product',productos[0].id);

      //Agregando Cards al carrito de compras.
      card_container.appendChild(card_name);
      card_container.appendChild(img_container);
      img_container.appendChild(card_img);
      card_container.appendChild(card_price);
      card_container.appendChild(card_button_suma);
      card_container.appendChild(card_button_resta);
      card_container.appendChild(aumento);

      //Mostrando Cards en el Carrito
      card_name.textContent = productos[0].name;
      card_price.textContent = productos[0].price;
      card_img.src = productos[0].img;
      card_button_suma.textContent = '+';
      card_button_resta.textContent = '-';
      card_button_eliminar.textContent = 'X';
      aumento.textContent = "Cantidad: " + cont;

      //Agregando al carrito
      cart.appendChild(card_container)    
      card_container.appendChild(card_name);
      card_container.appendChild(card_price);
      card_container.appendChild(aumento)
      card_container.appendChild(card_button_suma);
      card_container.appendChild(card_button_resta);
      card_container.appendChild(card_button_eliminar)

      //Clases del Carrito de Compras
      card_container.classList.add('card_producto')
      card_name.classList.add('tituloCards')
      card_price.classList.add('preciosCards')
      aumento.classList.add('contadorCards')
      card_button_suma.classList.add('botonSuma')
      card_button_resta.classList.add('botonResta')
      card_button_eliminar.classList.add('botonEliminar')

      //Eventos
      card_button_suma.addEventListener('click', agregarCarrito);
      card_button_resta.addEventListener('click', restarProducto);
      card_button_eliminar.addEventListener('click', eliminarProducto)
  })
}


function agregarCarrito (e){
  carrito.push(e.target.getAttribute('id_product')); 
  mostrarCarrito()
}

const restarProducto = (e) => {
  let item = e.target.getAttribute('id_product') 
  carrito.splice(parseInt(carrito.indexOf(item)),1)
  mostrarCarrito();
}

const eliminarProducto = (e) => {
  let item = e.target.getAttribute('id_product'); 
  carrito = carrito.filter((id_producto) => {
      return id_producto !== item;
  });
  mostrarCarrito();
}


const btn_carrito = document.querySelector('.divImgCarrito')
const carta = document.querySelector('.carta')
btn_carrito.addEventListener('click', () => {
  carta.classList.toggle('ocult');
})
