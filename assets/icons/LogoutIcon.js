import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function LogoutIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.41}
      height={16.268}
      viewBox="0 0 14.41 16.268"
      {...props}>
      <G
        fill="none"
        stroke="#ff2f50"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}>
        <Path
          data-name="Path 1965"
          d="M11.769 4.499a6.455 6.455 0 010 9.129 6.455 6.455 0 01-9.129 0 6.455 6.455 0 010-9.129"
        />
        <Path data-name="Line 67" d="M7.302 6.814V.75" />
      </G>
    </Svg>
  );
}

export default LogoutIcon;
