const getTemplate = name => {
  return `
import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ${name} extends Component {
	state = {};

	render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React - ${name}
                    </a>
                </header>
            </div>
        );
	}
}

${name}.defaultProps = {};
${name}.propTypes = {};

export default ${name};
`;
};

export default getTemplate;
