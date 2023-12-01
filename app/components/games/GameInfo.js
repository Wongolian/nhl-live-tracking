"use client";

import ScoringInfo from "./ScoringInfo";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Avatar,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

const GameInfo = ({ gameInfo }) => {
  const awayTeam = gameInfo.awayTeam;
  const homeTeam = gameInfo.homeTeam;
  const goalsInfo = gameInfo.goals;
  const currentPeriod = gameInfo.period;
  const timeRemaining = gameInfo?.clock?.timeRemaining
  const gameRunning = gameInfo?.clock?.running
  const intermission = gameInfo?.clock?.inIntermission

  function whichPeriod() {
    
    if (intermission) return "Intermission ";
    if (currentPeriod === 1 && !intermission) return timeRemaining + " 1st";
    if (currentPeriod === 2 && !intermission) return timeRemaining + " 2nd";
    if (currentPeriod === 3 && !intermission && timeRemaining != "00:00") return timeRemaining + " 3rd";
    if (currentPeriod === 4 && gameRunning == true) return timeRemaining + " OT";
    if (currentPeriod === 5 && gameRunning == true) return timeRemaining + " SO";

  }

  return (
    <Card className="bg-neutral-100 mb-4 text-black">
      <CardHeader>
        <div className="text-md w-full grid grid-cols-3 content-center">
          <div className="col-span-2">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-[30%,55%,15%] p-2 self-center">
                <div className="m-auto">
                  <Avatar src={awayTeam.logo} />
                </div>
                <div className="my-auto w-max self-start">
                  {awayTeam.abbrev} {awayTeam.name.default}
                </div>
                <div className={awayTeam.score > homeTeam.score ? "my-auto flex justify-end font-bold" : "my-auto flex justify-end "}>{awayTeam.score}</div>
              </div>

              <div className="grid grid-cols-[30%,55%,15%] p-2 self-center">
                <div className="m-auto">
                  <Avatar src={homeTeam.logo} />
                </div>
                <div className="my-auto w-max self-start">
                  {homeTeam.abbrev} {homeTeam.name.default}
                </div>
                <div className={homeTeam.score > awayTeam.score ? "my-auto flex justify-end font-bold" : "my-auto flex justify-end "}>{homeTeam.score}</div>
              </div>
            </div>
          </div>
          <div className="m-auto">
            {whichPeriod()}
          </div>
        </div>
      </CardHeader>
      <Divider className="bg-black w-11/12 m-auto" />
      <CardBody>
        <Accordion isCompact>
          <AccordionItem title="Scoring Summary">
            {goalsInfo?.map((goal) => (
              <ScoringInfo key={gameInfo.id} goalInfo={goal} />
            ))}
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default GameInfo;
