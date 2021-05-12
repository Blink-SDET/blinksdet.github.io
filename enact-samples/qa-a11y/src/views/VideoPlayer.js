import Button from '@enact/moonstone/Button';
import IconButton from '@enact/moonstone/IconButton';
import React from 'react';
import VideoPlayer from '@enact/moonstone/VideoPlayer';

const divStyle = {
	width: '1280px',
	height: '800px'
};

const VideoPlayerView = () => (
	<div style={divStyle}>
		<VideoPlayer title="Downton Abbey" poster="http://media.w3.org/2010/05/sintel/poster.png">
			<source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
			<infoComponents>DTV REC 08:22 THX 16:9</infoComponents>
			<leftComponents><IconButton backgroundOpacity="translucent">star</IconButton></leftComponents>
			<rightComponents><IconButton backgroundOpacity="translucent">flag</IconButton></rightComponents>
			<Button backgroundOpacity="translucent">Add To Favorites</Button>
			<IconButton backgroundOpacity="translucent">search</IconButton>
		</VideoPlayer>
	</div>
);

export default VideoPlayerView;
