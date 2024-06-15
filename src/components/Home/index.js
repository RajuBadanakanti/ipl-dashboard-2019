// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'
class Home extends Component {
  state = {
    teamsDataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplteamData()
  }

  getIplteamData = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsDataList: updatedData, isLoading: false})
  }

  renderListItems = () => {
    // Ul list item render
    const {teamsDataList} = this.state
    return (
      <ul className="teams-ul-items">
        {teamsDataList.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    // Loader render
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-Home-container">
        <div className="logo-dashboard-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-png"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderListItems()}
      </div>
    )
  }
}

export default Home
