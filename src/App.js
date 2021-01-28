import Bracket from "./components/Bracket";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <nav className="py-4 px-6 border-solid border-b-2 border-gray-500">
        <span className="font-semibold text-xl tracking-tight">McBrackets</span>
      </nav>
    
      <main className="pt-5">
        <Bracket></Bracket>
      </main>
    </div>
  );
}

export default App;
