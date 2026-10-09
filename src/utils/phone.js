// "+91 98765 43210" -> "9876543210". Returns "" when it isn't a valid 10-digit Indian mobile number.
export function cleanIndianMobile(value) {
  let digits = String(value).replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  return /^[6-9]\d{9}$/.test(digits) ? digits : "";
}
