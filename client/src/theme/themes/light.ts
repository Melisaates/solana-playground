import { PgTheme } from "../interface";

// BG
const BG_DARK = "#2c2c2c";
const BG_LIGHT = "#f3f3f3";
const BG_WHITE = "#ffffff";

// FG
const BLUE = "#2979cc";
const PURPLE = "#af22db";
const GUTTER_BLUE = "#257893";
const TYPE_BLUE = "#41b3e8";
const FN_YELLOW = "#e19f41";
const KEYWORDS_BLUE = "#285fff";
const CONDITIONAL_PURPLE = "#b14ff1";
const NUMBER_GREEN = "#298c67";
const STRING_RED = "#b41c32";
const AMPERSAND_DARK_BLUE = "#020737";
const ERROR_RED = "#ff5555";

//TEXT
const TEXT_PRIMARY = "#333333";
const TEXT_SECONDARY = "#555555";

// State
const COMMENT = "#238000";
const SELECTION = "#e5ebf1";
const HOVER = "#ecedee";
const DISABLED = "#cccccc";

export const LIGHT: PgTheme = {
  name: "Light",
  isDark: false,
  colors: {
    default: {
      bgPrimary: BG_WHITE,
      bgSecondary: BG_LIGHT,
      primary: BLUE,
      secondary: PURPLE,
      textPrimary: TEXT_PRIMARY,
      textSecondary: TEXT_SECONDARY,
      borderColor: SELECTION,
    },
    state: {
      hover: {
        bg: HOVER,
        color: "#71717110",
      },
      disabled: {
        bg: DISABLED,
        color: TEXT_SECONDARY,
      },
      error: {
        color: ERROR_RED,
      },
      success: {
        color: NUMBER_GREEN,
      },
      warning: {
        color: FN_YELLOW,
      },
      info: {
        color: BLUE,
      },
    },
    left: {
      bg: BG_DARK,
    },
    right: {
      bg: BG_LIGHT,
    },
    editor: {
      bg: BG_WHITE,
      color: "#0f1780",
      selection: {
        bg: SELECTION,
      },
      comment: {
        bg: COMMENT,
      },
      gutter: {
        color: GUTTER_BLUE,
        activeColor: TEXT_PRIMARY,
      },
    },
    iconButton: {
      selectedBg: "#00000020",
      selectedBorderColor: BG_LIGHT,
    },
    bottom: {
      color: BG_WHITE,
    },
  },
  components: {
    button: {
      overrides: {
        primary: {
          color: BG_LIGHT,
          hover: {
            color: BG_WHITE,
          },
        },
        secondary: {
          color: BG_LIGHT,
          hover: {
            color: BG_WHITE,
          },
        },
        "primary-transparent": {
          bg: BLUE + "dd",
          color: BG_LIGHT,
          hover: {
            bg: BLUE + "bb",
            color: BG_WHITE,
          },
        },
        "secondary-transparent": {
          bg: PURPLE + "dd",
          color: BG_LIGHT,
          hover: {
            bg: PURPLE + "bb",
            color: BG_WHITE,
          },
        },
        error: {
          color: BG_LIGHT,
          hover: {
            color: BG_WHITE,
          },
        },
        outline: {
          borderColor: TEXT_SECONDARY + "36",
        },
      },
    },
  },
  skeleton: {
    color: "#e5e4e6",
    highlightColor: BG_LIGHT,
  },
  highlight: {
    typeName: { color: TYPE_BLUE, fontStyle: "italic" },
    variableName: { color: TEXT_PRIMARY },
    namespace: { color: TYPE_BLUE },
    macroName: { color: KEYWORDS_BLUE },
    functionCall: { color: FN_YELLOW },
    functionDef: { color: FN_YELLOW },
    functionArg: { color: TEXT_PRIMARY },
    definitionKeyword: { color: KEYWORDS_BLUE },
    moduleKeyword: { color: KEYWORDS_BLUE },
    modifier: { color: KEYWORDS_BLUE },
    controlKeyword: { color: CONDITIONAL_PURPLE },
    operatorKeyword: { color: KEYWORDS_BLUE },
    keyword: { color: KEYWORDS_BLUE },
    self: { color: KEYWORDS_BLUE },
    bool: { color: KEYWORDS_BLUE },
    integer: { color: NUMBER_GREEN },
    literal: { color: NUMBER_GREEN },
    string: { color: STRING_RED },
    character: { color: STRING_RED },
    operator: { color: AMPERSAND_DARK_BLUE },
    derefOperator: { color: AMPERSAND_DARK_BLUE },
    specialVariable: { color: AMPERSAND_DARK_BLUE },
    lineComment: { color: COMMENT },
    blockComment: { color: COMMENT },
    meta: { color: GUTTER_BLUE },
    invalid: { color: ERROR_RED },
    constant: { color: TEXT_SECONDARY },
    regexp: { color: STRING_RED },
    tagName: { color: STRING_RED },
    attributeName: { color: STRING_RED },
    attributeValue: { color: STRING_RED },
    annotion: { color: STRING_RED },
  },
};
