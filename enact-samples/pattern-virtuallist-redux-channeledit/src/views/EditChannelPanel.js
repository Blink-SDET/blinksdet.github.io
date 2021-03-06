import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Button from '@enact/moonstone/Button';
import {lockItems, unlockItems} from '../actions/';
import ChannelList from '../components/ChannelList';

const EditChannelPanel = kind({
	name: 'EditChannelPanel',

	propTypes: {
		lockChannels: PropTypes.func,
		unlockChannels: PropTypes.func
	},

	render: ({lockChannels, unlockChannels, ...rest}) => {
		return (
			<Panel {...rest}>
				<Header title="Edit All Channels">
					<Button onClick={lockChannels}>Lock</Button>
					<Button onClick={unlockChannels}>Unlock</Button>
				</Header>
				<ChannelList />
			</Panel>
		);
	}
});

const mapDispatchToProps = (dispatch) => {
	return {
		lockChannels: () => dispatch(lockItems()),
		unlockChannels: () => dispatch(unlockItems())
	};
};


export default connect(null, mapDispatchToProps)(EditChannelPanel);
