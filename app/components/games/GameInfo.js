import Image from 'next/image'
import ScoringInfo from './ScoringInfo'

const GameInfo = ({ gameInfo }) => {

    const awayTeam = gameInfo.awayTeam
    const homeTeam = gameInfo.homeTeam
    const goalsInfo = gameInfo.goals

    return (
        <div>
            <h2>{awayTeam.abbrev} {awayTeam.name.default} - {awayTeam.score}</h2>
            <h2>{homeTeam.abbrev} {homeTeam.name.default} - {awayTeam.score}</h2>
            <h3>{gameInfo?.clock?.timeRemaining} - {gameInfo.period}</h3>

            <p>
                <h4>Scoring Summary</h4>
                {goalsInfo?.map((goal => (
                    <ScoringInfo key={gameInfo.id} goalInfo={goal} />
                )))}
            </p>
            <br />
        </div>
    )

}

export default GameInfo