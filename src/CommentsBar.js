import React, { useState, useCallback } from 'react';
import './CommentsBar.css';

function CommentsBar(props) {
  const [data, setData] = useState({
      id: "",
      comments: []
  })

  const onAccountChange = useCallback((account) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: account })
    };
    // fetch('http://127.0.0.1:8000/get-data/comments', requestOptions)
    fetch('https://cogent-dahlia-289109.de.r.appspot.com/get-data/comments', requestOptions)
        .then(response => response.json())
        .then(data => setData({
          id: account,
          comments: data
        }));
    }, [])

    props.onAccountChangeRef.current = onAccountChange;

  return (
    <div className="comments-wrapper">
      <div>{ data.id }</div>
      { data.comments.map(
        d => (
          <div className="comment" onClick={ () => window.open(d.article, "_blank") } key={ d.id } >{ d.opinion }</div>
        )
      ) }
    </div>
  )
}

export default CommentsBar;