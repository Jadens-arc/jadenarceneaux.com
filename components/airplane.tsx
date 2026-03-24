export function Airplane() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden absolute top-1/2 left-1/2 -translate-1/2">
      <img
        src="/airplane.svg"
        alt=""
        aria-hidden="true"
        className="opacity-[0.03] dark:opacity-[0.03] dark:invert"
      />
    </div>
  );
}
