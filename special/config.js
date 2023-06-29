var config = {
    style: 'mapbox://styles/timwgy/cl8ln85rd001u15qljjgpkuwi',
    accessToken: 'pk.eyJ1IjoidGltd2d5IiwiYSI6ImNsOGh2b3NjdTAyc3Izbm53eGZpcnZpM20ifQ.9CUQrRYkWVvAo_YBYF3enw',
    projection: 'mercator',
    showMarkers: false,
    inset: false,
    use3dTerrain: false,
    // theme: 'dark',
    title: '我们的旅行日记',
    subtitle: false,
    byline: '生日快乐寒妹儿',
    footer: '',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: "",
            description: `AAAA
                         AAAA
                         AAAA`,
            location: {
                center: [25.0, 16.0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                },
                // {
                //     layer: 'travel-map',
                //     opacity: 1,
                // },
                // {
                //     layer: 'travel-map-label',
                //     opacity: 1,
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'travel-map',
                //     opacity: 0,
                // },
                // {
                //     layer: 'travel-map-label',
                //     opacity: 0,
                // }
            ]
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
                    opacity: 1
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
            id: 'streetform_result_culdesac',
            alignment: 'right',
            hidden: false,
            title: 'Finding 2: Gridded street networks are more pandemic-resilient than Cul-De-Sac',
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
            title: 'Finding 2: Gridded street networks are more pandemic-resilient than Cul-De-Sac - Continued',
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
            id: 'econ_result',
            alignment: 'right',
            hidden: false,
            title: 'Finding 4: Economic growth and night-time light emission positively correlate with incidence rate',
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
            id: 'pollution_result',
            alignment: 'right',
            hidden: false,
            title: 'Finding 5: Higher proportion of transport sector PM2.5 predict higher incidence rate, but concentration level does not',
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
            description: `AAAA
            AAAA
            AAAA
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
            ],
            onChapterExit: [
            ]
        }

    ]
};













