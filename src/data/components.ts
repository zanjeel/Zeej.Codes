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
    id: 'button-3',
    name: 'Spinning Contact Me Button',
    description: 'A beautiful contact me button with spinning effect and hover animation',
    category: 'buttons',
    views: 1234,
    html: `<!-- From Uiverse.io by Creatlydev --> 
<button class="button">
  <p class="button__text">
    <span style="--index: 0;">C</span>
    <span style="--index: 1;">O</span>
    <span style="--index: 2;">N</span>
    <span style="--index: 3;">T</span>
    <span style="--index: 4;">A</span>
    <span style="--index: 5;">C</span>
    <span style="--index: 6;">T</span>
    <span style="--index: 7;"> </span>
    <span style="--index: 8;">M</span>
    <span style="--index: 9;">E</span>
    <span style="--index: 10;"> </span>
    <span style="--index: 11;">C</span>
    <span style="--index: 12;">O</span>
    <span style="--index: 13;">N</span>
    <span style="--index: 14;">T</span>
    <span style="--index: 15;">A</span>
    <span style="--index: 16;">C</span>
    <span style="--index: 17;">T</span>
  </p>

  <div class="button__circle">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon"
      width="14"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon button__icon--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
`,
    css: `
.button {
  cursor: pointer;
  border: none;
  background: linear-gradient(0deg, #ff758c 0%, #ff7eb3 10%, #a68eff 100%);
  color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: grid;
  place-content: center;
  transition:
    background 300ms,
    transform 200ms;
  font-weight: 600;
}

.button__text {
  position: absolute;
  inset: 0;
  animation: text-rotation 8s linear infinite;

  > span {
    position: absolute;
    transform: rotate(calc(19deg * var(--index)));
    inset: 7px;
  }
}

.button__circle {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background: #fff;
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button__icon--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover {
  background: linear-gradient(0deg, #ff758c 0%, #ff7eb3 10%, #a68eff 100%);
  transform: scale(1.05);
}

.button:hover .button__icon {
  color: #000;
}

.button:hover .button__icon:first-child {
  transition: transform 0.3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon--copy {
  transition: transform 0.3s ease-in-out 0.1s;
  transform: translate(0);
}

@keyframes text-rotation {
  to {
    rotate: 360deg;
  }
}
`
  },
  {
    id: 'card-2',
    name: 'Cyberpunk Product Info ',
    description: 'Futuristic Info card with beuatiful undertones',
    category: 'cards',
    views: 856,
    html: `<div class="card">
  <div class="card__border"></div>
  <div class="card_title__container">
    <span class="card_title">Exclusive Product</span>
    <p class="card_paragraph">
      Product so good, you can't refuse it how much you try.
    </p>
  </div>
  <hr class="line" />
  <ul class="card__list">
    <li class="card__list_item">
      <span class="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="check_svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">10 Launch Weeks</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="check_svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">10 Influencers Post</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="check_svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">100.000 Views</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="check_svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">10 Reddit Posts</span>
    </li>
    <li class="card__list_item">
      <span class="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="check_svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <span class="list_text">2 Hours Marketing Consultation</span>
    </li>
  </ul>
  <button class="button">Discover</button>
</div>

`,
    css: `
.card {
  --white: hsl(0, 0%, 100%);
  --black: hsl(240, 15%, 9%);
  --paragraph: hsl(0, 0%, 83%);
  --line: hsl(240, 9%, 17%);
  --primary: hsl(266, 92%, 58%);

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 19rem;
  background-color: hsla(240, 15%, 9%, 1);
  background-image: radial-gradient(
      at 88% 40%,
      hsla(240, 15%, 9%, 1) 0px,
      transparent 85%
    ),
    radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
    radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
    radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
    radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
    radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
}

.card .card__border {
  overflow: hidden;
  pointer-events: none;

  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 100%) -50%,
    hsl(0, 0%, 40%) 100%
  );

  border-radius: 1rem;
}

.card .card__border::before {
  content: "";
  pointer-events: none;

  position: fixed;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%), rotate(0deg);
  transform-origin: left;
  width: 200%;
  height: 10rem;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0%,
    hsl(277, 95%, 60%) 40%,
    hsl(277, 95%, 60%) 60%,
    hsla(0, 0%, 40%, 0) 100%
  );

  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.card .card_title__container .card_title {
  font-size: 1rem;
  color: var(--white);
}

.card .card_title__container .card_paragraph {
  margin-top: 0.25rem;
  width: 65%;

  font-size: 0.5rem;
  color: var(--paragraph);
}

.card .line {
  width: 100%;
  height: 0.1rem;
  background-color: var(--line);

  border: none;
}

.card .card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card .card__list .card__list_item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card .card__list .card__list_item .check {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;
  background-color: var(--primary);

  border-radius: 50%;
}

.card .card__list .card__list_item .check .check_svg {
  width: 0.75rem;
  height: 0.75rem;

  fill: var(--black);
}

.card .card__list .card__list_item .list_text {
  font-size: 0.75rem;
  color: var(--white);
}

.card .button {
  cursor: pointer;

  padding: 0.5rem;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(94, 58, 238, 1) 0%,
    rgba(197, 107, 240, 1) 100%
  );

  font-size: 0.75rem;
  color: var(--white);

  border: 0;
  border-radius: 9999px;
  box-shadow: inset 0 -2px 25px -4px var(--white);
}
`
  },
  {
    id: 'input-2',
    name: 'Search Input',
    description: 'Smooth design with a delicate label Input',
    category: 'inputs',
    views: 654,
    html: `<!-- From Uiverse.io by Smit-Prajapati --> 
<div class="container">
<div class="search-container">
  <input class="input" type="text">
  <svg viewBox="0 0 24 24" class="search__icon">
    <g>
      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
      </path>
    </g>
  </svg>
</div>
</div>
`,
    css: `/* From Uiverse.io by Smit-Prajapati */ 
.container {
  position: relative;
  background: linear-gradient(135deg, rgb(179, 208, 253) 0%, rgb(164, 202, 248) 100%);
  border-radius: 1000px;
  padding: 10px;
  display: grid;
  place-content: center;
  z-index: 0;
  max-width: 300px;
  margin: 0 10px;
}

.search-container {
  position: relative;
  width: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
  padding: 5px;
  display: flex;
  align-items: center;
}

.search-container::after, .search-container::before {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
}

.search-container::before {
  top: -1px;
  left: -1px;
  background: linear-gradient(0deg, rgb(218, 232, 247) 0%, rgb(255, 255, 255) 100%);
  z-index: -1;
}

.search-container::after {
  bottom: -1px;
  right: -1px;
  background: linear-gradient(0deg, rgb(163, 206, 255) 0%, rgb(211, 232, 255) 100%);
  box-shadow: rgba(79, 156, 232, 0.7019607843) 3px 3px 5px 0px, rgba(79, 156, 232, 0.7019607843) 5px 5px 20px 0px;
  z-index: -2;
}

.input {
  padding: 10px;
  width: 100%;
  background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
  border: none;
  color: #9EBCD9;
  font-size: 20px;
  border-radius: 50px;
}

.input:focus {
  outline: none;
  background: linear-gradient(135deg, rgb(239, 247, 255) 0%, rgb(214, 229, 247) 100%);
}

.search__icon {
  width: 50px;
  aspect-ratio: 1;
  border-left: 2px solid black;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-radius: 50%;
  padding-left: 12px;
  margin-right: 10px;
}

.search__icon:hover {
  border-left: 3px solid black;
}

.search__icon path {
  fill: black;
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
    id: 'loader-4',
    name: 'Dark Modern Loader',
    description: 'A loader that gives your website a modern, dark and sleek look',
    category: 'loaders',
    views: 1337,
    html: `<!-- From Uiverse.io by Ratinax --> 

<div class="loader">
      <div class="intern">
      </div>
  <div class="external-shadow">
    <div class="central">
    </div>
  </div>
</div>
`,
    css: `
/* From Uiverse.io by Ratinax */ 
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: not-allowed;
  scale: 0.7;
}

.central {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-shadow: 0.5em 1em 1em blueviolet,
    -0.5em 0.5em 1em blue,
    0.5em -0.5em 1em purple,
    -0.5em -0.5em 1em cyan;
}

.external-shadow {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0.5em 0.5em 3em blueviolet,
    -0.5em 0.5em 3em blue,
    0.5em -0.5em 3em purple,
    -0.5em -0.5em 3em cyan;
  z-index: 999;
  animation: rotate 3s linear infinite;
  background-color: #212121;
}

.intern {
  position: absolute;
  color: white;
  z-index: 9999;
}

.intern::before {
  content: "100%";
  animation: percent 2s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes percent {
  0% {
    content: '0%';
  }

  25% {
    content: '25%';
  }

  33% {
    content: '33%';
  }

  42% {
    content: '42%';
  }

  51% {
    content: '51%';
  }

  67% {
    content: '67%';
  }

  74% {
    content: '74%';
  }

  75% {
    content: '75%';
  }

  86% {
    content: '86%';
  }

  95% {
    content: '95%';
  }

  98% {
    content: '98%';
  }

  99% {
    content: '99%';
  }
}
`
  },
  {
    id: 'loader-3',
    name: 'Developer Loader',
    description: 'A developer console beautiful loading screen',
    category: 'loaders',
    views: 1567,
    html: `<!-- From Uiverse.io by creator1116 --> 
<div class="terminal-loader">
  <div class="terminal-header">
    <div class="terminal-title">Status</div>
    <div class="terminal-controls">
      <div class="control close"></div>
      <div class="control minimize"></div>
      <div class="control maximize"></div>
    </div>
  </div>
  <div class="text">Loading...</div>
</div>
`,
    css: `
@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 10em;
  }
  90%,
  100% {
    width: 0;
  }
}

.terminal-loader {
  border: 0.1em solid #333;
  background-color: #1a1a1a;
  color: #0f0;
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  padding: 1.5em 1em;
  width: 12em;
  margin: 100px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.terminal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: #333;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
  box-sizing: border-box;
}

.terminal-controls {
  float: right;
}

.control {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #777;
}

.control.close {
  background-color: #e33;
}

.control.minimize {
  background-color: #ee0;
}

.control.maximize {
  background-color: #0b0;
}

.terminal-title {
  float: left;
  line-height: 1.5em;
  color: #eee;
}

.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid green;
  animation: typeAndDelete 4s steps(11) infinite,
    blinkCursor 0.5s step-end infinite alternate;
  margin-top: 1.5em;
}
`
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
    id: 'toggle-2',
    name: 'Neon Toggle',
    description: 'Cyberpunk-style toggle switch',
    category: 'toggles',
    views: 987,
    html: `<!-- From Uiverse.io by RiccardoRapelli --> 
<label class="switch">
  <input id="input" type="checkbox" checked="darkTheme" />
  <div class="slider round">
    <div class="sun-moon">
      <svg id="moon-dot-1" class="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="moon-dot-2" class="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="moon-dot-3" class="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-1" class="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-2" class="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-3" class="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>

      <svg id="cloud-1" class="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-2" class="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-3" class="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-4" class="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-5" class="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-6" class="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
    </div>
    <div class="stars">
      <svg id="star-1" class="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-2" class="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-3" class="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-4" class="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
    </div>
  </div>
</label>
`,
    css: `/* From Uiverse.io by RiccardoRapelli */ 
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch #input {
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
  background-color: #2196f3;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  z-index: 0;
  overflow: hidden;
}

.sun-moon {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: yellow;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

#input:checked + .slider {
  background-color: black;
}

#input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

#input:checked + .slider .sun-moon {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background-color: white;
  -webkit-animation: rotate-center 0.6s ease-in-out both;
  animation: rotate-center 0.6s ease-in-out both;
}

.moon-dot {
  opacity: 0;
  transition: 0.4s;
  fill: gray;
}

#input:checked + .slider .sun-moon .moon-dot {
  opacity: 1;
}

.slider.round {
  border-radius: 34px;
}

.slider.round .sun-moon {
  border-radius: 50%;
}

#moon-dot-1 {
  left: 10px;
  top: 3px;
  position: absolute;
  width: 6px;
  height: 6px;
  z-index: 4;
}

#moon-dot-2 {
  left: 2px;
  top: 10px;
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 4;
}

#moon-dot-3 {
  left: 16px;
  top: 18px;
  position: absolute;
  width: 3px;
  height: 3px;
  z-index: 4;
}

#light-ray-1 {
  left: -8px;
  top: -8px;
  position: absolute;
  width: 43px;
  height: 43px;
  z-index: -1;
  fill: white;
  opacity: 10%;
}

#light-ray-2 {
  left: -50%;
  top: -50%;
  position: absolute;
  width: 55px;
  height: 55px;
  z-index: -1;
  fill: white;
  opacity: 10%;
}

#light-ray-3 {
  left: -18px;
  top: -18px;
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: -1;
  fill: white;
  opacity: 10%;
}

.cloud-light {
  position: absolute;
  fill: #eee;
  animation-name: cloud-move;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}

.cloud-dark {
  position: absolute;
  fill: #ccc;
  animation-name: cloud-move;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
}

#cloud-1 {
  left: 30px;
  top: 15px;
  width: 40px;
}

#cloud-2 {
  left: 44px;
  top: 10px;
  width: 20px;
}

#cloud-3 {
  left: 18px;
  top: 24px;
  width: 30px;
}

#cloud-4 {
  left: 36px;
  top: 18px;
  width: 40px;
}

#cloud-5 {
  left: 48px;
  top: 14px;
  width: 20px;
}

#cloud-6 {
  left: 22px;
  top: 26px;
  width: 30px;
}

@keyframes cloud-move {
  0% {
    transform: translateX(0px);
  }

  40% {
    transform: translateX(4px);
  }

  80% {
    transform: translateX(-4px);
  }

  100% {
    transform: translateX(0px);
  }
}

.stars {
  transform: translateY(-32px);
  opacity: 0;
  transition: 0.4s;
}

.star {
  fill: white;
  position: absolute;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  animation-name: star-twinkle;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

#input:checked + .slider .stars {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

#star-1 {
  width: 20px;
  top: 2px;
  left: 3px;
  animation-delay: 0.3s;
}

#star-2 {
  width: 6px;
  top: 16px;
  left: 3px;
}

#star-3 {
  width: 12px;
  top: 20px;
  left: 10px;
  animation-delay: 0.6s;
}

#star-4 {
  width: 18px;
  top: 0px;
  left: 18px;
  animation-delay: 1.3s;
}

@keyframes star-twinkle {
  0% {
    transform: scale(1);
  }

  40% {
    transform: scale(1.2);
  }

  80% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}
`
  },
  {
    id: 'card-1',
    name: 'Glassmorphism Card',
    description: 'Modern glass-effect card design',
    category: 'cards',
    views: 1432,
    html: `<form class="form-container">
  <div class="header-container">
    <span class="header-text">Sign Up</span>
    <p class="subtext">
      Sign up for our newsletter and you'll be the first to find out about new features.
    </p>
  </div>
  
  <div class="input-container">
    <div class="input-wrapper">
      <input type="text" class="input-field" placeholder="Mail..." />
    </div>
    <button class="subscribe-btn">Subscribe</button>
  </div>
</form>
`,
    css: `.form-container {
  color: #2d3748;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24rem;
  height: 11rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background-color: #fafafa;
  padding: 0.75rem 1.5rem;
}

.header-container {
  position: relative;
  z-index: 10;
}

.header-container::before {
  content: "";
  position: absolute;
  width: 8rem;
  height: 5rem;
  right: 0.5rem;
  background-color: #fbcfe8;
  border-radius: 9999px;
  filter: blur(12px);
  top: -3rem;
  z-index: -10;
}

.header-container::after {
  content: "";
  position: absolute;
  width: 6rem;
  height: 6rem;
  background-color: #e9d5ff;
  border-radius: 9999px;
  filter: blur(10px);
  top: -3rem;
  right: 1.5rem;
  z-index: -10;
}

.header-text {
  font-weight: 800;
  font-size: 1.5rem;
  color: #7e22ce;
}

.subtext {
  color: #4a5568;
}

.input-container {
  display: flex;
  gap: 0.25rem;
}

.input-wrapper {
  position: relative;
  width: 16rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.input-wrapper::before {
  content: "";
  position: absolute;
  width: 3rem;
  height: 3rem;
  background-color: #7c3aed;
  border-radius: 9999px;
  filter: blur(12px);
  top: 0;
  right: 0;
  z-index: -10;
}

.input-wrapper::after {
  content: "";
  position: absolute;
  width: 5rem;
  height: 5rem;
  background-color: #fecdd3;
  border-radius: 9999px;
  filter: blur(10px);
  top: 0.75rem;
  right: 3rem;
  z-index: -10;
}

.input-field {
  background-color: transparent;
  border: 1px solid #e2e8f0;
  color: #1a202c;
  font-size: 0.875rem;
  padding: 0.625rem 1rem;
  border-radius: 0.375rem;
  width: 100%;
  outline: none;
  box-shadow: none;
  transition: all 0.2s;
}

.input-field::placeholder {
  color: #7c3aed;
  opacity: 0.6;
}

.input-field:focus {
  border-color: #7c3aed;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
}

.subscribe-btn {
  background-color: #7c3aed;
  color: #f9fafb;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
}

.subscribe-btn:hover {
  background-color: #9b4de1;
}
`
  }
];