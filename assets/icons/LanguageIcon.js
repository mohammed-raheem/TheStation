import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function LanguageIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={16}
      viewBox="0 0 26 16"
      {...props}>
      <G data-name="Group 1049">
        <G
          data-name="Rectangle 32022"
          fill="none"
          stroke="#3d3a37"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}>
          <Path d="M4 0h8v16H4a4 4 0 01-4-4V4a4 4 0 014-4z" stroke="none" />
          <Path d="M4 .75h6.5a.75.75 0 01.75.75v13a.75.75 0 01-.75.75H4A3.25 3.25 0 01.75 12V4A3.25 3.25 0 014 .75z" />
        </G>
        <Path
          data-name="Path 1962"
          d="M8.156 11.859l-.624-1.713H4.483l-.624 1.713H2.318l2.877-7.5h1.688l2.855 7.5zm-2.147-5.88L4.972 8.813h2.073z"
          fill="#3d3a37"
        />
      </G>
      <G data-name="Group 1050">
        <G
          data-name="Rectangle 32023"
          fill="none"
          stroke="#3d3a37"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}>
          <Path
            d="M12.999 0h9a4 4 0 014 4v8a4 4 0 01-4 4h-9V0z"
            stroke="none"
          />
          <Path d="M14.499.75h7.5A3.25 3.25 0 0125.249 4v8a3.25 3.25 0 01-3.25 3.25h-7.5a.75.75 0 01-.75-.75v-13a.75.75 0 01.75-.75z" />
        </G>
        <Path
          data-name="Path 1961"
          d="M20.376 5.743v7.551h-1.375V5.743zm.307-.635h-2.062v-.74h.434a.494.494 0 01-.074-.212 1.53 1.53 0 01-.021-.222 1.08 1.08 0 01.079-.428.848.848 0 01.217-.307.963.963 0 01.312-.185 1.03 1.03 0 01.354-.063 1.366 1.366 0 01.307.032 1.667 1.667 0 01.243.074v.7a2.021 2.021 0 00-.391-.063.385.385 0 00-.291.1.326.326 0 00-.09.233.361.361 0 00.089.249.446.446 0 00.34.1h.554z"
          fill="#3d3a37"
        />
      </G>
    </Svg>
  );
}

export default LanguageIcon;
