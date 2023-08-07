export default function TimelineUpdate({ title, date, text, items = [] }) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-500">
      <h3 className="text-xl font-semibold tracki">{title}</h3>
      <time className="text-xs tracki uppercase text-gray-400">{date}</time>
      <p className="mt-3">{text}</p>
      <ul className="mt-3">
        {items.map((item, index) => (
          <li className="font-semibold" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
