import { Component, type ErrorInfo, type ReactNode } from "react";

interface LanyardErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface LanyardErrorBoundaryState {
  failed: boolean;
}

export class LanyardErrorBoundary extends Component<
  LanyardErrorBoundaryProps,
  LanyardErrorBoundaryState
> {
  state: LanyardErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): LanyardErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Interactive lanyard unavailable; using the static badge.", error, info);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
