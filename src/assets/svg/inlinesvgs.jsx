import React from 'react';

// Use the set like so. First import the set into your file:
// import { svg } from '../../assets/svg/inlinesvgs';
//
// Then assign a new SVG by calling the svg function like so:
// let newIcon = svg({
// 	className: 'svgIcon',
// 	fill: '#FFF',
// 	size: 20,
// 	icon: 'facebook',
// });

let iconCollection = {
	tick: [
		{
			path: 'm.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z',
			viewbox: '0 0 26 26'
		}
	],
	magnifyingGlass: [
		{
			path: 'M1024 64l-201.87 201.87c46.582 70.66 73.87 155.168 73.87 246.13 0 247.424-200.576 448-448 448s-448-200.576-448-448 200.576-448 448-448c90.962 0 175.47 27.288 246.13 73.87l201.87-201.87 128 128zM128 512c0 176.45 143.55 320 320 320s320-143.55 320-320c0-176.448-143.55-320-320-320s-320 143.552-320 320z',
			viewbox: '0 -100 1100 1100'
		}
	],
	cross: [
		{
			path: 'M26.2,21,42,36.8,36.8,42,21,26.2,5.2,42,0,36.8,15.8,21,0,5.2,5.2,0,21,15.8,36.8,0,42,5.2Z',
			viewbox: '0 0 43 40'
		}
	],
	burger: [
		{
			path: 'M966.338 1.968h-909.426c-31.636 0-57.286 28.656-57.286 64s25.65 64 57.286 64h909.426c31.636 0 57.286-28.656 57.286-64s-25.65-64-57.286-64zM966.338 767.282h-909.426c-31.636 0-57.286 28.656-57.286 64s25.65 64 57.286 64h909.426c31.636 0 57.286-28.656 57.286-64s-25.65-64-57.286-64zM966.338 384.652h-909.426c-31.636 0-57.286 28.656-57.286 64s25.65 64 57.286 64h909.426c31.636 0 57.286-28.656 57.286-64s-25.65-64-57.286-64z',
			viewbox: '0 0 1000 1000'
		}
	],
	arrow: [
		{
			path: 'M21,26.69,0,5.3,5.2,0,21,16.08,36.8,0,42,5.3Z',
			viewbox: '0 0 40 40'
		}
	],
	wheel: [
		{
			path: 'M511.83 959.596c-282.77 0-512-229.23-512-512s229.23-512 512-512 512 229.23 512 512-229.23 512-512 512zM511.83 831.596c189.826 0 347.504-138.592 378.192-319.816-29.51-0.462-160.786 13.864-247.708 47.804-37.136 29.602-85.742 48.012-130.482 48.012-44.742 0-93.352-18.412-130.488-48.016-86.924-33.938-218.196-48.264-247.704-47.8 30.686 181.224 188.364 319.816 378.19 319.816zM133.38 383.596h186.45c59.312 0 76.788-63.946 76.798-63.992l50.008-250.044c-159.91 27.518-286.228 154.022-313.256 314.036zM415.83 447.596c0 53.022 42.982 96 96 96 53.020 0 96-42.978 96-96 0-53.018-42.98-96-96-96-53.018 0-96 42.982-96 96zM577.024 69.558l50.008 250.044c0.012 0.046 17.486 63.992 76.798 63.992h186.45c-27.028-160.012-153.346-286.516-313.256-314.036z',
			viewbox: '0 -100 1100 1100'
		}
	],
	ebrochure: [
		{
			path: 'M832 128v256h-128v-256h-127.954l192.142-192.14 192.14 192.14zM256 768h384v-64h-384v64zM256 640h384v-64h-384v64zM256 512h384v-66h-384v66zM256 384h384v-64h-384v64zM192 832h512v-320h128v448h-768v-960h448v128h-320zM256 256h384v-64h-384v64z',
			viewbox: '-100 -100 1100 1100'
		}
	],
	mapPin: [
		{
			path: 'M512 960c-194.404 0-384-128-384-352s384-672 384-672 384 448 384 672-189.596 352-384 352zM512 512c-53.020 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96z',
			viewbox: '-100 -100 1100 1100'
		}
	],
	phone: [
		{
			path: 'M765.746 333.426l-46.040-46.040 245.544-245.544 46.040 46.040c16.952 16.952 16.95 44.436 0 61.386l-184.158 184.158c-16.952 16.952-44.434 16.952-61.386 0zM689.014 256.694l-59.322-59.322c-66.556 43.866-134.68 99.86-201.568 166.748s-122.88 135.012-166.746 201.568l59.322 59.322-245.546 245.544-15.346-15.346c-135.61-135.61-30.692-399.008 214.85-644.552s508.942-350.462 644.552-214.852l15.346 15.346-245.542 245.544zM151.886 947.286l-46.040-46.040 245.544-245.544 46.040 46.040c16.952 16.952 16.95 44.436 0 61.386l-184.158 184.158c-16.952 16.952-44.434 16.952-61.386 0z',
			viewbox: '-100 -100 1100 1100'
		}
	],
	car: [
		{
			path: 'M396 538.73h40v-40h-40v40zM140 538.73l40-20-40-20zM920 519.3l-24 15.43v-36l24 15.428v-15.428l28 18-28 18zM948 534v-36h8v36zM652 538h16v-40h-16v40zM676 538h16v-40h-16v40zM1024 704h-64v-64.156l-69.944 256.156h-768l-58.056-256.156v64.156h-64v-128h42.056l-13.028-64.078-29.028-192.078v-383.844h192v128h640v-128h192v383.844l-34.972 192.078-18.972 64.078h53.944v128zM186.056 832h639.962l64.038-256h-768l64 256zM246.75 255.612c-24.64-21.912-144.202 1.536-168.844 23.448-24.64 21.912-24.64 57.44 0 79.352 24.642 21.912 64.594 21.912 89.236 0 24.642-21.914 104.252-80.888 79.608-102.8zM692.596 224h-378.54c-57 64-32 128-32 128h442.54c0 0 25-64-32-128zM936.946 279.060c-24.642-21.912-144.204-45.36-168.844-23.448-24.642 21.912 54.964 80.886 79.608 102.798s64.594 21.912 89.236 0c24.64-21.912 24.64-57.438 0-79.35z',
			viewbox: '-100 -100 1100 1100'
		}
	],
	facebook: [
		{
			path: 'M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0',
			viewbox: '0 0 16 16'
		}
	],
	twitter: [
		{
			path: 'M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z',
			viewbox: '0 0 16 16'
		}
	],
	youtube: [
		{
			path: 'M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003',
			viewbox: '0 0 20 20'
		}
	],
	instagram: [
		{
			path: 'M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z',
			viewbox: '0 0 16 16'
		}
	],
	googleplus: [
		{
			path: 'M5.09 7.273v1.745h2.89c-.116.75-.873 2.197-2.887 2.197-1.737 0-3.155-1.44-3.155-3.215S3.353 4.785 5.09 4.785c.99 0 1.652.422 2.03.786l1.382-1.33c-.887-.83-2.037-1.33-3.41-1.33C2.275 2.91 0 5.19 0 8s2.276 5.09 5.09 5.09c2.94 0 4.888-2.065 4.888-4.974 0-.334-.036-.59-.08-.843H5.09zm10.91 0h-1.455V5.818H13.09v1.455h-1.454v1.454h1.455v1.455h1.46V8.727H16',
			viewbox: '0 0 16 16'
		}
	],
	linkedin: [
		{
			path: 'M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z',
			viewbox: '0 0 16 16'
		}
	],
	fullscreen: [
		{
			path: 'M407.42,159.029c3.62,3.616,7.898,5.428,12.847,5.428c2.282,0,4.668-0.476,7.139-1.429   c7.426-3.235,11.136-8.853,11.136-16.846V18.276c0-4.949-1.807-9.231-5.428-12.847c-3.61-3.617-7.898-5.424-12.847-5.424H292.36   c-7.991,0-13.607,3.805-16.848,11.419c-3.23,7.423-1.902,13.99,4,19.698l41.111,41.112L219.271,173.589L117.917,72.231   l41.112-41.112c5.901-5.708,7.232-12.275,3.999-19.698C159.789,3.807,154.175,0,146.182,0H18.276C13.324,0,9.041,1.809,5.425,5.426   c-3.617,3.616-5.424,7.898-5.424,12.847v127.907c0,7.996,3.809,13.61,11.419,16.846c2.285,0.948,4.57,1.429,6.855,1.429   c4.948,0,9.229-1.812,12.847-5.427l41.112-41.109l101.354,101.354L72.234,320.622l-41.112-41.113   c-5.711-5.903-12.275-7.231-19.702-4.001c-7.614,3.241-11.419,8.856-11.419,16.854v127.906c0,4.948,1.807,9.229,5.424,12.847   c3.619,3.614,7.902,5.421,12.851,5.421h127.906c7.996,0,13.61-3.806,16.846-11.416c3.234-7.427,1.903-13.99-3.999-19.705   l-41.112-41.106L219.271,264.95l101.353,101.361l-41.114,41.11c-5.899,5.708-7.228,12.279-3.997,19.698   c3.237,7.617,8.856,11.423,16.851,11.423h127.907c4.948,0,9.232-1.813,12.847-5.428c3.613-3.613,5.42-7.898,5.42-12.847V292.362   c0-7.994-3.709-13.613-11.136-16.851c-7.802-3.23-14.462-1.903-19.985,4.004l-41.106,41.106L264.952,219.271L366.31,117.917   L407.42,159.029z',
			viewbox: '0 0 438.543 438.543'
		}
	]
}

const svg = ({styles = 'styles', className = '', fill = '#FFF', size = 20, icon = 'arrow', rotate = 0}) => {
	return (
		<svg className={`${styles[className]}`} style={{transform: `rotate(${rotate}deg)`}}
		     xmlns="http://www.w3.org/2000/svg" fill={fill} width={size} height={size} viewBox={iconCollection[icon][0].viewbox}><title
			id="title">Umbrella Icon</title>
			<path d={iconCollection[icon][0].path}/>
		</svg>
	)
}

export { svg }