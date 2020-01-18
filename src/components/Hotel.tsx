import React from 'react';
import styled from 'styled-components';
import { ActionCircle } from './ActionCircle';
import { Card } from './Card';

const Action = styled.text`
  font-size: 50px;
  font-weight: bold;
`;

interface HotelProps {
  size: number;
}

const Description = styled.text`
  font-size: 22px;
`;

export const Hotel = ({ size }: HotelProps) => {
  return (
    <Card size={size} title="ACTION CARD" value={4} color="#BCD5EC">
      <ActionCircle />
      <Action x="253" y="460" alignmentBaseline="middle" textAnchor="middle">
        HOTEL
      </Action>
      <Description
        x="253"
        y="580"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Add onto any full
      </Description>
      <Description
        x="253"
        y="600"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        set you own to add
      </Description>
      <Description
        x="253"
        y="620"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        4M to the rent value.
      </Description>
      <Description
        x="253"
        y="640"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        (Except railroads and utilities.)
      </Description>
      <HouseSvg />
    </Card>
  );
};

const HouseSvg = () => (
  <svg
    width="260"
    height="200"
    viewBox="0 0 260 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    x="120"
    y="250"
  >
    <rect x="194" y="78" width="8" height="44" fill="#FFF8DA" />
    <path
      d="M200.02 87H198.995V84.8672H196.995V87H195.97V82.0234H196.995V84.04H198.995V82.0234H200.02V87ZM200.263 92.6245C200.263 93.1144 200.176 93.5439 200.003 93.9131C199.83 94.2822 199.581 94.5671 199.258 94.7676C198.937 94.9681 198.567 95.0684 198.15 95.0684C197.738 95.0684 197.37 94.9692 197.046 94.771C196.723 94.5728 196.472 94.2902 196.294 93.9233C196.117 93.5542 196.027 93.1304 196.024 92.6519V92.4058C196.024 91.9159 196.112 91.4852 196.288 91.1138C196.465 90.7401 196.715 90.4541 197.036 90.2559C197.36 90.0553 197.729 89.9551 198.144 89.9551C198.558 89.9551 198.926 90.0553 199.248 90.2559C199.571 90.4541 199.821 90.7401 199.996 91.1138C200.174 91.4852 200.263 91.9147 200.263 92.4023V92.6245ZM199.224 92.3989C199.224 91.8771 199.13 91.4806 198.943 91.2095C198.757 90.9383 198.49 90.8027 198.144 90.8027C197.799 90.8027 197.534 90.9372 197.347 91.2061C197.16 91.4727 197.066 91.8646 197.063 92.3818V92.6245C197.063 93.1326 197.157 93.5269 197.344 93.8071C197.531 94.0874 197.799 94.2275 198.15 94.2275C198.494 94.2275 198.759 94.0931 198.943 93.8242C199.128 93.5531 199.221 93.1589 199.224 92.6416V92.3989ZM200.023 98.854H198.499V103H197.474V98.854H195.97V98.0234H200.023V98.854ZM199.47 108.843H197.501V110.176H199.812V111H196.476V106.023H199.805V106.854H197.501V108.04H199.47V108.843ZM197.573 118.176H199.75V119H196.547V114.023H197.573V118.176Z"
      fill="#005BFF"
    />
    <path d="M198 78H194V117" stroke="#BBBEFF" />
    <path d="M194 122H202V78.5" stroke="black" />
    <path d="M188.5 85H192.5" stroke="#BBBEFF" />
    <path d="M188 111.5H192" stroke="black" />
    <rect x="72" y="45" width="116" height="111" fill="url(#paint0_linear)" />
    <rect
      x="182"
      y="125"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="177"
      y="127"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="113"
      y="126"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="110"
      y="128"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="72"
      y="122"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="72"
      y="56"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="72"
      y="58"
      width="3"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="138"
      y="128"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="141"
      y="130"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="72"
      y="106"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="72"
      y="108"
      width="4"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="185"
      y="148"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="184"
      y="94"
      width="4"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="182"
      y="96"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="184"
      y="150"
      width="6"
      height="1"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <path d="M188 46V156" stroke="black" stroke-width="1.5" />
    <path
      d="M122 134C122 129.582 125.582 126 130 126V126C134.418 126 138 129.582 138 134V150H122V134Z"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <path d="M130 150V126" stroke="#B40B2F" stroke-opacity="0.5" />
    <path
      d="M130 126V126C125.582 126 122 129.582 122 134V150H138"
      stroke="black"
    />
    <rect x="70" y="114" width="120" height="4" fill="#FF6D8C" />
    <rect
      x="110"
      y="114"
      width="1"
      height="4"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="105"
      y="114"
      width="1"
      height="4"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="100"
      y="114"
      width="1"
      height="4"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect x="70" y="49" width="120" height="4" fill="#FF6D8C" />
    <rect
      x="175"
      y="49"
      width="1"
      height="4"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="170"
      y="49"
      width="1"
      height="4"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <rect
      x="165"
      y="49"
      width="1"
      height="4"
      fill="#B40B2F"
      fill-opacity="0.5"
    />
    <path d="M77 53H88" stroke="black" stroke-width="1.5" />
    <path d="M98 53H121" stroke="black" stroke-width="1.5" />
    <path d="M135 53H190V50" stroke="black" stroke-width="1.5" />
    <path d="M89 118H100" stroke="black" stroke-width="1.5" />
    <path d="M109 118H135" stroke="black" stroke-width="1.5" />
    <path d="M138 118H190V115" stroke="black" stroke-width="1.5" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M84 62H99V80H84V62ZM83 89H98V109H83V89ZM96 122C88.268 122 82 128.268 82 136V150H112V136C112 128.268 105.732 122 98 122H96ZM162 122C154.268 122 148 128.268 148 136V150H178V136C178 128.268 171.732 122 164 122H162ZM123 89H109V109H123V89ZM135 89H150V109H135V89ZM176 89H161V109H176V89ZM125 62H110V80H125V62ZM136 62H151V80H136V62ZM177 62H162V80H177V62Z"
      fill="url(#paint1_linear)"
    />
    <path d="M70 156L198 156" stroke="black" stroke-width="1.5" />
    <path d="M119.5 153H141" stroke="black" />
    <circle cx="132" cy="139" r="1" fill="#FFCD7B" />
    <circle cx="128" cy="139" r="1" fill="#FFCD7B" />
    <rect x="85" y="63" width="13" height="2" fill="#BBBEFF" />
    <rect x="85" y="62" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M83 61H99V81H83V61ZM85 63H97V70H85V63ZM97 72H85V79H97V72Z"
      fill="white"
    />

    <g class="window">
      <rect x="87" y="65" width="10" height="5" fill="#A0EBFD" />
      <rect x="87" y="72" width="10" height="7" fill="#A0EBFD" />
    </g>

    <rect x="111" y="63" width="13" height="2" fill="#BBBEFF" />
    <rect x="111" y="62" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M109 61H125V81H109V61ZM111 63H123V70H111V63ZM123 72H111V79H123V72Z"
      fill="white"
    />

    <g class="window">
      <rect x="113" y="65" width="10" height="5" fill="#A0EBFD" />
      <rect x="113" y="72" width="10" height="7" fill="#A0EBFD" />
    </g>

    <rect x="137" y="63" width="13" height="2" fill="#BBBEFF" />
    <rect x="137" y="62" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M135 61H151V81H135V61ZM137 63H149V70H137V63ZM149 72H137V79H149V72Z"
      fill="white"
    />

    <g class="window">
      <rect x="139" y="65" width="10" height="5" fill="#A0EBFD" />
      <rect x="139" y="72" width="10" height="7" fill="#A0EBFD" />
    </g>

    <rect x="163" y="63" width="13" height="2" fill="#BBBEFF" />
    <rect x="163" y="62" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M161 61H177V81H161V61ZM163 63H175V70H163V63ZM175 72H163V79H175V72Z"
      fill="white"
    />

    <g class="window">
      <rect x="165" y="65" width="10" height="5" fill="#A0EBFD" />
      <rect x="165" y="72" width="10" height="7" fill="#A0EBFD" />
    </g>

    <rect x="85" y="91" width="13" height="2" fill="#BBBEFF" />
    <rect x="85" y="90" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M83 89H99V109H83V89ZM85 91H97V98H85V91ZM97 100H85V107H97V100Z"
      fill="white"
    />

    <g class="window">
      <rect x="87" y="93" width="10" height="5" fill="#A0EBFD" />
      <rect x="87" y="100" width="10" height="7" fill="#A0EBFD" />
    </g>

    <rect x="111" y="91" width="13" height="2" fill="#BBBEFF" />
    <rect x="111" y="90" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M109 89H125V109H109V89ZM111 91H123V98H111V91ZM123 100H111V107H123V100Z"
      fill="white"
    />

    <g class="window">
      <rect x="113" y="93" width="10" height="5" fill="#A0EBFD" />
      <rect x="113" y="100" width="10" height="7" fill="#A0EBFD" />
    </g>

    <rect x="137" y="91" width="13" height="2" fill="#BBBEFF" />
    <rect x="137" y="90" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M135 89H151V109H135V89ZM137 91H149V98H137V91ZM149 100H137V107H149V100Z"
      fill="white"
    />

    <g class="window">
      <rect x="139" y="93" width="10" height="5" fill="#A0EBFD" />
      <rect x="139" y="100" width="10" height="7" fill="#A0EBFD" />
    </g>

    <rect x="163" y="91" width="13" height="2" fill="#BBBEFF" />
    <rect x="163" y="90" width="2" height="18" fill="#BBBEFF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M161 89H177V109H161V89ZM163 91H175V98H163V91ZM175 100H163V107H175V100Z"
      fill="white"
    />

    <g class="window">
      <rect x="165" y="93" width="10" height="5" fill="#A0EBFD" />
      <rect x="165" y="100" width="10" height="7" fill="#A0EBFD" />
    </g>

    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M97 124C89.8203 124 84 129.82 84 137V148H86V137C86 130.925 90.9249 126 97 126H99C103.593 126 107.63 128.382 109.943 131.979C109.436 127.489 105.625 124 101 124H97Z"
      fill="#BBBEFF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M82 136C82 128.268 88.268 122 96 122H98C105.732 122 112 128.268 112 136V150H82V136ZM90 135H84.1529C85.1149 128.77 90.5004 124 97 124C103.5 124 108.885 128.77 109.847 135H105H103H92H90ZM103 137H92V148H103V137ZM105 148H110V137H105V148ZM90 148V137H84V148H90Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M163 124C155.82 124 150 129.82 150 137V148H152V137C152 130.925 156.925 126 163 126H165C169.593 126 173.63 128.382 175.943 131.979C175.436 127.489 171.625 124 167 124H163Z"
      fill="#BBBEFF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M148 136C148 128.268 154.268 122 162 122H164C171.732 122 178 128.268 178 136V150H148V136ZM156 135H150.153C151.115 128.77 156.5 124 163 124C169.5 124 174.885 128.77 175.847 135H171H169H158H156ZM169 137H158V148H169V137ZM171 148H176V137H171V148ZM156 148V137H150V148H156Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="72"
        y1="45"
        x2="194.919"
        y2="147.72"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FEB541" />
        <stop offset="1" stop-color="#FF6D8C" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="132"
        y1="77"
        x2="132"
        y2="152"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#A0EBFD" />
        <stop offset="1" stop-color="#CCE1FF" />
      </linearGradient>
    </defs>
  </svg>
);
