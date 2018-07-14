import React from 'react';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-admin';
import { translate } from 'react-admin';
import { stringify } from 'query-string';

import { MemberIcon } from '../members';

const styles = {
    icon: { paddingRight: '0.5em' },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
    },
};

const LinkToRelatedMembers = ({ classes, record, translate }) => (
    <Button color="primary">
        <Link
            to={{
                pathname: '/members',
                search: stringify({
                    page: 1,
                    perPage: 25,
                    filter: JSON.stringify({ group_id: record.id }),
                }),
            }}
            className={classes.link}
        >
            <MemberIcon className={classes.icon} />
            {translate('组织成员')}
        </Link>
    </Button>
);

const enhance = compose(withStyles(styles), translate);
export default enhance(LinkToRelatedMembers);
