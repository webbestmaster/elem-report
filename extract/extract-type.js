// @flow

export type NullableType<Type> = Type | null;

export type PeriodNameType = 'usual' | 'war';

export type GuildManWarDataType = {|
    +deckValue: number,
    +damageValue: number,
    +fightCount: number,
    +keyCount: number,
    +hasGoblinCard: boolean,
|};

export type GuildManDataType = {|
    +id: number,
    +name: string,
    +level: number,
    +rank: string,
    +deckValue: number,
    +daysInGame: number,
    +warData: NullableType<GuildManWarDataType>,
    +avatarSrc: string,
|};

export type GuildCardDataType = {|
    +value: number,
    +level: number,
|};

export type ReportDataType = {|
    +timeStamp: number,
    +guildLevel: NullableType<number>,
    +altarLevel: NullableType<number>,
    +guildCard: NullableType<GuildCardDataType>,
    +manList: Array<GuildManDataType>,
|};
