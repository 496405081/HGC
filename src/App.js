import 'babel-polyfill';
import React, {Component} from 'react';
import {Admin, Resource} from 'react-admin';

import './App.css';
import authProvider from './authProvider';
import sagas from './sagas';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Route } from 'react-router-dom';
import {MemberList,MemberCreate,MemberEdit,MemberIcon} from './members';

import {GroupList, GroupEdit, GroupIcon, GroupCreate} from './groups';
import {CustomerList,CustomerIcon} from "./customers";
import {PersonalList,PersonalIcon,PersonalShow,PersonalEdit} from "./personals";
import {CompanyList, CompanyIcon, CompanyShow, CompanysEdit} from "./companys";
import dataProviderFactory from './dataProvider';
import fakeServerFactory from './fakeServer';



class App extends Component {
    state = {dataProvider: null};

    async componentWillMount() {
        const dataProvider = await dataProviderFactory('rest');
        this.setState({dataProvider}, function () {
            this.restoreFetch = fakeServerFactory('rest');
        });
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        const {dataProvider} = this.state;

        if (!dataProvider) {
            return (
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            );
        }

        return (
            <Admin
                title="人员管理系统"
                dataProvider={dataProvider}
                authProvider={authProvider}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
 
        
            >
            {/*组织模块*/}
               <Resource
                    name="groups"
                    list={GroupList}
                    edit={GroupEdit}
                    icon={GroupIcon}
                    create={GroupCreate}
                />
                {/*组织成员*/}
                <Resource
                    name="members"
                    list={MemberList}
                    create={MemberCreate}
                    edit={MemberEdit}
                    icon={MemberIcon}
                />

                {/*客户列表*/}
                <Resource
                    name="customers"
                    list = {CustomerList}
                    // show = {CustomerShow}
                    // create = {CustomerCreate}
                    // edit = {CustomerEdit}
                    icon ={CustomerIcon}

                />

                <Resource
                    name="personals"
                    list = {PersonalList}
                    show = {PersonalShow}
                    // create = {CustomerCreate}
                    edit = {PersonalEdit}
                    icon ={PersonalIcon}
                />
                <Resource
                    name="companys"
                    list = {CompanyList}
                    show = {CompanyShow}
                    // create = {CustomerCreate}
                    edit = {CompanysEdit}
                    icon ={CompanyIcon}

                />

 
            </Admin>
        );
    }
}

export default App;
