import { useNavigate } from "react-router-dom";

function withNavigation(Component) {
  return function (props) {
    const navigation = useNavigate();
    return <Component {...props} navigate={navigation} />;
  };
}

export default withNavigation;
