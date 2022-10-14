import warning from '../_util/warning';
import { withInstall } from '../_util/type';

const Icon = () => {
  warning(false, 'Icon', 'Empty Icon');
  return null;
};

Icon.displayName = 'BmaIcon';

export default withInstall(Icon);
