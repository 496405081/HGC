import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propTypes, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/LockOutline';

import { Notification, translate, userLogin } from 'react-admin';

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531067132310&di=05d7bfe0b05717bcde4e6748d6bf80fb&imgtype=0&src=http%3A%2F%2Fimg.glzy8.com%2Fupfiles%2Fwww%2Fppt%2Fjpg%2F51026.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        minWidth: 300,
        marginTop: '2em',
        border: '0.1em solid black',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: 'gray',
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    actions: {
        padding: '0 1em 1em 1em',
    },
    title: {
        fontSize: '3em',
        color: 'white',
        textShadow: '0 0 1px #999,1px 1px 2px #888,2px 2px 2px #777, 3px 3px 2px #666, 4px 4px 2px #555, 5px 5px 2px #333',
        marginTop: '13%',
    },
    button: {

    },
});

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({
    meta: { touched, error } = {},
    input: { ...inputProps },
    ...props
}) => (
        <TextField
            error={!!(touched && error)}
            helperText={touched && error}
            {...inputProps}
            {...props}
            fullWidth
        />
    );

class Login extends Component {
    login = auth =>
        this.props.userLogin(
            auth,
            this.props.location.state
                ? this.props.location.state.nextPathname
                : '/'
        );

    render() {
        const { classes, handleSubmit, isLoading, translate } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.title}>人  员  管  理  系  统</div>
                <Card className={classes.card}>
                    <div className={classes.avatar}>
                        <Avatar className={classes.icon}>
                            <LockIcon />
                        </Avatar>
                    </div>
                    <form onSubmit={handleSubmit(this.login)}>
                        <div className={classes.hint}>登录 / Login</div>
                        <div className={classes.form}>
                            <div className={classes.input}>
                                <Field
                                    name="username"
                                    component={renderInput}
                                    label='用户名'
                                    disabled={isLoading}
                                />
                            </div>
                            <div className={classes.input}>
                                <Field
                                    name="password"
                                    component={renderInput}
                                    label='密码'
                                    type="password"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        <CardActions className={classes.actions}>
                            <Button
                                variant="raised"
                                type="submit"
                                color="primary"
                                disabled={isLoading}
                                className={classes.button}
                                fullWidth
                            >
                                {isLoading && (
                                    <CircularProgress size={25} thickness={2} />
                                )}
                                {translate('登录')}
                            </Button>
                        </CardActions>
                    </form>
                </Card>
                <Notification />
            </div>
        );
    }
}

Login.propTypes = {
    ...propTypes,
    authProvider: PropTypes.func,
    classes: PropTypes.object,
    previousRoute: PropTypes.string,
    translate: PropTypes.func.isRequired,
    userLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
    translate,
    reduxForm({
        form: 'signIn',
        validate: (values, props) => {
            const errors = {};
            const { translate } = props;
            if (!values.username) {
                errors.username = translate('请重新输入用户名');
            }
            if (!values.password) {
                errors.password = translate('请重新输入密码');
            }
            return errors;
        },
    }),
    connect(mapStateToProps, { userLogin }),
    withStyles(styles)
);

export default enhance(Login);