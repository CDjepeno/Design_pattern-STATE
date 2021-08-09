import { RunApp } from "../src/RunApp";
describe("Run distributer", () => {
  it("Should be return 'OrderBeingPreparedState'", () => {
    expect(RunApp.main1()).toBe("OrderBeingPreparedState");
  });
  it("Should be return right state", () => {
    expect(RunApp.main2()).toBe("status commande: OrderShippedState");
  });
  it("Should be return right state", () => {
    expect(RunApp.main3()).toBe("status commande: CancelledOrderState");
  });
});
