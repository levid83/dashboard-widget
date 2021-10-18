import React from "react";

import Report from "../components/widgets/report";

const data = {
  data: {
    query: {
      headers: [
        {
          key: "g_88641",
          title: "Browser",
          prefix: null,
          suffix: null,
          decimals: null,
        },
        {
          key: "c_95059",
          title: "Net Impressions",
          prefix: "",
          suffix: "",
          decimals: 0,
        },
        {
          key: "c_5652",
          title: "Ad slots",
          prefix: "",
          suffix: "",
          decimals: 0,
        },
        {
          key: "c_20192",
          title: "Fill rate",
          prefix: "",
          suffix: "%",
          decimals: 0,
        },
      ],
      meta: [
        {
          key: "g_88641",
          title: "Chrome Mobile",
        },
        {
          key: "g_88641",
          title: "Facebook",
        },
        {
          key: "g_88641",
          title: "Mobile Safari",
        },
        {
          key: "g_88641",
          title: "Chrome",
        },
        {
          key: "g_88641",
          title: "Chrome Mobile WebView",
        },
      ],
      data: [
        [
          {
            k: "c_95059",
            v: 81642,
          },
          {
            k: "c_5652",
            v: 110228,
          },
          {
            k: "c_20192",
            v: 74.0483169555664,
          },
        ],
        [
          {
            k: "c_95059",
            v: 55878,
          },
          {
            k: "c_5652",
            v: 79687,
          },
          {
            k: "c_20192",
            v: 69.4740498860677,
          },
        ],
        [
          {
            k: "c_95059",
            v: 40399,
          },
          {
            k: "c_5652",
            v: 73343,
          },
          {
            k: "c_20192",
            v: 55.517957051595054,
          },
        ],
        [
          {
            k: "c_95059",
            v: 18858,
          },
          {
            k: "c_5652",
            v: 32675,
          },
          {
            k: "c_20192",
            v: 57.17907460530599,
          },
        ],
        [
          {
            k: "c_95059",
            v: 12802,
          },
          {
            k: "c_5652",
            v: 24721,
          },
          {
            k: "c_20192",
            v: 52.19658533732096,
          },
        ],
      ],
    },
  },
};

const columnConfig1 = [
  {
    key: "c_95059",
    showPlot: true,
    showValue: true,
    isHidden: false,
  },
  {
    key: "c_5652",
    showPlot: true,
    showValue: true,
    isHidden: false,
  },
  {
    key: "c_20192",
    showPlot: true,
    showValue: true,
    isHidden: false,
  },
];

const columnConfig2 = [
  {
    key: "c_95059",
    showPlot: false,
    showValue: true,
    isHidden: false,
  },
  {
    key: "c_5652",
    showPlot: true,
    showValue: true,
    isHidden: true,
  },
  {
    key: "c_20192",
    showPlot: true,
    showValue: true,
    isHidden: false,
  },
];

export default {
  title: "React Test Widget",
  component: Report,
};

const Template = (args) => (
  <div style={{ width: "600px", resize: "both", overflow: "auto" }}>
    <Report {...args} />
  </div>
);

export const Instance1 = Template.bind({});

Instance1.args = {
  data: data,
  colConfig: columnConfig1,
};

export const Instance2 = Template.bind({});
Instance2.args = {
  data: data,
  colConfig: columnConfig2,
};
