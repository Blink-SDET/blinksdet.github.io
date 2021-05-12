import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import kind from '@enact/core/kind';
import {VirtualList} from '@enact/moonstone/VirtualList';
import ChannelItem from '../ChannelItem';

const renderComponent = ({data, index, ...rest}) => {
	return <ChannelItem {...rest} channelId={data[index]} />;
};

renderComponent.propTypes = {
	data: PropTypes.array,
	index: PropTypes.number,
	key: PropTypes.number
};

const ChannelList = kind({
	name: 'ChannelList',

	propTypes: {
		channels: PropTypes.array,
		dispatch: PropTypes.func
	},
	render: ({channels, ...rest}) => {
		delete rest.dispatch;

		return (
			<VirtualList
				{...rest}
				data={channels}
				dataSize={channels.length}
				direction="vertical"
				itemSize={60}
				component={renderComponent}
			/>
		);

	}
});

const mapStateToProps = ({channels}) => ({
	channels: channels.channelsOrder
});

export default connect(mapStateToProps)(ChannelList);
