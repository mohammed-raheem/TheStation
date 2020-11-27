import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function BoardIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 13.751}
      height={props.height || 18.221}
      viewBox="0 0 13.751 18.221"
      {...props}>
      <G
        fill="none"
        stroke={props.color || '#ccc'}
        strokeLinecap="round"
        strokeMiterlimit={10}>
        <Path
          data-name="Path 1883"
          d="M12.433.5H2.322S2.533 9.287.5 11.491h9.821S12.433 10.084 12.433.5z"
          strokeLinejoin="round"
        />
        <Path data-name="Line 44" d="M2.317 2.226h10.091" />
        <Path data-name="Line 45" d="M12.433.5v13.274" />
        <Path data-name="Line 46" d="M2.317 12.46v1.314" />
        <Path data-name="Line 47" d="M13.251 13.774H1.262" />
        <Path
          data-name="Path 1884"
          d="M11.081 17.514l-3.719-3.74-3.719 3.74"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default BoardIcon;
