import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ShareIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.648}
      height={21.609}
      viewBox="0 0 19.648 21.609"
      {...props}>
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path d="M18.649 3.941A2.941 2.941 0 1115.707 1a2.941 2.941 0 012.942 2.941zM6.883 10.804a2.941 2.941 0 11-2.942-2.941 2.941 2.941 0 012.942 2.941zM18.649 17.668a2.941 2.941 0 11-2.942-2.941 2.941 2.941 0 012.942 2.941zM6.481 12.285l6.7 3.9M13.168 5.422l-6.687 3.9" />
      </G>
    </Svg>
  );
}

export default ShareIcon;
