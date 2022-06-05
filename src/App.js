import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AuthorNewSheetButton from "./Components/AuthorNewSheetButton";
import DnD from "./DraggableTable/DnDBox";
import Drag from "./DraggableTable/DragAndDrop";
import Table from "./DraggableTable/Table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      {/* <AuthorNewSheetButton /> */}
      <div style={{marginLeft: 150}}>
        <Table />
      </div>
    </div>
  );
}

export default App;
