const xValuesInput = document.getElementById('x-values');
const yValuesInput = document.getElementById('y-values');
const plotBtn = document.getElementById('plot-btn');
const chartCanvas = document.getElementById('chart');

let chart;

plotBtn.addEventListener('click', function () {
    const xValues = xValuesInput.value.split(',').map(Number);
    const yValues = yValuesInput.value.split(',').map(Number);

    if (xValues.length === yValues.length && xValues.length > 0) {
        if (chart) {
            chart.destroy(); // Destroy existing chart if it exists
        }

        chart = new Chart(chartCanvas, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    label: 'Data Points',
                    data: yValues,
                    borderColor: '#28a745',
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'X Values'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Y Values'
                        }
                    }
                }
            }
        });
    } else {
        alert('Please enter valid X and Y values with the same number of data points.');
    }
});
