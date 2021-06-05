import Card from './components/Card';
import CricketScore from './components/CricketScoreboard';
import FootballScore from './components/FootballScore';
import MatchData from './data.json';

const [MatchInfo, result] = ["Bangladesh Tour of India 2021, 5th ODI", "Toss Delayed due to Rain"];

function App() {

    return <div>
        <h1 className="card-title">My Cards</h1>
        <Card CardTitle="About Bangladesh" ShortDes="write summerize about Bangladesh" />

        <FootballScore title="hello from football score" />

        {MatchData.map(element => <CricketScore key={element.uniqueId} MatchInfo={element.MatchInfo} teamOne={element.teamOne} teamTwo={element.teamTwo} result={element.result} />)}

        <CricketScore MatchInfo="Bangladesh Tour of India 2021, 4th ODI" result="Match Abounded Due To Rain" />
        <CricketScore MatchInfo={MatchInfo} result={result} />
    </div>;
}

export default App;