import { AddProjectAction } from '../../action-types';
import ac from './action-creators';

// tslint:disable-next-line:no-any
export const projectInputs = (values: any) : AddProjectAction => {
  return ac.addProject(0, values.name, values.memberCount, values.description);
};

export default {
  projectInputs
};
