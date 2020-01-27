// @flow

import React, {Component, type Node} from 'react';

import type {NullableType} from '../../../lib/type';
import type {ReportDataType} from '../../../../../extract/extract-type';

type PropsType = {
    +report: {|
        +before: NullableType<ReportDataType>,
        +after: NullableType<ReportDataType>,
    |},
};

type StateType = {};

export class GuildStatistics extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        return <h1>GuildStatistics</h1>;
    }
}
