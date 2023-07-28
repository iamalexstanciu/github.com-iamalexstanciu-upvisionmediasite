import { useLocation, useNavigate, useParams } from "react-router-dom";

function routing(Component) {
  function ComponentRoutingProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }
  return ComponentRoutingProp;
}

export default routing;
