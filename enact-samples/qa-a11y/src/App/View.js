import {Header, Panel} from '@enact/moonstone/Panels';
import React from 'react';
import PropTypes from 'prop-types';

const View = ({className, isHeader = true, title, view: ComponentView}) => {
	let header;

	if (isHeader) {
		header = <Header title={title} type="compact" />;
	}

	return (
		<Panel aria-owns="floatLayer" className={className}>
			{header}
			<ComponentView />
		</Panel>
	);
};

View.propTypes = {
	isHeader: PropTypes.bool,
	title: PropTypes.string,
	view: PropTypes.func
};

export default View;
