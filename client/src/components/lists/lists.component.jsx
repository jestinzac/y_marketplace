import InfoBox from "../info-box/info-box.component";
import ListItem from "../list-item/list-item.component";

const Lists = ({ jobs, id, username, hasError }) => {
  return (
    <div
      className="min-h-screen flex flex-col list-items"
      key={id}
      data-username={username}
      data-testid="list-container"
    >
      {jobs.length > 0 && jobs.map((job) => <ListItem key={job.id} {...job} />)}

      {!jobs.length && !hasError && (
        <InfoBox
          text="No jobs available at the moment."
          classStyleRule="text-indigo-600 bg-indigo-200 border-indigo-400"
        />
      )}
    </div>
  );
};

export default Lists;
