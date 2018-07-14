import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    root: { width: 25, maxWidth: 25, maxHeight: 25 },
};

const ThumbnailField = withStyles(styles)(({ classes, record }) => (


    // 要修改
    <img src={'record.avatar'} className={classes.root} alt="" />
));

export default ThumbnailField;
