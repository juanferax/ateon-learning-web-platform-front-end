import React, { useEffect, useState } from "react";
import CourseService from "../services/CourseService";
import { useParams } from "react-router-dom";
import ReactEcharts from "echarts-for-react";

function CourseStatsPage() {
  const { id } = useParams();
  const [course, setCourseDetails] = useState(null);
  const [courseMetrics, setCourseMetrics] = useState(null);

  // Charts
  const [lineChartOptions, setLineChartOptions] = useState(null);
  const [gaugeChartOptions, setGaugeChartOptions] = useState(null);

  const [deliverables, setDeliverables] = useState(null);

  const courseService = CourseService();

  const fetchCourseDetails = async () => {
    try {
      const courseDetails = await courseService.findById(id);
      setCourseDetails(courseDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourseMetrics = async () => {
    try {
      const courseMetricsDetails = await courseService.getCourseMetrics(id);
      setCourseMetrics(courseMetricsDetails);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourseDetails();
    fetchCourseMetrics();
  }, []);

  const renderDeliverable = (deliverable) => {
    const deliverableName = Object.keys(deliverable);

    const deliverableValue = Object.values(Object.values(deliverable))[0];

    const gradeValues = Object.values(deliverableValue);

    const gradeRanges = Object.keys(deliverableValue);

    return {
      title: {
        text: deliverableName,
      },
      color: ["#6652FA"],
      xAxis: {
        type: "category",
        data: gradeRanges,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: gradeValues,
          type: "bar",
        },
      ],
    };
  };

  useEffect(() => {
    if (courseMetrics) {
      setLineChartOptions({
        title: {
          text: "",
        },
        color: ["#6652FA"],
        xAxis: {
          type: "category",
          data: Object.keys(courseMetrics.assistance),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: Object.values(courseMetrics.assistance),
            type: "line",
          },
        ],
      });

      const deliverables = courseMetrics.deliverablesGrades;

      setDeliverables(deliverables);

      const gaugeData = [
        {
          value: courseMetrics.courseCompletion,
          name: "",
          title: {
            offsetCenter: ["0%", "-15%"],
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ["0%", "0%"],
          },
        },
      ];
      setGaugeChartOptions({
        series: [
          {
            color: ["#6652FA"],
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
            },
            axisLine: {
              lineStyle: {
                width: 30,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },
            data: gaugeData,
            title: {
              fontSize: 30,
            },
            detail: {
              width: 130,
              height: 50,
              fontSize: 40,
              color: "inherit",
              formatter: "{value}%",
            },
          },
        ],
      });
    }
  }, [courseMetrics]);

  return (
    <>
      {course && (
        <div className="flex-grow text-left">
          <p className="font-bold text-2xl text-[#162A6E] pb-3">
            Statistics for course "{course.name}"
          </p>
          <div className="">
            <div className="flex justify-between">
              <div className="flex-grow">
                <p className="text-xl pb-1 font-semibold text-[#162A6E]">
                  Course Assistance:
                </p>
                {lineChartOptions && <ReactEcharts option={lineChartOptions} />}
              </div>
              <div className="w-1/3">
                <p className="text-xl pb-1 font-semibold text-[#162A6E]">
                  Course Completion:
                </p>
                <div className="">
                  {gaugeChartOptions && (
                    <ReactEcharts
                      option={gaugeChartOptions}
                      style={{ top: 0 }}
                    />
                  )}
                </div>
              </div>
            </div>

            <p className="text-xl pb-3 font-semibold text-[#162A6E]">
              Deliverables Notes:
            </p>
            {deliverables &&
              deliverables.map((deliverable, idx) => {
                return (
                  <ReactEcharts
                    key={idx}
                    option={renderDeliverable(deliverable)}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default CourseStatsPage;
