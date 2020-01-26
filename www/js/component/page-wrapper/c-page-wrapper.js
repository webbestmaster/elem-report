// @flow

import React, {type Node} from 'react';

import pageWrapperStyle from './page-wrapper.scss';

type PropsType = {|
    +children: Node,
|};

export type PageWrapperPropsType = PropsType;

export function PageWrapper(props: PropsType): Node {
    const {children} = props;

    return <main className={pageWrapperStyle.main_content}>{children}</main>;
}
