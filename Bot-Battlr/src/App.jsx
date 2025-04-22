// App.jsx
import { useEffect, useState } from "react";
import BotCollection from "./assets/Components/BotCollection";
import MyBotArmy from "./assets/Components/MyBotAmy"

import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then(setBots);
  }, []);

  function enlistBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  }

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <MyBotArmy bots={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}


export default App;