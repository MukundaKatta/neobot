import { describe, it, expect } from "vitest";
import { Neobot } from "../src/core.js";
describe("Neobot", () => {
  it("init", () => { expect(new Neobot().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Neobot(); await c.manage(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Neobot(); await c.manage(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
