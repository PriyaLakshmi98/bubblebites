// 299999 -> "₹2,99,999" (Indian digit grouping)
export const formatPrice = (amount) =>
  amount == null ? null : `₹${new Intl.NumberFormat("en-IN").format(amount)}`;
