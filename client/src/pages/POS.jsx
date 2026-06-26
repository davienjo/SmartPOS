// ─────────────────────────────────────
// IMPORTS — getting our tools
// ─────────────────────────────────────
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./POS.css";

// ─────────────────────────────────────
// THE POS COMPONENT
// ─────────────────────────────────────
function POS() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [completedSale, setCompletedSale] = useState(null);

  // ── PAYMENT METHOD STATE ──

  const [showPaymentChoice, setShowPaymentChoice] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  // "cash" | "mpesa" | "split"
  const [splitCash, setSplitCash] = useState("");
  const [splitMpesa, setSplitMpesa] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    if (product.stock === 0) {
      alert(`${product.name} is out of stock!`);
      return;
    }

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        alert(`Only ${product.stock} ${product.name} available!`);
        return;
      }

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1, originalPrice: product.price },
      ]);
    }
  };

  // ─────────────────────────────────────
  // OVERRIDE PRICE
  // Cashier can type a new price for this item.
  // originalPrice (set when added to cart) never changes,
  // so the owner can always see what it was discounted from.
  // ─────────────────────────────────────
  const updateItemPrice = (productId, newPrice) => {
    const price = parseFloat(newPrice);

    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              price: Number.isNaN(price) || price < 0 ? item.price : price,
            }
          : item,
      ),
    );
  };

  const increaseQty = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    const product = products.find((p) => p.id === productId);

    if (cartItem.quantity >= product.stock) {
      alert(`Only ${product.stock} in stock!`);
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem.quantity === 1) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const cartItemCount = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const fmt = (amount) => {
    return `KSh ${Number(amount || 0).toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // OPEN PAYMENT CHOICE MODAL

  const openPaymentChoice = () => {
    if (cart.length === 0) return;
    setPaymentMethod("cash");
    setSplitCash("");
    setSplitMpesa("");
    setPaymentError("");
    setShowPaymentChoice(true);
  };

  const closePaymentChoice = () => {
    setShowPaymentChoice(false);
    setPaymentError("");
  };

  // CONFIRM PAYMENT

  const handlePay = async () => {
    if (cart.length === 0) return;

    if (paymentMethod === "split") {
      const cashAmt = parseFloat(splitCash) || 0;
      const mpesaAmt = parseFloat(splitMpesa) || 0;
      if (Math.abs(cashAmt + mpesaAmt - cartTotal) > 0.01) {
        setPaymentError(
          `Cash + MPESA must add up to ${fmt(cartTotal)}. Currently: ${fmt(cashAmt + mpesaAmt)}`,
        );
        return;
      }
    }

    setPaying(true);
    setPaymentError("");

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      const saleData = {
        userId: user.id,
        paymentMethod,
        cashAmount:
          paymentMethod === "split" ? parseFloat(splitCash) || 0 : undefined,
        mpesaAmount:
          paymentMethod === "split" ? parseFloat(splitMpesa) || 0 : undefined,
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          originalPrice: item.originalPrice,
          costPrice: item.costPrice || 0,
        })),
      };

      const res = await axios.post("http://localhost:5000/api/sales", saleData);

      setCompletedSale(res.data.sale);
      setShowReceipt(true);
      setShowPaymentChoice(false);
      clearCart();
      fetchProducts();
    } catch (error) {
      console.error("Payment error:", error);

      setPaymentError(
        error.response?.data?.error || "Payment failed! Please try again.",
      );
    } finally {
      setPaying(false);
    }
  };

  if (loading) {
    return <div className="pos-loading">⏳ Loading products...</div>;
  }

  return (
    <>
      <div className="pos">
        <div className="pos-left">
          <div className="pos-search">
            <span className="pos-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div className="pos-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="pos-grid">
            {filteredProducts.length === 0 ? (
              <div className="pos-no-results">
                <div style={{ fontSize: "40px" }}>🔍</div>
                <p>No products found</p>
                <p style={{ fontSize: "12px", marginTop: "4px" }}>
                  Try a different search or category
                </p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`product-card ${product.stock === 0 ? "out-of-stock" : ""}`}
                  onClick={() => addToCart(product)}
                >
                  <div className="product-name">{product.name}</div>
                  <div className="product-category">{product.category}</div>
                  <div className="product-price">{fmt(product.price)}</div>

                  <div
                    className={`product-stock ${product.stock <= 10 ? "low" : ""}`}
                  >
                    {product.stock === 0
                      ? "❌ Out of stock"
                      : product.stock <= 10
                        ? `⚠️ Only ${product.stock} left`
                        : `${product.stock} in stock`}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="pos-cart">
          <div className="cart-header">
            <span className="cart-title">🧾 Cart</span>

            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount} items</span>
            )}
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty">
                <div className="cart-empty-icon">🛒</div>
                <p className="cart-empty-text">Cart is empty</p>
                <p className="cart-empty-sub">Click a product to add it</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>

                    {/* Editable price — click to override */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                        KSh
                      </span>
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) =>
                          updateItemPrice(item.id, e.target.value)
                        }
                        min="0"
                        step="0.01"
                        style={{
                          width: "70px",
                          padding: "2px 6px",
                          fontSize: "12px",
                          border:
                            item.price !== item.originalPrice
                              ? "1px solid #ea580c"
                              : "1px solid #e2e8f0",
                          borderRadius: "4px",
                          background:
                            item.price !== item.originalPrice
                              ? "#fff7ed"
                              : "#fff",
                          color:
                            item.price !== item.originalPrice
                              ? "#ea580c"
                              : "#374151",
                        }}
                      />
                      <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                        each
                      </span>
                    </div>

                    
                    {item.price !== item.originalPrice && (
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#94a3b8",
                          marginTop: "2px",
                        }}
                      >
                        Listed: {fmt(item.originalPrice)}
                      </div>
                    )}
                  </div>

                  <div className="cart-qty">
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQty(item.id)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <span className="cart-item-subtotal">
                    {fmt(item.price * item.quantity)}
                  </span>

                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-amount">{fmt(cartTotal)}</span>
            </div>

            <button
              className="btn-pay"
              onClick={openPaymentChoice}
              disabled={cart.length === 0 || paying}
            >
              {paying ? "⏳ Processing..." : `✅ PAY ${fmt(cartTotal)}`}
            </button>

            {cart.length > 0 && (
              <button className="btn-clear" onClick={clearCart}>
                🗑️ Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ════════════════════════════
          PAYMENT METHOD MODAL
          
      ════════════════════════════ */}
      {showPaymentChoice && (
        <div className="modal-overlay">
          <div className="receipt-modal" style={{ maxWidth: "380px" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                💳 Select Payment Method
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginTop: "4px",
                }}
              >
                Total: {fmt(cartTotal)}
              </p>
            </div>

            {paymentError && (
              <div
                style={{
                  background: "#fee2e2",
                  color: "#dc2626",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  marginBottom: "16px",
                }}
              >
                ⚠️ {paymentError}
              </div>
            )}

            {/* Method buttons */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              {[
                { value: "cash", label: "💵 Cash" },
                { value: "mpesa", label: "📱 MPESA" },
                { value: "split", label: "🔀 Split" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setPaymentMethod(opt.value);
                    setPaymentError("");
                  }}
                  style={{
                    flex: 1,
                    padding: "14px 8px",
                    borderRadius: "10px",
                    border:
                      paymentMethod === opt.value
                        ? "2px solid #16a34a"
                        : "2px solid #e2e8f0",
                    background:
                      paymentMethod === opt.value ? "#dcfce7" : "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: paymentMethod === opt.value ? "#16a34a" : "#64748b",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {paymentMethod === "split" && (
              <div style={{ marginBottom: "20px" }}>
                <div style={{ marginBottom: "12px" }}>
                  <label
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#374151",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    💵 Cash Amount
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={splitCash}
                    onChange={(e) => {
                      setSplitCash(e.target.value);
                      setPaymentError("");
                    }}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#374151",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    📱 MPESA Amount
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={splitMpesa}
                    onChange={(e) => {
                      setSplitMpesa(e.target.value);
                      setPaymentError("");
                    }}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                    marginTop: "8px",
                  }}
                >
                  Must add up to {fmt(cartTotal)}
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={closePaymentChoice}
                disabled={paying}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: "#f1f5f9",
                  color: "#64748b",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handlePay}
                disabled={paying}
                style={{
                  flex: 2,
                  padding: "12px",
                  background: "#16a34a",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {paying ? "⏳ Processing..." : `✅ Confirm ${fmt(cartTotal)}`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════
          RECEIPT MODAL
          
      ════════════════════════════ */}
      {showReceipt && completedSale && (
        <div className="modal-overlay">
          <div className="receipt-modal receipt-printable">
            <div className="receipt-success">
              <div className="receipt-check">✅</div>
              <h2>Payment Successful!</h2>
            </div>

            <div className="receipt-shop">🛒 Thairu Footwear</div>

            <div className="receipt-meta">
              Receipt #{completedSale.id}
              <br />
              {new Date(completedSale.createdAt).toLocaleString("en-KE", {
                dateStyle: "long",
                timeStyle: "short",
              })}
              <br />
              Cashier: {completedSale.user?.name || "Unknown"}
              <br />
              Payment:{" "}
              {completedSale.paymentMethod === "split"
                ? `Cash ${fmt(completedSale.cashAmount)} + MPESA ${fmt(completedSale.mpesaAmount)}`
                : (completedSale.paymentMethod || "cash").toUpperCase()}
            </div>

            {completedSale.items.map((item) => (
              <div key={item.id} className="receipt-line">
                <span className="receipt-line-name">{item.product.name}</span>
                <span className="receipt-line-qty">x{item.quantity}</span>
                <span className="receipt-line-amount">
                  {fmt(item.price * item.quantity)}
                </span>
              </div>
            ))}

            <div className="receipt-total">
              <span>TOTAL</span>
              <span>{fmt(completedSale.total)}</span>
            </div>

            <div className="receipt-thanks">
              Thank you for shopping with us! 😊
            </div>

            <button
              className="btn-print-receipt"
              onClick={() => window.print()}
              style={{
                width: "100%",
                padding: "12px",
                background: "#1e293b",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              🖨️ Print Receipt
            </button>

            <button
              className="btn-new-sale"
              onClick={() => {
                setShowReceipt(false);
                setCompletedSale(null);
              }}
            >
              ✅ Done — New Sale
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default POS;
