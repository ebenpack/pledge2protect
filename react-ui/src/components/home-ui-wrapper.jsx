import React from 'react';

import MainContentBlock from './main-content-block';
import PledgeCounter from './pledge-counter';
import PledgeCodeOfConduct from './pledge-code-of-conduct';

import './styles.home-ui-wrapper.scss';


function HomeUIWrapper() {
    return (
        <div className="home-ui-wrapper">
            <MainContentBlock />
            <PledgeCounter pledgesCount={850000} pledgesGoal={1338404} />
            <PledgeCodeOfConduct />
        </div>
    );
}

export default HomeUIWrapper;
