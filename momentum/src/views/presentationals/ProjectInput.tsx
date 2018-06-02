import * as React from 'react';
// import { InjectedFormProps } from 'redux-form';
import { Form } from 'semantic-ui-react';
import '../../styles/ProjectInput.css';

// interface Props {
//   // tslint:disable-next-line:no-any
//   projectInputs: (values: any) => void;
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//   // handleOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
// }

// interface ProjectInputs {
//   name: string;
// }

// class ProjectInput extends React.Component<InjectedFormProps<ProjectInputs> & Props, {}> {
class ProjectInput extends React.Component<{}, {}> {
  // constructor(props: Props) {
  //   super(props);
  // }

  public render() {
    // const { handleSubmit } = this.props;

   return (
    <div className="project-input">
     {/* <Form onSubmit={ handleSubmit(this.props.projectInputs) }> */}
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
