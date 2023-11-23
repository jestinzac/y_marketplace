const InfoBox = ({ classStyleRule, text, type = "info" }) => {
  return (
    <div
      className={`block text-sm text-left h-12 flex items-center p-4 rounded-sm border ${classStyleRule}`}
      role="alert"
      data-type={type}
      data-testid="info-box"
    >
      {text}
    </div>
  );
};

export default InfoBox;
