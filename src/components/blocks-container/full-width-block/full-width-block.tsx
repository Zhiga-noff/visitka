import React, {FC} from 'react';
import {IBlock} from "../../../libs/types";
import {ParcelingItem} from "../../parceling-item";

interface IProps {
    fullWidthData: IBlock[]
}

export const FullWidthBlock: FC<IProps> = ({fullWidthData}) => {

    return <>
        {fullWidthData.map((item, index) => {
            return <ParcelingItem data={item} key={index}/>;
        })}
    </>;
};
