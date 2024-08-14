import React from 'react';

const componentMap = {
    TextareaForm: () => import('../../components/Forms/Modal/TextareaForm.component'),
    DeleteConfirmation: () => import('../../components/Forms/Modal/DeleteConfirmation.component'),
    ImageForm: () => import('../../components/Forms/Modal/ImageForm.component'),
    HyperlinkForm: () => import('../../components/Forms/Modal/HyperlinkForm.component'),
};

export const getComponent = (componentName) => {
    return componentMap[componentName] || null;
};
