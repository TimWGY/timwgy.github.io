var config = {
    style: 'mapbox://styles/timwgy/cl8ln85rd001u15qljjgpkuwi',
    accessToken: 'pk.eyJ1IjoidGltd2d5IiwiYSI6ImNsOGh2b3NjdTAyc3Izbm53eGZpcnZpM20ifQ.9CUQrRYkWVvAo_YBYF3enw',
    projection: 'mercator',
    showMarkers: false,
    inset: false,
    use3dTerrain: false,
    // theme: 'dark',
    title: 'Built Environment Factors and the Pandemic - A Global Perspective',
    subtitle: false,
    byline: 'By Guangyu (Tim) Wu',
    footer: 'Source: source citations',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: "",
            description: `When COVID-19 hit cities around the globe, people wonder if dense urban environments can withstand the challenge of pandemics. The goal of this article is to:</br></br>
                          &nbsp;&nbsp;1) Survey the literature on built environment factors and the pandemic</br>
                          &nbsp;&nbsp;2) Present a harmonized, urban-level COVID-19 and urban feature dataset</br>
                          &nbsp;&nbsp;3) Run regression analysis on data from diverse global cities and summarize findings</br></br>
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
            alignment: 'fully',
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
            description:   `One of common beliefs at the beginning of pandemic is that larger cities are more susceptible to contagious disease like the COVID-19, likely because of the higher level of interaction between residents in a large urban network.&nbsp;</br></br>Size of cities is usually measured by their population size. For example, Istanbul, with a population of 14.1 million, is hit hard by the pandemic.</br></br>
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
            description: `As illustrated in the examples, size, density, and crowdedness of a city are related yet distinct metrics. To understand their respective role in a pandemic, I applied the following feature transformation to disentangle their effect.<br><br>
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
                          1) Income level (poverty) is cited in multiple studies to correlate with COVID-19 incidence. In this project, estimated GDP per capita at the city level is used as a proxy for income level.<br><br>
                          2) Commerical prosperity (activity density) is another metric to capture the economic profile of a city. It is often measured through point-of-interest density. Due to lack of such data at global level, "average night time light emission" (NTL_AV) is used a proxy inspired by economic research on luminosity data.<br><br>
                          <span style="color:grey;font-size:0.8em">The choropleth in the background shows night light emission level of cities across europe. NTL_AV is measured in nano-watt per steradian per square centimeter, value range from 0 to 220. </span>`,

            location: {
                center: [5.86749, 48.06932],
                zoom: 5.2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
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
            description: `Several other factors stand out in the review but they are not available at city level globally. For example, intracity connectivity and intercity connectivity are found to predict incidence rate, especially at the beginning phase of the pandemic. Mobility data could be estimated from various datasets such as <a target="_blank" rel="noopener noreferrer" href="https://iopscience.iop.org/article/10.1088/1748-9326/aabd42/meta">global highway network connectivity</a> or migration data such as <a target="_blank" rel="noopener noreferrer" href="https://qianxi.baidu.com/#/">Baidu Qianxi (Migration)</a>.  But to make estimation for global cities reliably and consistently is in itself a whole project.<br><br> 
                          Mixed land use is reported to correlated with lower incidence rate, likely by allowing urban residents to work and run errands within a locality and avoid long trips and more exposure. Landuse mixture could be analyzed by processing OSM. The <a target="_blank" rel="noopener noreferrer" href="https://github.com/lgervasoni/urbansprawl/blob/master/README.md">urbansprawl</a> Python library is one example that utilize building land use tags to classify urban area into residential, activity, and mixed use categories. And the <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/covid19/mobility/">COVID-19 Community Mobility Reports</a> from Google will be a great resource for corroborating the OSM-derived data.<br><br>
                          Government policy, urban governance, social discrimination such as spatial racism are examples of factors that are harder to measure, let alone standardized at a global scale, but projects like the <a target="_blank" rel="noopener noreferrer" href="https://www.bsg.ox.ac.uk/research/research-projects/covid-19-government-response-tracker">COVID-19 Government Response Tracker</a> at the University of Oxford is making good progress. Before such data can be reliably integrated at the city level, we will limit the factors to the ones covered in the previous slides.`,
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
            One of the core ideas of this article, is to <b>test the generalizability of existing findings on a global urban COVID dataset</b> that include cities of varying sizes from different parts of the world, so that we can provide localized urban design and policy suggestions for global cities.<br><br>
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
            description: `A question I naturally have after finding the data is, <i>why are researchers not using it already</i>? A few hours into exploring the data, I start to realize one important reason - cleaning such a vast data for analysis is hard. I spent half a week experimenting different strategies and here are my main steps:<br><br>
            &nbsp;&nbsp;1) <b>Apply geocoding</b> on place names and cross-check with UN provided lat-lon to correct coordinate errors (e.g. some signs are found to be flipped).<br><br>
            &nbsp;&nbsp;2) <b>Spatial join</b> with GHS urban centre database (UCDB) and aggregate counts to urban centre level, which is compatible with the well-established GHS data.<br><br>
            &nbsp;&nbsp;3) <b>Drop cities</b> that do not have valid monthly data for the year from Feb 2021 to Jan 2022, a period that reflects the spread of delta and omicron variants. <br><br>
            &nbsp;&nbsp;4) <b>Include at most</b> 40 cities from each country to prevent overfitting on countries with more data, such as U.S., Germany, Mexico, Brazil.<br><br>
            &nbsp;&nbsp;5) <b>Merge</b> the COVID-19 data with GHS UCDB and OSM global street network indicator database, dropping rows with missing factor values.<br><br>
            The resulting dataset contains 460 cities from 46 different countries, for a detailed breakdown by continent and region, see <a target="_blank" rel="noopener noreferrer" href="./global_urban_covid_sunburst.html"><b>this interactive sunburst plot</b></a>.`,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-dev-ctr-symbol',
                    opacity: 0
                },
                {
                    layer: 'city-case-rate-choropleth-fill',
                    opacity: 0
                },
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
            Since actual city boundaries are too small to spot at a global view, I used markers to incidicate their general locations. </br></br>
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
            title: 'Diverse and harmonized open data',
            // image: '',
            description: `The included cities are of varying sizes and spatial arrangements as well. Here, the cities are colored by its COVID-19 case incidence rate from Feb 2021 to December 2021, with deeper red corresponding to a higher rate.<br><br>
            If you want to explore this cleaned dataset later, feel free to use <a target="_blank" rel="noopener noreferrer" href="./global_urban_covid_kepler_playground.html">this playground</a> to make customized maps. I included the various factors mentioned above so you can filter or style the map based on those. You can lookup the meaning of variable names in <a target="_blank" rel="noopener noreferrer" href="https://ghsl.jrc.ec.europa.eu/ghs_stat_ucdb2015mt_r2019a.php">GHS UCBD</a> (for all-cap fields) or <a target="_blank" rel="noopener noreferrer" href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZTFPTB">OSMnx Indicator</a> documentation (for lower-case fields).<br><br>
            For now, please hold on tight and let's run some analyses!`,
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
                }
            ],
            onChapterExit: []
        },
        {
            id: 'design_matrix',
            alignment: 'fully',
            hidden: false,
            title: 'Constructing the design matrix',
            // image: '',
            description: `As discussed above, I put together the socio-economic (income, commerical prosperity), environmental (air pollution, access to open/green space), and urban form (street network) factors.</br></br>
                          Given the wide geographic scope of the collection, I included <b>average altitude, temperature, and percipitation</b> to account for climate differences.And inspired by my work in urban history, I also calculated the <b>growth rate</b> in GDP per capita, built-up area, and population size from 2000 to 2015, to understand whether recently developed/urbanized cities or established cities with longer history perform better under pandemic.</br></br>
                          Despite picking and constructing the variables very carefully (as in the 'size-density-crowding' example), the explanatory variables still display multicollinearity. Principal Component Analysis (PCA) is considered but not applied due to the loss in interpretability. I decided to iteratively drop variables with high variance inflation factor (VIF) and removed variables including "CO2 emission","access to green", "country income class", "clustering coefficient in undirected street network".<br><br>
                          Finally, explanatory variables are min-max transformation to a similar scale, such that the size of regression coefficient can be intepreted as relative feature importance.`,
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [,
                {
                    layer: 'city-case-rate-choropleth-fill',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {
            id: 'response_variable',
            alignment: 'fully',
            hidden: false,
            title: 'Dependent variables: Delta & Omicron Period',
            image: './images/covid_trends.jpg',
            description: `The response variable in this article is daily case incidence rate per 10,000 persons. The initial plan is to calculate the average incidence rate over the whole data period from Feb 2021 to Jan 2022, but I noticed a consistent uptick in Jan 2022 in almost all cities.</br></br>
                         After comparing with other data sources such as the JHU CSSE data, as well as news and research report on COVID-19 during that time, I realized that the uptick reflects the outbreak of the omicron variant. Thus, I calculated the average incidence rate for the first 11 months as proxy for incidence rate during delta-variant period, and took the data for Jan 2022 as proxy for incidence rate for omicron-variant period. Regression analyses are conducted for both periods, the findings are largely consistent, so only the results from the longer Delta period is discussed below.</br></br>`,
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
            title: 'Regression Results',
            // image: '',
            description: `OLS regression is fitted on the data from Delta-variant period, producing a model with adj. R squared of 17%.&nbsp;The sign and size of coefficients of significant factors are shown below.<br><br>
            <style type="text/css">\n#T_9ba55_ th {\n  text-align: left;\n}\n#T_9ba55_row0_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #ececec 50.0%, #ececec 93.6%, transparent 93.6%);\n  text-align: center;\n}\n#T_9ba55_row0_col2, #T_9ba55_row1_col2, #T_9ba55_row2_col2, #T_9ba55_row3_col2, #T_9ba55_row4_col2, #T_9ba55_row5_col2, #T_9ba55_row6_col2, #T_9ba55_row7_col2, #T_9ba55_row8_col2, #T_9ba55_row9_col2, #T_9ba55_row10_col2, #T_9ba55_row11_col2, #T_9ba55_row12_col2, #T_9ba55_row13_col2, #T_9ba55_row14_col2, #T_9ba55_row15_col2, #T_9ba55_row16_col2, #T_9ba55_row17_col2, #T_9ba55_row18_col2, #T_9ba55_row19_col2, #T_9ba55_row20_col2 {\n  color: #949494;\n  width: 60px;\n}\n#T_9ba55_row0_col3, #T_9ba55_row1_col3, #T_9ba55_row2_col3, #T_9ba55_row3_col3, #T_9ba55_row4_col3, #T_9ba55_row5_col3, #T_9ba55_row6_col3, #T_9ba55_row7_col3, #T_9ba55_row8_col3, #T_9ba55_row9_col3, #T_9ba55_row10_col3, #T_9ba55_row11_col3, #T_9ba55_row12_col3, #T_9ba55_row13_col3, #T_9ba55_row14_col3, #T_9ba55_row15_col3, #T_9ba55_row16_col3, #T_9ba55_row17_col3, #T_9ba55_row18_col3, #T_9ba55_row19_col3, #T_9ba55_row20_col3 {\n  width: 60px;\n}\n#T_9ba55_row1_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 37.2%, #ececec 37.2%, #ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row2_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 42.8%, #ececec 42.8%, #ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row3_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 25.2%, #ececec 25.2%, #ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row4_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #5fba7d 50.0%, #5fba7d 92.6%, transparent 92.6%);\n  text-align: center;\n}\n#T_9ba55_row5_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg,#ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row6_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 22.9%, #d65f5f 22.9%, #d65f5f 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row7_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 35.7%, #ececec 35.7%, #ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row8_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 16.7%, #d65f5f 16.7%, #d65f5f 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row9_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 21.6%, #ececec 21.6%, #ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row10_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #5fba7d 50.0%, #5fba7d 100.0%, transparent 100.0%);\n  text-align: center;\n}\n#T_9ba55_row11_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #5fba7d 50.0%, #5fba7d 79.1%, transparent 79.1%);\n  text-align: center;\n}\n#T_9ba55_row12_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #5fba7d 50.0%, #5fba7d 81.3%, transparent 81.3%);\n  text-align: center;\n}\n#T_9ba55_row13_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 19.1%, #d65f5f 19.1%, #d65f5f 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row14_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #5fba7d 50.0%, #5fba7d 95.9%, transparent 95.9%);\n  text-align: center;\n}\n#T_9ba55_row15_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 12.8%, #d65f5f 12.8%, #d65f5f 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row16_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #ececec 50.0%, #ececec 50.5%, transparent 50.5%);\n  text-align: center;\n}\n#T_9ba55_row17_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 36.0%, #ececec 36.0%, #ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row18_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 13.8%, #d65f5f 13.8%, #d65f5f 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row19_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 42.1%, #ececec 42.1%, #ececec 50.0%, transparent 50.0%);\n  text-align: center;\n}\n#T_9ba55_row20_col1 {\n  width: 10em;\n  height: 80%;\n  background: linear-gradient(90deg, transparent 50.0%, #ececec 50.0%, #ececec 71.7%, transparent 71.7%);\n  text-align: center;\n}\n</style>\n<table id="T_9ba55_">\n  <thead>\n    <tr>\n      <th class="col_heading level0 col0" >Variable</th>\n      <th class="col_heading level0 col1" >Coefficient</th>\n      <th class="col_heading level0 col2" >Std</th>\n      <th class="col_heading level0 col3" >P Val</th>\n      <th class="col_heading level0 col4" ></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td id="T_9ba55_row0_col0" class="data row0 col0" >Intercept</td>\n      <td id="T_9ba55_row0_col1" class="data row0 col1" >2.53</td>\n      <td id="T_9ba55_row0_col2" class="data row0 col2" >(2.10)</td>\n      <td id="T_9ba55_row0_col3" class="data row0 col3" >0.228</td>\n      <td id="T_9ba55_row0_col4" class="data row0 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row1_col0" class="data row1 col0" >Elevation</td>\n      <td id="T_9ba55_row1_col1" class="data row1 col1" >-0.74</td>\n      <td id="T_9ba55_row1_col2" class="data row1 col2" >(0.88)</td>\n      <td id="T_9ba55_row1_col3" class="data row1 col3" >0.405</td>\n      <td id="T_9ba55_row1_col4" class="data row1 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row2_col0" class="data row2 col0" >Precipitation</td>\n      <td id="T_9ba55_row2_col1" class="data row2 col1" >-0.42</td>\n      <td id="T_9ba55_row2_col2" class="data row2 col2" >(1.11)</td>\n      <td id="T_9ba55_row2_col3" class="data row2 col3" >0.703</td>\n      <td id="T_9ba55_row2_col4" class="data row2 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row3_col0" class="data row3 col0" >Temperature</td>\n      <td id="T_9ba55_row3_col1" class="data row3 col1" >-1.44</td>\n      <td id="T_9ba55_row3_col2" class="data row3 col2" >(0.86)</td>\n      <td id="T_9ba55_row3_col3" class="data row3 col3" >0.096</td>\n      <td id="T_9ba55_row3_col4" class="data row3 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row4_col0" class="data row4 col0" >Built-up area proportion</td>\n      <td id="T_9ba55_row4_col1" class="data row4 col1" >4.97</td>\n      <td id="T_9ba55_row4_col2" class="data row4 col2" >(1.73)</td>\n      <td id="T_9ba55_row4_col3" class="data row4 col3" >0.004</td>\n      <td id="T_9ba55_row4_col4" class="data row4 col4" >**</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row5_col0" class="data row5 col0" >Built-up area growth rate</td>\n      <td id="T_9ba55_row5_col1" class="data row5 col1" >-2.90</td>\n      <td id="T_9ba55_row5_col2" class="data row5 col2" >(2.54)</td>\n      <td id="T_9ba55_row5_col3" class="data row5 col3" >0.254</td>\n      <td id="T_9ba55_row5_col4" class="data row5 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row6_col0" class="data row6 col0" >Log of population size</td>\n      <td id="T_9ba55_row6_col1" class="data row6 col1" >-3.16</td>\n      <td id="T_9ba55_row6_col2" class="data row6 col2" >(0.88)</td>\n      <td id="T_9ba55_row6_col3" class="data row6 col3" >0.000</td>\n      <td id="T_9ba55_row6_col4" class="data row6 col4" >**</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row7_col0" class="data row7 col0" >Population growth rate</td>\n      <td id="T_9ba55_row7_col1" class="data row7 col1" >-0.83</td>\n      <td id="T_9ba55_row7_col2" class="data row7 col2" >(2.49)</td>\n      <td id="T_9ba55_row7_col3" class="data row7 col3" >0.738</td>\n      <td id="T_9ba55_row7_col4" class="data row7 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row8_col0" class="data row8 col0" >Built-up area per capita</td>\n      <td id="T_9ba55_row8_col1" class="data row8 col1" >-3.88</td>\n      <td id="T_9ba55_row8_col2" class="data row8 col2" >(1.77)</td>\n      <td id="T_9ba55_row8_col3" class="data row8 col3" >0.029</td>\n      <td id="T_9ba55_row8_col4" class="data row8 col4" >*</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row9_col0" class="data row9 col0" >GDP per capita</td>\n      <td id="T_9ba55_row9_col1" class="data row9 col1" >-1.65</td>\n      <td id="T_9ba55_row9_col2" class="data row9 col2" >(1.12)</td>\n      <td id="T_9ba55_row9_col3" class="data row9 col3" >0.141</td>\n      <td id="T_9ba55_row9_col4" class="data row9 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row10_col0" class="data row10 col0" >GDP per capita growth rate</td>\n      <td id="T_9ba55_row10_col1" class="data row10 col1" >5.83</td>\n      <td id="T_9ba55_row10_col2" class="data row10 col2" >(2.91)</td>\n      <td id="T_9ba55_row10_col3" class="data row10 col3" >0.046</td>\n      <td id="T_9ba55_row10_col4" class="data row10 col4" >*</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row11_col0" class="data row11 col0" >Night light emission</td>\n      <td id="T_9ba55_row11_col1" class="data row11 col1" >3.39</td>\n      <td id="T_9ba55_row11_col2" class="data row11 col2" >(1.40)</td>\n      <td id="T_9ba55_row11_col3" class="data row11 col3" >0.016</td>\n      <td id="T_9ba55_row11_col4" class="data row11 col4" >*</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row12_col0" class="data row12 col0" >Open space proportion</td>\n      <td id="T_9ba55_row12_col1" class="data row12 col1" >3.65</td>\n      <td id="T_9ba55_row12_col2" class="data row12 col2" >(1.18)</td>\n      <td id="T_9ba55_row12_col3" class="data row12 col3" >0.002</td>\n      <td id="T_9ba55_row12_col4" class="data row12 col4" >**</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row13_col0" class="data row13 col0" >PM2.5 concentration</td>\n      <td id="T_9ba55_row13_col1" class="data row13 col1" >-3.60</td>\n      <td id="T_9ba55_row13_col2" class="data row13 col2" >(1.73)</td>\n      <td id="T_9ba55_row13_col3" class="data row13 col3" >0.038</td>\n      <td id="T_9ba55_row13_col4" class="data row13 col4" >*</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row14_col0" class="data row14 col0" >Proportion of PM2.5 from traffic</td>\n      <td id="T_9ba55_row14_col1" class="data row14 col1" >5.35</td>\n      <td id="T_9ba55_row14_col2" class="data row14 col2" >(1.45)</td>\n      <td id="T_9ba55_row14_col3" class="data row14 col3" >0.000</td>\n      <td id="T_9ba55_row14_col4" class="data row14 col4" >**</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row15_col0" class="data row15 col0" >Average degree of street nodes</td>\n      <td id="T_9ba55_row15_col1" class="data row15 col1" >-4.34</td>\n      <td id="T_9ba55_row15_col2" class="data row15 col2" >(1.26)</td>\n      <td id="T_9ba55_row15_col3" class="data row15 col3" >0.001</td>\n      <td id="T_9ba55_row15_col4" class="data row15 col4" >**</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row16_col0" class="data row16 col0" >Median length of streets</td>\n      <td id="T_9ba55_row16_col1" class="data row16 col1" >0.03</td>\n      <td id="T_9ba55_row16_col2" class="data row16 col2" >(1.40)</td>\n      <td id="T_9ba55_row16_col3" class="data row16 col3" >0.982</td>\n      <td id="T_9ba55_row16_col4" class="data row16 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row17_col0" class="data row17 col0" >Median grade of streets</td>\n      <td id="T_9ba55_row17_col1" class="data row17 col1" >-0.81</td>\n      <td id="T_9ba55_row17_col2" class="data row17 col2" >(1.76)</td>\n      <td id="T_9ba55_row17_col3" class="data row17 col3" >0.646</td>\n      <td id="T_9ba55_row17_col4" class="data row17 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row18_col0" class="data row18 col0" >Average circuity of streets</td>\n      <td id="T_9ba55_row18_col1" class="data row18 col1" >-4.22</td>\n      <td id="T_9ba55_row18_col2" class="data row18 col2" >(1.81)</td>\n      <td id="T_9ba55_row18_col3" class="data row18 col3" >0.021</td>\n      <td id="T_9ba55_row18_col4" class="data row18 col4" >*</td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row19_col0" class="data row19 col0" >Orderness of orientation</td>\n      <td id="T_9ba55_row19_col1" class="data row19 col1" >-0.46</td>\n      <td id="T_9ba55_row19_col2" class="data row19 col2" >(0.94)</td>\n      <td id="T_9ba55_row19_col3" class="data row19 col3" >0.627</td>\n      <td id="T_9ba55_row19_col4" class="data row19 col4" ></td>\n    </tr>\n    <tr>\n      <td id="T_9ba55_row20_col0" class="data row20 col0" >Density of intersection</td>\n      <td id="T_9ba55_row20_col1" class="data row20 col1" >1.26</td>\n      <td id="T_9ba55_row20_col2" class="data row20 col2" >(2.61)</td>\n      <td id="T_9ba55_row20_col3" class="data row20 col3" >0.629</td>\n      <td id="T_9ba55_row20_col4" class="data row20 col4" ></td>\n    </tr>\n  </tbody>\n</table>\n`,  
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
            id: 'crowding_result',
            alignment: 'right',
            hidden: false,
            title: 'Finding 1: Overcrowding and high built-up level leads to more cases, but bigger cities have advantages',
            // image: '',
            description: `As seen in the existing literature, smaller built-up area per capita (overcrowding) is indeed predicting more COVID-19 cases, but also the proportion of built-up area within city boundary.<br><br>
            Bigger cities seems to have, on average, lower COVID-19 case rate. This might be contradictory to popular beliefs, but researchers hypothesized that the better access to health resources and availability of latest information have given residents of large cities more preparedness.<br><br>
            Cancun, Mexico is an example of cities with low built-up area per capita (86 sq meter/person), high built-up proportion (73%), and relatively small population (1/10 of NYC, 1/30 of Shanghai).`,  
            location: {
                center: [-86.83563, 21.16988],
                zoom: 14.72,
                pitch: 0.00,
                bearing: -28.00
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
            id: 'econ_result',
            alignment: 'right',
            hidden: false,
            title: 'Finding 2: Economic growth and night-time light emission positively correlate with incidence rate',
            // image: '',
            description: `Among the socio-economic factors, night time light emission and the growth rate of GDP per capita from 2000 to 2015 are found to be significant predictors of higher incidence rate.<br><br>
            The former factor could be explained with night-time economy, since the density of bars and recreational point-of-interests are found to be predictive of COVID-19 cases in previous studies.<br><br>
            Interestingly, the growth rate of GDP per capita is significant instead of the absolute value of GDP per capita. One hypothesis may be that high growth is often seen during rapid industrialization and urbanization, during which the city economy has grown faster than what the infrastructure and service facilities can keep up, leading to less pandemic-preparedness. For example, urban slums are particularly vulnerable to pandemic due to lack of proper facilities.`,  
            location: {
                center: [18.67723, -34.06271],
                zoom: 16.63,
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
            id: 'openspace_result',
            alignment: 'right',
            hidden: false,
            title: 'Finding 3: Though important to health, more open space may contribute to the spread of pandemic',
            // image: '',
            description: `The proportion of open space in city land is found to be a significant positive predictor of COVID-19 incidence rate, despite previous studies found it leads to lower fatality rate.<br><br>
            While open spaces like parks are important to the physical and mental well-being of urban residents during the pandemic, they are nonetheless shared places where people often don't wear masks. Creating accessible and safe urban open spaces are thus very important. <br><br>
            One strategy for solving the dilemma is to create more open space near people's homes. For example, NYC piloted a <a href="https://www1.nyc.gov/html/dot/html/pedestrians/openstreets.shtml">"Open Streets"</a> program after the pandemic start, which was later made permanent, continuing to provide urban residents with safe street and fresh air.`,  
            location: {
                center: [-73.98858, 40.74169],
                zoom: 18.80,
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
            id: 'pollution_result',
            alignment: 'right',
            hidden: false,
            title: 'Finding 4: Higher proportion of transport sector PM2.5 predict higher incidence rate, but concentration level does not',
            // image: '',
            description: `The proportion of PM2.5 coming from the transport sector is one of the most important predictors according the OLS results, which also shows the importance of promoting greener mobility choices in cities such as electric cars and public transit. <br><br>
            The fact that concentration level shows up as a negative predictor for incidence rate is a surprise to me. One reason may be that in developing countries where ground monitoring stations are few, the recorded data are not accurate. I plan to do more investigation on this topic. <br><br>
            <span style="color:grey;font-size:0.8em">The data on the composition of PM2.5 emissions are calculated based on the Emissions Database for Global Atmospheric Research (EDGAR v4.3.2, Crippa et al., 2018), which applied "bottom-up compilation methodology of sector-specific emissions" for all countries around the world. The PM2.5 concentration level data come from the Global Burden of Disease (GBD) 2017 data, which is created from a hybrid source of remote sensing and ground monitoring network.</span>`,
            location: {
                center: [74.29005, 31.56164],
                zoom: 16.5,
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
            id: 'streetform_result_culdesac',
            alignment: 'right',
            hidden: false,
            title: 'Finding 5: Gridded street networks are more pandemic-resilient than Cul-De-Sac',
            // image: '',
            description: `For urban form factors, I included street features (median length, grade/slope, circuity) and network features (average node degree, density of intersection, orientation order). Low average node degree is found to predict more COVID-19 cases. Node degree is the number of edges connected to an intersection or endpoint node. A street network with low average node degree means the city has more Cul-De-Sac design than gridded pattern.<br><br>
            This phenomenon could be explained from a betweenness centrality perspective. In a Cul-De-Sac design, the betweenness centrality of street nodes on the "arterial" roads are much higher because all residents who live on the "capillary" roads must walk pass their neighbors' homes to these central nodes before going to other parts of the city. <br><br>
            <span style="color:grey;font-size:0.8em">Basildon, United Kingdom, example of city street network of Cul-De-Sac design. Average node degree 2.20.</span>`,
            location: {
                center: [0.49612, 51.56987],
                zoom: 14,
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
            id: 'streetform_result_grid',
            alignment: 'right',
            hidden: false,
            title: 'Finding 5: Gridded street networks are more pandemic-resilient than Cul-De-Sac - Continued',
            // image: '',
            description: `Gridded network, in contrast, allow residents to navigate the city in all directions, thus avoid creating points of highly frequent pedestrian interactions. <br><br>
            Another potential benefit of a gridded street network design may be improved air ventilation thanks to its straight streets, which is shown to be helpful in managing pandemic in microclimate simulations. <br><br>
            Almost all cities are combination of different urban fabric, so more research need to be done to discern the influence of urban form on pandemic management. The <a target="_blank" rel="noopener noreferrer" href="https://ual.sg/project/gbmi/">Global Building Morphology Indicators</a> is a comprehensive list of multi-scale urban form measures.&nbsp;An analysis at sub-city level where COVID-19 data is available would help us understand the phenomenon more deeply. <br><br>
            <span style="color:grey;font-size:0.8em">San Luis Rio Colorado, Mexico, example of city street network of Cul-De-Sac design. Average node degree 3.63.</span>`,
            location: {
                center: [-114.74981, 32.44628],
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
            id: 'conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Concluding Remarks',
            // image: '',
            description: `In this interactive article, we first reviewed the literature on built environment and the pandmiec, summarized key factors including crowding, socio-economic, environmental, urban form factors. And we see how these factors are manifested in various cities from different parts of the world.<br><br>
            Then, we discussed the process of preparing a COVID-19 and urban faeture dataset covering global cities, from cleaning the UN Habitat data, to linking it with the GHS Urban Centre database and Street Network Indicator database. The result is a diverse and harmonized dataset that helps test the generalizability of existing findings. <br><br>
            Finally, we interpreted the results of the regression analysis, reaching at 5 key takeaways: <br>
            &nbsp;1.&nbsp; Overcrowding and high built-up level leads to more cases, bigger cities have lower rates<br>
            &nbsp;2.&nbsp; Economic growth and night-time light emission positively correlate with incidence rate<br>
            &nbsp;3.&nbsp; Though important to health, more open space may contribute to the spread of pandemic<br>
            &nbsp;4.&nbsp; Higher proportion of PM2.5 coming from the transport sector predict higher incidence rate<br>
            &nbsp;5.&nbsp; Gridded street networks are more pandemic-resilient than Cul-De-Sac street network design<br><br>
            This is only a small step towards better understanding of the relationship between built environment and pandemic. Many improvements can be made such as expanding the pool of cities by incorporating new sources, estimating important missing factors such intracity and intercity connectivity, conducting more statistical tests and case studies to verify findings.<br><br>
            Nonetheless, I hope you had a fun read and some new ideas for your research and work!<br> If you have any question or want to collaborate on the next iteration of this work, please feel free to contact me at <a target="_blank" rel="noopener noreferrer" href="g.wu@columbia.edu">g.wu@columbia.edu</a>.
            `,
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
                    layer: 'satellite',
                    opacity: 0
                },
                {
                    layer: 'city-case-rate-choropleth-fill',
                    opacity: 1
                },
                {
                    layer: 'city-dev-ctr-symbol',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'city-case-rate-choropleth-fill',
                    opacity: 0
                },
                {
                    layer: 'city-dev-ctr-symbol',
                    opacity: 0
                },
            ]
        }

    ]
};













