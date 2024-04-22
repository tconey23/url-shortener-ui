import React, { useState } from 'react';
import { postUrls } from '../../apiCalls';

function UrlForm({addNewURL}) {
  const [title, setTitle] = useState('');
  const [long_url, setUrlToShorten] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      id: Date.now(),
      title,
      long_url
    }
    postnewURL(newUrl)
    clearInputs();
  }

  const postnewURL = async (newUrl) => {
    const updatedURLS = await postUrls(newUrl)
    addNewURL(updatedURLS)
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='URL'
        value={long_url}
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
