import React from 'react';

const componentMap = {
    TextareaForm: () => import('@/builder/src/components/Forms/Modal/TextareaForm.component'),
    DeleteConfirmation: () => import('@/builder/src/components/Forms/Modal/DeleteConfirmation.component'),
    ImageForm: () => import('@/builder/src/components/Forms/Modal/ImageForm.component'),
    HyperlinkForm: () => import('@/builder/src/components/Forms/Modal/HyperlinkForm.component'),
};

export const getComponent = (componentName) => {
    return componentMap[componentName] || null;
};
