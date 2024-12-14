# **What Defines Success for a Movie?**

## **What Does "Success" Mean?**
Defining success in cinema is not a straightforward task—it can mean different things depending on the perspective. For some, success may be tied to **box office revenue**, indicating the financial viability and audience appeal of a movie. For others, it could mean **critical acclaim**, reflected in high ratings and awards. In this study, we analyzed both dimensions of success using the **CMU Movie Dataset** and **IMDb ratings**:

1. **Box Office Revenue**: This metric quantifies financial success. We identified the top 5% of highest-grossing films in our dataset to examine trends among blockbuster movies.

2. **IMDb Ratings**: Representing critical reception, IMDb ratings give us insight into audience satisfaction and acclaim. Ratings were analyzed alongside revenue to uncover possible relationships.

Our findings reveal that financial and critical success do not always go hand in hand. The correlation between box office revenue and IMDb ratings is weak (**~0.082**), showing that a movie can perform well financially without necessarily being highly rated—and vice versa.

### Supporting Statistics
A summary of the dataset’s box office revenue and ratings:

|                 | Movie_box_office_revenue | averageRating |
|-----------------|--------------------------:|--------------:|
| count           |                 1,165.000 |      1,165.000|
| mean            |            1.086598e+07   |       6.354249|
| std             |            2.711448e+07   |       0.898601|
| min             |            1.047400e+04   |       2.400000|
| 25%             |            1.000000e+06   |       5.800000|
| 50%             |            2.600000e+06   |       6.400000|
| 75%             |            9.623329e+06   |       6.900000|
| max             |            2.620622e+08   |       8.500000|

Most movies are rated moderately well (average rating ~6.35) but very few reach extremely high ratings (max rating 8.5). Similarly, while the mean box office revenue is around \$10.9 million, the maximum revenue is about \$262 million, indicating that only a small fraction achieve blockbuster-level earnings.

### Visual Insights
**Scatter Plot of Box Office Revenue vs. IMDb Ratings**  
![Scatter Plot: Revenue vs Rating](attachment:scatter_plot_revenue_rating.png)

*Observations*:  
- The red trendline is nearly flat, reaffirming the weak correlation between revenue and rating.  
- While a few high-revenue outliers exist across various rating levels, the majority of films cluster in lower revenue ranges.

**2D Histogram (Heatmap) of IMDb Rating vs. Log of Box Office Revenue**  
![2D Histogram: Rating vs Log Revenue](attachment:heatmap_rating_logrevenue.png)

*Observations*:  
- The densest areas show that many films are concentrated in moderate rating (around 6) and moderate revenue ranges.  
- Even films with higher ratings do not necessarily show a concentration at the highest revenues, reaffirming the weak linkage.

**Distribution of Box Office Revenue**  
![Revenue Distribution](attachment:distribution_revenue.png)

*Observations*:  
- The distribution is heavily skewed to the right, with most movies earning relatively modest amounts and a few blockbusters pulling the mean upward.

**Distribution of IMDb Ratings**  
![Rating Distribution](attachment:distribution_ratings.png)

*Observations*:  
- IMDb ratings approximate a normal distribution centered around 6 to 7. Very few films have extremely low or extremely high ratings.

These plots underscore that financial success (box office) and critical success (ratings) follow different distributions. The majority of movies cluster around the middle for ratings, while revenue has a “long tail” where a few high-earning outliers dominate the financial landscape.

---

## **Does the Actor Affect a Movie’s Success?**
We analyzed the role of actors in the top 5% of highest-grossing movies to determine their influence on success. 

### Key Observations
- **Actor Frequency vs. Revenue**: Some actors, like **Tom Hanks**, appeared frequently in the most successful films. However, frequent appearances do not always align with the highest average revenue. In contrast, actors like **Warwick Davis** and **Alan Rickman**—though not necessarily the most frequent—are associated with higher average box office revenues.
  
- **Impact on Success**: The data suggest that certain actors can positively influence a movie’s financial performance. Even though correlation is not causation, top actors often appear in big-budget, well-marketed films that already have high earning potential.

**Bar Plot: Average Revenue of Selected Top Actors**  
![Average Revenue of Top Actors](attachment:top_actors_revenue.png)

*Observations*:  
- **Warwick Davis** is linked to significantly higher average revenue, surpassing even other well-known actors.  
- The red dashed line indicates overall average revenue, showing that these selected top actors consistently appear in above-average revenue-generating films.

This suggests that while an actor’s star power alone isn’t a silver bullet for success, their involvement is often part of a formula that includes strong production values, marketing, and genre appeal.

---

## **Is It the Same for Every Film Genre?**
We examined whether success factors varied by film genre over several decades. Specifically, we looked at the top 5 genres per decade to understand their consistency and evolution.

### Genre Trends Over Time
- **Genre Consistency**: Action and Adventure have remained perennially popular, dominating top revenue brackets across multiple decades.
- **Genre Peaks**: Certain genres like Romance or Thriller experience spikes in popularity during specific decades before waning. Such temporal patterns may reflect shifting cultural tastes or industry trends.
- **Critical vs. Financial Success**: Some genres known for critical acclaim (e.g., Drama) may not always yield blockbuster revenues, whereas traditionally “crowd-pleasing” genres (e.g., Action) may consistently deliver strong box office performance without topping rating charts.

**Line Plot: Top 5 Genres of Most Successful Movies by Decade**  
![Top 5 Genres by Decade](attachment:top_genres_decade.png)

*Observations*:  
- Action and Adventure maintain a strong presence across decades, suggesting stable audience appeal.
- Genres like Romance Film or Thriller show up strongly in certain periods but fade later.
- Aligning with popular, trend-following genres increases a film’s likelihood of financial success.

---

## **How Does the Character Archetype Affect a Movie's Success?**
Finally, we explored the impact of character archetypes on success metrics, focusing on their presence in high-grossing films.

### Key Archetype Insights
1. **High-Grossing Archetypes**: “Charmer” and “loveable_rogue” characters often lead to higher revenue averages. These archetypes are typically found in broad-appeal action-adventure or family-friendly franchises, resonating well with mass audiences.
   
2. **Action-Adventure Archetypes**: Archetypes like “adventurer_archaeologist”, “gadgeteer_genius”, and “master_swordsman” are associated with big-budget, globally recognized franchises. Such characters often appear in action-adventure or fantasy worlds that typically command large box-office draws.
   
3. **Caution on Sample Size**: Some archetypes might appear in only a handful of films. If one of these films is a blockbuster, it can skew the average upward, so interpretation should consider sample size.

Overall, archetypes aligning with charismatic, adventurous leads frequently correlate with higher revenues, reflecting mainstream audience preferences for engaging, exciting protagonists and familiar narrative tropes.

---

## **Conclusions**
Success in cinema is multifaceted and depends on various factors:

- **Box Office vs. Ratings**: Financial and critical success are not strongly linked. High-revenue movies are not always highly rated. The correlation (~0.082) is minimal, and the scatter and heatmap plots confirm this weak relationship.

- **Actors' Influence**: While some actors (e.g., Warwick Davis, Alan Rickman) are associated with higher box-office revenues, frequency of appearance does not guarantee top earnings. Rather, certain actors tend to be cast in films poised for big successes, boosting their revenue averages.

- **Genre Trends**: Action and Adventure stand out as consistently strong revenue generators across decades, while other genres spike and fade. Popular genres at a given time are more likely to produce financial hits, but not necessarily critical favorites.

- **Character Archetypes**: Archetypes such as “charmer” and “loveable_rogue” often appear in top-grossing franchises. Action-oriented, charismatic leads and side characters tend to resonate widely, aligning with higher box-office revenues.

In essence, financial and critical success emerge from different, sometimes overlapping sets of conditions. While blockbuster status drives big numbers at the box office, a strong critical rating often stems from factors beyond pure financial metrics. Thus, success can be defined differently depending on whether one prioritizes revenue, or cultural impact. 
