import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

function StageIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 16.86}
      height={props.height || 12.93}
      viewBox="0 0 16.86 12.93"
      {...props}>
      <G
        fill="none"
        stroke={props.color || '#bebebe'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}>
        <Path d="M.5 9.288h15.86v3.142H.5zM1.969 1.061H14.89v8.227H1.969z" />
        <G transform="translate(3.815 .5)">
          <Circle cx={0.561} cy={0.561} r={0.561} />
          <Circle cx={0.561} cy={0.561} r={0.561} transform="translate(4.07)" />
          <Circle
            cx={0.561}
            cy={0.561}
            r={0.561}
            transform="translate(8.108)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default StageIcon;
