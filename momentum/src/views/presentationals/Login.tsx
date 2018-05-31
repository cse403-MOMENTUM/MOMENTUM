import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid} from 'semantic-ui-react';
import '../../styles/Login.css';
// import ProjectList from './ProjectList';

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
                        <h1 id="login-title" className="ui align"><span className="yellow-text">Moment</span>um</h1>
                    {/* </div> */}
                </Grid.Column>
                <Grid.Column width={4} className="center align">
                    <Form id="login-form">
                    <Form.Field>
                    <input placeholder="Email address" type="email" />
                    </Form.Field>
                    <Form.Field>
                    <input placeholder="Password" type="password" />
                    </Form.Field>
                    <Link to="/projectlist">
                        <Button type="submit" id="sign-in" className="yellow">Sign in</Button>
                    </Link>
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
