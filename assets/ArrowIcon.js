import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ArrowIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.629}
      height={17.048}
      viewBox="0 0 20.629 17.048"
      {...props}>
      <G fill="none" stroke="#fff" strokeWidth={2}>
        <Path d="M20.629 8.572H1.393M9.231 16.341L1.414 8.524 9.231.707" />
      </G>
    </Svg>
  );
}

export default ArrowIcon;
