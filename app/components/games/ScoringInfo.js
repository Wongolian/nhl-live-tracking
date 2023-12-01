"use client";

import {
  Divider,
  Link,
  Avatar,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

function ScoringInfo({ goalInfo }) {
  const highlightLink =
    "https://players.brightcove.net/6415718365001/EXtG1xJ7H_default/index.html?videoId=";

  // TODO SEPARATE GOALS BY PERIOD
  // TODO FIGURE OUT HOW TO ADD IN ASSISTS
  // TODO - Change headshots background related to teams primary color bg-[rgba(0,0,0,0.7)]

  return (
    <Accordion isCompact variant="bordered" className="mb-1 ">
      <AccordionItem
        key={goalInfo.highlightClip}
        title={goalInfo?.name.default + " (" + goalInfo.goalsToDate + ")"}
        startContent={<Avatar src={goalInfo.mugshot} size="lg" />}
        subtitle={
          <div className="grid grid-rows-2">
            <div>ASSISTS INFO HERE</div>
            {goalInfo.homeScore} - {goalInfo.awayScore} {goalInfo.teamAbbrev} |
            Time - {goalInfo.timeInPeriod} | {goalInfo.strength}
          </div>
        }
      >
        <iframe
          src={highlightLink + goalInfo.highlightClip}
          width="675px"
          height="380px"
          allowFullScreen
        />
        <Link isExternal href={highlightLink + goalInfo.highlightClip}>
          Link to Highlight
        </Link>
      </AccordionItem>
    </Accordion>
  );
}

export default ScoringInfo;
