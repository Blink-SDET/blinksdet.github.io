import React from 'react';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {ActivityPanels} from '@enact/moonstone/Panels';

import MainPanel from '../views/MainPanel';

class App extends React.Component {
	render () {
		return (
			<ActivityPanels {...this.props}>
				<MainPanel />
			</ActivityPanels>
		);
	}
}

export default MoonstoneDecorator(App);
