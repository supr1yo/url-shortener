import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DynamicRoute() {
  // get the UID from URL
  const { uid } = useParams();
  const [data, setData] = useState('');


  // Fetch the URL from db
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${uid}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let { url } = await response.json(); 

        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          url = `http://${url}`;
        }
        setData(url);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    if (data) {
      window.location.href = data; 
    }
  }, [uid, data]);


  return (
    <div>
      <h1 className='text-2xl'>Redirecting...</h1>
    </div>
  );
}
