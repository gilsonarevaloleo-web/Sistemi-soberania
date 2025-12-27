import React, { useState } from 'react';
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
  Lock
} from 'lucide-react';

/**
 * SISTEMICAR - Arquitectura de Soberanía Humana
 * Componente listo para ejecutar en una app React
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('scanner');
  const [isPrivacyActive, setIsPrivacyActive] = useState(false);
  const [scannerStep, setScannerStep] = useState(1);
  const [energyScore, setEnergyScore] = useState(null);

  const [filters, setFilters] = useState({
    enfoque: 50,
    conflicto: 50,
    carga: 50,
    solucion: 50
  });

  const handleSelection = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    if (scannerStep < 4) {
      setScannerStep(prev => prev + 1);
    } else {
      calculateResult({ ...filters, [field]: value });
    }
  };

  const calculateResult = (finalFilters) => {
    const { enfoque, conflicto, carga, solucion } = finalFilters || filters;
    let score = (enfoque + solucion) - (conflicto + carga);
    // Normalización a 0-100 (ajustada para visualizar)
    score = Math.max(5, Math.min(100, Math.round((score + 190) / 3.8)));
    setEnergyScore(score);
    setScannerStep(5);
  };

  const resetScanner = () => {
    setScannerStep(1);
    setEnergyScore(null);
    setFilters({ enfoque: 50, conflicto: 50, carga: 50, solucion: 50 });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: '#e6e6e6', fontFamily: 'Inter, sans-serif', paddingBottom: '6rem' }}>
      <header style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(0,0,0,0.6)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.125rem', fontFamily: 'Playfair Display, serif' }}>SISTEMICAR</h1>
          <p style={{ fontSize: '9px', letterSpacing: '0.35em', color: '#f59e0b', margin: 0 }}>Bio-Intelligence Platform</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={() => setIsPrivacyActive(!isPrivacyActive)} style={{ padding: '0.5rem', borderRadius: '12px', border: isPrivacyActive ? '1px solid #f59e0b' : '1px solid #27272a', background: 'transparent', color: isPrivacyActive ? '#f59e0b' : '#9ca3af' }}>
            {isPrivacyActive ? <ShieldCheck size={18} /> : <Lock size={18} />}
          </button>
          <div style={{ width: '1px', height: '1.5rem', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 900 }}>{energyScore ? `${energyScore}%` : '--%'}</p>
            <p style={{ margin: 0, fontSize: '8px', color: '#9ca3af', letterSpacing: '0.12em' }}>Energía</p>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '42rem', margin: '2rem auto', padding: '1.5rem' }}>
        {activeTab === 'scanner' && (
          <section>
            {scannerStep <= 4 ? (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '0.5rem' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ height: '8px', flex: 1, borderRadius: '999px', background: scannerStep >= i ? '#f59e0b' : '#27272a' }} />
                    ))}
                  </div>
                  <p style={{ fontSize: '9px', color: '#9ca3af', letterSpacing: '0.12em' }}>Filtro de Análisis {scannerStep}/4</p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
                    {scannerStep === 1 && "¿Qué tan clara está tu visión ahora mismo?"}
                    {scannerStep === 2 && "¿Hay conflicto interno entre tu cuerpo y tu mente?"}
                    {scannerStep === 3 && "¿Cuántas 'pestañas' de seguimiento tienes abiertas?"}
                    {scannerStep === 4 && "¿Cómo te sientes ante tu mayor problema actual?"}
                  </h2>
                </div>

                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {scannerStep === 1 && (
                    <>
                      <button onClick={() => handleSelection('enfoque', 100)} style={optionStyle}>Objetivo láser y único. <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('enfoque', 50)} style={optionStyle}>Idea general pero con dudas. <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('enfoque', 10)} style={optionStyle}>Solo operando en reacción. <ChevronRight size={14} /></button>
                    </>
                  )}
                  {scannerStep === 2 && (
                    <>
                      <button onClick={() => handleSelection('conflicto', 0)} style={optionStyle}>Sintonía total. <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('conflicto', 50)} style={optionStyle}>Fricción biológica (cansancio/tedio). <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('conflicto', 95)} style={optionStyle}>Guerra civil interna. <ChevronRight size={14} /></button>
                    </>
                  )}
                  {scannerStep === 3 && (
                    <>
                      <button onClick={() => handleSelection('carga', 10)} style={optionStyle}>Una sola tarea enfrente. <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('carga', 55)} style={optionStyle}>Varias fuentes de estrés. <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('carga', 95)} style={optionStyle}>Saturación cognitiva total. <ChevronRight size={14} /></button>
                    </>
                  )}
                  {scannerStep === 4 && (
                    <>
                      <button onClick={() => handleSelection('solucion', 100)} style={optionStyle}>Dominio y control. <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('solucion', 50)} style={optionStyle}>Esfuerzo constante. <ChevronRight size={14} /></button>
                      <button onClick={() => handleSelection('solucion', 10)} style={optionStyle}>Sensación de asfixia. <ChevronRight size={14} /></button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', position: 'relative', marginBottom: '1rem' }}>
                  <div style={{ width: 224, height: 224, borderRadius: '999px', border: '8px solid rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: 900 }}>{energyScore}%</span>
                    <span style={{ fontSize: '9px', color: '#f59e0b', letterSpacing: '0.3em' }}>Soberanía Real</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '24px', borderLeft: '4px solid #f59e0b', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Bot size={18} color="#f59e0b" />
                    <span style={{ fontSize: '10px', fontWeight: 900 }}>Protocolo Sugerido</span>
                  </div>
                  <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                    {energyScore > 80 ? "Estado de Flujo Crítico. Es momento de atacar las tareas de alta ingeniería y decisiones de poder." :
                      energyScore > 55 ? "Rendimiento Estable. Mantén el ritmo, pero protege tu enfoque cerrando procesos secundarios." :
                      "Colapso Entrópico Detectado. Detén la producción y aplica 20 minutos de silencio absoluto fuera de pantallas."}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <button onClick={resetScanner} style={{ padding: '1rem', background: '#ffffff', color: '#000', borderRadius: '999px', fontWeight: 900 }}>Nuevo Escaneo</button>
                  <button onClick={() => setActiveTab('alquimia')} style={{ padding: '1rem', background: '#0f172a', color: '#fff', borderRadius: '999px', fontWeight: 900, border: '1px solid rgba(255,255,255,0.05)' }}>Ir a Alquimia</button>
                </div>
              </div>
            )}
          </section>
        )}

        {activeTab === 'alquimia' && (
          <section>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem' }}>Libro de Alquimia</h2>
              <p style={{ fontSize: '9px', letterSpacing: '0.4em', color: '#9ca3af' }}>Transmuta el plomo en oro mental</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <p style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={12} /> Situación de Fricción</p>
                <textarea placeholder="Describe el conflicto o carga que drena tu energía..." style={{ width: '100%', minHeight: 100, background: 'transparent', border: 'none', outline: 'none', color: 'inherit', marginTop: '0.5rem' }} />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BrainCircuit size={12} /> Máxima de Soberanía</p>
                <input placeholder="Destila la lección en una frase maestra..." style={{ width: '100%', padding: '1rem', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', marginTop: '0.5rem' }} />
              </div>

              <button style={{ width: '100%', padding: '1rem', borderRadius: '24px', background: 'linear-gradient(90deg,#f59e0b,#d97706)', color: '#000', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Destilar Oro Mental <Flame size={16} />
              </button>
            </div>
          </section>
        )}

        {activeTab === 'wisdom' && (
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem' }}>Bóveda</h2>
                <p style={{ fontSize: '9px', letterSpacing: '0.12em', color: '#9ca3af' }}>Activos de Conciencia</p>
              </div>
              <button style={{ padding: '0.5rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#f59e0b' }}><PlusCircle size={20} /></button>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { cat: 'Soberanía', text: 'El flujo de caja es el sistema circulatorio de la libertad.', power: '85%' },
                { cat: 'Estrategia', text: 'El silencio es el servidor donde se procesa la visión.', power: '92%' },
                { cat: 'Biología', text: 'Un cuerpo agotado es un arquitecto sin herramientas.', power: '70%' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '10px', color: '#f59e0b', background: 'rgba(245,158,11,0.15)', padding: '0.25rem 0.5rem', borderRadius: '999px', fontWeight: 900 }}>{item.cat}</span>
                    <span style={{ fontSize: '9px', color: '#9ca3af' }}>Potencia: {item.power}</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: isPrivacyActive ? 'transparent' : '#e6e6e6' }}>"{item.text}"</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
                    <button style={{ fontSize: '9px', fontWeight: 900, color: '#9ca3af' }}>Ver Maduración <ChevronRight size={12} /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'report' && (
          <section>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem' }}>Licencia Operativa</h2>
              <p style={{ fontSize: '9px', color: '#9ca3af' }}>Aptitud y Rendimiento Certificado</p>
            </div>

            <div style={{ padding: '1rem', borderRadius: '28px', background: 'linear-gradient(180deg, rgba(245,158,11,0.08), rgba(0,0,0,0))', overflow: 'hidden' }}>
              <div style={{ background: '#050505', padding: '1.25rem', borderRadius: '26px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(245,158,11,0.08)', borderRadius: '999px' }}>
                    <ShieldCheck size={40} color="#f59e0b" />
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 900, letterSpacing: '0.12em' }}>Soberano Apto</h3>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                    {[1,2,3,4,5].map(i => <Zap key={i} size={10} color="#f59e0b" />)}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
                  <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.03)', paddingRight: '0.5rem' }}>
                    <p style={{ fontSize: '7px', color: '#9ca3af' }}>Score Medio 72h</p>
                    <p style={{ fontSize: '1.25rem', fontFamily: 'Playfair Display, serif' }}>{energyScore || '78'}%</p>
                  </div>
                  <div style={{ textAlign: 'center', paddingLeft: '0.5rem' }}>
                    <p style={{ fontSize: '7px', color: '#9ca3af' }}>Nivel de Rango</p>
                    <p style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: 900 }}>Arquitecto</p>
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#9ca3af' }}>
                    <span>Enfoque Láser</span>
                    <span style={{ color: '#fff', fontStyle: 'italic' }}>8.5 / 10</span>
                  </div>
                  <div style={{ height: '6px', background: '#111827', borderRadius: '999px', marginTop: '0.35rem' }}>
                    <div style={{ height: '100%', width: '85%', background: '#f59e0b', borderRadius: '999px' }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '9px', color: '#9ca3af' }}>
                    <span>Transmutación</span>
                    <span style={{ color: '#fff', fontStyle: 'italic' }}>12 Máximas</span>
                  </div>
                  <div style={{ height: '6px', background: '#111827', borderRadius: '999px', marginTop: '0.35rem' }}>
                    <div style={{ height: '100%', width: '60%', background: '#ffffff', borderRadius: '999px' }} />
                  </div>
                </div>

                <button style={{ width: '100%', marginTop: '0.75rem', padding: '0.75rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', color: '#9ca3af', fontWeight: 900, border: '1px solid rgba(255,255,255,0.06)' }}>
                  Descargar Certificado <Download size={14} />
                </button>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '16px', marginTop: '0.75rem', display: 'flex', gap: '0.75rem' }}>
              <Info size={18} color="#f59e0b" />
              <p style={{ fontSize: '10px', color: '#9ca3af', margin: 0 }}>Esta licencia certifica que el usuario tiene una gestión energética optimizada. Es ideal para adjuntar en propuestas de negocios o perfiles profesionales de alto rendimiento.</p>
            </div>
          </section>
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'space-around', padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <NavButton active={activeTab === 'scanner'} onClick={() => { setActiveTab('scanner'); resetScanner(); }} icon={<Gauge size={24} />} label="Escáner" />
        <NavButton active={activeTab === 'alquimia'} onClick={() => setActiveTab('alquimia')} icon={<Flame size={24} />} label="Alquimia" />
        <NavButton active={activeTab === 'wisdom'} onClick={() => setActiveTab('wisdom')} icon={<BrainCircuit size={24} />} label="Bóveda" />
        <NavButton active={activeTab === 'report'} onClick={() => setActiveTab('report')} icon={<LayoutDashboard size={24} />} label="Licencia" />
      </nav>
    </div>
  );
};

const optionStyle = {
  padding: '1rem',
  borderRadius: '18px',
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.05)',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontStyle: 'italic'
};

const NavButton = ({ active, onClick, icon, label }) => (
  <button onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: active ? '#f59e0b' : '#9ca3af' }}>
    <div style={{ padding: '8px', borderRadius: '12px', background: active ? 'rgba(245,158,11,0.08)' : 'transparent' }}>
      {icon}
    </div>
    <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.12em' }}>{label}</span>
  </button>
);

export default App;
