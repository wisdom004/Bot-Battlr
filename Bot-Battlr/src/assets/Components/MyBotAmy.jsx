// components/YourBotArmy.jsx
import BotCard from "./BotCard";

function MyBotArmy({ bots, onRelease, onDischarge }) {
  return (
    <div>
      <h2>My Bot Army</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDischarge={() => onDischarge(bot)}
            isInArmy={true}
          />
        ))}
      </div>
    </div>
  );
}

export default MyBotArmy;