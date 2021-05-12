import Item from '@enact/moonstone/Item';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React, {Component} from 'react';
import ri from '@enact/ui/resolution';
import {VirtualListNative as VirtualList} from '@enact/moonstone/VirtualList/VirtualListNative.js';

import css from './App.less';

const
	items = [],
	languages = [
		'한국어 - 한국',
		'English - United States',
		'Português - Brasil',
		'Português - Portugal',
		'Čeština - Česká republika',
		'Dansk - Danmark',
		'Deutsch - Deutschland',
		'Ελληνική γλώσσα - Ελλάδα',
		'Español - España',
		'Suomi - Suomi'
	];

for (let i = 0; i < 1000; i++) {
	items.push({title: ('00' + i).slice(-3) + ' - ' + languages[i % 10]});
}

class VirtualListNativeSample extends Component {
	getScrollTo = (scrollTo) => {
		this.scrollTo = scrollTo;
	}

	componentDidMount () {
		this.scrollTo({index: 10, animate: false});
	}

	renderItem = ({data, index, key, ...rest}) => (
		<Item {...rest} key={key} className={css.item}>
			{data[index].title}
		</Item>
	)

	render () {
		return (
			<div style={{padding: 0}} {...this.props}>
				<VirtualList
					cbScrollTo={this.getScrollTo}
					component={this.renderItem}
					data={items}
					dataSize={items.length}
					focusableScrollbar
					itemSize={ri.scale(62)}
				/>
			</div>
		);
	}
};

export default MoonstoneDecorator(VirtualListNativeSample);
