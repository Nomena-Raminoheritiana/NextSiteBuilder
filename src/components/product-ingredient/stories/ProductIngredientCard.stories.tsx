import React from 'react';
import ProductIngredientCardComponent from '../src/ProductIngredientCard';
import ProductIngredientCardJsonData from '../content/ProductIngredientCard.content.json';
import {Box} from "@mui/material";

export default {
  component: ProductIngredientCardComponent,
  title: 'Components/ProductIngredientCard',
  parameters: {
    docs: {
			description: {
				component: ' <h2>ProductIngredientCard COMPONENT</h2><p>Notes</p>'
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
        category: 'ProductIngredientCard'
      }
    },
    description: {
      type: {
        name: 'string'
      },
      defaultValue: null,
      description: 'Description',
      control: 'text',
      table: {
        category: 'ProductIngredientCard'
      }
    },
    image: {
      type: {
        name: 'object'
      },
      defaultValue: null,
      description: 'Image',
      control: 'object',
      table: {
        category: 'ProductIngredientCard'
      }
    }
  }
};

const ProductIngredientCardData: any = ProductIngredientCardJsonData;

const ProductIngredientCard = (args) => (
  <div className="container">
    <div className="row">
      <Box className="col-md-12 col-sm-12" sx={{width: '362px'}}>
        <ProductIngredientCardComponent {...args}/>
      </Box>
    </div>
  </div>
);

export const productIngredientCardWithList = ProductIngredientCard.bind({});
export const productIngredientCardWithLink = ProductIngredientCard.bind({});
export const productIngredientCardWithDescriptionAndList = ProductIngredientCard.bind({});
export const productIngredientCardWithDescription = ProductIngredientCard.bind({});

productIngredientCardWithList.args = {
  title: ProductIngredientCardData.title,
  listItems: ProductIngredientCardData.listItems,
  image: ProductIngredientCardData.image
}

productIngredientCardWithLink.args = {
  title: ProductIngredientCardData.title,
  listItems: ProductIngredientCardData.listItems,
  link: ProductIngredientCardData.link,
  image: ProductIngredientCardData.image
}

productIngredientCardWithDescriptionAndList.args = {
  title: ProductIngredientCardData.title,
  descriptions: [ProductIngredientCardData.descriptions[0]],
  listItems: ProductIngredientCardData.listItems,
  image: ProductIngredientCardData.image
}

productIngredientCardWithDescription.args = {
  title: ProductIngredientCardData.title,
  descriptions: ProductIngredientCardData.descriptions,
  image: ProductIngredientCardData.image
}


