// @flow

import React, {Component, type Node} from 'react';

import {type ReportDataType, type GuildsListDataType} from '../../../../../extract/extract-type';

import type {NullableType} from '../../../lib/type';
import {getFileAsJson} from '../../../lib/file';
import {GuildStatistics} from '../../../component/guild-statistics/c-guild-statistics';
import {TopDeck} from '../../../component/guild-statistics/c-top-deck';
import {GuildsListData} from '../../../component/guild-statistics/c-guilds-list-data';

// import homeStyle from './home.scss';

type PropsType = {};

type StateType = {|
    +report: {|
        +before: NullableType<ReportDataType>,
        +after: NullableType<ReportDataType>,
    |},
    +guildsReport: {|
        +before: NullableType<GuildsListDataType>,
        +after: NullableType<GuildsListDataType>,
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
            guildsReport: {
                before: null,
                after: null,
            },
        };
    }

    componentDidMount() {
        console.log(this.props);
        console.log('---> Component Home did mount');
    }

    handleTwoFileReportChange = async (evt: SyntheticEvent<HTMLInputElement>) => {
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

    handleTwoFileGuildsReportChange = async (evt: SyntheticEvent<HTMLInputElement>) => {
        const {currentTarget} = evt;
        const {files} = currentTarget;

        const [file1, file2] = files;
        const report1 = await getFileAsJson<GuildsListDataType>(file1);
        const report2 = file2 ? await getFileAsJson<GuildsListDataType>(file2) : JSON.parse(JSON.stringify(report1));
        const [before, after] = [report1, report2].sort(
            (reportA: GuildsListDataType, reportB: GuildsListDataType): number => reportA.timeStamp - reportB.timeStamp
        );

        this.setState({guildsReport: {before, after}});
    };

    renderReport(): Node {
        const {state} = this;
        const {report} = state;
        const {before, after} = report;

        return (
            <>
                <h1>Reporter</h1>
                <br/>
                <input multiple onChange={this.handleTwoFileReportChange} type="file"/>
                <hr/>
                {before && after ? <GuildStatistics report={{before, after}}/> : null}
                <hr/>
                {before && after ? <TopDeck report={{before, after}}/> : null}
            </>
        );
    }

    renderGuildsReport(): Node {
        const {state} = this;
        const {guildsReport} = state;
        const {before, after} = guildsReport;

        return (
            <>
                <h1>Top 10 Guild</h1>
                <br/>
                <input multiple onChange={this.handleTwoFileGuildsReportChange} type="file"/>
                <hr/>
                {before && after ? <GuildsListData report={{before, after}}/> : null}
            </>
        );
    }

    render(): Node {
        return (
            <>
                {this.renderReport()}
                <hr/>
                {this.renderGuildsReport()}
                <hr/>
            </>
        );
    }
}
