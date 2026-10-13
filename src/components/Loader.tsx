const Loader = () => {
  return (
    <div className="flex min-h-50 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-16 shadow-sm sm:min-h-65">
      <span className="size-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-700" />
      <p className="text-sm text-slate-500">Loading contacts...</p>
    </div>
  );
};

export default Loader;
