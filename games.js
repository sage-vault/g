// All games matching the files you have uploaded
const games = [
    { id: 1, name: "Baldi's Basics Plus", icon: '🎮', url: 'baldis-basics.html' },
    { id: 2, name: 'FNAF 1', icon: '🎮', url: 'fnaf.html' },
    { id: 3, name: 'Minecraft 1.12.2', icon: '🎮', url: 'minecraft.html' },
    { id: 4, name: 'Hollow Knight', icon: '🎮', url: 'hollow-knight.html' },
    { id: 5, name: 'FNF', icon: '🎮', url: 'fnf.html' },
    { id: 6, name: 'Basketball Stars', icon: '🎮', url: 'Basketball Stars.html' },
    { id: 7, name: 'Cookie Clicker', icon: '🎮', url: 'Cookie Clicker.html' },
    { id: 8, name: 'Crazy Cattle 3D', icon: '🎮', url: 'Crazy Cattle 3D.html' },
    { id: 9, name: 'Drive Mad', icon: '🎮', url: 'Drive Mad.html' },
    { id: 10, name: 'Fallout', icon: '🎮', url: 'Fallout.html' },
    { id: 11, name: 'Granny', icon: '🎮', url: 'Granny.html' },
    { id: 12, name: 'Gunspin', icon: '🎮', url: 'Gunspin.html' },
    { id: 13, name: 'Retro Bowl College', icon: '🎮', url: 'Retro Bowl College.html' },
    { id: 14, name: 'Slope', icon: '🎮', url: 'Slope.html' },
    { id: 15, name: 'Steal A Brainrot', icon: '🎮', url: 'Steal A Brainrot.html' },
    { id: 16, name: 'Subway Surfers London', icon: '🎮', url: 'Subway Surfers_ London.html' },
    { id: 17, name: 'Super Mario Bros', icon: '🎮', url: 'Super Mario Bros.html' },
    { id: 18, name: 'Time Shooter 3 SWAT', icon: '🎮', url: 'Time Shooter 3_ SWAT.html' },
    { id: 19, name: 'Tomb Of The Mask', icon: '🎮', url: 'Tomb Of The Mask.html' },
    { id: 20, name: 'BitLife', icon: '🎮', url: 'BitLife.html' },
    { id: 21, name: 'Bloxorz', icon: '🎮', url: 'Bloxorz.html' },
    { id: 22, name: 'Crazy Cars', icon: '🎮', url: 'Crazy Cars.html' },
    { id: 23, name: 'FNF VS KAPI', icon: '🎮', url: 'Friday Night Funkin VS. KAPI.html' },
    { id: 24, name: 'Geometry Dash Lite', icon: '🎮', url: 'Geometry Dash Lite.html' },
    { id: 25, name: 'Growden.io', icon: '🎮', url: 'Growden.io.html' },
    { id: 26, name: 'Nazi Zombies Portable', icon: '🎮', url: 'Nazi Zombies_ Portable.html' },
    { id: 27, name: 'Sandboxels', icon: '🎮', url: 'Sandboxels.html' },
    { id: 28, name: 'Sandtris', icon: '🎮', url: 'Sandtris.html' },
    { id: 29, name: 'Steal Brainrot Online', icon: '🎮', url: 'Steal Brainrot Online.html' },
    { id: 30, name: 'Sandstone', icon: '🎮', url: 'sandstone.html' },
    { id: 31, name: 'Attack Hole', icon: '🎮', url: 'Attack Hole.html' },
    { id: 32, name: 'Bacon May Die', icon: '🎮', url: 'Bacon May Die.html' },
    { id: 33, name: 'Bank Robbery 2', icon: '🎮', url: 'Bank Robbery 2.html' },
    { id: 34, name: 'Basket Random', icon: '🎮', url: 'Basket Random.html' },
    { id: 35, name: 'Binding of Isaac', icon: '🎮', url: 'Binding of Issac_ Wrath of the Lamb.html' },
    { id: 36, name: 'Crossy Road', icon: '🎮', url: 'Crossy Road.html' },
    { id: 37, name: 'DOOM', icon: '🎮', url: 'DOOM.html' },
    { id: 38, name: 'Half Life', icon: '🎮', url: 'Half Life.html' },
    { id: 39, name: 'Pixel Gun Survival', icon: '🎮', url: 'Pixel Gun Survival.html' },
    { id: 40, name: 'Plants vs Zombies', icon: '🎮', url: 'Plants vs Zombies.html' },
    { id: 41, name: 'Solar Smash', icon: '🎮', url: 'Solar Smash.html' },
    { id: 42, name: 'Sonic.EXE', icon: '🎮', url: 'Sonic.EXE (ORIGINAL).html' },
    { id: 43, name: 'Bad Parenting 1', icon: '🎮', url: 'Bad Parenting 1.html' },
    { id: 44, name: 'Bendy and the Ink Machine', icon: '🎮', url: 'Bendy and the Ink Machine.html' },
    { id: 45, name: 'Kindergarten', icon: '🎮', url: 'Kindergarten.html' },
    { id: 46, name: 'OMORI', icon: '🎮', url: 'OMORI.html' },
    { id: 47, name: 'Sonic Mania', icon: '🎮', url: 'Sonic Mania.html' },
    { id: 48, name: 'Soundboard', icon: '🎮', url: 'Soundboard.html' },
    { id: 49, name: 'Stickman Hook', icon: '🎮', url: 'Stickman Hook.html' }
];

// Render all games
function renderGames() {
    const grid = document.getElementById('gamesGrid');
    
    if (!grid) {
        console.error('Grid element not found!');
        return;
    }
    
    games.forEach(game => {
        const button = document.createElement('div');
        button.className = 'game-button';
        button.innerHTML = `
            <div class="icon">${game.icon}</div>
            <div>${game.name}</div>
        `;
        button.onclick = () => openGame(game.url, game.name);
        grid.appendChild(button);
    });
    
    console.log(`Loaded ${games.length} games successfully!`);
}

// Open game in modal
function openGame(url, name) {
    if (!url) {
        alert('No game URL set for ' + name);
        return;
    }
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    frame.src = url;
    modal.classList.add('active');
}

// Close game modal
function closeGame() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    frame.src = '';
    modal.classList.remove('active');
}

// Toggle fullscreen
function toggleFullscreen() {
    const frame = document.getElementById('gameFrame');
    if (!document.fullscreenElement) {
        frame.requestFullscreen().catch(err => {
            alert('Error attempting to enable fullscreen: ' + err.message);
        });
    } else {
        document.exitFullscreen();
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderGames);
} else {
    renderGames();
}

window.addEventListener('load', function() {
    if (document.getElementById('gamesGrid').children.length === 0) {
        renderGames();
    }
});

console.log('games.js loaded');
