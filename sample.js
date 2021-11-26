import React from 'react';

const getData = async function () {
Promise.all(
     fetch('https://api.chucknorris.io/jokes/random').then((resp) => resp.json()),
  );
}

export default getData;