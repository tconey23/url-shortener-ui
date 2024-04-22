import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  let urlEls
  if(props.urls.urls){
  urlEls = props.urls.urls.map(url => {
    console.log(props)
    return (
      <div className="url">
        <h3>{url.title}</h3>
        <a key={Date.now()} id={Date.now()} href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });
}

  return (
    <section>
      {!urlEls && <p>No urls yet! Find some to shorten!</p>}
      {urlEls}
    </section>
  )
}

export default UrlContainer;
