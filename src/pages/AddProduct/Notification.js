import React from 'react';

const Notification = (props) => {
	return (
		<div className={'notifications-container'}>
			<p className={'error-title'}>{props.errorType}</p>
			<p className={'error-desc'}>{props.errorDesc}</p>
		</div>
	);
}

export default Notification;