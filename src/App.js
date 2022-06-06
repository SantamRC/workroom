import './App.css';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AuthorNewSheetButton from "./Components/AuthorNewSheetButton";
import DnD from "./DraggableTable/DnDBox";
import Drag from "./DraggableTable/DragAndDrop";
import Table from "./DraggableTable/Table";
import Second from "./Pages/Second";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      {/* <AuthorNewSheetButton /> */}
      <Second />
    </div>
  );
}

export default App;
