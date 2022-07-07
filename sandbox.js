
fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json();
    })

    .then(function (countries) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let country of countries) {
            out += `
            <tr>
                <td>${country.name.official}</td>
                <td>${country.capital}</td>
                <td>${country.region}</td>
                <td>${country.languages}</td>
                <td>${country.population}</td>
                <td><img src='${country.flags.png}'></img></td>
            </tr>
            `;
        }

        placeholder.innerHTML = out;
    })
