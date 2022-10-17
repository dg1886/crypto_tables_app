import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Private from "../hoc/Private";

let store = {};
beforeAll(() => {
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.clear = jest.fn();
});

beforeEach(() => {
  store = {};
  Storage.prototype.getItem = jest.fn((key) => {
    return store[key] || null;
  });
  Storage.prototype.setItem = jest.fn((key, data) => {
    store[key] = data;
  });
});

afterEach(() => {
  Storage.prototype.clear = jest.fn(() => {
    store = {};
  });
});

describe("private", () => {
  const MocChildren = () => (
    <>
      <h1>Children</h1>
    </>
  );

  const MocLogin = () => (
    <>
      <div>Mock Login</div>
    </>
  );

  it("render private components if user in localStorage", () => {
    localStorage.setItem("user", "Name");
    localStorage.getItem("user");

    render(
      <HashRouter>
        <Routes>
          <Route path="/login" element={<MocLogin />} />
          <Route
            path="/"
            element={(
              <Private>
                <MocChildren />
              </Private>
            )}
          />
        </Routes>
      </HashRouter>,
    );

    expect(localStorage.getItem)
      .toHaveBeenCalled();
    expect(screen.getByText("Children"))
      .toBeInTheDocument();
  });

  it("render login page if user is not registered", () => {
    Storage.prototype.clear();

    render(
      <HashRouter>
        <Routes>
          <Route path="/login" element={<MocLogin />} />
          <Route
            path="/"
            element={(
              <Private>
                <div>Test component</div>
              </Private>
            )}
          />
        </Routes>
      </HashRouter>,
    );

    expect(screen.getByText("Mock Login"))
      .toBeInTheDocument();
  });
});
