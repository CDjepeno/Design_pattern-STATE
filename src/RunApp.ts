import { Order } from "./classes/Order";

export class RunApp {
  static main1() {
    const order = new Order();

    return `${order.getState().constructor.name}`;
  }
  static main2() {
    const order = new Order();
    order.getState().verifyPayment();
    order.getState().shipOrder();

    return `status commande: ${order.getState().constructor.name}`;
  }
  static main3() {
    const order = new Order();
    order.getState().verifyPayment();
    order.getState().cancelOrder();

    return `status commande: ${order.getState().constructor.name}`;
  }
}
