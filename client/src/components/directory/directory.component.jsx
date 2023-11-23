import { useEffect, useState } from "react";

import SelectBox from "../select-box/select-box.component";
import Lists from "../lists/lists.component";
import InfoBox from "../info-box/info-box.component";

const Directory = ({ data, hasError }) => {
  const [selectOption, setSelectOption] = useState(1);
  const [filteredData, setFilterData] = useState(null);

  useEffect(() => {
    const newFilteredData = data.find((ddd) => +ddd.id === +selectOption);

    setFilterData(newFilteredData);
  }, [selectOption, data]);

  const onSelectChange = (event) => {
    const selectOptionValue = event.target.value;

    setSelectOption(selectOptionValue);
  };

  return (
    <div className="grid grid-cols-5 gap-3" data-testid="directory">
      <div className="bg-blue-100 grid content-start" data-testid="column-1-search">
        <SelectBox
          type="username"
          onChangeHandler={onSelectChange}
          dataItems={data}
          isDisabled={hasError}
        />
        <div className="flex pt-2 m-5 text-sm">
          <h4>Display Name:</h4>&nbsp;
          <span className="font-bold">{filteredData?.display_name || "-"}</span>
        </div>
      </div>
      <div className="bg-orange-200 col-span-4 jobs-info-container h-screen overflow-scroll scroll-smooth" data-testid="column-2-jobs">
        {filteredData && <Lists {...filteredData} hasError={hasError} />}
        {!filteredData && !hasError && (
          <InfoBox
            text="No jobs available at the moment."
            classStyleRule="text-indigo-600 bg-indigo-200 border-indigo-400"
          />
        )}
        {hasError && (
          <InfoBox
            text="Something went wrong, please check again later."
            classStyleRule="text-red-600 bg-red-200 border-red-400"
            type="error"
          />
        )}
      </div>
    </div>
  );
};

export default Directory;
