import React, { useEffect, useState} from "react";
import VotingCard from "./components/VotingCard";
import langsJson from "./lib/lang.json";
import Header from "./components/Header";


function App() {
  let [langs, setLangs] = useState([]);

  useEffect(() => {
    setLangs(langsJson);
  }, []);

  function incrimentVoteCount(langId) {
    langs = langs.map((lang) => {
      if (lang._id === langId) {
        lang.votes = lang.votes + 1;
      }
      return lang
    });
    setLangs(langs)
  }



  return (
    <content>
      <Header />
    <div>
      {langs.map((lang) => {
        return (
          <VotingCard lang={lang}
          incrimentVoteCount={(langId) => incrimentVoteCount(langId)}
          />
        )
      })}
    </div>
    
  </content>
  );
}

export default App;
