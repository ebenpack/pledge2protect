import React from 'react';

import MainContentBlock from './main-content-block';
import PledgeCounter from './pledge-counter';
import PledgeCodeOfConduct from './pledge-code-of-conduct';

import './styles.home-ui-wrapper.scss';
import PledgeForm from './Pledge/PledgeForm';
import WhyPledge from './why-pledge';


function HomeUIWrapper() {
    return (
        <div className="home-ui-wrapper">
            <MainContentBlock />
            <PledgeCounter pledgesCount={850000} pledgesGoal={1338404} />
            <WhyPledge/>
            <PledgeForm/>
            <PledgeCodeOfConduct />
        </div>
    );
}

export default HomeUIWrapper;
