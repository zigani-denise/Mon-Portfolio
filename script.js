// Fonction pour afficher/cacher le Portfolio
function togglePortfolio() {
    var portfolio = document.getElementById("portfolio-section");
    var contact = document.getElementById("contact-section");

    if (portfolio) {
        if (portfolio.style.display === "none" || portfolio.style.display === "") {
            portfolio.style.display = "block";
            // On cache la section contact si elle était ouverte
            if (contact) contact.style.display = "none";
            portfolio.scrollIntoView({ behavior: 'smooth' });
        } else {
            portfolio.style.display = "none";
        }
    }
}

// Fonction pour afficher/cacher le Contact (NOUVEAU)
function toggleContact() {
    var contact = document.getElementById("contact-section");
    var portfolio = document.getElementById("portfolio-section");

    if (contact) {
        if (contact.style.display === "none" || contact.style.display === "") {
            contact.style.display = "block";
            // On cache la section portfolio si elle était ouverte
            if (portfolio) portfolio.style.display = "none";
            contact.scrollIntoView({ behavior: 'smooth' });
        } else {
            contact.style.display = "none";
        }
    }
}