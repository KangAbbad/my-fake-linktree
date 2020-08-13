import React, { lazy, Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App'));
const rootElement = document.getElementById("root");

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (error) {
    return { hasError: true };
  }

  render () {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
};

const renderLoader = () => <div className='loader-wrapper'>Loading...</div>;

const Root = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={renderLoader()}>
        <App />
      </Suspense>
    </ErrorBoundary>
  )
}

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Root />, rootElement);
} else {
  ReactDOM.render(<Root />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
