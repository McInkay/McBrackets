import Bracket from "./components/Bracket";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 shadow border-solid border-b-2 border-gray-500">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 mr-16">
                <span className="font-semibold text-xl tracking-tight">McBrackets</span>
            </div>
        </div>  
      </nav>
    
      <main className="pt-5">
        <Bracket></Bracket>
      </main>
    </div>
  );
}

export default App;
