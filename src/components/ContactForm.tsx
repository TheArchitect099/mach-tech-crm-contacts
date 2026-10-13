import { useState } from "react";
import type { Contact } from "../types/contact";

type Props = {
  contact: Contact;
  onClose: () => void;
  onSave: (contact: Contact) => void;
};

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

const FormInput = ({ label, value, onChange, type = "text" }: InputProps) => {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

const ContactForm = ({ contact, onClose, onSave }: Props) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const [company, setCompany] = useState(contact.company);
  const [status, setStatus] = useState(contact.status);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid email");
      return;
    }
    if (!phone.trim()) {
      setError("Phone is required");
      return;
    }
    if (!company.trim()) {
      setError("Company is required");
      return;
    }

    setError("");
    onSave({
      id: contact.id,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      status,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/45 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-contact-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-200 sm:hidden" />

        <h2
          id="edit-contact-title"
          className="mb-1 text-xl font-semibold tracking-tight text-slate-900"
        >
          Edit contact
        </h2>
        <p className="mb-5 text-sm text-slate-500">Update fields and save changes</p>

        <div className="space-y-3 sm:space-y-4">
          <FormInput label="Name" value={name} onChange={setName} />
          <FormInput label="Email" value={email} onChange={setEmail} type="email" />

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <FormInput label="Phone" value={phone} onChange={setPhone} type="tel" />
            <FormInput label="Company" value={company} onChange={setCompany} />
          </div>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Status</span>
            <select
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              value={status}
              onChange={(e) => setStatus(e.target.value as Contact["status"])}
            >
              <option value="active">active</option>
              <option value="lead">lead</option>
              <option value="inactive">inactive</option>
            </select>
          </label>
        </div>

        {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
