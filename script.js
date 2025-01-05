document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Empêche le comportement par défaut
        alert(`Vous avez cliqué sur "${event.target.textContent}".`);
    });
});

// Fonctionnalité : Afficher un message de bienvenue dynamique
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const welcomeMessage = document.createElement('p');
    const today = new Date();
    const hours = today.getHours();

    let greeting;
    if (hours < 12) {
        greeting = "Bonjour !";
    } else if (hours < 18) {
        greeting = "Bon après-midi !";
    } else {
        greeting = "Bonsoir !";
    }

    welcomeMessage.textContent = `${greeting} Nous sommes ravis de vous voir ici.`;
    welcomeMessage.style.marginTop = "10px";
    header.appendChild(welcomeMessage);
});
