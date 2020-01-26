// @flow

export type GuildManDataType = {|
    +id: number,
    +name: string,
    +level: number,
    +rank: string,
    +deckValue: number,
    +daysInGame: number,
|};

export type GuildCardDataType = {|
    +value: number,
    +level: number,
|};

export type ReportDataType = {
    +timeStamp: number,
    +guildLevel: number,
    +altarLevel: number,
    +guildCard: GuildCardDataType,
    +manList: Array<GuildManDataType>,
};
