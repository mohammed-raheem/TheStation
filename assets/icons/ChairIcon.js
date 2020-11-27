import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ChairIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 11.178}
      height={props.height || 17.588}
      viewBox="0 0 11.178 17.588"
      {...props}>
      <G fill="none" stroke={props.color || '#ccc'} strokeLinecap="round">
        <Path
          d="M5.663 2.364a32.227 32.227 0 014.426.327V.955a19.063 19.063 0 00-2.644-.4A19.12 19.12 0 005.664.498a19.12 19.12 0 00-1.781.057 19.064 19.064 0 00-2.644.4v1.736a42.383 42.383 0 014.424-.327z"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
        <Path
          strokeMiterlimit={10}
          d="M2.051 2.596l.24 6.053M3.834 2.444l.151 6.206M9.305 2.596l-.24 6.053M7.521 2.444L7.37 8.65M5.589 2.616v5.832M3.081 13.096h5.163"
        />
        <Path d="M.5 8.633h10.178v2.225H.5z" />
        <Path
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M3.008 10.858v6.23H1.385v-6.23zM9.94 10.858v6.23H8.317v-6.23z"
        />
      </G>
    </Svg>
  );
}

export default ChairIcon;
