 assets/js/script.js
    // Starter Easter egg: Konami code detector + tiny celebration
    (function () {
      const code =
    ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','Arro
    wRight','b','a'];
      let idx = 0;

   window.addEventListener('keydown', (e) => {
     if (e.key === code[idx]) {
       idx++;
       if (idx === code.length) {
         triggerEasterEgg();
         idx = 0;
       }
     } else {
       idx = (e.key === code[0]) ? 1 : 0;
     }
   });

   function triggerEasterEgg() {
     const overlay = document.createElement('div');
     overlay.id = 'ee';
     Object.assign(overlay.style, {
       position: 'fixed',
       inset: '0',
       background: 'rgba(0,0,0,.85)',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       zIndex: '1000',
       color: '#fff',
       textAlign: 'center',
       padding: '1rem'
     });
     overlay.innerHTML =        <div style="max-width:600px">         <h2>You found the
 Easter Egg!</h2>         <p>Thanks for exploring. Here’s a little celebration:</p>
 <div style="font-size:48px; margin: 0.5rem 0;">🎉✨🚀</div>         <div style="margin:
 0.5rem 0 1rem;">Tip: You can close this by pressing the Close button.</div>
 <button id="ee-close" style="padding:.5rem
 1rem;border-radius:6px;border:0;background:#fff;color:#111;cursor:pointer;">Close</button>
 </div>;
     document.body.appendChild(overlay);
     document.getElementById('ee-close').addEventListener('click', () => overlay.remove());

 ```
   spawnConfetti(18);

 ```

   }

   function spawnConfetti(n) {
     const container = document.createElement('div');
     Object.assign(container.style, {
       position: 'fixed',
       left: '0',
       top: '0',
       width: '100%',
       height: '0',
       overflow: 'visible',
       pointerEvents: 'none'
     });
     document.body.appendChild(container);

 ```
   const colors = ['#f472b6','#34d399','#60a5fa','#f59e0b','#a78bfa'];
   for (let i = 0; i < n; i++) {
     const c = document.createElement('span');
     c.textContent = '🎈';
     c.style.position = 'absolute';
     c.style.left = Math.random() * 100 + '%';
     c.style.top = '-20px';
     c.style.fontSize = (12 + Math.random() * 18) + 'px';
     c.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);
     c.style.color = colors[Math.floor(Math.random() * colors.length)];
     c.style.transform = 'translateY(-20px)';
     c.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
     container.appendChild(c);
   }
   const style = document.createElement('style');
   style.textContent = '@keyframes fall { to { transform: translateY(110vh) rotate(360deg);
 opacity: 0; } }';
   document.head.appendChild(style);
   // remove confetti after a short delay
   setTimeout(() => container.remove(), 5000);

 ```

   }
 })();
