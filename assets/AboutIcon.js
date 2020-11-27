import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function AboutIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.439}
      height={18.439}
      viewBox="0 0 18.439 18.439"
      {...props}>
      <G
        fill="none"
        stroke="#3d3a37"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}>
        <Path
          data-name="Path 1950"
          d="M17.689 9.219A8.469 8.469 0 119.219.75a8.469 8.469 0 018.47 8.469z"
        />
        <Path data-name="Path 1951" d="M9.22 5.832V9.22" />
        <Path data-name="Path 1952" d="M9.22 12.607h0" />
      </G>
    </Svg>
  );
}

export default AboutIcon;
