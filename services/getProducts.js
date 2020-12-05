function getProducts() {
	let tempProducts = [];
		fetch(`https://dh-grupo5-beautify-api.herokuapp.com/api/products/`)
			.then((data) => {
				return data.json()
			})
			.then((jsonResponse) => {
				jsonResponse.forEach(item => {
					let productObject = {
            image: item.image,
            title: item.title,
            price: item.price
          }
					displayProducts(productObject);

				});
			})
			.catch((error) => {
				console.log(error)
			})
}
getProducts();

function displayProducts(object) {
	let container = document.getElementById('container-products');
	container.innerHTML += `
    <div class="item">
      <img class="itemPicture" src="${object.image}">
      <h4 class="itemName">${object.title}</h4>
      <h5 class="itemValue">R$... ${object.price}</h5>
    </div>
  `;
}



