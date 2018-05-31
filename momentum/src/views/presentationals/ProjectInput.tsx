import * as React from 'react';
import { Form } from 'semantic-ui-react';
// import { Task } from 'src/models/Task';
import '../../styles/ProjectInput.css';

// import logo from '../data/logo.svg';

// interface Props {
//   // currentTask: Task;
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//   handleOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
// }

class ProjectInput extends React.Component<{}, {}> {
  // constructor(props: Props) {
  //   super(props);
  // }

  public render() {
   return (
    <div className="project-input">
     <Form>

      <Form.Input
       fluid={true}
       label="Project Name"
       placeholder="Enter your project name here..."/>

      <Form.Field>
       <label id="project-team-label">Project Team</label>
       <span className="input-description">Add everyone from your project by email</span>
       <Form.Input
        fluid={true}
        placeholder="example@gmail.com"/>
      </Form.Field>

      <Form.TextArea
       label="Project description"
       placeholder="Enter your project description here..." />

      <div className="center">
       <Form.Button align="center" color="blue" type="submit">Create this project</Form.Button>
      </div>
     </Form>
    </div>
   );
  }
}

export default ProjectInput;
