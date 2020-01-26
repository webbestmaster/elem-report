// @flow

export type GuildCardDataType = {|
    +value: number,
    +level: number,
|};

export type ReportDataType = {
    +timeStamp: number,
    +guildLevel: number,
    +altarLevel: number,
    +guildCard: GuildCardDataType,
};
