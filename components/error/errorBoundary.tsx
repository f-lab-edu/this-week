import { Component, ReactNode, cloneElement, ReactElement } from 'react';

interface Props {
  children?: ReactNode;
  fallbackComponent: ({
    error,
    reset,
  }: {
    error: Error;
    reset: () => void;
  }) => ReactElement;
  onReset: () => void;
}

interface State {
  hasError: boolean;
  error?: Error | null;
}

const initialState = { hasError: false, error: null };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidUpdate(_: Props) {
    if (this.state.error === null) return;
  }

  onResetErrorBoundary = () => {
    this.resetErrorBoundary();
    this.props.onReset();
  };

  resetErrorBoundary = () => {
    this.setState(initialState);
  };

  render() {
    const { error, hasError } = this.state;
    const { fallbackComponent, children } = this.props;
    console.log(hasError, error);
    if (hasError && error) {
      return cloneElement(
        fallbackComponent({ error, reset: this.onResetErrorBoundary }),
      );
    }

    return children;
  }
}

export default ErrorBoundary;
