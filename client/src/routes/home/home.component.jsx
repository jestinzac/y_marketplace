import { useEffect, useState } from "react";

import constants from "../../generic/constants";
import Spinner from "../../components/spinner/spinner.component";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    setLoader(true);
    Promise.all([
      fetch(`${constants.api.hostname}${constants.api.businessesPath}`).then((response) => response.json()),
      fetch(`${constants.api.hostname}${constants.api.jobsPath}`).then( (response) => response.json()),
      fetch(`${constants.api.hostname}${constants.api.classificationsPath}`).then((response) => response.json()),
      fetch(`${constants.api.hostname}${constants.api.locationsPath}`).then((response) => response.json()),
    ])
      .then((responseData) => {
        const {data: { businesses }} = responseData[0];
        const {data: { jobs }} = responseData[1];
        const {data: { classifications }} = responseData[2];
        const {data: { locations } } = responseData[3];

        // fn, to transform our data into our desired structure
        businesses.forEach((business) => {
          business.jobs = jobs
            .filter(
              (job) =>
                business.classifications.includes(job.classification) &&
                business.locations_served.includes(job.location)
            )
            .map((job) => {
              return {
                ...job,
                tier: classifications.find(
                  (classification) => classification.id === job.classification
                ).name,
                area: locations.find((location) => location.id === job.location)
                  .name,
              };
            });
        });

        setData(businesses);
        setLoader(false);
      })
      .catch((err) => {
        setErrors(err);
        setLoader(false);
      });
  }, []);

  return (
    <section className="container mx-auto box-content h-screen w-100 p-4 border border-gray-500 bg-white">
      {loader ? <Spinner /> : <Directory data={data} hasError={hasError} />}
    </section>
  );
};

export default Home;
