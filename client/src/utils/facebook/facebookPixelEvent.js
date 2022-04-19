export const ViewedCart = () => {
  window.fbq("track", "ViewedCart");
};

export const InitiatedStripeCheckout = () => {
  window.fbq("track", "InitiatedStripeCheckout");
};

export const ClickedCashApp = () => {
  window.fbq("track", "ClickedCashApp");
};

export const ClickedVenmo = () => {
  window.fbq("track", "ClickedVenmo");
};

export const ClickedPaymentOptions = () => {
  window.fbq("track", "ClickedPaymentOptions");
};

export const SubmittedOrderForm = () => {
  window.fbq("track", "SubmittedOrderForm");
};
