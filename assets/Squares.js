import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function Squares(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={101.544}
      height={67.959}
      viewBox="0 0 101.544 67.959"
      {...props}>
      <G opacity={0.1} fill="none" stroke="#141414" strokeMiterlimit={10}>
        <Path
          strokeDasharray="4 4 4 4 4 4"
          d="M67.529 33.915h33.515v33.544H67.529z"
        />
        <Path
          strokeDasharray="5 4 5 4 5 4"
          d="M34.015 33.915H67.53v33.544H34.015zM.5 33.915h33.515v33.544H.5z"
        />
        <Path
          strokeDasharray="4 4 4 4 4 4"
          d="M67.529.5h33.515v33.416H67.529z"
        />
      </G>
    </Svg>
  );
}

export default Squares;
