function searchDestination() {
    const input = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            let found = false;
            console.log(data);
            
            // found with country name
            data.countries.forEach(country => {
                if (country.name.toLowerCase().includes(input)) {
                    found = true;
                    resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                    country.cities.forEach(city => {
                        resultDiv.innerHTML += `<h3>${city.name}</h3>`;
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}">`;
                        resultDiv.innerHTML += `<p>${city.description}</p>`;
                    });
                }
            });

            // find in temples
            
            data.temples.forEach(temple => {
                if (temple.name.toLowerCase().includes(input)) {
                    found = true;
                    resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                    resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
                    resultDiv.innerHTML += `<p>${temple.description}</p>`;
                }
            });

            // find in beaches
            data.beaches.forEach(beach => {
                if (beach.name.toLowerCase().includes(input)) {
                    found = true;
                    resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
                    resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                    resultDiv.innerHTML += `<p>${beach.description}</p>`;
                    resultDiv.innerHTML += `<button>Visit</button>`;
                }
            });

            if (!found) {
                resultDiv.innerHTML = 'No results found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', searchDestination);
