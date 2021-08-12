import React, { useState, useEffect } from 'react';
import './CommentsBar.css';

function CommentsBar(props) {
  const [data, setData] = useState({
      id: "",
      comments: []
  })

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: props.account })
    };
    fetch('http://127.0.0.1:8000/get-data/comments', requestOptions)
        .then(response => response.json())
        .then(data => setData({
          id: props.account,
          comments: data
        }));
    }, [props.account])

  console.log(data.comments)

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