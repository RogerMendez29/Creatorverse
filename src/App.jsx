import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/ViewCreator";
import AddCreator from "./pages/ViewCreator";
import { supabase } from "./client";
import "./App.css";

function App() {
  const [influencers, setInfluencers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("creators").select();
      setInfluencers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/viewing" element={<ViewCreator />}></Route>
          <Route path="/editing" element={<EditCreator />}></Route>
          <Route path="/create" element={<AddCreator />}></Route>
          <Route
            index
            element={<ShowCreators influencers={influencers} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
