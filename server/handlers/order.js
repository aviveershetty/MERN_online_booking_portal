const db = require("../models");

exports.showOrders = async (req, res, next) => {
  try {
    const orders = await db.Order.find().populate("user", ["username", "id"]);
    // .populate('voted', ['username', 'id']);

    res.status(200).json(orders);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.userOrders = async (req, res, next) => {
  const { id } = req.decoded;
  try {
    const user = await db.User.findById(id).populate("orders");

    res.status(200).json(user.orders);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.createOrder = async (req, res, next) => {
  const { id } = req.decoded;
  const { quantity, location } = req.body;
  try {
    const user = await db.User.findById(id);
    const order = await db.Order.create({ quantity, user, location });
    user.orders.push(order._id);
    await user.save();

    res.status(201).json({ ...order._doc, user: user._id });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await db.Order.findById(id).populate("user", [
      "username",
      "id"
    ]);
    // .populate('voted', ['username', 'id']);
    if (!order) throw new Error("No order found");

    res.status(200).json(order);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  const { id: orderId } = req.params;
  const { id: userId } = req.decoded;
  try {
    const order = await db.Order.findById(orderId);
    if (!order) throw new Error("No order found");
    if (order.user && order.user.toString() !== userId) {
      throw new Error("Unauthorized access");
    }

    await order.remove();
    return res.status(202).json({ order, deleted: true });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
