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
    +avatarSrc: string,
    +name: string,
    +level: number,
    +rank: string,
    +deckValue: number,
    +daysInGame: number,
    +daysInGuild: number,
    +warData: NullableType<GuildManWarDataType>,
|};

export type GuildManShortDataType = {|
    +id: number,
    +daysInGuild: number,
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

export type GuildDataType = {|
    +report: ReportDataType,
    +guildId: string,
    +name: string,
    +logoSrc: string,
|};

export type GuildsListDataType = {|
    +timeStamp: number,
    +guildList: Array<GuildDataType>,
|};
