// Typewriter effect
const messages = [
    "GET IN MEH VAULT!",
    "Join the Discord!",
    "Let's gooooo!"
];

const typewriter = document.getElementById('typewriter');
const welcomeButtons = document.getElementById('welcomeButtons');
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriter.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentMessage.length) {
        if (messageIndex === 0) {
            // Show buttons after first message
            setTimeout(() => {
                welcomeButtons.classList.add('show');
            }, 500);
        }
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});

function enterVault() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const loadingScreen = document.getElementById('loadingScreen');
    
    welcomeScreen.classList.add('hidden');
    
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        loadingScreen.classList.add('active');
        
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    }, 500);
}

function openAboutBlank() {
    const win = window.open('about:blank', '_blank');
    if (win) {
        win.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Google Classroom</title>
                <link rel="icon" href="https://ssl.gstatic.com/classroom/ic_product_classroom_32.png">
                <style>
                    body, html {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                    }
                    iframe {
                        width: 100%;
                        height: 100%;
                        border: none;
                    }
                </style>
            </head>
            <body>
                <iframe src="${window.location.origin}/home.html"></iframe>
            </body>
            </html>
        `);
        win.document.close();
        window.close();
    }
}
