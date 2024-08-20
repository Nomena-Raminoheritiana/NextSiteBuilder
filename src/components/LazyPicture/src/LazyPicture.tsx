import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import {Box} from "@mui/material";
import InViewHoc from "@/components/InViewHoc";
import {lazyPicture} from "@/components/LazyPicture/src/LazyPicture.stories";

export interface LazyPictureProps {
  children: any;
  [k: string]: any;
}

const LazyPicture: React.FC<LazyPictureProps> = React.memo(({ children, ...otherProps }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const processedChildren = React.useMemo(() => {
    if (inView) return children;
    return children.map((child: any, index: number) => {
      const { src, srcSet, ...props } = child.props;
      const key = `${child.type.toString()}-${index}`;
      return child.props.src ? (
        <child.type {...props} data-src={src} key={key} />
      ) : (
        <child.type {...props} data-srcset={srcSet} key={key} />
      );
    });
  }, [inView, children]);

  const Picture: React.ReactElement = (
    <StyledPicture ref={ref} {...otherProps}>
      <Box data-component-name={'LazyPicture'}>
        {processedChildren}
      </Box>
    </StyledPicture>
  );

  return Picture;
});

const StyledPicture = styled.picture`
  display: inline-block;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  img {
    display: none;
  }

  img[src] {
    display: block;
    width: 100%;
    animation: fade-in 1s ease;
  }
`;

LazyPicture.displayName = 'LazyPicture';


export default LazyPicture;
