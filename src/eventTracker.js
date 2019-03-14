import React from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-133820299-2');

export function tracker(props) {
  return ReactGA.event({
    category: props.category,
    action: props.action,
    label: props.label
  });
}
