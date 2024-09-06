import { useState } from 'react';
import ErrorBox from './components/Error';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [error, isError] = useState<boolean>(false);

  const post = async () => {
    try {
      const response = await fetch('http://localhost:8080/create', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          url: input,
        }),
      });

      if (!response.ok) {
        isError(true);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setOutput(data.uid);

    } catch (error) {
      console.error('Error:', error);
      setOutput('Error!');
      isError(true);
      // 
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:5173/${output}`);
  }
  if (error) {
    return (
      <ErrorBox status={404} reason='Failed to fetch data' />
    )
  } else {
    
  return (
    <div className="container">
        <div className="content text-center">
            <div className="header mb-4">
                <h1 className="text-4xl font-extrabold gradient-text leading-tight">URL Shortener</h1>

            </div>
            <div className="input mb-4">
                <input type="text" placeholder='Link' className="border p-2 text-sm w-64" onChange={(e) => setInput(e.target.value)} />
                <br />
                <input type="text" placeholder='Code' value={`http://localhost:8080/${output || ''}`} className="border p-2 text-sm w-64 mt-2" />
            </div>
            <div className="buttons mt-4">
                <button onClick={post} type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Create
                </button>
                <button onClick={copyToClipboard} type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2">
                    Copy
                </button>
            </div>
        </div>
    </div>

  );
  }
}
