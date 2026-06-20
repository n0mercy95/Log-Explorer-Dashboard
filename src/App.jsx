import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import FiltersBar from './components/FiltersBar';
import LogsTable from './components/LogsTable'; // <-- Importación
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <MainContainer>
          <h2>Panel de Control</h2>
          <FiltersBar />
          <LogsTable /> {/* <-- Inserción en la vista */}
        </MainContainer>
      </div>
    </div>
  )
}

export default App;