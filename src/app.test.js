import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "./App";


// test ID's on html for what we are testing for

test("test input field for url", async () => {
  render(<App />);

  const dummyUrl = "http://test.com";
  const formInput = screen.getByTestId('formInput');
  const goButton = screen.getByTestId('goButton');

  fireEvent.change(formInput, { target: { value: dummyUrl } });
  fireEvent.submit(goButton)

  const testValue = `URL:${dummyUrl}`;
  const badTest = `URL: notWorking`;
  // await screen.findByText(testValue);
  await waitFor(() => {
    expect(screen.queryByText(`URL: ${dummyUrl}`).toBeInTheDocument());
    expect(screen.queryByText(`URL: ${dummyUrl}`).not.toBeInTheDocument())
  })
})