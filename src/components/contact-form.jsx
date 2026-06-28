import { useState, useRef, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import RotatingGradientButton from "./RotatingGradientButton";

// ─── Service options ──────────────────────────────────────────
const SERVICE_OPTIONS = [
  { value: "Website Development",   label: "🌐  Website Development"              },
  { value: "Custom Website Design", label: "🎨  Custom Website Design"            },
  { value: "CMS Development",       label: "🛒  CMS Development (Shopify / WP)"  },
  { value: "Other",                 label: "💬  Other / Not Sure Yet"             },
];

// ─── Validation rules ─────────────────────────────────────────
const validate = (fields) => {
  const errs = {};

  if (!fields.name.trim())
    errs.name = "Name is required.";
  else if (fields.name.trim().length < 2)
    errs.name = "Name must be at least 2 characters.";

  if (!fields.email.trim())
    errs.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = "Enter a valid email address.";

  if (fields.phone && !/^[+\d\s\-()]{7,15}$/.test(fields.phone))
    errs.phone = "Enter a valid phone number.";

  if (!fields.service)
    errs.service = "Please select a service.";

  if (!fields.message.trim())
    errs.message = "Message is required.";
  else if (fields.message.trim().length < 10)
    errs.message = "Message must be at least 10 characters.";

  return errs;
};

// ─── Confetti — own canvas above overlay ─────────────────────
function fireConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999999;";
  document.body.appendChild(canvas);

  const boom  = confetti.create(canvas, { resize: true, useWorker: false });
  const colors = ["#4ecdc4", "#037971", "#ffffff", "#00d9f5", "#f7b731"];

  const shoot = (angle, origin) =>
    boom({ particleCount: 130, angle, spread: 65, origin, colors, scalar: 1.1, gravity: 1 });

  shoot(60,  { x: 0,   y: 0.65 });
  shoot(120, { x: 1,   y: 0.65 });
  setTimeout(() =>
    boom({ particleCount: 90, spread: 110, origin: { x: 0.5, y: 0.45 }, colors, scalar: 0.95, gravity: 0.9 })
  , 250);

  setTimeout(() => { boom.reset(); canvas.remove(); }, 4500);
}

// ─── Thank-you overlay ────────────────────────────────────────
function ThankYouOverlay({ onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="thankyou-overlay" role="dialog" aria-modal="true" aria-label="Message sent">
      <div className="thankyou-card">
        <div className="thankyou-icon">
          <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="thankyou-circle" cx="26" cy="26" r="24" stroke="#4ecdc4" strokeWidth="2.5"/>
            <polyline className="thankyou-check" points="14,27 22,35 38,18"
              stroke="#4ecdc4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="thankyou-heading">Thank you! 🎉</h3>
        <p className="thankyou-body">
          Your message has been received.<br />
          I'll get back to you within <strong>24 hours</strong>.
        </p>
        <button className="thankyou-close" onClick={onClose} aria-label="Close">
          Got it
        </button>
      </div>
    </div>
  );
}

// ─── Custom Dropdown (visually identical to inputs) ───────────
function ServiceDropdown({ value, onChange, error, touched }) {
  const [open, setOpen]       = useState(false);
  const containerRef          = useRef(null);
  const selected = SERVICE_OPTIONS.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isError = touched && error;

  return (
    <div className="cf-field-wrap" ref={containerRef}>
      {/* Trigger button — same padding/rounding/bg as inputs */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`cf-dropdown-trigger${isError ? " cf-field--error" : ""}${open ? " cf-field--focus" : ""}`}
      >
        <span className={selected ? "cf-dropdown-value" : "cf-dropdown-placeholder"}>
          {selected ? selected.label : "Select a Service"}
        </span>
        {/* Animated chevron */}
        <svg
          className={`cf-chevron${open ? " cf-chevron--open" : ""}`}
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Hidden input so the value is in FormData */}
      <input type="hidden" name="service" value={value} />

      {/* Options list */}
      {open && (
        <ul className="cf-dropdown-list" role="listbox" aria-label="Select a service">
          {SERVICE_OPTIONS.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`cf-dropdown-option${opt.value === value ? " cf-dropdown-option--active" : ""}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              onKeyDown={(e) => { if (e.key === "Enter") { onChange(opt.value); setOpen(false); } }}
              tabIndex={0}
            >
              {opt.label}
              {opt.value === value && (
                <svg className="cf-tick" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}

      {isError && <p className="cf-error-msg">{error}</p>}
    </div>
  );
}

// ─── Field error message ──────────────────────────────────────
function FieldError({ msg }) {
  if (!msg) return null;
  return <p className="cf-error-msg">{msg}</p>;
}

// ─── Main form ────────────────────────────────────────────────
const EMPTY = { name: "", email: "", phone: "", service: "", message: "" };

function Contactform() {
  const [fields,    setFields]    = useState(EMPTY);
  const [touched,   setTouched]   = useState({});
  const [errors,    setErrors]    = useState({});
  const [loading,   setLoading]   = useState(false);
  const [submitErr, setSubmitErr] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Re-run validation whenever fields change (only shows on touched fields)
  useEffect(() => {
    setErrors(validate(fields));
  }, [fields]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }, []);

  const handleServiceChange = useCallback((val) => {
    setFields((f) => ({ ...f, service: val }));
    setTouched((t) => ({ ...t, service: true }));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Touch all fields to reveal any hidden errors
    setTouched({ name: true, email: true, phone: true, service: true, message: true });

    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return; // block submission

    setSubmitErr("");
    setLoading(true);

    const payload = {
      access_key: "dbf173cc-0e66-4381-a370-e010f3945c2a",
      ...fields,
    };

    try {
      const res  = await fetch("https://api.web3forms.com/submit", {
        method  : "POST",
        headers : { "Content-Type": "application/json", Accept: "application/json" },
        body    : JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setFields(EMPTY);
        setTouched({});
        setErrors({});
        setSubmitted(true);
        fireConfetti();
      } else {
        setSubmitErr("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitErr("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // ── Shared input base classes ─────────────────────────────────
  const fieldCls = (name) =>
    "cf-field" +
    (touched[name] && errors[name] ? " cf-field--error" : "") +
    (touched[name] && !errors[name] && fields[name] ? " cf-field--valid" : "");

  return (
    <>
      {submitted && <ThankYouOverlay onClose={() => setSubmitted(false)} />}

      <form
        onSubmit={onSubmit}
        noValidate
        className="dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-20 sm:p-8 p-5 rounded-3xl w-full"
      >
        {/* NAME */}
        <div className="cf-field-wrap">
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Name *"
            autoComplete="off"
            className={fieldCls("name")}
          />
          <FieldError msg={touched.name && errors.name} />
        </div>

        {/* EMAIL */}
        <div className="cf-field-wrap">
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email Address *"
            autoComplete="off"
            className={fieldCls("email")}
          />
          <FieldError msg={touched.email && errors.email} />
        </div>

        {/* PHONE */}
        <div className="cf-field-wrap">
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone Number (optional)"
            autoComplete="off"
            className={fieldCls("phone")}
          />
          <FieldError msg={touched.phone && errors.phone} />
        </div>

        {/* SERVICE — custom dropdown */}
        <ServiceDropdown
          value={fields.service}
          onChange={handleServiceChange}
          error={errors.service}
          touched={touched.service}
        />

        {/* MESSAGE */}
        <div className="cf-field-wrap">
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell me about your project… *"
            autoComplete="off"
            className={"min-h-[120px] resize-none " + fieldCls("message")}
          />
          <FieldError msg={touched.message && errors.message} />
        </div>

        {/* SUBMIT ERROR */}
        {submitErr && (
          <p className="cf-error-msg mb-3">{submitErr}</p>
        )}

        {/* SUBMIT BUTTON */}
        <RotatingGradientButton
          type="submit"
          disabled={loading}
          gradientColor="#4ecdc4"
          backgroundColor="#000"
          className="rounded-lg w-full"
          spanClassName="border-[0.5px] border-[#ffffff25] rounded-lg transition-all duration-500 hover:border-[#4ecdc445]"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="form-spinner" /> Sending…
            </span>
          ) : "Send Message"}
        </RotatingGradientButton>
      </form>
    </>
  );
}

export default Contactform;
