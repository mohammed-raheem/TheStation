import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function priceIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={11.493}
      height={7.995}
      viewBox="0 0 11.493 7.995"
      {...props}>
      <G fill="none" stroke="#ccc">
        <Path d="M10.118 4a.874.874 0 00.874.874v1.747a.874.874 0 01-.874.879H1.374A.874.874 0 01.5 6.621V4.872A.874.874 0 001.374 4 .874.874 0 00.5 3.123V1.374A.874.874 0 011.374.5h8.744a.874.874 0 01.874.874v1.749a.874.874 0 00-.874.877z" />
        <Path d="M8.446 2.535a.338.338 0 00-.336-.338H3.384a.338.338 0 00-.338.338V5.46a.338.338 0 00.338.337H8.11a.338.338 0 00.336-.337z" />
      </G>
    </Svg>
  );
}

export default priceIcon;
