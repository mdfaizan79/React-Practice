import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);  // Initialize an empty array for data
  const [loading, setLoading] = useState(true);  // Initialize loading state to true

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);  // Set the fetched data
        setLoading(false);  // Set loading to false after data is fetched
      })
      
  }, []);  // Empty array means it will run only once when the component mounts

  return (
    <div>
      {loading ? (  // Show loading message while fetching data
        <p>Loading...</p>
      ) : (  // Show the fetched data
        <ul>
          {data.map((post) => (  // Map over the data array and render a list of posts
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;
