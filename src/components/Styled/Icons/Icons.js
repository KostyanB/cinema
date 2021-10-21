import React from 'react';
import IconStyle from './IconStyle';
import env from '../../../env.json';

export const ClockIcon = ({ name = "Продолжительность", color = "#FFF", width = 20, height = 20 }) => (
    <IconStyle viewBox="0 0 20 20" fill="none" width={width} height={height}>
        <title>{name}</title>
        <path fill={color} d="M13.5631 11.7661L10.7746 9.67465V5.41442C10.7746 4.98606 10.4283 4.63981 9.99995 4.63981C9.57159 4.63981 9.22534 4.98606 9.22534 5.41442V10.062C9.22534 10.306 9.33999 10.5361 9.53519 10.6817L12.6336 13.0055C12.773 13.11 12.9357 13.1604 13.0975 13.1604C13.3338 13.1604 13.5662 13.0543 13.718 12.8498C13.9752 12.5081 13.9055 12.0225 13.5631 11.7661Z"/>
        <path fill={color} d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48566 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.6592 1.54918 10C1.54918 5.34082 5.34082 1.54918 10 1.54918C14.66 1.54918 18.4508 5.34082 18.4508 10C18.4508 14.6592 14.6592 18.4508 10 18.4508Z"/>
    </IconStyle>
)

export const LogoIcon = ({ name = "Cinema", color = "currentColor", width = 30, height = 30 }) => (
    <IconStyle viewBox="0 0 30 30" fill="none" width={width} height={height}>
        <title>{name}</title>
        <g>
            <path fill={color} d="M29.3629 11.243H1.85261C1.50748 11.243 1.22736 11.5232 1.22736 11.8683V26.8739C1.22736 28.597 2.62915 30 4.3535 30H26.8619C28.5863 30 29.988 28.597 29.988 26.8739V11.8683C29.9881 11.5231 29.708 11.243 29.3629 11.243ZM28.7376 26.8738C28.7376 27.908 27.8961 28.7495 26.8619 28.7495H4.35356C3.3194 28.7495 2.47786 27.908 2.47786 26.8738V12.4935H28.7376V26.8738Z"/>
            <path fill={color} d="M29.9681 5.4571L28.9039 1.41937C28.6588 0.437737 27.656 -0.178723 26.6619 0.0463609L1.46997 6.02356C0.97479 6.1361 0.555865 6.43744 0.289516 6.87014C0.0231675 7.30278 -0.0556117 7.81297 0.0694152 8.30816L1.24735 12.9649C1.3174 13.2475 1.57249 13.4363 1.85256 13.4363C1.90256 13.4363 1.95384 13.4313 2.0076 13.4176C2.34147 13.3338 2.54404 12.9936 2.45899 12.6585L2.39024 12.3872L29.5015 6.22742C29.6666 6.18868 29.8104 6.0861 29.898 5.94109C29.9868 5.79601 30.0106 5.62093 29.9681 5.4571ZM2.08397 11.1742L1.28117 8.0043C1.23991 7.83923 1.2674 7.66919 1.35497 7.52412C1.44377 7.38033 1.58381 7.28028 1.75385 7.24024L26.9457 1.26433C26.9907 1.25308 27.0369 1.2481 27.082 1.2481C27.3621 1.2481 27.6209 1.44065 27.6922 1.72951L28.5938 5.14954L2.08397 11.1742Z"/>
            <path fill={color} d="M7.13458 11.3081C6.82444 11.1568 6.45182 11.2793 6.29427 11.5882L3.79332 16.59C3.63951 16.8989 3.76454 17.274 4.07344 17.4291C4.16471 17.4741 4.25978 17.4954 4.35356 17.4954C4.5824 17.4954 4.80373 17.3691 4.91375 17.149L7.4147 12.1472C7.56851 11.8382 7.44342 11.4631 7.13458 11.3081Z"/>
            <path fill={color} d="M13.3857 11.3081C13.0768 11.1568 12.7017 11.2793 12.5466 11.5882L10.0456 16.59C9.89183 16.8989 10.0169 17.274 10.3258 17.4291C10.417 17.4741 10.5121 17.4954 10.6059 17.4954C10.8347 17.4954 11.0561 17.3691 11.1648 17.149L13.6658 12.1472C13.8195 11.8382 13.6945 11.4631 13.3857 11.3081Z"/>
            <path fill={color} d="M19.6379 11.3081C19.3303 11.1568 18.9552 11.2793 18.7988 11.5882L16.2979 16.59C16.1441 16.8989 16.2691 17.274 16.578 17.4291C16.6693 17.4741 16.7644 17.4954 16.8581 17.4954C17.087 17.4954 17.3083 17.3691 17.4171 17.149L19.918 12.1472C20.0718 11.8382 19.9468 11.4631 19.6379 11.3081Z"/>
            <path fill={color} d="M25.8903 11.3081C25.5802 11.1568 25.2076 11.2793 25.0512 11.5882L22.5503 16.59C22.3965 16.8989 22.5215 17.274 22.8304 17.4291C22.9217 17.4741 23.0167 17.4954 23.1105 17.4954C23.3394 17.4954 23.5607 17.3691 23.6695 17.149L26.1704 12.1472C26.3242 11.8382 26.1992 11.4631 25.8903 11.3081Z"/>
            <path fill={color} d="M29.3629 16.2449H1.85261C1.50748 16.2449 1.22736 16.525 1.22736 16.8701C1.22736 17.2153 1.50748 17.4954 1.85261 17.4954H29.3629C29.7092 17.4954 29.9881 17.2153 29.9881 16.8701C29.9881 16.525 29.708 16.2449 29.3629 16.2449Z"/>
            <path fill={color} d="M7.8986 10.1514L3.592 5.84478C3.34816 5.60094 2.95175 5.60094 2.7079 5.84478C2.46406 6.08862 2.46406 6.48503 2.7079 6.72887L7.0145 11.0367C7.13707 11.158 7.29709 11.2193 7.45717 11.2193C7.61724 11.2193 7.77727 11.158 7.8986 11.0355C8.14244 10.7916 8.14244 10.3952 7.8986 10.1514Z"/>
            <path fill={color} d="M14.0158 8.76206L9.70553 4.45546C9.46169 4.21162 9.06527 4.21162 8.82143 4.45546C8.57759 4.6993 8.57759 5.09572 8.82143 5.33956L13.1305 9.64616C13.2531 9.76743 13.4131 9.82875 13.5732 9.82875C13.7333 9.82875 13.8933 9.76749 14.0159 9.64616C14.2597 9.40232 14.2597 9.0059 14.0158 8.76206Z"/>
            <path fill={color} d="M20.1282 7.37282L15.8253 3.06499C15.5815 2.82115 15.1851 2.82115 14.9412 3.06499C14.6974 3.30883 14.6974 3.70525 14.9412 3.94909L19.2441 8.25692C19.3667 8.37819 19.5267 8.43951 19.6868 8.43951C19.8468 8.43951 20.0069 8.37948 20.1282 8.25692C20.372 8.01308 20.372 7.61666 20.1282 7.37282Z"/>
            <path fill={color} d="M26.2379 5.98482L21.9338 1.67699C21.69 1.43315 21.2935 1.43315 21.0497 1.67699C20.8059 1.92083 20.8059 2.31725 21.0497 2.56109L25.3538 6.86892C25.4763 6.99019 25.6364 7.05151 25.7964 7.05151C25.9565 7.05151 26.1165 6.99025 26.2379 6.86892C26.4818 6.62508 26.4818 6.22866 26.2379 5.98482Z"/>
        </g>
    </IconStyle>
)

export const PlayIcon = ({ name = "Смотреть трейлер", width = 100, height = 100, arrow = "#F20D01", ring = "#FFF"}) => (
    <IconStyle viewBox="0 0 100 100" fill="none" width={width} height={height}>
        <title>{name}</title>
        <circle cx={width / 2} cy={height / 2} r={width / 2} fill={ring}/>
        <g clipPath="url(#clip0)">
            <path fill={arrow} d="M43.0758 30.0033C39.3071 27.8416 36.2518 29.6125 36.2518 33.9556V66.0059C36.2518 70.3533 39.3071 72.1219 43.0758 69.9623L71.0893 53.8967C74.8592 51.7342 74.8592 48.2306 71.0893 46.0686L43.0758 30.0033Z"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="41.8013" height="41.8013" fill={ring} transform="translate(34.1837 29.0816)"/>
            </clipPath>
        </defs>
    </IconStyle>
)

export const SeatIcon = ({ name = "Кресло", color = "currentColor", opacity = "1", width = 38, height = 30 }) => (
    <IconStyle viewBox="0 0 38 30" fill="none" width={width} height={height} x="0px" y="0px">
        <title>{name}</title>
        <rect x="6" width="26" height="23" rx="5" fill={color} fillOpacity={opacity}/>
        <path stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinejoin="round" d="M1.5 12V22.5C1.66667 24.6667 3.1 29 7.5 29C11.9 29 24.3333 29 30 29C32.3333 28.8333 37 27.1 37 21.5C37 15.9 37 12.8333 37 12"/>
    </IconStyle>
)

export const ScreenLight = ({ name, color = env.colors.screenLightColor, width = 914, height = 67 }) => (
    <IconStyle viewBox="0 0 914 67" fill="none" width={width} height={height}>
        <title>{name}</title>
        <path d="M0 67L73.04 0H840.96L914 67H0Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1={width / 2} y1="0" x2={width / 2} y2={height} gradientUnits="userSpaceOnUse">
                <stop stopColor={color} stopOpacity="0.21"/>
                <stop offset="1" stopColor={color} stopOpacity="0"/>
            </linearGradient>
        </defs>
    </IconStyle>
)

export const MenuIcon = ({ name = "Меню", color = "currentColor", width = 20, height = 17 }) => (
    <IconStyle viewBox="0 0 20 17" fill="none" width={width} height={height}>
        <title>{name}</title>
        <rect width="20" height="2" fill={color}/>
        <rect y="15" width="20" height="2" fill={color}/>
        <rect y="5" width="20" height="2" fill={color}/>
        <rect y="10" width="20" height="2" fill={color}/>
    </IconStyle>
)