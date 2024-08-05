import React from 'react';
import LazyPictureComponent from './LazyPicture';

export default {
  component: LazyPictureComponent,
  title: 'Components/Image',
  parameters: {
    docs:{
      description: {
        component:'<h2> Lazy picture component</h2><p> This component takes only the source image as props. </p><p> Note that it is a default image source, ensure that the link works fine</p>'
      },
    },
  },
  argTypes:{
    SourceImage: {
      description: 'The Image source you want to add for this lazyImage  component.',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      control: {
        type: 'text'
      },
      table: {
        category: 'lazyImage'
      }
    },
  },
};

const lazyPictureTemplate = ({ ImageSource}) => (
    <LazyPictureComponent>
      <source media="(min-width: 991px)" srcSet={ImageSource} />
      <img src={ImageSource} alt="Gallery" />
    </LazyPictureComponent>
);
// Basic Usage Story
export const lazyPicture = lazyPictureTemplate.bind({});
lazyPicture.args = {
  ImageSource: "https://picsum.photos/id/701/1920/1080",
  id:'1'
};
