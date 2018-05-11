import * as React from 'react';
import { Button, Form, Grid} from 'semantic-ui-react';

import '../../../styles/Login.css';

class Login extends React.Component<{}, {}> {
//   private inlineStyle = {
//     sign_in: {
//         backgroundColor: '#FDC02F',
//         color: '#FEFEFE',
//         fontWeight: 'lighter',
//         textTransform: 'uppercase',
//         width: '100%'
//     }
//   };

  public render() {
    return (
        <Grid columns="two" divided={true} relaxed={true} id="login-grid">
            <Grid.Row>
                <Grid.Column textAlign="right" className="middle aligned">
                    {/* <div className="center align"> */}
                        <h1 id="login-title" className="ui center align"><span className="yellow-text">Moment</span>um</h1>
                    {/* </div> */}
                </Grid.Column>
                <Grid.Column width={4} className="center align">
                    <Form id="login-form">
                    <Form.Field>
                    <input placeholder="Email address" />
                    </Form.Field>
                    <Form.Field>
                    <input placeholder="Password" />
                    </Form.Field>
                    <Button type="submit" id="sign-in" className="yellow">Sign in</Button>
                    <div id="forgot-password"><a href="/" className="secondary-link">Forgot your password?</a></div>
                    <div id="sign-up"><a href="/" className="secondary-link">Sign up</a></div>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
  }
}

export default Login;
