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
	let container = document.getElementById('slideshow-container');
	container.innerHTML += `
	<div class="mySlides fade" id="mySlides">
        <div class="card-container">
            <img src="${object.image}" class="look" alt="${object.alt}"/>
		</div>
	</div>
    `;
}



