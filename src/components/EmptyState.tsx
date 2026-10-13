const EmptyState = () => {
  return (
    <div className="flex min-h-50 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-16 text-center shadow-sm sm:min-h-65 sm:px-6">
      <p className="text-base font-medium text-slate-800 sm:text-lg">No contacts found</p>
      <p className="mt-1 text-sm text-slate-500">Try another search query</p>
    </div>
  );
};

export default EmptyState;
