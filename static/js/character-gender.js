    
document.addEventListener("DOMContentLoaded", function () {

    // Male and Female adjectives data
    const maleAdjectives = [
        { adjective: "None", frequency: "3189 (64.2%)" },
        { adjective: "Crazy, jealous", frequency: "398 (8.0%)" },
        { adjective: "Byronic", frequency: "290 (5.8%)" },
        { adjective: "Corrupt", frequency: "247 (5.0%)" },
        { adjective: "Dirty", frequency: "144 (2.9%)" },
        { adjective: "Cultured", frequency: "104 (2.1%)" },
        { adjective: "Fastest", frequency: "101 (2.0%)" },
        { adjective: "Loveable", frequency: "96 (1.9%)" },
        { adjective: "Sargeant", frequency: "93 (1.9%)" },
        { adjective: "Egomaniac", frequency: "91 (1.8%)" },
        { adjective: "Romantic", frequency: "72 (1.4%)" },
        { adjective: "Professional", frequency: "66 (1.3%)" },
        { adjective: "Young", frequency: "62 (1.2%)" },
        { adjective: "Arrogant", frequency: "58 (1.2%)" },
        { adjective: "Absent, minded", frequency: "56 (1.1%)" },
        { adjective: "Playful", frequency: "56 (1.1%)" },
        { adjective: "Evil", frequency: "53 (1.1%)" },
        { adjective: "Crazy", frequency: "51 (1.0%)" },
        { adjective: "Soft", frequency: "46 (0.9%)" },
        { adjective: "Eccentric", frequency: "46 (0.9%)" },
        { adjective: "Grumpy, old", frequency: "45 (0.9%)" },
        { adjective: "Stupid", frequency: "43 (0.9%)" },
        { adjective: "Big", frequency: "36 (0.7%)" },
        { adjective: "Dumb", frequency: "34 (0.7%)" },
        { adjective: "Bromantic", frequency: "29 (0.6%)" },
        { adjective: "Bankrupt", frequency: "27 (0.5%)" },
        { adjective: "Dumb, blonde", frequency: "1 (0.02%)" }
    ];

    const femaleAdjectives = [
        { adjective: "Dumb blonde", frequency: "62 (12.7%)" },
        { adjective: "Arrogant", frequency: "5 (1.0%)" },
        { adjective: "Eccentric", frequency: "3 (0.6%)" },
        { adjective: "None", frequency: "366 (75%)" }
    ];

    // Male and Female tables
    const maleTableBody = document.getElementById("maleTable").querySelector("tbody");
    const femaleTableBody = document.getElementById("femaleTable").querySelector("tbody");
    const maleSlider = document.getElementById("maleAdjectiveSlider");
    const femaleSlider = document.getElementById("femaleAdjectiveSlider");
    const maleSliderValue = document.getElementById("maleSliderValue");
    const femaleSliderValue = document.getElementById("femaleSliderValue");

    function populateMaleTable(limit) {
        maleTableBody.innerHTML = "";
        maleAdjectives.slice(0, limit).forEach(({ adjective, frequency }) => {
            const row = `<tr><td>${adjective}</td><td>${frequency}</td></tr>`;
            maleTableBody.insertAdjacentHTML("beforeend", row);
        });
    }

    function populateFemaleTable(limit) {
        femaleTableBody.innerHTML = "";
        femaleAdjectives.slice(0, limit).forEach(({ adjective, frequency }) => {
            const row = `<tr><td>${adjective}</td><td>${frequency}</td></tr>`;
            femaleTableBody.insertAdjacentHTML("beforeend", row);
        });
    }

    // Initialize tables
    populateMaleTable(parseInt(maleSlider.value, 10));
    populateFemaleTable(parseInt(femaleSlider.value, 10));

    maleSlider.addEventListener("input", () => {
        const limit = parseInt(maleSlider.value, 10);
        maleSliderValue.textContent = limit;
        populateMaleTable(limit);
    });

    femaleSlider.addEventListener("input", () => {
        const limit = parseInt(femaleSlider.value, 10);
        femaleSliderValue.textContent = limit;
        populateFemaleTable(limit);
    });

    function toggleGender(gender) {
        if (gender === "male") {
            document.getElementById("maleDiv").style.display = "block";
            document.getElementById("femaleDiv").style.display = "none";
        } else if (gender === "female") {
            document.getElementById("femaleDiv").style.display = "block";
            document.getElementById("maleDiv").style.display = "none";
        }
    }

    document.getElementById("maleButton").addEventListener("click", () => {
        console.log("Male button clicked");
        toggleGender("male");
        // Ensure male table is populated and shown
        populateMaleTable(parseInt(maleSlider.value, 10));
    });

    document.getElementById("femaleButton").addEventListener("click", () => {
        console.log("Female button clicked");
        toggleGender("female");
        // Ensure female table is populated and shown
        populateFemaleTable(parseInt(femaleSlider.value, 10));
    });
});


// script.js
document.addEventListener("DOMContentLoaded", function () {

    const maleVerbs = [
        { verb: "none", frequency: "366 (30.9%)" },
        { verb: "drill", frequency: "93 (7.9%)" },
        { verb: "hardboiled", frequency: "87 (7.3%)" },
        { verb: "retired", frequency: "81 (6.8%)" },
        { verb: "casanova", frequency: "69 (5.8%)" },
        { verb: "consummate", frequency: "66 (5.5%)" },
        { verb: "henpecked", frequency: "64 (5.4%)" },
        { verb: "turned", frequency: "53 (4.5%)" },
        { verb: "broken", frequency: "22 (1.8%)" },
        { verb: "made", frequency: "22 (1.8%)" },
        { verb: "klutz", frequency: "10 (0.8%)" }
    ];

    
    const femaleVerbs = [
    { verb: "broken", frequency: "44 (8.6%)" },
    { verb: "klutz", frequency: "9 (1.7%)" },
    { verb: "none", frequency: "434 (89.7%)" }
];


    // Male and Female tables for verbs
    const maleVerbsTableBody = document.getElementById("maleVerbsTable").querySelector("tbody");
    const femaleVerbsTableBody = document.getElementById("femaleVerbsTable").querySelector("tbody");
    const maleVerbSlider = document.getElementById("maleVerbSlider");
    const femaleVerbSlider = document.getElementById("femaleVerbSlider");
    const maleVerbSliderValue = document.getElementById("maleVerbSliderValue");
    const femaleVerbSliderValue = document.getElementById("femaleVerbSliderValue");

    // Function to populate Male Verbs Table
    function populateMaleVerbsTable(limit) {
        maleVerbsTableBody.innerHTML = "";
        maleVerbs.slice(0, limit).forEach(({ verb, frequency }) => {
            const row = `<tr><td>${verb}</td><td>${frequency}</td></tr>`;
            maleVerbsTableBody.insertAdjacentHTML("beforeend", row);
        });
    }

    // Function to populate Female Verbs Table
    function populateFemaleVerbsTable(limit) {
        femaleVerbsTableBody.innerHTML = "";
        femaleVerbs.slice(0, limit).forEach(({ verb, frequency }) => {
            const row = `<tr><td>${verb}</td><td>${frequency}</td></tr>`;
            femaleVerbsTableBody.insertAdjacentHTML("beforeend", row);
        });
    }


    function toggleGenderVerb(gender) {
        if (gender === "male") {
            document.getElementById("maleVerbsDiv").style.display = "block";
            document.getElementById("femaleVerbsDiv").style.display = "none";
        } else if (gender === "female") {
            document.getElementById("femaleVerbsDiv").style.display = "block";
            document.getElementById("maleVerbsDiv").style.display = "none";
        }
    }


    // Initialize Verbs Tables
    populateMaleVerbsTable(parseInt(maleVerbSlider.value, 10));
    populateFemaleVerbsTable(parseInt(femaleVerbSlider.value, 10));

    // Update Male Verbs Table on slider change
    maleVerbSlider.addEventListener("input", () => {
        const limit = parseInt(maleVerbSlider.value, 10);
        maleVerbSliderValue.textContent = limit;
        populateMaleVerbsTable(limit);
    });

    // Update Female Verbs Table on slider change
    femaleVerbSlider.addEventListener("input", () => {
        const limit = parseInt(femaleVerbSlider.value, 10);
        femaleVerbSliderValue.textContent = limit;
        populateFemaleVerbsTable(limit);
    });

    // Show or hide Male Verbs Table when button is clicked
    document.getElementById("maleVerbButton").addEventListener("click", () => {
        const maleVerbsDiv = document.getElementById("maleVerbsDiv");
        toggleGenderVerb("male");
        populateMaleVerbsTable(parseInt(maleVerbSlider.value, 10)); // Populate table if shown

    });

    // Show or hide Female Verbs Table when button is clicked
    document.getElementById("femaleVerbButton").addEventListener("click", () => {
        const femaleVerbsDiv = document.getElementById("femaleVerbsDiv");
        toggleGenderVerb("female");
        populateMaleVerbsTable(parseInt(femaleVerbsDiv.value, 10)); // Populate table if shown

    });


});


document.addEventListener('DOMContentLoaded', function() {
    // Fetch the data from the gender_distribution.txt file
    fetch('static/assets/character/gender_distribution.txt')
        .then(response => response.text())
        .then(data => {
            console.log("txt loaded");
            // Parse the data from the text file into an array of objects
            const rows = data.split('\n').slice(2);  // Skip the first 2 lines (header)
            const years = [];
            const femalePercentages = [];
            const malePercentages = [];

            rows.forEach(row => {
                const [year, female, male] = row.split(' | ').map(item => item.trim());
                if (year && female && male) {
                    years.push(parseInt(year));
                    femalePercentages.push(parseFloat(female/100));
                    malePercentages.push(parseFloat(male/100));
                }
            });

            // Plot the data using Plotly (Stacked graph)
            const traceFemale = {
                x: years,
                y: femalePercentages,
                type: 'scatter',
                mode: 'none',  // No markers or lines
                name: 'Female %',
                fill: 'tonexty',  // Stack on top of male percentage
                fillcolor: 'lightpink',
                hovertemplate: '<b>Year: %{x}</b><br>Female: %{y:.2f}%<extra></extra>',
                stackgroup: 1,  // Group for stacking
            };

            const traceMale = {
                x: years,
                y: malePercentages,
                type: 'scatter',
                mode: 'none',  // No markers or lines
                name: 'Male %',
                fill: 'tonexty',  // Stack on top of female percentage
                fillcolor: 'lightblue',
                hovertemplate: '<b>Year: %{x}</b><br>Male: %{y:.2f}%<extra></extra>',
                stackgroup: 1,  // Group for stacking
            };

            // Layout configuration for the plot
            const layout = {
                title: 'Gender Distribution in Films',
                xaxis: { 
                    title: 'Year',
                    range: [1960, 2015],
                    tickangle: 45,  // Tilt x-axis labels for readability
                    tickmode:'linear',
                    dtick: 10,
                    ticks: 'outside',    // Add small bars on ticks
                    ticklen: 5,          // Length of the tick bars
                    tickwidth: 1,        // Width of the tick bars
                    tickcolor: 'black',  // Color of the tick bars
                },
                yaxis: { 
                    title: "",
                    range: [0, 1], // Ensure the y-axis range is from 0 to 100%
                    tickformat: '%',  // Show percentage format
                    dtick: 0.25, 
                    ticks: 'outside',    // Add small bars on ticks
                    ticklen: 5,          // Length of the tick bars
                    tickwidth: 1,        // Width of the tick bars
                    tickcolor: 'black',  // Color of the tick bars  

                },
                template: 'plotly_white',
                showlegend: true,
                hovermode: 'x unified',  // This ensures both gender values show when hovering over a year
                margin: {
                    l: 50,  // Left margin
                    r: 50,  // Right margin
                    t: 50,  // Top margin
                    b: 80   // Bottom margin for better spacing
                },
            };

            // Data array to be passed to Plotly
            const dataPlot = [traceFemale, traceMale];
            Plotly.newPlot('plotly-graph', dataPlot, layout);
        })
        .catch(error => {
            console.error('Error loading the data:', error);
        });
});

