import React from 'react';
import { useInView } from 'react-intersection-observer';

interface InViewHocProps {
  className?: string;
  children: React.ReactNode;
}

const InViewHoc: React.FC<InViewHocProps> = React.memo(({ children, className, ...otherProps }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const processedChildren = React.useMemo(() => {
    if (inView) return children;
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>
  }, [inView, children]);

  return <div ref={ref} {...otherProps} className={className}>
    {processedChildren}
  </div>
});

InViewHoc.displayName = 'InViewHoc';

export default InViewHoc;
