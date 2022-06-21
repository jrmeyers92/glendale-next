import {getAllRosters} from "../../dRosters";
import RosterList from "../../components/rosters/roster-list";

function RostersPage() {
    const rosters = getAllRosters();
    return (
        <div>
            <h1>Rosters</h1>
            <RosterList rosters={rosters} />

        </div>
    )
}

export default RostersPage;