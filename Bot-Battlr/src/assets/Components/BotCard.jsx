// components/BotCard.jsx
// Removed incorrect import to avoid circular dependency
import React from "react";
function BotCard({ bot, onClick, onDischarge, isInArmy = false }) {
    const { name, avatar_url, bot_class, catchphrase, health, damage, armor } = bot;
  
    return (
      <div className="bot-card" onClick={onClick}>
        <img src={avatar_url} alt={name} />
        <h3>{name}</h3>
        <p><strong>Class:</strong> {bot_class}</p>
        <p><em>"{catchphrase}"</em></p>
        <p>🩺 {health} | 💥 {damage} | 🛡 {armor}</p>
        {isInArmy && (
          <button onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }} style={{ color: "red" }}>
            ❌
          </button>
        )}
      </div>
    );
  }
  
  export default BotCard;