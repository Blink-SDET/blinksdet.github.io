import {ActivityPanels, Panel, Header} from '@enact/moonstone/Panels';
import Item from '@enact/moonstone/Item';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import Spotlight from '@enact/spotlight';

const itemList = [];
for (let i = 0; i < 5; i++) {
	itemList.push('item' + i);
}

class PanelsView extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			panelIndex: 0
		};
	}

	componentWillMount () {
		Spotlight.setPointerMode(false);
	}

	nextPanel = () => {
		this.setState({panelIndex: 1});
	}

	prevPanel = () => {
		this.setState({panelIndex: 0});
	}

	render () {
		return (
			<ActivityPanels index={this.state.panelIndex} onSelectBreadcrumb={this.prevPanel}>
				<Panel>
					<Header title="Panel 0" />
					{
						itemList.map((item, key) => {
							return (
								<Item onClick={this.nextPanel} key={key}>{item}</Item>
							);
						})
					}
				</Panel>
				<Panel>
					<Header title="Panel 1" />
					<Scroller>
						{
							itemList.map((item, key) => {
								return (
									<Item onClick={this.prevPanel} key={key}>{item}</Item>
								);
							})
						}
					</Scroller>
				</Panel>
			</ActivityPanels>
		);
	}
}

export default PanelsView;
