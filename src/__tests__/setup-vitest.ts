import "regenerator-runtime";
import "@testing-library/jest-dom";
import { vi } from "vitest";

/* @ts-ignore */
HTMLCanvasElement.prototype.getContext = () => {
  return {
    fillStyle: "",
    fillRect: vi.fn(),
  };
};

window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.scrollIntoView = vi.fn();

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal("ResizeObserver", ResizeObserverMock);
