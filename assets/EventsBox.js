import * as React from 'react';
import Svg, {G, Path, Rect, Circle} from 'react-native-svg';

function EventsBox(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={227.5}
      height={125.5}
      viewBox="0 0 227.5 125.5"
      {...props}>
      <G transform="translate(-991.25 -224.25)">
        <Path fill="#fff" d="M1028 277h154v72h-154z" />
        <Path
          fill="none"
          stroke="#5b6481"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M992 349h226"
        />
        <Path
          fill="none"
          stroke="#5b6481"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M1028 349v-72M1182 349v-72"
        />
        <Path
          fill="#f5f6fa"
          stroke="#5b6481"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M1046 255h118v29h-118z"
        />
        <Path
          d="M1046 284h-11.679a6.321 6.321 0 01-6.321-6.321h0a6.324 6.324 0 01.833-3.137l9.953-17.418a4.218 4.218 0 013.66-2.124H1046zM1164 284h11.679a6.321 6.321 0 006.321-6.321h0a6.324 6.324 0 00-.833-3.137l-9.953-17.418a4.218 4.218 0 00-3.66-2.124H1164z"
          fill="#e9eef4"
          stroke="#5b6481"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <Rect
          width={41}
          height={10}
          rx={5}
          transform="translate(1081 303)"
          fill="#e9eef4"
        />
        <Rect
          width={41}
          height={10}
          rx={5}
          transform="translate(1085 306)"
          fill="#f9ef0d"
        />
        <Path
          fill="none"
          stroke="#5b6481"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M1137.538 248.871l-3.538-8.667M1143.964 247.468l3.627-8.631M1146.082 252.462l8.667-3.538"
        />
        <Circle
          cx={2}
          cy={2}
          r={2}
          transform="translate(1070.5 242.5)"
          fill="none"
          stroke="#e9eef4"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <Circle
          cx={2}
          cy={2}
          r={2}
          transform="translate(1090 225)"
          fill="none"
          stroke="#e9eef4"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <Circle
          cx={2}
          cy={2}
          r={2}
          transform="translate(1044 231)"
          fill="none"
          stroke="#e9eef4"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
}

export default EventsBox;
