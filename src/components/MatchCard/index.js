// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props

  const {competingTeam, competingTeamLogo} = recentMatchesDetails
  const {matchStatus, result} = recentMatchesDetails

  let isMatchResult = ''
  if (matchStatus === 'Won') {
    isMatchResult = true
  } else {
    isMatchResult = false
  }

  const statusClassName = isMatchResult ? 'won-status' : 'lose-status'

  return (
    <li className="match-card-li-container">
      <img
        src={competingTeamLogo}
        className="competing-teams-png"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-text">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={`match-status-text ${statusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
