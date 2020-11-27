import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ContactIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.066}
      height={16.303}
      viewBox="0 0 20.066 16.303"
      {...props}>
      <Path
        data-name="Icon material-contacts"
        d="M17.56.625H2.507A1.887 1.887 0 00.625 2.507v11.29a1.887 1.887 0 001.882 1.882H17.56a1.887 1.887 0 001.882-1.882V2.507A1.887 1.887 0 0017.56.625zm-7.527 2.587a2.117 2.117 0 11-2.117 2.113 2.12 2.12 0 012.117-2.113zm4.7 9.643H5.325v-1.411c0-1.571 3.133-2.352 4.7-2.352s4.7.781 4.7 2.352z"
        fill="none"
        stroke="#3d3a37"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
    </Svg>
  );
}

export default ContactIcon;
