
import React from 'react';
import Chart from 'react-apexcharts';

function ComboChart() {
    const options = {
        chart: {
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                endingShape: 'rounded',
            },
        },
        markers: {
            size: 5,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
        },
        xaxis: {
                categories: ['2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023'],
                 },
        yaxis: [
            {
                title: {
                    text: 'Medal Range',
                },
            },
            {
                opposite: true,
                title: {
                    text: 'Difference Medal Curve',
                },
            },
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' MEDALS';
                    }
                    return y;
                },
            },
        },
    };

    const series = [
        {
            name: 'INDIA',
            type: 'column',
            data: [230, 350, 420, 550, 630, 710, 830, 950, 1080, 1200],
        },
        {
            name: 'USA',
            type: 'column',
            data: [120, 200, 290, 360, 430, 500, 600, 670, 740, 820],
        },
        {
            name: ' DIFFERENCE',
            type: 'line',
            data: [80, 110, 130, 180, 200, 230, 260, 300, 340, 380],
            yAxisIndex: 1,
        },
    ];

    return (
        <div className=" bg-[#ffffff] w-full mt-4 p-4 rounded-xl border-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h2 className="text-xl text-[#383f50] font-bold mb-2">CONTRAST CHART</h2>
            <Chart options={options} series={series} type="line"  height={350} />
        </div>
    );
}

export default ComboChart; 