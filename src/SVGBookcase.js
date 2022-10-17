/* React Components */
import React, { Component } from 'react';

/* 3rd-party Components */
import { DefaultSvg, BlueBookSvg, YellowBookSvg, OrangeBookSvg } from './DefaultSvg';

//here's the Bookcase class where we render our bookcase scene! So not just the bookcase itself, but the whole scene with books, robots, walls and windows.
//switch out the scene based on which book was clicked, basically!
class SVGBookcase extends Component {

	render() {
		const { viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight, spineFill, onSelect, switchBook } = this.props;

		return (
			<div>
			{switchBook === 'default' &&
			<DefaultSvg 
				viewboxx={viewBoxX}
				viewboxy={viewBoxY}
				viewboxwidth={viewBoxWidth}
				viewboxheight={viewBoxHeight}
				onSelect={onSelect}
				spinefill={spineFill}
			/>
			}
			{switchBook === 'book1' &&
			<BlueBookSvg 
				viewboxx={viewBoxX}
				viewboxy={viewBoxY}
				viewboxwidth={viewBoxWidth}
				viewboxheight={viewBoxHeight}
				onSelect={onSelect}
				spinefill={spineFill}
			/>
			}
			{switchBook === 'book2' &&
			<YellowBookSvg 
				viewboxx={viewBoxX}
				viewboxy={viewBoxY}
				viewboxwidth={viewBoxWidth}
				viewboxheight={viewBoxHeight}
				onSelect={onSelect}
				spinefill={spineFill}
			/>
			}
			{switchBook === 'book3' &&
			<OrangeBookSvg 
				viewboxx={viewBoxX}
				viewboxy={viewBoxY}
				viewboxwidth={viewBoxWidth}
				viewboxheight={viewBoxHeight}
				onSelect={onSelect}
				spinefill={spineFill}
			/>
			}
			</div>
		)
	}
}

export default SVGBookcase;