import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import './Dashboard.css'

const Dashboard = () => {


    return (
        <>
            <Navigation ></Navigation>
            <DashBoardHome></DashBoardHome>
        </>
    );
};

export default Dashboard;