import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Confirm } from 'react-admin';
import { crudUpdateMany } from 'ra-core';

class ResetViewsAction extends Component {
    handleDialogClose = () => {
                const { basePath, crudUpdateMany, resource, selectedIds } = this.props;

        crudUpdateMany(resource, selectedIds, {isActive: false } , basePath);
        this.props.onExit();
    };

 

    handleConfirm = () => {
        const { basePath, crudUpdateMany, resource, selectedIds } = this.props;

        crudUpdateMany(resource, selectedIds, {isActive: true } , basePath);
        this.props.onExit();
    };

    render() {
        return (
            <Confirm
                isOpen={true}
                title="切换用户状态"
                content="切换用户状态为?"
                onConfirm={this.handleConfirm}
                onClose={this.handleDialogClose}
                confirm="启用"
                cancel="停用"
            />
        );
    }
}

export default connect(undefined, { crudUpdateMany })(ResetViewsAction);