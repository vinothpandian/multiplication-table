import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("updates all ten products for positive and negative inputs", () => {
  render(<App />);
  const input = screen.getByLabelText("Enter the multiplicand");
  expect(screen.getByText("9 * 1 = 9")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "7" } });
  expect(screen.getByText("9 * 7 = 63")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "-3" } });
  expect(screen.getByText("9 * -3 = -27")).toBeInTheDocument();
});

it("treats an empty input as zero", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("Enter the multiplicand"), { target: { value: "" } });
  expect(screen.getByText("9 * 0 = 0")).toBeInTheDocument();
});
