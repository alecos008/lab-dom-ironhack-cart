// ITERATION 1

function updateSubtotal(product) {
  let priceElement = product.querySelector('.price span');
  let quantityElement = product.querySelector('.quantity input');

  let priceValue = priceElement.innerHTML;
  let quantityValue = quantityElement.value;

  let subtotalElement = product.querySelector('.subtotal span');

  let subtotalValue = priceValue * quantityValue;

  subtotalElement.innerHTML = subtotalValue;

  return subtotalValue;

}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productsElements = document.getElementsByClassName('product');

  let totalValue = 0;

  for (let product of productsElements) {
   const updateSubtotalFunction = updateSubtotal(product);
   totalValue += updateSubtotalFunction;
  }

  // ITERATION 3
  let totalElement = document.querySelector('#total-value span');

  totalElement.innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  console.log('The target in remove is:', target);
  target.parentElement.removeChild(target)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //Getting the elements
  const nameElement = document.getElementById('name-input');
  const priceElement = document.getElementById('price-input');
  const tbodyElement = document.querySelector('tbody');

  // Create new element
  const newTrElement = document.createElement('tr');
  newTrElement.className = "product";
  newTrElement.innerHTML = `
  <td class="name">
    <span>${nameElement.value}</span>
  </td>
  <td class="price">$<span>${priceElement.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  //attaching the element to the dom
  tbodyElement.appendChild(newTrElement);


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtonElements = document.querySelectorAll('.btn-remove');

  for (let button of removeButtonElements) {
    button.addEventListener('click', removeProduct)
  }
  const addProductButtonElement = document.getElementById('create');
  addProductButtonElement.addEventListener('click', createProduct)

});
