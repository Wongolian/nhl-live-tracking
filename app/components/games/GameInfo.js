const GameInfo = ({ gameInfo }) => {

    const awayTeam = gameInfo.awayTeam
    const homeTeam = gameInfo.homeTeam

    return (
        <div>
            <h2>{awayTeam.abbrev} {awayTeam.name.default} - {awayTeam.score}</h2>
            <h2>{homeTeam.abbrev} {homeTeam.name.default} - {awayTeam.score}</h2>
            <br />
        </div>
    )

}

export default GameInfo