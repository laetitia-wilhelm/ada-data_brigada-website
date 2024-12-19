To perform our analysis, we used two datasets:

### 1. CMU Movie Summary Corpus

The [CMU Personas Dataset](http://www.cs.cmu.edu/~ark/personas/) is a complete dataset created by David Bamman, Brendan O'Connor, and Noah Smith at Carnegie Mellon University. The dataset contains 42,306 film plot summaries extracted from Wikipedia, along with aligned metadata from Freebase, a collaborative knowledge base.

This dataset contains several type of files:

- **Movie Plot Summaries (`plot_summaries`)**: Detailed descriptions of movie plots, which provide narrative content for analysis.

- **Metadata (`movie.metadata`)**: Includes extensive information such as box office revenue, genre, release date, runtime, language, etc.

- **Character Information (`character.metadata`, `tvtropes.clusters`, `name.clusters`)**: Contains character names, descriptions, and information about the actors who played them, including their gender and age at the time of the movie's release.

#### Data Pre-processing

Before using the data, we pre-processed it:
- We ensured that all dates are in the same and correct format.
- We converted values so that all units are consistent (e.g., height in cm).

You can find more information on the different steps of our analysis in the `results.ipynb` file stored in the [GitHub repository of the group](https://github.com/epfl-ada/ada-2024-project-data_brigada)



### 2. TO DO