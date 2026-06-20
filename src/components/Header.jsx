// src/components/Header.jsx

function Header() {
    return (
        // Usamos la etiqueta semántica <header> en lugar de un simple <div>
        <header className="app-header">

            <div className="header-brand">
                {/* Aquí podríamos poner un ícono SVG más adelante */}
                <span className="company-name">Fast Logistics</span>
            </div>

            <div className="header-title">
                <h1>Log Explorer Dashboard</h1>
            </div>

            <div className="header-actions">
                {/* Un placeholder (marcador de posición) para el perfil o menú */}
                <div className="user-avatar">
                    <span>A</span>
                </div>
                <span className="user-name">Admin</span>
            </div>

        </header>
    );
}

export default Header; // Exportamos el componente para poder usarlo en App.jsx