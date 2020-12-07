function getProducts() {
	let tempProducts = [];
	fetch(`https://dh-grupo5-beautify-api.herokuapp.com/api/products/`)
		.then((data) => {
			return data.json()
		})
		.then((jsonResponse) => {
			for (let index = 0; index < 20; index++) {
				let productObject = {
					image: jsonResponse[index].image,
					title: jsonResponse[index].title,
					price: jsonResponse[index].price
				}
				displayProducts(productObject);

			}

			// jsonResponse.forEach(item => {
			// 	let productObject = {
			// 		image: item.image,
			// 		title: item.title,
			// 		price: item.price
			// 	}
			// 	displayProducts(productObject);

			// });
		})
		.catch((error) => {
			console.log(error)
		})
}
getProducts();

function displayProducts(object) {
	let container = document.getElementById('container-products');
	console.log(checkImage(object.image));
	container.innerHTML += `
    <div class="item">
      <img class="itemPicture" src="${object.image}">
      <h4 class="itemName">${object.title}</h4>
      <h5 class="itemValue">R$... ${object.price}</h5>
    </div>
  `;
}

function checkImage(url) {
	fetch(url, {
		mode: 'no-cors',
		origin: url
	})
		.then(response => {
			return response.status;
		})
		.catch((error) => {
			console.log(error)
		})

	// var request = new XMLHttpRequest();
	// request.open("GET", url, true);
	// request.send();
	// request.onload = function () {
	// 	status = request.status;
	// 	if (request.status == 200) //if(statusText == OK)
	// 	{
	// 		console.log("image exists");
	// 	} else {
	// 		console.log("image doesn't exist");
	// 	}
	// }
}


