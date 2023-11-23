const Spinner = () => {
  return (
    <div className="grid grid-cols-5 gap-3 animate-pulse" data-testid="loader">
      <div className="bg-gray-200 grid content-start" />
      <div className="bg-gray-200 col-span-4 jobs-info-container h-screen overflow-scroll scroll-smooth" />
    </div>
  )
};

export default Spinner;