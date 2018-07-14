import React from 'react';
import {
    translate,
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberInput,
    ReferenceInput,
    ReferenceManyField,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
    required,
    CardActions,
    CreateButton,
    RefreshButton,
    BooleanField,
    DeleteButton,
    BulkActions, BulkDeleteAction,
    SimpleForm,ImageInput,ImageField,RadioButtonGroupInput,DateInput 
    
} from 'react-admin';
import ResetViewsAction from './ResetViewsAction';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/icons/Collections';
import RichTextInput from 'ra-input-rich-text';

import StarRatingField from '../reviews/StarRatingField';
// import GridList from './GridList';
import Avatar from './Avatar';
import Pic from './Pic';

export const MemberIcon = Icon;

const QuickFilter = translate(({ label, translate }) => (
    <Chip>{translate(label)}</Chip>
));



//=================列表删除按钮======================

const PostBulkActions = props => (
    <BulkActions {...props} label="操作">
        <ResetViewsAction label="用户状态操作" />
        <BulkDeleteAction label="删除"/>
    </BulkActions>
);



//=============成员操作按钮===============

const MemberEditActions = ({resource,data, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions>
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath="/members" label="成员新增"/>
        <RefreshButton label="刷新"/>
        


        {/* Add your custom actions */}
       
    </CardActions>
);



//===================== 成员过滤器======================
export const MemberFilter = props => (
    <Filter {...props} >
        <TextInput label="员工姓名" source="realname" alwaysOn />
        <TextInput label="登陆账号" source="tel" alwaysOn />
         <SelectInput source="isActive" label="账号状态" alwaysOn choices={[
         { id: 'true', name: '已启用' },
         { id: 'false', name: '未启用' },
]} />
     
    </Filter>
);



// ==================成员列表样式============
const listStyles = {
    name: { padding: '0 12px 0 25px' },
};


// =====================成员管理列表===========
export const MemberList = withStyles(listStyles)(({ classes, ...props}) => (
<List {...props} sort={{ field: 'group_id', order: 'ASC' }}  perPage={20}  filters={<MemberFilter />}   title="成员查询" bulkActions={<PostBulkActions />} >
        <Datagrid>
                   <TextField label="用户编码" source="userId" />
                   <TextField label="所属组织" source="group_id" />
                     <TextField label="真实姓名" source="realname" />
                    <TextField source="tel" label="手机号"/>
                    <TextField source="email" label="邮箱"/>
                    <TextField source="nickname" label="昵称"/>
                    <TextField source="workId" label="角色"/>
                    <BooleanField source="isActive" label="是否启用"/> 

            {/*跳转到组成员管理*/}
           
            <EditButton label="操作"/>
        </Datagrid>
    </List>
));


const createStyles = {
    stock: { width: '10em' },
    price: { width: '5em' },
    width: { width: '5em' },
    widthFormGroup: { display: 'inline-block' },
    height: { width: '5em' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};




//========================成员添加======================
export const MemberCreate = withStyles(createStyles)(({ classes, ...props }) => (
    <Create {...props} title="成员添加">
      <SimpleForm redirect="false">

             <ImageInput source="avatar" label="头像上传" accept="image/*" placeholder={<p>点击上传头像</p>} className={classes.stock}>
                <ImageField source="avatar" title="头像上传" />
            </ImageInput>

                <TextInput
                    source="tel"
                    options={{ fullWidth: true }}
                    validate={required()}
                    label="手机号"
                />
                <TextInput
                    source="nickname"
                    options={{ fullWidth: true }}
                    validate={required()}
                    label="昵称"
                />
          
       
                <TextInput source="email" label="邮箱" />
                <TextInput
                    source="workId"
                    label="工号"
                />
                <TextInput
                    source="realname"
                    label="真实姓名"
                />
                <TextInput
                    source="area"
                    label="区域名称"                    
                />

             <TextInput
                    source="password"
                    label="密码"                    
                />

            <TextInput
                    source="password"
                    label="密码确认"                    
                />
                
            <RadioButtonGroupInput source="sex" label="性别" choices={[{ id: 'male', name: '男' },{ id: 'female', name: '女' }]} />
            
            
            <DateInput source="birthday" label="生日" />

            
            <TextInput
                    source="tel"
                    label="电话"                    
                />

         <TextInput
                    source="fax"
                    label="传真"                    
                />
            
         <TextInput
                    source="area"
                    label="区域"                    
                />
        
        <ImageInput source="pic" label="照片上传" accept="image/*" placeholder={<p>点击上传照片</p>} className={classes.stock}>
                <ImageField source="pic" title="照片上传" />
            </ImageInput>
                       
             {/*<ReferenceInput
                    source="group_id"
                    reference="groups"
                    allowEmpty
                >
                    <SelectInput source="name" />
                </ReferenceInput>*/}

         
         
             <TextInput
                    source="ps"
                    label="备注"                    
                />
           
      </SimpleForm>
    </Create>
));







export const MemberEdit = withStyles(createStyles)(({ classes, ...props }) => (
    <Edit {...props} title="成员编辑">
         <SimpleForm >
                <Avatar/>
             <ImageInput source="avatar" label="头像上传" accept="image/*" placeholder={<p>点击上传头像</p>} className={classes.stock}>
                <ImageField source="avatar" title="头像上传" />
            </ImageInput>

                <TextInput
                    source="tel"
                    options={{ fullWidth: true }}
                    validate={required()}
                    label="手机号"
                />
                <TextInput
                    source="nickname"
                    options={{ fullWidth: true }}
                    validate={required()}
                    label="昵称"
                />
          
       
                <TextInput source="email" label="邮箱" />
                <TextInput
                    source="workId"
                    label="工号"
                />
                <TextInput
                    source="realname"
                    label="真实姓名"
                />
                <TextInput
                    source="area"
                    label="区域名称"                    
                />

             <TextInput
                    source="password"
                    label="密码"                    
                />

            <TextInput
                    source="password"
                    label="密码确认"                    
                />
                
            <RadioButtonGroupInput source="sex" label="性别" choices={[
              { id: 'male', name: '男' },
                   { id: 'female', name: '女' }]} />
            
            
            <DateInput source="birthday" label="生日"/>

            
            <TextInput
                    source="tel"
                    label="电话"                    
                />

         <TextInput
                    source="fax"
                    label="传真"                    
                />
            
         <TextInput
                    source="area"
                    label="区域"                    
                />
        <Pic/>
        <ImageInput source="pic" label="照片上传" accept="image/*" placeholder={<p>点击上传照片</p>} className={classes.stock}>
                <ImageField source="pic" title="照片上传" />
            </ImageInput>
                       
             {/*<ReferenceInput
                    source="group_id"
                    reference="groups"
                    allowEmpty
                >
                    <SelectInput source="name" />
                </ReferenceInput>*/}

         
         
             <TextInput
                    source="ps"
                    label="备注"                    
                />
           
      </SimpleForm>
    </Edit>
));
