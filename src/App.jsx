import Typography from "@mui/material/Typography";
import { VegaLite } from "react-vega";
import chart from "./data/chart.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Typography variant="h4">
        Dies ist eine Grafik der Wetterdaten der Schweiz von 2023
      </Typography>
      <VegaLite spec={chart} />
    </div>
  );
}

export default App;
