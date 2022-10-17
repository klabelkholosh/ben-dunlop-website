/* React Components */
import React, { Component } from 'react';

export class DefaultSvg extends Component  {

	constructor(props) {
	  super(props);
	  this.state = { width: 0, height: 0 };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		const { viewboxx, viewboxy, viewboxwidth, viewboxheight, onSelect, spinefill } = this.props;
		const { width, height } = this.state;

		return (
		<div>
		{width > 768 &&
			<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={viewboxx + " " + viewboxy + " " + viewboxwidth + " " + viewboxheight}  preserveAspectRatio="xMidYMid slice" className='bookcase_scene--initial'>
    				{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff' >
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase' >
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>

				{/* <g id='wallLinesAndWindow' className={removeLines}> */}
				    <g id='wallLinesAndWindow' >
					    <polyline points='688.5 570 628.5 535.5 -719.5 1314.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <line x1='1990' y1='1314' x2='989.5' y2='744.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='447.5 384.5 447.5 523.5 287.5 616.5 287.5 476.5 447.5 384.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='447.5 523.5 427.5 511.5 287.5 593.33' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <line x1='427.5' y1='396' x2='427.5' y2='511.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <line x1='612' y1='-1021.6' x2='628.12' y2='535.21' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				    <g id='PotPlant' onClick={() => onSelect('default')}>
				        <path d='M863.29,385.74l-3,35.33,0,0-19.67,12.46a0,0,0,0,1-.07,0l-19.22-13.46a.05.05,0,0,1,0,0l-5.32-43,.46-.07a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87Z'
				        fill='#fff' />
				        <g fill='none' stroke='#000' strokeMiterlimit='10'>
				            <path d='M816.46,377a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87,12.19,12.19,0,0,0-3.06-17.08l-13.44-9.25a12.19,12.19,0,0,0-12.59-.74l-11.25,5.92A12.14,12.14,0,0,0,816.46,377Z'
				            />
				            <path d='M839.78,359.19a10,10,0,0,1,5.75,1.78l13.23,9.1a10.53,10.53,0,0,1,4.66,9.63,10.05,10.05,0,0,1-5.55,8L847,393.15a10.19,10.19,0,0,1-4.53,1.07,10.07,10.07,0,0,1-2.68-.36,10.45,10.45,0,0,1-2.7-1.18l-13.77-8.61a10.44,10.44,0,0,1-5-8.78,10,10,0,0,1,5.41-9l11.45-6a7.76,7.76,0,0,1,1.45-.63A10.8,10.8,0,0,1,839.78,359.19Z'
				            />
				            <polyline points='839.78 359.18 839.78 359.19 839.78 393.86 839.78 394.22'
				            />
				            <path d='M816,377.1l5.32,43a.05.05,0,0,0,0,0l19.22,13.46a0,0,0,0,0,.07,0l19.67-12.46,0,0,3-35.33'
				            />
				        </g>
				        <path d='M833.23,389.83a22.69,22.69,0,0,1,5.28-9.44c3.57-3.84,9.33-7.07,11.28-5.51a2.45,2.45,0,0,1,.7,2.27c-.52,2.69-2.1-5.2-11.34,5.06a16.5,16.5,0,0,0-3.79,9.31'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M834.8,391.13c1.72-1.69,2.8-7.54,2-12.69s-3.84-11.05-6.33-10.83a2.4,2.4,0,0,0-1.83,1.5c-1.07,2.52,4.62-3.17,6.62,10.5.56,3.82-1,8.53-2.23,10.16'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M884.57,358.05c22.53,10.44,25.14,28.4,25.14,28.4s-12.49-1.4-38.45.34c-24.78,1.67-37.82-25.33-34.14-33.27S862,347.62,884.57,358.05Z'
				        fill='#fff' />
				        <path d='M871.26,386.79c-24.78,1.67-37.82-25.33-34.14-33.27s24.92-5.9,47.45,4.53,25.14,28.4,25.14,28.4S897.22,385.05,871.26,386.79Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M814.14,377.26c24.78-1.71,34-30.22,29.33-37.59s-25.5-2.48-46.41,10.91S776,382.12,776,382.12,788.18,379.05,814.14,377.26Z'
				        fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <line x1='830.54' y1='388.59' x2='836.6' y2='392.37' fill='none' stroke='#000'
				        strokeMiterlimit='10' />
			    	</g>

				</svg>
			}
			{width <= 768 &&
			<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={(viewboxx + 600) + " " + (viewboxy + 250) + " " + (viewboxwidth - 800)  + " " + (viewboxheight - 350)}  preserveAspectRatio="xMidYMid slice" className='bookcase_scene--initial'>
    				{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff' >
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase' >
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				    <g id='PotPlant' onClick={() => onSelect('default')}>
				        <path d='M863.29,385.74l-3,35.33,0,0-19.67,12.46a0,0,0,0,1-.07,0l-19.22-13.46a.05.05,0,0,1,0,0l-5.32-43,.46-.07a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87Z'
				        fill='#fff' />
				        <g fill='none' stroke='#000' strokeMiterlimit='10'>
				            <path d='M816.46,377a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87,12.19,12.19,0,0,0-3.06-17.08l-13.44-9.25a12.19,12.19,0,0,0-12.59-.74l-11.25,5.92A12.14,12.14,0,0,0,816.46,377Z'
				            />
				            <path d='M839.78,359.19a10,10,0,0,1,5.75,1.78l13.23,9.1a10.53,10.53,0,0,1,4.66,9.63,10.05,10.05,0,0,1-5.55,8L847,393.15a10.19,10.19,0,0,1-4.53,1.07,10.07,10.07,0,0,1-2.68-.36,10.45,10.45,0,0,1-2.7-1.18l-13.77-8.61a10.44,10.44,0,0,1-5-8.78,10,10,0,0,1,5.41-9l11.45-6a7.76,7.76,0,0,1,1.45-.63A10.8,10.8,0,0,1,839.78,359.19Z'
				            />
				            <polyline points='839.78 359.18 839.78 359.19 839.78 393.86 839.78 394.22'
				            />
				            <path d='M816,377.1l5.32,43a.05.05,0,0,0,0,0l19.22,13.46a0,0,0,0,0,.07,0l19.67-12.46,0,0,3-35.33'
				            />
				        </g>
				        <path d='M833.23,389.83a22.69,22.69,0,0,1,5.28-9.44c3.57-3.84,9.33-7.07,11.28-5.51a2.45,2.45,0,0,1,.7,2.27c-.52,2.69-2.1-5.2-11.34,5.06a16.5,16.5,0,0,0-3.79,9.31'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M834.8,391.13c1.72-1.69,2.8-7.54,2-12.69s-3.84-11.05-6.33-10.83a2.4,2.4,0,0,0-1.83,1.5c-1.07,2.52,4.62-3.17,6.62,10.5.56,3.82-1,8.53-2.23,10.16'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M884.57,358.05c22.53,10.44,25.14,28.4,25.14,28.4s-12.49-1.4-38.45.34c-24.78,1.67-37.82-25.33-34.14-33.27S862,347.62,884.57,358.05Z'
				        fill='#fff' />
				        <path d='M871.26,386.79c-24.78,1.67-37.82-25.33-34.14-33.27s24.92-5.9,47.45,4.53,25.14,28.4,25.14,28.4S897.22,385.05,871.26,386.79Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M814.14,377.26c24.78-1.71,34-30.22,29.33-37.59s-25.5-2.48-46.41,10.91S776,382.12,776,382.12,788.18,379.05,814.14,377.26Z'
				        fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <line x1='830.54' y1='388.59' x2='836.6' y2='392.37' fill='none' stroke='#000'
				        strokeMiterlimit='10' />
			    	</g>

				</svg>
			}
			</div>
		)
	}
}

export class BlueBookSvg extends Component  {
	constructor(props) {
	  super(props);
	  this.state = { width: 0, height: 0 };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		const {viewboxx, viewboxy, viewboxwidth, viewboxheight, onSelect, spinefill} = this.props;
		const { width, height } = this.state;

		return (
		<div>
		{width > 768 &&
			<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={viewboxx + " " + viewboxy + " " + viewboxwidth + " " + viewboxheight}  preserveAspectRatio="xMidYMid" className='bookcase_scene'>
    				{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff'>
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase'>
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>

				{/* <g id='wallLinesAndWindow' className={removeLines}> */}
				    <g id='wallLinesAndWindow'>
					    <polyline points='688.5 570 628.5 535.5 -719.5 1314.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2'  />
					    <line x1='1990' y1='1314' x2='989.5' y2='744.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='447.5 384.5 447.5 523.5 287.5 616.5 287.5 476.5 447.5 384.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' className='shoveLeft'/>
					    <polyline points='447.5 523.5 427.5 511.5 287.5 593.33' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' className='shoveLeft'/>
					    <line x1='427.5' y1='396' x2='427.5' y2='511.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' className='shoveLeft'/>
					    <line x1='612' y1='-1021.6' x2='628.12' y2='535.21' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				    <g id='PotPlant' onClick={() => onSelect('default')}>
				        <path d='M863.29,385.74l-3,35.33,0,0-19.67,12.46a0,0,0,0,1-.07,0l-19.22-13.46a.05.05,0,0,1,0,0l-5.32-43,.46-.07a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87Z'
				        fill='#fff' />
				        <g fill='none' stroke='#000' strokeMiterlimit='10'>
				            <path d='M816.46,377a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87,12.19,12.19,0,0,0-3.06-17.08l-13.44-9.25a12.19,12.19,0,0,0-12.59-.74l-11.25,5.92A12.14,12.14,0,0,0,816.46,377Z'
				            />
				            <path d='M839.78,359.19a10,10,0,0,1,5.75,1.78l13.23,9.1a10.53,10.53,0,0,1,4.66,9.63,10.05,10.05,0,0,1-5.55,8L847,393.15a10.19,10.19,0,0,1-4.53,1.07,10.07,10.07,0,0,1-2.68-.36,10.45,10.45,0,0,1-2.7-1.18l-13.77-8.61a10.44,10.44,0,0,1-5-8.78,10,10,0,0,1,5.41-9l11.45-6a7.76,7.76,0,0,1,1.45-.63A10.8,10.8,0,0,1,839.78,359.19Z'
				            />
				            <polyline points='839.78 359.18 839.78 359.19 839.78 393.86 839.78 394.22'
				            />
				            <path d='M816,377.1l5.32,43a.05.05,0,0,0,0,0l19.22,13.46a0,0,0,0,0,.07,0l19.67-12.46,0,0,3-35.33'
				            />
				        </g>
				        <path d='M833.23,389.83a22.69,22.69,0,0,1,5.28-9.44c3.57-3.84,9.33-7.07,11.28-5.51a2.45,2.45,0,0,1,.7,2.27c-.52,2.69-2.1-5.2-11.34,5.06a16.5,16.5,0,0,0-3.79,9.31'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M834.8,391.13c1.72-1.69,2.8-7.54,2-12.69s-3.84-11.05-6.33-10.83a2.4,2.4,0,0,0-1.83,1.5c-1.07,2.52,4.62-3.17,6.62,10.5.56,3.82-1,8.53-2.23,10.16'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M884.57,358.05c22.53,10.44,25.14,28.4,25.14,28.4s-12.49-1.4-38.45.34c-24.78,1.67-37.82-25.33-34.14-33.27S862,347.62,884.57,358.05Z'
				        fill='#fff' />
				        <path d='M871.26,386.79c-24.78,1.67-37.82-25.33-34.14-33.27s24.92-5.9,47.45,4.53,25.14,28.4,25.14,28.4S897.22,385.05,871.26,386.79Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M814.14,377.26c24.78-1.71,34-30.22,29.33-37.59s-25.5-2.48-46.41,10.91S776,382.12,776,382.12,788.18,379.05,814.14,377.26Z'
				        fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <line x1='830.54' y1='388.59' x2='836.6' y2='392.37' fill='none' stroke='#000'
				        strokeMiterlimit='10' />
			    	</g>

					<g id='lazyrobot' className='lazyRobot'>
					    <path d='M669.56,682v9.11a3,3,0,0,0,1.91,2.82l6.09,2.44a3,3,0,0,0,4.17-2.82v-8.94a3,3,0,0,0-1.84-2.79l-6.09-2.61A3,3,0,0,0,669.56,682Z'
					    fill='#f9f9f9' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='812.86 837.15 812.86 804.36 823.73 797.69 823.73 830.9 814.06 836.36 812.86 837.15'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='812.86 837.84 715.09 780.5 715.09 767.75' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='813.16 803.86 807.18 800.94 818.6 794.11 824.04 797.19'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='807.18 800.94 807.18 822.5 799.56 818.5 799.56 830.04'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='806.5 813.34 799.56 818.5 715.09 767.75 722.48 762.7 807.18 813.75'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='799.54 811.12 799.25 811.63 788.83 818.02 788.69 817.79 782.71 814.88 794.12 808.05 799.54 811.12'
					    fill='#fff' />
					    <polygon points='799.25 811.63 799.25 844.84 789.59 850.3 788.38 851.09 788.38 818.3 788.83 818.02 799.25 811.63'
					    fill='#fff' />
					    <polygon points='788.69 817.79 788.83 818.02 788.38 818.3 788.38 851.09 788.08 851.6 775.09 843.98 775.09 832.44 782.71 836.44 782.71 827.69 782.71 814.88 788.69 817.79'
					    fill='#fff' />
					    <polygon points='782.71 827.69 782.71 836.44 775.09 832.44 782.02 827.28 782.71 827.69'
					    fill='#fff' />
					    <polygon points='698 776.64 782.02 827.28 775.09 832.44 690.61 781.69 698 776.64'
					    fill='#fff' />
					    <polygon points='775.09 832.44 775.09 843.98 690.61 794.44 690.61 781.69 775.09 832.44'
					    fill='#fff' />
					    <polygon points='788.38 851.09 788.38 818.3 788.83 818.02 799.25 811.63 799.25 844.84 789.59 850.3 788.38 851.09'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='788.38 851.78 788.08 851.6 775.09 843.98 690.61 794.44 690.61 781.69'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='788.69 817.79 782.71 814.88 794.12 808.05 799.54 811.12 799.56 811.13'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='782.71 814.88 782.71 827.69 782.71 836.44 775.09 832.44 775.09 843.98'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='782.02 827.28 775.09 832.44 690.61 781.69 698 776.64 782.02 827.28 782.71 827.69'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='690.62 794.44 684.77 797.69 684.77 771.97 727.52 747.72 727.52 765.74'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <line x1='715.09' y1='780.5' x2='709.15' y2='783.35' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.5' fill='url(#Grid_Geometry)' />
					    <polyline points='684.77 797.69 623.77 760.97 623.77 737.22 667.27 712.97 678.61 719.51 727.52 747.72'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='577.4 750.04 588.61 712 590.61 724.34 584 749.9' fill='#fff'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='629.02 760.97 577.4 762.6 577.4 749.85 629.02 748.72 629.02 760.97'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='675.65 684.22 630.44 690.8 641.47 697.46 675.65 692.03'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M569.31,750.76v9.11a3,3,0,0,0,1.91,2.82l6.09,2.44a3,3,0,0,0,4.17-2.82v-8.93a3.06,3.06,0,0,0-1.84-2.8L573.55,748A3,3,0,0,0,569.31,750.76Z'
					    fill='#f9f9f9' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M617.61,700.05A22.74,22.74,0,0,1,635,688c12.66-1.66,0,15.17,0,15.17s-8-.2-13.34,3.15S617.61,700.05,617.61,700.05Z'
					    fill='#fffdfd' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M584.15,718.71a22.71,22.71,0,0,1,17.33-12c12.67-1.67,0,15.16,0,15.16s-8-.19-13.33,3.15S584.15,718.71,584.15,718.71Z'
					    fill='#fffdfd' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='648.27 701.22 648.27 714.22 617.56 731.02 617.56 718.47 648.27 701.22'
					    fill='#fff' />
					    <polygon points='648.27 701.22 617.56 718.47 587.52 701.22 617.56 684.22 648.27 701.22'
					    fill='#fff' />
					    <polygon points='617.56 718.47 617.56 731.02 587.52 701.22 617.56 718.47'
					    fill='#fff' />
					    <polygon points='617.56 731.02 587.52 712.97 587.52 701.22 617.56 731.02'
					    fill='#fff' />
					    <polyline points='617.56 718.47 617.56 731.02 648.27 714.22 648.27 701.22'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='648.27 701.22 617.56 684.22 587.52 701.22 617.56 718.47'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='587.52 701.22 587.52 712.97 617.56 731.02' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <line x1='617.56' y1='718.47' x2='648.27' y2='701.22' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.5' fill='url(#Grid_Geometry)' />
					    <polygon points='636.86 714.64 650.93 722.08 643.27 725.69 630.44 718.47 636.86 714.64'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='630.44 718.47 630.44 723.98 639.21 728.62 643.27 725.69'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M600.27,701.35s-.65-6.21,6.84-4.38' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M611.94,694.51s-.66-6.21,6.84-4.37' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='625.7 698.56 625.7 702.05 617.47 706.55 617.47 703.19 625.7 698.56'
					    fill='#fff' />
					    <polygon points='625.7 698.56 617.47 703.19 609.41 698.56 617.47 694.01 625.7 698.56'
					    fill='#fff' />
					    <polygon points='617.47 703.19 617.47 706.55 609.41 698.56 617.47 703.19'
					    fill='#fff' />
					    <polygon points='617.47 706.55 609.41 701.71 609.41 698.56 617.47 706.55'
					    fill='#fff' />
					    <polyline points='617.47 703.19 617.47 706.55 625.7 702.05 625.7 698.56'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='625.7 698.56 617.47 694.01 609.41 698.56 617.47 703.19'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='609.41 698.56 609.41 701.71 617.47 706.55' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <line x1='625.7' y1='698.56' x2='617.47' y2='703.19' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.5' fill='url(#Grid_Geometry)' />
					    <path d='M615.35,709.85s1.62,4.45,15.09-3.3' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='678.61 719.51 678.61 689.39 678.61 686.47 675.65 684.22 675.65 688.14 675.65 717.8'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
				    </g>

				    <g id='picture_mountain'>
					    <polygon points='287.5 588.55 287.5 475.54 427.5 395.04 427.5 396.55 427.5 510.54 425.74 511.56 287.5 592.37 287.5 588.55'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='305.21 484.76 305.21 556.09 334.54 538.09 345.21 507.43 354.54 513.42 364.54 484.76 395.88 504.09 405.88 499.54 405.88 427.43 305.21 484.76'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M324.42,487v1.42a4.81,4.81,0,0,0,7.26,4.13l1.05-.63a4.79,4.79,0,0,0,2.36-4.13v-1.38a4.8,4.8,0,0,0-7.16-4.19l-1.06.59A4.8,4.8,0,0,0,324.42,487Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <line x1='345.21' y1='415.93' x2='355.54' y2='421.93' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.5' fill='url(#Grid_Geometry)' />
					    <polyline points='335.08 448.17 350.38 418.93 376.63 424.29' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M354.11,421.79v.47a1.58,1.58,0,0,0,2.38,1.35l.35-.21a1.57,1.57,0,0,0,.77-1.35v-.46a1.58,1.58,0,0,0-2.35-1.37l-.35.2A1.56,1.56,0,0,0,354.11,421.79Z'
					    />
				    </g>
				</svg>
			}
			{width <= 768 &&
				<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={(viewboxx + 600) + " " + (viewboxy + 250) + " " + (viewboxwidth - 800)  + " " + (viewboxheight - 350)}   preserveAspectRatio="xMidYMid" className='bookcase_scene'>
					{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff'>
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase'>
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				   <g id='movedPotPlant' className='movedPotPlant' onClick={() => onSelect('default')}>
				        <path d='M804.1,347.1a10.62,10.62,0,0,1,4.7,9.6,10,10,0,0,1-5.6,8l-10.9,5.4a10.3,10.3,0,0,1-4.5,1.1,8.42,8.42,0,0,1-2.7-.4V336.1a10.19,10.19,0,0,1,5.8,1.8Z'
				        fill='#fff' />
				        <path d='M808.6,362.8l-3,35.3h0l-19.7,12.5h-.1l-19.2-13.5h0l-5.3-43,.5-.1a11.86,11.86,0,0,0,5.6,8.6l13.9,8.7a12,12,0,0,0,11.9.6l10.8-5.4a11.42,11.42,0,0,0,4.5-3.9Z'
				        fill='#fff' />
				        <path d='M785.1,370.9a12.59,12.59,0,0,0,2.7.4,10,10,0,0,0,4.5-1.1l10.9-5.4a10.07,10.07,0,0,0,.9-17.6l-13.2-9.1a10,10,0,0,0-5.8-1.8,12.48,12.48,0,0,0-3.2.5,9.38,9.38,0,0,0-1.5.6l-11.5,6a9.9,9.9,0,0,0-5.4,8.9,10.55,10.55,0,0,0,5,8.8l13.8,8.6A7.67,7.67,0,0,0,785.1,370.9Zm20.3-25.2a12.23,12.23,0,0,1-1.4,21l-10.8,5.4a12,12,0,0,1-11.9-.6l-13.9-8.7a12.17,12.17,0,0,1,.8-21.1l11.2-5.9a12.38,12.38,0,0,1,12.6.7Z'
				        fill='#fff' />
				        <path d='M785.1,336.3V371a11.07,11.07,0,0,1-2.7-1.2l-13.8-8.6a10.55,10.55,0,0,1-5-8.8,9.79,9.79,0,0,1,5.4-8.9l11.5-6a9.38,9.38,0,0,1,1.5-.6A6.61,6.61,0,0,1,785.1,336.3Z'
				        fill='#fff' />
				        <path d='M761.8,354.1a11.86,11.86,0,0,0,5.6,8.6l13.9,8.7a12,12,0,0,0,11.9.6l10.8-5.4a11.42,11.42,0,0,0,4.5-3.9,12.23,12.23,0,0,0-3.1-17.1L792,336.4a11.94,11.94,0,0,0-12.6-.7l-11.2,5.9A12.09,12.09,0,0,0,761.8,354.1Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' />
				        <path d='M785.1,336.3a10.19,10.19,0,0,1,5.8,1.8l13.2,9.1a10.62,10.62,0,0,1,4.7,9.6,10,10,0,0,1-5.6,8l-10.9,5.4a10.3,10.3,0,0,1-4.5,1.1,8.42,8.42,0,0,1-2.7-.4,11.07,11.07,0,0,1-2.7-1.2l-13.8-8.6a10.55,10.55,0,0,1-5-8.8,9.79,9.79,0,0,1,5.4-8.9l11.5-6a9.38,9.38,0,0,1,1.5-.6A8.08,8.08,0,0,1,785.1,336.3Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' />
				        <polyline points='785.1 336.3 785.1 336.3 785.1 370.9 785.1 371.3' fill='none'
				        stroke='#000' strokeMiterlimit='10' />
				        <path d='M761.3,354.2l5.3,43h0l19.2,13.5h.1l19.7-12.5h0l3-35.3' fill='none'
				        stroke='#000' strokeMiterlimit='10' />
				        <path d='M778.5,366.9a22,22,0,0,1,5.3-9.4c3.6-3.8,9.3-7.1,11.3-5.5a2.69,2.69,0,0,1,.7,2.3c-.5,2.7-2.1-5.2-11.3,5.1a16.77,16.77,0,0,0-3.8,9.3'
					    fill='white' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867'
					    />
					    <path d='M780.1,368.2c1.7-1.7,2.8-7.5,2-12.7s-3.8-11-6.3-10.8a2.49,2.49,0,0,0-1.8,1.5c-1.1,2.5,4.6-3.2,6.6,10.5a16,16,0,0,1-2.2,10.2'
					    fill='white' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867'
					    />
					    <path d='M816.5,363.9c-24.8,1.7-37.8-25.3-34.1-33.3s24.9-5.9,47.5,4.5S855,363.5,855,363.5,842.5,362.1,816.5,363.9Z'
					    fill='white' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867'
					    />
					    <path d='M759.4,354.3c24.8-1.7,34-30.2,29.3-37.6s-25.5-2.5-46.4,10.9-21.1,31.5-21.1,31.5S733.5,356.1,759.4,354.3Z'
					    fill='white' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867'
					    />
				    </g>
				    	
				    <g id='lazyRobot_atopBookshelf' className='lazyRobot'>
					    <line x1='775.8' y1='365.7' x2='781.9' y2='369.4' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <path d='M885.2,386.27v9.1a3.06,3.06,0,0,0,1.91,2.83l6.09,2.44a3,3,0,0,0,4.17-2.82v-8.94a3,3,0,0,0-1.84-2.79l-6.09-2.61A3,3,0,0,0,885.2,386.27Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.949' />
					    <polyline points='906.26 498.67 900.41 501.92 900.41 476.2 943.16 451.95 943.16 469.97'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <line x1='930.73' y1='484.73' x2='924.79' y2='487.58' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='943.16 451.95 900.41 476.2 900.41 501.92 839.41 465.2 839.41 441.45 882.91 417.2 894.25 423.73 943.16 451.95'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='793.04 454.27 804.25 416.23 806.25 428.56 799.64 454.13'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polygon points='844.66 465.2 793.04 466.82 793.04 454.07 844.66 452.95 844.66 465.2'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='891.29 388.45 846.08 395.03 857.12 401.69 891.29 396.26'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <path d='M785,455v9.11a3.05,3.05,0,0,0,1.91,2.82l6.09,2.44a3,3,0,0,0,4.17-2.82V457.6a3.05,3.05,0,0,0-1.84-2.79l-6.09-2.61A3,3,0,0,0,785,455Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.949' />
					    <path d='M833.25,404.27a22.74,22.74,0,0,1,17.34-12c12.66-1.67,0,15.17,0,15.17s-8-.2-13.34,3.15S833.25,404.27,833.25,404.27Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <path d='M799.79,422.94a22.74,22.74,0,0,1,17.33-12.05c12.67-1.66,0,15.17,0,15.17s-8-.2-13.33,3.15S799.79,422.94,799.79,422.94Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polygon points='863.91 405.45 863.91 418.45 833.2 435.25 833.2 422.7 863.91 405.45'
					    fill='#fff' />
					    <polygon points='863.91 405.45 833.2 422.7 803.16 405.45 833.2 388.45 863.91 405.45'
					    fill='#fff' />
					    <polygon points='833.2 422.7 833.2 435.25 803.16 405.45 833.2 422.7' fill='#fff'
					    />
					    <polygon points='833.2 435.25 803.16 417.2 803.16 405.45 833.2 435.25'
					    fill='#fff' />

					    <polyline points='833.2 422.7 833.2 435.25 863.91 418.45 863.91 405.45'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='863.91 405.45 833.2 388.45 803.16 405.45 833.2 422.7'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='803.16 405.45 803.16 417.2 833.2 435.25' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <line x1='833.2' y1='422.7' x2='863.91' y2='405.45' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='0.585' />
					    <polygon points='852.5 418.86 866.57 426.31 858.91 429.92 846.08 422.7 852.5 418.86'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='846.08 422.7 846.08 428.2 854.85 432.84 858.91 429.92'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <path d='M815.91,405.57s-.65-6.21,6.84-4.37' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.15' />
					    <path d='M827.58,398.74s-.65-6.21,6.84-4.38' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.15' />
					    <polygon points='841.34 402.79 841.34 406.27 833.11 410.78 833.11 407.41 841.34 402.79'
					    fill='#fff' />
					    <polygon points='841.34 402.79 833.11 407.41 825.05 402.79 833.11 398.23 841.34 402.79'
					    fill='#fff' />
					    <polygon points='833.11 407.41 833.11 410.78 825.05 402.79 833.11 407.41'
					    fill='#fff' />
					    <polygon points='833.11 410.78 825.05 405.94 825.05 402.79 833.11 410.78'
					    fill='#fff' />
					    <polyline points='833.11 407.41 833.11 410.78 841.34 406.27 841.34 402.79'
					    fill='none' stroke='#000' strokeMiterlimit='10' />
					    <polyline points='841.34 402.79 833.11 398.23 825.05 402.79 833.11 407.41'
					    fill='none' stroke='#000' strokeMiterlimit='10' />
					    <polyline points='825.05 402.79 825.05 405.94 833.11 410.78' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <line x1='841.34' y1='402.79' x2='833.11' y2='407.41' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.15' />
					    <path d='M831,414.07s1.62,4.45,15.09-3.29' fill='#fff' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.15' />
					    <polyline points='894.25 423.73 894.25 393.61 894.25 390.7 891.29 388.45 891.29 392.36 891.29 422.03'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polygon points='1039.68 501.41 1039.23 501.68 1028.81 508.08 1022.83 505.16 1034.24 498.33 1039.68 501.41'
					    fill='#fff' />
					    <polygon points='1039.37 501.91 1039.37 535.12 1029.71 540.58 1028.5 541.37 1028.5 508.58 1039.37 501.91'
					    fill='#fff' />
					    <polygon points='1028.5 542.06 1015.21 534.27 1015.59 532.81 1028.17 541.83 1028.5 542.06'
					    fill='#fff' />
					    <polygon points='1022.83 517.98 1022.83 526.73 1017.87 524.12 1018.96 519.93 1022.13 517.56 1022.14 517.56 1022.83 517.98'
					    fill='#fff' />
					    <polygon points='1022.83 505.16 1022.83 517.98 1022.14 517.56 1022.13 517.56 1019.93 516.23 1022.83 505.16'
					    fill='#fff' />
					    <polygon points='1022.13 517.56 1018.96 519.93 1019.93 516.23 1022.13 517.56'
					    fill='#fff' />
					    <polygon points='1019.93 516.23 1018.96 519.93 1015.21 522.73 930.73 471.98 938.12 466.92 1019.93 516.23'
					    fill='#fff' />
					    <polygon points='1017.87 524.12 1015.59 532.81 1015.21 532.53 1015.21 522.73 1017.87 524.12'
					    fill='#fff' />
					    <polygon points='1015.59 532.81 1015.21 534.27 1015.21 532.53 1015.59 532.81'
					    fill='#fff' />
					    <polygon points='1015.21 532.53 1015.21 534.27 930.73 484.73 930.73 471.98 1015.21 532.53'
					    fill='#fff' />
					    <polygon points='1015.21 522.73 1015.21 532.53 930.73 471.98 1015.21 522.73'
					    fill='#fff' />
					    <polygon points='1028.5 541.37 1028.5 508.58 1039.37 501.91 1039.37 535.12 1029.71 540.58 1028.5 541.37'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='1028.5 542.06 1015.21 534.27 930.73 484.73 930.73 471.98'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='1028.81 508.08 1022.83 505.16 1034.24 498.33 1039.68 501.41'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='1022.83 505.16 1022.83 517.98 1022.83 526.73 1017.87 524.12 1015.21 522.73 1015.21 532.53 1015.21 534.27'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='1022.13 517.56 1018.96 519.93 1015.21 522.73 930.73 471.98 938.12 466.92 1019.93 516.23 1022.13 517.56'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <line x1='1022.13' y1='517.56' x2='1022.14' y2='517.56' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.15' />
					    <line x1='1022.83' y1='517.98' x2='1022.14' y2='517.56' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.15' />
					    <polygon points='1015.18 515.35 1014.89 515.86 1004.47 522.25 1004.33 522.01 998.35 519.11 1009.76 512.27 1015.18 515.35'
					    fill='#fff' />
					    <polygon points='1014.89 515.86 1014.89 549.07 1005.23 554.52 1004.02 555.32 1004.02 522.52 1004.47 522.25 1014.89 515.86'
					    fill='#fff' />
					    <polygon points='1004.33 522.01 1004.47 522.25 1004.02 522.52 1004.02 555.32 1003.72 555.83 990.73 548.21 990.73 536.66 998.35 540.66 998.35 531.91 998.35 519.11 1004.33 522.01'
					    fill='#fff' />
					    <polygon points='998.35 531.91 998.35 540.66 990.73 536.66 997.66 531.5 998.35 531.91'
					    fill='#fff' />
					    <polygon points='913.64 480.87 997.66 531.5 990.73 536.66 916.06 491.81 906.25 485.92 913.64 480.87'
					    fill='#fff' />
					    <polygon points='990.73 536.66 990.73 548.21 906.25 498.67 906.25 485.92 916.06 491.81 990.73 536.66'
					    fill='#fff' />
					    <polygon points='1004.02 555.32 1004.02 522.52 1004.47 522.25 1014.89 515.86 1014.89 549.07 1005.23 554.52 1004.02 555.32'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='1004.02 556 1003.72 555.83 990.73 548.21 906.25 498.67 906.25 485.92'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='1004.33 522.01 998.35 519.11 1009.76 512.27 1015.18 515.35 1015.2 515.36'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='998.35 519.11 998.35 531.91 998.35 540.66 990.73 536.66 990.73 548.21'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
					    <polyline points='997.66 531.5 990.73 536.66 916.06 491.81 906.25 485.92 913.64 480.87 997.66 531.5 998.35 531.91'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.15' />
				      </g>


				</svg>
			}
		</div>
		)
	}
}

export class YellowBookSvg extends Component  {
	constructor(props) {
	  super(props);
	  this.state = { width: 0, height: 0 };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		const {viewboxx, viewboxy, viewboxwidth, viewboxheight, onSelect, spinefill} = this.props;
		const { width, height } = this.state;

		return (
		<div>
			{width > 768 &&
			<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={viewboxx + " " + viewboxy + " " + viewboxwidth + " " + viewboxheight}  preserveAspectRatio="xMidYMid" className='bookcase_scene'>
    				{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff'>
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase'>
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>

				{/* <g id='wallLinesAndWindow' className={removeLines}> */}
				   <g id='wallLinesAndWindow' className='yellowWindowLines'>
					    <polyline points='688.5 570 628.5 535.5 -719.5 1314.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2'  />
					    <line x1='1990' y1='1314' x2='989.5' y2='744.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='447.5 384.5 447.5 523.5 287.5 616.5 287.5 476.5 447.5 384.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='447.5 523.5 427.5 511.5 287.5 593.33' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <line x1='427.5' y1='396' x2='427.5' y2='511.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <line x1='612' y1='-1021.6' x2='628.12' y2='535.21' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				    <g id='PotPlant' onClick={() => onSelect('default')}>
				        <path d='M863.29,385.74l-3,35.33,0,0-19.67,12.46a0,0,0,0,1-.07,0l-19.22-13.46a.05.05,0,0,1,0,0l-5.32-43,.46-.07a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87Z'
				        fill='#fff' />
				        <g fill='none' stroke='#000' strokeMiterlimit='10'>
				            <path d='M816.46,377a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87,12.19,12.19,0,0,0-3.06-17.08l-13.44-9.25a12.19,12.19,0,0,0-12.59-.74l-11.25,5.92A12.14,12.14,0,0,0,816.46,377Z'
				            />
				            <path d='M839.78,359.19a10,10,0,0,1,5.75,1.78l13.23,9.1a10.53,10.53,0,0,1,4.66,9.63,10.05,10.05,0,0,1-5.55,8L847,393.15a10.19,10.19,0,0,1-4.53,1.07,10.07,10.07,0,0,1-2.68-.36,10.45,10.45,0,0,1-2.7-1.18l-13.77-8.61a10.44,10.44,0,0,1-5-8.78,10,10,0,0,1,5.41-9l11.45-6a7.76,7.76,0,0,1,1.45-.63A10.8,10.8,0,0,1,839.78,359.19Z'
				            />
				            <polyline points='839.78 359.18 839.78 359.19 839.78 393.86 839.78 394.22'
				            />
				            <path d='M816,377.1l5.32,43a.05.05,0,0,0,0,0l19.22,13.46a0,0,0,0,0,.07,0l19.67-12.46,0,0,3-35.33'
				            />
				        </g>
				        <path d='M833.23,389.83a22.69,22.69,0,0,1,5.28-9.44c3.57-3.84,9.33-7.07,11.28-5.51a2.45,2.45,0,0,1,.7,2.27c-.52,2.69-2.1-5.2-11.34,5.06a16.5,16.5,0,0,0-3.79,9.31'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M834.8,391.13c1.72-1.69,2.8-7.54,2-12.69s-3.84-11.05-6.33-10.83a2.4,2.4,0,0,0-1.83,1.5c-1.07,2.52,4.62-3.17,6.62,10.5.56,3.82-1,8.53-2.23,10.16'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M884.57,358.05c22.53,10.44,25.14,28.4,25.14,28.4s-12.49-1.4-38.45.34c-24.78,1.67-37.82-25.33-34.14-33.27S862,347.62,884.57,358.05Z'
				        fill='#fff' />
				        <path d='M871.26,386.79c-24.78,1.67-37.82-25.33-34.14-33.27s24.92-5.9,47.45,4.53,25.14,28.4,25.14,28.4S897.22,385.05,871.26,386.79Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M814.14,377.26c24.78-1.71,34-30.22,29.33-37.59s-25.5-2.48-46.41,10.91S776,382.12,776,382.12,788.18,379.05,814.14,377.26Z'
				        fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <line x1='830.54' y1='388.59' x2='836.6' y2='392.37' fill='none' stroke='#000'
				        strokeMiterlimit='10' />
			    	</g>

					<g id='leaningrobotandbird' className='leaningRobotAndBird'>
					    <path d='M517.25,416.29v9.1a3,3,0,0,0,1.91,2.82l6.09,2.44a3,3,0,0,0,4.17-2.82V418.9a3.06,3.06,0,0,0-1.84-2.8l-6.09-2.61A3,3,0,0,0,517.25,416.29Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='562.57 444.13 523.33 416.23 523.67 429.92 553.1 451.95 562.57 444.13'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M612.7,464l-60-17.21,16.1-9.86a.28.28,0,0,1,.28,0l43.6,26.48A.35.35,0,0,1,612.7,464Z'
					    fill='#fff' />
					    <path d='M597.05,472.33,612.7,464a.35.35,0,0,0,0-.59l-43.6-26.48a.28.28,0,0,0-.28,0l-16.1,9.86'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M597,563.37,552,539V447.22a.49.49,0,0,1,.73-.46L597,472.27' fill='#fff'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M612.7,464v43.24s.2,47.11.17,47.12l-15.87,9c-.06,0,0,0,0-.07l.06-91Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M587.56,390.24l-45.74-13.13h0s11.19-7,11.28-6.91S574.44,382.56,587.56,390.24Z'
					    fill='#fff' strokeWidth='1.5'/>
					    <path d='M541.79,377.1h0l45.31,26v0c-.11,1,0,42.5,0,42.5L541.06,418V377.56A.49.49,0,0,1,541.79,377.1ZM574,408.91l.61-.05c-5-11.51-9.46-6.21-9.46-6.21v.45Z'
					    fill='#fff' strokeWidth='1.5'/>
					    <path d='M587.13,403.12c.14,1.07.32,42.7,0,42.5C587.13,445.62,587,404.16,587.13,403.12Z'
					    fill='#fff' strokeWidth='1.5'/>
					    <path d='M574.65,408.86l-.61.05-8.85-5.81v-.45S569.67,397.35,574.65,408.86Z'
					    fill='#fff' strokeWidth='1.5'/>
					    <path d='M541.06,418c0,.19-.15-.1,0,0Z' fill='#fff' strokeWidth='1.5'/>
					    <path d='M587.13,403.12c-.11,1,0,42.5,0,42.5,0,.26,10.89-6.74,10.89-6.74l-.15-42.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M541.79,377.1s11.19-7,11.28-6.91,21.37,12.37,34.49,20.05c6.07,3.55,10.38,6.1,10.31,6.14l-10.74,6.72'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M541.06,418V377.56a.49.49,0,0,1,.73-.46h0l45.31,26v0c.14,1.07.32,42.7,0,42.5L541.06,418'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M541.06,418c-.15-.1,0,.19,0,0Z' fill='none' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.5' />
					    <path d='M565.19,402.65s4.48-5.3,9.46,6.21' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M566.22,407.42l-3.29,2.39-9.27-5.51,3.3-2.39s9.26,5.47,9.26,5.51v8.83l-3.45,2.49'
					    fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round'
					    strokeWidth='1.5' />
					    <path d='M553.66,404.3l9.22,5.42a.11.11,0,0,1,0,.09v8.83a.11.11,0,0,1-.16.1l-9.21-5.06a.11.11,0,0,1-.06-.09V404.4A.11.11,0,0,1,553.66,404.3Z'
					    fill='#fff' stroke='#000' strokeLinecap='round' strokeLinejoin='round'
					    strokeWidth='1.5' />
					    <path d='M554,421.16s2.07,6.17,16.64-1.66' fill='#fff' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.5' />
					    <path d='M549.89,392.72s4.49-5.3,9.47,6.21' fill='none' stroke='#000'
					    strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					    <polygon points='559.36 428.97 576.14 453.75 582.72 457.67 588.33 455.37 582.72 451.67 572.53 436.87 559.36 428.97'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M506.33,394.31c0,.36-7.54-19.48-13.54-9.81S499,410.7,499,410.7s4.05,4.72,5.33,2.54S506.33,394.31,506.33,394.31Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='520 416.23 500.33 396 500.33 406.01 520 424.83 520 416.23'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M620.05,507.54s-8.46-10.21-10.75-4.54-4.38,10.68-4.38,10.68-2.66,5.32,4.38,9.82S620.05,507.54,620.05,507.54Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M650.23,505.38l-33.77,14.08a1.76,1.76,0,0,1-2.34-2.19l2.62-7.74a1.81,1.81,0,0,1,1-1.07l29.53-11.9a1.76,1.76,0,0,1,2.35,1.14l1.61,5.56A1.76,1.76,0,0,1,650.23,505.38Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='650.02 493.24 610.29 470.07 598.82 476.65 639 501.13 650.02 493.24'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M649.12,492.59l-8.32,3.71a3,3,0,0,0-1.8,2.89l.25,6.55a3,3,0,0,0,4.27,2.67l8.16-3.64a3.05,3.05,0,0,0,1.81-2.82l-.09-6.62A3.05,3.05,0,0,0,649.12,492.59Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='560.84 543.78 560.84 612.15 570.31 617.67 570.59 549.06 560.84 543.78'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <polygon points='570.31 617.67 580.57 612.15 580.57 554.47 570.59 549.06 570.31 617.67'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <polygon points='560.59 612.19 560.59 620.98 547.72 628.48 556.04 633.48 570.06 625.81 570.06 617.71 560.59 612.19'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <polygon points='580.32 612.19 580.32 631.48 556.04 644.81 547.72 640.14 547.72 628.48 556.04 633.48 570.06 625.81 570.06 617.71 580.32 612.19'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <polygon points='575.14 551.35 575.14 619.72 584.61 625.23 584.88 556.63 575.14 551.35'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <polygon points='584.61 625.23 594.87 619.72 594.87 562.03 584.88 556.63 584.61 625.23'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <polygon points='575.14 619.72 575.14 628.5 562.27 636 570.59 641 584.61 633.33 584.61 625.23 575.14 619.72'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <polygon points='594.87 619.72 594.87 639 570.59 652.33 562.27 647.67 562.27 636 570.59 641 584.61 633.33 584.61 625.23 594.87 619.72'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5'/>
					    <path d='M411.67,533.28l-7.18,6.21h0c-.2-.26-3.08-3.89-1.48-4.7S406.34,528.28,411.67,533.28Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M404.49,539.49l7.18-6.21s-6,15.17-6.17,8A1.72,1.72,0,0,0,404.49,539.49Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M411.67,533.28c-5.33-5-7,.67-8.67,1.5s1.28,4.44,1.48,4.7c-1.51-.6-4.49.53-7.57.95a11.36,11.36,0,0,1-3.68,0c-3.27-.61-6-3.31-6.23-11.48-.66-21.5,13-9,14-8.33C414.17,528.78,411.67,533.28,411.67,533.28Zm-8.43-2a.72.72,0,1,0-.72-.71A.71.71,0,0,0,403.24,531.24Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M404,530.53a.72.72,0,1,1-.71-.72A.71.71,0,0,1,404,530.53Z' fill='#fff'
					    strokeWidth='1.5' />
					    <polygon points='396.91 540.43 398.84 543.94 396.91 543.21 396.91 540.43'
					    fill='#fff' strokeWidth='1.5' />
					    <polygon points='393.23 540.43 394.5 547.45 393.23 544.95 393.23 540.43'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M404.49,539.49a1.72,1.72,0,0,1,1,1.79c.17,7.17,6.17-8,6.17-8s2.5-4.5-10.67-12.66c-1-.64-14.66-13.17-14,8.33.26,8.17,3,10.87,6.23,11.48a11.36,11.36,0,0,0,3.68,0c3.08-.42,6.06-1.55,7.57-.95'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M404.49,539.49h0c-.2-.26-3.08-3.89-1.48-4.7s3.34-6.5,8.67-1.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M404,530.53a.72.72,0,1,1-.71-.72A.71.71,0,0,1,404,530.53Z' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='393.23 540.43 393.23 544.95 394.5 547.45' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='396.91 540.43 396.91 543.21 398.84 543.94' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
				    </g>
				</svg>
				}
				{width <= 768 &&
					<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={(viewboxx + 600) + " " + (viewboxy + 250) + " " + (viewboxwidth - 800)  + " " + (viewboxheight - 350)}  preserveAspectRatio="xMidYMid slice" className='bookcase_scene--initial'>
    				{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff' >
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase' >
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				    <g id='PotPlant' onClick={() => onSelect('default')}>
				        <path d='M863.29,385.74l-3,35.33,0,0-19.67,12.46a0,0,0,0,1-.07,0l-19.22-13.46a.05.05,0,0,1,0,0l-5.32-43,.46-.07a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87Z'
				        fill='#fff' />
				        <g fill='none' stroke='#000' strokeMiterlimit='10'>
				            <path d='M816.46,377a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87,12.19,12.19,0,0,0-3.06-17.08l-13.44-9.25a12.19,12.19,0,0,0-12.59-.74l-11.25,5.92A12.14,12.14,0,0,0,816.46,377Z'
				            />
				            <path d='M839.78,359.19a10,10,0,0,1,5.75,1.78l13.23,9.1a10.53,10.53,0,0,1,4.66,9.63,10.05,10.05,0,0,1-5.55,8L847,393.15a10.19,10.19,0,0,1-4.53,1.07,10.07,10.07,0,0,1-2.68-.36,10.45,10.45,0,0,1-2.7-1.18l-13.77-8.61a10.44,10.44,0,0,1-5-8.78,10,10,0,0,1,5.41-9l11.45-6a7.76,7.76,0,0,1,1.45-.63A10.8,10.8,0,0,1,839.78,359.19Z'
				            />
				            <polyline points='839.78 359.18 839.78 359.19 839.78 393.86 839.78 394.22'
				            />
				            <path d='M816,377.1l5.32,43a.05.05,0,0,0,0,0l19.22,13.46a0,0,0,0,0,.07,0l19.67-12.46,0,0,3-35.33'
				            />
				        </g>
				        <path d='M833.23,389.83a22.69,22.69,0,0,1,5.28-9.44c3.57-3.84,9.33-7.07,11.28-5.51a2.45,2.45,0,0,1,.7,2.27c-.52,2.69-2.1-5.2-11.34,5.06a16.5,16.5,0,0,0-3.79,9.31'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M834.8,391.13c1.72-1.69,2.8-7.54,2-12.69s-3.84-11.05-6.33-10.83a2.4,2.4,0,0,0-1.83,1.5c-1.07,2.52,4.62-3.17,6.62,10.5.56,3.82-1,8.53-2.23,10.16'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M884.57,358.05c22.53,10.44,25.14,28.4,25.14,28.4s-12.49-1.4-38.45.34c-24.78,1.67-37.82-25.33-34.14-33.27S862,347.62,884.57,358.05Z'
				        fill='#fff' />
				        <path d='M871.26,386.79c-24.78,1.67-37.82-25.33-34.14-33.27s24.92-5.9,47.45,4.53,25.14,28.4,25.14,28.4S897.22,385.05,871.26,386.79Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M814.14,377.26c24.78-1.71,34-30.22,29.33-37.59s-25.5-2.48-46.41,10.91S776,382.12,776,382.12,788.18,379.05,814.14,377.26Z'
				        fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <line x1='830.54' y1='388.59' x2='836.6' y2='392.37' fill='none' stroke='#000'
				        strokeMiterlimit='10' />
			    	</g>
			    	<g id='robotandbirdmobile' className='leaningRobotAndBird'>
			    		<path d='M749,562.78v9.1a3,3,0,0,0,1.91,2.82l6.09,2.44a3,3,0,0,0,4.17-2.82v-8.93a3,3,0,0,0-1.84-2.8L753.25,560A3,3,0,0,0,749,562.78Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='794.34 590.63 755.1 562.72 755.43 576.41 784.87 598.44 794.34 590.63'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M844.46,610.47l-60-17.21,16.11-9.86a.28.28,0,0,1,.28,0l43.59,26.48A.35.35,0,0,1,844.46,610.47Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M828.82,618.82l15.64-8.35a.35.35,0,0,0,0-.59L800.89,583.4a.28.28,0,0,0-.28,0l-16.11,9.86'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M828.76,709.86l-45-24.37V593.71a.49.49,0,0,1,.73-.46l44.29,25.51'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M844.46,610.46V653.7s.2,47.11.17,47.12l-15.87,9s0,0,0-.07l.06-91Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M829.64,542.87l-10.75,6.72-45.31-26,45.75,13.13C825.3,540.23,829.64,542.79,829.64,542.87Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M829.64,542.87l.14,42.5s-10.89,7-10.89,6.74c.33.2.15-41.43,0-42.5v0Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M819.33,536.73,773.58,523.6h0s11.11-6.91,11.28-6.91C784.83,516.68,806.1,529,819.33,536.73Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M818.89,549.61c.15,1.07.33,42.7,0,42.5C818.89,592.11,818.78,550.65,818.89,549.61Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M818.89,549.59v0c-.11,1,0,42.5,0,42.5l-46.07-27.62V524.05a.49.49,0,0,1,.73-.46h0Zm-13.08,5.81.61,0c-5-11.51-9.47-6.21-9.47-6.21v.45Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M806.42,555.35l-.61,0L797,549.59v-.45S801.43,543.84,806.42,555.35Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M772.82,564.49c0,.19-.15-.1,0,0Z' fill='#fff' strokeWidth='1.5' />
					    <path d='M818.89,549.61c-.11,1,0,42.5,0,42.5,0,.26,10.89-6.74,10.89-6.74l-.14-42.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M773.55,523.59s11.11-6.91,11.28-6.91c0,0,21.27,12.31,34.5,20.05,6,3.5,10.31,6.06,10.31,6.14l-10.75,6.72'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M772.82,564.49V524.05a.49.49,0,0,1,.73-.46h0l45.31,26v0c.15,1.07.33,42.7,0,42.5l-46.07-27.62'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M772.82,564.49c-.15-.1,0,.19,0,0Z' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M797,549.14s4.48-5.3,9.47,6.21' fill='none' stroke='#000' strokeMiterlimit='10'
					    strokeWidth='1.5' />
					    <path d='M798,553.91l-3.3,2.39-9.26-5.51,3.29-2.39s9.27,5.47,9.27,5.51v8.83l-3.46,2.49'
					    fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round'
					    strokeWidth='1.5' />
					    <path d='M785.43,550.79l9.21,5.42a.12.12,0,0,1,.05.09v8.83a.11.11,0,0,1-.16.1l-9.21-5.06a.11.11,0,0,1-.06-.09v-9.19A.11.11,0,0,1,785.43,550.79Z'
					    fill='#fff' stroke='#000' strokeLinecap='round' strokeLinejoin='round'
					    strokeWidth='1.5' />
					    <path d='M785.72,567.65s2.06,6.17,16.63-1.66' fill='#fff' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M781.65,539.21s4.49-5.3,9.47,6.21' fill='none' stroke='#000'
					    strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					    <polygon points='791.12 575.46 807.9 600.24 814.48 604.16 820.1 601.86 814.48 598.16 804.29 583.36 791.12 575.46'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M738.1,540.8c0,.36-7.54-19.48-13.54-9.81s6.2,26.2,6.2,26.2,4,4.72,5.34,2.54S738.1,540.8,738.1,540.8Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='751.76 562.72 732.1 542.49 732.1 552.5 751.76 571.32 751.76 562.72'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M851.81,654s-8.45-10.21-10.75-4.54-4.37,10.68-4.37,10.68-2.67,5.32,4.37,9.82S851.81,654,851.81,654Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M882,651.87,848.23,666a1.76,1.76,0,0,1-2.35-2.18L848.5,656a1.84,1.84,0,0,1,1-1.07L879,643.05a1.76,1.76,0,0,1,2.35,1.14l1.62,5.56A1.77,1.77,0,0,1,882,651.87Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='881.78 639.73 842.06 616.56 830.58 623.14 870.76 647.62 881.78 639.73'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M880.88,639.08l-8.31,3.71a3,3,0,0,0-1.81,2.89l.25,6.55a3,3,0,0,0,4.27,2.67l8.17-3.64a3,3,0,0,0,1.8-2.82l-.09-6.62A3,3,0,0,0,880.88,639.08Z'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='792.61 690.27 792.61 758.64 802.08 764.16 802.35 695.55 792.61 690.27'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='802.08 764.16 812.33 758.64 812.33 700.96 802.35 695.55 802.08 764.16'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='792.35 758.68 792.35 767.47 779.49 774.97 787.8 779.97 801.82 772.3 801.82 764.2 792.35 758.68'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='812.08 758.68 812.08 777.97 787.8 791.3 779.49 786.63 779.49 774.97 787.8 779.97 801.82 772.3 801.82 764.2 812.08 758.68'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='806.9 697.84 806.9 766.21 816.37 771.72 816.65 703.12 806.9 697.84'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='816.37 771.72 826.63 766.21 826.63 708.52 816.65 703.12 816.37 771.72'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='806.9 766.21 806.9 774.99 794.03 782.49 802.35 787.49 816.37 779.82 816.37 771.72 806.9 766.21'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polygon points='826.63 766.21 826.63 785.49 802.35 798.82 794.03 794.16 794.03 782.49 802.35 787.49 816.37 779.82 816.37 771.72 826.63 766.21'
					    fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M744.35,518l-7.18,6.21h0c-.2-.26-3.08-3.89-1.48-4.7S739,513,744.35,518Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M737.17,524.24l7.18-6.21s-6,15.17-6.17,8A1.72,1.72,0,0,0,737.17,524.24Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M744.35,518c-5.33-5-7,.67-8.67,1.5s1.28,4.44,1.48,4.7c-1.51-.6-4.49.53-7.57.95a11.36,11.36,0,0,1-3.68,0c-3.27-.61-6-3.31-6.23-11.48-.66-21.5,13-9,14-8.33C746.85,513.53,744.35,518,744.35,518Zm-8.43-2a.72.72,0,1,0-.72-.71A.71.71,0,0,0,735.92,516Z'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M736.63,515.28a.72.72,0,1,1-.71-.72A.71.71,0,0,1,736.63,515.28Z'
					    fill='#fff' strokeWidth='1.5' />
					    <polygon points='729.59 525.18 731.52 528.7 729.59 527.97 729.59 525.18'
					    fill='#fff' strokeWidth='1.5' />
					    <polygon points='725.91 525.18 727.18 532.21 725.91 529.71 725.91 525.18'
					    fill='#fff' strokeWidth='1.5' />
					    <path d='M737.17,524.24a1.72,1.72,0,0,1,1,1.79c.17,7.17,6.17-8,6.17-8s2.5-4.5-10.67-12.66c-1-.64-14.66-13.17-14,8.33.26,8.17,3,10.87,6.23,11.48a11.36,11.36,0,0,0,3.68,0c3.08-.42,6.06-1.55,7.57-.95'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M737.17,524.24h0c-.2-.26-3.08-3.89-1.48-4.7s3.34-6.5,8.67-1.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <path d='M736.63,515.28a.72.72,0,1,1-.71-.72A.71.71,0,0,1,736.63,515.28Z'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='725.91 525.18 725.91 529.71 727.18 532.21' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
					    <polyline points='729.59 525.18 729.59 527.97 731.52 528.7' fill='none'
					    stroke='#000' strokeMiterlimit='10' strokeWidth='1.5' />
    				</g>
				</svg>
				}
			</div>
		)
	}
}

export class OrangeBookSvg extends Component  {
	constructor(props) {
	  super(props);
	  this.state = { width: 0, height: 0 };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		const {viewboxx, viewboxy, viewboxwidth, viewboxheight, onSelect, spinefill} = this.props;
		const { width, height } = this.state;

		return (
		<div>
		{width > 768 &&
		<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={viewboxx + " " + viewboxy + " " + viewboxwidth + " " + viewboxheight}  preserveAspectRatio="xMidYMid" className='bookcase_scene'>
    				{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff'>
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase'>
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>

				{/* <g id='wallLinesAndWindow' className={removeLines}> */}
				     <g id='wallLinesAndWindow'>
					    <polyline points='688.5 570 628.5 535.5 -719.5 1314.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' className='shoveLeft' />
					    <line x1='1990' y1='1314' x2='989.5' y2='744.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' className='shoveRight'/>
					    <polygon points='447.5 384.5 447.5 523.5 287.5 616.5 287.5 476.5 447.5 384.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' className='shoveLeft'/>
					    <polyline points='447.5 523.5 427.5 511.5 287.5 593.33' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' className='shoveLeft'/>
					    <line x1='427.5' y1='396' x2='427.5' y2='511.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' className='shoveLeft'/>
					    <line x1='612' y1='-1021.6' x2='628.12' y2='535.21' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' className='shoveUp'/>
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				    <g id='PotPlant' onClick={() => onSelect('default')}>
				        <path d='M863.29,385.74l-3,35.33,0,0-19.67,12.46a0,0,0,0,1-.07,0l-19.22-13.46a.05.05,0,0,1,0,0l-5.32-43,.46-.07a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87Z'
				        fill='#fff' />
				        <g fill='none' stroke='#000' strokeMiterlimit='10'>
				            <path d='M816.46,377a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87,12.19,12.19,0,0,0-3.06-17.08l-13.44-9.25a12.19,12.19,0,0,0-12.59-.74l-11.25,5.92A12.14,12.14,0,0,0,816.46,377Z'
				            />
				            <path d='M839.78,359.19a10,10,0,0,1,5.75,1.78l13.23,9.1a10.53,10.53,0,0,1,4.66,9.63,10.05,10.05,0,0,1-5.55,8L847,393.15a10.19,10.19,0,0,1-4.53,1.07,10.07,10.07,0,0,1-2.68-.36,10.45,10.45,0,0,1-2.7-1.18l-13.77-8.61a10.44,10.44,0,0,1-5-8.78,10,10,0,0,1,5.41-9l11.45-6a7.76,7.76,0,0,1,1.45-.63A10.8,10.8,0,0,1,839.78,359.19Z'
				            />
				            <polyline points='839.78 359.18 839.78 359.19 839.78 393.86 839.78 394.22'
				            />
				            <path d='M816,377.1l5.32,43a.05.05,0,0,0,0,0l19.22,13.46a0,0,0,0,0,.07,0l19.67-12.46,0,0,3-35.33'
				            />
				        </g>
				        <path d='M833.23,389.83a22.69,22.69,0,0,1,5.28-9.44c3.57-3.84,9.33-7.07,11.28-5.51a2.45,2.45,0,0,1,.7,2.27c-.52,2.69-2.1-5.2-11.34,5.06a16.5,16.5,0,0,0-3.79,9.31'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M834.8,391.13c1.72-1.69,2.8-7.54,2-12.69s-3.84-11.05-6.33-10.83a2.4,2.4,0,0,0-1.83,1.5c-1.07,2.52,4.62-3.17,6.62,10.5.56,3.82-1,8.53-2.23,10.16'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M884.57,358.05c22.53,10.44,25.14,28.4,25.14,28.4s-12.49-1.4-38.45.34c-24.78,1.67-37.82-25.33-34.14-33.27S862,347.62,884.57,358.05Z'
				        fill='#fff' />
				        <path d='M871.26,386.79c-24.78,1.67-37.82-25.33-34.14-33.27s24.92-5.9,47.45,4.53,25.14,28.4,25.14,28.4S897.22,385.05,871.26,386.79Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M814.14,377.26c24.78-1.71,34-30.22,29.33-37.59s-25.5-2.48-46.41,10.91S776,382.12,776,382.12,788.18,379.05,814.14,377.26Z'
				        fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <line x1='830.54' y1='388.59' x2='836.6' y2='392.37' fill='none' stroke='#000'
				        strokeMiterlimit='10' />
			    	</g>
				</svg>
				}
				{width <= 768 &&
					<svg id='bookcase_scene' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
				viewBox={(viewboxx + 600) + " " + (viewboxy + 250) + " " + (viewboxwidth - 800)  + " " + (viewboxheight - 350)}  preserveAspectRatio="xMidYMid slice" className='bookcase_scene--initial'>
    				{/* className={cBk} */}
				    <g id='book1' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book1')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='766.32 511.13 766.32 462.62 777.99 468.73 777.21 515.95 766.32 511.13'
				            fill={spinefill[0]} />
				            <polyline points='766.32 462.62 787.71 450.62 787.71 454.37 795.87 459.01'
				            />
				            <line x1='777.99' y1='468.73' x2='799.05' y2='457.29' />
				            <polyline points='777.21 515.95 799.05 503.45 799.05 496.12 799.05 457.29'
				            />
				        </g>
				        <line x1='787.71' y1='454.37' x2='770.93' y2='463.75' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book3' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book3')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='860.11 563.49 860.11 514.98 871.78 521.09 871 568.31 860.11 563.49'
				            fill={spinefill[2]} />
				            <polyline points='860.11 514.98 881.5 502.98 881.5 506.73 889.66 511.38'
				            />
				            <line x1='871.78' y1='521.09' x2='892.84' y2='509.65' />
				            <polyline points='871 568.31 892.84 555.81 892.84 548.48 892.84 509.65'
				            />
				        </g>
				        <line x1='881.5' y1='506.73' x2='864.72' y2='516.11' fill='#fff' strokeWidth='0.75'
				        />
				    </g>
				    <g id='book2' stroke='#000' strokeMiterlimit='10' className='cBookStatic' onClick={() => onSelect('book2')}>
				        <g fill='none' strokeWidth='0.913'>
				            <polygon points='812.62 536.82 812.62 488.31 824.29 494.42 823.5 541.65 812.62 536.82'
				            fill={spinefill[1]}/>
				            <polyline points='812.62 488.31 834.01 476.31 834.01 480.07 842.17 484.71'
				            />
				            <line x1='824.29' y1='494.42' x2='845.35' y2='482.99' />
				            <polyline points='823.5 541.65 845.35 529.15 845.35 521.81 845.35 482.99'
				            />
				        </g>
				        <line x1='834.01' y1='480.07' x2='817.23' y2='489.45' fill='#fff' strokeWidth='0.75'
				        />
				    </g>

				{ /* <g id='whiteFill' fill='#fff' className={showBook ? fadeOut : cBkCase}> */ }
				    <g id='whiteFill' fill='#fff' >
				        <polygon points='989.5 489.5 989.5 744.5 929.5 778.5 929.5 541 929.5 523.5 989.5 489.5'
				        />
				        <path d='M929.5,541V778.5l-241-140v-254l241,139Zm-20,203.5v-209l-201-116v209Z'
				        />
				    </g>
				{ /* <g id='bookcase' className={showBook ? fadeOut : cBkCase}> */}
    				<g id='bookcase' >
					    <polygon  points='748.5 350.5 989.5 489.5 929.5 523.5 688.5 384.5 748.5 350.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polygon  points='929.5 523.5 929.5 778.5 989.5 744.5 989.5 489.5 929.5 523.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline  points='688.5 384.5 688.5 638.5 929.5 778.5' fill='none' stroke='#000'
					    strokeMiterlimit='10' strokeWidth='2' />
					    <polygon points='708.5 419.5 708.5 628.5 909.5 744.5 909.5 535.5 708.5 419.5'
					    fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='2' />
					    <polyline points='909.5 605.33 708.5 489.5 768.86 454.33' fill='none'
					    stroke='#000' strokeMiterlimit='10' />
					    <polyline points='909.5 675 708.5 559 765.39 526.31' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
					    <line x1='708.5' y1='493.67' x2='909.5' y2='609' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='563.33' x2='909.5' y2='679' stroke='#000' strokeMiterlimit='10'
					    fill='url(#Grid_Geometry)' />
					    <line x1='708.5' y1='628.5' x2='765' y2='595.85' fill='none' stroke='#000'
					    strokeMiterlimit='10' />
				    </g>
				{/* <g id='PotPlant' className={showBook ? fadeOut : cBkCase}> */}
				    <g id='PotPlant' onClick={() => onSelect('default')}>
				        <path d='M863.29,385.74l-3,35.33,0,0-19.67,12.46a0,0,0,0,1-.07,0l-19.22-13.46a.05.05,0,0,1,0,0l-5.32-43,.46-.07a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87Z'
				        fill='#fff' />
				        <g fill='none' stroke='#000' strokeMiterlimit='10'>
				            <path d='M816.46,377a12,12,0,0,0,5.61,8.62l13.93,8.7a12.16,12.16,0,0,0,11.91.57l10.76-5.38a11.93,11.93,0,0,0,4.52-3.87,12.19,12.19,0,0,0-3.06-17.08l-13.44-9.25a12.19,12.19,0,0,0-12.59-.74l-11.25,5.92A12.14,12.14,0,0,0,816.46,377Z'
				            />
				            <path d='M839.78,359.19a10,10,0,0,1,5.75,1.78l13.23,9.1a10.53,10.53,0,0,1,4.66,9.63,10.05,10.05,0,0,1-5.55,8L847,393.15a10.19,10.19,0,0,1-4.53,1.07,10.07,10.07,0,0,1-2.68-.36,10.45,10.45,0,0,1-2.7-1.18l-13.77-8.61a10.44,10.44,0,0,1-5-8.78,10,10,0,0,1,5.41-9l11.45-6a7.76,7.76,0,0,1,1.45-.63A10.8,10.8,0,0,1,839.78,359.19Z'
				            />
				            <polyline points='839.78 359.18 839.78 359.19 839.78 393.86 839.78 394.22'
				            />
				            <path d='M816,377.1l5.32,43a.05.05,0,0,0,0,0l19.22,13.46a0,0,0,0,0,.07,0l19.67-12.46,0,0,3-35.33'
				            />
				        </g>
				        <path d='M833.23,389.83a22.69,22.69,0,0,1,5.28-9.44c3.57-3.84,9.33-7.07,11.28-5.51a2.45,2.45,0,0,1,.7,2.27c-.52,2.69-2.1-5.2-11.34,5.06a16.5,16.5,0,0,0-3.79,9.31'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M834.8,391.13c1.72-1.69,2.8-7.54,2-12.69s-3.84-11.05-6.33-10.83a2.4,2.4,0,0,0-1.83,1.5c-1.07,2.52,4.62-3.17,6.62,10.5.56,3.82-1,8.53-2.23,10.16'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M884.57,358.05c22.53,10.44,25.14,28.4,25.14,28.4s-12.49-1.4-38.45.34c-24.78,1.67-37.82-25.33-34.14-33.27S862,347.62,884.57,358.05Z'
				        fill='#fff' />
				        <path d='M871.26,386.79c-24.78,1.67-37.82-25.33-34.14-33.27s24.92-5.9,47.45,4.53,25.14,28.4,25.14,28.4S897.22,385.05,871.26,386.79Z'
				        fill='none' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <path d='M814.14,377.26c24.78-1.71,34-30.22,29.33-37.59s-25.5-2.48-46.41,10.91S776,382.12,776,382.12,788.18,379.05,814.14,377.26Z'
				        fill='#fff' stroke='#000' strokeMiterlimit='10' strokeWidth='0.867' />
				        <line x1='830.54' y1='388.59' x2='836.6' y2='392.37' fill='none' stroke='#000'
				        strokeMiterlimit='10' />
			    	</g>
			    	
				</svg>
				}
			</div>
		)
	}
}