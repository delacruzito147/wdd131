const games = [
    { name: "Minecraft", genre: "Sandbox", image: "images/Minecraft.jpg", review: "Minecraft is a creative sandbox game where players can build, explore, and survive in an open world. It encourages imagination and offers endless possibilities." },
    { name: "Call of Duty", genre: "Shooter", image: "images/COD.jpg", review: "This game is veryCall of Duty is an intense and fast-paced shooter with exciting gameplay and competitive multiplayer modes. It offers realistic graphics and keeps players engaged with constant action." },
    { name: "Elden Ring", genre: "Adventure", image: "images/Elden-Ring.jpg", review: "Elden Ring is a challenging open-world RPG with deep exploration, intense combat, and a rich fantasy world. It rewards skill and patience with a truly immersive experience." },
    { name: "Fortnite", genre: "Battle Royale", image: "images/Fornite.jpg", review: "Fortnite is a fast-paced battle royale game with colorful graphics, building mechanics, and fun multiplayer action. It is constantly updated with new content and events." },
    { name: "GTA V", genre: "Open World", image: "images/GTA5.webp", review: "GTA V is an open-world game with a massive city to explore, engaging missions, and a mix of action, driving, and storytelling. It offers both a strong single-player experience and an active online mode." }
];

const container = document.getElementById("gamesContainer");

if (container) {
    games.forEach((game, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <div class="card-left">
          <img src="${game.image}" alt="${game.name}" loading="lazy">

          <div class="card-text">
            <h3>${game.name}</h3>
            <p>Genre: ${game.genre}</p>
            <p class="review">Review: ${game.review}</p>
          </div>
  </div>

  <button onclick="likeGame(${index})">❤️ Like</button>
`;

        container.appendChild(card);
    });
}

function likeGame(index) {
    let liked = JSON.parse(localStorage.getItem("liked")) || [];

    if (!liked.includes(index)) {
        liked.push(index);
        localStorage.setItem("liked", JSON.stringify(liked));
        alert("You liked this game!");
    } else {
        alert("Already liked!");
    }
}

const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message sent successfully!");
    });
}