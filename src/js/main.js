// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctx, {
        type: 'bar', // Defines the type of chart
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 17000, 21000, 24000, 22000], // Sample data
                backgroundColor: 'rgb(15,81,51,0.8)', // Color of the dots
                borderColor: 'rgb(4,63,36,0.9)', // Color of the line
                borderWidth: 1,
                tension: 0.3,
                borderRadius: 10
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true, // Start the y-axis from 0
                    title: {
                        display: true,
                        text: 'Revenue (USD)' // Y-axis label
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month' // X-axis label
                    }
                }
            },
            plugins: {
                legend: {
                    display: true, // Enable legend (useful if multiple datasets)
                    position: 'top', // Position of legend
                }
            },
            responsive: true, // Ensure the chart is responsive
            maintainAspectRatio: true, // Add this to not maintain the natural aspect ratio
            barThickness: 20
        }
    });

    // Toggle the sidebar
    const asideToggle = document.getElementById('aside_toggle');
    const aside = document.querySelector('.aside');
    asideToggle.addEventListener('click', function () {
        // Toggle the sidebar by adding/removing the 'aside-hidden' class
        aside.classList.toggle('aside-hidden');
    });
    // listen when browser is resized
    window.addEventListener('resize', function () {
        // check if the browser width is less than 992px
        if (window.innerWidth < 992) {
            // Add the 'aside-hidden' class to the sidebar
            aside.classList.add('aside-hidden');
        } else {
            // Remove the 'aside-hidden' class from the sidebar
            aside.classList.remove('aside-hidden');
        }
    });
    // listen when clicked outside the sidebar
    window.addEventListener('click', function (e) {
        // check if the clicked element is not the sidebar and not aside_toggle and their children i.e this should be on small screen only
        // check the browser width is less than 992px

        if (!aside.contains(e.target) && e.target !== asideToggle && !asideToggle.contains(e.target) && window.innerWidth < 992) {
            // Add the 'aside-hidden' class to the sidebar
            aside.classList.add('aside-hidden');
        }
    });
});