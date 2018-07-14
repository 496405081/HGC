import React from 'react';
import {
    translate,
    Datagrid,
    Edit,
    Create,
    EditButton,
    List,
      Filter,
    NumberField,
    ReferenceManyField,
    SimpleForm,
    TextField,
    TextInput,
    DateField,
        CardActions,
        TabbedForm,
        FormTab,
        ReferenceInput,
SelectInput,
    ListButton,
    ShowButton,
    DeleteButton,
    RefreshButton,
    filters,
    CreateButton,
    customAction,
    BooleanField 
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/icons/Bookmark';
import Button from '@material-ui/core/Button';
import ThumbnailField from '../members/ThumbnailField';
import MemberRefField from '../members/MemberRefField';
import LinkToRelatedMembers from './LinkToRelatedMembers';


//=========列表操作按钮===============
export const GroupIcon = Icon;

const GroupEditActions = ({resource, data,filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions>
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath="/groups" label="组织新增"/>
        <RefreshButton label="刷新"/>
        {/* Add your custom actions */}
       
    </CardActions>
);

//===========组织操作按钮===============

const MembersEditActions = ({resource, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions>
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath="/members" label="成员新增"/>
        DeleteB
        <RefreshButton label="刷新"/>
        Delete
        {/* Add your custom actions */}
       
    </CardActions>
);



//==========================自定义组织成员按钮====================


const editStyles = {
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
    email: { width: 544 },
    address: { maxWidth: 544 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    imageInput: { width: '7em', display: 'inline-block', height: '-5em' },

};
const listStyles = {
    name: { padding: '0 12px 0 25px' },
};

//=================================自定义动作按钮===========================

     


//========================================组织列表过滤器=============================
const GroupFilter = props => (
    <Filter {...props} >
        <TextInput label="名称搜索" source="name" alwaysOn />
        <TextInput label="编码搜索" source="code" alwaysOn />
     
    </Filter>
);
//=====================成员查询过滤器=========================================
const MemberFilter = props => (
    <Filter {...props} >
        <TextInput label="名称" source="realname" alwaysOn />
        <TextInput label="登陆账号" source="tel" alwaysOn />
        <BooleanField  label="账号状态" source="isActive"/>
     
    </Filter>
);





// ==================组织列表================
export const GroupList = withStyles(listStyles)(({ classes, ...props}) => (
   
    <List {...props} sort={{ field: 'id', order: 'ASC' }}   filters={<GroupFilter />}  actions={<GroupEditActions/>}  title="组织查询">
        <Datagrid>
            <TextField source="name" label="组织名称" />
            <TextField source="code" label="组织编码" />
            <TextField source="reviser" label="修改人" />
            <TextField source="mtime" label="修改时间"/>
             <LinkToRelatedMembers />

            {/*跳转到组成员管理*/}
           
            <EditButton label="操作"/>
        </Datagrid>
    </List>
));



//==========组织管理操作===========
const GroupTitle = translate(({ record, translate }) => (
    <span>
        {translate('操作组织：', { smart_count: 1 })} &quot;{record.name}&quot;
    </span>
));

export const GroupEdit = props => (
    <Edit title={<GroupTitle />} {...props} actions={<GroupEditActions/>} >
        <SimpleForm >
           <ReferenceInput label="合并到" source="id" reference="groups">
                   <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


        // 组织创建
export const GroupCreate = withStyles(editStyles)(({ classes, ...props }) => (
    <Create {...props} title="组织创建" >
        <SimpleForm redirect="/groups" redirect={false}>
            <FormTab label="组织创建">
                <TextInput
                    source="name" label="组织名称"/>
                <TextInput
                    source="code" label="组织编码"/>
 
            </FormTab>
      </SimpleForm>
    </Create>
));

