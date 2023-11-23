import MapPin from "../icons/map-pin/map-pin.component";
import Calendar from "../icons/calendar/calendar.component";
import { formattedDate } from "../../generic/helper";

const ListItem = ({ id, tier, headline, description, date_added, area }) => {
  return (
    <article
      className="w-auto p-6 m-5 bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl list-item"
      key={id}
      id={id}
      data-testid="list-item"
    >
      <span className="rounded-full bg-purple-200 py-1 px-4 text-xs font-bold text-purple-600 tag">
        {tier}
      </span>
      <h2 className="text-3xl py-4 font-bold text-blue-800 description headline">
        {headline}
      </h2>
      <p className="text-xl py-3 pb-20 font-medium text-gray-900">
        {description}
      </p>
      <div className="py-4 flex justify-between items-center bottom-info">
        <div className="flex gap-2">
          <Calendar />
          <span className="date content-end" data-testid="formatted-date">{formattedDate(date_added)}</span>
        </div>
        <div className="flex gap-2">
          <MapPin />
          <span className="location">{area}</span>
        </div>
      </div>
    </article>
  );
};

export default ListItem;
