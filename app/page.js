import GameInfo from "./components/games/GameInfo";

async function getData() {
  const res = await fetch('https://api-web.nhle.com/v1/score/now', {cache: 'no-store'})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {

  const Data = await getData()
  const Games = Data.games

  return (
    <div>
      <h2>TODAY GAMES</h2>
      {Games?.map((game => (
        <GameInfo key={game.id} gameInfo={game} />
      )))}
    </div>
  )
}
