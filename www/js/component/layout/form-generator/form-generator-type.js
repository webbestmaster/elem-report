// @flow

import type {Node} from 'react';

import type {SnackbarContextType} from '../../../provider/snackbar/snackbar-context-type';
import type {PopupContextType} from '../../../provider/popup/popup-context-type';

export type FromGeneratorPrimitiveInputValueType = string | number | boolean | null | File;

export type FromGeneratorInputValueType =
    | FromGeneratorPrimitiveInputValueType
    | Array<string>
    | Array<number>
    | Array<boolean>
    | Array<null>
    | Array<File>;

export type FormGeneratorFormDataType = {
    [key: string]: | FromGeneratorPrimitiveInputValueType
        | Array<string>
        | Array<number>
        | Array<boolean>
        | Array<null>
        | Array<File>,
};

export type InputComponentOnChangeType = (value: FromGeneratorInputValueType) => mixed;

export type ValidateType = (
    name: string,
    value: FromGeneratorInputValueType,
    formData: FormGeneratorFormDataType,
) => Array<Error>;

export type FieldAutocompleteDataType = {|
    +header: string,
    +value: string,
|};

export type InputComponentPropsType = {|
    +name: string,
    +onChange: InputComponentOnChangeType,
    +onBlur: InputComponentOnChangeType,
    +errorList: Array<Error>,
    +defaultValue: FromGeneratorInputValueType,
    +placeholder: Node,
    +labelText: Node,
    +content?: Node,
    +accept?: string,
    +isMultiple?: boolean,
    +filePathPrefix?: string,
    +snackbarContext: SnackbarContextType,
    +popupContext: PopupContextType,
    +uploadFile?: (file: File) => Promise<Error | string>,
    +getAutocompleteListData?: () => Promise<Array<FieldAutocompleteDataType> | Error>,
|};

export type FieldDataType = {|
    +name: string,
    // eslint-disable-next-line id-match
    +fieldComponent: React$ComponentType<InputComponentPropsType>,
    +validate: ValidateType,
    +defaultValue: FromGeneratorInputValueType,
    +placeholder: Node,
    +labelText: Node,
    +content?: Node,
    +isHidden?: boolean,
    +accept?: string,
    +isMultiple?: boolean,
    +filePathPrefix?: string,
    +uploadFile?: (file: File) => Promise<Error | string>,
    +getAutocompleteListData?: () => Promise<Array<FieldAutocompleteDataType> | Error>,
|};

export type FieldSetWrapperDataType = {
    +children: Node,
    +legend: Node,
};

export type FieldSetDataType = {|
    +name: string,
    +fieldList: Array<FieldDataType>,
    +fieldSetWrapper: {|
        // eslint-disable-next-line id-match
        +component: React$ComponentType<FieldSetWrapperDataType>,
        +legend: Node,
    |},
|};

export type FormGeneratorConfigType = {|
    +fieldSetList: Array<FieldSetDataType>,
|};

export type FormGeneratorImportedFieldDataType = {[key: string]: $Shape<FieldDataType>};
