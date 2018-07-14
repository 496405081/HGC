import React from 'react';
import { Link } from 'react-router-dom';


//跳转到组织内人员管理列表
const MemberRefField = ({ record }) => (
    <Link to={`members/${record.id}`}>{record.reference}</Link>
);


MemberRefField.defaultProps = {
    source: 'id',
    label: 'name',
};

export default MemberRefField;
