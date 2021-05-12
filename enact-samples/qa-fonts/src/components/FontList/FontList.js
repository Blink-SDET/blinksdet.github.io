import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@enact/moonstone/Divider';
import {ItemOverlay} from '@enact/moonstone/Item';

import Status from '../Status';

import css from './FontList.less';

const FontList = kind({
	name: 'FontList',

	propTypes: {
		fonts: PropTypes.array
	},

	styles: {
		css,
		className: 'list'
	},

	render: ({children, fonts, ...rest}) => {
		return (
			<section {...rest}>
				<Divider>{children}</Divider>
				{fonts && fonts.map((font, i) => {
					let sample;
					if (Array.isArray(font)) [font, sample] = font;
					const fontForDisplay = font.replace('1em ', '');
					return (
						<ItemOverlay key={i} style={{display: 'flex'}}>
							<overlayBefore>
								{document.fonts.check(font) ?
									<Status loaded>Loaded</Status> :
									<Status>Not Loaded</Status>
								}
							</overlayBefore>
							{fontForDisplay}
							<overlayAfter>
								<span style={{font: font + ', cursive'}}>{sample || fontForDisplay}</span>
							</overlayAfter>
						</ItemOverlay>
					);
				})}
			</section>
		);
	}
});

export default FontList;
