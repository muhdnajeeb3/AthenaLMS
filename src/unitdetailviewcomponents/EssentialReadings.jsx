const EssentialReadings = ({ data }) => {
  const Content = data?.UnitDesc;

  return <div dangerouslySetInnerHTML={{ __html: Content }} />;
};

export default EssentialReadings;
