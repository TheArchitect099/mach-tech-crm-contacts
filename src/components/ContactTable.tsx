import type { Contact } from "../types/contact";

type Props = {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
};

const statusClass: Record<Contact["status"], string> = {
  active: "bg-emerald-50 text-emerald-700",
  lead: "bg-amber-50 text-amber-800",
  inactive: "bg-slate-100 text-slate-600",
};

const ContactTable = ({ contacts, onEdit }: Props) => {
  return (
    <>
      {/* Mobile / small tablet: cards */}
      <ul className="grid gap-3 md:hidden">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-slate-900">
                  {contact.name}
                </p>
                <p className="mt-0.5 truncate text-sm text-slate-500">{contact.email}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusClass[contact.status]}`}
              >
                {contact.status}
              </span>
            </div>

            <div className="space-y-1.5 text-sm text-slate-600">
              <p>
                <span className="text-slate-400">Phone:</span> {contact.phone}
              </p>
              <p>
                <span className="text-slate-400">Company:</span> {contact.company}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onEdit(contact)}
              className="mt-4 w-full rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop / tablet: table */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-180 text-left text-[15px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/90 text-xs font-medium tracking-wide text-slate-500 uppercase">
                <th className="px-5 py-3.5">ID</th>
                <th className="px-5 py-3.5">Name</th>
                <th className="px-5 py-3.5">Email</th>
                <th className="px-5 py-3.5 lg:table-cell">Phone</th>
                <th className="hidden px-5 py-3.5 lg:table-cell">Company</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/80"
                >
                  <td className="px-5 py-4 text-slate-400">{contact.id}</td>
                  <td className="px-5 py-4 font-medium text-slate-900">{contact.name}</td>
                  <td className="px-5 py-4 text-slate-600">{contact.email}</td>
                  <td className="px-5 py-4 text-slate-600">{contact.phone}</td>
                  <td className="hidden px-5 py-4 text-slate-600 lg:table-cell">
                    {contact.company}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusClass[contact.status]}`}
                    >
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => onEdit(contact)}
                      className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactTable;
