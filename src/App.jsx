import './App.css'; // Asegúrate de tener las animaciones aquí si no usas Tailwind extendido

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1f1f1f] to-[#000000] text-white flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-2xl text-center px-6 py-10 rounded-xl bg-white/5 backdrop-blur-lg shadow-2xl border border-white/10">
        {/* Logo */}
        <img
          src="/public/favicon.png"
          alt="Logo AspireCode"
          className="mx-auto w-20 h-20 mb-4 rounded-full border-2 border-white/30 shadow-md"
        />

        {/* Glitch Title */}
        <h1 className="text-4xl md:text-5xl font-black glitch text-[#00FFAB] relative mb-4">
          <span className="glitch-layer">AspireCode</span>
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-gray-100">
          ToolsManager App
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Administra tu ferretería desde cualquier lugar con nuestra app móvil oficial. Conectividad, eficiencia y control total en tu bolsillo.
        </p>

        <a
          href="/application-0c6df8e1-2643-466c-9c67-6156508906e5.apk"
          download
          className="mt-6 inline-block bg-[#00FFAB] hover:bg-[#06d6a0] text-[#0f172a] font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
        >
          Descargar APK
        </a>

        <footer className="pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} AspireCode. Todos los derechos reservados.
        </footer>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,171,0.08),_transparent_80%)] pointer-events-none" />
    </div>
  );
}
