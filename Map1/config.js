var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiamFzb25hZDEyMyIsImEiOiJja2p1am5oZTEyYWZ4MnlxbHg4MWd4dDNlIn0.5eYHIg8hvmECM-pIGMwWyw',
    showMarkers: false,
    markerColor: '#db1a57',
    theme: 'light',
    use3dTerrain: false,
    title: 'Late 2018 Migrant Caravan',
    subtitle: 'In late 2018, a caravan travelled from Central America through Mexico with the goal of escaping harsh conditions in their country and seeking better opportunities. This is their story.',
    byline: 'UBC GEOB 472 W2020/21',
    footer: 'Data points based on maps from ' + '<a href ="https://cis.org/Migrant-Caravan-Map">CIS</a>' + ' and ' + '<a href="https://www.mercurynews.com/2018/11/14/map-migrant-caravan-tijuana/">Mercury News.</a>' +
    '<p> Descriptions, dates, and caravan sizes attributed to sources linked at points. </p>' +
    '<p> Images attributed to linked sources. </p>',
    chapters: [
        {
            id: 'SanPedroSula',
            alignment: 'right',
            hidden: false,
            title: 'San Pedro Sula',
            image: 'https://cdn.theatlantic.com/thumbor/cwicObDQeBYZwULUuaDq3qdadTE=/900x600/media/img/photo/2018/10/immigrant-tk/h02_RTX6EZ5M/original.jpg',
            description:
                '<p> Date: October 13 </p>' +
                '<p> Caravan size: 1300 </p>' +
                'This is the starting point for many in the late 2018 migrant caravan.' +
                '<p> <a href="https://rosanjose.iom.int/SITE/en/migrant-caravans">Source</a> </p>' +
                '<p>Image: Jorge Cabrera / Reuters</p>',
            location: {
                center: [ -88.024553,
                    15.506226],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Ocotepeque',
            alignment: 'left',
            hidden: false,
            title: 'Ocotepeque',
            image: 'https://cbsaustin.com/resources/media/ca906905-37ef-435a-b368-7937070f50f6-medium16x9_AP18288653682455.jpg?1539641353655',
            description:
                '<p> Date: October 14 </p>' +
                '<p> Caravan size: 1500 </p>' +
                '"Hundreds more Hondurans have joined a caravan of migrants moving toward the country’s border with Guatemala in a desperate attempt to flee poverty and seek new lives in the United States."' +
                '<p> <a href="https://apnews.com/article/200195140809441bbb214f4dcaef1cb4">Source</a> </p>' +
            '<p>Image: Moises Castillo / AP</p>',
            location: {
                center: [ -89.184867,
                    14.435785],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Esquipulas',
            alignment: 'right',
            hidden: false,
            title: 'Esquipulas',
            image: 'https://i.cbc.ca/1.4866037.1539754529!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/775243532jm041-migrant-cara.jpg',
            description:
                '<p> Date: October 16 </p>' +
                '<p> Caravan size: 1000 </p>' +
                '"The migrant caravan included more than 1,000 people and is expected to continue to expand as it moves north across Guatemala and Mexico"' +
                '<p> <a href="https://www.washingtonpost.com/world/the_americas/caravan-of-more-than-1000-migrants-moves-north-triggering-outrage-from-trump/2018/10/16/67f951f8-d143-11e8-a4db-184311d27129_story.html">Source</a> </p>' +
            '<p>Image: John Moore / Getty</p>',
            location: {
                center: [ -89.351446,
                    14.564786],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'GuatemalaCity',
            alignment: 'left',
            hidden: false,
            title: 'Guatemala City',
            image: 'https://cdn.theatlantic.com/thumbor/6p45-oCuzu_FodtLDn77p35DSlQ=/900x521/media/img/photo/2018/10/immigrant-tk/h10_1052411300/original.jpg',
            description:
                '<p> Date: October 17 </p>' +
                '<p> Caravan size: 2000 </p>' +
                '"More than 2,000 people fleeing poverty and violence have joined the convoy of migrants travelling en masse through Central America, walking along the roadside with strollers and wheelchairs or hitching rides on pickup trucks and buses."' +
                '<p> <a href="https://www.theguardian.com/world/2018/oct/18/one-step-time-desperate-families-migrant-caravan-us-border-america">Source</a> </p>' +
            '<p>Image: Orlando Sierra / AFP / Getty</p>',
            location: {
                center: [ -90.509332,
                    14.639198],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'TecunUman',
            alignment: 'right',
            hidden: false,
            title: 'Tecun Uman',
            image: 'https://media.npr.org/assets/img/2018/10/18/gettyimages-1052449368-76095f595b4158bc1c668ac80200b830c3451852-s800-c85.webp',
            description:
                '<p> Date: October 19 </p>' +
                '<p> Caravan size: 3000 </p>' +
                '"Hundreds of people in a caravan of migrants that crossed from Honduras into Guatemala staged a dramatic bid to breach the Mexican border on Friday, as local governments began preparing to disperse the convoy under pressure from Washington."' +
                '<p> <a href="https://www.theguardian.com/world/2018/oct/19/mexico-caravan-migrants-prepares-us-border-crossing-latest">Source</a> </p>' +
            '<p> Image: Orlando Sierra / AFP / Getty </p>',
            location: {
                center: [ -92.14197,
                    14.674354],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Tapachula',
            alignment: 'left',
            hidden: false,
            title: 'Tapachula',
            image: 'https://cdn.theatlantic.com/thumbor/t6ELNsg2_QV1wpW0hsp3Lepsrb8=/900x601/media/img/photo/2018/10/immigrant-tk/h01_1052683054/original.jpg',
            description:
                '<p> Date: October 19 </p>' +
                '<p> Caravan size: 7000 </p>' +
                '"In open defiance of the Mexican and American governments, thousands of Central American undocumented migrants, most of a caravan that has been heading toward the United States for more than a week, resumed their journey on Sunday in southern Mexico."' +
                '<p> <a href="https://www.nytimes.com/2018/10/20/world/americas/migrants-caravan-mexico.html/">Source</a> </p>' +
            '<p> Image: Pedro Pardo / AFP / Getty </p>',
            location: {
                center: [ -92.270223,
                    14.915747],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Mapastepec',
            alignment: 'right',
            hidden: false,
            title: 'Mapastepec',
            image: 'https://image.cnbcfm.com/api/v1/image/105530013-1540471445725gettyimages-1053006772.jpeg?v=1540471484&w=630&h=354',
            description:
                '<p> Date: October 25 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '"Southern Mexico’s Chiapas state is home to some of the country’s most impoverished communities. Yet towns suddenly faced with an influx of thousands of people bedding down in overflowing plazas and parks have organized to offer them shelter, medical treatment and donations as best they can."' +
                '<p> <a href="https://www.theglobeandmail.com/world/article-sickness-fear-harassment-in-mexico-whittle-away-at-migrant-caravan/">Source</a> </p>' +
            '<p>Image: Pedro Pardo / AFP / Getty </p>',
            location: {
                center: [ -92.903265,
                    15.445342],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Pijijiapan',
            alignment: 'left',
            hidden: false,
            title: 'Pijijiapan',
            image: 'https://www.gannett-cdn.com/presto/2018/10/27/PPHX/cafce788-3afc-413e-ba9d-723f4921aee0-AP_18299622020020.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp',
            description:
                '<p> Date: October 25 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '"Arriving in Pijijiapan, thousands camped under plastic tarps in front of a church. Volunteer doctors treated dozens for dehydration, injured feet and other ailments. "' +
                '<p> <a href="https://www.theglobeandmail.com/world/article-sickness-fear-harassment-in-mexico-whittle-away-at-migrant-caravan/">Source</a> </p>'
            + '<p> Image: Rodrigo Abd / AP </p>',
            location: {
                center: [ -93.20985,
                    15.686137],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Arriaga',
            alignment: 'right',
            hidden: false,
            title: 'Arriaga',
            image: 'https://static01.nyt.com/images/2018/10/27/world/27caravan1/merlin_145885815_f5afed59-28a6-404e-962a-76ef083721f0-jumbo.jpg?quality=90&auto=webp',
            description:
                '<p> Date: October 26 </p>' +
                '<p> Caravan size: 6000 </p>' +
                '"With their arrival in Arriaga, on the 15th day of their journey, they had reached a literal and figurative crossroads. The town has historically been a place of big decisions for migrants making the northward trek from Central America."' +
                '<p> <a href="https://www.nytimes.com/2018/10/26/world/americas/migrants-caravan-honduras-mexico.html">Source</a> </p>' +
            '<p> Image: Todd Heisler / New York Times </p>',
            location: {
                center: [ -93.897891,
                    16.234256],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Niltepec',
            alignment: 'left',
            hidden: false,
            title: 'Niltepec',
            image: 'https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-04/D793F514-3FFA-4FF7-B006-2323E0580E4D.jpg?itok=T-kPmQSF',
            description:
                '<p> Date: October 29 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"Hondurans in the group spoke of fleeing the same conditions: poverty and gang violence in one of the world\'s deadliest countries by homicide rates."' +
                '<p> <a href="https://www.ctvnews.ca/world/migrant-caravan-demands-transport-as-second-group-enters-mexico-1.4155051">Source</a> </p>' +
            '<p>Image: No Author / AP </p>',
            location: {
                center: [ -94.614547,
                    16.556658],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Juchitan de Zaragoza',
            alignment: 'right',
            hidden: false,
            title: 'Juchitan',
            image: 'https://i.cbc.ca/1.4884592.1540928397!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/central-america-migrant-caravan.jpg',
            description:
                '<p> Date: November 1 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"The primary caravan officials have been tracking was last reported to be near the city of Juchitan, Mexico, on Nov. 1, according to the Associated Press. That is in the southern Mexican state of Oaxaca, about 800 miles from the nearest crossing into the U.S. border."' +
                '<p> <a href="https://www.marketwatch.com/story/this-map-shows-how-far-the-migrant-caravan-is-from-the-us-border-2018-10-26/">Source</a> </p>' +
            '<p> Image: Rebecca Blackwell / AP</p>',
            location: {
                center: [ -95.022722,
                    16.433984],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Donaji',
            alignment: 'left',
            hidden: false,
            title: 'Donaji',
            image: 'https://www.ctvnews.ca/polopoly_fs/1.4174593.1542089050!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg',
            description:
                '<p> Date: November 24 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"As President Donald Trump ramped up his anti-migrant rhetoric ahead of Tuesday\'s midterm elections, exhausted Central Americans walking across Mexico in hopes of reaching the United States said they were mostly perplexed and turned off by his threats, which they perceive as exaggerated."' +
                '<p> <a href="https://www.cp24.com/world/we-are-not-killers-migrants-in-caravan-respond-to-trump-1.4161942">Source</a> </p>' +
            '<p> Image: Rodrigo Abd / AP </p>',
            location: {
                center: [ -95.052346,
                    17.227006],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Isla',
            alignment: 'right',
            hidden: false,
            title: 'Isla',
            image: 'https://im-media.voltron.voanews.com/Drupal/01live-166/styles/892x501/s3/2019-04/F90C888A-5F94-4DBB-B555-667009BB8883.jpg?itok=zSzNkQ_5',
            description:
                '<p> Date: November 4 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"Thousands of wary Central American migrants resumed their push toward the United States on Sunday, a day after arguments over the path ahead saw some travelers splinter away from the main caravan, which is entering a treacherous part of its journey through Mexico."' +
                '<p> <a href="https://www.nbcnews.com/news/latino/migrant-caravan-embarks-route-death-through-mexico-n931041">Source</a> </p>' +
            '<p>Image: No Author / AP</p>',
            location: {
                center: [ -95.528554,
                    18.027452],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Cordoba',
            alignment: 'left',
            hidden: false,
            title: 'Cordoba',
            image: 'https://media4.s-nbcnews.com/i/newscms/2018_44/2632151/181104-migrant-caravan-al-1145_62e0e26ccb412d515af9dc3942f9f0ab.jpg',
            description:
                '<p> Date: November 4 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"Thousands of bone-tired Central Americans set their sights on Mexico City on Sunday after making a grueling journey through a part of Mexico that has been particularly treacherous for migrants seeking to get to the United States."' +
                '<p> <a href="https://www.680news.com/2018/11/04/tired-and-angry-migrant-caravan-splinters-in-mexican-state/">Source</a> </p>' +
            '<p>Image: Angel Hernandez / EPA</p>',
            location: {
                center: [ -96.936461,
                    18.893956],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Mexico City',
            alignment: 'right',
            hidden: false,
            title: 'Mexico City',
            image: 'https://images.thestar.com/DWVzwWWKb_Axs-ocXQBHfCb_Jow=/1086x715/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/news/world/2018/11/05/caravan-migrants-arrive-in-mexico-city-bed-down-in-stadium/caravanstadium.jpg',
            description:
                '<p> Date: November 5 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '"Mexico City, the first major metropolis the migrants have reached since leaving Honduras, is expected to be the place where the caravan may divide and some may decide to stay."' +
                '<p> <a href="https://www.bbc.com/news/world-latin-america-46092995">Source</a> </p>' +
            '<p>Image: Rodrigo Abd / AP</p>',
            location: {
                center: [ -99.138933,
                    19.437377],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Queretaro',
            alignment: 'left',
            hidden: false,
            title: 'Queretaro',
            image: 'https://i.cbc.ca/1.4901490.1541973885!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/central-america-migrant-caravan.jpg',
            description:
                '<p> Date: November 10 </p>' +
                '<p> Caravan size: 6500 </p>' +
                '"The government of Queretaro said via Twitter that 6,531 migrants had moved through the state between Friday and Saturday."' +
                '<p> <a href="https://www.cbc.ca/news/world/mexico-migrant-caravan-u-s-1.4901472">Source</a> </p>' +
            '<p>Image: Rodrigo Abd / AP</p>',
            location: {
                center: [ -100.387679,
                    20.582531],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Guadalajara',
            alignment: 'right',
            hidden: false,
            title: 'Guadalajara',
            image: 'https://storage.googleapis.com/afs-prod/media/media:6c85855ddfc24f4897c5713bbbe31a19/800.jpeg',
            description:
                '<p> Date: November 12 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '" Several thousand Central American migrants heading for the U.S. border arrived in the western Mexico city of Guadalajara with help from truckers and other motorists Monday, marking a month since their trek began."'+
                '<p> <a href="https://apnews.com/article/574892417b0640b8a92ce58c096b26a5">Source</a> </p>' +
            '<p>Image: Rodrigo Abd / AP</p>',
            location: {
                center: [ -103.363198,
                    20.681666],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Culiacan',
            alignment: 'left',
            hidden: false,
            title: 'Culiacan',
            image: 'https://www.ctvnews.ca/polopoly_fs/1.4176996.1542218203!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg',
            description:
                '<p> Date: November 14 </p>' +
                '<p> Caravan size: 2000 </p>' +
                '"The Rev. Miguel Angel Soto, director of the Casa de Migrante in the Sinaloa capital of Culiacan, said about 2,000 migrants had arrived in that area."' +
                '<p> <a href="https://www.ctvnews.ca/world/migrant-caravan-groups-arrive-by-hundreds-at-u-s-border-1.4176973">Source</a> </p>' +
            '<p>Image: Rodrigo Abd / AP </p>',
            location: {
                center: [ -107.40992,
                    24.818254],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Navojoa',
            alignment: 'right',
            hidden: false,
            title: 'Navojoa',
            image: 'https://static.reuters.com/resources/r/?m=02&d=20181118&t=2&i=1326362820&r=LYNXNPEEAH02D&w=640',
            description:
                '<p> Date: November 14 </p>' +
                '<p> Caravan size: 2000 </p>' +
                '"Hundreds of migrants from a caravan of Central Americans were stalled at the U.S.-Mexico border on Saturday, where a handful said they welcomed recent Mexican offers of employment in the face of a hostile U.S. reception"' +
                '<p> <a href="https://www.reuters.com/article/instant-article/idUKKCN1NN026">Source</a> </p>' +
            '<p>Image: Kim Kyung-Hoon / Reuters </p>',
            location: {
                center: [ -109.449005,
                    27.07746],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
            id: 'Tijuana',
            alignment: 'left',
            hidden: false,
            title: 'Tijuana',
            image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/143AF/production/_104336828_mediaitem104336827.jpg',
            description:
                '<p> Date: November 14 </p>' +
                '<p> Caravan size: 5000 </p>' +
                'This is the final destination for many migrants in the caravan. Many others continued from Tijuana into the US.' +
            '<p> <a href="https://www.bbc.com/news/world-latin-america-46207034">Source</a> </p>' +
            '<p> Image: No Author / European Press Agency </p>',
            location: {
                center: [ -116.964319,
                    32.500371],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },


    ]
};
