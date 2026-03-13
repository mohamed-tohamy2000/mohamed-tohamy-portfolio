const filters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web-app" },
  { label: "Landing Pages", value: "landing" },
  { label: "UI Experiments", value: "ui-experiment" },
];

export default function ProjectsFilter({ activeFilter, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          className={`btn btn-sm rounded-full ${
            activeFilter === filter.value ? "btn-success text-black" : "btn-outline border-base-300"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}


