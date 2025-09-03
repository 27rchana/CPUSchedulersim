export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `<span class="neon-text">POWER LEVEL: ${counter}</span>`
    
    // Add special effects for certain numbers
    if (counter % 10 === 0 && counter > 0) {
      element.style.animation = 'none';
      element.offsetHeight; // Trigger reflow
      element.style.animation = 'buttonFloat 4s ease-in-out infinite, specialGlow 1s ease-out';
      
      // Create burst effect
      createBurstEffect(element);
    }
  }
  
  element.addEventListener('click', () => {
    setCounter(counter + 1);
    
    // Add click ripple effect
    createRippleEffect(element);
  });
  
  setCounter(0)
}

function createRippleEffect(element) {
  const ripple = document.createElement('div');
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(0, 255, 255, 0.6)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple 600ms linear';
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  ripple.style.marginLeft = '-10px';
  ripple.style.marginTop = '-10px';
  ripple.style.pointerEvents = 'none';
  
  element.style.position = 'relative';
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

function createBurstEffect(element) {
  for (let i = 0; i < 8; i++) {
    const burst = document.createElement('div');
    burst.style.position = 'absolute';
    burst.style.width = '4px';
    burst.style.height = '4px';
    burst.style.background = i % 2 === 0 ? '#00ffff' : '#ff00ff';
    burst.style.borderRadius = '50%';
    burst.style.left = '50%';
    burst.style.top = '50%';
    burst.style.pointerEvents = 'none';
    
    const angle = (i / 8) * Math.PI * 2;
    const distance = 50;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    burst.style.animation = `burstOut 800ms ease-out forwards`;
    burst.style.setProperty('--burst-x', x + 'px');
    burst.style.setProperty('--burst-y', y + 'px');
    
    element.appendChild(burst);
    
    setTimeout(() => {
      burst.remove();
    }, 800);
  }
}

// Add CSS animations for effects
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes specialGlow {
    0% {
      box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.5),
        inset 0 0 30px rgba(0, 255, 255, 0.2);
    }
    50% {
      box-shadow: 
        0 0 60px rgba(255, 0, 255, 0.8),
        0 0 80px rgba(0, 255, 255, 0.6),
        inset 0 0 50px rgba(255, 255, 255, 0.3);
    }
    100% {
      box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.5),
        inset 0 0 30px rgba(0, 255, 255, 0.2);
    }
  }
  
  @keyframes burstOut {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(calc(-50% + var(--burst-x)), calc(-50% + var(--burst-y))) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);