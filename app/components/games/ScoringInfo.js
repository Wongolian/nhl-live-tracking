import Image from 'next/image';

function ScoringInfo({goalInfo}) {

    console.log({goalInfo})

    return (
        <div>
            <Image src={goalInfo.mugshot} width={50} height={50} alt=''/>
            <h4>{goalInfo.name.default} ({goalInfo.goalsToDate})</h4>
            <h4>{goalInfo.timeInPeriod}</h4>
        </div>
    );
}

export default ScoringInfo;