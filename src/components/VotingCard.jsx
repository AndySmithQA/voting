import React from "react";


function VotingCard(props){
    const {lang, incrimentVoteCount} = props;

    return(
        <div className="card">
            <div className="logo">
                <img src={`/assets/images/${lang.logo}`} alt="" />
            </div>
            <div className="content">
                <p>Name: {lang.name}</p>
                <p>Rating: {lang.rating}</p>
            </div>
            <button onClick={() => incrimentVoteCount(lang._id)}>
                +1
            </button>
            <p>Vote Count: {lang.votes}</p>
        </div>
    );
}

export default VotingCard;