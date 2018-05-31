import * as React from 'react';
import { Field } from 'redux-form';
import '../styles/RadioButton.css';

// tslint:disable-next-line:no-any
const renderRadioButton = (props: any) => {
  const {
    label,
    value,
    handleChange,
    // meta: { touched, error },
    ...field
  } = props;

  // tslint:disable-next-line:no-any
  const onChange = (event:any) => {
    field.input.onChange(event);
    if (handleChange) {
      handleChange(event);
    }
  };

  // let validationError = false;
  // if (error && touched) {
  //   validationError = true;
  // }

  return (
   <label className="radio-button-container">
     <input
       {...field.input}
       key={'radio-button-' + value}
       type="radio"
       onChange={onChange}
     />
     <span className="label">{label}</span>
     <span className="checkmark" />
   </label>
  );
};

interface Props {
 name: string;
 label: string;
 value: string;
 // tslint:disable-next-line:no-any
 handleChange: (event: any) => void;
 checked: boolean;
}

// tslint:disable-next-line:no-any
class RadioButton extends React.Component<Props, {}> {
 constructor(props: Props) {
   super(props);
 }

 public render() {
  return (
   <Field {...this.props} component={renderRadioButton} />
  );
 }
}

export default RadioButton;
