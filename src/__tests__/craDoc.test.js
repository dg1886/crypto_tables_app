import {
  cleanup, render, screen, waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { mockGraph } from "../__mocks__/moc";
import App from "../App";
import { validationsLogin, validationsRegestration } from "../components/Helpers/formValidation/validationsForForm";
import NavigationTabs from "../components/Navigation/NavigationTabs";
import SwitchButton from "../components/Navigation/SwitchButton";
import MainPage from "../pages/Main";
import NotificationProvider from "../services/errorContext";
import InfoForGraphContextProvider, { InfoForGraphContext } from "../services/infoForGraphContext";
import ThemeContextProvider from "../services/themeContext";

jest.mock("../components/Helpers/asyncRecursion", () => ({
  synchronousRequst: async () => [mockGraph.mainGraph,
    mockGraph.lineChartGraph,
    mockGraph.transactionGraph,
    mockGraph.marketingGraph,
    mockGraph.marketingNumbers],
}));

const setup = () => render(
  <RecoilRoot>
    <ThemeContextProvider>
      <NotificationProvider>
        <InfoForGraphContextProvider>
          <MainPage />
        </InfoForGraphContextProvider>
      </NotificationProvider>
    </ThemeContextProvider>
  </RecoilRoot>,
);

// describe("check render components", () => {
//   it("App.js", () => {
//     render(<App />);
//   });
//   it("MainPage with with context", () => {
//     render(
//       <RecoilRoot>
//         <ThemeContextProvider>
//           <NotificationProvider>
//             <InfoForGraphContextProvider>
//               <MainPage />
//             </InfoForGraphContextProvider>
//           </NotificationProvider>
//         </ThemeContextProvider>
//       </RecoilRoot>,
//     );
//     expect(screen.getByText("bitcoin")).toBeInTheDocument();
//     expect(screen.getByText("Recent transaction")).toBeInTheDocument();
//     expect(screen.getByText("Marketing Values")).toBeInTheDocument();
//   });
// });

describe("test context and functions", () => {
  it("graph context", async () => {
    act(() => setup());
    await waitFor(() => {
      expect(screen.getByText("USD")).toBeInTheDocument();
    });
  });
});

// describe("validation", () => {
//   describe("regestration", () => {
//     const { email, password, confirmPassword } = validationsRegestration;
//     it("email-reg", () => {
//       expect(email("")).toEqual({ email: "Please enter Email" });
//       expect(email("exampleGmailCom")).toEqual({ email: "Invalid email. Please check!" });
//       expect(email("example@gmail.com")).toEqual({ email: "" });
//     });

//     it("password-reg", () => {
//       expect(password("")).toEqual({ password: "Please enter Password" });
//       expect(password("00")).toEqual({ password: "No less than 3 and more than 10 characters" });
//       expect(password("*2.@")).toEqual({ password: "Only latin letters and numbers" });
//       expect(password("example")).toEqual({ password: "" });
//     });

//     it("confirm password-reg", () => {
//       expect(confirmPassword("")).toEqual({ confirmPassword: "Please enter Password" });
//       expect(confirmPassword("EXAMPLE")).toEqual({ confirmPassword: "Password and Confirm Password does not match" });
//       expect(confirmPassword("example")).toEqual({ confirmPassword: "" });
//     });
//   });
//   describe("login", () => {
//     const { email, password } = validationsLogin;
//     it("email-log", () => {
//       expect(email("")).toEqual({ email: "Please enter Email" });
//       expect(email("exampleGmailCom")).toEqual({ email: "Invalid email. Please check!" });
//       expect(email("example@gmail.com")).toEqual({ email: "" });
//     });

//     it("password-log", () => {
//       expect(password("")).toEqual({ password: "Please enter Password" });
//       expect(password("00")).toEqual({ password: "No less than 3 and more than 10 characters" });
//       expect(password("*2.@")).toEqual({ password: "Only latin letters and numbers" });
//       expect(password("example")).toEqual({ password: "" });
//     });
//   });
// });

// it("navigation tabs", () => {
//   render(<MemoryRouter><ThemeContextProvider><NavigationTabs /></ThemeContextProvider></MemoryRouter>);
//   const wallet = screen.getByText("wallet");
//   expect(wallet).toBeInTheDocument();
//   userEvent.click(wallet);
//   expect(screen.getByTestId("wallet")).toBeInTheDocument();
// });

// it("switch theme", () => {
//   render(<ThemeContextProvider><SwitchButton /></ThemeContextProvider>);
//   userEvent.click(screen.getByText(""));
// });
