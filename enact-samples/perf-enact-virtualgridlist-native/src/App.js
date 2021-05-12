import {GridListImageItem, VirtualGridListNative as VirtualGridList} from '@enact/moonstone/VirtualList/VirtualListNative.js';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React, {Component} from 'react';
import ri from '@enact/ui/resolution';

import css from './App.less';

const items = [];

for (let i = 0; i < 1000; i++) {
	let color = Math.floor((Math.random() * (0x1000000 - 0x101010)) + 0x101010).toString(16),
		count = ('00' + i).slice(-3);
	items.push({
		text: 'Item ' + count,
		subText: 'SubItem ' + count,
		url: 'http://placehold.it/193x150/' + color + '/ffffff&text=Image ' + i
	});
}

class VirtualGridListNativeSample extends Component {
	getScrollTo = (scrollTo) => {
		this.scrollTo = scrollTo;
	}

	componentDidMount () {
		this.scrollTo({index: 19, animate: false});
	}

	renderItem = ({data, index, key, ...rest}) => {
		return (
			<GridListImageItem
				{...rest}
				caption={data[index].text}
				className={css.gridListItem}
				key={key}
				source={data[index].url}
				subCaption={data[index].subText}
			/>
		);
	}

	render () {
		return (
			<div style={{padding: 0}} {...this.props}>
				<VirtualGridList
					cbScrollTo={this.getScrollTo}
					component={this.renderItem}
					data={items}
					dataSize={items.length}
					focusableScrollbar
					itemSize={{minWidth: ri.scale(316), minHeight: ri.scale(300)}}
					spacing={ri.scale(67)}
				/>
			</div>
		);
	}
};

export default MoonstoneDecorator(VirtualGridListNativeSample);
