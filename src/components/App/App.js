import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const updateURLs = async () =>{
     const fetchUrls = await getUrls()
     setUrls(fetchUrls)
    }
    updateURLs()
  }, [])

  const addNewURL = (newURL) => {
    let URLarray = urls.urls
    URLarray.push(newURL)
    setUrls({['urls']: URLarray})
  }
  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addNewURL={addNewURL}/>
      </header>
     <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
