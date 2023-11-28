import { useEffect, useState } from "react";

import SelectBox from "../select-box/select-box.component";
import Lists from "../lists/lists.component";
import InfoBox from "../info-box/info-box.component";

const Directory = ({ data, hasError }) => {
  const [selectOption, setSelectOption] = useState(1);
  const [filteredData, setFilterData] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let getFilteredData = data.find((ddd) => +ddd.id === +selectOption);
    if (searchText.length >= 2) {
      const getDataFilteredWithText = getFilteredData?.jobs.filter((item) => item?.headline.toLowerCase().includes(searchText.toLowerCase()));
      setFilterData({...getFilteredData, jobs: getDataFilteredWithText});
      return;
    } 
    
    setFilterData(getFilteredData);
  }, [selectOption, data, searchText]);


  const onSelectChange = (event) => setSelectOption( event.target.value);

  const onTitleSearch = (event) => setSearchText(event.target.value);

  return (
    <div className="grid grid-cols-5 gap-3" data-testid="directory">
      <div
        className="bg-blue-100 grid content-start"
        data-testid="column-1-search"
      >
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

        <div className="flex pt-2 m-5 text-sm">
          <input
            type="search"
            className="w-full pl-3 pr-3 py-2 border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Search my heading..."
            onChange={onTitleSearch}
          />
        </div>

      </div>
      <div
        className="bg-orange-200 col-span-4 jobs-info-container h-screen overflow-scroll scroll-smooth"
        data-testid="column-2-jobs"
      >
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
