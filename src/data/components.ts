import type { Component, Category } from '../types';

export const categories: Category[] = [
  { id: 'buttons', name: 'Buttons', icon: 'mouse-pointer-2' },
  { id: 'inputs', name: 'Inputs', icon: 'input' },
  { id: 'cards', name: 'Cards', icon: 'layout-grid' },
  { id: 'loaders', name: 'Loaders', icon: 'loader-2' },
  { id: 'toggles', name: 'Toggles', icon: 'toggle-left' },
  { id: 'contact', name: 'Contact', icon: 'mail' },
];

export const components: Component[] = [
  {
    id: 'button-1',
    name: 'Neon Pulse Button',
    description: 'A beautiful neon button with pulse effect',
    category: 'buttons',
    views: 1234,
    html: `<button class="neon-button">
  Hover me
</button>`,
    css: `.neon-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #2d2d2d;
  border: 2px solid #0ff;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px #0ff;
}

.neon-button:hover {
  background: #0ff;
  color: #000;
  box-shadow: 0 0 20px #0ff;
}`
  },
  {
    id: 'button-2',
    name: 'Gradient Morph Button',
    description: 'Morphing gradient background button',
    category: 'buttons',
    views: 892,
    html: `<button class="morph-button">
  Click me
</button>`,
    css: `.morph-button {
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.morph-button:hover {
  background: linear-gradient(45deg, #ff8e53, #ff6b6b);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}`
  },
  {
    id: 'input-1',
    name: 'Cyberpunk Input',
    description: 'Futuristic input field with glow effect',
    category: 'inputs',
    views: 856,
    html: `<div class="cyber-input">
  <input type="text" id="input" placeholder=" " />
  <label for="input">Enter text</label>
  <div class="cyber-line"></div>
</div>`,
    css: `.cyber-input {
  position: relative;
  margin: 1rem 0;
}

.cyber-input input {
  width: 100%;
  padding: 1rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.cyber-input label {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  transition: all 0.3s ease;
  pointer-events: none;
}

.cyber-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #0ff, #f0f);
  transition: width 0.3s ease;
}

.cyber-input input:focus ~ .cyber-line,
.cyber-input input:not(:placeholder-shown) ~ .cyber-line {
  width: 100%;
}

.cyber-input input:focus + label,
.cyber-input input:not(:placeholder-shown) + label {
  top: 0;
  font-size: 0.875rem;
  color: #0ff;
}`
  },
  {
    id: 'input-2',
    name: 'Floating Label Input',
    description: 'Smooth floating label animation',
    category: 'inputs',
    views: 654,
    html: `<div class="float-input">
  <input type="text" id="float" required />
  <label for="float">Username</label>
</div>`,
    css: `.float-input {
  position: relative;
  margin: 2rem 0;
}

.float-input input {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #4a5568;
  border-radius: 6px;
  background: transparent;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.float-input label {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  padding: 0 0.4rem;
  color: #a0aec0;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.float-input input:focus,
.float-input input:not(:placeholder-shown) {
  border-color: #63b3ed;
}

.float-input input:focus + label,
.float-input input:not(:placeholder-shown) + label {
  top: 1;
  font-size: 0.8rem;
  color: #63b3ed;
}`
  },
  {
    id: 'loader-1',
    name: 'Quantum Loader',
    description: 'Mesmerizing loading animation',
    category: 'loaders',
    views: 2341,
    html: `<div class="quantum-loader">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>`,
    css: `.quantum-loader {
  display: flex;
  gap: 8px;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0ff;
  animation: quantum 1.5s ease-in-out infinite;
}

.circle:nth-child(2) {
  animation-delay: 0.2s;
  background: #f0f;
}

.circle:nth-child(3) {
  animation-delay: 0.4s;
  background: #ff0;
}

@keyframes quantum {
  0%, 100% {
    transform: scale(0.2);
    opacity: 0.2;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}`
  },
  {
    id: 'loader-2',
    name: 'Spiral Loader',
    description: 'Hypnotic spiral loading animation',
    category: 'loaders',
    views: 1567,
    html: `<div class="spiral-loader"></div>`,
    css: `.spiral-loader {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spiral 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

@keyframes spiral {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`
  },
  {
    id: 'toggle-1',
    name: 'Neon Toggle',
    description: 'Cyberpunk-style toggle switch',
    category: 'toggles',
    views: 987,
    html: `<label class="neon-toggle">
  <input type="checkbox">
  <span class="slider"></span>
</label>`,
    css: `.neon-toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.neon-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2d2d2d;
  transition: .4s;
  border-radius: 34px;
  border: 2px solid #0ff;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #0ff;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider:hover {
  box-shadow: 0 0 8px #0ff;
}`
  },
  {
    id: 'card-1',
    name: 'Glassmorphism Card',
    description: 'Modern glass-effect card design',
    category: 'cards',
    views: 1432,
    html: `<div class="glass-card">
  <h3>Glass Card</h3>
  <p>Hover to see the effect</p>
</div>`,
    css: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.glass-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.glass-card p {
  font-size: 1rem;
  opacity: 0.8;
}`
  }
];