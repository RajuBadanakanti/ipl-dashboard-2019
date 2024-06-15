// Write your code here
// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div>
      <h1 className="latest-text">Latest Match</h1>
      <div className="latest-bg-container">
        <div className="match-details-container">
          <p className="latest-match-team">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
        />
        <hr className="line" />
        <div className="match-uniit-details-container">
          <p className="first-innings-text">First Innings</p>
          <p className="latest-match">{firstInnings}</p>

          <p className="second-innings-text">Second Innings</p>
          <p className="latest-match">{secondInnings}</p>

          <p className="man-of-match-text">Man Of The Match</p>
          <p className="latest-match">{manOfTheMatch}</p>

          <p className="umpires-text">Umpires</p>
          <p className="latest-match">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
