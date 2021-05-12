import React from 'react';
import PropTypes from 'prop-types';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Item from '@enact/moonstone/Item';

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		onClick: PropTypes.func
	},

	render: ({onClick, ...rest}) => (
		<Panel {...rest}>
			<Header title="Channel Manager" />
			<Item onClick={onClick}>Edit All Channels</Item>
		</Panel>
	)
});

export default MainPanel;
