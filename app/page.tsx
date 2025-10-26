export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white">
      
      {/* === HALO AURORA === */}
      <div className="halo"></div>

      {/* === HEADER LOGO === */}
      <header className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        <img
          src="/favicon_bleu_nuit.png"
          alt="PFOTC Logo"
          className="w-10 h-10 drop-shadow-[0_0_12px_rgba(0,200,255,0.4)]"
        />
        <div>
          <h1 className="text-xl font-semibold tracking-wide">PFOTC</h1>
          <p className="text-slate-300 text-sm">
            Pacific Flight Operations & Training Center
          </p>
        </div>
      </header>

      {/* === NAVIGATION === */}
      <nav className="absolute top-8 right-8 hidden sm:flex gap-6 text-sm text-cyan-400">
        <a href="/" className="hover:text-white">Accueil</a>
        <a href="/formations" className="hover:text-white">Formations</a>
        <a href="/services" className="hover:text-white">Services</a>
        <a href="/contact" className="hover:text-white">Contact</a>
      </nav>

      {/* === HERO SECTION === */}
      <section className="text-center max-w-3xl mt-32">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Pacific Flight Operations<br />
          <span className="text-cyan-400">& Training Center</span>
        </h2>
        <p className="mt-6 text-lg text-slate-300">
          Expertise, Formation & Innovation au service des opérations aériennes
        </p>

        {/* === CTA BUTTONS === */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/formations"
            className="btn-primary"
          >
            Découvrir les formations
          </a>
          <a
            href="/services"
            className="btn-outline"
          >
            Voir les services
          </a>
        </div>
      </section>

      {/* === CARDS SECTION === */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="rounded-2xl bg-gradient-to-b from-[#1a1f29]/70 to-[#0e1219]/60 border border-cyan-400/10 p-6 text-center hover:border-cyan-400/40 transition-all">
          <div className="text-cyan-400 mb-3 text-2xl">🛫</div>
          <h3 className="font-semibold text-lg mb-2">Flight Operations Services</h3>
          <p className="text-slate-300 text-sm">
            OCC, Dispatch, Loadsheet – supervision 24/7 et solutions remote.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-b from-[#1a1f29]/70 to-[#0e1219]/60 border border-cyan-400/10 p-6 text-center hover:border-cyan-400/40 transition-all">
          <div className="text-cyan-400 mb-3 text-2xl">🎓</div>
          <h3 className="font-semibold text-lg mb-2">Training & CBTA Modules</h3>
          <p className="text-slate-300 text-sm">
            Initial, recurrent, CBTA – conformité EASA/ICAO.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-b from-[#1a1f29]/70 to-[#0e1219]/60 border border-cyan-400/10 p-6 text-center hover:border-cyan-400/40 transition-all">
          <div className="text-cyan-400 mb-3 text-2xl">🌐</div>
          <h3 className="font-semibold text-lg mb-2">Consulting & Partnerships</h3>
          <p className="text-slate-300 text-sm">
            OMD, MEL/ETOPS, DAC, Ferry – expertise opérationnelle.
          </p>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="mt-20 text-center text-slate-500 text-sm pb-8">
        © PFOTC – Pacific Flight Operations & Training Center
      </footer>
    </main>
  );
}
