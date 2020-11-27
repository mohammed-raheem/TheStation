import * as React from 'react';
import Svg, {G, Path, Ellipse} from 'react-native-svg';

function DatashowIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 17.068}
      height={props.height || 10.358}
      viewBox="0 0 17.068 10.358"
      {...props}>
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={props.color || '#ccc'}
        strokeLinecap="round"
        strokeMiterlimit={10}>
        <Path
          data-name="Rectangle 422"
          strokeLinejoin="round"
          d="M0 0h16.068v7.788H0z"
        />
        <Path data-name="Line 48" d="M1.876 2.436h5.458" />
        <Path data-name="Line 49" d="M1.876 3.827h5.458" />
        <Path data-name="Line 50" d="M1.876 5.219h5.458" />
        <Path data-name="Line 51" d="M1.075 9.358h3.036" />
        <Path data-name="Line 52" d="M11.667 9.358h3.036" />
        <Ellipse
          data-name="Ellipse 48"
          cx={1.318}
          cy={1.325}
          rx={1.318}
          ry={1.325}
          transform="translate(10.64 2.569)"
          strokeLinejoin="round"
        />
        <Ellipse
          data-name="Ellipse 49"
          cx={2.746}
          cy={2.762}
          rx={2.746}
          ry={2.762}
          transform="translate(9.211 1.132)"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default DatashowIcon;
