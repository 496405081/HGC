import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';
import { withRouter } from 'react-router-dom';

import { GroupIcon } from './groups';
import { MemberIcon } from './members';
import {CustomerIcon} from './customers';
import {PersonalIcon} from "./personals";
import {CompanyIcon} from "./companys";


//列表icon
const items = [
    { name: 'groups', icon: <GroupIcon /> ,title:"组织查询" },
    { name: 'members', icon: <MemberIcon /> ,title:"成员查询" },
    {name:'customers',icon:<CustomerIcon/>,title:'客户信息'},
    {name:'personals',icon:<PersonalIcon/>,title:'个人认证'},
    {name:'companys',icon:<CompanyIcon/>,title:'企业认证'}


];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuClick, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onClick={onMenuClick} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
                primaryText={translate(`${item.title}`, {
                    smart_count: 2,
                })}
                leftIcon={item.icon}
                onClick={onMenuClick}
            />
        ))}
        <Responsive xsmall={logout} medium={null} />
    </div>
);

const enhance = compose(
    withRouter,
    connect(
        state => ({
            theme: state.theme,
            locale: state.i18n.locale,
        }),
        {}
    ),
    translate
);

export default enhance(Menu);