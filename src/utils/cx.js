// Join class names, skipping anything falsy:  cx("btn", isOpen && "is-open", className)
export const cx = (...parts) => parts.filter(Boolean).join(" ");
