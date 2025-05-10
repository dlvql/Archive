import React from 'react';

export default function Button(props) {
  console.log(props)
  return React.createElement('button', null, props.label);
}