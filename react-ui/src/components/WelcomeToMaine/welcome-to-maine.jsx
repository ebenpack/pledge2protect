import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './welcome-to-maine.scss';
import WelcomeDialog from '../WelcomeDialog/welcome-dialog';


const WelcomeToMaine = ({ setVisitIntention }) => {
    const [isReasonDialogOpen, setReasonDialogOpen] = useState(false);

    return (
        <>
            <div className="welcome-to-maine">
                <h2>Welcome to Maine!</h2>
                <p>Your actions to protect your wellbeing and the wellbeing of others are commendable. And we can't wait to welcome you to Maine!</p>
                <p className="agree">Agreeing to and signing this pledge will make your visit to Maine more safe, smooth, and free of worries.</p>
                <div className="buttons">
                    <button type="button" className="btn squarish" onClick={() => { setReasonDialogOpen(true); }}>
                        Visitor
                    </button>
                    <button type="button" className="btn squarish" onClick={() => { window.location.href = '#business-owner'; }}>
                        Business Owner
                    </button>
                </div>
            </div>
            { isReasonDialogOpen && (
                <WelcomeDialog closeHandler={() => setReasonDialogOpen(false)} setVisitIntention={setVisitIntention} />
            ) }
        </>
    );
};

WelcomeToMaine.propTypes = {
    setVisitIntention: PropTypes.func.isRequired,
};

export default WelcomeToMaine;
