import "@testing-library/jest-dom";
import { Mocked, vi } from "vitest";

import { render, screen, within, fireEvent, act } from "@/__tests__/test-utils";

import App from "@/pages/auth/login";
import axiosWithConfig from "@/utils/apis/axios-with-config";

vi.mock("@/utils/apis/axios-with-config");

const mockedAxios = axiosWithConfig as Mocked<typeof axiosWithConfig>;

describe("Login Page", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });
  });

  describe("Renders the page", () => {
    it("should render the page", () => {
      const form = screen.getByTestId("form-login");
      expect(form).toBeTruthy();

      expect(within(form).getByTestId("input-email")).toBeTruthy();
      expect(within(form).getByTestId("input-password")).toBeTruthy();
      expect(within(form).getByTestId("btn-submit")).toBeTruthy();
    });

    it("should displays value inside input component", () => {
      const form = screen.getByTestId("form-login");
      const email = within(form).getByTestId("input-email");
      const password = within(form).getByTestId("input-password");

      fireEvent.change(email, {
        target: { value: "test@mail.com" },
      });
      fireEvent.change(password, {
        target: { value: "abc5dasar" },
      });

      expect(email).toHaveValue("test@mail.com");
      expect(password).toHaveValue("abc5dasar");
    });
  });

  describe("Action for Login page", async () => {
    it("should show error message when some of input is missing a value", async () => {
      const form = screen.getByTestId("form-login");
      await act(async () => {
        fireEvent.click(within(form).getByTestId("btn-submit"));
      });

      expect(within(form).getByText("Email is required")).toBeTruthy();
      expect(
        within(form).getByText("Password must be at least 6 characters")
      ).toBeTruthy();
    });

    it("should display failed toast when using incorrect credential (password)", async () => {
      const form = screen.getByTestId("form-login");
      const email = within(form).getByTestId("input-email");
      const password = within(form).getByTestId("input-password");

      fireEvent.change(email, {
        target: { value: "test@mail.com" },
      });
      fireEvent.change(password, {
        target: { value: "abc5dasa" },
      });

      mockedAxios.post.mockRejectedValueOnce({
        data: {
          message: "Invalid password.",
        },
      });

      await act(async () => {
        fireEvent.click(within(form).getByTestId("btn-submit"));
      });

      setTimeout(() => {
        expect(screen.getByText("Invalid.")).toBeTruthy();
      }, 2000); // TODO: change this codes because this toast not covered by test
    });

    it("should display failed toast when using incorrect credential (email)", async () => {
      const form = screen.getByTestId("form-login");
      const email = within(form).getByTestId("input-email");
      const password = within(form).getByTestId("input-password");

      fireEvent.change(email, {
        target: { value: "tester@mail.com" },
      });
      fireEvent.change(password, {
        target: { value: "abc5dasar" },
      });

      mockedAxios.post.mockRejectedValueOnce({
        data: {
          message: "User not found, you must register first.",
        },
      });

      await act(async () => {
        fireEvent.click(within(form).getByTestId("btn-submit"));
      });

      setTimeout(() => {
        expect(
          screen.getByText("User not found, you must register first.")
        ).toBeTruthy();
      }, 2000); // TODO: change this codes because this toast not covered by test
    });

    it("should display successful toast when using correct credential", async () => {
      const form = screen.getByTestId("form-login");
      const email = within(form).getByTestId("input-email");
      const password = within(form).getByTestId("input-password");

      fireEvent.change(email, {
        target: { value: "test@mail.com" },
      });
      fireEvent.change(password, {
        target: { value: "abc5dasar" },
      });

      mockedAxios.post.mockRejectedValueOnce({
        data: {
          message: "Login successfully",
          payload: { token: "random-string" },
        },
      });

      await act(async () => {
        fireEvent.click(within(form).getByTestId("btn-submit"));
      });

      setTimeout(() => {
        expect(screen.getByText("Login successfully")).toBeTruthy();
      }, 2000); // TODO: change this codes because this toast not covered by test
    });
  });
});
