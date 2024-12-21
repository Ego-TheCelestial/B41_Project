// function changeImage(thumbnail) {
//     const mainImage = document.getElementById('mainImage');
//     mainImage.src = thumbnail.src;
//   }

//   function redirectToCart() {
//     window.location.href = "cart.html";
//   }

// NEW CODE

function changeImage(thumbnail) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = thumbnail.src;
}

function redirectToCart() {
  const productTitle = document.querySelector('.right-panel h1').innerText;
  const productPrice = document.querySelector('.price').innerText;
  const productOfferPrice = document
    .querySelector('.offer')
    .innerText.replace('Was ', '');
  const quantity = document.getElementById('quantity').value;

  // Create product object
  const product = {
    title: productTitle,
    price: productPrice,
    offerPrice: productOfferPrice,
    quantity: parseInt(quantity),
  };

  // Store product details in localStorage
  localStorage.setItem('cartItem', JSON.stringify(product));

  // Redirect to cart page
  window.location.href = 'cart.html';
}

function buyNow() {
  const productTitle = document.querySelector('.right-panel h1').innerText;
  const productPrice = document.querySelector('.price').innerText;
  const productOfferPrice = document
    .querySelector('.offer')
    .innerText.replace('Was ', '');
  const quantity = document.getElementById('quantity').value;

  // Create product object
  const product = {
    title: productTitle,
    price: productPrice,
    offerPrice: productOfferPrice,
    quantity: parseInt(quantity),
  };

  // Store product details in localStorage
  localStorage.setItem('checkoutItem', JSON.stringify(product));

  // Redirect to checkout page
  window.location.href = 'checkout.html';
}

// Attach the buyNow function to the Buy Now button
document.getElementById('buyNow').onclick = buyNow;
