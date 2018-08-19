import React from "react";
import "./ChartModal.css";
import { openClose, switchChart } from "../actions.js";
import { connect } from "react-redux";
import { Pie, Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

export class ChartModal extends React.Component {
  render() {
    let orderedLabels = [
      "Clothing",
      "Cooking",
      "First Aid",
      "Hiking",
      "Hygiene",
      "Misc",
      "Navigation",
      "Shelter",
      "Sleep",
      "Water"
    ];

    let orderedCategories = [
      "clothing",
      "cooking",
      "firstaid",
      "hiking",
      "hygiene",
      "misc",
      "navigation",
      "shelter",
      "sleep",
      "water"
    ];

    let orderedColors = [
      "#3f69aa",
      "#7f4145",
      "#6b5b95",
      "#bd3d3a",
      "#006e6d",
      "#00CED1",
      "#d5ae41",
      "#766f57",
      "#e47a2e",
      "#2e4a62"
    ];
    let dataObj = {
      weight_Pie: {
        type: "Pie",
        labels: ["Critical", "Important", "Unimportant"],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: [
              "rgba(255, 25, 25, 1)",
              "rgba(255, 244, 0, 1)",
              "rgba(0, 255, 48, .55)"
            ],
            hoverBackgroundColor: [
              "rgba(255, 25, 25, .55)",
              "rgba(255, 244, 0, .55)",
              "rgba(0, 255, 48, .55)"
            ]
          }
        ],
        options: {
          plugins: {
            datalabels: {
              display: true,
              formatter: function(value, context) {
                return value + "%";
              }
            }
          }
        }
      },
      category_Pie: {
        type: "Pie",
        labels: orderedLabels,
        datasets: [
          {
            data: [],
            backgroundColor: orderedColors
          }
        ],
        options: {
          plugins: {
            datalabels: {
              display: false
            }
          }
        }
      },
      impCat_Bar: {
        type: "Bar",

        labels: orderedLabels,
        datasets: [
          {
            label: "Critical",
            backgroundColor: "rgba(255, 25, 25, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 25, 25, .55)",
            data: []
          },
          {
            label: "Important",
            backgroundColor: "rgba(255, 244, 0, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,255,0,0.55)",
            data: []
          },
          {
            label: "Unimportant",
            backgroundColor: "rgba(0, 255, 48, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(0, 255, 48, .55)",
            data: []
          }
        ],
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  autoSkip: false
                },
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true
              }
            ]
          },
          plugins: {
            datalabels: {
              display: false
            }
          }
        }
      }
    };

    let currentChart;
    let state = this.props.fullState;
    let chartState = this.props.fullState.ui.chartSelect;

    let totalListOzs = this.props.totalListWeight * 16;

    let totalsObj = {
      categoryCount: {
        clothing: 0,
        cooking: 0,
        firstaid: 0,
        hiking: 0,
        hygiene: 0,
        misc: 0,
        navigation: 0,
        shelter: 0,
        sleep: 0,
        water: 0
      },
      importanceCount: {
        critical: 0,
        important: 0,
        unimportant: 0
      },
      impCatCount: {
        clothing: { critical: 0, important: 0, unimportant: 0 },
        cooking: { critical: 0, important: 0, unimportant: 0 },
        firstaid: { critical: 0, important: 0, unimportant: 0 },
        hiking: { critical: 0, important: 0, unimportant: 0 },
        hygiene: { critical: 0, important: 0, unimportant: 0 },
        misc: { critical: 0, important: 0, unimportant: 0 },
        navigation: { critical: 0, important: 0, unimportant: 0 },
        shelter: { critical: 0, important: 0, unimportant: 0 },
        sleep: { critical: 0, important: 0, unimportant: 0 },
        water: { critical: 0, important: 0, unimportant: 0 }
      }
    };
    for (let b = 0; b < orderedCategories.length; b++) {
      let category = orderedCategories[b];

      for (let i = 0; i < state[category].length; i++) {
        let currentListItem = state[category][i];

        totalsObj.categoryCount[category] += currentListItem.weight;

        if (currentListItem.importance === "critical") {
          dataObj.weight_Pie.datasets[0].data[0] +=
            (currentListItem.weight / totalListOzs).toFixed(2) * 100;
          totalsObj.impCatCount[category].critical += currentListItem.weight;
        }

        if (currentListItem.importance === "important") {
          dataObj.weight_Pie.datasets[0].data[1] +=
            (currentListItem.weight / totalListOzs).toFixed(2) * 100;
          totalsObj.impCatCount[category].important += currentListItem.weight;
        }

        if (currentListItem.importance === "unimportant") {
          dataObj.weight_Pie.datasets[0].data[2] +=
            (currentListItem.weight / totalListOzs).toFixed(2) * 100;
          totalsObj.impCatCount[category].unimportant += currentListItem.weight;
        }
      }
    }

    for (let chart in chartState) {
      if (chartState[chart]) {
        currentChart = chart;
      }
    }

    for (let category in totalsObj.categoryCount) {
      dataObj.category_Pie.datasets[0].data.push(
        totalsObj.categoryCount[category]
      );
      dataObj.impCat_Bar.datasets[0].data.push(
        totalsObj.impCatCount[category].critical
      );
      dataObj.impCat_Bar.datasets[1].data.push(
        totalsObj.impCatCount[category].important
      );
      dataObj.impCat_Bar.datasets[2].data.push(
        totalsObj.impCatCount[category].unimportant
      );
    }

    let selectedChart;
    if (dataObj[currentChart].type === "Pie") {
      selectedChart = (
        <Pie
          width={300}
          height={300}
          data={dataObj[currentChart]}
          options={dataObj[currentChart].options}
        />
      );
    } else {
      selectedChart = (
        <Bar
          data={dataObj[currentChart]}
          width={200}
          height={200}
          options={dataObj[currentChart].options}
        />
      );
    }

    return (
        <div id="chartContainer">
          <button
            id="exitBtn"
            onClick={() => {
              this.props.dispatch(openClose("chartsModal"));
            }}
          >
            X
          </button>
          <div id="chartBtns">
            <button
              className="chartSelectBtn"
              onClick={() => {
                this.props.dispatch(switchChart(currentChart, "weight_Pie"));
              }}
            >
              Item Importance
            </button>
            <button autoFocus
              className="chartSelectBtn"
              onClick={() => {
                this.props.dispatch(switchChart(currentChart, "category_Pie"));
              }}
            >
              Category Weights
            </button>
            <button
              className="chartSelectBtn"
              onClick={() => {
                this.props.dispatch(switchChart(currentChart, "impCat_Bar"));
              }}
            >
              Weight and Importance
            </button>
          </div>
          {selectedChart}
        </div>
    );
  }
}
export default connect()(ChartModal);
