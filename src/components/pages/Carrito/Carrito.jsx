import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import Apple from '../../images/imagesCarrito/apple.jpg';
import Orange from '../../images/imagesCarrito/orange.jpg';
import Pineapple from '../../images/imagesCarrito/pineapple.jfif';
import Peach from '../../images/imagesCarrito/peach.jpg';
import Grapes from '../../images/imagesCarrito/grapes.jpg';
import Watermelon from '../../images/imagesCarrito/watermelo.jfif';
import Strawberry from '../../images/imagesCarrito/strawberry.jpg';
import Pear from '../../images/imagesCarrito/pears.jpg';
import Kiwi from '../../images/imagesCarrito/kiwi.jpg';
import Banana from '../../images/imagesCarrito/banana.jpg';

export const Carrito = () => {


  const fruits = [
    { value:"fruit-01", label:'apple', price: 0.5, image: Apple},
    { value:"fruit-02", label:'orange', price: 0.7, image: Orange},
    { value:"fruit-03", label:'banana', price: 0.8, image: Banana},
    { value:"fruit-04", label:'pineapple', price: 1.5, image: Pineapple},
    { value:"fruit-05", label:'peach', price: 2, image: Peach},
    { value:"fruit-06", label:'grapes', price: 2.5, image: Grapes},
    { value:"fruit-07", label:'watermelon', price: 3, image: Watermelon},
    { value:"fruit-08", label:'strawberry', price: 3.5, image: Strawberry},
    { value:"fruit-09", label:'pear', price: 4, image: Pear},
    { value:"fruit-10", label:'kiwi', price: 4.5, image: Kiwi}
  ]

  console.log(fruits)


  const [products, setProducts ] = useState(fruits.length);
  const [selectedOption, setSelected ] = useState(false);

  const handleChange = selectedOption => {
    setSelected(true)
    renderCards(selectedOption)

  }

  function renderCards(selectedOption){
    fruits.map(fruit => { 
      if(fruit.label === selectedOption.label){
        createCards(fruit);
      }else{
        console.log("NO NO NO");
      }
    })
  }

  function createCards(fruit){
    const { label, image, value, price } = fruit;

    const card = document.createElement('div');
    card.classList.add('card-product');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src',image);
    imgCard.setAttribute('alt',`${value}-${label}`)
    imgCard.classList.add('img-product');

    const nameCard = document.createElement('p');
    nameCard.textContent= label;
    nameCard.classList.add('name-product');

    const priceCard = document.createElement('p');
    priceCard.textContent=price;
    priceCard.classList.add('price-product')

    const btnAdd = document.createElement('button');
    btnAdd.setAttribute('id',value);
    btnAdd.classList.add('btn-card');
    btnAdd.textContent = 'Add to Cart';

    card.appendChild(imgCard);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(btnAdd);

    document.getElementById("container-cards").appendChild(card);
    console.log(selectedOption);
    setSelected(false);
  }

  return (
    <div className='cajaCarrito'>

      <h3>Carrito de Compras</h3>
      <hr />
      <h4>Hay {products} productos</h4>
      <Select
        className='cajaSelect'
        defaultValue={"S"}
        isDisabled={false}
        name="fruits"
        options={fruits}
        onChange={handleChange}>
      </Select>
      <main className='container-cards' id='container-cards'>

      </main>

    </div>
  )
}


  
/*   const functionGlobal = () =>{
    const selectProducts= document.querySelector('#selectProducts');
    const containerCards= document.getElementById("container-cards");
    listProducts();
  
    function listProducts (){
      fruits.map( fruit => {
        const option = document.createElement('option');
        option.value = fruit.product;
        option.textContent = fruit.product;
        selectProducts.appendChild(option);
      })
    }
  }

  const functionCreate = (fruits) =>{

  } */
