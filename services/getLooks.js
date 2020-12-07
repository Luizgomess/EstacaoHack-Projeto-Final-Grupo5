function getLooks(pageAmount) {
	let tempLooks = [];
	for (let index = 1; index <= pageAmount; index++) {
		fetch(`https://api.unsplash.com/search/photos?page=${index}&query=dress&client_id=bDOqGJ5QCrkG1r34ioqE6vCjDdgUnfZoho8xiKzjYaE`)
			.then((data) => {
				return data.json()
			})
			.then((jsonResponse) => {
				console.log(jsonResponse);
				jsonResponse.results.forEach(item => {
					let imageObject = {
						image: item.urls.small,
						alt: item.alt_description
					}
					displayLooks(imageObject);

				});
			})
			.catch((error) => {
				console.log(error)
			})
	}
}
getLooks(2);

function displayLooks(object) {
	let container = document.getElementById('container-looks');
	container.innerHTML += `
        <div class="card-container" style="background-image: url('${object.image}')">
					<div class="card-mask">
						<a href="#" class="button-lookBuy">buy this look</a>
					</div>
        </div>
				`;
}

					// <img src="${object.image}" class="look" alt="${object.alt}">


