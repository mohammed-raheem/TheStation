import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function WifiIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 17.895}
      height={props.height || 13.112}
      viewBox="0 0 17.895 13.112"
      {...props}>
      <G
        fill="none"
        stroke={props.color || '#ccc'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}>
        <Path
          data-name="Path 1885"
          d="M15.792 5.693l1.6-1.611a11.753 11.753 0 00-16.895 0l1.618 1.627a9.3 9.3 0 0113.674-.015z"
        />
        <Path
          data-name="Path 1886"
          d="M12.82 8.736l1.7-1.713a7.758 7.758 0 00-11.152 0l1.7 1.713a5.178 5.178 0 017.745 0z"
        />
        <Path
          data-name="Path 1887"
          d="M8.947 12.612l2.662-2.677a3.7 3.7 0 00-5.324 0z"
        />
      </G>
    </Svg>
  );
}

export default WifiIcon;
