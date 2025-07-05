import styles from '../../styles/components/elements/SwitchButton.module.css'

const SwitchButton = ({theme , setTheme}) => {
    const changeHandler = ()=>{
        if(theme == "theme-day") setTheme("theme-night");
        if(theme == "theme-night") setTheme("theme-day")
    }
    return (
        <div className={`switch-button`}>
            <div className="form-check form-switch">
                <input style={{cursor:"pointer"}} onChange={changeHandler} class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
            </div>
        </div>
    );
};

export default SwitchButton;