import React, { useState} from "react";
import VotingCard from "./components/VotingCard";
import langsJson from "./lib/lang.json";
import Header from "./components/Header";


function App() {
  const [langs, setLangs] = useState(langsJson);


  function handleIncrementVoteCount(langId) {
    const updatedLangs = langs.map((lang) => {
      if (lang._id === langId) {
        lang.votes = lang.votes + 1;
      }
      return lang
    });
    setLangs(updatedLangs)
  }



  return (
    <div>
      <Header />
    <div>
      {langs.map((lang) => {
        return (
          <VotingCard 
          lang={lang} 
          incrimentVoteCount={handleIncrementVoteCount}
          key={lang._id}
          />
        )
      })}
    </div>
  </div>
  );
}

export default App;


