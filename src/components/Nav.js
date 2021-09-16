import { Link } from "@reach/router";

import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";

function Nav() {
  return (
    <header className="text-white bg-black absolute top-0 inset-x-0 h-16 z-10 flex justify-between items-center px-16">
      <div className="flex items-center space-x-10">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="font-orb font-medium text-sm uppercase">
          <ul className="flex space-x-7">
            <li>
              <Link to="/nft">gen-1 nft drop</Link>
            </li>
            <li>
              <Link to="/roadmap">roadmap</Link>
            </li>
            <li>tokenomics</li>
            <li>faq</li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-7 text-2xl">
        <a
          href="https://discord.com/invite/bBeHKHHSu5"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Discord} alt="discord-icon" />
        </a>
        <a
          href="https://twitter.com/SGFUnited"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="twitter-icon" />
        </a>
      </div>
    </header>
  );
}

export default Nav;

const Logo = () => (
  <svg
    width={188}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g filter="url(#prefix__filter0_d)">
      <path
        d="M52.534 13h4.534c-.017-3.426-2.659-5.693-6.886-5.693-4.15 0-7.083 2.233-7.057 5.557-.008 2.727 1.883 4.244 4.977 4.909l1.739.375c1.943.426 2.608.912 2.625 1.704-.017.861-.801 1.466-2.318 1.466-1.816 0-2.89-.852-2.966-2.454h-4.5c.017 4.38 2.983 6.34 7.534 6.34 4.423 0 7.074-1.909 7.09-5.352-.016-2.659-1.601-4.525-5.454-5.352l-1.431-.307c-1.654-.35-2.395-.835-2.353-1.67.009-.767.648-1.33 2.114-1.33 1.534 0 2.258.674 2.352 1.807zm17.91.307h4.79c-.366-3.503-3.545-6-7.67-6-4.705 0-8.523 3.239-8.523 9 0 5.523 3.46 8.932 8.557 8.932 4.568 0 7.84-2.796 7.84-7.569v-2.42H67.7v3.375h3.17c-.042 1.517-1.116 2.489-3.238 2.489-2.454 0-3.716-1.807-3.716-4.875 0-3.026 1.364-4.807 3.75-4.807 1.483 0 2.489.682 2.779 1.875zM77.649 25h4.74v-6.818h6.783v-3.818h-6.784v-3h7.534V7.545H77.648V25zm29.127-17.455v10.773c0 1.628-1.168 2.796-2.796 2.796-1.627 0-2.795-1.168-2.795-2.796V7.545h-4.739v11.182c0 3.989 3.017 6.477 7.534 6.477 4.483 0 7.534-2.488 7.534-6.477V7.545h-4.738zm22.093 0h-4.739v9.137h-.136l-6.205-9.137h-4.022V25h4.738v-9.17h.103l6.306 9.17h3.955V7.545zm6.98 0h-4.739V25h4.739V7.545zm1.768 3.819h5.25V25h4.671V11.364h5.25V7.545h-15.171v3.819zM154.57 25h12.546v-3.818h-7.807v-3h7.193v-3.818h-7.193v-3h7.841V7.545h-12.58V25zm21.646 0c5.318 0 8.693-3.273 8.693-8.727 0-5.455-3.375-8.728-8.761-8.728H169.5V25h6.716zm-1.977-4.023v-9.409h1.67c2.727 0 4.227 1.057 4.227 4.705s-1.5 4.704-4.091 4.704h-1.806z"
        fill="#fff"
      />
    </g>
    <path fill="url(#prefix__pattern0)" d="M0 0h32v32H0z" />
    <defs>
      <pattern
        id="prefix__pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#prefix__image0" transform="scale(.00195)" />
      </pattern>
      <filter
        id="prefix__filter0_d"
        x={39.682}
        y={5.307}
        width={148.227}
        height={23.932}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <image
        id="prefix__image0"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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VGxomzRpQrvuuiuphhco++233wiUVbD/4AwAUACoMC5ik129LElbb701qca5bCtvANO5c2clAibQE88O4D0uVFl0y0nFAID3XODAG5S1WhuPIQCNqFIAuMEGG5CKrJkAnO7n3d94sR+AKB577DG6//77lQi8nbbccktSDf+eMAygtNWy/BgC0Aj3asEdN/48xY9nKKi6fzrohYPK3r17m3sHqFYMqNI0XDtsDKS0gv2HlQGA237BoAYei1QlAODpPirixp8XJ1KhUBKyg5cNfvzxx+mRRx4h8Md1AFgQSFmrzQSwZwAw/U9hXMjG622rQMXpdDxD4oYbbjB39wNIwgMPPGBuJawKVQNxHoJD7Y3SVs4EsAcAyAAo7Ndff1WmupZX/FIJZ0fuuusuevfddwkgKVwMeOuttyqz9a2qe1nMnz+fvv/+ewJlFaxvGomuBPWo1Ojy1p+zZs0iFXCqkRv/F154gQCSxlve3nTTTVRTU0PlxMMSw4cPJxXxZ3LYsGEEyipY39gDgJYEylIp2udV0t5++21SQXV1NT311FPmCREgDTwcx1tJl3NXTu4QLFq0iFSFJYGVVrC+QQZAE5MnTyaVPP/886stl1oOvGLbddddR8uXLyeANPH4+1lnnWWuNFkO77//Pqls9OjRBMpauRYAAgBNzJgxg1TCJz4OAsqFF0XildoAysVabyLt4bB58+aZmS+V8aql/DpBSSsL/s0AwBizaU6YBaAsTvWpuLwmj72XY8od9y74xIttfaHceGjuzDPPNFfAS8szzzyj/HK7XAegyqwlWEPzUpu/MgOAGQAK46pajqhVwwVRl156aao9IM6EdOnSBfuOgzK4FuDaa69NZUiM3/dPP/006aBYLBIoq8D/WAEAev8K4/FGVXu7vDwxj8OnUZDEAcepp55KEydOJACVvPfee+bnIMliVD42P4cqM3D8YEVApRX4n0b2H0BNvKiGylXufPK74447zAY6KdbJD8VFoKo33niDevXqRUl57rnn6KOPPiJdlKtAEqQU+B9kADSgQyqNCwIvv/zyxMZCe/ToQa+//joBqIpno3AAwLsIxq1fv35mkK0TVRcqAlOB/7ECAGwDrDAdimm46IdPUrwWf9yRP6+89ve//x3ri4PyuPKdM1VffvklxYV7/VdeeWXZp90GhaE6pTXjf5AB0ICKa++74RXA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"
      />
    </defs>
  </svg>
);
