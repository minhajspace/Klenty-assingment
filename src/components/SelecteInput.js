import { InputPicker } from 'rsuite';


const SelecteInput = (props) => {
    const { inputOptions, noLabel, label, labelStyle, styles } = props;
    return (
        <div
            className={
                `form-input-group
                ${props.inlineLabel ? ' label-inline' : ''}
                ${props.stackedLabel ? ' label-stacked' : ''}
                ${typeof props.stackedLabel === 'undefined' && typeof props.inlineLabel === 'undefined' ? ' label-inline' : ''}`
            }
        >
            {!noLabel && <label style={labelStyle} className="label-inline-display"> {(props.isMandatory && (props.isMandatory == "true" || props.isMandatory == true)) && <span style={{ color: "#F62626",paddingLeft:"5px"}}>*</span>}</label>}
            <InputPicker size="lg" {...inputOptions} style={{borderRadius:"unset", ...styles}} />
        </div>
    );
};

export default SelecteInput