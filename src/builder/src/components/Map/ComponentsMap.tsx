import React from 'react';

const componentMap = {
    TextareaForm: () => import('../../components/Forms/TextareaForm.component'),
    DeleteConfirmation: () => import('../../components/Forms/DeleteConfirmation.component')
};

export const getComponent = (componentName) => {
    return componentMap[componentName] || null;
};
