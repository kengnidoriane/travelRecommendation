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
                    // resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                    country.cities.forEach(city => {
                        const resultCard =  document.createElement('div')
                        resultCard.classList.add('card');
                        resultCard.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}">`;
                        resultCard.innerHTML += `<h4>${city.name}</h4>`;
                        resultCard.innerHTML += `<p>${city.description}</p>`;
                        resultCard.innerHTML += `<button>Visit</button>`;
                        resultDiv.appendChild(resultCard)

                    });
                }
            });

            // data.countries.forEach(country => {
            //     if (country.name.toLowerCase().includes(input)) {
            //         const resultCard = document.createElement('div');
            //         resultCard.classList.add('card');
            
            //         const countryName = document.createElement('h2');
            //         countryName.textContent = country.name;
            //         resultCard.appendChild(countryName);
            
            //         country.cities.forEach(city => {
            //             const cityName = document.createElement('h3');
            //             cityName.textContent = city.name;
            //             resultCard.appendChild(cityName);
            
            //             const cityImage = document.createElement('img');
            //             cityImage.src = city.imageUrl;
            //             cityImage.alt = city.name;
            //             resultCard.appendChild(cityImage);
            
            //             const cityDescription = document.createElement('p');
            //             cityDescription.textContent = city.description;
            //             resultCard.appendChild(cityDescription);
            //         });
            
            //         resultDiv.appendChild(resultCard);
            //     }
            // });
            // find in temples
            if('temples'.includes(input)) {
                data.temples.forEach(temple => {
                    found = true;
                    const resultCard =  document.createElement('div')
                    resultCard.classList.add('card');
                    resultCard.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
                    resultCard.innerHTML += `<h4>${temple.name}</h4>`;
                    resultCard.innerHTML += `<p>${temple.description}</p>`;
                    resultCard.innerHTML += `<button>Visit</button>`;
                    resultDiv.appendChild(resultCard);
                })
            }
            // find with temple name
            // data.temples.forEach(temple => {
            //     if (temple.name.toLowerCase().includes(input)) {
            //         found = true;
            //         const resultCard =  document.createElement('div')
            //         resultCard.classList.add('card');
            //         resultCard.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
            //         resultCard.innerHTML += `<h4>${temple.name}</h4>`;
            //         resultCard.innerHTML += `<p>${temple.description}</p>`;
            //         resultCard.innerHTML += `<button>Visit</button>`;
            //         resultDiv.appendChild(resultCard);
            //     }
            // });

            // find in beaches
            if('beaches'.includes(input)) {
                data.beaches.forEach(beach => {
                    found = true;
                    const resultCard =  document.createElement('div')
                        resultCard.classList.add('card');
                    resultCard.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
                    resultCard.innerHTML += `<h4>${beach.name}</h4>`;
                    resultCard.innerHTML += `<p>${beach.description}</p>`;
                    resultCard.innerHTML += `<button>Visit</button>`;
                    resultDiv.appendChild(resultCard);
                })
            }
            // find with beach name
            // data.beaches.forEach(beach => {
            //     if (beach.name.toLowerCase().includes(input)) {
            //         found = true;
            //         const resultCard =  document.createElement('div')
            //             resultCard.classList.add('card');
            //         resultCard.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
            //         resultCard.innerHTML += `<h4>${beach.name}</h4>`;
            //         resultCard.innerHTML += `<p>${beach.description}</p>`;
            //         resultCard.innerHTML += `<button>Visit</button>`;
            //         resultDiv.appendChild(resultCard);
            //     }
            // });



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
