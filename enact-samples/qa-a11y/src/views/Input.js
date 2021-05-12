import Divider from '@enact/moonstone/Divider';
import Input from '@enact/moonstone/Input';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import React from 'react';

const inputColumn = {
	display: 'inline-block',
	width: '50%',
	verticalAlign: 'top'
};

const InputView = () => (
	<div>
		<div style={inputColumn}>
			<Divider>Default Input</Divider>
			<Input />
			<Input placeholder="Disabled input" disabled />
			<Input iconAfter="lock" />
			<Input placeholder="Enter number" type="number" />
			<Input placeholder="Enter password" type="password" />
			<Input placeholder="Dismiss on Enter" dismissOnEnter />
			<Input defaultValue="Initial value" />
			<Input placeholder="Placeholder" />
		</div>
		<div style={inputColumn}>
			<Divider>Expandable Input</Divider>
			<ExpandableInput title="No noneText" />
			<ExpandableInput title="Disabled Input" noneText="I am disabled." disabled />
			<ExpandableInput title="Input with noneText" noneText="Nothing inputted" />
			<ExpandableInput title="Input with defaultValue" defaultValue="Initial value" />
			<ExpandableInput title="Input with Placeholder" noneText="No input" placeholder="Placeholder" />
			<ExpandableInput title="Input with Password" type="password" />
			<Divider>Aria-labeled Input</Divider>
			<Input iconBefore="plus" aria-label="add input" />
			<ExpandableInput title="Expandable Input" aria-label="expandable input" />
		</div>
	</div>
);

export default InputView;
