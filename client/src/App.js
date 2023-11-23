import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
