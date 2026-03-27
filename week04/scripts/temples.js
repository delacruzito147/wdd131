const temples = [
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-lds-1024.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980-10-27",
        area: 53000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-lds-1024.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-lds-1024.jpg"
    },
    {
        templeName: "Mexico City",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958-09-07",
        area: 42652,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-lds-1024.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Utah, USA",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Utah, USA",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    }
];

const container = document.querySelector("#temple-container");

function displayTemples(list) {
    container.innerHTML = "";

    list.forEach(t => {
        const card = document.createElement("figure");

        card.innerHTML = `
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
      <figcaption>
        <h3>${t.templeName}</h3>
        <p>${t.location}</p>
        <p>${t.dedicated}</p>
        <p>${t.area} sq ft</p>
      </figcaption>
    `;

        container.appendChild(card);
    });
}

// FILTROS
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
});

// INICIAL
displayTemples(temples);

// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;