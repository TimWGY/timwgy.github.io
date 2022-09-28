var config = {
    style: 'mapbox://styles/timwgy/cl8ln85rd001u15qljjgpkuwi/draft',
    accessToken: 'pk.eyJ1IjoidGltd2d5IiwiYSI6ImNsOGh2b3NjdTAyc3Izbm53eGZpcnZpM20ifQ.9CUQrRYkWVvAo_YBYF3enw',
    projection: 'mercator',
    showMarkers: false,
    inset: false,
    use3dTerrain: false,
    // theme: 'dark',
    title: 'What affect the spread of pandemic in different cities?',
    
    subtitle: 'A global perspective leveraging harmonized data from 400+ cities',
    byline: 'By Guangyu (Tim) Wu',
    footer: 'Source: source citations',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: "Combat the pandemic with urban design and policy",
            description: `When COVID-19 hit cities around the globe, people wonder if dense urban environments can withstand the challenge of pandemics. In this article, I will:</br>
&nbsp;&nbsp;1) Survey the literature on how built environment factors related to COVID-19</br>
&nbsp;&nbsp;2) Test the generalizability of existing findings with a dataset of global cities</br>
&nbsp;&nbsp;3) Discuss how urban design & policy can protect us against future pandemics</br></br>
The choropleth in the background shows the cummulative case count per 10,000 for country/region and province/state geographic units.`,
            location: {
                center: [0.0, 16.0],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'choropleth-fill',
                    opacity: 1,
                },
                {
                    layer: 'choropleth-stroke',
                    opacity: 1,
                },
                {
                    layer: 'choropleth-label',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'choropleth-fill',
                    opacity: 0
                },
                {
                    layer: 'choropleth-stroke',
                    opacity: 0,
                },
                {
                    layer: 'choropleth-label',
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
            description: 'In this article, I will focus on studies that explicitly examine the role of built environment factors in the spread of COVID-19. I used the paper “The impacts of the built environment on the incidence rate of COVID-19: A case study of King County, Washington” as the seed article and iteratively discovered related papers using the citation and authorship-based paper discovery tool Inciteful. After 4 rounds of selection, 45 papers were included and analyzed for key findings, methods, and data sources.',
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
            id: 'bigger_denser',
            alignment: 'left',
            hidden: false,
            title: 'Do bigger, denser cities see more COVID-19 cases?',
            // image: '',
            description: 'One of myth at the beginning of pandemic is that bigger, denser cities are more susceptible to contagious disease like the COVID-19.',
            location: {
                center: [-73.96078, 40.79993],
                zoom: 17.33,
                pitch: 59.58,
                bearing: -59.19
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
