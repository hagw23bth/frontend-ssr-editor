import { render, screen } from "@testing-library/react";

// 🟢 mocka react-router-dom för att slippa verklig router
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(), // navigate blir en dummy-funktion
}));

import DocumentForm from "../components/DocumentForm";

test("renderar formuläret med titel och innehåll", () => {
  render(<DocumentForm />);

  expect(screen.getByPlaceholderText(/Skriv titel här/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Skriv innehåll här/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Skapa/i })).toBeInTheDocument();
});
