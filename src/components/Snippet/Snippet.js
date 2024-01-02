"use client"
import React from 'react';
// import { Code } from 'bright';

function Snippet({ children }) {
  const [isSnippetShown, setIsSnippetShow] = React.useState(false);

  if (isSnippetShown) {
    return children;
  } else {
    return (
      <div className="reveal">
        <button
          onClick={() =>
            setIsSnippetShow(true)
          }
        >
          Reveal Content
        </button>
      </div>
    )
  }
}

export default Snippet;
