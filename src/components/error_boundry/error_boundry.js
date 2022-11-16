import React from 'react';
import ErrorIndicator from '../error_indicator';

export default class ErrorBoundry extends React.Component {
	state = {
		hasError: false,
	};

	componentDidCatch() {
		this.setState({
			hasError: true,
		});
	};

	render() {
		return this.state.hasError ? <ErrorIndicator /> : this.props.children;
	};
}
