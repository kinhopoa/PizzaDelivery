const c = (elemento) => document.querySelector(elemento);
const cs = (elemento) => document.querySelectorAll(elemento);

pizzaJson.map((pizza, indice) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
    pizzaItem.querySelector('a').addEventListener('click', (evento) =>{
        evento.preventDefault();

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
        c('.pizzaWindowArea').style.opacity = 1;
        },200);
        
    })
    
    
    c('.pizza-area').append( pizzaItem );
});