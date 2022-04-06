import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
function Results({ results }) {
  return (
    //for dissapearing load effect when switching category div becomes flip
    // Flipmove and the key={result.id} is needed , the second part in in
    // thumbnail.js
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
