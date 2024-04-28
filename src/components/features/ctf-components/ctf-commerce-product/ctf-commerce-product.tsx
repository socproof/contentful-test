import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container } from '@mui/material';

import { CommerceProductFieldsFragment } from './__generated/ctf-commerce-product.generated';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  innerContainer: {
    display: 'grid',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126rem',
    padding: theme.spacing(8, 0, 8),
    gap: theme.spacing(7),

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: theme.spacing(14),
      padding: theme.spacing(19, 0, 19),
    },
  },
  contentContainer: {
    margin: 'auto 0',
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 'initial',
    },
  },
  headline: {
    fontSize: '3rem',
    lineHeight: 1.3,
    fontWeight: 700,
    maxWidth: '60.4rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5rem',
    },
  },
  richText: {
    fontWeight: 400,
    lineHeight: 1.56,
    marginTop: theme.spacing(7),
    '& .MuiTypography-body1': {
      fontSize: '2.5rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '1.8rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(8),
    '& svg.MuiSvgIcon-root': {
      fontSize: 'inherit',
    },
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    order: 0,
    boxShadow: `0px 0px 0px 1px rgba(25, 37, 50, 0.1),
    0px -6px 16px -6px rgba(25, 37, 50, 0.03),
    0px 8px 16px -8px rgba(25, 37, 50, 0.2),
    0px 13px 27px -5px rgba(25, 37, 50, 0.15)`,
    borderRadius: '16px',
    [theme.breakpoints.up('md')]: {
      order: 'initial',
    },
  },
  image: {
    display: 'block',
    margin: 'auto 0',
    maxWidth: '100%',
    borderRadius: '16px',
  },
  imageFull: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  nextImageContainer: {
    width: '100%',
    height: 'auto',
  },
}));

export const CtfCommerceProduct = (props: CommerceProductFieldsFragment) => {
  const {
    sys: { id },
    commercetoolLink,
  } = props;

  const inspectorMode = useContentfulInspectorMode();
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <div className={classes.contentContainer}>
        <div className={classes.innerContainer}>
          <div
            {...inspectorMode({
              entryId: id,
              fieldId: 'commercetoolLink',
            })}
          >
            {commercetoolLink}
          </div>
        </div>
      </div>
    </Container>
  );
};
