function hideLoader(){
	let loader = document.querySelector(".loader");
	loader.style.visibility = "hidden";
}


function getProducts() {
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
	let image = new Image();
	image.src = object.image;

	hideLoader();

	image.onload = function () {
		if (this.width > 0) {
			container.innerHTML += `
				<div class="item">
					<img class="itemPicture" src="${object.image}">
					<div class="itemText">
						<h4 class="itemName">${object.title}</h4>
						<h5 class="itemValue">R$... ${object.price}</h5>
					</div>
				</div>
			`;
		}
	}
}


