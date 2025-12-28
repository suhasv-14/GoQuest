import { Home as HomeIcon } from "lucide-react"; // Renamed Home import from lucide-react
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load components
const TripPlanner = lazy(() => import("./Components/TripPlanner"));
const HomePage = lazy(() => import("./Components/Home")); // Renamed lazy-loaded Home component
const QuestMode = lazy(() => import("./Components/QuestMode"));

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main content */}
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />{" "}
              {/* Updated to HomePage */}
              <Route path="/tripPlanner" element={<TripPlanner />} />
              <Route path="/quest-mode" element={<QuestMode />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
