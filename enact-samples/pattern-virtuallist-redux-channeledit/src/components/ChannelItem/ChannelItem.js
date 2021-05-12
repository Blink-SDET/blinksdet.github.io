import React from 'react';
import PropTypes from 'prop-types';
import kind from '@enact/core/kind';
import CheckboxItem from '@enact/moonstone/CheckboxItem';
import {connect} from 'react-redux';
import {selectItem} from '../../actions/';
import css from './ChannelItem.less';

const ChannelItem = kind({
	name: 'ChannelItem',

	propTypes: {
		channelId: PropTypes.string,
		channelNumber: PropTypes.string,
		locked: PropTypes.bool,
		selectChannel: PropTypes.func,
		selected: PropTypes.bool
	},

	styles: {
		css,
		className: 'channelItem'
	},

	computed: {
		content: ({locked, channelNumber}) => locked ? `${channelNumber} LOCKED` : `${channelNumber}`
	},

	render: ({content, selectChannel, selected, ...rest}) => {
		delete rest.channelId;
		delete rest.locked;
		delete rest.channelNumber;

		return (
			<CheckboxItem {...rest} onClick={selectChannel} selected={selected}>
				{`Channel ${content}`}
			</CheckboxItem>
		);
	}
});

const mapStateToProps = ({channels, ...rest}, {channelId}) => ({
	selected: channels.selectedChannels.has(channelId),
	locked: channels.channels[channelId].locked,
	channelNumber: channels.channels[channelId].channelNumber
});


const mapDispatchToProps = (dispatch, {channelId}) => {
	return {
		selectChannel: () => dispatch(selectItem(channelId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelItem);
