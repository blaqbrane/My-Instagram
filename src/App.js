import Bio from "./Instagram/Bio";
import Gallery from "./Instagram/Gallery";
import Navbar from "./Instagram/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Bio />
        <Gallery />
      </div>
    </>
  );
}

export default App;
