import React, { useState, useEffect } from 'react';
import { 
  Gauge, 
  Flame, 
  BrainCircuit, 
  LayoutDashboard, 
  ShieldCheck, 
  Bot, 
  ChevronRight, 
  Zap, 
  PlusCircle, 
  Download,
  Info,
  History,
  Lock
} from 'lucide-react';

/**
 * SISTEMICAR - Arquitectura de Soberanía Humana
 * Diseñado por: Arquitecto Gilson
 * Propósito: Gestión de Energía Mental y Transmutación de Carga Cognitiva
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('scanner');
  const [isPrivacyActive, setIsPrivacyActive] = useState(false);
  const [scannerStep, setScannerStep] = useState(1);
  const [energyScore, setEnergyScore] = useState(null);
  
  // Estado de los 4 Filtros de Gilson
  const [filters, setFilters] = useState({
    enfoque: 50,
    conflicto: 50,
    carga: 50,
    solucion: 50
  });

  const handleSelection = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    if (scannerStep < 4) {
      setScannerStep(scannerStep + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Algoritmo: (Enfoque + Solución) - (Conflicto + Carga)
    const { enfoque, conflicto, carga, solucion } = filters;
    let score = ((enfoque + solucion) - (conflicto + carga));
    // Normalización a escala 0-100 para visualización
    score = Math.max(5, Math.min(100, (score + 190) / 3.8));
    setEnergyScore(Math.round(score));
    setScannerStep(5); // Pantalla de Resultados
  };

  const resetScanner = () => {
    setScannerStep(1);
    setEnergyScore(null);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans pb-28">
      
      {/* HEADER DINÁMICO */}
      <header className="p-6 flex justify-between items-center sticky top-0 bg-black/60 backdrop-blur-2xl border-b border-white/5 z-50">
        <div>
          <h1 className="text-xl font-serif italic text-white tracking-tight">SISTEMICAR</h1>
          <p className="text-[7px] uppercase tracking-[0.4em] text-yellow-600 font-black">Bio-Intelligence Platform</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPrivacyActive(!isPrivacyActive)}
            className={`p-2 rounded-xl border transition-all ${isPrivacyActive ? 'border-yellow-600 text-yellow-600 shadow-[0_0_10px_rgba(202,138,4,0.2)]' : 'border-zinc-800 text-zinc-600'}`}
          >
            {isPrivacyActive ? <ShieldCheck size={18} /> : <Lock size={18} />}
          </button>
          <div className="h-8 w-[1px] bg-white/10 mx-1"></div>
          <div className="text-right">
            <p className="text-[10px] font-black text-white">{energyScore ? `${energyScore}%` : '--%'}</p>
            <p className="text-[6px] text-zinc-500 uppercase font-bold tracking-widest">Energía</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-6 space-y-8 animate-in fade-in duration-700">
        
        {/* VISTA 1: ESCÁNER (BIO-MANÓMETRO) */}
        {activeTab === 'scanner' && (
          <section className="space-y-8">
            {scannerStep <= 4 ? (
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${scannerStep >= i ? 'bg-yellow-600' : 'bg-zinc-800'}`} />
                    ))}
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">Filtro de Análisis {scannerStep}/4</p>
                  <h2 className="text-2xl font-serif italic text-white leading-tight">
                    {scannerStep === 1 && "¿Qué tan clara está tu visión ahora mismo?"}
                    {scannerStep === 2 && "¿Hay conflicto interno entre tu cuerpo y tu mente?"}
                    {scannerStep === 3 && "¿Cuántas 'pestañas' de seguimiento tienes abiertas?"}
                    {scannerStep === 4 && "¿Cómo te sientes ante tu mayor problema actual?"}
                  </h2>
                </div>
                
                <div className="grid gap-3">
                  {scannerStep === 1 && (
                    <>
                      <button onClick={() => handleSelection('enfoque', 100)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Objetivo láser y único." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('enfoque', 50)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Idea general pero con dudas." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('enfoque', 10)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Solo operando en reacción." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                    </>
                  )}
                  {scannerStep === 2 && (
                    <>
                      <button onClick={() => handleSelection('conflicto', 0)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Sintonía total." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('conflicto', 50)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Fricción biológica (cansancio/tedio)." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('conflicto', 95)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Guerra civil interna." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                    </>
                  )}
                  {scannerStep === 3 && (
                    <>
                      <button onClick={() => handleSelection('carga', 10)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Una sola tarea enfrente." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('carga', 55)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Varias fuentes de estrés." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('carga', 95)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Saturación cognitiva total." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                    </>
                  )}
                  {scannerStep === 4 && (
                    <>
                      <button onClick={() => handleSelection('solucion', 100)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Dominio y control." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('solucion', 50)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Esfuerzo constante." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                      <button onClick={() => handleSelection('solucion', 10)} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-left text-sm italic hover:border-yellow-600/50 transition-all active:scale-95 group flex justify-between items-center">
                        "Sensación de asfixia." <ChevronRight size={14} className="text-zinc-700 group-hover:text-yellow-600" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-8 text-center animate-in zoom-in-95 duration-500">
                <div className="relative inline-block">
                  <div className="w-56 h-56 rounded-full border-[8px] border-yellow-600/10 flex flex-col items-center justify-center relative z-10">
                    <span className="text-7xl font-black text-white italic tracking-tighter">{energyScore}%</span>
                    <span className="text-[9px] uppercase font-black text-yellow-600 tracking-[0.3em] mt-1">Soberanía Real</span>
                  </div>
                  <div className="absolute inset-0 bg-yellow-600/5 blur-3xl rounded-full"></div>
                </div>
                
                <div className="glass rounded-[2.5rem] p-8 border-l-4 border-yellow-600 text-left space-y-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Bot size={18} className="text-yellow-600" />
                    <span className="text-[10px] uppercase font-black text-white tracking-[0.2em]">Protocolo Sugerido</span>
                  </div>
                  <p className="text-xs italic leading-relaxed text-zinc-300">
                    {energyScore > 80 ? "Estado de Flujo Crítico. Es momento de atacar las tareas de alta ingeniería y decisiones de poder." : 
                     energyScore > 55 ? "Rendimiento Estable. Mantén el ritmo, pero protege tu enfoque cerrando procesos secundarios." :
                     "Colapso Entrópico Detectado. Detén la producción y aplica 20 minutos de silencio absoluto fuera de pantallas."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={resetScanner}
                    className="py-5 bg-white text-black rounded-3xl font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all"
                  >
                    Nuevo Escaneo
                  </button>
                  <button 
                    onClick={() => setActiveTab('alquimia')}
                    className="py-5 bg-zinc-900 text-white rounded-3xl font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all border border-white/5"
                  >
                    Ir a Alquimia
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* VISTA 2: ALQUIMIA (TRANSMUTACIÓN) */}
        {activeTab === 'alquimia' && (
          <section className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-serif italic text-white leading-none">Libro de Alquimia</h2>
              <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Transmuta el plomo en oro mental</p>
            </div>
            
            <div className="glass rounded-[3rem] p-8 space-y-8 border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><Flame size={120} /></div>
               
               <div className="space-y-3 relative">
                 <p className="text-[10px] font-black text-yellow-600 uppercase italic flex items-center gap-2">
                   <Zap size={12} /> Situación de Fricción
                 </p>
                 <textarea 
                   className={`w-full bg-transparent border-b border-white/10 text-sm italic outline-none min-h-[100px] py-2 resize-none transition-all ${isPrivacyActive ? 'blur-md focus:blur-none' : ''}`}
                   placeholder="Describe el conflicto o carga que drena tu energía..."
                 />
               </div>

               <div className="space-y-3 relative">
                 <p className="text-[10px] font-black text-yellow-600 uppercase italic flex items-center gap-2">
                   <BrainCircuit size={12} /> Máxima de Soberanía
                 </p>
                 <input 
                   type="text"
                   className={`w-full bg-white/5 p-5 rounded-3xl text-xs italic outline-none border border-white/5 focus:border-yellow-600/30 transition-all ${isPrivacyActive ? 'blur-md focus:blur-none' : ''}`}
                   placeholder="Destila la lección en una frase maestra..."
                 />
               </div>

               <button className="w-full py-5 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black font-black rounded-3xl flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.3em] shadow-[0_10px_20px_rgba(202,138,4,0.2)] active:scale-95 transition-all">
                 Destilar Oro Mental <Flame size={16} />
               </button>
            </div>
          </section>
        )}

        {/* VISTA 3: SABIDURÍA (BÓVEDA) */}
        {activeTab === 'wisdom' && (
          <section className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <h2 className="text-3xl font-serif italic text-white">Bóveda</h2>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold italic">Activos de Conciencia</p>
              </div>
              <button className="p-3 bg-white/5 rounded-2xl border border-white/10 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all">
                <PlusCircle size={20} />
              </button>
            </div>

            <div className="grid gap-5">
              {[
                { cat: 'Soberanía', text: 'El flujo de caja es el sistema circulatorio de la libertad.', power: '85%' },
                { cat: 'Estrategia', text: 'El silencio es el servidor donde se procesa la visión.', power: '92%' },
                { cat: 'Biología', text: 'Un cuerpo agotado es un arquitecto sin herramientas.', power: '70%' }
              ].map((item, idx) => (
                <div key={idx} className="glass p-7 rounded-[2.5rem] border border-white/5 hover:border-yellow-600/30 transition-all group relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[8px] bg-yellow-600/20 text-yellow-600 px-3 py-1 rounded-full font-black uppercase tracking-widest">{item.cat}</span>
                    <span className="text-[8px] text-zinc-600 font-bold uppercase italic group-hover:text-yellow-600 transition-colors">Potencia: {item.power}</span>
                  </div>
                  <p className={`text-sm italic leading-relaxed text-zinc-200 ${isPrivacyActive ? 'blur-md select-none' : ''}`}>
                    "{item.text}"
                  </p>
                  <div className="flex justify-end mt-4">
                    <button className="text-[8px] font-black uppercase text-zinc-500 hover:text-white flex items-center gap-1 tracking-tighter">
                      Ver Maduración <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VISTA 4: LICENCIA (DASHBOARD PROFESIONAL) */}
        {activeTab === 'report' && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-serif italic text-white leading-none">Licencia Operativa</h2>
              <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Aptitud y Rendimiento Certificado</p>
            </div>

            <div className="relative p-[1px] rounded-[3.5rem] bg-gradient-to-br from-yellow-600/40 via-transparent to-yellow-600/20 shadow-2xl overflow-hidden">
              <div className="bg-[#050505] p-10 rounded-[3.45rem] space-y-8 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5"><Zap size={140} /></div>
                
                <div className="flex justify-center">
                  <div className="p-4 bg-yellow-600/10 rounded-full border border-yellow-600/20">
                    <ShieldCheck size={40} className="text-yellow-600" />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-lg font-black uppercase tracking-[0.3em] text-white">Soberano Apto</h3>
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Zap key={i} size={10} className="fill-yellow-600 text-yellow-600" />)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div className="space-y-1 text-center border-r border-white/5">
                    <p className="text-[7px] text-zinc-500 uppercase font-black tracking-widest">Score Medio 72h</p>
                    <p className="text-xl font-serif italic text-white">{energyScore || '78'}%</p>
                  </div>
                  <div className="space-y-1 text-center">
                    <p className="text-[7px] text-zinc-500 uppercase font-black tracking-widest">Nivel de Rango</p>
                    <p className="text-sm font-black text-yellow-600 uppercase">Arquitecto</p>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    <span>Enfoque Láser</span>
                    <span className="text-white italic">8.5 / 10</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-900 rounded-full">
                    <div className="h-full bg-yellow-600 w-[85%] rounded-full shadow-[0_0_8px_#ca8a04]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-zinc-400 mt-4">
                    <span>Transmutación</span>
                    <span className="text-white italic">12 Máximas</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-900 rounded-full">
                    <div className="h-full bg-white w-[60%] rounded-full shadow-[0_0_8px_#ffffff]"></div>
                  </div>
                </div>

                <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-all">
                  Descargar Certificado <Download size={14} />
                </button>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl flex items-start gap-4 border border-white/5">
               <Info size={18} className="text-yellow-600 shrink-0 mt-1" />
               <p className="text-[10px] italic text-zinc-500 leading-relaxed">
                 Esta licencia certifica que el usuario tiene una gestión energética optimizada. Es ideal para adjuntar en propuestas de negocios o perfiles profesionales de alto rendimiento.
               </p>
            </div>
          </section>
        )}

      </main>

      {/* NAVBAR UNIFICADO (SISTEMICAR OS) */}
      <nav className="fixed bottom-0 w-full bg-black/80 backdrop-blur-3xl border-t border-white/5 flex justify-around p-4 pb-10 z-[100] shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <button 
          onClick={() => {setActiveTab('scanner'); resetScanner();}} 
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'scanner' ? 'text-yellow-600 scale-110' : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === 'scanner' ? 'bg-yellow-600/10' : ''}`}>
            <Gauge size={24} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Escáner</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('alquimia')} 
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'alquimia' ? 'text-yellow-600 scale-110' : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === 'alquimia' ? 'bg-yellow-600/10' : ''}`}>
            <Flame size={24} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Alquimia</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('wisdom')} 
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'wisdom' ? 'text-yellow-600 scale-110' : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === 'wisdom' ? 'bg-yellow-600/10' : ''}`}>
            <BrainCircuit size={24} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Bóveda</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('report')} 
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'report' ? 'text-yellow-600 scale-110' : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === 'report' ? 'bg-yellow-600/10' : ''}`}>
            <LayoutDashboard size={24} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Licencia</span>
        </button>
      </nav>

      {/* OVERLAY DE ESTILO GLOBALES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Playfair+Display:ital,wght@1,700&display=swap');
        
        .glass { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); }
        body { -webkit-tap-highlight-color: transparent; scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
        
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slide-in-from-right { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}} />

    </div>
  );
};

export default App;
