import * as React from 'react';
import Svg, {G, Rect, Circle, Ellipse} from 'react-native-svg';

function AudioIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 11.955}
      height={props.height || 16.499}
      viewBox="0 0 11.955 16.499"
      {...props}>
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={props.color || '#ccc'}
        strokeLinejoin="round"
        strokeMiterlimit={10}>
        <Rect width={10.955} height={15.499} rx={1} />
        <G transform="translate(1.052 1.241)">
          <Circle
            cx={0.187}
            cy={0.187}
            r={0.187}
            transform="translate(8.487)"
          />
          <Circle cx={0.187} cy={0.187} r={0.187} />
        </G>
        <G transform="translate(1.052 13.6)">
          <Circle
            cx={0.187}
            cy={0.187}
            r={0.187}
            transform="translate(8.487)"
          />
          <Circle cx={0.187} cy={0.187} r={0.187} />
        </G>
        <G transform="translate(3.447 1.42)">
          <G transform="translate(1.464 1.473)">
            <Ellipse
              cx={0.566}
              cy={0.569}
              rx={0.566}
              ry={0.569}
              stroke="none"
            />
            <Ellipse cx={0.566} cy={0.569} rx={0.066} ry={0.069} />
          </G>
          <Ellipse cx={2.03} cy={2.042} rx={2.03} ry={2.042} />
        </G>
        <G transform="translate(2.177 7.306)">
          <Ellipse
            cx={0.92}
            cy={0.925}
            rx={0.92}
            ry={0.925}
            transform="translate(2.38 2.393)"
          />
          <Ellipse cx={3.3} cy={3.319} rx={3.3} ry={3.319} />
        </G>
      </G>
    </Svg>
  );
}

export default AudioIcon;
