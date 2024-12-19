// Data for character tropes by genre
const data = {
    "Action": [
        { trope: "corrupt_corporate_executive", count: 15 },
        { trope: "father_to_his_men", count: 10 },
        { trope: "byronic_hero", count: 8 },
        { trope: "master_swordsman", count: 6 },
        { trope: "hitman_with_a_heart", count: 5 }
    ],
    "Black-and-white": [
        { trope: "crazy_jealous_guy", count: 4 },
        { trope: "byronic_hero", count: 3 },
        { trope: "hardboiled_detective", count: 3 },
        { trope: "loveable_rogue", count: 2 },
        { trope: "absent_minded_professor", count: 2 }
    ],
    "Comedy": [
        { trope: "stoner", count: 12 },
        { trope: "brainless_beauty", count: 10 },
        { trope: "dumb_blonde", count: 8 },
        { trope: "slacker", count: 6 },
        { trope: "surfer_dude", count: 5 }
    ],
    "Crime Fiction": [
        { trope: "crazy_jealous_guy", count: 6 },
        { trope: "hardboiled_detective", count: 5 },
        { trope: "hitman_with_a_heart", count: 4 },
        { trope: "psycho_for_hire", count: 4 },
        { trope: "corrupt_corporate_executive", count: 3 }
    ],
    "Drama": [
        { trope: "crazy_jealous_guy", count: 14 },
        { trope: "father_to_his_men", count: 10 },
        { trope: "byronic_hero", count: 8 },
        { trope: "psycho_for_hire", count: 6 },
        { trope: "arrogant_kungfu_guy", count: 5 }
    ],
    "Indie": [
        { trope: "brainless_beauty", count: 6 },
        { trope: "psycho_for_hire", count: 5 },
        { trope: "bromantic_foil", count: 4 },
        { trope: "final_girl", count: 3 },
        { trope: "grumpy_old_man", count: 2 }
    ],
    "Romance Film": [
        { trope: "brainless_beauty", count: 4 },
        { trope: "big_man_on_campus", count: 3 },
        { trope: "crazy_jealous_guy", count: 3 },
        { trope: "byronic_hero", count: 2 },
        { trope: "jerk_jock", count: 2 }
    ],
    "Short Film": [
        { trope: "master_swordsman", count: 2 },
        { trope: "broken_bird", count: 2 },
        { trope: "byronic_hero", count: 1 },
        { trope: "corrupt_corporate_executive", count: 1 },
        { trope: "egomaniac_hunter", count: 1 }
    ],
    "Thriller": [
        { trope: "crazy_jealous_guy", count: 12 },
        { trope: "psycho_for_hire", count: 10 },
        { trope: "corrupt_corporate_executive", count: 8 },
        { trope: "dirty_cop", count: 7 },
        { trope: "father_to_his_men", count: 6 }
    ],
    "World cinema": [
        { trope: "byronic_hero", count: 2 },
        { trope: "father_to_his_men", count: 2 },
        { trope: "revenge", count: 1 },
        { trope: "arrogant_kungfu_guy", count: 1 },
        { trope: "bounty_hunter", count: 1 }
    ]
};






// Function to update the chart based on selected genre
function updateChart() {
    const genre = document.getElementById("genre-selector").value;
    const selectedData = data[genre];

    // Modify the trope names to replace underscores with spaces for better readability
    const xValues = selectedData.map(d => d.trope.replace(/_/g, ' '));
    const yValues = selectedData.map(d => d.count);

    const chartData = [
        {
            x: xValues,
            y: yValues,
            type: 'bar',
            marker: {
                color: 'skyblue'
            }
        }
    ];

    const layout = {
        title: `Top 5 Character Tropes in ${genre}`,
        xaxis: {
            title: '',
            tickangle: -40
        },
        yaxis: {
            title: 'Count'
        },
        plot_bgcolor: "transparent",
        paper_bgcolor: "transparent",
        font: {
            family: "Arial, sans-serif",
            size: 14
        },
        margin: {
            t: 60,  // Top margin
            b: 150,  // Bottom margin for x-axis labels
            l: 60,  // Left margin
            r: 40   // Right margin
        },
        showlegend: false
    };

    const config = {
        displayModeBar: false  // Hide the mode bar at the top right
    };

    Plotly.newPlot('chart-genre', chartData, layout, config);
}

// Initialize the chart with the first genre
document.addEventListener('DOMContentLoaded', () => {
    updateChart();
});
