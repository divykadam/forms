import { useNavigate, useParams } from "react-router-dom";

function withNavigation(Component) {
  return function (props) {
    const navigation = useNavigate();
    const paramsId = useParams();
    return <Component {...props} paramsId={paramsId} navigate={navigation} />;
  };
}

export default withNavigation;
