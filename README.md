<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SISTEMICAR | Soberanía Biopsíquica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Playfair+Display:ital,wght@1,700&display=swap');
        body { background-color: #050505; color: #d4d4d8; font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }
        .font-serif-italic { font-family: 'Playfair Display', serif; font-style: italic; }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.05); }
        .blur-active { filter: blur(12px); pointer-events: none; transition: 0.3s; }
    </style>
</head>
<body class="pb-28">

    <!-- Header -->
    <header class="p-6 flex justify-between items-center sticky top-0 bg-black/60 backdrop-blur-xl border-b border-white/5 z-50">
        <div>
            <h1 class="text-xl font-serif-italic text-white">SISTEMICAR</h1>
            <p class="text-[7px] uppercase tracking-[0.4em] text-yellow-600 font-black">Bio-Intelligence</p>
        </div>
        <div class="flex items-center gap-3">
            <button onclick="togglePrivacy()" id="privacyBtn" class="p-2 rounded-xl border border-zinc-800 text-zinc-600">
                <i data-lucide="lock" class="w-4 h-4"></i>
            </button>
            <div class="text-right">
                <p id="energyDisplay" class="text-[10px] font-black text-white">--%</p>
                <p class="text-[6px] text-zinc-500 uppercase font-bold">Energía</p>
            </div>
        </div>
    </header>

    <main id="appContent" class="p-6 max-w-md mx-auto space-y-8">
        <!-- El contenido se genera dinámicamente -->
        <div id="view-scanner" class="space-y-8">
            <div class="space-y-4">
                <div class="flex gap-1" id="stepIndicator">
                    <div class="h-1 flex-1 bg-yellow-600 rounded-full"></div>
                    <div class="h-1 flex-1 bg-zinc-800 rounded-full"></div>
                    <div class="h-1 flex-1 bg-zinc-800 rounded-full"></div>
                    <div class="h-1 flex-1 bg-zinc-800 rounded-full"></div>
                </div>
                <h2 id="questionText" class="text-2xl font-serif-italic text-white leading-tight">¿Qué tan clara está tu visión ahora mismo?</h2>
            </div>

            <div id="optionsContainer" class="grid gap-3">
                <!-- Opciones dinámicas -->
            </div>
        </div>
    </main>

    <!-- Navbar -->
    <nav class="fixed bottom-0 w-full bg-black/80 backdrop-blur-2xl border-t border-white/5 flex justify-around p-4 pb-8 z-50">
        <button onclick="showView('scanner')" class="flex flex-col items-center gap-1 text-yellow-600">
            <i data-lucide="gauge" class="w-6 h-6"></i>
            <span class="text-[7px] font-black uppercase">Escáner</span>
        </button>
        <button onclick="showView('alquimia')" class="flex flex-col items-center gap-1 text-zinc-600">
            <i data-lucide="flame" class="w-6 h-6"></i>
            <span class="text-[7px] font-black uppercase">Alquimia</span>
        </button>
        <button onclick="showView('reporte')" class="flex flex-col items-center gap-1 text-zinc-600">
            <i data-lucide="layout-dashboard" class="w-6 h-6"></i>
            <span class="text-[7px] font-black uppercase">Licencia</span>
        </button>
    </nav>

    <script>
        let currentStep = 1;
        let scores = { f1: 50, f2: 50, f3: 50, f4: 50 };
        let privacy = false;

        const questions = [
            "",
            "¿Qué tan clara está tu visión ahora mismo?",
            "¿Hay conflicto interno entre tu cuerpo y tu mente?",
            "¿Cuántas 'pestañas' de seguimiento tienes abiertas?",
            "¿Cómo te sientes ante tu mayor problema actual?"
        ];

        const options = [
            [],
            [
                { t: '"Objetivo láser y único"', v: 100 },
                { t: '"Idea general pero con dudas"', v: 50 },
                { t: '"Solo operando en reacción"', v: 10 }
            ],
            [
                { t: '"Sintonía total"', v: 0 },
                { t: '"Fricción biológica"', v: 50 },
                { t: '"Guerra civil interna"', v: 95 }
            ],
            [
                { t: '"Una sola tarea"', v: 10 },
                { t: '"Varios focos de estrés"', v: 55 },
                { t: '"Saturación total"', v: 95 }
            ],
            [
                { t: '"Dominio y control"', v: 100 },
                { t: '"Esfuerzo constante"', v: 50 },
                { t: '"Asfixia emocional"', v: 10 }
            ]
        ];

        function renderScanner() {
            const container = document.getElementById('optionsContainer');
            const qText = document.getElementById('questionText');
            const indicators = document.getElementById('stepIndicator').children;

            if (currentStep > 4) {
                showResult();
                return;
            }

            qText.innerText = questions[currentStep];
            container.innerHTML = '';
            
            // Update indicators
            for(let i=0; i<4; i++) {
                indicators[i].className = i < currentStep ? "h-1 flex-1 bg-yellow-600 rounded-full" : "h-1 flex-1 bg-zinc-800 rounded-full";
            }

            options[currentStep].forEach(opt => {
                const btn = document.createElement('button');
                btn.className = "p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95";
                btn.innerText = opt.t;
                btn.onclick = () => {
                    scores[`f${currentStep}`] = opt.v;
                    currentStep++;
                    renderScanner();
                };
                container.appendChild(btn);
            });
        }

        function showResult() {
            const container = document.getElementById('appContent');
            const finalScore = Math.round(((scores.f1 + scores.f4) - (scores.f2 + scores.f3) + 190) / 3.8);
            document.getElementById('energyDisplay').innerText = finalScore + '%';

            container.innerHTML = `
                <div class="text-center space-y-8 animate-in zoom-in-95 duration-500">
                    <div class="relative inline-block">
                        <div class="w-48 h-48 rounded-full border-4 border-yellow-600/10 flex flex-col items-center justify-center">
                            <span class="text-6xl font-black text-white italic">${finalScore}%</span>
                            <span class="text-[8px] uppercase font-bold text-yellow-600 tracking-widest mt-1">Aptitud</span>
                        </div>
                    </div>
                    <div class="glass p-8 rounded-[2.5rem] border-l-4 border-yellow-600 text-left">
                        <p class="text-xs italic leading-relaxed text-zinc-300">
                            Protocolo: ${finalScore > 70 ? 'Estado de Flujo Crítico. Procede con tareas de alta ingeniería.' : 'Rendimiento bajo. Sugerimos 15 min de Alquimia Mental.'}
                        </p>
                    </div>
                    <button onclick="location.reload()" class="w-full py-5 bg-white text-black rounded-3xl font-black uppercase text-[10px] tracking-widest">Reiniciar Escáner</button>
                </div>
            `;
        }

        function togglePrivacy() {
            privacy = !privacy;
            const btn = document.getElementById('privacyBtn');
            const main = document.getElementById('appContent');
            if(privacy) {
                btn.className = "p-2 rounded-xl border border-yellow-600 text-yellow-600 shadow-lg shadow-yellow-600/20";
                main.classList.add('blur-active');
            } else {
                btn.className = "p-2 rounded-xl border border-zinc-800 text-zinc-600";
                main.classList.remove('blur-active');
            }
        }

        window.onload = () => {
            lucide.createIcons();
            renderScanner();
        };
    </script>
</body>
</html>
