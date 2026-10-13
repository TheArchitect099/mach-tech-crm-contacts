import { useState, useEffect } from "react";
import ContactTable from "../components/ContactTable";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import ContactForm from "../components/ContactForm";
import type { Contact } from "../types/contact";

type Props = {
  contacts: Contact[];
};

function ContactsPage({ contacts }: Props) {
  const [list, setList] = useState<Contact[]>(contacts);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const query = search.toLowerCase().trim();
  const filtered = list.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query) ||
      c.company.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-dvh bg-linear-to-b from-slate-50 via-slate-100 to-slate-200/70">
      <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <header className="mb-5 flex flex-col gap-4 sm:mb-8 sm:gap-5 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-wide text-slate-500 uppercase sm:text-sm">
              MACH TECH CRM
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Contacts
            </h1>
            <p className="mt-1 max-w-xl text-sm text-slate-500 sm:text-[15px]">
              Search and edit synthetic contact records
            </p>
          </div>

          <div className="w-full md:max-w-md md:shrink-0">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </header>

        {loading && <Loader />}
        {!loading && filtered.length === 0 && <EmptyState />}
        {!loading && filtered.length > 0 && (
          <ContactTable contacts={filtered} onEdit={setEditingContact} />
        )}

        {editingContact && (
          <ContactForm
            key={editingContact.id}
            contact={editingContact}
            onClose={() => setEditingContact(null)}
            onSave={(updated) => {
              setList((prev) =>
                prev.map((c) => (c.id === updated.id ? updated : c))
              );
              setEditingContact(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ContactsPage;
