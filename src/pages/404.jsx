import * as React from 'react';
import { Link } from 'gatsby';
import s from './styles.module.scss';

export default () => (
    <main className={s.uhOh}>
      <h1>Integer overflow!</h1>
      <svg 
        viewBox="0 0 1261 1261"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12v765.617c0 3.005.63 5.968 1.891 8.701l84.15 185.119c3.563 7.84-2.096 16.862-10.516 18.672C32.426 999.374 0 1037.64 0 1083.47V1249c0 6.63 5.373 12 12 12h1237c6.63 0 12-5.37 12-12v-165.53c0-45.95-32.57-84.287-75.84-93.441-8.4-1.778-14.08-10.738-10.58-18.58l84.59-189.44a20.706 20.706 0 0 0 1.83-8.554V12c0-6.627-5.37-12-12-12H12zm954.767 882.7c-23.182 0-42.034-18.852-42.034-42.033 0-23.182 18.852-42.034 42.034-42.034 23.181 0 42.033 18.852 42.033 42.034 0 23.181-18.852 42.033-42.033 42.033zm21.016 48.329c0-5.465 3.731-10.157 8.838-12.104 31.609-12.053 54.209-42.445 54.209-78.258 0-46.363-37.7-84.067-84.063-84.067S882.7 794.304 882.7 840.667c0 35.813 22.603 66.205 54.213 78.258 5.106 1.947 8.837 6.639 8.837 12.104v44.754c0 6.628-5.373 12-12 12H894.7c-6.627 0-12-5.372-12-12V945.75c0-11.622-9.394-21.017-21.017-21.017H756.6c-11.622 0-21.017 9.395-21.017 21.017v30.033c0 6.628-5.372 12-12 12H537.417c-6.628 0-12-5.372-12-12V945.75c0-11.622-9.395-21.017-21.017-21.017H399.317c-11.623 0-21.017 9.395-21.017 21.017v30.033c0 6.628-5.373 12-12 12h-39.05c-6.627 0-12-5.372-12-12v-44.754c0-5.465 3.731-10.157 8.837-12.104 31.61-12.053 54.213-42.445 54.213-78.258 0-46.363-37.704-84.067-84.067-84.067-46.362 0-84.066 37.704-84.066 84.067 0 35.813 22.603 66.205 54.212 78.258 5.107 1.947 8.838 6.639 8.838 12.104v44.754c0 6.628-5.373 12-12 12h-97.905c-7.195 0-12.772-6.286-11.915-13.429l58.623-488.575c.105-.819.147-1.66.147-2.501 0-13.492 4.371-25.955 11.622-36.211 2.627-3.72 5.695-7.041 8.974-10.046.883-.799 1.828-1.514 2.753-2.27a64.184 64.184 0 0 1 8.68-5.969c1.135-.651 2.291-1.303 3.468-1.891 3.173-1.556 6.473-2.754 9.878-3.762 1.156-.337 2.269-.799 3.446-1.072 4.603-1.072 9.311-1.724 14.124-1.724h714.776c4.813 0 9.521.652 14.122 1.745 1.18.273 2.29.735 3.45 1.072 3.38 1.008 6.7 2.206 9.88 3.762 1.19.588 2.33 1.24 3.46 1.891a62.028 62.028 0 0 1 8.68 5.969c.93.756 1.87 1.471 2.76 2.27 3.28 3.026 6.34 6.326 8.97 10.046 7.25 10.235 11.62 22.698 11.62 36.19 0 .841.05 1.682.15 2.501l58.62 488.575c.86 7.143-4.72 13.429-11.91 13.429h-97.907c-6.627 0-12-5.372-12-12v-44.754zm-147.116 46.246c0 5.804-4.705 10.508-10.509 10.508h-42.033c-5.804 0-10.508-4.704-10.508-10.508 0-5.804 4.704-10.508 10.508-10.508h42.033c5.804 0 10.509 4.704 10.509 10.508zm-357.284 0c0 5.804-4.704 10.508-10.508 10.508h-42.033c-5.804 0-10.509-4.704-10.509-10.508 0-5.804 4.705-10.508 10.509-10.508h42.033c5.804 0 10.508 4.704 10.508 10.508zM294.233 882.7c-23.181 0-42.033-18.852-42.033-42.033 0-23.182 18.852-42.034 42.033-42.034 23.182 0 42.034 18.852 42.034 42.034 0 23.181-18.852 42.033-42.034 42.033zM1064.1 400.854c-3.16 2.792-8.16 3.057-11.46.438-2.71-2.143-5.34-4.371-8.28-6.263-2.65-1.702-5.49-3.005-8.28-4.455-3.03-1.577-5.97-3.3-9.16-4.603-3.3-1.324-6.79-2.165-10.24-3.152-2.9-.841-5.69-1.913-8.7-2.501-6.56-1.282-13.282-2.018-20.092-2.018H273.112c-6.81 0-13.535.736-20.113 2.018-3.006.588-5.78 1.66-8.68 2.501-3.447.987-6.936 1.828-10.235 3.152-3.195 1.282-6.137 3.005-9.164 4.582-2.795 1.45-5.632 2.774-8.301 4.476-2.922 1.871-5.549 4.099-8.26 6.242-3.326 2.611-8.325 2.353-11.49-.449l-96.688-85.604c-8.27-7.322-3.09-20.985 7.955-20.985H1152.88c11.05 0 16.23 13.664 7.96 20.986l-96.74 85.635zM42.033 54.034c0-6.628 5.373-12 12-12H1206.97c6.62 0 12 5.372 12 12V240.2c0 6.627-5.38 12-12 12H54.033c-6.627 0-12-5.373-12-12V54.033zm0 292.512c0-10.343 12.21-15.841 19.955-8.985l109.028 96.525c3.945 3.493 5.085 9.129 3.299 14.086-3.815 10.588-6.032 21.922-6.182 33.782l-48.864 407.263c-1.446 12.05-17.819 14.584-22.84 3.535l-53.32-117.33a12 12 0 0 1-1.076-4.965V346.546zM1218.97 1083.47v123.5c0 6.62-5.38 12-12 12H54.033c-6.627 0-12-5.38-12-12v-123.5c0-29.57 24.085-53.65 53.656-53.65H1165.31c29.57 0 53.66 24.08 53.66 53.65zm-54.56-192.307c-4.96 11.12-21.42 8.628-22.87-3.463l-48.67-405.746c-.15-11.855-2.37-23.184-6.18-33.757-1.79-4.96-.65-10.599 3.3-14.093l109.02-96.539c7.75-6.857 19.96-1.36 19.96 8.984v419.873c0 1.685-.36 3.352-1.05 4.892l-53.51 119.849z" fill="#000"/>
        <path d="M1143.92 1050.83h-18.04c-6.62 0-12 5.38-12 12v123.12c0 6.63 5.38 12 12 12h18.04c6.62 0 12-5.37 12-12v-123.12c0-6.62-5.38-12-12-12zM998.292 1050.83c-40.562 0-73.558 33-73.558 73.56s32.996 73.56 73.558 73.56c40.558 0 73.558-33 73.558-73.56s-33-73.56-73.558-73.56zm0 105.09c-17.381 0-31.525-14.15-31.525-31.53 0-17.38 14.144-31.52 31.525-31.52 17.378 0 31.528 14.14 31.528 31.52s-14.15 31.53-31.528 31.53zM135.117 1050.83h-18.034c-6.627 0-12 5.38-12 12v123.12c0 6.63 5.373 12 12 12h18.034c6.627 0 12-5.37 12-12v-123.12c0-6.62-5.373-12-12-12zM262.708 1050.83c-40.562 0-73.558 33-73.558 73.56s32.996 73.56 73.558 73.56c40.563 0 73.559-33 73.559-73.56s-32.996-73.56-73.559-73.56zm0 105.09c-17.38 0-31.525-14.15-31.525-31.53 0-17.38 14.145-31.52 31.525-31.52 17.381 0 31.525 14.14 31.525 31.52s-14.144 31.53-31.525 31.53zM210.167 126.1h-9.017c-6.627 0-12-5.373-12-12V84.067c0-11.623-9.394-21.017-21.017-21.017-11.622 0-21.016 9.394-21.016 21.017v31.524c0 5.804-4.705 10.509-10.509 10.509-5.803 0-10.508-4.705-10.508-10.509v-10.508c0-11.622-9.394-21.016-21.017-21.016-11.622 0-21.016 9.394-21.016 21.016v84.067c0 11.622 9.394 21.016 21.016 21.016 11.623 0 21.017-9.394 21.017-21.016v-10.509c0-5.803 4.705-10.508 10.508-10.508 5.804 0 10.509 4.705 10.509 10.508v31.525c0 11.623 9.394 21.017 21.016 21.017 11.623 0 21.017-9.394 21.017-21.017v-30.033c0-6.627 5.373-12 12-12h9.017c11.622 0 21.016-9.394 21.016-21.017 0-11.622-9.394-21.016-21.016-21.016zM300.328 132.194c-3.804 3.972-6.095 9.226-6.095 14.922 0 5.464 2.291 10.928 6.095 14.922 3.972 3.783 9.458 6.094 14.922 6.094s10.929-2.311 14.922-6.094c3.783-3.994 6.095-9.458 6.095-14.922 0-5.465-2.312-10.95-6.095-14.922-7.986-7.776-21.857-7.776-29.844 0zM399.317 168.133c11.607 0 21.016-9.41 21.016-21.017s-9.409-21.017-21.016-21.017c-11.607 0-21.017 9.41-21.017 21.017s9.41 21.017 21.017 21.017zM567.45 168.133c11.607 0 21.017-9.41 21.017-21.017s-9.41-21.017-21.017-21.017-21.017 9.41-21.017 21.017 9.41 21.017 21.017 21.017zM483.383 168.133c11.608 0 21.017-9.41 21.017-21.017s-9.409-21.017-21.017-21.017c-11.607 0-21.016 9.41-21.016 21.017s9.409 21.017 21.016 21.017zM636.595 132.194c-3.804 3.972-6.095 9.226-6.095 14.922 0 5.464 2.291 10.928 6.095 14.922 3.972 3.783 9.457 6.094 14.922 6.094 5.464 0 10.928-2.311 14.921-6.094 3.783-3.994 6.095-9.458 6.095-14.922 0-5.465-2.312-10.95-6.095-14.922-7.776-7.776-21.857-7.776-29.843 0zM1113.88 63.05c-46.36 0-84.06 37.704-84.06 84.066 0 46.363 37.7 84.067 84.06 84.067 46.37 0 84.07-37.704 84.07-84.067 0-46.362-37.7-84.066-84.07-84.066zm0 126.1c-23.18 0-42.03-18.852-42.03-42.034 0-23.181 18.85-42.033 42.03-42.033s42.04 18.852 42.04 42.033c0 23.182-18.86 42.034-42.04 42.034z" fill="#000"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M320.039 604.594c.258-1.351.496-2.621.718-3.838l79.85 3.714c1.366 3.461 2.049 7.615 2.049 11.94 0 2.832-.293 5.664-.879 8.496-4.394 21.875-17.871 34.18-35.644 37.11 2.371 5.444 5.472 11.421 8.549 16.937l-24.169 1.089c-2.968-6.666-5.461-12.686-6.841-16.269-3.418-.293-6.934-.976-10.938-2.734l-3.866 19.977-23.899 1.077 4.278-22.024.001-.004v-.002c3.589-18.482 7.178-36.963 10.791-55.469zm-61.528 79.591c-3.222-2.093-6.567-4.154-9.828-6.163-6.501-4.005-12.662-7.801-16.828-11.221 17.872-12.012 44.825-29.785 62.207-38.086l-8.789-20.215c-3.077.915-5.234 2.042-7.797 3.382v.001h-.001c-.446.233-.904.473-1.381.719-14.453 7.519-49.219 29.687-66.992 42.285-.684 3.661-1.367 7.347-2.051 11.033v.002c-.684 3.686-1.367 7.373-2.051 11.035.563.441 3.208 2.165 6.977 4.622h.001c1.979 1.291 4.269 2.783 6.73 4.398l39.803-1.792zM1046.9 648.68a615.703 615.703 0 0 0-17.17-14.948l-40.491-1.884c7.414 5.02 15.561 11.655 23.331 18.378l34.33-1.546zm-117.216 5.279a9895.29 9895.29 0 0 0 14.881-24.189l-24.166-1.124a6138.468 6138.468 0 0 1-16.301 26.465l25.586-1.152zm-119.949 5.402c.178-.906.357-1.811.538-2.716h-12.402c2.179-11.132 4.335-22.264 6.49-33.396l-43.349-2.016c-13.081 13.648-27.426 26.538-35.605 33.887l-.001.001h-.001c-3.357 3.017-5.675 5.1-6.44 5.918l.793 2.374 89.977-4.052zm-110.175 4.961a193.857 193.857 0 0 0 2.999-13.244c1.66-8.789 2.832-17.676 2.832-25.976 0-2.207-.08-4.368-.249-6.468l-25.472-1.184c.144 1.024.282 2.14.428 3.355a13652.322 13652.322 0 0 1-17.432 18.994 13106.229 13106.229 0 0 0-17.432 18.994s.391-2.637.782-4.883c2.153-11.592 5.828-27.623 12.249-37.456l-24.499-1.139c-6.308 11.895-10.257 26.205-12.946 40.06-.836 4.275-1.518 8.483-2.002 12.584l40.232-1.812 2.102-2.276 17.774-19.238s-.293 2.051-.781 4.785c-1.005 5.366-2.101 10.818-3.386 16.021l24.801-1.117zm-98.68 4.444l.36-1.868.001-.001c.659-3.418 1.318-6.835 2.001-10.252H590.84c2.246-11.475 4.468-22.95 6.689-34.424l.117-.605 1.532-7.91-36.68-1.706c-14.861 16.827-34.112 34.124-44.123 43.12v.001h-.001c-3.357 3.017-5.675 5.1-6.44 5.918.927 2.783 1.855 5.541 2.782 8.3l.001.001 1.095 3.257 85.068-3.831zm-119.08 5.363c-6.912-13.012-14.464-25.509-18.988-31.059.562-.561 1.222-1.226 1.97-1.979l.002-.002c6.645-6.692 20.29-20.436 34.587-32.025l-32.149-1.496c-9.558 8.477-18.923 17.134-24.136 22.905 1.465-7.569 2.93-15.113 4.394-22.657l.225-1.156-24.979-1.161a130850.67 130850.67 0 0 0-8.722 44.987l-.02.104v.002l-.002.01-5.196 26.815 25.468-1.147.726-3.707c4.297-7.032 10.938-13.086 10.938-13.086 3.003 3.689 6.501 9.364 10.004 15.818l25.878-1.166zm-128.851-29.496c16.602 0 20.899-7.617 22.852-17.578.39-2.051.586-3.809.586-5.469 0-12.207-10.059-15.82-26.758-15.82-2.539 0-3.32 0-6.152.097a22693.55 22693.55 0 0 0-3.37 17.334c-1.123 5.786-2.246 11.573-3.369 17.334 5.762 2.637 11.231 4.102 15.43 4.102h.781zm200.293 12.109c4.175-.024 8.35-.049 12.5-.097 1.026-5.274 2.051-10.572 3.076-15.87 1.026-5.297 2.051-10.595 3.077-15.869-9.571 12.598-21.485 23.438-31.153 31.934 4.151-.049 8.325-.073 12.5-.098zm207.031 0c4.175-.024 8.35-.049 12.5-.097 1.026-5.274 2.051-10.572 3.077-15.87 1.025-5.297 2.05-10.595 3.076-15.869-9.571 12.598-21.485 23.438-31.153 31.934 4.151-.049 8.326-.073 12.5-.098zM223.708 685.978c11.548 7.577 26.877 17.855 31.702 22.62 4.004 3.711 8.106 8.203 9.766 11.718 2.978-3.076 5.932-6.176 8.886-9.277 2.955-3.101 5.909-6.201 8.887-9.277-2.621-5.804-10.559-11.81-19.437-17.577l-39.804 1.793zm86.261-3.885a40784.648 40784.648 0 0 1-6.512 33.438h23.73l6.681-34.514-23.899 1.076zm45.544-2.051c4.798 10.78 10.838 23.248 15.424 29.825 2.54 4.199 7.422 9.082 12.891 9.961 2.49-3.076 5.005-6.128 7.52-9.18 2.514-3.051 5.029-6.103 7.519-9.179-3.906-1.074-7.91-4.59-9.375-6.153-2.311-3.547-6.043-9.609-9.81-16.363l-24.169 1.089zm58.273-2.625a54304.354 54304.354 0 0 1-7.497 38.603h25.195c1.416-7.227 2.832-14.478 4.248-21.729 1.174-6.011 2.348-12.023 3.522-18.02l-25.468 1.146zm47.136-2.122c8.459 15.58 16.952 35.696 18.609 43.361 3.809-1.416 7.617-2.807 11.426-4.199s7.617-2.783 11.426-4.199c-1.225-7.041-8.021-21.893-15.583-36.129l-25.878 1.166zm59.89-2.697c.562 1.675 1.125 3.354 1.688 5.043 7.373-.049 14.746-.074 22.119-.098 7.373-.024 14.746-.049 22.119-.098-1.22 6.348-2.466 12.696-3.711 19.043-1.245 6.348-2.49 12.696-3.711 19.043h25.098a5403.712 5403.712 0 0 1 3.711-19.189c1.245-6.397 2.49-12.793 3.711-19.19h12.402c.559-2.795 1.102-5.59 1.642-8.385l-85.068 3.831zm103.005-4.639c-.534 4.517-.829 8.902-.829 13.1 0 20.703 7.617 36.132 31.934 36.132 28.256 0 42.391-25.563 49.638-52.868l-24.801 1.116c-4.21 17.051-10.454 31.44-22.2 31.44-6.641 0-8.399-4.492-9.18-13.77l15.67-16.962-40.232 1.812zm100.941-4.546c.663 1.982 1.327 3.954 1.99 5.927a3215.19 3215.19 0 0 1 2.783 8.301c7.373-.049 14.746-.074 22.119-.098 7.373-.024 14.746-.049 22.119-.098a5073.49 5073.49 0 0 1-3.71 19.043 4953.646 4953.646 0 0 0-3.711 19.043h25.097a5403.712 5403.712 0 0 1 3.711-19.189c1.245-6.397 2.49-12.793 3.711-19.19h12.402c.684-3.418 1.343-6.836 2.002-10.254.485-2.512.97-5.025 1.464-7.537l-89.977 4.052zm184.34-8.302c-16.557 26.732-32.292 51.701-40.46 64.131 3.125 1.807 6.275 3.613 9.424 5.42 3.15 1.807 6.299 3.613 9.424 5.42 2.091-3.37 4.735-7.624 7.801-12.558l.001-.001c10.092-16.24 24.765-39.851 39.396-63.564l-25.586 1.152zm108.472-4.885c5.95 5.149 11.68 10.349 16.69 14.915-5.67 3.517-13.62 7.333-21.96 11.336-15.05 7.222-31.366 15.053-37.9 22.843 2.1 3.467 4.224 6.909 6.348 10.352 2.124 3.442 4.248 6.885 6.347 10.351 3.028-3.515 8.887-8.007 14.255-11.718 7.87-5.648 33.63-19.04 47.98-26.501 5.25-2.732 8.98-4.669 9.74-5.14.29-3.271.61-6.519.93-9.766.31-3.247.63-6.494.92-9.765-2.56-2.503-5.64-5.384-9.02-8.453l-34.33 1.546zM1034.73 633.73l-40.493-1.883a103.545 103.545 0 0 0-5.384-3.425c2.344-2.93 4.663-5.884 6.983-8.838 2.319-2.954 4.634-5.908 6.984-8.838 2.55.85 4.12 1.883 5.97 3.099.49.321 1 .656 1.55 1.003 5.72 3.704 14.96 10.963 24.39 18.882zm-629.124-29.262l-79.848-3.714c.869-4.765 1.491-8.72 2.113-13.543l.248-.023c4.385-.408 15.491-1.442 21.334-1.442 24.414 0 45.703.781 54.688 15.723a20.357 20.357 0 0 1 1.465 2.999zm198.573 9.236l-36.679-1.706c7.506-8.498 13.892-16.877 17.402-24.006 4.053-.049 8.106-.073 12.159-.097 4.052-.025 8.105-.049 12.158-.098-1.691 8.636-3.367 17.272-5.04 25.907zm105.963 4.929c-1.432-17.79-9.293-31.227-29.732-31.227-20.098 0-33.056 11.716-41.643 27.907l24.499 1.14c3.477-5.325 7.76-8.832 13.043-8.832 6.07 0 7.35 2.62 8.361 9.827l25.472 1.185zm99.22 4.615l-43.349-2.016c11.018-11.495 21.138-23.528 25.921-33.24 4.052-.049 8.105-.073 12.158-.097 4.053-.025 8.105-.049 12.158-.098a16574.585 16574.585 0 0 0-6.888 35.451zm-304.99-14.186l-32.149-1.495c12.81-11.362 25.966-22.4 29.939-25.733l.056-.047.751-.631 15.82 17.285c-4.718 3.062-9.604 6.72-14.417 10.621zm-51.667-2.403l-24.978-1.162c1.316-6.777 2.633-13.556 3.953-20.337h25.195c-1.39 7.181-2.78 14.341-4.17 21.499zm496.861 23.11l-24.166-1.124c13.89-22.681 26.779-44.09 34.547-57.645l18.75 10.547c-6.771 11.57-17.381 29.059-29.131 48.222z" fill="#000"/>
      </svg>
      <Link to="/">Press here to restart</Link>
    </main>
);
