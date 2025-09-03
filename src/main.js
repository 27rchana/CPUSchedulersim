import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// Create floating particles
function createParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'particles';
  particleContainer.style.position = 'fixed';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.pointerEvents = 'none';
  particleContainer.style.zIndex = '1';
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (8 + Math.random() * 4) + 's';
    particleContainer.appendChild(particle);
  }
  
  document.body.appendChild(particleContainer);
}

// Create twinkling stars
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
  }
  
  document.body.appendChild(starsContainer);
}

// Create grid background
function createGridBackground() {
  const grid = document.createElement('div');
  grid.className = 'grid-background';
  document.body.appendChild(grid);
}

// Initialize the synthwave environment
function initSynthwave() {
  createGridBackground();
  createStars();
  createParticles();
}

document.querySelector('#app').innerHTML = `
  <div class="floating-container">
    <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem;">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    
    <h1 class="neon-text">SYNTHWAVE VITE</h1>
    
    <p class="subtitle">Welcome to the neon-powered future of web development</p>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
    <div class="welcome-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">Lightning Fast</h3>
        <p class="feature-description">Experience blazing fast development with Vite's instant hot module replacement</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🌈</div>
        <h3 class="feature-title">Neon Aesthetics</h3>
        <p class="feature-description">Immerse yourself in a retro-futuristic synthwave design that floats and glows</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3 class="feature-title">Modern Stack</h3>
        <p class="feature-description">Built with cutting-edge web technologies for the ultimate developer experience</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">✨</div>
        <h3 class="feature-title">Interactive Magic</h3>
        <p class="feature-description">Every element responds with smooth animations and mesmerizing effects</p>
      </div>
    </div>
    
    <a href="#explore" class="cta-button">Enter the Grid</a>
    
    <p class="read-the-docs">
      Click the counter to experience the neon magic
    </p>
  </div>
`

// Initialize the synthwave environment
initSynthwave();

// Setup the enhanced counter
setupCounter(document.querySelector('#counter'))