fetch('https://api.unsplash.com/users/jawfox_photography/?client_id=bDOqGJ5QCrkG1r34ioqE6vCjDdgUnfZoho8xiKzjYaE') 
    .then((data) =>{
        return data.json()
    })
    .then((data)=> {
        generateLooks(data)
    })
    .catch((error) => {
        console.log(error)
    })

function generateLooks(data) {
    let components = []
    data.photos.forEach((e) => {
        let images = e.urls.regular
        components.push(`
            <img src="${images}" alt="qualquer coisa"/>
        `)
    });

    document.querySelector('body').innerHTML = components  
}



    