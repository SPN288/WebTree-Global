import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import ProfileCard2 from '../components/ProfileCard2';
import ProfileCard3 from '../components/ProfileCard3';

export default function HomePage() {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      setProfiles(data.results);


    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };
  useEffect(() => {
    fetchProfiles();
  }, []);

  console.log(profiles.map((i) => i))
  return (
    <>
      <NavBar />
      <div className='p-3 flex flex-wrap  gap-5'>

        {profiles.map((i) =>
        (<ProfileCard key={i.id.value}
          first_name={i.name.first}
          last_name={i.name.last}
          gender={i.gender}
          phone_number={i.phone}
          img_uri={i.picture.large} />
        ))}

        {profiles.map((i) =>
        (<ProfileCard2 key={i.id.value}
          first_name={i.name.first}
          last_name={i.name.last}
          gender={i.gender}
          phone_number={i.phone}
          img_uri={i.picture.large} />
        ))}
        {profiles.map((i) =>
        (<ProfileCard3 key={i.id.value}
          first_name={i.name.first}
          last_name={i.name.last}
          gender={i.gender}
          phone_number={i.phone}
          img_uri={i.picture.large} />
        ))}

      </div>








    </>
  )
}
