import NavbarTop from "./components/common/NavbarTop";
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
    <div className="min-h-screen py-5">
      <div className="container gap-8 columns-2 mx-auto">
      {Games?.map((game => (
        <GameInfo key={game.id} gameInfo={game} />
      )))}
      </div>
    </div>
  )
}
