// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesData: {},
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  // pascal_case to camalCase
  getFormatedData = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  // pascal_case to camalCase
  /* getRecentMatchesData = eachMatch => ({
    competingTeam: eachMatch.competing_team,
    competingTeamLogo: eachMatch.competing_team_logo,
    date: eachMatch.date,
    firstInnings: eachMatch.first_innings,
    id: eachMatch.id,
    manOfTheMatch: eachMatch.man_of_the_match,
    matchStatus: eachMatch.match_status,
    result: eachMatch.result,
    secondInnings: eachMatch.second_innings,
    umpires: eachMatch.umpires,
    venue: eachMatch.venue,
  }) */

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchData: this.getFormatedData(data.latest_match_details),
      recentMatchesData: data.recent_matches.map(eachMatch =>
        this.getFormatedData(eachMatch),
      ),
    }

    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'

      case 'KKR':
        return 'kkr'

      case 'KXP':
        return 'kxp'

      case 'CSK':
        return 'csk'

      case 'RR':
        return 'rr'

      case 'MI':
        return 'mi'

      case 'SH':
        return 'srh'

      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  renderMatch = () => {
    const {teamMatchesData} = this.state
    const {latestMatchData, recentMatchesData, teamBannerUrl} = teamMatchesData

    const teamMatchBgClassName = this.getClassName()
    return (
      <div
        className={`bg-team-container ${teamMatchBgClassName}`}
        data-testid="loader"
      >
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatchData} />
        <ul className="ul-match-card-container">
          {recentMatchesData.map(eachMatch => (
            <MatchCard key={eachMatch.id} recentMatchesDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderMatch()
  }
}

export default TeamMatches
