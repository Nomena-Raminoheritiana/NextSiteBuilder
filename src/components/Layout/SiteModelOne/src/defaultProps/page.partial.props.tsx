import logoImage from "@/components/Logo/assets/logo_exemple_2.png";
import image from "@/components/Banner/assets/resto1.jpeg";
import image2 from "@/components/Banner/assets/imageResto2.jpg";
import author1Image from "@/components/Testimonial/assets/author 1.avif";
import author2Image from "@/components/Testimonial/assets/author 2.avif";
import faqImage from "@/components/Faqs/assets/faqImage.svg";

export const headerLink = [
    {url: '/url1', label:'Lien 1', id: 'link1'},
    {url: '/url2', label:'Lien 2', id: 'link2'},
    {url: '/url3', label:'Lien 3', id: 'link3'},
    {url: '/url4', label:'Lien 4', id: 'link4'},
]
export const logoProps = {
    image : {
        url: logoImage,
        id: 'imageLogo'
    },
    text : {
        text : 'Logo',
        id: '2'
    }
}

export const HeaderProps = {
    headerDesktopFixedProps : {
        navItems : headerLink,
        logoProps: logoProps
    },
    headerMobileProps : {
        navItems : headerLink,
        logoProps: logoProps
    },
    headerDesktopFlexProps: {
        navItems : headerLink,
        logoProps: logoProps
    }
}


export const carouselFullBannerProps = {
    items : [
        {
            image : {
                url: 'https://images.stockcake.com/public/b/d/8/bd8c7e9f-0152-4f18-ab07-b1cd35062763_large/elegant-dining-interior-stockcake.jpg',
                alt :'resto',
                id : 'imageCarouselFullBannerPropsSlide1'
            },
            title: {
                text : 'Lorem ipsum dolor sit amet',
                id : 'titleCarouselFullBannerPropsSlide1'
            },
            paragraph: {
                text : 'consectetur adipiscing elit. Mauris faucibus nisi nec erat ullamcorper aliquam. Ut tincidunt, erat vitae aliquet posuere, quam sapien tincidunt lacus, vitae convallis risus nisi quis dui.',
                id : 'paragraphCarouselFullBannerPropsSlide1'
            }
        },
        {
            image : {
                url: image2,
                alt :'resto 2',
                id : 'imageCarouselFullBannerPropsSlide2'
            },
            title: {
                text : 'Mauris leo neque, luctus varius luctus',
                id : 'titleCarouselFullBannerPropsSlide2'
            },
            paragraph: {
                text : 'Integer consequat nisl mauris, mollis sagittis elit commodo id. Nunc massa mauris, accumsan in ligula vel, blandit auctor urna. Aliquam varius felis nec odio ornare, vel volutpat justo elementum. Sed vehicula mi vitae libero ultricies, ut suscipit neque malesuada. Vestibulum magna tellus',
                id : 'paragraphCarouselFullBannerPropsSlide2'
            }
        }
    ],
    animation: 'fade'
}

export const marqueeTextProps = {
    text: "I can be a React component, multiple React components, or just some text.",
    id : 'marqueeText1'
}

export const sectionHeaderProps1 = {
    smallTitleContents: {
        text : 'OUR VALUES',
        id : 'sectionHeaderProps1SmallTitleContents1'
    },
    sectionTitleContents: {
        text : 'We follow these.',
        id : 'sectionTitleContentsSectionHeaderProps1'
    },
    sectionParagraphContents:{
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id : 'sectionParagraphContentsSectionHeaderProps1'
    },
    smallTitleProps: {
        className:'smallTitleClass',
        textHeading:'h4'
    },
    sectionTitleProps: {
        className:'sectionTitleClass',
        textHeading:'h2'
    },
    sectionParagraphProps: {
        className:'sectionParagraphClass'
    }
}

export const bannerWithTwoColumnsProps1 = {
    image : {
        url: image,
        alt :'resto',
        id : 'imageBannerWithTwoColumnsProps1'
    },
    imageToLeft: true,
    smallTitleContents:{
        text: 'ABOUT TREACT',
        id : 'smallTitleContentsBannerWithTwoColumnsProps1'
    },
    sectionTitleContents:{
        text: 'We aim to disrupt the design space.',
        id : 'sectionTitleContentsBannerWithTwoColumnsProps1'
    },
    sectionParagraphContents:{
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        id : 'sectionParagraphContentsBannerWithTwoColumnsProps1'
    },
    smallTitleProps: {
        className:'smallTitleClass',
        textHeading:'h5'
    },
    sectionTitleProps: {
        className:'sectionTitleClass',
        textHeading:'h2'
    },
    sectionParagraphProps: {
        className:'sectionParagraphClass'
    }
}

export const bannerWithTwoColumnsProps2 = {
    image : {
        url: 'https://images.stockcake.com/public/f/c/e/fce981d7-17a5-47f1-affd-fd4d16867507_large/chef-serving-dinner-stockcake.jpg',
        alt :'resto',
        id : 'imageBannerWithTwoColumnsProps2'
    },
    imageToLeft: false,
    smallTitleContents:{
        text : 'ABOUT TREACT',
        id : 'smallTitleContentsBannerWithTwoColumnsProps2'
    },
    sectionTitleContents:{
        text : 'We aim to disrupt the design space.',
        id : 'sectionTitleContentsBannerWithTwoColumnsProps2'
    },
    sectionParagraphContents: {
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        id : 'sectionParagraphContentsBannerWithTwoColumnsProps2'
    },
    smallTitleProps: {
        className:'smallTitleClass',
        textHeading:'h5'
    },
    sectionTitleProps: {
        className:'sectionTitleClass',
        textHeading:'h2'
    },
    sectionParagraphProps: {
        className:'sectionParagraphClass'
    }
}

export const sectionHeaderProps2 = {
    smallTitleContents:{
        text : 'LOREM',
        id : 'smallTitleContentsSectionHeaderProps2'
    },
    sectionTitleContents:{
        text : 'Lorem ipsum dolor sit amet',
        id : 'sectionTitleContentsSectionHeaderProps2'
    },
    sectionParagraphContents:{
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id : 'sectionParagraphContentsSectionHeaderProps2'
    },
    smallTitleProps: {
        className:'smallTitleClass',
        textHeading:'h4'
    },
    sectionTitleProps: {
        className:'sectionTitleClass',
        textHeading:'h2'
    },
    sectionParagraphProps: {
        className:'sectionParagraphClass'
    }
}

export const QuiltedImageProps = {
    itemData:[
        {
            img: 'https://images.stockcake.com/public/d/9/b/d9bec886-c7c7-4465-8a18-294a3820e6bf_large/restaurant-service-station-stockcake.jpg',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
            id : 'image1QuiltedImageProps'
        },
        {
            img: 'https://images.stockcake.com/public/c/8/e/c8e85d56-bbe4-4e5a-b6a7-01b319c4b00e/busy-restaurant-kitchen-stockcake.jpg',
            title: 'Burger',
            id : 'image2QuiltedImageProps'
        },
        {
            img: 'https://images.stockcake.com/public/a/2/6/a266c6b5-4969-4ceb-856e-b03c999bb22d_large/busy-restaurant-kitchen-stockcake.jpg',
            title: 'Camera',
            id : 'image3QuiltedImageProps'
        },
        {
            img: 'https://images.stockcake.com/public/c/2/6/c26211eb-40c2-498a-9690-3301aa47309f_large/bustling-restaurant-scene-stockcake.jpg',
            title: 'Coffee',
            cols: 2,
            id : 'image4QuiltedImageProps'
        }
    ]
}

export const sectionHeaderProps3 = {
    smallTitleContents:{
        text : 'LOREM',
        id : 'smallTitleContentsSectionHeaderProps3'
    },
    sectionTitleContents:{
        text : 'Lorem ipsum dolor sit amet',
        id : 'sectionTitleContentsSectionHeaderProps3'
    },
    sectionParagraphContents:{
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id : 'sectionParagraphContentsSectionHeaderProps3'
    },
    smallTitleProps: {
        className:'smallTitleClass',
        textHeading:'h4'
    },
    sectionTitleProps: {
        className:'sectionTitleClass',
        textHeading:'h2'
    },
    sectionParagraphProps: {
        className:'sectionParagraphClass'
    }
}

export const productIngredientCarouselProps = {
    "className": "",
    "items": [
        {
            "title": {
                "text" : "Lorem ipsum",
                "id" : "titleItems1productIngredientCarouselProps"
            },
            "link": null,
            "listItems": [
                {
                    "text" : "Lorem ipsum dolor sit amet",
                    "id" : "listItems1Items1productIngredientCarouselProps"
                },
                {
                    "text" : "consectetur adipiscing elit",
                    "id" : "listItems2Items1productIngredientCarouselProps"
                }
            ],
            "descriptions": [
                {
                    "text" : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "id" : "descriptionsItems1productIngredientCarouselProps"
                }

            ],
            "image": {
                "title": "Pampers Swaddlers Global SI03",
                "description": "Pampers Swaddlers Global SI03",
                "contentType": "image/png",
                "fileName": "Core_Transparent_V2 1.png",
                "size": 60782,
                "url": "https://images.stockcake.com/public/f/0/2/f02d73fc-3943-450b-9f1b-56a3c97c73cf_large/cozy-restaurant-scene-stockcake.jpg",
                "width": 300,
                "height": 200,
                "id" : "imageItems1productIngredientCarouselProps"
            }
        },
        {
            "title": {
                "text" : "Lorem ipsum",
                "id" : "titleItem2productIngredientCarouselProps"
            },
            "link": null,
            "listItems": [
                {
                    "text" : "Lorem ipsum dolor sit amet",
                    "id" : "54"
                },
                {
                    "text" : "consectetur adipiscing elit",
                    "id" : "55"
                }

            ],
            "descriptions": [
                {
                    "text" : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "id" : "56"
                }
            ],
            "image": {
                "title": "Pampers Swaddlers Layers",
                "description": "Layers",
                "contentType": "image/png",
                "fileName": "Layers_Transparent_V2 1(1).png",
                "size": 70987,
                "url": "https://images.stockcake.com/public/8/f/a/8fa7bc4c-0357-42e9-b5ac-28cafb905b4f_large/chic-industrial-restaurant-stockcake.jpg",
                "width": 300,
                "height": 200,
                "id" : "57"
            }
        },
        {
            "title":  {
                "text": "Lorem ipsum",
                "id" : "58"
            },
            "link": null,
            "listItems":  [
                {
                    "text" : "Lorem ipsum dolor sit amet",
                    "id" : "59"
                },
                {
                    "text" : "consectetur adipiscing elit",
                    "id" : "60"
                }

            ],
            "descriptions": [
                {
                    "text" : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "id" : "61"
                }
            ],
            "image": {
                "title": "Pampers Swaddlers Newborn",
                "description": "Pampers Swaddlers Newborn",
                "contentType": "image/png",
                "fileName": "2022Fall_Pampers_Swaddlers_Newborn_SI08 1.png",
                "size": 81618,
                "url": "https://images.stockcake.com/public/d/5/a/d5aaabf3-c120-4ec3-8592-26aba48a98bd_large/elegant-urban-restaurant-stockcake.jpg",
                "width": 300,
                "height": 200,
                "id" : "62"
            }
        },
        {
            "title":  {
                "text": "Lorem ipsum",
                "id" : "63"
            },
            "link": null,
            "descriptions": [
                {
                    "text" : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "id" : "64"
                }
            ],
            "image": {
                "title": "Pampers Swaddlers Baby dry couches",
                "description": "Pampers Swaddlers Baby dry couches",
                "contentType": "image/png",
                "fileName": "pampers-baby-dry-couches-taille-5-11-a-16-kg 2.png",
                "size": 79541,
                "url": "https://images.stockcake.com/public/c/7/5/c7582aa6-9458-4965-aefd-c515d3901a9f_large/seaside-dining-experience-stockcake.jpg",
                "width": 300,
                "height": 200,
                "id" : "65"
            }
        },
        {
            "title":  {
                "text": "Lorem ipsum",
                "id" : "66"
            },
            "link": null,
            "descriptions": [
                {
                    "text" : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "id" : "67"
                }
            ],
            "image": {
                "title": "Pampers Swaddlers Dyes",
                "description": "Pampers Swaddlers Dyes",
                "contentType": "image/png",
                "fileName": "Motifs_Transparent_V2 1.png",
                "size": 94436,
                "url": "https://images.stockcake.com/public/d/5/c/d5c723ff-16d1-4c22-8963-f4604b3de928_large/romantic-dinner-date-stockcake.jpg",
                "width": 300,
                "height": 200,
                "id" : "68"
            }
        },
        {
            "title":  {
                "text": "Lorem ipsum",
                "id" : "69"
            },
            "link": null,
            "descriptions": [
                {
                    "text" : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "id" : "70"
                }
            ],
            "image": {
                "title": "Pampers Swaddlers Dyes",
                "description": "Pampers Swaddlers Dyes",
                "contentType": "image/png",
                "fileName": "Motifs_Transparent_V2 1.png",
                "size": 94436,
                "url": "https://images.stockcake.com/public/1/6/b/16b7b6f0-8cf1-4ad8-a679-1b5c6fc3e6c3_large/enchanting-evening-dinner-stockcake.jpg",
                "width": 300,
                "height": 200,
                "id" : "71"
            }
        }
    ]
}

export const testimonialProps = {
    className:'testimonialclassName',
    title: {
        text : 'Testimonials',
        id : '72'
    },
    paragraph: {
        text : 'Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n',
        id : '73'
    },
    imageCarouselMod1Props: {
        items : [
            {
                url: image,
                alt :'resto',
                id: '74'
            },
            {
                url: image2,
                alt :'resto 2',
                id: '75'
            }
        ]
    },
    singleTestimonials: [
        {
            className : 'singleTestimonialClassName',
            paragraph : {
                text : 'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
                id: '76'
            },
            testimonialAuthor : {
                className : 'testimonialAuthorClassName',
                image : {
                    url: author1Image,
                    alt: 'author 1',
                    id: '77'
                },
                name : {
                    text : 'Adam Cuppy',
                    id: '78'
                },
                jobTitle : {
                    text: 'Founder, EventsNYC',
                    id: '79'
                }
            }
        },
        {
            className : 'singleTestimonialClassName',
            paragraph : {
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                id: '80'
            },
            testimonialAuthor : {
                className : 'testimonialAuthorClassName',
                image : {
                    url: author2Image,
                    alt: 'author 2',
                    id: '81'
                },
                name : {
                    text : 'Charlotte Hale',
                    id: '82'
                },
                jobTitle : {
                    text : 'CEO, Delos Inc.',
                    id: '83'
                }
            }

        }
    ]

}

export const faqsProps = {
    accordionProps: {
        className: 'accordionClassName',
        items: [
            {
                className: 'accordionClassName1',
                summary: {
                    text : 'Is lunch provided free of cost ?',
                    id: '84'
                },
                details: {
                    text : 'Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.',
                    id: '85'
                }
            },
            {
                className: 'accordionClassName2',
                summary: {
                    text : 'Do you have 2 Bedroom suites ?',
                    id: '86'
                },
                details: {
                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: '87'
                }
            },
            {
                className: 'accordionClassName3',
                summary: {
                    text : 'Lorem ipsum dolor sit amet',
                    id: '88'
                },
                details: {
                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: '89'
                }
            },
            {
                className: 'accordionClassName4',
                summary: {
                    text : 'Lorem ipsum dolor sit amet',
                    id: '90'
                },
                details: {
                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: '91'
                }
            }
        ]
    },
    sectionHeaderProps: {
        smallTitleContents:{
            text : 'FAQS',
            id: '92'
        },
        sectionTitleContents:{
            text : 'We follow these.',
            id: '93'
        },
        sectionParagraphContents:{
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id: '94'
        },
        smallTitleProps: {
            className:'smallTitleClass',
            textHeading:'h4'
        },
        sectionTitleProps: {
            className:'sectionTitleClass',
            textHeading:'h2'
        },
        sectionParagraphProps: {
            className:'sectionParagraphClass'
        },
        alignLeft: true
    },
    imageProps: {
        url: faqImage,
        title: 'faqs',
        id: '95'
    }

}

export const footerProps = {
    className: 'FooterClassName',
    logoProps: {
        image : {
            url: logoImage,
            id: '96'
        },
        text : {
            text : 'Logo',
            id: '97'
        }
    },
    navItems : headerLink,
    socialLinks : [
        {
            icon : {
                url: 'https://img.icons8.com/dotty/480/ffffff/facebook-f.png',
                title:'',
                id: '98'
            },
            url: {
                href : '',
                id: '99'
            }
        },
        {
            icon : {
                url:'https://img.icons8.com/dotty/480/ffffff/x.png',
                title:'',
                id: '100'
            },
            url:  {
                href : '',
                id: '101'
            }
        },
        {
            icon : {
                url:'https://img.icons8.com/dotty/480/ffffff/youtube-play.png',
                title:'',
                id: '102'
            },
            url:  {
                href : '',
                id: '103'
            }
        }
    ],
    copywrightText: {
        text : '© Copyright 2020, Treact Inc. All Rights Reserved.',
        id: '104'
    }
}
