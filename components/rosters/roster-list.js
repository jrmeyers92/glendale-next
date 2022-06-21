
import RosterPlayer from "./roster-player";

const RosterList = (props) => {
  const { rosters } = props;
  return (
    <ul>
      {rosters.map(roster => {
        return (
          <li>
            <h2>{roster.gender} - {roster.team}</h2>
            {roster.players.map(player => {
              return (
                <ul>
                  <li>{player.name}</li>
                  <li>{player.number} </li>
                  <li>{player.position}</li>
                  <li>{player.grade} </li>


                </ul>

              )
            })}

          </li>
        )
      })}
    </ul>
  )
}

export default RosterList