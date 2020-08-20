import { useSelector } from 'react-redux';
import { getUserRoleLevel } from 'redux/selectors';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { roleLevelMap } from 'utils/constants';
import { getAdminPath } from 'utils/getAdminPath';

const useRoleAuth = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const isAdminPage = pathname.includes(getAdminPath());

  const userRole = useSelector(getUserRoleLevel);
  if (userRole === roleLevelMap.ALL_PERMISSIONS) {
    !isAdminPage && history.push(getAdminPath());
  } else {
    isAdminPage && history.push('/');
  }
};

export default useRoleAuth;
