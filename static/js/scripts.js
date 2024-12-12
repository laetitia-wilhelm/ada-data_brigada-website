const content_dir = 'contents/';
const config_file = 'config.yml';
const section_names = ['home', 'character', 'heroVSvillain', 'successMovie'];

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Yaml Configuration File
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString());
                }
            });
        })
        .catch(error => console.log(error));

    // Fetch .md or .html files and inject them into the page
    section_names.forEach((name, idx) => {
        let filePath = content_dir + name;
        
        // Check if the content is a Markdown file or an HTML file
        fetch(filePath + '.md')  // Try to fetch Markdown file
            .then(response => {
                if (response.ok) {
                    // If .md file exists, convert it using 'marked' and insert HTML
                    return response.text().then(markdown => {
                        const html = marked.parse(markdown);
                        document.getElementById(name + '-md').innerHTML = html;
                    });
                } else {
                    // If .md file doesn't exist, try HTML file
                    return fetch(filePath + '.html').then(htmlResponse => {
                        if (htmlResponse.ok) {
                            // Directly inject HTML content
                            return htmlResponse.text().then(html => {
                                document.getElementById(name + '-md').innerHTML = html;
                            });
                        } else {
                            console.log("Both .md and .html files are missing for section: " + name);
                        }
                    });
                }
            })
            .catch(error => console.log(error));
    });

    // Fetch and inject the character_adjectives.html content
    const characterAdjectivesSection = document.getElementById('character-adjectives-container');
    if (characterAdjectivesSection) {
        fetch('contents/character_adjectives.html') // Path to the HTML file
            .then(response => response.text())
            .then(html => {
                characterAdjectivesSection.innerHTML = html; // Inject the HTML content
            })
            .catch(error => console.log("Error loading character_adjectives.html: ", error));
    }
    

});

