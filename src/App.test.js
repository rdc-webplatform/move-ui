import { render } from "@testing-library/react";
import { toBeInTheDocument } from '@testing-library/jest-dom';
import App from "./App";

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    const [app] = window.document.getElementsByClassName('App');
    expect(app).toBeInTheDocument();
  });
});
