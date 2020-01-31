// @flow

import React, {Component, type Node} from 'react';

import {type ReportDataType} from '../../../../../extract/extract-type';

import type {NullableType} from '../../../lib/type';
import {getFileAsJson} from '../../../lib/file';
import {GuildStatistics} from '../../../component/guild-statistics/c-guild-statistics';
import {TopDeck} from '../../../component/guild-statistics/c-top-deck';

// import homeStyle from './home.scss';

type PropsType = {};

type StateType = {|
    +report: {|
        +before: NullableType<ReportDataType>,
        +after: NullableType<ReportDataType>,
    |},
|};

export class Home extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            report: {
                before: null,
                after: null,
            },
        };
    }

    componentDidMount() {
        console.log(this.props);
        console.log('---> Component Home did mount');
    }

    handleTwoFileChange = async (evt: SyntheticEvent<HTMLInputElement>) => {
        const {currentTarget} = evt;
        const {files} = currentTarget;

        const [file1, file2] = files;
        const report1 = await getFileAsJson<ReportDataType>(file1);
        const report2 = file2 ? await getFileAsJson<ReportDataType>(file2) : JSON.parse(JSON.stringify(report1));
        const [before, after] = [report1, report2].sort(
            (reportA: ReportDataType, reportB: ReportDataType): number => reportA.timeStamp - reportB.timeStamp
        );

        this.setState({report: {before, after}});
    };

    render(): Node {
        const {state} = this;
        const {report} = state;
        const {before, after} = report;

        return (
            <>
                <h1>Reporter</h1>
                <br/>
                <input multiple onChange={this.handleTwoFileChange} type="file"/>
                <hr/>
                {before && after ? <GuildStatistics report={{before, after}}/> : null}
                <hr/>
                {before && after ? <TopDeck report={{before, after}}/> : null}
            </>
        );
    }
}
