# **Visualization of the character tropes data**

## 🎯 **Objective**  
To study the representation of character tropes in films and explore how they influence the movie industry, we must first define and look at the tropes we are working with. We will visualize the distribution of character tropes in the dataset `tv_tropes` to have an idea of the most common character tropes and see if those common characters can differ across genres and time. 

## 📊 **Distribution of character tropes in the dataset**

<!-- Image -->
  <div style="display: flex; justify-content: center; align-items: center; height: 70vh;">
    <img src="static/assets/archetypes/tropes_count_hist.png" alt="Tropes Distribution" style="max-width: 90%; height: auto;"/>
  </div>

🟢 **Observation**: 
We can see that the most common tropes of this dataset are "crazy jealous guy" and "corrupt corporate executive". The least common trope is "classy cat burglar" which is not that surprising because it is a very specific kind of character that can only appear in very peculiar cases of movies.

---
# 🎥 **Exploring Gender and Character Tropes in Film**  

## 🎯 **Objective**  
In film, we often believe that there is a strong gendered representation of characters, with distinct traits and roles assigned to men and women. In this part of our analysis, we will explore how characters are described across genders. Do the same words describe both men and women, or are the descriptions different? Are male and female characters portrayed with similar complexity?


## 📊 **Gender Representation in Film**  


<div style="display: flex; align-items: center; gap: 20px;">

  <!-- Left: Text Content -->
  <div style="flex: 1; font-family: Arial, sans-serif; line-height: 1.6;">
    <p><strong>📊 Overall Representation</strong>: Women account for only <strong>30%</strong> of all characters in movies, a figure that has remained largely stagnant over decades.</p>
    <p><strong>🎭 Trope Representation</strong>: In the dataset of trope-rich roles, only <strong>14%</strong> of characters are female, compared to <strong>86%</strong> male.</p>
    <table class="table table-striped table-hover table-primary">
                        <thead>
                            <tr style="text-align: center;">
                                <th> Mean Values</th>
                                <th>Male</th>
                                <th>Female</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Overall Representation</td>
                                <td>70%</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>Trope Representation</td>
                                <td>86%</td>
                                <td>14%</td>
                            </tr>
                        </tbody>
                    </table>
    
  </div>

  <!-- Right: Image -->
  <div style="flex: 1;">
    <img src="../static/assets/character/gender_dist.png" alt="Gender Distribution" style="width: 100%; max-width: 600px; height: auto;"/>
  </div>

</div>


<div style="display: flex; justify-content: center; align-items: center; height: 70vh;">
  <img src="../static/assets/character/DistributionOfMaleAndFemaleCharacterTrops.png" alt="Gender Distribution" style="max-width: 80%; height: auto;"/>
</div>


🟢 **Observation**: 
There are 6 times more male occurence of these character tropes than female ones, which means that only 14% of the characters in this tropes dataset are women. This is half the count of women in films that we showed above which was already low. This shows that there are in addition to having a lot less female representation in movies, we also lack the data on which type of characters these actresses portray. The most common trope we see here for women are "dumb blonde" and "brainless beauty" which are very stereotypical tropes. However, it is important to note again that the dataset is not big enough and there is clearly not enough data for women archetypes.


## 📝 **Lexical Analysis: Descriptive Words**  

Now that we have observed the differences in the distribution and types of character tropes between genders, we will take a closer
                 look at the lexical choices used to describe them. In this second part of the gender analysis, we will examine the variety and complexity of verbs 
                 and adjectives associated with male and female characters. How diverse is the language used for each gender? Are the descriptions nuanced or
                  reductive? 
                This will help us better understand how language contributes to the portrayal of gender in films.


### **Word Count Per Character**  
<table class="table table-striped table-hover table-primary">
                <thead>
                    <tr>
                        <th><strong></strong></th>
                        <th><strong>Male Characters</strong></th>
                        <th><strong>Female Characters</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mean</strong></td>
                        <td>2.34 words</td>
                        <td>1.71 words</td>
                    </tr>
                    <tr>
                        <td><strong>Median</strong></td>
                        <td>2 words</td>
                        <td>2 words</td>
                    </tr>
                    <tr>
                        <td><strong>Maximum</strong></td>
                        <td>5 words</td>
                        <td>3 words</td>
                    </tr>
                </tbody>
            </table>

🔍 **Observations**:  
Male characters receive **37% more descriptive words on average** than female characters, reflecting deeper character development.  


### **Adjective Usage**  

<p> 👇👇 Click to discover the different adjectives used to describe men and female characters ! 👇👇 </p>
            <div class="interactive-table">
                <button id="maleButton" class="btn-male">Show Male Characters</button>
                <button id="femaleButton" class="btn-female">Show Female Characters</button>
                <div id="maleDiv" >
                    <label for="maleAdjectiveSlider">Select number of male adjectives:</label>
                    <input type="range" id="maleAdjectiveSlider" min="1" max="28" value="3">
                    <span id="maleSliderValue">3</span>
                    <table id="maleTable" class="table table-male" border="1" >
                        <thead>
                            <tr>
                                <th>Adjective</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div id="femaleDiv" style="display: none;">
                    <label for="femaleAdjectiveSlider">Select number of female adjectives:</label>
                    <input type="range" id="femaleAdjectiveSlider" min="1" max="4" value="4">
                    <span id="femaleSliderValue">4</span>
                    <table id="femaleTable" class="table table-female" border="1">
                        <thead>
                            <tr>
                                <th>Adjective</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>

### **Verb Usage**  

<p> 👇👇 Click to discover the different verbs used to describe men and female characters ! 👇👇 </p>
            <div class="interactive-table">
                <button id="maleVerbButton" class="btn-male">Show Male Verbs</button>
                <button id="femaleVerbButton" class="btn-female">Show Female Characters</button>
                <div id="maleVerbsDiv">
                    <label for="maleVerbSlider">Select number of male verbs:</label>
                    <input type="range" id="maleVerbSlider" min="1" max="10" value="5">
                    <span id="maleVerbSliderValue">5</span>
                    <table id="maleVerbsTable" class="table table-male" border="1">
                        <thead>
                            <tr>
                                <th>Verb</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div id="femaleVerbsDiv" style="display: none;">
                    <label for="femaleVerbSlider">Select number of female verbs:</label>
                    <input type="range" id="femaleVerbSlider" min="1" max="3" value="2">
                    <span id="femaleVerbSliderValue">1</span>
                    <table id="femaleVerbsTable" class="table table-female" border="1">
                        <thead>
                            <tr>
                                <th>Verb</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
          <h4><span style="color: blue;">🔵 Male Characters</span></h4>
        <p>Male characters are often described with verbs that emphasize <strong>action and role importance</strong>.</p>
        <h4><span style="color: #6f42c1;">🟣 Female Characters</span></h4>
        <p>Female characters are rarely described with verbs, and when they are, the words tend to reflect <strong>passivity</strong> or <strong>simplicity</strong>.</p>
    

## 📈 **Sentiment Analysis of Descriptive Words**  

<p>Just below, you can see a vizualisation of the most used word to describe female and male character.</p>
        <div style="display: flex; justify-content: left; align-items: center; gap: 100px;">            <img src="static/assets/character/face_women_full.png" alt="women_face style="width: 45%; height: auto;">
            <img src="static/assets/character/face_men_full.png" alt="men_face style="width: 45%; height: auto;">
        </div>
        <p><strong>💡 Key Insights</strong>:</p>
        <p><span style="color: #6f42c1;">🟣  Female Characters</span></p>
        <ul>
            <li>Fewer words are used to describe female characters</li>
            <li>Predominantly negative words are used for female characters.</li>
            <li>The most common description for female characters is "dumb blond," which is reductive</li>
            <li>There are only two verbs used to describe female characters: "klutz", "broke"</li>
        </ul>
        <p><span style="color: blue;">🔵 Male Characters</span></p>
            <ul>
            <li>Male characters are described in more complex terms, reflecting more nuanced personalities</li>
            <li>Their descriptions encompass a wider range of lexical fields, including romantic, egomaniacal, and cultured</li>
            <li>More complex concept of romance are explored through the adjective "bromantic"</li>
            <li>Uncommon words, like "Byronic," are used to describe male characters</li>
            <li>"Byronic" refers to a moody rebel character, often with a dark secret, showcasing how even a single word can reveal a lot about a character.</li>
        </ul>

---

## 💡 **Broader Observations**  

### **Key Findings**  
1. **Underrepresentation**:  
   - Female characters are severely underrepresented in both films and trope-rich roles.  
   - Only **14%** of trope-rich characters are women, compared to **30%** in general film roles.  

2. **Simplistic Portrayals**:  
   - Women are described with fewer words, and their descriptors often reinforce reductive stereotypes like *dumb blonde*.  

3. **Narrative Depth**:  
   - Male characters benefit from a more diverse range of descriptive words, reflecting greater narrative complexity.  

---

## 🚀 **Recommendations for Change**  

### For Filmmakers:  
- **Expand Female Representation**:  
  Increase the variety and frequency of female characters in trope-rich roles.  
- **Challenge Stereotypes**:  
  Write female characters with more depth and nuanced descriptors.  

### For Researchers:  
- **Enrich Datasets**:  
  Include more data on female characters to enable broader and more balanced analysis.  
- **Analyze Evolution**:  
  Investigate how gender representation and tropes have evolved over time.  

---

## 🌟 **Closing Thoughts**  

Character tropes are central to storytelling in film, but the lack of balanced gender representation restricts the diversity and depth of narratives. By addressing these disparities, filmmakers and researchers can drive a more inclusive and innovative approach to character development.  