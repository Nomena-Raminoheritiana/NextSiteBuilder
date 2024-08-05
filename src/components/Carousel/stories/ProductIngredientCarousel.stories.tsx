import React from 'react';
import styled from "styled-components";
import ProductIngredientCarouselComponent from '../src/ProductIngredientCarousel';

export default {
  component: ProductIngredientCarouselComponent,
  title: 'Components/Carousel',
  parameters: {
    docs: {
			description: {
				component: ' <h2>ProductIngredientCarousel COMPONENT</h2><p>Notes</p>'
			}
		}
  },
  argTypes:{
    title: {
      type: {
        name: 'string'
      },
      defaultValue: null,
      description: 'Title',
      control: 'text',
      table: {
        category: 'ProductIngredientCarousel'
      }
    },
  }
};

const ProductIngredientCarouselData: any = {
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

const DivWithoutPadding = styled.div`
  &.no-padding {
    padding : 0px !important;
  }
  
  .sb-show-main.sb-main-padded & {
    padding : 0px !important;
  }
 
  @media (min-width: 1024px) {
    &.no-padding {
      padding : 0 40px !important;
    }
  }
`

const ProductIngredientCarousel = (args) => (
  <div className="container">
    <div className="row justify-content-center">
      <DivWithoutPadding className="col-md-12 col-sm-12 no-padding">
        <ProductIngredientCarouselComponent {...args}/>
      </DivWithoutPadding>
    </div>
  </div>
);

export const productIngredientCarousel = ProductIngredientCarousel.bind({});

productIngredientCarousel.args = {
  title: ProductIngredientCarouselData.title,
  items: ProductIngredientCarouselData.items,
}

