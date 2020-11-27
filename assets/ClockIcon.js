import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

function clockIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      viewBox="0 0 10 10"
      {...props}>
      <G
        fill="none"
        stroke="#4c4c4c"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Rect width={10} height={10} rx={2} stroke="none" />
        <Rect x={0.5} y={0.5} width={9} height={9} rx={1.5} />
      </G>
      <Path
        d="M7.369 5.251H4.695v-2.59"
        fill="none"
        stroke="#4c4c4c"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default clockIcon;
