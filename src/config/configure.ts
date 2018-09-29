import { INDEX_MSG, OPTION_MSG, SELECT_MSG, INQUIRE_MSG, INFORMATION_MSG, TODAY_MSG, TABLE_LABEL_NAME,
  TABLE_LABEL_TEAM, TABLE_LABEL_ATTITUDE, TABLE_LABEL_REC, TABLE_SELECT_PLA } from '../content';

export const NAV_ITEM_LIST = [
  {
    name: INDEX_MSG,
    icon: "el-icon-menu",
    children: [],
    index: "manage"
  },
  {
    name: OPTION_MSG,
    icon: "el-icon-document",
    index: '2',
    children: [
      {
        name: SELECT_MSG,
        index: "select"
      }, {
        name: INQUIRE_MSG,
        index: "inquire"
      }, {
        name: INFORMATION_MSG,
        index: "information"
      },
    ]
  },
];

export const MENU_STYLE = {
  mode: "vertical",
  bgColor: "#324057",
  abgColor: "#1f2d3d",
  tColor: "#fff",
  atColor: "#20a0ff",
};

export const PICKER_OPTION = {
  shortcuts: [{
    text: TODAY_MSG,
    onClick(picker) {
      picker.$emit('pick', new Date());
    }
  }]
}

export const TABLE_CONF = {
  tableCol: [{
    id: "name",
    label: TABLE_LABEL_NAME,
    isInput: false,
    width: "180",
    align: "center"
  }, {
    id: "teamSpirit",
    label: TABLE_LABEL_TEAM,
    isInput: true,
    width: "180",
    align: "center",
  }, {
    id: "attitude",
    label: TABLE_LABEL_ATTITUDE,
    isInput: true,
    width: "180",
    align: "center",
  }, {
    id: "recordScore",
    label: TABLE_LABEL_REC,
    isInput: true,
    width: "180",
    align: "center",
  }],
  placeholder: TABLE_SELECT_PLA
}
