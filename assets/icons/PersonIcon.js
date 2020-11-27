import * as React from 'react';
import Svg, {G, Rect, Path, Circle} from 'react-native-svg';

function PersonIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 11.741}
      height={props.height || 18.409}
      viewBox="0 0 11.741 18.409"
      {...props}>
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={props.color || '#ccc'}
        strokeMiterlimit={10}>
        <Rect
          width={10.741}
          height={9.634}
          rx={2.482}
          transform="translate(0 7.775)"
        />
        <Path d="M2.736 7.775h5.268v1.68a2.482 2.482 0 01-2.481 2.482h-.3a2.482 2.482 0 01-2.487-2.482v-1.68h0z" />
        <Circle cx={3.259} cy={3.259} transform="translate(2.111)" r={3.259} />
      </G>
    </Svg>
  );
}

export default PersonIcon;
