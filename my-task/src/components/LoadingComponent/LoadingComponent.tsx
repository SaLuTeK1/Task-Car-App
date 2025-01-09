
import css from './LoadingComponent.module.css'
import {FC} from "react";

interface IProps {
    className?: string
}

const LoadingComponent:FC<IProps> = ({className}) => {

    return (
        <div className={'h-full w-full flex ' + className}>
            <span className={css.loader}></span>
        </div>
    );
}

export default LoadingComponent;
