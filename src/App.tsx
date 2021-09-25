import React from "react";
import "./App.scss";
import DraggableCarousel from "./components/DraggableCarousel/DraggableCarousel";
import DraggableCarouselVerTwo from "./components/DraggableCarouselVerTwo/DraggableCarouselVerTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Logo</h1>
        <nav>
          <h4>Menu</h4>
        </nav>
      </header>
      <main className="container">
        <h1>Draggable Carousel</h1>
        <DraggableCarousel />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Draggable Carousel Paginate</h1>
        <DraggableCarouselVerTwo />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}

export default App;
