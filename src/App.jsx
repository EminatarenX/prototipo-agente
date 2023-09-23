import Header from "./components/Header"
import './styles/App.css'
function App() {
  

  return (
    <>
    <Header/>
    <main>
      <div className="contenedor-imagen">
        <img 
          className="imagen-agente"
          src="https://thumbs.dreamstime.com/b/businessman-agent-working-office-195129745.jpg" 
          alt="agente" />

      </div>
        
    </main>
    </>
  )
}

export default App
