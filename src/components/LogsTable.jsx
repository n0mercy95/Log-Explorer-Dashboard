// src/components/LogsTable.jsx

function LogsTable() {
    return (
        <div className="table-container">
            <table className="logs-table">

                <thead>
                    <tr>
                        <th style={{ width: '50px' }}>ID</th>
                        <th style={{ width: '120px' }}>Date</th>
                        <th style={{ width: '180px' }}>App</th>
                        <th style={{ width: '130px' }}>Type</th>
                        <th>Signature</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Fila Estática 1: Error Crítico (SQL) */}
                    <tr>
                        <td>1</td>
                        <td>2026-04-07</td>
                        <td>fast_logistics_fleet</td>
                        <td>
                            <span className="badge badge-error">no controlado</span>
                        </td>
                        <td className="signature-cell">
                            ERROR - production - 2026-04-07 15:14:49 - SQLSTATE[23505]: Unique violation...
                        </td>
                    </tr>

                    {/* Fila Estática 2: Evento Controlado (App) */}
                    <tr>
                        <td>2</td>
                        <td>2026-04-07</td>
                        <td>fast_logistics_goto</td>
                        <td>
                            <span className="badge badge-success">controlado</span>
                        </td>
                        <td className="signature-cell">
                            INFO - production - 2026-04-07 11:56:14 - TAKE_POSITION {'{"ERROR":"ERROR DOUBLE"...}'}
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default LogsTable;