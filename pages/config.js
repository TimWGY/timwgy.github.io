var config = {
    style: 'mapbox://styles/timwgy/cl8ln85rd001u15qljjgpkuwi',
    accessToken: 'pk.eyJ1IjoidGltd2d5IiwiYSI6ImNsOGh2b3NjdTAyc3Izbm53eGZpcnZpM20ifQ.9CUQrRYkWVvAo_YBYF3enw',
    projection: 'mercator',
    showMarkers: false,
    inset: false,
    use3dTerrain: false,
    // theme: 'dark',
    title: 'What affect the spread of pandemic in global cities?',
    subtitle: false,
    byline: 'By Guangyu (Tim) Wu',
    footer: 'Source: source citations',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: "Combat the pandemic with urban design and policy",
            description: `When COVID-19 hit cities around the globe, people wonder if dense urban environments can withstand the challenge of pandemics. In this article, I will:</br>
                          &nbsp;&nbsp;1) Survey the literature on built environment factors and COVID-19</br>
                          &nbsp;&nbsp;2) Test the generalizability of existing findings with a dataset of global cities</br>
                          &nbsp;&nbsp;3) Discuss how urban design & policy can protect us against future pandemics</br></br>
                          <span style="color:grey;font-size:0.8em"> Note:&nbsp;The choropleth in the background shows the cummulative case count per 10,000 for country and province level geographic units as of Sep 2022.</span>`,
            location: {
                center: [25.0, 16.0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'case-rate-choropleth-fill',
                    opacity: 1,
                },
                {
                    layer: 'case-rate-choropleth-stroke',
                    opacity: 1,
                },
                {
                    layer: 'case-rate-choropleth-label',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'case-rate-choropleth-fill',
                    opacity: 0
                },
                {
                    layer: 'case-rate-choropleth-stroke',
                    opacity: 0,
                },
                {
                    layer: 'case-rate-choropleth-label',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'literature_review',
            alignment: 'left',
            hidden: false,
            title: 'Literature on built environment factors and COVID-19',
            image: './images/citation_graph.png',
            description: 'To find research that explicitly examine the role of built environment factors in the spread of COVID-19, I used the paper “The impacts of the built environment on the incidence rate of COVID-19: A case study of King County, Washington” as the seed article and iteratively added related papers using the citation-network-based paper discovery tool <a target="_blank" rel="noopener noreferrer" href="https://inciteful.xyz/">Inciteful</a>.&nbsp;After 4 rounds of selection, 45 papers were included and analyzed for key findings, methods, and data sources.',
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [               
                {
                    layer: 'satellite',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {
            id: 'istanbul',
            alignment: 'left',
            hidden: false,
            title: 'Do larger cities see greater COVID-19 incidence rate?',
            // image: '',
            description:   `One of common beliefs at the beginning of pandemic is that larger cities are more susceptible to contagious disease like the COVID-19, likely because of the higher level of interaction between residents in a large urban network.&nbsp;</br>Size of cities is usually measured by their population size. For example, Istanbul, with a population of 14.1 million, is hit hard by the pandemic.</br></br>
            <span style="color:grey;font-size:0.8em"> Note:&nbsp;The city-level statistics in the next sections come from the GHS Urban Centre Database 2015. <a target="_blank" rel="noopener noreferrer" href="https://ghsl.jrc.ec.europa.eu/ghs_stat_ucdb2015mt_r2019a.php">Link to documentation</a></span>`,
            location: {
                center: [28.97727, 41.01102],
                zoom: 12.37,
                pitch: 0.00,
                bearing: 14.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'los_angeles',
            alignment: 'left',
            hidden: false,
            title: 'Density to blame?',
            // image: '',
            description: `But population size is not the only factor potentially affecting the spread of COVID in the city.</br></br>
            As a famous example of urban sprawl, Los Angeles has a comparable population of 1.42 million, but its population density is only 1/4 of that of Istanbul.</br></br>
            <span style="color:grey;font-size:0.8em"> Note:&nbsp;The city boundary used in density calculation is derived from the GHS output, which is defined as "contiguous grid cells of 1 km2 with a density of at least 1,500 inhabitants per km2 or at least 50% built-up surface share."</span>`,
            location: {
                center: [-118.24017, 33.98677],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cumilla',
            alignment: 'left',
            hidden: false,
            title: 'Measuring overcrowding',
            // image: '',
            description: `Even cities with the same density may have very different urban fabric. Cumilla, Bangladesh has a similar population density as Los Angeles, USA (~2500 person/sq km), but it is actually more crowded at the personal level.<br><br>
                          This is because Cumilla has a lower percentage of built-up area within its geographic boundary, the city is dotted with 100+ lakes, ponds, parks of varying sizes. Thus, the residential area for each person is much more limited given the same population density.<br><br>
                          Overcrowding, to quote Jane Jacobs' definition, is when "too many people live in a dwelling for the number of rooms it contain". Here, we can use the metric "built-up area per capita" (BUCAP) to capture the overcrowding level.<br><br>
                          Cumilla's BUCAP is 69 (sq meter/person) while LA is 324. The value for Istanbul from our previous example is 51, signifying an even more serious overcrowding risk.`,
            location: {
                center: [91.17005, 23.46150],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                },
            ],
            onChapterExit: []
        },
        {
            id: 'disentangle',
            alignment: 'fully',
            hidden: false,
            title: 'Disentangle the effects of interconnected factors',
            // image: '',
            description: `As illustrated in the examples, size, density, and crowdedness of a city are related yet distinct metrics. To understand their respective role in a pandemic, I conducted feature engineering to try to disentangle their effect.<br><br>
            First, I apply log transformation to population size to get a metric for the city size class (megacity vs city vs town).<br><br>
            Second, to capture difference in urban fabric density, I divide built-up area size with total geographic region area to get a "built-up area percentage" (BUPER) metric.<br><br>
            Finally, I adopt the "built-up area per capita" (BUCAP) metric to capture the potential overcrowding.<br><br>
            <span style="color:grey;font-size:0.8em"> Note:&nbsp;Although population density is not explicitly included, it can be derived by calculating BUPER/BUCAP = (BUAREA/AREA)/(BUAREA/POP) = POP/AREA. We essentially decomposite the density metric into two more specific metrics to understand their respective relationship with COVID-19 incidence rate.</span>`,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {
            id: 'socioeconomic',
            alignment: 'right',
            hidden: false,
            title: '',
            // image: '',
            description: `In addition to the factors above, the litearture highlight more factors that could influenced COVID-19 incidence rate:<br><br>
                          <b>Socio-economic Factors</b><br><br>
                          1) Poverty (income level) is cited in multiple studies to correlate with COVID-19 incidence. In this project, estimated GDP per capita at the city level is used as a proxy for income level.<br><br>
                          2) Activity density / commerical prosperity is another metric to capture the economic profile of a city. It is often measured through point-of-interest density. Due to lack of such data at global level, "average night time light emission" (NTL_AV) is used a proxy inspired by economic research on luminosity data.<br><br>
                          <span style="color:grey;font-size:0.8em">The choropleth in the background shows night light emission level of cities across europe. NTL_AV is measured in nano-watt per steradian per square centimeter, value range from 0 to 220. </span>`,

            location: {
                center: [5.86749, 48.06932],
                zoom: 5.2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'night-light-choropleth-fill',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'night-light-choropleth-fill',
                    opacity: 0
                },
            ]
        },
        {
            id: 'environmental',
            alignment: 'right',
            hidden: false,
            title: 'Environmental Factors',
            // image: '',
            description: `1) Access to open space and green space. Multiple research has highlighted the role of open space in relieving the impact of the pandemic, either directly or through reducing chronical disease. Postpandemic mobility study [Hamidi 2020] also shows that residents of compactly-developed areas still visit parks despite reducing other types of tripes, which shows its significance. The percentage of open spaces (UN SDG Indicator 11.7.1) from GHS is included as a proxy.<br><br>
                          2) Ambient air pollution. The medical research community has shown that long-term exposure to PM2.5 can worsen COVID-19 symptom and lead to higher hospitalization rate [Comunian 2020]. Studies also show PM2.5 can be a carrior for COVID-19 virus. In this project, PM2.5 emission data from the GHS database is synthesized to capture the concentration and source of PM2.5 pollutant.<br><br>
                          <span style="color:grey;font-size:0.8em">The choropleth shows share of open space in urban area across European cities, with darker green indicating higher share of open space. This covarite is estimated based on presence of greenness (NDVI) and of open spaces. This covariate is preferred over "access to green space" because it also includes beaches, parks, playing fields in additional to green space. </span>`,

            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'access-open-choropleth-fill',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'access-open-choropleth-fill',
                    opacity: 0
                },
            ]
        },
        {
            id: 'urban_form',
            alignment: 'right',
            hidden: false,
            title: 'Urban Form Factors',
            image: './images/square-mile-street-networks.jpg',
            description: `
                          1) City form patterns, i.e. grid vs radial vs linear, are found to predict COVID-19 incidence, with linear cities having a lower rate [AbouKorin 2021]. Pforzheim in Germany, developed along the bankds of Enz river, is an example of linear city.<br><br>
                          2) Greater street network connectivity is found to be correlated with lower hospitalization and fatality rate [Wali 2021]. However, the greater connectivity also means more exposure between pedestrians.<br><br>
                          For the urban form factors, I have chosen the <a target="_blank" rel="noopener noreferrer" href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZTFPTB">Global Urban Street Networks Indicators Database</a> because of its compatibility with GHS data and its variety in features.<br><br>
                          <span style="color:grey;font-size:0.8em">Image source: Inspired by Great Streets by Allan Jacobs, created with python library OSMnx by Geff Boeing.</span>`,
            location: {
                center: [8.69028, 48.91508],
                zoom: 12.28,
                pitch: 0.00,
                bearing: -117.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                },
            ]
        },
        {
            id: 'additional_covariates',
            alignment: 'fully',
            hidden: false,
            title: 'Other Important Factors',
            // image: '',
            description: `Several other factors stand out in the review but they are not available at city level globally. For example, intracity connectivity and intercity connectivity are predict incidence rate, especially at the beginning phase of the pandemic. Mobility data can be estimated from various datasets such as <a target="_blank" rel="noopener noreferrer" href="https://iopscience.iop.org/article/10.1088/1748-9326/aabd42/meta">global highway network connectivity</a> or migration data such as <a target="_blank" rel="noopener noreferrer" href="https://qianxi.baidu.com/#/">Baidu Qianxi (Migration)</a>.  <br><br> 
                          Mixed land use is reported to correlated with lower incidence rate, likely by allowing urban residents to work and run errands within a locality and avoid long trips and more exposure. Landuse mixture can be analyzed by processing OSM. The <a target="_blank" rel="noopener noreferrer" href="https://github.com/lgervasoni/urbansprawl/blob/master/README.md">urbansprawl</a> Python library is one example that utilize building land use tags to classify urban area into residential, activity, and mixed use categories. And the <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/covid19/mobility/">COVID-19 Community Mobility Reports</a> from Google will be a great resource for corroborating the OSM-derived data.<br><br>
                          Government policy, urban governance, social discrimination such as spatial racism are examples of factors that are harder to measure, let alone standardized at a global scale, but projects like the <a target="_blank" rel="noopener noreferrer" href="https://www.bsg.ox.ac.uk/research/research-projects/covid-19-government-response-tracker">COVID-19 Government Response Tracker</a> at the University of Oxford is making good progress.`,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'un_habitat_data_find',
            alignment: 'fully',
            hidden: false,
            title: 'Are existing findings applicable across the globe?',
            // image: '',
            description: `One impression I had after reading all the papers is that most of the studies use the same datasets from very few areas where COVID-19 data are abundant.<br><br>
            For example, for sub-city level analysis, NYC is frequently chosen as the study area thanks to its rich zipcode level multivariate data. For county (admin 2) level analysis, the contiguous U.S. county level data domniates the dataset sections of papers. Outside the U.S., there is a few research but often cover a small geographic region, such as the neighhourhoods of a Mexican city, districts of Tehran, localities of Israel, or a collection of 28 European cities.<br><br>
            This gives me the core idea of this article, to test the generalizability of existing findings on a global urban COVID dataset that include cities of varying sizes from different parts of the world, so that we can provide localized urban design and policy suggestions for global cities.<br><br>
            After rounds of Internet search and paper reviews, I found the UN Habitat COVID-19 Urban Level Trends data is the best available, with monthly case count of 20,866 cities from 141 countries, covering the period May 2020 to February 2022.<br><br>
            <img src="./images/un_habitat_covid_data_map.jpg">
            `,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'un_habitat_data_cleaning',
            alignment: 'fully',
            hidden: false,
            title: 'Data cleaning, aggregation, harmonization',
            // image: '',
            description: `A question I naturally have after finding the data is, why are researchers not using it already? A few hours into exploring the data, I start to realize one important reason - cleaning such a vast data for analysis is hard.<br><br>
            I then spent half a week experimenting different strategies for reliably constructing a harmonized global city dataset from the raw dataset. The main steps are as follows:<br><br>
            &nbsp;&nbsp;1) Apply geocoding on place names and cross-check with UN provided lat-lon to correct coordinate errors (e.g. some signs are found to be flipped).<br><br>
            &nbsp;&nbsp;2) Spatial join with GHS urban centre database (UCDB) and aggregate counts to urban centre level, which is compatible with the well-established GHS data.<br><br>
            &nbsp;&nbsp;3) Drop cities that do not have valid monthly data for the year from Feb 2021 to Jan 2022, a period that reflects the spread of delta and omicron variants. <br><br>
            &nbsp;&nbsp;4) Include at most 40 cities from each country to prevent overfitting on countries with more data, such as U.S., Germany, Mexico, Brazil.<br><br>
            &nbsp;&nbsp;5) Merge the COVID-19 data with GHS UCDB and OSM global street network indicator database, dropping rows with missing factor values.<br><br>
            The resulting dataset contains 460 cities from 46 different countries, for a detailed breakdown by continent and region, see <a target="_blank" rel="noopener noreferrer" href="./subset_breakdown_sunburst_plot.html">this interactive sunburst plot</a>.`,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'un_habitat_data_map',
            alignment: 'left',
            hidden: false,
            title: 'Voila! Cleaned global urban level COVID-19 data on a map',
            // image: '',
            description: `Before diving into the analysis, let's look at the spatial distribution of the cities included in the data. </br></br>
            Since actual city boundaries are too small to discern to at a global view, I used markers to incidicate their general locations. </br></br>
            The circle markers represent cities from a developed country, triangle ones represent cities from a developing country.&nbsp;You can see that we have a good mix of both developed and developing country cities.`,
            location: {
                center: [25.0, 16.0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-dev-ctr-symbol',
                    opacity: 1
                },
                {
                    layer: 'city-case-rate-choropleth-fill',
                    opacity: 1
                },
                
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'un_habitat_data_map_without_marker',
            alignment: 'left',
            hidden: false,
            title: '',
            // image: '',
            description: `The included cities are of varying sizes and spatial arrangements as well. Here, the cities are colored by its COVID-19 case incidence rate from Feb 2021 to December 2021, with deeper red corresponding to a higher rate.<br><br>
            If you want to explore this cleaned subset of cities on your own, you can use <a target="_blank" rel="noopener noreferrer" href="./global_urban_covid_kepler_playground.html">this Kepler playground</a> to make customized maps. I included the various factors mentioned above so you can filter or style the map based on those. You can lookup the meaning of variable names in <a target="_blank" rel="noopener noreferrer" href="https://ghsl.jrc.ec.europa.eu/ghs_stat_ucdb2015mt_r2019a.php">GHS UCBD</a> (for all-cap fields) or <a target="_blank" rel="noopener noreferrer" href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZTFPTB">OSMnx Indicator</a> documentation (for lower-case fields).`,
            location: {
                center: [4.71264, 49.57742],
                zoom: 4.48,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-dev-ctr-symbol',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {
            id: 'design_matrix',
            alignment: 'fully',
            hidden: false,
            title: 'Constructing the design matrix',
            // image: '',
            description: `Now, let's run regression analysis to study the relationship between built-environment factors and COVID-19.</br></br>
                          As discussed above, I put together the socio-economic (income, commerical prosperity), environmental (air pollution, access to open/green space), and urban form (street network) factors.</br></br>
                          Given the wide geographic scope of the collection, I included average altitude, temperature, and percipitation to account for climate differences.</br></br>
                          And inspired by my work in urban history, I also calcualted the growth rate in GDP per capita, built-up area, and population size from 2000 to 2015, to understand whether recently developed/urbanizing cities or established cities with longer history perform better under pandemic.</br></br>
                          Despite picking and constructing the variables very carefully (as in the 'size-density-crowding' example), the explanatory variables still display multicollinearity. Principal Component Analysis is considered but not applied due to the loss in interpretability. I decided to iteratively drop variables with high variance inflation factor (VIF) and removed variables including "CO2 emission","access to green", "country income class", "clustering coefficient in undirected street network".<br><br>
                          Finally, explanatory variables are min-max transformation to a similar scale, such that the size of regression coefficient can be intepreted as relative feature importance.`,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'response_variable',
            alignment: 'fully',
            hidden: false,
            title: 'Dependent variables: Delta & Omicron Period',
            image: './images/case_count_time_series_usa.gif',
            description: `The response variable in this article is daily case indicence rate per 10,000 persons. The initial plan is to calculate the average incidence rate over the whole data period from Feb 2021 to Jan 2022, but I noticed a consistent uptick in Jan 2022 in almost all cities.</br></br>
                         After comparing with other data sources such as the JHU CSSE data, as well as news and research report on COVID-19 during that time, I realized that the uptick reflects the outbreak of the omicron variant. Thus, I calculated the average incidence rate for the first 11 months as proxy for incidence rate during delta-variant period, and took the data for Jan 2022 as proxy for indicence rate for omicron-variant period. Regression analyses are conducted independently on both periods to see if results are consistent despite the difference between variants.</br></br>`,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'regression_result',
            alignment: 'fully',
            hidden: false,
            title: 'Regression with Delta-variant Period Data',
            // image: '',
            description: `<br><br>`,  
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
