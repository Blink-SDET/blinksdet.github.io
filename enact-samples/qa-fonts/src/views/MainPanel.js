import React from 'react';
import Button from '@enact/moonstone/Button';
import Scroller from '@enact/moonstone/Scroller';
import {Panel, Header} from '@enact/moonstone/Panels';
import {onFontsLoaded} from '@enact/moonstone/MoonstoneDecorator/fontGenerator.js';

import FontList from '../components/FontList';

const
	moonstoneIcons = '\u{2B} \u{21A9} \u{22EF} \u{EFFDD} \u{EFFEA} \u{F0028}',
	lgIcons = 'ꔘ ꔧ ꕒ ꕭ ꖀ';

const fonts = {
	standard: [
		'300 1em "Moonstone Miso"',
		'1em "Moonstone Miso"',
		'bold 1em "Moonstone Miso"',
		'100 1em "MuseoSans"',
		'300 1em "MuseoSans"',
		'1em "MuseoSans"',
		'500 1em "MuseoSans"',
		'italic 500 1em "MuseoSans"',
		'700 1em "MuseoSans"',
		'italic 700 1em "MuseoSans"',
		'900 1em "MuseoSans"',
		'italic 900 1em "MuseoSans"',
		['1em "Moonstone Icons"', moonstoneIcons],
		['1em "LG Icons"', lgIcons],
		'300 1em "Moonstone LG Display"',
		'1em "Moonstone LG Display"',
		'bold 1em "Moonstone LG Display"'
	],
	system: [
		'300 1em "Miso"',
		'1em "Miso"',
		'bold 1em "Miso"',
		'100 1em "Museo Sans"',
		'300 1em "Museo Sans"',
		'1em "Museo Sans"',
		'500 1em "Museo Sans"',
		'italic 500 1em "Museo Sans"',
		'700 1em "Museo Sans"',
		'italic 700 1em "Museo Sans"',
		'900 1em "Museo Sans"',
		'italic 900 1em "Museo Sans"',
		['1em "Moonstone"', moonstoneIcons],
		['1em "LG Display_Dingbat"', lgIcons],
		'1em "LG Display-Light"',
		'1em "LG Display-Regular"',
		'1em "LG Display GP4_HK-Light"',
		'1em "LG Display GP4_HK-Regular"'
	],
	locale: [
		['1em "LG Display_Amharic"', 'አማርኛ'],
		'1em "LG Display_JP"',
		['1em "LG Display_ML"', 'മലയാളം'],
		['1em "LG Display_Oriya"', 'ଓଡ଼ିଆ ଭାଷା'],
		['1em "LG Display_Urdu"', 'مجھے چکّر آرہے ہیں']
	]
};

class MainPanel extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loaded: false
		};
		onFontsLoaded(() => this.setState({loaded: true}));
	}

	render () {
		return (
			<Panel {...this.props}>
				<Header type="compact">
					<title>Font Verification</title>
					<titleBelow>{'Fonts Loaded: ' + this.state.loaded}</titleBelow>
					<Button>A Miso Button</Button>
				</Header>
				<Scroller>
					<FontList fonts={fonts.standard}>Moonstone Defined Fonts</FontList>
					<FontList fonts={fonts.system}>System Fonts (Locally Installed)</FontList>
					<FontList fonts={fonts.locale}>Locale-specific Fonts</FontList>
				</Scroller>
			</Panel>
		);
	}
}

export default MainPanel;
