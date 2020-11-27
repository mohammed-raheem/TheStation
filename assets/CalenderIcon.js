import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

/*
  props: (optional)
    width, height, color
*/

function CalenderIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 8.72}
      height={props.height || 8.07}
      viewBox="0 0 9.717 9.065"
      {...props}>
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={props.color || '#ccc'}
        strokeLinecap="round">
        <Rect
          width={8.717}
          height={6.973}
          rx={1}
          transform="translate(0 1.092)"
          strokeLinejoin="round"
        />
        <Path d="M2.405 0v2.26M2.404 3.677h0M6.538 3.677h0M4.471 3.677h0M2.404 5.094h0M6.538 5.094h0M4.471 5.094h0" />
        <G>
          <Path d="M2.404 6.51h0M6.538 6.51h0M4.471 6.51h0" />
        </G>
        <Path d="M6.418 0v2.26" />
      </G>
    </Svg>
  );
}

export default CalenderIcon;
