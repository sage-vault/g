// Proxy configuration
const PROXY_SERVICES = {
    rammerhead: 'https://mathway.eu.org/service/hvtrs8%2F-',
    ultraviolet: 'https://uv.holyubofficial.net/service/',
    womginx: 'https://www.womginx.com/main/',
};

// Current proxy service (can be changed)
let currentProxy = PROXY_SERVICES.rammerhead;

// Format URL for proxy
function formatUrl(url) {
    // Add https:// if not present
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    // Encode URL for Rammerhead
    const encoded = url.replace(/https?:\/\//, '').split('').map(char => {
        return char.charCodeAt(0).toString(16).padStart(2, '0');
    }).join('');
    
    return currentProxy + encoded;
}

// Open proxy with URL input
function openProxy() {
    const input = document.getElementById('proxyUrl');
    const url = input.value.trim();
    
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    
    openProxyUrl(url);
}

// Open proxy with specific URL
function openProxyUrl(url) {
    const container = document.getElementById('proxyContainer');
    const frame = document.getElementById('proxyFrame');
    
    // Show loading state
    frame.src = '';
    container.classList.add('active');
    
    // Load proxy URL
    const proxyUrl = formatUrl(url);
    console.log('Loading proxy URL:', proxyUrl);
    frame.src = proxyUrl;
}

// Close proxy
function closeProxy() {
    const container = document.getElementById('proxyContainer');
    const frame = document.getElementById('proxyFrame');
    
    frame.src = '';
    container.classList.remove('active');
}

// Toggle fullscreen
function proxyFullscreen() {
    const frame = document.getElementById('proxyFrame');
    
    if (!document.fullscreenElement) {
        frame.requestFullscreen()
            .then(() => console.log('Entered fullscreen'))
            .catch(err => alert('Fullscreen error: ' + err.message));
    } else {
        document.exitFullscreen();
    }
}

// Reload current proxy page
function reloadProxy() {
    const frame = document.getElementById('proxyFrame');
    if (frame.src) {
        frame.src = frame.src;
    }
}

// Go back in proxy history
function proxyBack() {
    const frame = document.getElementById('proxyFrame');
    try {
        frame.contentWindow.history.back();
    } catch (e) {
        console.log('Cannot go back:', e);
    }
}

// Go forward in proxy history
function proxyForward() {
    const frame = document.getElementById('proxyFrame');
    try {
        frame.contentWindow.history.forward();
    } catch (e) {
        console.log('Cannot go forward:', e);
    }
}

// Change proxy service
function changeProxyService(service) {
    if (PROXY_SERVICES[service]) {
        currentProxy = PROXY_SERVICES[service];
        console.log('Switched to proxy:', service);
        alert('Proxy switched to: ' + service);
    }
}

// Open in about:blank for extra stealth
function openInAboutBlank(url) {
    const win = window.open('about:blank', '_blank');
    if (win) {
        const proxyUrl = formatUrl(url);
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
                <iframe src="${proxyUrl}"></iframe>
            </body>
            </html>
        `);
        win.document.close();
    }
}

// Popular websites quick access
const quickLinks = {
    youtube: 'https://youtube.com',
    discord: 'https://discord.com',
    reddit: 'https://reddit.com',
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
    instagram: 'https://instagram.com',
    netflix: 'https://netflix.com',
    spotify: 'https://spotify.com',
    twitch: 'https://twitch.tv',
    github: 'https://github.com',
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Proxy page loaded');
    
    // Add Enter key listener to URL input
    const input = document.getElementById('proxyUrl');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                openProxy();
            }
        });
        
        // Focus input on load
        input.focus();
    }
    
    // Add Escape key to close proxy
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const container = document.getElementById('proxyContainer');
            if (container && container.classList.contains('active')) {
                closeProxy();
            }
        }
    });
});

console.log('proxy.js loaded successfully!');
