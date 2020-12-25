import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './Landing.css';
import Tooltip from '@material-ui/core/Tooltip';

const PERCENT = 0.17;
const MONTHS = 6;
const MAX_SHARE = 100000;
const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: 'orange',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',

    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const commaFormatted = (amount) => {
    amount = String(amount)
    let delimiter = ","; // replace comma if desired
    let a = amount.split('.', 2)
    let d = a[1];
    let i = parseInt(a[0]);
    if (isNaN(i)) { return ''; }
    let minus = '';
    if (i < 0) { minus = '-'; }
    i = Math.abs(i);
    let n = new String(i);
    a = [];
    let nn = n.substr(n.length - 3);
    a.unshift(nn);
    n = n.substr(0, n.length - 3);
    while (n.length > 2) {
        let nn = n.substr(n.length - 2);
        a.unshift(nn);
        n = n.substr(0, n.length - 2);
    }
    if (n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if (!d || d.length < 1) { amount = n; }
    else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
}
export default function CustomizedSlider() {
    const [ctc, setCtc] = useState(18);

    return (
        <div className='slider-div align'>
            <h1>Income Share calculator</h1>
            <div className='content'>
                <div className='slider'>
                    <h2>Your CTC</h2>
                    <PrettoSlider
                        ValueLabelComponent={ValueLabelComponent}
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        max={50}
                        value={ctc}
                        onChange={(e, val) => setCtc(val)}
                        step={0.1}
                    />
                    <p className=' center'> slide the slider to change the CTC </p>
                </div>
                <div className='content'>
                    <div>
                        <p>{ctc} LPA</p>
                        <h3>CTC</h3>

                    </div>
                    <div>
                        <p>{`₹ ${commaFormatted(Math.round((ctc * 100000) / 12))}`}</p>
                        <h3>Monthly Salary</h3>
                    </div>

                    <div>
                        <p>{`₹ ${commaFormatted(Math.round(PERCENT * (ctc * 100000) / 12))}`}</p>
                        <h3>One month's share</h3>
                    </div>
                    <div>
                        <p>{`₹ ${commaFormatted(Math.min(Math.round(MONTHS * PERCENT * (ctc * 100000) / 12), MAX_SHARE))}`}</p>
                        <h3>Total Share</h3>
                    </div>

                </div>

            </div>

        </div>
    );
}
