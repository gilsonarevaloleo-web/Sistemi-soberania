# Sistemi-soberania
index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SISTEMI - Nodo Soberano</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #020202; color: #cbd5e1; }
        .font-cinzel { font-family: 'Cinzel', serif; }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
        .scanners-glow { box-shadow: 0 0 20px rgba(202, 138, 4, 0.15); }
    </style>
</head>
<body class="min-h-screen">

    <!-- Pantalla de Bloqueo (Login) -->
    <div id="login-screen" class="fixed inset-0 z-50 flex items-center justify-center bg-black p-6">
        <div class="max-w-md w-full glass p-10 rounded-[3rem] text-center">
            <div class="mb-8 inline-flex p-4 bg-yellow-600/10 rounded-2xl border border-yellow-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h2 class="font-cinzel text-3xl text-white tracking-[0.3em] mb-2">SISTEMI</h2>
            <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-10">Acceso del Arquitecto</p>
            
            <input id="admin-key-input" type="password" placeholder="Clave de Admin" 
                class="w-full bg-black/50 border border-white/5 rounded-2xl py-4 px-6 text-center text-white outline-none focus:border-yellow-600/50 mb-4 transition-all">
            
            <button onclick="verifyAccess()" 
                class="w-full py-4 bg-yellow-600 text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-yellow-500 transition-all">
                Activar Nodo
            </button>
        </div>
    </div>

    <!-- Interfaz Principal -->
    <div id="main-interface" class="hidden">
        <div class="bg-yellow-600 py-1.5 text-center">
            <p class="text-[9px] font-black text-black uppercase tracking-[0.5em]">Nodo Independiente Netlify Activado</p>
        </div>

        <nav class="max-w-7xl mx-auto p-8 flex justify-between items-center border-b border-white/5">
            <div>
                <h1 class="font-cinzel text-3xl text-white tracking-widest">SISTEMI</h1>
                <p class="text-[9px] text-slate-500 uppercase tracking-[0.2em]">Arquitectura Gilson Arévalo</p>
            </div>
            <div class="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sincronizado</span>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto p-8 lg:p-12">
            <!-- Estadísticas -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="glass p-8 rounded-[2.5rem] hover:border-yellow-600/20 transition-all group">
                    <p class="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Comunidad</p>
                    <h4 class="text-3xl font-black text-white tracking-tighter">1000 <span class="text-xs text-slate-600 uppercase">Almas</span></h4>
                </div>
                <div class="glass p-8 rounded-[2.5rem] hover:border-yellow-600/20 transition-all">
                    <p class="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Energía</p>
                    <h4 id="energy-val" class="text-3xl font-black text-white tracking-tighter">88%</h4>
                </div>
                <div class="glass p-8 rounded-[2.5rem] hover:border-yellow-600/20 transition-all">
                    <p class="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Rango</p>
                    <h4 class="text-3xl font-black text-white tracking-tighter font-cinzel italic uppercase">Arquitecto</h4>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Oráculo -->
                <div class="bg-gradient-to-br from-zinc-900 to-black p-10 rounded-[3.5rem] border border-white/10 flex flex-col justify-between min-h-[350px]">
                    <h3 class="text-[11px] font-black text-yellow-600 uppercase tracking-[0.4em] mb-8">El Oráculo Gemini</h3>
                    <p id="oracle-text" class="text-2xl text-white font-cinzel leading-relaxed mb-8">
                        "SISTEMI ha trascendido. Los datos fluyen libres de la red de Replit."
                    </p>
                    <button onclick="askOracle()" class="w-full py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] transition-transform">
                        Consultar al Oráculo
                    </button>
                </div>

                <!-- Módulos -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="glass p-8 rounded-[3rem] hover:bg-white/5 transition-all cursor-pointer text-center flex flex-col items-center justify-center">
                        <div class="mb-4 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <span class="text-[10px] font-bold text-white uppercase tracking-widest">Maestría</span>
                    </div>
                    <div class="glass p-8 rounded-[3rem] hover:bg-white/5 transition-all cursor-pointer text-center flex flex-col items-center justify-center">
                        <div class="mb-4 text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg></div>
                        <span class="text-[10px] font-bold text-white uppercase tracking-widest">Flujo</span>
                    </div>
                    <div class="glass p-8 rounded-[3rem] hover:bg-white/5 transition-all cursor-pointer text-center flex flex-col items-center justify-center">
                        <div class="mb-4 text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div>
                        <span class="text-[10px] font-bold text-white uppercase tracking-widest">Esperanza</span>
                    </div>
                    <div class="glass p-8 rounded-[3rem] hover:bg-white/5 transition-all cursor-pointer text-center flex flex-col items-center justify-center">
                        <div class="mb-4 text-purple-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
                        <span class="text-[10px] font-bold text-white uppercase tracking-widest">Estrategia</span>
                    </div>
                </div>
            </div>
        </main>

        <footer class="p-16 text-center opacity-30 hover:opacity-100 transition-all">
            <p class="text-[8px] uppercase tracking-[1em] text-slate-500">Gilson Arévalo Pezo • SISTEMI v2.5 Independiente</p>
        </footer>
    </div>

    <script>
        // --- CONSTANTES RECUPERADAS ---
        const ADMIN_KEY = "198810";
        
        function verifyAccess() {
            const val = document.getElementById('admin-key-input').value;
            if (val === ADMIN_KEY) {
                document.getElementById('login-screen').classList.add('hidden');
                document.getElementById('main-interface').classList.remove('hidden');
            } else {
                alert("Clave de Administrador Incorrecta");
            }
        }

        function askOracle() {
            const phrases = [
                "El flujo de los 1000 suscriptores está asegurado.",
                "La soberanía tecnológica es el primer paso a la libertad.",
                "SISTEMI respira ahora en un nodo independiente.",
                "La arquitectura de Gilson Arévalo no tiene límites."
            ];
            document.getElementById('oracle-text').innerText = phrases[Math.floor(Math.random()*phrases.length)];
        }
    </script>
</body>
</html>

