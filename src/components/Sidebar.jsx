// src/components/Sidebar.jsx

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <h2>Fast Logistics</h2>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <li className="nav-item">
                        {/* Usamos un span por ahora, luego podríamos usar Link de React Router */}
                        <span className="nav-link">⚡ Custom Scan</span>
                    </li>
                    <li className="nav-item active">
                        <span className="nav-link">📊 Logs / Stats</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">🏠 Main Menu</span>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;