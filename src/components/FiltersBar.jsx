// src/components/FiltersBar.jsx

function FiltersBar() {
    return (
        <div className="filters-bar">

            {/* Buscador de texto principal */}
            <div className="filter-group search-group">
                <span className="filter-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Search errors (SQL, message...)"
                    className="filter-input search-input"
                />
            </div>

            {/* Selector de Fecha */}
            <div className="filter-group">
                <label>Date:</label>
                <input
                    type="date"
                    className="filter-input"
                />
            </div>

            {/* Selector de Aplicación */}
            <div className="filter-group">
                <label>App:</label>
                <select className="filter-input">
                    <option value="all">All Apps</option>
                    <option value="fast_logistics_fleet">Fleet (Heavy)</option>
                    <option value="fast_logistics_goto">GoTo (Last Mile)</option>
                </select>
            </div>

            {/* Selector de Tipo de Error */}
            <div className="filter-group">
                <label>Type:</label>
                <select className="filter-input">
                    <option value="all">All Types</option>
                    <option value="no controlado">No Controlado (SQL)</option>
                    <option value="controlado">Controlado (App)</option>
                </select>
            </div>

            {/* Botón de acción (opcional para el diseño) */}
            <button className="action-btn">
                🔔 Manual Notice
            </button>

        </div>
    );
}

export default FiltersBar;