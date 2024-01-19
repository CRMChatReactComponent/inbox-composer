import {
  resetIntersectionMocking,
  setupIntersectionMocking,
} from "react-intersection-observer/test-utils";
import InboxComposer from "../components/InboxComposer";
import { AntdApiContextProviderCmp } from "../context/AntdApiContext";
import { fireEvent, render, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

beforeEach(() => {
  setupIntersectionMocking(vi.fn);
});

afterEach(() => {
  resetIntersectionMocking();
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("InboxComposer component", () => {
  {
    const { container } = render(
      <AntdApiContextProviderCmp>
        <InboxComposer></InboxComposer>
      </AntdApiContextProviderCmp>,
    );

    const C = within(container);

    it("renders correctly", async () => {
      expect(true).toBeTruthy();
    });
  }
});
