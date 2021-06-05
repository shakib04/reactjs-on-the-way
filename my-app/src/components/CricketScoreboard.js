const score = {
    border: '1px solid green',
    width: '280px',
    padding: '15px',
    lineHeight: '1.5',
    backgroundColor: 'black',
    color: 'white',
    margin: '7px',
    borderRadius: '10px'
}

function CricketScore(props) {
    return <div style={score}>
        <h5 className='MatchInfo'>{props.MatchInfo}</h5>
        <h3>{props.teamOne}</h3>
        <h3>{props.teamTwo}</h3>
        <h4 className='CircResult'>{props.result}</h4>
    </div>
}

export default CricketScore;