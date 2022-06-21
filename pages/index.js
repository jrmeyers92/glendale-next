import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [gender, setGender] = useState("boys");
  const [team, setTeam] = useState("varsity");


  return (
    <div>
      <div>
        <input type="radio" name="gender" id="boys" />
        <label htmlFor="boys">Boys</label>
        <input type="radio" name="gender" id="girls" />
        <label htmlFor="girls">Girls</label>
      </div>
      <div>
        <input type="radio" name="team" id="varsity" />
        <label htmlFor="varsity">Varsity</label>
        <input type="radio" name="team" id="jv" />
        <label htmlFor="jv">JV</label>
      </div>
      <ul>
        <li>
          <Link href='/news'>News</Link>
        </li>
        <li>
          <Link href='/rosters'>Rosters</Link>
        </li>
        <li>
          <Link href='/schedules'>Schedules</Link>
        </li>
        <li>
          <Link href='/stats'>Stats</Link>
        </li>
        <li>
          <Link href='/coaches'>Coaches</Link>
        </li>
      </ul>
    </div>
  )
}

