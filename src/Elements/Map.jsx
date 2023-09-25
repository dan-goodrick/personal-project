
const Map = ({ data, component:Component }) => {
  console.log("component", Component, "data", data)
  return (
    <div>
      {data.map((item, index) => (<Component key={index} {...item} />))}
    </div>
  );
};

export default Map;