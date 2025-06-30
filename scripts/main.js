// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Update active link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show the requested page
    document.getElementById(pageId).classList.add('active');
    
    // Set active link
    const pageLinks = {
        'home-page': 'Accueil',
        'vehicles-page': 'Véhicules',
        'pricing-page': 'Tarifs',
        'about-page': 'À propos',
        'contact-page': 'Contact',
        'login-page': 'Connexion',
        'register-page': 'Inscription',
        'vehicle-details-page': 'Détails véhicule'
    };
    
    // Find the link corresponding to the page
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.textContent === pageLinks[pageId]) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    nav.classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Initialize map if on contact page
    if (pageId === 'contact-page') {
        initMap();
    }
    
    // Load vehicles if on vehicles page
    if (pageId === 'vehicles-page') {
        loadVehicles();
    }
}

// Set minimum date for date pickers to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('pickup-date').min = today;
document.getElementById('dropoff-date').min = today;

// Initialize map
function initMap() {
    if (document.getElementById('map')) {
        // Coordonnées de Yaoundé, Cameroun
        const map = L.map('map').setView([3.8480, 11.5021], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([3.8480, 11.5021]).addTo(map)
            .bindPopup('DriveEase Yaoundé')
            .openPopup();
    }
}

// Initialize map when page loads if on contact page
if (window.location.hash === '#contact-page') {
    window.onload = initMap;
}

// Données des véhicules
const vehicles = [
    {
        name: "BMW Série 5",
        type: "Berline de luxe",
        price: 57850,
        category: "sedan",
        images: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
        ],
        specs: ["Berline", "Essence", "Automatique", "5 places"],
        rating: 4.5,
        reviews: 128,
        fuel: "essence",
        transmission: "automatic",
        seats: 5,
        year: 2022,
        power: "245 ch",
        consumption: "6.5L/100km"
    },
    {
        name: "Range Rover Sport",
        type: "SUV Premium",
        price: 83850,
        category: "suv",
        images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
        ],
        specs: ["SUV", "Diesel", "Automatique", "7 places"],
        rating: 5,
        reviews: 94,
        fuel: "diesel",
        transmission: "automatic",
        seats: 7,
        year: 2023,
        power: "300 ch",
        consumption: "7.2L/100km"
    },
    {
        name: "Mercedes AMG GT",
        type: "Voiture de sport",
        price: 129350,
        category: "sport",
        images: [
            "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
        ],
        specs: ["Coupé", "Essence", "Automatique", "2 places"],
        rating: 5,
        reviews: 67,
        fuel: "essence",
        transmission: "automatic",
        seats: 2,
        year: 2023,
        power: "510 ch",
        consumption: "10.5L/100km"
    },
    {
        name: "Peugeot 208",
        type: "Compacte économique",
        price: 25350,
        category: "economy",
        images: [
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
        ],
        specs: ["Compacte", "Diesel", "Manuelle", "5 places"],
        rating: 4,
        reviews: 56,
        fuel: "diesel",
        transmission: "manual",
        seats: 5,
        year: 2021,
        power: "100 ch",
        consumption: "4.2L/100km"
    },
    {
        name: "Audi Q7",
        type: "SUV de luxe",
        price: 96850,
        category: "suv",
        images: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
        ],
        specs: ["SUV", "Diesel", "Automatique", "7 places"],
        rating: 4.8,
        reviews: 89,
        fuel: "diesel",
        transmission: "automatic",
        seats: 7,
        year: 2022,
        power: "286 ch",
        consumption: "7.8L/100km"
    },
    {
        name: "Porsche 911",
        type: "Voiture de sport",
        price: 161850,
        category: "sport",
        images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
        ],
        specs: ["Coupé", "Essence", "Automatique", "2 places"],
        rating: 4.9,
        reviews: 78,
        fuel: "essence",
        transmission: "automatic",
        seats: 2,
        year: 2023,
        power: "450 ch",
        consumption: "9.8L/100km"
    }
];

// Fonction pour générer le HTML d'un véhicule
function createVehicleCard(vehicle, index) {
    const formattedPrice = vehicle.price.toLocaleString('fr-FR');
    return `
    <div class="vehicle-card" data-category="${vehicle.category}" data-price="${vehicle.price}" data-fuel="${vehicle.fuel}" data-transmission="${vehicle.transmission}">
        <div class="vehicle-image">
            ${vehicle.category === "suv" ? '<div class="vehicle-badge">Nouveau</div>' : ''}
            ${vehicle.category === "sedan" ? '<div class="vehicle-badge">Populaire</div>' : ''}
            <img src="${vehicle.images[0]}" alt="${vehicle.name}" loading="lazy">
        </div>
        <div class="vehicle-details">
            <div class="vehicle-header">
                <div class="vehicle-title">
                    <h3>${vehicle.name}</h3>
                    <p>${vehicle.type}</p>
                </div>
                <div class="vehicle-price">
                    ${formattedPrice} FCFA<span>/jour</span>
                </div>
            </div>
            <div class="vehicle-specs">
                ${vehicle.specs.map(spec => `
                    <div class="spec-item">
                        <i class="fas fa-car"></i>
                        <span>${spec}</span>
                    </div>
                `).join('')}
            </div>
            <div class="vehicle-rating">
                ${Array.from({length: 5}, (_, i) => `
                    <i class="fas ${i < Math.floor(vehicle.rating) ? 'fa-star' : (i < vehicle.rating ? 'fa-star-half-alt' : 'fa-star')}"></i>
                `).join('')}
                <span>(${vehicle.reviews} avis)</span>
            </div>
            <button class="btn btn-outline" style="width: 100%;" onclick="showVehicleDetails(${index})">Voir détails</button>
        </div>
    </div>`;
}

// Fonction pour afficher les détails d'un véhicule
function showVehicleDetails(index) {
    const vehicle = vehicles[index];
    if (!vehicle) return;
    
    const formattedPrice = vehicle.price.toLocaleString('fr-FR');
    const detailContent = document.getElementById('vehicle-detail-content');
    detailContent.innerHTML = `
        <div class="vehicle-detail-header">
            <h1 style="font-size: 36px; margin-bottom: 20px;">${vehicle.name}</h1>
            <p style="font-size: 20px; color: var(--secondary-text); margin-bottom: 30px;">${vehicle.type}</p>
        </div>
        
        <div class="vehicle-gallery">
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${vehicle.images.map(img => `
                        <div class="swiper-slide">
                            <img src="${img}" alt="${vehicle.name}">
                        </div>
                    `).join('')}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        
        <div class="vehicle-detail-content">
            <div class="vehicle-info-grid">
                <div class="vehicle-info-card">
                    <h3 style="margin-bottom: 20px; font-size: 24px;">Caractéristiques</h3>
                    <div class="specs-grid">
                        <div class="spec-item-detail">
                            <span class="spec-label">Prix par jour</span>
                            <span class="spec-value">${formattedPrice} FCFA</span>
                        </div>
                        <div class="spec-item-detail">
                            <span class="spec-label">Année</span>
                            <span class="spec-value">${vehicle.year}</span>
                        </div>
                        <div class="spec-item-detail">
                            <span class="spec-label">Puissance</span>
                            <span class="spec-value">${vehicle.power}</span>
                        </div>
                        <div class="spec-item-detail">
                            <span class="spec-label">Consommation</span>
                            <span class="spec-value">${vehicle.consumption}</span>
                        </div>
                        <div class="spec-item-detail">
                            <span class="spec-label">Carburant</span>
                            <span class="spec-value">${vehicle.fuel === 'essence' ? 'Essence' : 'Diesel'}</span>
                        </div>
                        <div class="spec-item-detail">
                            <span class="spec-label">Transmission</span>
                            <span class="spec-value">${vehicle.transmission === 'automatic' ? 'Automatique' : 'Manuelle'}</span>
                        </div>
                        <div class="spec-item-detail">
                            <span class="spec-label">Sièges</span>
                            <span class="spec-value">${vehicle.seats}</span>
                        </div>
                        <div class="spec-item-detail">
                            <span class="spec-label">Note moyenne</span>
                            <span class="spec-value">${vehicle.rating}/5 (${vehicle.reviews} avis)</span>
                        </div>
                    </div>
                </div>
                
                <div class="vehicle-info-card">
                    <h3 style="margin-bottom: 20px; font-size: 24px;">Description</h3>
                    <p style="line-height: 1.8; margin-bottom: 25px; color: var(--secondary-text);">Le ${vehicle.name} est un véhicule ${vehicle.type.toLowerCase()} qui allie performance, confort et élégance. Avec son design épuré et ses technologies de pointe, il offre une expérience de conduite inégalée. Idéal pour les voyages d'affaires ou les escapades en famille, ce véhicule saura répondre à toutes vos attentes en matière de confort et de sécurité.</p>
                    
                    <h4 style="margin-bottom: 15px; font-size: 20px;">Équipements inclus</h4>
                    <ul style="list-style: none; margin-bottom: 30px; color: var(--secondary-text);">
                        <li style="margin-bottom: 10px;"><i class="fas fa-check" style="color: var(--success); margin-right: 10px;"></i> Climatisation automatique</li>
                        <li style="margin-bottom: 10px;"><i class="fas fa-check" style="color: var(--success); margin-right: 10px;"></i> Système de navigation GPS</li>
                        <li style="margin-bottom: 10px;"><i class="fas fa-check" style="color: var(--success); margin-right: 10px;"></i> Caméra de recul</li>
                        <li style="margin-bottom: 10px;"><i class="fas fa-check" style="color: var(--success); margin-right: 10px;"></i> Sièges en cuir</li>
                        <li style="margin-bottom: 10px;"><i class="fas fa-check" style="color: var(--success); margin-right: 10px;"></i> Toit ouvrant panoramique</li>
                        <li style="margin-bottom: 10px;"><i class="fas fa-check" style="color: var(--success); margin-right: 10px;"></i> Système audio premium</li>
                    </ul>
                    
                    <a href="#" class="btn" style="width: 100%;">Réserver ce véhicule</a>
                </div>
            </div>
        </div>
    `;
    
    // Initialiser le carrousel
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // Afficher la page de détails
    showPage('vehicle-details-page');
}

// Charger les véhicules
function loadVehicles() {
    const vehiclesGrid = document.querySelector('#vehicles-page .vehicles-grid');
    if (vehiclesGrid) {
        vehiclesGrid.innerHTML = vehicles.map((vehicle, index) => createVehicleCard(vehicle, index)).join('');
    }
}

// Filtrer les véhicules
function filterVehicles() {
    const maxPrice = parseInt(document.getElementById('price-filter').value);
    const typeFilter = document.getElementById('type-filter').value;
    const fuelFilter = document.getElementById('fuel-filter').value;
    const transmissionFilter = document.getElementById('transmission-filter').value;
    const categoryFilter = document.querySelector('.filter-buttons .btn.active').dataset.filter;
    
    const allCards = document.querySelectorAll('#vehicles-page .vehicle-card');
    
    allCards.forEach(card => {
        const price = parseInt(card.dataset.price);
        const category = card.dataset.category;
        const fuel = card.dataset.fuel;
        const transmission = card.dataset.transmission;
        
        const priceMatch = price <= maxPrice;
        const typeMatch = typeFilter === 'all' || category === typeFilter;
        const fuelMatch = fuelFilter === 'all' || fuel === fuelFilter;
        const transmissionMatch = transmissionFilter === 'all' || transmission === transmissionFilter;
        const categoryMatch = categoryFilter === 'all' || category === categoryFilter;
        
        if (priceMatch && typeMatch && fuelMatch && transmissionMatch && categoryMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Simulation de connexion
function simulateLogin(email) {
    // Mettre à jour l'interface pour l'utilisateur connecté
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        authButtons.innerHTML = `
            <div class="user-menu">
                <button class="btn user-dropdown">
                    <i class="fas fa-user-circle"></i> ${email.split('@')[0]}
                </button>
                <div class="dropdown-content">
                    <a href="#">Mon profil</a>
                    <a href="#">Mes réservations</a>
                    <a href="#" onclick="logout()">Déconnexion</a>
                </div>
            </div>
            <div class="theme-toggle" id="themeToggle">
                <i class="fas fa-moon"></i>
            </div>
        `;
        
        // Réattacher l'écouteur d'événement
        document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    }
    
    // Ajouter un écouteur pour le menu déroulant
    const userDropdown = document.querySelector('.user-dropdown');
    if (userDropdown) {
        userDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelector('.dropdown-content').classList.toggle('show');
        });
    }
    
    // Fermer le menu déroulant si on clique ailleurs
    window.addEventListener('click', (e) => {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    });
}

// Fonction de déconnexion
function logout() {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        authButtons.innerHTML = `
            <a href="#" class="btn btn-outline" onclick="showPage('login-page')">Connexion</a>
            <a href="#" class="btn" onclick="showPage('register-page')">Inscription</a>
            <div class="theme-toggle" id="themeToggle">
                <i class="fas fa-moon"></i>
            </div>
        `;
        
        // Réattacher l'écouteur d'événement
        document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    }
    showPage('home-page');
    alert('Vous avez été déconnecté avec succès');
}

// Basculer entre les thèmes
function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
    localStorage.setItem('theme', document.body.className);
    updateThemeIcon();
}

// Mettre à jour l'icône du thème
function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
}

// Initialisation après chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Charger les véhicules sur la page véhicules
    loadVehicles();
    
    // Gestion des filtres
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            filterVehicles();
        });
    });
    
    // Gestion des filtres avancés
    document.getElementById('price-filter').addEventListener('input', function() {
        const formattedValue = parseInt(this.value).toLocaleString('fr-FR');
        document.getElementById('priceValue').textContent = formattedValue + ' FCFA';
        filterVehicles();
    });
    
    document.getElementById('type-filter').addEventListener('change', filterVehicles);
    document.getElementById('fuel-filter').addEventListener('change', filterVehicles);
    document.getElementById('transmission-filter').addEventListener('change', filterVehicles);
    
    // Gestion des formulaires
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Simulation de connexion réussie
            simulateLogin(email);
            showPage('home-page');
        });
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;
            
            if (password !== confirm) {
                alert('Les mots de passe ne correspondent pas');
                return;
            }
            
            // Simulation d'inscription réussie
            simulateLogin(email);
            showPage('home-page');
        });
    }
    
    // Gestion du thème
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Charger le thème préféré
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        updateThemeIcon();
    }
});